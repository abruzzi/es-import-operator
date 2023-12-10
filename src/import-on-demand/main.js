window.onload = () => {
    document.querySelector('#toggle').addEventListener('change', () => {
        import('/calculator.js').then(calculator => {
            document.querySelector('#result').innerHTML = `Script calculator.js loaded, function call returns ${calculator.add(1, 5)}`;
        }).catch(error => {
            document.querySelector('#result').innerHTML = `Failed to load script calculator.js, ${error}`;
        })
    })
}