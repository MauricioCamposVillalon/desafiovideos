class Multimedia {
    constructor(url) {
        this._url = url;
    }
    geturl() {
        return this._url;
    }
    setInicio() {
        alert('“Este método es para realizar un cambio en la URL del video”.');
    }

}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    setInicio() {
        super.setInicio();
        let nuevoIni = prompt('Indique cuando inciar video');
        return nuevoIni;
    }
}


const arregloBuscar = [];
const mus = new Reproductor('https://www.youtube.com/embed/naLB5aQmWco', 'musica');
arregloBuscar.push(mus);
const pel = new Reproductor('https://www.youtube.com/watch?v=pIhlDew9qbs', 'pelicula');
arregloBuscar.push(pel);
const ser = new Reproductor('https://www.youtube.com/embed/aGy9x29vzxo', 'serie');
arregloBuscar.push(ser);

const funcionPublica = () => {
    const funcionPrivada = () => {

        let tim = arregloBuscar[0]._url;
        tim += '?start=';
        tim += arregloBuscar[0].setInicio();
        //console.log(arregloBuscar[0]._url,arregloBuscar[0]._id,tim);
        const musica = document.querySelector('#framevideo');
        console.log(tim)
        musica.setAttribute('src', `${tim}`);
        console.log(hola);
    }
    return funcionPrivada;
}



const playMultimedia = funcionPublica();



playMultimedia();






