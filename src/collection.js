"use strict";

class Collection {
    constructor(indexBy, unique) {
        if (indexBy.constructor != 'Array') {
            indexBy = [indexBy];
        }
    }

    add(object) {
    }

    remove(object) {
    }

    has(object, searchBy) {
    }

    search(callback, indexHint) {
    }

    join(separator, field) {
    }

    clear() {
    }
}

module.exports = collection;
