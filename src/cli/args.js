const parseArgs = () => {
    const myArgs = process.argv.slice(2);

    let argsKeyValueArray = []
    for(let i = 0; i < myArgs.length; i+=2){
        argsKeyValueArray.push(`${myArgs[i]} is ${myArgs[i + 1]}`)
    }

    console.log(argsKeyValueArray.join(', '))
};

parseArgs();
