// Jawaban Soal 1
const phi = 3.14;
var luasLingkaran = (r) => {
    return phi * r * r;
}
console.log("Luas Lingkaran = " + luasLingkaran(10))

var kelilingLingkaran = (d) => {
    return phi * d;
}
console.log("Keliling lingkaran = " + kelilingLingkaran(25))
console.log("")

// Jawaban Soal 2
var tambahKata = () => {
    const a = 'saya'
    const b = 'adalah'
    const c = 'seorang'
    const d = 'frontend'
    const e = 'developer'
    const gabung = `${a} ${b} ${c} ${d} ${e}`
    return gabung
}
let kalimat = tambahKata();
console.log(kalimat)
console.log("")

// Jawaban Soal 3
class Book {
    constructor(name) {
        this.name = name
        this.totalPage = "100 Halaman"
        this.price = 15000
    }
    get ininm() {
        return this.name
    }
    get initp() {
        return this.totalPage
    }
    get inipr() {
        return this.price
    }
}
var buku = new Book("Matematika")
console.log("name : " + buku.ininm)
console.log("total page : " + buku.initp)
console.log("price : " + buku.inipr)
console.log("")

class Komik extends Book {
    constructor(name) {
        super(name)
        this.isColorful = true
        this.price = 21000
    }
    get nmkomik() {
        return this.name
    }
    get color() {
        return this.isColorful
    }
    get prkommik() {
        return this.price
    }
}
var bukuKomik = new Komik("Sincan")
console.log("name : " + bukuKomik.nmkomik)
console.log("total page : " + bukuKomik.initp)
console.log("is colorful : " + bukuKomik.color)
console.log("price : " + bukuKomik.prkommik)