import { unlink } from 'node:fs/promises'

const path = 'src/fs/files'

const remove = async () => {
    unlink(path + '/fileToRemove.txt').catch(() => {
        throw new Error('FS operation failed')
    })
};

await remove();
