const https = require('https')

const url = 'https://api.weatherstack.com/current?access_key=0782296248832d7408e063b4f567ed2c&query=2.0469,45.3182'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error:', error)
})

request.end()