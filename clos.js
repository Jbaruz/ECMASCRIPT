function parent() {
    const message = 'Hello, world!';

    function child() {
        alert(message);
    }
    
    child();
}
parent();