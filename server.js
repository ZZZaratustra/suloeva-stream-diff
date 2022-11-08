import express from 'express'
import fs from 'fs'
const app = express()

app.get('/', (req,res)=> {

    const readFile = (fileName) => ()=> {

        const readStream = fs.createReadStream(fileName)
        const reads = readStream.on('readable', () => {

            const data = readStream.read()
            console.log(data)
            console.log(data?.toString())
            return data?.toString()

        })
        console.log("reads:",reads())
        return reads.toString()
    }

    console.log("readFile('input.txt'):",readFile('input.txt'))
    // res.write('вроде робит', readFile('input.txt'))
})

app.listen(3000)

// app.get('/', (req,res) => {
    //    const readStream = createReadStream(firstFileName)
    //    readStream.on('data', (data) => {
    //        res.write(data)
    //    })
    //    readStream.on('end', (data)=>{
    //        res.status(200).send()
    //    })
    //})
    //app.listen(3000)
