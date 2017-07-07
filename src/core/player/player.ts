import KoiApp from '../app/koi-app'

class Player {

    private app: KoiApp;
    private m_width: number = 480;
    private m_height: number = 800;
    private m_container: HTMLElement;

    constructor() {

    }

    public init(app: KoiApp, container_id: string) {
        this.app = app;

        const container = document.getElementById(container_id);
        if (!container) {
            console.error(`cant found container '${container_id}'.`);
            return;
        }
        this.m_container = container;

        PIXI.utils.skipHello();
        this.app.pixi = new PIXI.Application(this.m_width, this.m_height);
        this.m_container.appendChild(this.app.pixi.view);

        this.onResize();
        window.onresize = () => {
            this.onResize();
        }
    }

    private onResize(): void {
        const container = this.m_container;
        const view = this.app.pixi.view;
        const ratio = this.m_width / this.m_height;
        const w = document.body.clientWidth;
        const h = document.body.clientHeight;
        if (w / h > ratio) {
            container.style.top = '0';
            container.style.left = ((w - h * ratio) / 2) + 'px';
            view.style.height = h + 'px';
            view.style.width = h * ratio + 'px';
        } else {
            container.style.top = ((h - w / ratio) / 2) + 'px';
            container.style.left = '0';
            view.style.height = w / ratio + 'px';
            view.style.width = w + 'px';
        }
    }

}

export default Player