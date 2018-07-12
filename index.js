import $ from 'jquery';
import "materialize-css";
import listjs from "list.js"

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

    if (document.getElementById("dataset-page")) {
        datasetPageFiltering();
    }

    if (document.getElementById("properties-page")) {
        propertiesPageFiltering();
    }
}); // end of document ready

function propertiesPageFiltering() {
    let options = {
        valueNames: ['name', 'functional', 'operational', 'marginality']
    };

    var propertyList = new listjs('properties-table', options);

    $('#filter-minimum').click(function () {
        propertyList.filter(function (item) {
            if (item.values().marginality == "minimum") {
                return true;
            } else {
                return false;
            }
        });
        return false;
    });

    $('#filter-recommended').click(function () {
        propertyList.filter(function (item) {
            if (item.values().marginality == "recommended") {
                return true;
            } else {
                return false;
            }
        });
        return false;
    });

    $('#filter-optional').click(function () {
        propertyList.filter(function (item) {
            if (item.values().marginality == "optional") {
                return true;
            } else {
                return false;
            }
        });
        return false;
    });

    $('#filter-none').click(function () {
        propertyList.filter();
        return false;
    });

}

function datasetPageFiltering() {

    var filterCheckboxes = $('#standards-search input[type="checkbox"]');
    filterCheckboxes.on('change', function () {

        var selectedFilters = [];

        filterCheckboxes.filter(':checked').each(function () {
            selectedFilters.push(this.value);
        });
        if (selectedFilters.length <= 0) {
            $('#dataset-page .standard').removeClass("hidden").addClass("visible");
            return
        }
        // create a collection containing all of the filterable elements
        var filteredResults = $('#dataset-page .standard');
        var notCheckedStandards = $('#dataset-page .standard');

        filteredResults = filteredResults.filter((pos, standard) =>
            selectedFilters.includes(standard.getAttribute('data-id')));

        notCheckedStandards = notCheckedStandards.filter((pos, standard) => $.inArray(standard, filteredResults) === -1);

        notCheckedStandards.removeClass("visible").addClass("hidden");
        $('#dataset-page .standard').filter(filteredResults).removeClass("hidden").addClass("visible");

    });
};