import Plugin from './plugin'
import Singleton from '../utils/singleton'

class Hub {

    private plugins: Map<string, Plugin>;

    constructor() {
        this.plugins = new Map<string, Plugin>();
    }

    public add(plugin: Plugin): void {
        const name = plugin.name;
        if (this.plugins.has(name)) {
            console.warn(`plugin "${name}" has been registed duplicately, will be overwritten.`);
        }

        plugin.init(this);
        this.plugins.set(name, plugin);
    }

}

export default Hub