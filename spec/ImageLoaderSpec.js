import ImageLoader from "../ImageLoader.js";

describe('ImageLoader', function(){
  var loader = new ImageLoader();
  var images = {
    'vase': './res/vase.jpg',
    'babi':'./res/babi.jpg',
    'abstract': './res/abstract.jpg',
    'wedding':'./res/wedding.jpg',
    'dog':'./res/dog.jpg',
    'cat':'./res/cat.jpg',
    'star': './res/star.jpg',
    'cup': './res/cup.png',
    'icecream': './res/icecream.jpg',
    'bird': './res/bird.jpg'
  }

  describe("should able to load images", function(){
    var argument = null;
    loader.load(images).then(function(arg){
      argument = arg;
    });

    it("Finish load all images",function(){
      expect(argument).toBe('Done');
    });
  });

  describe("should able to show the progress of loading", function(){
    var calledTimes = 0;
    const update = (args) =>{
      calledTimes++;
    }
    loader.on('progress', update);

    it("track loader.on have been called times equal to images number", function(){
      expect(calledTimes).toBe(Object.keys(images).length);
    });
  });

});