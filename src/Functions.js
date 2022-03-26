export function higherThan(num) {
    let f = function (element) {
        if (element > num) return element;
    };
    return f;
}

export function hasSubstring(substr) {
    let f = function (element) {
        if (element.indexOf(substr) > -1) return element;
    };
    return f;
}

export function multiply(num) {
    let f = function (element) {
        return num * element;
    };
    return f;
}
