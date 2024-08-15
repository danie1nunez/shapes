class Shape{
    constructor(text, textColor, shapeColor){
        this.text= text;
        this.textColor= textColor;
        this.shapeColor= shapeColor;
    }

    settext(newtext){
        this.text= newtext;
    }

    settextcolor(newcolor){
        this.textColor= newcolor;
    }

    setshapeColor(newshapeColor){
        this.shapeColor= newshapeColor;
    }
};

class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);

    }
    render(){
        return ` <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>` 
    }

}
class Square extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);

    }
    render(){
        return ` <svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect width="100%" height="100%" fill="${this.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>` 
    }
}
class Triangle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);

    }
    render(){
        return ` <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <polygon points="100,10 200,190 0,190" fill="${this.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>` 
    }
};

module.exports={Shape, Circle, Square, Triangle};