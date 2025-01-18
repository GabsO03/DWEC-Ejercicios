
$('#addTask').click(() => {
    const inputTarea = $('#newTask').val();
    if(inputTarea) {
        const $nuevaTarea = $('<li>');
        $nuevaTarea.text(inputTarea).css({'display' : 'none'});
        $nuevaTarea.append(

            $('<button>').text('✅').click(function () {
                $(this).parent().toggleClass('completed')
            }),

            $('<button>').text('x').css({
                'color' : 'red',
                'font-weight' : 'bold'
            })
            .click(function () {
                $(this).parent().fadeOut(500, function () {
                    $(this).parent.remove();
                });
            })

        )
        $nuevaTarea.appendTo('#taskList').fadeIn(500);

    }
})