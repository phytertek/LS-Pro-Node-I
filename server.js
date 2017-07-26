const express = require('express')

const app = express()

app.get('/name', (req, res) => {
    res.send('Phytertek')
})

app.get('/friends', (req, res) => {
    res.send(['Bradley', 'Bob', 'Peter', 'Ziggy'])
})

app.get('/favorite-film', (req, res) => {
    res.send({
        title: 'Hackers',
        characters: [{
                playedBy: 'Johnny Lee Miller',
                character: 'ZeroCool / CrashOverride'
            },
            {
                playedBy: 'Angelina Jolie',
                character: 'Acid Burn'
            },
            {
                playedBy: 'Mathew Lillard',
                character: 'Cerial Killer'
            }
        ]
    })
})

app.listen(5000, () => { console.log('Server running on port 5000') })