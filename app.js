
let button = document.querySelector('.input')

function check() {
    if (button.value % 2 == 0) {
                document.getElementById('output').value = "Even";
        
    }
    else if(button.value == " "){
        document.getElementsByClassName('input').value = "Invalid Number"

    }
    else{
        document.getElementById('output').value = "odd";

    }
}` `