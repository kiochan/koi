export { koi };

namespace koi {
    export function run(container_id: string) {
        const app = new Koi(container_id);
        return app;
    }

    export class Koi {
        public pixi: PIXI.Application;

        private m_width: number = 1920;
        private m_height: number = 1080;

        private m_container;

        constructor(container_id: string) {
            const container = document.getElementById(container_id);
            if (!container) {
                console.error(`cant found container "${container_id}".`);
                return;
            }

            PIXI.utils.skipHello();
            this.pixi = new PIXI.Application(this.m_width, this.m_height);
            container.appendChild(this.pixi.view);

            this.m_container = container;
            this.onResize();

            window.onresize = () => {
                this.onResize();
            }
        }

        public onResize(): void {
            const container = this.m_container;
            var ratio = this.m_width / this.m_height;
            var w = document.body.clientWidth;
            var h = document.body.clientHeight;
            if (w / h > ratio) {
                container.style.top = "0";
                container.style.left = ((w - h * ratio) / 2) + "px";
                this.pixi.view.style.height = h + "px";
                this.pixi.view.style.width = h * ratio + "px";
            } else {
                container.style.top = ((h - w / ratio) / 2) + "px";
                container.style.left = "0";
                this.pixi.view.style.height = w / ratio + "px";
                this.pixi.view.style.width = w + "px";
            }
        }
    }
}