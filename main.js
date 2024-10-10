//import './style.css'
import { GameLoop } from './src/GameLoop.js';
import { resources } from './src/Resource.js';
import { Sprite } from './src/Sprite.js';
import { Vector2 } from './src/Vector2.js';
import { Input, LEFT } from './src/Input.js';
import { Map } from './src/Map.js';
import { GameObject } from './src/GameObject.js';
import { Hero } from './src/Objects/Hero/Hero.js';


const canvas = document.querySelector("#game-canvas");
//const canvas = document.getElementById("#game-canvas");
const ctx = canvas.getContext("2d");

const mainScene = new GameObject(new Vector2(0,0))

const skySprite = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(320,180)
})
//mainScene.addChild(skySprite);

const groundSprite = new Sprite({
    resource: resources.images.map,
    frameSize: new Vector2(320,180)
})
mainScene.addChild(groundSprite);

const shadowSprite = new Sprite({
    resource: resources.images.shadow,
    frameSize: new Vector2(32, 32)
})

const input = new Input();
const map = new Map();


const hero = new Hero(96, 96, input, map);
mainScene.addChild(hero);



const update = (delta) => {
    mainScene.children.forEach(children => {
        children.step(delta);
    });
    
}



const draw = () => {
    mainScene.draw(ctx,0,0);
}


const gameLoop = new GameLoop(update, draw);
gameLoop.start();