function fibo(num) {
    let arr = [0, 1];
    let res = 0;

    if(num === null) {
        console.log('cancelled fibo')
    } else if(num == 0 || num == 1) {
        console.log(num);
        fibo(prompt("what's your sign?"));
    } else if(isNaN(num - 0)) {
        console.log('type in number');
        fibo(prompt("what's your sign?"));
    } else {
        while (arr.length < num) {
            res = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(res);
        }
        console.log(arr);
        fibo(prompt("what's your sign?"));
    }
}

fibo(prompt("what's your sign?"));