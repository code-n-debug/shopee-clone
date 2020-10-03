$(function() {
    $('#minus').click(function(){
        if(parseInt($('#qty').val()) > 1)
        $('#qty').val(parseInt($('#qty').val()) - 1);
    });

    $('#plus').click(function(){
        $('#qty').val(parseInt($('#qty').val()) + 1);
    });
});