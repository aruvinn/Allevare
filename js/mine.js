function drawTaskBox(data){
  var tasks = ich.tasks({
    'rows': data
  })
  $('#tasks').html(tasks)
}


/* 
(document).on( 'click', '#showAvailable', toggleAvailable)

THIS SHIT IS BUGGY SO COMMENT THIS ASS OUT

$(document).on( 'click', '.clear', function(e) {
  clearSearch(e)
  $('#showAvailable').removeClass('button-pressed')
    .html('Show Available')
})

$(document).on('keyup', '#toolSearch', function(e) {
  var text = $(e.target).val().trim().toLowerCase()

  if (text === '') return clearSearch(e)
  if ($('.button-pressed').length === 1) {
    console.log('Hide unavailable')
    $('.task-box').filter('.not-available').hide()
  }
  filterTools(text)
})

*/


/* for when visitor click a particular task */
$(document).on( 'click', '.task-box-name', function(e) {
  var rowNumber = $(this).closest("div").attr("id")
  if ($(this).closest('div').hasClass('selected-task')) {
    $('.tool-box-bottom' + '.' + rowNumber).css('display', 'none')
    $(this).closest('div').removeClass('selected-task')
  }
  else {
    $('.tool-box-bottom' + '.' + rowNumber).css('display', 'inherit')
    $(this).closest('div').addClass('selected-tool')
  }
})

/* WTF IS THIS SHIT 
function toggleAvailable() {
  if ($('.button-pressed').length === 0) {
    console.log('off')
    $('#showAvailable').addClass('button-pressed')
      .html('Show All')
    $('.not-available').hide()
  } else {
    console.log('on')
    $('#showAvailable')
      .html('Show Available').removeClass('button-pressed')
    if ($('#toolSearch').val() != '') {
      console.log("search not empty")
      return filterTools($('#toolSearch').val())
    }
    $('.not-available').show()
  }
}

*/

/* THIS SHIT IS BUGGY SO COMMENT THIS ASS OUT

function clearSearch(e) {
  console.log('clear')
  $('#toolSearch').val('')
  drawToolBox(gData)
}

function filterTools(text) {
  $('.tool-box-tool').each(function() {
  var tool = $(this).html().toLowerCase()
  if (tool.match(text)) {
    $(this).parent().show()
  } else $(this).parent().hide()
  })
}

*/