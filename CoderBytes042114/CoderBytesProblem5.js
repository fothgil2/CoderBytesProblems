function SimpleAdding(num) {
    var counter = num;
    for (var i = 0; i < num; i++) {
        counter += i;
    }
    num = counter;
    return num;
}

alert(SimpleAdding(12));