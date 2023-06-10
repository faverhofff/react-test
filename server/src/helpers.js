
/**
 * 
 * @param {*} key 
 * @param {*} hashMap 
 * @returns 
 */
function filter(key, hashMap) {
    return hashMap.get(key) ?? false;
}

/**
 * 
 * @param {*} jsonData 
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
function paginate(jsonData, page, limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return jsonData.slice(startIndex, endIndex);
}

/**
 * 
 * @param {*} json 
 * @returns Map
 */
function getHashMap(json) {
    const hashMap = new Map();
    Object.keys(json).forEach(key => {
        hashMap.set(key, json[key]);
    });

    return hashMap;
}

/**
 * 
 * @param {*} res 
 * @param {*} json 
 * @param {*} status 
 */
 function response(res, json, status = 200) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"data": ${json}}`);
}

module.exports = {filter, paginate, getHashMap, response};