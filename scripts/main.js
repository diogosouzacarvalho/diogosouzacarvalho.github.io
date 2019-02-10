$('.button-modal').on('click', function(e){
    e.preventDefault();
    $('#salpConcursoModal').modal('show').find('.modal-content').load($(this).attr('href'));
  });