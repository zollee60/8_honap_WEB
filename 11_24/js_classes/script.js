class Ember{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    toString(){
        return `${this.name} adatai: ${this.height}cm magas és ${this.age} éves.`
    }

    logThis(){
        console.log(this);
    }
}

function doSomething() {
    return this;
}

// Jani objektum
let jani = new Ember("Jani",20,180);
console.log(jani.toString());
jani.logThis();

// Globál
console.log(this);

// Function scope
console.log(doSomething());

