export class Rectangle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    Left(){
        return this.x;
    }
    Right(){
        return this.x + this.width;
    }
    Top(){
        return this.y;
    }
    Bottom(){
        return this.y + this.height;
    }

    Intercept(rectangle) {
        return this.x <= (rectangle.x + rectangle.width) && (this.x + this.width) >= rectangle.x &&
               this.y <= (rectangle.y + rectangle.height) && (this.y + this.height) >= rectangle.y;
    }

    Offset(x = 0,y = 0){
        return new Rectangle(this.x + x, this.y + y, this.width, this.height);
    }
}