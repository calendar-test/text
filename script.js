document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const inputText = event.target.value;
        document.getElementById('outputBox').innerText = inputText;
        event.target.value = '';
    }
});