// 12.2 
document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonNumber = event.target.getAttribute('data-button');
        alert('You pressed button ' + buttonNumber);
    }
});