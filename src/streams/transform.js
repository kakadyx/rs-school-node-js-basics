import { Transform } from 'node:stream'

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''))
        }
    })
    process.stdin.pipe(reverse).on('data', data => {
        process.stdout.write(data)
    })
};

await transform();
