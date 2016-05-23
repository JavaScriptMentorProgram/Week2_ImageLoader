import ImageLoader from './ImageLoader.js';

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
var progress = document.getElementById('progress');

const update = (args) =>{
  console.log(`${args[0]} of ${args[1]} complete.`);
  progress.style.width = ((args[0] / args[1])*100).toString()+"%";
  progress.innerHTML = ((args[0] / args[1])*100).toString()+"%";
}

let loader = new ImageLoader();
loader.load(images).then(function(arg){
  console.log(arg);
});
loader.on('progress', update);