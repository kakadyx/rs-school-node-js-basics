import { brotliDecompress } from 'node:zlib'
import {  createReadStream, createWriteStream } from 'fs'


const decompress = async () => {
    const readStream = createReadStream('src/zip/files/archive.gz')
    readStream.on('data', (buffer) => {
        brotliDecompress(buffer, (err,buffer) => {
            const writeStream = createWriteStream('src/zip/files/fileToCompress.txt')
            writeStream.write(buffer)
        })
    })
};

await decompress();
