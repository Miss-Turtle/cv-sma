// Navigation
(function( $ ) {
    $(document).ready(function(){   
        // Verify the window width and make appear header if it's large break
        $(window).resize(function(){
            var isCompetencesVisible = $('.competences').is(':visible');
            var isJobsVisible = $('.jobs').is(':visible');
            var isStudiesVisible = $('.studies').is(':visible');
            if($('nav.desktop').is(':visible')){
                $('header').fadeIn('slow');
                if(!isCompetencesVisible && !isJobsVisible && !isStudiesVisible){
                    $('nav.desktop li.js-competences').addClass('js-active');
                    $('.competences').fadeIn('slow');
                } 
                if(isJobsVisible || isStudiesVisible){
                    $('nav.desktop li.js-competences').removeClass('js-active');
                    $('.competences').fadeOut('slow');
                    if(isJobsVisible){
                        $('nav.desktop li.js-jobs').addClass('js-active');
                    }
                    if(isStudiesVisible){
                        $('nav.desktop li.js-studies').addClass('js-active');
                    }
                }
                if(isCompetencesVisible){
                    $('nav.desktop li.js-competences').addClass('js-active');
                }    
                if(isJobsVisible){
                    $('nav.desktop li.js-jobs').addClass('js-active');
                } 
                if(isStudiesVisible){
                    $('nav.desktop li.js-studies').addClass('js-active');
                } 
            } 
            if($('nav.mobile').is(':visible')) {                
                if(isCompetencesVisible || isJobsVisible || isStudiesVisible){
                    $('header').fadeOut('slow');
                }     
                $('nav.desktop li.js-competences').removeClass('js-active');
                $('nav.desktop li.js-jobs').removeClass('js-active');
                $('nav.desktop li.js-studies').removeClass('js-active');                       
            }
        });           

        // Navigation desktop active list on click
        $('#main').on('click', 'nav.desktop li' , function(){
            $('nav.desktop li').removeClass('js-active');
            $(this).addClass('js-active');
            if($(this).hasClass('js-competences')){
                $('.competences').fadeIn('slow');
                $('.jobs').fadeOut('slow');
                $('.studies').fadeOut('slow');
            }
            if($(this).hasClass('js-jobs')){
                $('.competences').fadeOut('slow');
                $('.jobs').fadeIn('slow');
                $('.studies').fadeOut('slow');
            }
            if($(this).hasClass('js-studies')){
                $('.competences').fadeOut('slow');
                $('.jobs').fadeOut('slow');
                $('.studies').fadeIn('slow');
            }
        });    
        
        // Open navigation mobile
        $('#main').on('click', 'nav.mobile .navigation-button' , function(){
            $('.navigation-display').fadeIn('slow');
        });  

        // Close navigation mobile        
        $('#main').on('click', 'nav.mobile .navigation-close-btn' , function(){
            $('.navigation-display').fadeOut('slow');
        });

        // Navigation desktop active list on click
        $('#main').on('click', 'nav.mobile li' , function(){
            if($(this).hasClass('js-presentation')){
                $('.navigation-display').fadeOut('slow');
                $('header').fadeIn('slow');
                $('.competences').fadeOut('slow');
                $('.jobs').fadeOut('slow');
                $('.studies').fadeOut('slow');
            }
            if($(this).hasClass('js-competences')){
                $('.navigation-display').fadeOut('slow');
                $('header').fadeOut('slow');
                $('.competences').fadeIn('slow');
                $('.jobs').fadeOut('slow');
                $('.studies').fadeOut('slow');
            }
            if($(this).hasClass('js-jobs')){
                $('.navigation-display').fadeOut('slow');
                $('header').fadeOut('slow');
                $('.competences').fadeOut('slow');
                $('.jobs').fadeIn('slow');
                $('.studies').fadeOut('slow');
            }
            if($(this).hasClass('js-studies')){
                $('.navigation-display').fadeOut('slow');
                $('header').fadeOut('slow');
                $('.competences').fadeOut('slow');
                $('.jobs').fadeOut('slow');
                $('.studies').fadeIn('slow'); 
            } 
        });    
    });
})(jQuery); 