/**
 * Created by weknowdata on 20/11/2014.
 */

$('[data-slide-container]').click(function(){

    $('[data-slide-container-target="' + $(this).attr('data-slide-container') + '"]').slideToggle();

});
