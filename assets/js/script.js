import Reproductor from "./Reproductor.js"


var video = (() => {
  let asignarPrivada
  asignarPrivada= (url,id) => {
    document.getElementById(id).setAttribute("src", url);
  }
  return {
    asignar: (url,id) => {
      asignarPrivada(url,id);
    }
  };
})();


const musica    = new Reproductor("https://www.youtube.com/embed/Kijfn2bzNDE", "musica"   );
const pelicula  = new Reproductor("https://www.youtube.com/embed/8mZ95Qh8GvY", "peliculas");
const serie     = new Reproductor("https://www.youtube.com/embed/Kijfn2bzNDE", "series"   );

musica.playMultimedia(video)
pelicula.playMultimedia(video)
serie.playMultimedia(video)

pelicula.setInicio(video,500)




