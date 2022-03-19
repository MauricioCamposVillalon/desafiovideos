export default class Multimedia {
    constructor (url){
        this._url = url;
    }
    geturl(){
        return this._url;
    }
    setInicio(){
        alert('“Este método es para realizar un cambio en la URL del video”.');
    }
}