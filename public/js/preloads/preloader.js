document.addEventListener("DOMContentLoaded", function() {
    init();
});

async function yes() {
    console.log("were finally doing our thing");
}

function init() {
    alert("hey we have a preload - awesome!");
    console.log("oh hey its the preload here");
}

console.log("hey we are from the preloads");
alert("oh hey");
