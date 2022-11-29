import { appendFile } from 'node:fs/promises'

const path = 'src/fs/files/fresh.txt'

const create = async () => {
    appendFile(path, 'I am fresh and young', { flag: 'wx' }).catch(() => {
        throw Error('FS operation failed')
    })
};

await create();



