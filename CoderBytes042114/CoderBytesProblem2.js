﻿function FirstFactorial(num) {
    for (var i = num - 1; i > 0; i--) {
        num = num * i;
    }
    return num;
}

alert(FirstFactorial(8));