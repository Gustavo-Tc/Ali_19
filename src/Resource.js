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
            button_down: "./sprites/button_down.png"
        };

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
}

export const resources = new Resources();