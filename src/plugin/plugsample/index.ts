import KoiApp from '../../core/app'
import Plugin from '../../core/plugin'

class Plugsample implements Plugin {
    public name: string = 'plugsample';

    constructor() {

    }

    public init(app: KoiApp): void {
        app.use('basic', async (ctx, next) => {
            console.log('Plugsample on base begin');
            await next();
            console.log('Plugsample on base end');
        });
    }
}

export default Plugsample;