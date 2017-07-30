'use strict';

function sendMessage() {
    var xhr = new XMLHttpRequest();

    var message = getValueOrPlaceholder("messageField");
    var numbersString = getValueOrPlaceholder("contactsField");
    var numbers = numbersString.split(',');

    var payload = {
        "message": message,
        "numbers": numbers
    }

    xhr.open("POST", "https://zc88ml120c.execute-api.us-east-1.amazonaws.com/dev/send",false);
    xhr.send(JSON.stringify(payload))
}

function getValueOrPlaceholder(id){
     var element = document.getElementById(id);
     if(element){
        if(element.value){
            return element.value
        }        
        return element.placeholder
     }
     return null;
}