/*************************** Version One ********************************/

class ImageLoader{
  constructor(){
    this._store = {};
  }

  cb(loadedNumber){
    console.log(`loaded $loadedNumber images` );
  }

  load(images){
    let total = 0;
    let loaded = 0;
    Object.getOwnPropertyNames(images).forEach((key) => {
      total++;
      let url = images[key];
      let img = new Image();
      img.src = url;
      img.onload = () => {
        loaded++;
        this._store[key] = img;
        console.log(`${loaded} of ${total} complete`);

        if(total === loaded){
          console.log(`${total} and ${loaded}`);
        }
      }

      img.onerror = (e)=>{
        // console.log(`$total and $loaded`);
      }
    });
  }
}

const loader = new ImageLoader();

loader.load({
  'vase': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chinese_vase.jpg',
  'babi':'http://images6.fanpop.com/image/photos/33500000/BABI-justin-bieber-33561812-360-640.jpg'
  }
);