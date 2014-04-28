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
  var acceptedTypes = {
    'image/png': true,
    'image/jpeg': true,
    'image/gif': true
  };  
  if(this.files){
    file = this.files[0];
    if(acceptedTypes[file.type] === true){
      preview(file);
      upload(file);
    }else{
      alert('file type is not accepted');
    }
  }
});
function preview(userfile){
  var fileReader = new FileReader();
  fileReader.onload = function(e){
    $('.background').attr('style', 'background-image:url(\'' + e.target.result + '\')');
  }
  fileReader.readAsDataURL(userfile);
}
function upload(userfile){
  var formData = new FormData();
  formData.append('file', userfile);
  $.ajax({
    type: 'post',
    url: 'upload.php',
    cache: false,
    contentType: false,
    processData: false,
    data: formData,
    success: function(data){
      console.log('picture was uploaded');
    }
  });
}