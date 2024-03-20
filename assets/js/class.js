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

    static Rugir(audio){
        audio.src = "assets/sounds/Rugido.mp3"
        audio.setAttribute("autoplay", "")
    }
}
export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    static Aullar(audio){
        audio.src = "assets/sounds/Aullido.mp3"
        audio.setAttribute("autoplay", "")
    }
}
export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    static Gruñir(audio){
        audio.src = "assets/sounds/Gru単ido.mp3"
        audio.setAttribute("autoplay", "")
    }
}
export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    static Sisear(audio){
        audio.src = "assets/sounds/Siseo.mp3"
        audio.setAttribute("autoplay", "")
    }
}
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    static Chillar(audio){
        audio.src = "assets/sounds/Chillido.mp3"
        audio.setAttribute("autoplay", "")
    }
}
