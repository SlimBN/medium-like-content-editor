var editor = new MediumEditor('.editable', {
    anchorInputPlaceholder: 'Type a link',
    buttons: ['bold', 'italic', 'underline', 'anchor', 'unorderedlist'],
    buttonLabels: 'fontawesome'
});
$(document).ready(function() {
    $('#select-photo').on('click', function(e) {
       e.preventDefault(); 
       $('#userfile').trigger('click');
   });
// TEXTAREA
// $('.content').elastic();
$('.toggle-menu').on('click', function(e) {
    e.preventDefault(); 
    $('.entity-menu').fadeIn().show();
});
$('.entity-menu').on('mouseleave', function(e) {
    $('.entity-menu').fadeOut();
});
});