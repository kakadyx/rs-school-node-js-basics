const parseEnv = () => {
    const resultString = Object.entries(process.env).map(([key,value]) => {
        return `RSS_${key}=${value}`
    }).join('; ')

    console.log(resultString)
};

parseEnv();

