<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

//  ga('create', 'UA-99397045-2', 'auto'); // askmusic_dev
  ga('create', 'UA-99397045-5', 'auto'); // askmusic_production
  ga('send', 'pageview');

  $(document).on('click', 'button',function() {
    ga('send', 'event', 'button_click', 'Button clicked',$(this).attr('id'));
  });

  $(document).on('change', 'select', function() {
    ga('send', 'event', 'select_change', 'Select input changed',$(this).attr('id'));
  });

  $(document).on('change', 'input', function(e) {
    ga('send', 'event', 'input_change', 'Text input changed',$(this).attr('id'),$(e.currentTarget).val());
  });

  $(document).on('change', 'div', function() {
    ga('send', 'event', 'result_change', 'Result calculated',$(this).attr('id'));
  });

Shiny.addCustomMessageHandler("scrolltoresults", function(targetid) {
  $('html, body').animate({
      scrollTop: $("#"+targetid).offset().top - 75
  }, 1000);
});

</script>
