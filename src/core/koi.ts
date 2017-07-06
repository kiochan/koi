export { Koi as koi }

class Koi {
    public static runKoi(container_id: string): KoiApp {
        const app = new KoiApp(container_id);
        return app;
    }

    public static getApp(): KoiApp {
        return KoiApp.getInstance();
    }

    public static plugin(plugin: string /* plugin: Plugin */): void {
        console.log('plugin registed: ' + plugin);
    }
}

class KoiApp {
    public pixi: PIXI.Application;
    private m_width: number = 480;
    private m_height: number = 800;
    private m_container: HTMLElement;

    constructor(container_id: string) {
        KoiApp.m_instance = this;
        const container = document.getElementById(container_id);
        if (!container) {
            console.error(`cant found container '${container_id}'.`);
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
        const view = this.pixi.view;
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

    // region static functions
    private static m_instance: KoiApp;
    public static getInstance(): KoiApp {
        if (!this.m_instance) {
            console.error('Koi is not initialized.');
            return null;
        }
        return this.m_instance;
    }
    // endregion
}
