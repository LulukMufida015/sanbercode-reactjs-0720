// Jawaban Soal 1
function halo() {
    return "Halo Sanbers!"
}
console.log(halo());
console.log("");

// Jawaban Soal 2
function kalikan(angka1, angka2) {
    return angka1 * angka2;
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);
console.log("");

// Jawaban Soal 3
function introduce(nm, um, al, hob) {
    return "Nama saya " + nm + ", umur saya " + um + " tahun, alamat saya di " + al + ", dan saya punya hobby yaitu " + hob;
}
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);