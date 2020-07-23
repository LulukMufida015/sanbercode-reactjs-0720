// Jawaban Soal 1
// Looping Pertama
console.log("LOOPING PERTAMA");
var a = 2;
while (a <= 20) {
    console.log(a + " - I love coding");
    a += 2;
}
// Looping Kedua
console.log("LOOPING KEDUA");
var b = 20
while (b >= 2) {
    console.log(b + " - I will become a frontend developer");
    b -= 2;
}
console.log("");

// Jawaban Soal 2
for (var kata = 1; kata <= 20; kata++) {
    if (kata % 2 == 0) {
        console.log(kata + " - Berkualitas");
    } else if (kata % 3 == 0 && kata % 2 == 1) {
        console.log(kata + " - I Love Coding");
    } else if (kata % 2 == 1) {
        console.log(kata + " - Santai");
    }
}

console.log("");

// Jawaban Soal 3
for (var i = 1; i <= 7; i++) {
    let a = "";
    for (var j = 1; j <= i; j++) {
        a = a + "#";
    }
    console.log(a);
}
console.log("");

// Jawaban Soal 4
var kalimat = "saya sangat senang belajar javascript";
var berubah = kalimat.split(" ");
console.log(berubah);
console.log("");

// Jawaban Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (var i = 0; i < daftarBuah.length; i++) {
    console.log(daftarBuah[i]);
}