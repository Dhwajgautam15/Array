function find(elements, cb, findElement) {
    for (i = 0; i < elements.length; i++) {
        if (cb(elements[i], findElement)) {
            return elements[i];
        }
    }
    return undefined;
}

function cb(item,findElement){
    return item == findElement;
}
module.exports = { find, cb }