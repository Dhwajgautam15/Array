
function map(elements, get_triple) {
    let triple_elements = [];

    for(i=0;i<elements.length;i++){
      triple_elements[i] = get_triple(elements[i]);
    }
    return triple_elements
}
function get_triple(items){
    return items*items*items;
}

module.exports={map,get_triple}