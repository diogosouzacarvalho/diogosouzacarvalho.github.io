$('.li-modal').on('click', function(e){
    e.preventDefault();
    $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'));
  });