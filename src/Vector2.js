export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    equals(vector2){
        if(this.x === vector2.x && this.y === vector2.y){
            return true;
        }else{
            return false;
        }
    }

    add(vector2){
        this.x += vector2.x;
        this.y += vector2.y;
    }

    multiply(multy){
        return new Vector2(this.x * multy, this.y * multy);
    }

    divide(scalar) {
        return new Vector2(this.x / scalar, this.y / scalar);
    };

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    normalizedSQRT(){
        return this.divide(this.magnitude());
    }

    // normalized(){
    //     if(this.x != 0 && this.y != 0){
    //         return new Vector2(this.x * 0.70, this.y * 0.70);
    //     }
    //     else return new Vector2(this.x,this.y);
    // }

    normalized(){
        if(this.x != 0 && this.y != 0){
            return new Vector2(this.x,this.y);
        }
        else return new Vector2(this.x * 2,this.y * 2);
    }
}