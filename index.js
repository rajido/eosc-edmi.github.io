import $ from 'jquery';
import "materialize-css";

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

    standardFiltering();
}); // end of document ready

function standardFiltering() {

    var filterCheckboxes = $('#standards-search input[type="checkbox"]');
    filterCheckboxes.on('change', function () {
        
        var selectedFilters = [];

        filterCheckboxes.filter(':checked').each(function () {
            selectedFilters.push(this.value);
        });
        console.log('selected filters', selectedFilters);
        if (selectedFilters.length <= 0) {
            $('#dataset .standard').removeClass("hidden").addClass("visible");
            return
        }
        // create a collection containing all of the filterable elements
        var filteredResults = $('#dataset .standard');
        var notCheckedStandards = $('#dataset .standard');

        filteredResults = filteredResults.filter((pos, standard) => 
            selectedFilters.includes(standard.getAttribute('data-id')));
        
        notCheckedStandards = notCheckedStandards.filter((pos, standard) => $.inArray(standard, filteredResults) === -1);

        notCheckedStandards.removeClass("visible").addClass("hidden");
        $('#dataset .standard').filter(filteredResults).removeClass("hidden").addClass("visible");
        
        console.log("not checked standards", notCheckedStandards);
        console.log("filtered results", filteredResults);
    });
};