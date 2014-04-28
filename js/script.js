var editor = new MediumEditor('.editable', {
  anchorInputPlaceholder: 'Type a link',
  buttons: ['bold', 'italic', 'underline', 'anchor', 'unorderedlist'],
  buttonLabels: 'fontawesome'
});

$(function () {
  $('.editable').mediumInsert({
    editor: editor,
    addons: {
      images: {
        imagesUploadScript: 'upload.php'
      }
    }
  });
});

// TEXTAREA
// $('.content').elastic();
$('#select-photo').on('click', function(e) {
  e.preventDefault(); 
  $('#userfile').trigger('click');
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