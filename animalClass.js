class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name+'makes a noise');
    }
}

class Dogs extends Animal{
    speak(){
        super.speak();
        console.log(this.name+' barks');
    }
}
class Cats extends Animal{
    speak(){
        super.speak();
        console.log(this.name+' mews');
    }
}
class Bears extends Animal{
    speak(){
        super.speak();
        console.log(this.name+' murr');
    }
}

let dog = new Dogs('Rex');
let cat= new Cats("Mirri");
let bear= new Bears("Nalle");
dog.speak();
cat.speak();
bear.speak();