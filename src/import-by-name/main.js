window.onload = () => {
    document.querySelectorAll('input[name="style"]')

    const radioButtons = document.querySelectorAll('input[name="style"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const type = event.target.value;
            import(`/${type}-print.js`).then(printer => {
                document.querySelector('#result').innerHTML = `<pre>Script <b>${type}-print.js</b> loaded, function call returns\n\n${printer.print("Hello, world")}</pre>`;
            }).catch(error => {
                document.querySelector('#result').innerHTML = `Failed to load script calculator.js, ${error}`;
            })
        });
    });
}