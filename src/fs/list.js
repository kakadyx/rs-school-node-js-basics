import { readdir  } from 'node:fs/promises'

const path = 'src/fs/'

const list = async () => {
    readdir(path + 'files/').then(files => {
            console.log(files)
    }).catch(() => {
        throw new Error('FS operation failed')
    })
};

await list();

