var readBooks = require('./callback.js')

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
    },
    {
        name: 'komik',
        timeSpent: 1000
    }
]

// Jawaban Soal 1
readBooks(10000, books[0], function (waktu) {
    if (waktu !== 0) {
        readBooks(waktu, books[1], function (waktu) {
            if (waktu !== 0) {
                readBooks(waktu, books[2], function (waktu) {
                    if (waktu !== 0) {
                        readBooks(waktu, books[3], function (waktu) {

                        })
                    }
                })
            }
        })
    }
})