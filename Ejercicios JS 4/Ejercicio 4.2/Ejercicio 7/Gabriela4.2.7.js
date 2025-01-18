$('#registroForm').submit((event) => {
    event.preventDefault();

    const regeEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexPassword = /^.{6,}$/;

    $('#nombreError').toggle($('#nombre').val())
    $('#emailError').toggle(!regeEmail.test($('#email').val()))
    $('#passwordError').toggle(!regexPassword.test($('#password').val()))



})