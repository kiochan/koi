import KoiApp from '../app'

interface Plugin {

    name: string;

    init(app: KoiApp);

}

export default Plugin