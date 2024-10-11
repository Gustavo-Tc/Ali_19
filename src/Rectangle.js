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

    Intercept(rectangle){
        if(this.Left() > rectangle.Left() && this.Left() <= rectangle.Right()
        ||this.Right() > rectangle.Left() && this.Left() <= rectangle.Right()){

            if(rectangle.Top() > this.Top() && rectangle.Top() <= this.Bottom() 
            || rectangle.Bottom() > this.Top() && rectangle.Bottom() <= this.Bottom()){
            return true;
            }else{
                return false;
            }
            
        }
        else{
            return false;
        }
    }
}