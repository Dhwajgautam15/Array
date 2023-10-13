function each(elements, cb) {
  for (i = 0; i < elements.length; i++) {
    cb(elements[i],i)
  }

}
function cb(items, i) {
  return console.log(`Element at index ${i} is ${items}`)

}

module.exports = {each, cb };