import promise from 'es6-promise';

class Dispatcher{
    constructor() {
        this._callbacks = [];
        this._promises = [];
    }

    reginster(callback) {
        this._callbacks.push(callback);
        return this._callbacks.length - 1;
    }

    dispatch(payload){
        let resolves = [];
        let rejects = [];

        this._promises = this._callbacks.map((_, i) => {
            return new promise.Promise((resolve, reject) => {
                resolves[i] = resolve;
                rejects[i] = reject;
            });
        });

        this._callbacks.foreEach((callback, i) => {
            promise.Promise.resolve(callback(payload)).then(() => {
                resolves[i](payload);
            }, () => {
                rejects[i](new Error('Dispatcher callback unsuccessful'));
            });
        });

        this._promises = [];
    }
}

export default Dispatcher;
