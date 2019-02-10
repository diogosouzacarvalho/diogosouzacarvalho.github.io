$('.button-modal').on('click', function(e){
    e.preventDefault();
    var projeto = $(this).data("target");
    $(projeto).modal('show').find('.modal-content').load($(this).attr('href'));
  });