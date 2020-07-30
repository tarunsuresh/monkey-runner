var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"7mtpPRcKWGzZcGs25PsVTUW1jMKcSN4B","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"E3KEm3ji8amhRiM.q0has4KQZu7XM4gw","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"Uv6AtGf6w4d9Ibe7zdaUdNzzV2o6EljM","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var monkey1 = createSprite(68,254);
monkey1.setAnimation("monkey");
monkey1.scale = 0.25;
monkey1.velocityY = 2;

var stone1 =  createSprite(500,350);
      stone1.setAnimation( "Stone");
      stone1.scale = 0.1;
      stone1.velocityX = -11;

var banana1  = createSprite(500,randomNumber(218,280));
      banana1.setAnimation("Banana");
      banana1.scale = 0.1;
      banana1.velocityX = -9;
  
  var score = 0;





function draw() {
  
  createEdgeSprites();
  
  monkey1.collide(bottomEdge);
  
  
  if(monkey1.y === 323.25){
    if(keyDown( "space")){
      monkey1.velocityY = -20;
    }
  }
  
  if(monkey1.isTouching(banana1)){
    
     banana1 = createSprite(500,randomNumber(218,280));
      banana1.setAnimation("Banana");
      banana1.scale = 0.1;
      banana1.velocityX = -9;
      score++;
      banana1.visible = true;
    
  }
     
     if(monkey1.isTouching(stone1)){
       monkey1.velocityX = 0;
       monkey1.velocityY = 15;
       banana1.velocityX = 0;
       stone1.velocityX = 0;
     }
 
   
   if(stone1.isTouching(leftEdge)){
     stone1 =  createSprite(randomNumber(550,600),350);
      stone1.setAnimation( "Stone");
      stone1.scale = 0.15;
      stone1.velocityX = -11;

     }
     
  if(banana1.isTouching(leftEdge)){
     banana1 = createSprite(500,randomNumber(218,280));
      banana1.setAnimation("Banana");
      banana1.scale = 0.1;
      banana1.velocityX = -9;
      banana1.visible = false;
  
  }
  
 
   if(monkey1.y<230){
   console.log(monkey1.y);
   }
   
  background(255);
  
  monkey1.velocityY++;
  
  drawSprites();
  
  textSize(20);
  text("score :"+score,275,32);
  
    
  
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
