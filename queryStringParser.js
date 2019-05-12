function queryStringParser(queryString) {
    const queryParams = queryString.split("&");
    const params = {};
    for (let index = 0; index < queryParams.length; index++) {
        const queryParam = queryParams[index];
        const param = queryParam.split("=");
        if (param[0].endsWith("[]")) {
            //Query string is an array
            a = param[0].split("[]");
            if(!params.hasOwnProperty(a[0])) {
                params[a[0]] = [];
            }
            params[a[0]].push(param[1]);
            continue;
        }
        params[param[0]] = param[1];
    }
    return params;
}

module.exports = queryStringParser;