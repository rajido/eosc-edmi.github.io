 var standardList;

 (function ($) {
   $(function () {

     $('.button-collapse').sideNav();
     $('.parallax').parallax();
     $('.collapsible').collapsible();
     $('.carousel.carousel-slider').carousel({
       fullWidth: true
     });
     $('.materialboxed').materialbox();
     $('.scrollspy').scrollSpy();
     $('.tap-target').tapTarget('open');

     if (localStorage.getItem('cookieconsent') === 'true') {
       $('#cookies').hide()
     }

     //  jQuery('#cookies').on('click', function(event) {
     //         localStorage.setItem('cookieconsent', 'true')
     //         jQuery('#cookies').toggle('hide');
     //    });


     var options = {
       valueNames: ['name']
     };

     standardList = new List('standards-list', options);

     $('#dataset .project-filter').click(function (button) {
       var standard = $(button.target).text();
       if (standard === 'All') {
         resetList();
         return
       }
       standardList.search(standard);
     });

   }); // end of document ready
 })(jQuery);

 function resetList() {
   this.standardList.search();
   this.standardList.filter();
   this.standardList.update();
   //console.log('Reset Successfully!');
 };