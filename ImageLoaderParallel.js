class ImageLoader{
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
      let total = 0;
      let loaded = 0;
      Object.getOwnPropertyNames(images).forEach((key) => {
        total++;
        let promise = new Promise((resolve, reject) =>{
          let url = images[key];
          let img = new Image();
          img.src = url;
          img.onload = () => {
            resolve(key);
          }
          img.onerror = () => {
          }
        });
        promise.then((result) => {
          loaded++;
          // console.log(`${result} loaded, ${loaded} of ${total} complete`);
          this.emit('progress', loaded, total);
        });
      });
  }
}

const images = {
  'vase': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chinese_vase.jpg',
  'babi':'http://images6.fanpop.com/image/photos/33500000/BABI-justin-bieber-33561812-360-640.jpg',
  'abstract': 'http://i.telegraph.co.uk/multimedia/archive/03589/Wellcome_Image_Awa_3589699k.jpg',
  'wedding':'http://2.bp.blogspot.com/-pD5iHpJSRKo/Vi5Y8ZuKMVI/AAAAAAACAUA/wuJ3dKNxqbM/s1600/6815211-wedding-background.jpg',
  'dog':'http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg',
  'cat':'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
  'star': 'http://www.space.com/images/i/000/000/143/original/h_whitedwarf_02.jpg?interpolation=lanczos-none&fit=around%7C300:200&crop=300:200;*,*',
  'cup': 'https://pixabay.com/static/uploads/photo/2012/04/13/19/18/cup-33338_960_720.png',
  'icecream': 'http://www.americasdairyland.com/assets/images/EWC/Ice-Cream-Hdr.jpg',
  'bird': 'http://pic3.nipic.com/20090618/240816_131451019_2.jpg'
}

const update = (args) =>{
  console.log(`${args[0]} of ${args[1]} complete.`);
}

const loader = new ImageLoader();
loader.load(images);
loader.on('progress', update);


