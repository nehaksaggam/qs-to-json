const queryStringToJSON = (queryString) => {
    const queryParams = queryString.split("&");
    const params = {};
    for (let index = 0; index < queryParams.length; index++) {
        const queryParam = queryParams[index];
        const param = queryParam.split("=");
        const key = param[0];
        if (key.endsWith("[]")) {
            //Query string is an array
            const arrayName = key.split("[]")[0];
            if(!params.hasOwnProperty(arrayName)) {
                params[arrayName] = [];
            }
            params[arrayName].push(param[1]);
            continue;
        }
        params[key] = param[1];
    }
    return params;
}

export default queryStringToJSON;