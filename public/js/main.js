// uncomment line below to register offline cache service worker
// navigator.serviceWorker.register('../serviceworker.js');

if (typeof fin !== "undefined") {
    init();
} else {
    document.querySelector("#of-version").innerText =
        "The fin API is not available - you are probably running in a browser.";
}

// the applications config to populate cells
const apps = [
    {
        name: "Chronicle",
        url:
            "https://demo.backstory.chronicle.security/?session_token=DVdgNyBAVM0c5QkpJq4Pqg%3D%3D&warstory=",
        uuid: "chronicle",
        urlLogo:
            "data:image/png;base64,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"
    },
    {
        name: "Github",
        url: "https://github.com",
        uuid: "github",
        urlLogo:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        preloadScripts: [
            {
                url: "http://localhost:8080/javascript.js"
            }
        ]
    },
    {
        name: "Meniga",
        url: "http://emulator.online/snes/super-mario-world/",
        uuid: "super-mario",
        urlLogo: "https://www.bankingtech.com/files/2017/11/Meniga-logo.jpg"
    },
    {
        name: "Ascent",
        url: "http://www.trex-game.skipser.com/",
        uuid: "ascent",
        urlLogo:
            "https://www.ascentregtech.com/wp-content/uploads/2019/01/logo_horizontal_light.png"
    }
];

const loadContentIntoGridTemplate = function loadContent() {
    var temp, name, t, logo, img, i;
    temp = document.getElementsByTagName("template")[0];
    name = temp.content.querySelector("div");
    logo = temp.content.querySelector("img");

    apps.forEach(function(app, i) {
        t = document.importNode(name, true);
        t.textContent = apps[i].name;
        t.addEventListener("click", function(e) {
            console.log(apps);
            console.log("logging: " + i);
            console.log(apps[i]);
            var _app1 = new App(apps[i]);
        });

        img = document.importNode(logo, true);
        img.src = app.urlLogo;
        t.appendChild(img);

        document.getElementsByClassName("app-container")[0].appendChild(t);
    });
};

//once the DOM has loaded and the OpenFin API is ready
async function init() {
    //get a reference to the current Application.
    const app = await fin.Application.getCurrent();
    const win = await fin.Window.getCurrent();

    const ofVersion = document.querySelector("#of-version");
    ofVersion.innerText = await fin.System.getVersion();

    loadContentIntoGridTemplate();

    //Only launch new windows from the main window.
    if (win.identity.name === app.identity.uuid) {
        //subscribing to the run-requested events will allow us to react to secondary launches, clicking on the icon once the Application is running for example.
        //for this app we will  launch a child window the first the user clicks on the desktop.
        app.once("run-requested", async () => {
            await fin.Window.create({
                name: "childWindow",
                url: location.href,
                defaultWidth: 320,
                defaultHeight: 320,
                autoShow: true
            });
        });
    }
}
