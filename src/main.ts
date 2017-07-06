import { koi } from './core/koi'

window.onload = function() {
    Main.run();
}

class Main {
    constructor() {

    }

    public static run() {
        const app = koi.runKoi('koi-player');

        PIXI.loader.add('bunny', './res/activities_arrow.png').load(function(loader, resources) {

            const bunny = new PIXI.Sprite(resources.bunny.texture);
            bunny.x = app.pixi.renderer.width / 2;
            bunny.y = app.pixi.renderer.height / 2;
            bunny.anchor.x = 0.5;
            bunny.anchor.y = 0.5;
            app.pixi.stage.addChild(bunny);
            app.pixi.ticker.add(function() {
                bunny.rotation += 0.01;
            });

            const bunny1 = new PIXI.Sprite(resources.bunny.texture);
            bunny1.x = app.pixi.renderer.width / 2;
            bunny1.y = app.pixi.renderer.height;
            bunny1.anchor.x = 0.5;
            bunny1.anchor.y = 0.5;
            app.pixi.stage.addChild(bunny1);

            const bunny2 = new PIXI.Sprite(resources.bunny.texture);
            bunny2.x = app.pixi.renderer.width / 2;
            bunny2.y = 0;
            bunny2.anchor.x = 0.5;
            bunny2.anchor.y = 0.5;
            app.pixi.stage.addChild(bunny2);

            const bunny3 = new PIXI.Sprite(resources.bunny.texture);
            bunny3.x = app.pixi.renderer.width;
            bunny3.y = app.pixi.renderer.height / 2;
            bunny3.anchor.x = 0.5;
            bunny3.anchor.y = 0.5;
            app.pixi.stage.addChild(bunny3);

            const bunny4 = new PIXI.Sprite(resources.bunny.texture);
            bunny4.x = 0;
            bunny4.y = app.pixi.renderer.height / 2;
            bunny4.anchor.x = 0.5;
            bunny4.anchor.y = 0.5;
            app.pixi.stage.addChild(bunny4);
        });
    }
}