//import './style.css'
import { GameLoop } from './src/GameLoop.js';
import { resources } from './src/Resource.js';
import { Sprite } from './src/Sprite.js';
import { Vector2 } from './src/Vector2.js';
import { Input, LEFT } from './src/Input.js';
import { gridCells } from './src/helpers/grid.js';
import { Map } from './src/Map.js';
import { GameObject } from './src/GameObject.js';


const canvas = document.querySelector("#game-canvas");
//const canvas = document.getElementById("#game-canvas");
const ctx = canvas.getContext("2d");

const mainScene = new GameObject(new Vector2(0,0))

const skySprite = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(320,180)
})
mainScene.addChild(skySprite);

const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(320,180)
})
mainScene.addChild(groundSprite);

const shadowSprite = new Sprite({
    resource: resources.images.shadow,
    frameSize: new Vector2(32, 32)
})

const hero = new Sprite({
    resource: resources.images.hero,
    frameSize: new Vector2(32,32),
    hFrames: 3,
    vFrames: 8,
    frame: 1,
    position: new Vector2(gridCells(6), gridCells(5))
})



const input = new Input();

const map = new Map();

const update = () => {

    if( input.lastDirection === "DOWN") {
        //hero.position.y += 1;

        hero.frame = 0;
    }

    if( input.lastDirection === "UP") {
        //hero.position.y -= 1;
        
        hero.frame = 6;
    }

    if( input.lastDirection === "LEFT") {
        //hero.position.x -= 1;
        
        hero.frame = 9;
    }

    if( input.lastDirection === "RIGHT") {
        //hero.position.x += 1;
        
        hero.frame = 3;
    }

    hero.position.add(input.direction);

    if(hero.getMapPos().equals(new Vector2(3,3))){
        console.log("ACHOOOU!");
    }

    //console.log(hero.getMapPos());
}



const draw = () => {
    mainScene.draw(ctx,0,0);
    
    // skySprite.drawImage(ctx,0,0);
    // groundSprite.drawImage(ctx,0,0);

    // const heroOffset = new Vector2(-8, -21);
    // shadowSprite.drawImage(ctx, hero.position.x + heroOffset.x, hero.position.y + heroOffset.y);
    // hero.drawImage(ctx, hero.position.x + heroOffset.x, hero.position.y + heroOffset.y)
}


const gameLoop = new GameLoop(update, draw);
gameLoop.start();