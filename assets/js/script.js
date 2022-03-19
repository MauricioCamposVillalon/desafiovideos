document.getElementById("framevideo").style.display = "none";



const btnMusica = document.querySelector('#headingOne');
const btnPelicula = document.querySelector('#headingTwo');
const btnSerie = document.querySelector('#headingThree');
let estado = '';

btnMusica.addEventListener('click', () => {
    estado = '0';
    playMultimedia();
});

btnPelicula.addEventListener('click', () => {
    estado = '1';
    playMultimedia();
});

btnSerie.addEventListener('click', () => {
    estado = '2';
    playMultimedia();
});



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
const pel = new Reproductor('https://www.youtube.com/embed/Z6LXG2TJPKg', 'pelicula');
arregloBuscar.push(pel);
const ser = new Reproductor('https://www.youtube.com/embed/aGy9x29vzxo', 'serie');
arregloBuscar.push(ser);


const funcionPublica = () => {
    const funcionPrivada = () => {
        let tim = arregloBuscar[estado]._url;
        tim += '?start=';
        tim += arregloBuscar[estado].setInicio();
        if (estado === '0') {
            document.getElementById("framevideo").style.display = "block";
            let opc = document.querySelector('#framevideo');
            opc.setAttribute('src', `${tim}`);
        } else if (estado === '1') {
            let opc2 = document.querySelector('#framepeli');
            opc2.setAttribute('src', `${tim}`);
            console.log(tim);

        } else if (estado === '2') {
            let opc3 = document.querySelector('#frameserie');
            opc3.setAttribute('src', `${tim}`);
            console.log(tim);
        }
    }
    return funcionPrivada;
}


const playMultimedia = funcionPublica();











