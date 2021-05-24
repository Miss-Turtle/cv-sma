// Navigation
(function( $ ) {
    $(function(){   
        var isCompetencesVisible = $('.competences').is(':visible');
        var isJobsVisible = $('.jobs').is(':visible');
        var isStudiesVisible = $('.studies').is(':visible');
        var isProjectsVisible = $('.projects').is(':visible');
        var itemsContentsMobile = [
            'header',
            'competences',
            'jobs',
            'studies',
            'projects'
        ];
        var itemsNavigation = [
            'js-header',
            'js-competences',
            'js-jobs',
            'js-studies',
            'js-projects'
        ];
        var itemsContentsDesktop = itemsContentsMobile.map(x => x);
        itemsContentsDesktop.shift();

        // Verify the window width and make appear header and other elements if it's large break
        $(window).resize(function(){               
            if($('nav.desktop').is(':visible')){
                $(window).scrollTop(0);  
                $('header').css({'display': 'block'});                    
                for(var i = 0; i < itemsNavigation.length; i++){
                    $('nav.desktop li.' + itemsNavigation[i]).removeClass('js-active');
                }      
                for(var i = 0; i < itemsContentsDesktop.length; i++){
                    $('.' + itemsContentsDesktop[i]).css({'display': 'none'});
                } 
                $('nav.desktop li.js-competences').addClass('js-active');
                $('.competences').css({'display': 'block'});
            }                       
        });          

        // Navigation desktop on click
        $('#main').on('click', 'nav.desktop li' , function(){
            $('nav.desktop li').removeClass('js-active');
            throwContentNavigationToShowOrHide(itemsNavigation, itemsContentsDesktop, $(this), false);
        });    

        // Navigation mobile on click
        showContentOnClickForMobileNavigation(itemsNavigation, itemsContentsMobile, 'nav.mobile li', '#main', '.navigation-display');
        
        // Open navigation mobile
        $('#main').on('click', 'nav.mobile .navigation-button' , function(){
            $('.navigation-display').fadeIn('slow');
        });  

        // Close navigation mobile        
        $('#main').on('click', 'nav.mobile .navigation-close-btn' , function(){
            $('.navigation-display').fadeOut('slow');
        });

        //------------------------------------------------------------------------------------------------------------------------
        // Functions
        //------------------------------------------------------------------------------------------------------------------------

        // Show content element on click for mobile navigation and hide others elements
        function showContentOnClickForMobileNavigation(items, contents, selectorItemClick, selectorMain, selectorNavigationDisplay){            
            $(selectorMain).on('click', selectorItemClick , function(){
                $(selectorNavigationDisplay).fadeOut('slow');
                throwContentNavigationToShowOrHide(items, contents, $(this), true);
            });
        }

        // Throw the items navigation to compare if have selected class on click for hide or show content
        function throwContentNavigationToShowOrHide(items, contents, selectorElementOnClick, mobile){                    
            if(mobile != true){
                selectorElementOnClick.addClass('js-active');
            } else {
                $(window).scrollTop(0);
            }   
            for(var i = 0; i < items.length; i++){                
                if(selectorElementOnClick.hasClass(items[i])){
                    for(var j = 0; j < contents.length; j++){       
                        var selector = "." + contents[j];            
                        if(items[i].indexOf(contents[j]) > 0){                     
                            $(selector).fadeIn('slow');                                
                        } else {
                            $(selector).fadeOut('slow'); 
                        }                        
                    }
                }
            }
        }
    });    
})(jQuery); 