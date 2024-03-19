class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
    constructor (nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get getNombre(){
        return this.#nombre;
    }
    get getEdad(){
        return this.#edad;
    }
    get getImg(){
        return this.#img;
    }
    get getSonido(){
        return this.#sonido;
    }
    set setNombre(nombre){
        this.#nombre = nombre;
    }
    set setEdad(edad){
        this.#edad = edad;
    }
    set setImg(img){
        this.#img = img;
    }
    set setComentario(comentario){
        this.#comentarios = comentario;
    }
    set setSonido(sonido){
        this.#sonido = sonido;
    }
}

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Rugir(){
        console.log('Emite un sonido de animal');
    }
}
export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar(){
        console.log('Emite un sonido de animal');
    }
}
export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Gruñir(){
        console.log('Emite un sonido de animal');
    }
}
export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisear(){
        console.log('Emite un sonido de animal');
    }
}
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar(){
        console.log('Emite un sonido de animal');
    }
}
