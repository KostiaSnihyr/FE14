function fibo(num) {
    let arr = [0, 1];
    let res = 0;

    while (arr.length < num) {
        res = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(res);
    }

    console.log(arr);
}

fibo(prompt("what's your sign?"));