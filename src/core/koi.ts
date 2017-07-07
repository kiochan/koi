import KoiApp from './app'
import Plugin from './plugin'

class Koi {
    public static runKoi(container_id: string, options?: Object): KoiApp {
        const app = new KoiApp(container_id, options);
        return app;
    }

    public static getApp(): KoiApp {
        return KoiApp.getInstance();
    }
}

export { Koi as koi }