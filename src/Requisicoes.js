class Requisicoes {
    constructor() {
        this.baseURL = 'https://httpbin.org/';
    }

    async get() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this.baseURL + 'get');

            xhr.onloadend = (callback) => {
                if (callback.type === 'loadend') {
                    resolve(callback);
                }
            };

            xhr.onerror = (error) => {
                reject(error);
            };

            xhr.send();
        });
    }
}
