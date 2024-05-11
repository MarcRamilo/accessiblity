document.querySelector('.button').addEventListener('click', function() {
    var result = prompt('Please enter your name:');
    if (result !== null) {
        alert('Hello, ' + result + '!');
    }
});