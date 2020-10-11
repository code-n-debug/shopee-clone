$(function() {
    $('#minus').click(function(){
        if(parseInt($('#qty').val()) > 1)
        $('#qty').val(parseInt($('#qty').val()) - 1);
    });

    $('#plus').click(function(){
        $('#qty').val(parseInt($('#qty').val()) + 1);
    });

    $('#buy').click(function(){
        let loc = $('#buy').attr('href');
        let params = new URLSearchParams();
        params.append('qty', parseInt($('#qty').val()));
        window.location.href = loc + '?' + params.toString();
        return false;
    });
});