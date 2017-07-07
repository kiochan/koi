import Hub from '../plugin/hub'
import Plugin from '../plugin'
import Compose from 'koa-compose'
import Middleware from '../middleware'
import Context from '../middleware/context'
import Player from '../player/player'

class KoiApp {
    public pixi: PIXI.Application;
    public hub: Hub;
    public middleware: Middleware;
    public player: Player;

    constructor(container_id: string, options?: Object) {
        KoiApp.m_instance = this;

        this.hub = new Hub();
        this.middleware = new Middleware();
        this.player = new Player();

        this.player.init(this, container_id);
    }

    public plugin(plugin: Plugin): void {
        this.hub.add(plugin);
    }

    public use(type: string, callback: Compose.Middleware<Context>) {
        this.middleware.use(type, callback);
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

export default KoiApp