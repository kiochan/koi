class Singleton {

    private static objs: Map<any, any> = new Map<any, any>();

    public static has<U>(target: { new (): U }): boolean {
        return Singleton.objs.has(target);
    }

    public static get<U>(target: { new (): U }): U {
        if (!Singleton.objs.has(target)) {
            Singleton.objs.set(target, new target());
        }
        return Singleton.objs.get(target);
    }

    public static delete<U>(target: { new (): U }) {
        if (Singleton.objs.has(target)) {
            Singleton.objs.delete(target);
        }
    }

    public static clear() {
        Singleton.objs.clear();
    }

}

export default Singleton