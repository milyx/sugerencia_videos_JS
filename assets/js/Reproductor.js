import Multimedia from "./Multimedia.js";


export default class Reproductor extends Multimedia {

    constructor(url,id) {
        super(url);
        this._id = () => id;
    }
    setInicio(video,inicio){
      console.log('setInicio Reproductor')
      video.asignar(`${this._url()}?start=${inicio}`,this._id())
    }
    playMultimedia(video){
      console.log(`play Multimedia ${this._url()}`)
      video.asignar(this._url(),this._id())
    }
}