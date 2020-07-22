// Jawaban Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama.concat(" ", kataKedua).concat(" ", kataKetiga).concat(" ", kataKeempat));
console.log("");
// Jawaban Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var number1 = Number("1");
var number2 = Number("2");
var number3 = Number("4");
var number4 = Number("5");
console.log(number1 + number2 + number3 + number4);
console.log("");

// Jawaban Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);
console.log("");

// Jawaban Soal 4
var nilai = 85;
if (nilai >= 0 && nilai <= 100) {
    if (nilai > 80) {
        console.log("A")
    } else if (nilai > 70 && nilai < 80) {
        console.log("B")
    } else if (nilai > 60 && nilai < 70) {
        console.log("C")
    } else if (nilai > 50 && nilai < 60) {
        console.log("D")
    } else {
        console.log("E")
    }
}
console.log("");

// Jawaban Soal 5
var tanggal = 15;
var bulan = 8;
var tahun = 2000;
switch (bulan) {
    case 1: {
        console.log(tanggal + " Januari " + tahun);
        break;
    }
    case 2: {
        console.log(tanggal + " Februari " + tahun);
        break;
    }
    case 3: {
        console.log(tanggal + " Maret " + tahun);
        break;
    }
    case 4: {
        console.log(tanggal + " April " + tahun);
        break;
    }
    case 5: {
        console.log(tanggal + " Mei " + tahun);
        break;
    }
    case 6: {
        console.log(tanggal + " Juni " + tahun);
        break;
    }
    case 7: {
        console.log(tanggal + " Juli " + tahun);
        break;
    }
    case 8: {
        console.log(tanggal + " Agustus " + tahun);
        break;
    }
    case 9: {
        console.log(tanggal + " September " + tahun);
        break;
    }
    case 10: {
        console.log(tanggal + " Oktober " + tahun);
        break;
    }
    case 11: {
        console.log(tanggal + " November " + tahun);
        break;
    }
    case 12: {
        console.log(tanggal + " Desember " + tahun);
        break;
    }
    default: {
        console.log("Bulan yang Anda masukkan tidak tersedia");
    }
}