$(document).ready(function () {

    /* @CHOSEN */
    var config = {
        '.chosen-select': {},
        '.chosen-select-deselect': {
            allow_single_deselect: true
        },
        '.chosen-select-no-single': {
            disable_search_threshold: 10
        },
        '.chosen-select-no-results': {
            no_results_text: 'Sonuç Bulunamadı!'
        },
        '.chosen-select-width': {
            width: "100%"
        }
    }
    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }
});
