$('#btnColor').click(function() {
    $('#targetDiv').css({
        'background-color': 'blue'
    })
});

$('#btnText').click(() => {
    $('#targetDiv').text('¡Hola Mundo!');
})

$('#btnToggle').click(() => {
    $('#targetDiv').toggleClass('aparecer')
})