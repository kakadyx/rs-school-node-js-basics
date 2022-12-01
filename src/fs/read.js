import { readFile  } from 'node:fs/promises'

const path = 'src/fs/files'

const read = async () => {
    readFile(path + '/fileToRead.txt').then((data) => {
        console.log(data.toString())
    }).catch(() => {
        throw new Error('FS operation failed')
    })
};

await read();

