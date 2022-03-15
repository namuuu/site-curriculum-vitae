function copyText(button, copiedText) {
    var copyConfirm = "Copié !";
    var initialText = button.innerHTML;

    navigator.clipboard.writeText(copiedText);

    button.innerHTML = copyConfirm;

    var interval = setInterval( function() {
        button.innerHTML = initialText;
        clearInterval(interval);
    }, 600);

}