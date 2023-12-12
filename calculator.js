document.addEventListener('DOMContentLoaded', function() {
    let first = document.getElementById('first');
    let buttons = document.querySelectorAll('.content input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(this.value);
        });
    });

    function handleButtonClick(value) {
        if(value === '=') {
            calculate();
        }else if(value === 'C') {
            clearDisplay();
        }else {
            appendToDisplay(value);
        }
    }
    function appendToDisplay(value) {
        first.value += value;
    }

    function clearDisplay() {
        first.value = '';
    }

    function calculate()  {
            try{
                var result=eval(document.getElementById('first').value);
                document.getElementById('first').value = result;
            }catch (error) {
                document.getElementById('first') = "Error";
            }
        }
})