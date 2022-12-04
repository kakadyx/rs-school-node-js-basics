import { createHash } from 'node:crypto'
import { readFile } from "node:fs/promises";
const path = 'src/hash/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    const hash = createHash('sha256')
    readFile(path).then((data) => {
        hash.update(data.toString())
        console.log(hash.digest('hex'))
    }).catch(() => {
        throw new Error('FS operation failed')
    })
};

await calculateHash();
