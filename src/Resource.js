class Resources {
    constructor(){
        // Tudo que iremos baixar
        this.toLoad = {
            sky: "./sprites/sky.png",
            ground: "./sprites/ground.png",
            hero: "./sprites/hero-sheet.png",
            shadow: "./sprites/shadow.png",
            map: "./sprites/map.png",
            button_up: "./sprites/button_up.png",
            button_down: "./sprites/button_down.png",

            button_red_up: "./sprites/button_red_up.png",
            button_red_down: "./sprites/button_red_down.png",
            
        };

        this.bgm = {
            bgm_01: new Audio("./audio/bgm/01.mp3")
            
        }

        this.sfx = {
           sfx_clear: new Audio("./audio/sfx/sfx_clear.mp3"),
           sfx_clear2: new Audio("./audio/sfx/sfx_clear.mp3")
          }

        Object.keys(this.sfx).forEach(key => {
            this.sfx[key].loop = false;
        })
        
        
        //Um depósito das imagens
        this.images = {};

        //Carregando todas as imagens
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image;
            img.src = this.toLoad[key];
            this.images[key] = {
              image: img,
              isLoaded: false
            }
            img.onload = () => {
              this.images[key].isLoaded = true;
            }
          })
    }

    playBGM(bgm, volume = .5, loop = true){
      this.bgm[bgm].volume = volume;
      this.bgm[bgm].loop = loop;
      this.bgm[bgm].play();

       
    }

    playSFX(sfx, volume = .5, loop = false){
      this.sfx[sfx].volume = volume;
      this.sfx[sfx].loop = loop;
      this.sfx[sfx].play();
    }
}


export const resources = new Resources();