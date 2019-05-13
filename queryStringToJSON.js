const queryStringToJSON = (queryString) => {
    const queryParams = queryString.split("&");
    const params = {};
    const validQueryParams = queryParams.filter((queryParam) => isValid(queryParam));
    for (let index = 0; index < validQueryParams.length; index++) {
        const queryParam = validQueryParams[index];
            const { key, value } = getKeyValuePair(queryParam);
            if(isArray(key)) {
                const arrayName = key.split("[]")[0];
                if (!isArrayPresent(params, arrayName)) {
                    params[arrayName] = [];
                }
                params[arrayName].push(value);
                continue;
            }
            params[key] = value;
    }
    return params;
}

export default queryStringToJSON;

function isArray(key) {
    return key.endsWith("[]");
}

function isValid(queryParam) {
    return queryParam && queryParam.trim().length;
}

function getKeyValuePair(queryParam) {
    const param = queryParam.split("=");
    return { key: param[0].trim(), value: param[1] };
}

function isArrayPresent(params, array) {
   return params.hasOwnProperty(array)
}