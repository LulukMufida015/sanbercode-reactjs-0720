var readBooksPromise = require('./promise.js')

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
]

// Jawaban Soal 2
function iniPromise() {
    readBooksPromise(10000, books[0]).then(function (membaca) {
            console.log(membaca)
            readBooksPromise(membaca, books[1]).then(function (membaca) {
                    console.log(membaca)
                    readBooksPromise(membaca, books[2]).then(function (membaca) {
                            console.log(membaca)
                        })
                        .catch(function (finish) {
                            console.log(finish)
                        })
                })
                .catch(function (finish) {
                    console.log(finish)
                })
        })
        .catch(function (finish) {
            console.log(finish)
        })
}
iniPromise()