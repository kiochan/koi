import Plugin from './plugin'
import KoiApp from '../app'

class Hub {

    private app: KoiApp;
    private plugins: Map<string, Plugin>;

    constructor(app: KoiApp) {
        this.app = app;
        this.plugins = new Map<string, Plugin>();
    }

    public add(plugin: Plugin): void {
        const name = plugin.name;
        if (this.plugins.has(name)) {
            console.warn(`plugin "${name}" has been registed duplicately, will be overwritten.`);
        }

        plugin.init(this.app);
        this.plugins.set(name, plugin);
    }

    public get(name: string): Plugin {
        return this.plugins.get(name);
    }

}

export default Hub