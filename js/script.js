//=====search====///
function activeSearch() {
    $('.search-wrap').addClass('activ-search');
    $('.search').focus();
    $('.search').attr('placeholder', '');
}

$('.search').blur(() => {
    if ($('.search').val().length === 0) {
        $('.search').attr('placeholder', 'Що ти шукаш?');
    }

    $('.search-wrap').removeClass('activ-search');
});
//=====search====///
