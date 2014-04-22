function LongestWord(sen) {
    var arr = sen.split(' ');
    var compared = 0;
    var word;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > compared) {
            compared = arr[i].length;
            word = arr[i]
        }
    }
    return word;
}
    alert(LongestWord("i love doggies"));