import { brotliCompress } from 'node:zlib'
import { createReadStream, createWriteStream } from 'fs'

const compress = async () => {
    const readStream = createReadStream('src/zip/files/fileToCompress.txt')
    readStream.on('data', (data) => {
        brotliCompress(data, (err,buffer) => {
            const writeStream = createWriteStream('src/zip/files/archive.gz')
            writeStream.write(buffer)
        })
    })
};

await compress();
