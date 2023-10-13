function filter(elements, cb) {
    let start_count = 0;
    let new_array = [];
    for (i = 0; i < elements.length; i++) {
        if (even(elements[i])) {
            new_array[start_count] = elements[i]
            start_count++;
        }

    }
    return new_array;
}

function even(items) {
    return items % 2 == 0
}

module.exports = { filter, even }
