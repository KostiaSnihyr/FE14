if ('content' in document.createElement('template')) {
    console.log('templates are supported');
    
    let temp = document.getElementById('myTemplate');
    let content = temp.content;

    let pForTemplate = document.getElementById('p-for-template');
        pForTemplate.appendChild(content);
} else {
    console.log('templates are not supported');
}