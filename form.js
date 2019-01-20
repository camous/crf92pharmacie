function initializeForm(){
    $('#flash').toggle();
    $('#email').val(localStorage.getItem('email'));
    $('#comment').val(localStorage.getItem('comment'));
}

function saveEmail(){
    localStorage.setItem('email', $('#email').val());
}

function saveComment(){
    localStorage.setItem('comment', $('#comment').val());
}