function reduce(elements, cb, startingValue) {
    for(i=0 ;i<elements.length;i++){
        startingValue=cb(elements[i],startingValue);
    }
    return startingValue
}

function cb(items,i){
    return i=i+items
}

module.exports ={ reduce , cb }
