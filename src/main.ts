import { koi } from './core/koi'
import Plugsample from './plugin/plugsample'

window.onload = function() {
    Main.run();
}

class Main {
    constructor() {

    }

    public static run() {
        const app = koi.runKoi('koi-player');

        app.plugin(new Plugsample());

        const t = this;
        PIXI.loader.add('mark', './res/activities_arrow.png').load((loader, resources) => {

            const mark = new PIXI.Sprite(resources.mark.texture);
            mark.x = app.pixi.renderer.width / 2;
            mark.y = app.pixi.renderer.height / 2;
            mark.anchor.x = 0.5;
            mark.anchor.y = 0.5;
            app.pixi.stage.addChild(mark);
            app.pixi.ticker.add(() => {
                if (mark.x > app.pixi.renderer.width / 2) {
                    mark.x -= 10;
                } else {
                    mark.x += 10;
                }

                if (mark.y > app.pixi.renderer.height / 2) {
                    mark.y -= 10;
                } else {
                    mark.y += 10;
                }
            })
        });
    }
}