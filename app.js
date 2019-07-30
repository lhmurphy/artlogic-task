$(document).ready(() => {
  console.log('this is working')

  $(document).ready(function() {
    $('.faq dd').hide()
    $('.faq dt').click(function(){
      $('.faq dd').slideUp()
      $(this).next().slideToggle('slow')
      $(this).find('.fas').toggleClass('fa-sort-up')
    })
  })
})
