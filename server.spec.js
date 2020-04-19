var request = require('request')
describe('calc',() =>{
    it('shoudl multiply 2 and 2', () => {
        expect(2*2).toBe(4)
    })
})

describe('get messages', () =>{
    //async testing
    it('should return 200 ok', (done) =>{
        request.get('http://localhost:3000/messages', (err, res) => {
            console.log(res)
            console.log(res.body)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('it should return a list that is not empty', (done) =>{
        request.get('http://localhost:3000/messages', (err, res) => {
            // number of objects returned
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})