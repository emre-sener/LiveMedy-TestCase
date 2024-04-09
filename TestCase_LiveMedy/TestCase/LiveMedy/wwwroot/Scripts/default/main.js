$(document).ready(function () {


    /*------------------------------
        @ANNOUNCEMENTS-NEWS_TICKET
    -------------------------------*/
    if ($(".news-ticka").length > 0) {
         $(".news-ticka").bootstrapNews({
            newsPerPage: 3,
            autoplay: true,
			pauseOnHover: false,
            direction: 'up',
            newsTickerInterval: 2000,
            onToDo: function () {
                //console.log(this);
            }
        });
    }
	
    /*------------------------------
        @IE9 placeholder fallback
    -------------------------------*/
    if (!Modernizr.input.placeholder) {
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }

    /* JQUERY-SIMPLE-ACCORDION */
    (function ($) {
        var allPanels = $('.accordion > dd, .accordion-work > dd').hide();

        $('.accordion > dt > a, .accordion-work > dt > a').click(function () {
            allPanels.slideUp();
            $(this).parent().next().slideDown();
            return false;
        });

    })($);

    /* COLORBOX-LIGHTBOX */
    if ($(".youtube, .vimeo, .iframe").length > 0) {
        $(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });
        $(".vimeo").colorbox({ iframe: true, innerWidth: 500, innerHeight: 409 });
        $(".iframe").colorbox({ iframe: true, width: "80%", height: "80%" });
    }

    /* GOOGLE-MAP-RESIZE */
    /*if ($("#map-resizable, .btn-dark-flat").length > 0) {
        $("#map-resizable").resizable({
            maxHeight: 600,
            minHeight: 300
        });
    }*/
});