let animal = {
    hablar : function () {
        console.log("WUAU");
    }
}

let perro = Object.create(animal);

perro.hablar = function () {
    console.log("WOOF");
}

animal.hablar();
perro.hablar();