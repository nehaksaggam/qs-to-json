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
   return params.hasOwnProperty(array);
}

const queryStringToJSON = (queryString) => {
    const queryParams = queryString.split("&");
    const params = {};
    const validQueryParams = queryParams.filter((queryParam) => isValid(queryParam));
    validQueryParams.forEach((validQueryParam) => {
        const queryParam = validQueryParam;
        const { key, value } = getKeyValuePair(queryParam);
        if(isArray(key)) {
            const arrayName = key.split("[]")[0];
            if (!isArrayPresent(params, arrayName)) {
                params[arrayName] = [];
            }
            params[arrayName].push(value);
            return;
        }
        params[key] = value;
    });
    return params;
};

export default queryStringToJSON;