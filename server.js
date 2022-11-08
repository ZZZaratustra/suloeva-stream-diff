import express from 'express'
import fs from 'fs'
const app = express()
app.get('/', (req,res)=> res.send('вроде робит'))
app.listen(3000)

const readFile = (fileName) => ()=> {
    const readStream = fs.createReadStream(fileName)
    const reads = readStream.on('readable', () => {
    const data = readStream.read()
    console.log(data)
    return data?.toString()
    })
    console.log("reads:",reads())
}
console.log("readFile('input.txt'):",readFile('input.txt'))
