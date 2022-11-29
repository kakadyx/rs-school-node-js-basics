import { readdir,  mkdir, copyFile  } from 'node:fs/promises'

const path = 'src/fs/'

const copy = async () => {
    readdir(path + 'files/').then(files => {
        if(files.length){
            mkdir(path + 'files_copy/').catch(() => {
                throw new Error('FS operation failed')
            })
            files.forEach(file => {
                copyFile(path + `files/${file}`, path + `files_copy/${file}`)
            })
        }
    }).catch(() => {
        throw new Error('FS operation failed')
    })
};

copy();
