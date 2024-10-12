//import './style.css'
import { GameLoop } from './src/GameLoop.js';
import { resources } from './src/Resource.js';
import { Sprite } from './src/Sprite.js';
import { Vector2 } from './src/Vector2.js';
import { Input, LEFT } from './src/Input.js';
import { Map } from './src/Map.js';
import { GameObject } from './src/GameObject.js';
import { Hero } from './src/Objects/Hero/Hero.js';
import { Button_Single } from './src/Objects/Button_single.js';
import { KeyHandler } from './src/Objects/KeyHandler.js';
import { Button_Hold } from './src/Objects/Button_hold.js';
import { Room } from './src/Room.js';
import { level_1 } from './src/Rooms/room_1.js';
import { level_2 } from './src/Rooms/room_2.js';


const canvas = document.querySelector("#game-canvas");
//const canvas = document.getElementById("#game-canvas");
const ctx = canvas.getContext("2d");

const mainScene = new GameObject(new Vector2(0,0))

let activeRoom = new Room();

const input = new Input();

const originalUrlLevel = document.getElementsByClassName("level")[0].id;
console.log(originalUrlLevel);
if(originalUrlLevel === "level_1"){
 activeRoom = new level_1;
}
if(originalUrlLevel === "level_2"){
    activeRoom = new level_2;
}

const hero = new Hero(activeRoom.playerStartPosition.x, activeRoom.playerStartPosition.y, input, activeRoom.map_collisions, activeRoom.keyHandler);
mainScene.addChild(hero);


const update = (delta) => {
    mainScene.children.forEach(children => {
        children.step(delta);
    });
    
}



const draw = () => {
    
    activeRoom.drawMap(ctx,0,0);
    mainScene.draw(ctx,0,0);
}


const gameLoop = new GameLoop(update, draw);
gameLoop.start();