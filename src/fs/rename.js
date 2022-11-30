import { rename as fsRename, open } from 'node:fs/promises'

const path = 'src/fs/files'

const rename = async () => {
    open(path + '/wrongFilename.txt').then(() => {
        open(path + '/properFilename.md').then(() => {
            throw new Error('FS operation failed')
        }).catch(() => {
            fsRename(path + '/wrongFilename.txt', path + '/properFilename.md').catch((err) => {
                throw new Error('FS operation failed')
            })
        })
    }).catch(() => {
      throw new Error('FS operation failed')
    })




};

await rename();

