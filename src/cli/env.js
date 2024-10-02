const parseEnv = () => {
    const envVariables = process.env;

    const rssVars = Object.keys(envVariables)
        .filter(key => key.startsWith('RSS_'))
        .map(key => `${key}=${envVariables[key]}`); 
    const result = rssVars.join('; ');

    console.log(result);
};

parseEnv();