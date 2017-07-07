import Hub from './hub'

interface Plugin {

    name: string;

    init(hub: Hub);

}

export default Plugin