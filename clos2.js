function parent() {
    const message = 'Hello, world!';

    function child() {
        alert(message);
    }
    return child;
}

const childFN = parent();
childFN()