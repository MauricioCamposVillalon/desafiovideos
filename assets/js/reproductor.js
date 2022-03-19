import Multimedia from "./multimedia.js";

//document.getElementById("framevideo").style.display = "none";

//const btnMusica = document.querySelector('#headingOne');



/*btnMusica.addEventListener('click', () => {
    document.getElementById("framevideo").style.display = "block";
    reproduccion();
});*/




 class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;

    }
    playMultimedia() {
        console.log('hola');
     
    }
    setInicio() {
        super.setInicio();
        //let nuevoIni = prompt('Indique la duracion del video');
       // return nuevoIni;
    }

   

}




/*const reproduccion = () => {
    // musica.setAttribute('src','https://www.youtube.com/embed/naLB5aQmWco');
}
   const funcionPublica = () => {
            const funcionPrivada = () => {
                const mus = new Reproductor('https://www.youtube.com/embed/naLB5aQmWco', 'musica');
                arregloBuscar.push(mus);
                const pel = new Reproductor('https://www.youtube.com/watch?v=pIhlDew9qbs', 'pelicula');
                arregloBuscar.push(pel);
                const ser = new Reproductor('https://www.youtube.com/embed/aGy9x29vzxo', 'serie');
                arregloBuscar.push(ser);
                let tim = arregloBuscar[0]._url;
                tim += '?start=';
                tim += arregloBuscar[0].setInicio();
                //console.log(arregloBuscar[0]._url,arregloBuscar[0]._id,tim);
                const musica = document.querySelector('#framevideo');
                console.log(tim)
                musica.setAttribute('src', `${tim}`);
            }
            return funcionPrivada;
        }







*/





/* const musica = document.querySelector('#musica');
        musica.setAttribute('scr',`https://www.youtube.com/watch?v=pAgnJDJN4VA?start=${tiempo}`)
        const peliculas = document.querySelector('#peliculas');
        peliculas.setAttribute('scr',`https://www.youtube.com/watch?v=pIhlDew9qbs?start=${tiempo}`)
        const serie = document.querySelector('#series');
        serie.setAttribute('scr',`https://www.youtube.com/watch?v=aGy9x29vzxo&list=PLfwSiZCRoPCRYY-is6FG1NgKcI2sN-POG&index=86?start=${tiempo}`)  */
