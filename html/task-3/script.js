if ('content' in document.createElement('template')) {
    console.log('templates are supported');
    
    let temp = document.getElementById('myTemplate');
    let content = temp.content;

    let pForTemplate = document.getElementById('p-for-template');
        pForTemplate.appendChild(content);
} else {
    console.log('templates are not supported');
}

var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(100, 50, 150, 75);
    ctx.fillStyle = 'blue';
    ctx.fillRect(150, 100, 100, 50);

    // ctx.fillRect(x, y, width, height);


console.log(ctx);