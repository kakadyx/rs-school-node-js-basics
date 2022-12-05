import { cpus } from 'os'
import {Worker} from 'node:worker_threads'

const performCalculations = async () => {
    const logicalCoresNumber = (Object(cpus()).length)
    let exittedWorkers = 1
    const workers = []
    const result = []
    for(let i = 0; i < logicalCoresNumber; i++){
        workers[i] = new Worker('./src/wt/worker.js', {workerData: 10 + i })
        workers[i]
            .on('message', msg => result[i] = {status: 'resolved', data: msg})
            .on('error', err => result[i] = {status: 'error', data: null})
            .on('exit', code => {
                if(exittedWorkers++ === logicalCoresNumber){
                    console.log(result)
                }
            })
    }
};

await performCalculations();
