$(document).ready(() => {
  console.log('this is working')

  $(document).ready(function() {
    $('.faq dd').hide()
    $('.faq dt').click(function(){
      $(this).next().slideToggle('slow')
    })
  })
})
