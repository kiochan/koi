import * as Compose from 'koa-compose'
import Context from './context'

class Middleware {

    private mids: Map<string, Compose.Middleware<Context>[]>;

    constructor() {
        this.mids = new Map();
    }

    public use(type: string, fn: Compose.Middleware<Context>): void {
        if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
        if (!this.mids.has(type)) {
            this.mids.set(type, []);
        }

        this.mids.get(type).push(fn);
    }

    public unuse(type: string, fn: Compose.Middleware<Context>): void {
        const fns = this.mids.get(type);

        if (!fns) {
            return;
        }

        for (let i = 0; i < fns.length; i++) {
            if (fns[i] == fn) {
                fns.splice(i, 1);
            }
        }
    }

    public call(type: string, ctx: Object, fn: Compose.Middleware<Context>): void {
        this.compose(type, fn).call(this, ctx);
    }

    public compose(type: string, fn: Compose.Middleware<Context>): Function {
        const fns = this.mids.get(type);

        if (!fns) {
            fn.call(this);
            return;
        }

        const re: Compose.Middleware<Context>[] = [];
        for (let i = fns.length - 1; i >= 0; i--) {
            re.push(fns[i]);
        }
        re.push(fn);

        return Compose(re);
    }

}

export default Middleware