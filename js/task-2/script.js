let isContinueGame = true,
    qty,
    number,
    personNumber,
    a,
    b;

while(confirm('Do you wanna play?')) {
    qty = 1,
    a = 0,
    b = 100,
    number = Math.floor(Math.random() * 100);
    console.log(number);

    while(isContinueGame) {
        personNumber = +prompt(`Type in number between [${a}, ${b}]`);

        isContinueGame = personNumber === number;
        if(isContinueGame) {
            break;
        } else {
            alert('you wrong');
        }

        if(personNumber > number) {
            b = personNumber - 1;
        } else {
            a = personNumber + 1;
        }

        isContinueGame = true;
        qty++
    }

    alert(`Correct, it was your ${qty}th attempt`);
}