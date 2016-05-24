export default class ImageLoader{
  constructor(){
    this._store = {};
    this._listeners = new Map();
  }

  on(event, callback){
    this._listeners.has(event) || this._listeners.set(event, []) ;
    this._listeners.get(event).push(callback);
    this._listeners.get(event).filter(l => l!== callback);
  }

  emit(event, ...args){
    let listeners = this._listeners.get(event);
    if(listeners && listeners.length){
      listeners.forEach(listeners => {
        listeners(args);
      });
      return true;
    }
    return false;
  }

  load(images){
    return new Promise((resolve, reject) => {
      let total = 0;
      let loaded = 0;
      Object.getOwnPropertyNames(images).forEach((key) => {
        total++;
        let url = images[key];
        let img = new Image();
        img.src = url;
        img.onload = () => {
          loaded++;
          this.emit('progress', loaded, total);
          if(loaded === total){
            resolve('Done');
          }
        }
        img.onerror = () => {
            reject('error');
        }
      });
    });
  }
}

// exports.loader = new ImageLoader();