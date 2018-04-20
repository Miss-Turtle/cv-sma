// jobs page interactions
(function($){    
    // Wait document have been load
    $(document).ready(function(){
        // Is no-flebox class present ?
        if($('html').hasClass('no-flexbox')){
            // On click wait then verify if jobs is visible to give a height for environment box
            $('#main').on('click', '.js-jobs', function(){
                setTimeout(function() {
                    if($('.jobs').is(':visible')){
                        $('.jobs-description').each(function(index){
                            $(this).next('.jobs-environnement').css('height', $(this).height());
                        });
                    }
                }, 500);                 
            });
        }        
    });
})(jQuery);