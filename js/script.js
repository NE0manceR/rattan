//=====search====///
function activeSearch() {
    $('.search-wrap').addClass('active-search');
    $('.search').focus();
    $('.search').attr('placeholder', '');
}

$('.search').blur(() => {
    if ($('.search').val().length === 0) {
        $('.search').attr('placeholder', 'Що ти шукаш?');
    }

    $('.search-wrap').removeClass('active-search');
});
//=====search====///
