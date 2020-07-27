// Jawaban Soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var arrayDaftarPesertaObj = {
    nama: "Asep",
    "jenis kelamin": "laki-laki",
    hobby: "baca buku",
    "tahun lahir": 1992
}
console.log("nama : " + arrayDaftarPesertaObj.nama);
console.log("jenis kelamin : " + arrayDaftarPesertaObj["jenis kelamin"]);
console.log("hobby : " + arrayDaftarPesertaObj.hobby);
console.log("tahun lahir : " + arrayDaftarPesertaObj["tahun lahir"]);
console.log("");

// Jawaban Soal 2
var buah = [{
    nama: "Strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000
}, {
    nama: "Jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000
}, {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000
}, {
    nama: "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000
}]
console.log(buah[0]);
console.log("");

// Jawaban Soal 3
var dataFilm = [];

function isDataFilm(data) {
    dataFilm.push(data);

}
var iniData = {
    nama: "Dilan 1991",
    durasi: "2 Jam",
    genre: "Romance",
    tahun: 2019
}
isDataFilm(iniData);
console.log(dataFilm);

// Jawaban Soal 4
// Release 0
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get nmAnimal() {
        return this.name;
    }
    get lgAnimal() {
        return this.legs;
    }
    get cbAnimal() {
        return this.cold_blooded;
    }

}
var sheep = new Animal("shaun");
console.log(sheep.nmAnimal);
console.log(sheep.lgAnimal);
console.log(sheep.cbAnimal);
console.log("");
// Release 1
class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
    get nm() {
        return this.name;
    }
    get lg() {
        return this.legs;
    }
    yell() {
        return "Auooo";
    }
}
class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    get nmf() {
        return this.name;
    }
    jump() {
        return "hop hop";
    }
}
var sungokong = new Ape("kera sakti");
console.log(sungokong.nm);
console.log(sungokong.lg);
console.log(sungokong.yell());

console.log("")

var kodok = new Frog("buduk");
console.log(kodok.nmf);
console.log(kodok.lgAnimal)
console.log(kodok.jump());
console.log("");

// Jawaban Soal 5
class Clock {
    constructor({
        template
    }) {
        this.render = () => {
            var date = new Date();

            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        };
    }
    get initemplate() {
        return this.template;
    }
    set initemplate(x) {
        return this.template = x;
    }
    stop() {
        clearInterval(timer);
    };
    start() {
        var timer;
        this.render();
        timer = setInterval(() => this.render(), 1000);
    };
}
var clock = new Clock({
    template: 'h:m:s'
});
clock.start();