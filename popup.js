$('#time_in_long').val(Math.floor(Date.now()));
function convert() {
    var i = $('#time_in_long').val();
    var dateTime = new Date(Number(i));
    $("#date").html(dateTime.toLocaleString());
}
convert();
$('#time_in_long').on('keyup', function() {
    convert();
});