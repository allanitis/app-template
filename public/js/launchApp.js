function App(config) {
    console.log("app_" + config.preloadScripts[0].url);
    console.log("launching app");
    var _app = new fin.desktop.Application(
        {
            name: config.name,
            uuid: config.uuid,
            url: config.url,
            defaultHeight: 800,
            defaultWidth: 1000,
            preloadScripts: [
                {
                    url:
                        "https://allanitis.github.io/webserver-test/javascript.js"
                }
            ],
            autoShow: true,
            defaultTop: 50,
            webSecurity: false
        },
        function() {
            console.log(
                "Hey guys! its me because we successfully launched the app"
            );
            console.log(_app);
            _app.run();
        },
        function(e) {
            console.log("error launching " + e);
        }
    );
}

//"file:///Users/matt/threads/sandpit/app-template/public/js/preloads/preloader.js"
