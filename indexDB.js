// IndexedDB
var requestDB, db, appsObjectStore;
var indexedDbName = "MyIndexedDB";
var indexedDbVersion = 1;
const theData = [{
        id: "1",
        name: "Pokemon Go",
        website: "https://pokemongo.com"
    },
    {
        id: "2",
        name: "Pokedex",
        website: "https://pokedex.com"
    }, {
        id: "3",
        name: "Facebook",
        website: "https://facebook.com"
    }
];
if (!indexedDB) {
    console.log("Your browser doesn't support indexedDB..");
} else {
    console.log("IndexedDB available!")
}
// IndexedDB, open for store data..
requestDB = indexedDB.open(indexedDbName, indexedDbVersion);
requestDB.onerror = function(event) {
    console.log('Error indexedDB', event);
};
requestDB.onupgradeneeded = function(event) {
    console.log('Actualizando indexedDB');
    db = event.target.result;
    var objectStore = db.createObjectStore("apps", {
        keyPath: "id"
    });
    objectStore.createIndex("name_indexx", "name", {
        unique: false
    });
    objectStore.createIndex("website_index", "website", {
        unique: true
    });
    objectStore.transaction.oncomplete = function(event) {
        appsObjectStore = db.transaction("apps", "readwrite").objectStore("apps");
        for (var i in theData) {
            appsObjectStore.add(theData[i]);
        }
    }
};