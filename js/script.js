var editor = new MediumEditor('.editable', {
  anchorInputPlaceholder: 'Type a link',
  buttons: ['bold', 'italic', 'underline', 'anchor', 'unorderedlist'],
  buttonLabels: 'fontawesome'
});

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

$('#userfile').change(function(){
  preview(this);
});
function preview(userfile){
  if(userfile.files ){
    if(userfile.files[0]){
      var fileReader = new FileReader();
      fileReader.onload = function(e){
        $('.background').attr('style', 'background-image:url(\'' + e.target.result + '\')');
      }
      fileReader.readAsDataURL(userfile.files[0]);
    }
  }
}

$('.choose-image').on('click', function(e) {
  e.preventDefault(); 
  $('#file').trigger('click');
});
$('#file').change(function(){
  previewInContent(this);
});
function previewInContent(file){
  if(file.files ){
    if(file.files[0]){
      var fileReader = new FileReader();
      fileReader.onload = function(e){
        $('.div-editor').append('<br><img src="' + e.target.result + '" class="img" alt=""><br>');
      }
      fileReader.readAsDataURL(file.files[0]);
    }
  }
}