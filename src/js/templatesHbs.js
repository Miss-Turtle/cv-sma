// Templates HBS
(function( $ ) {
    $(function(){           
        $.when(
            $.ajax({  
                dataType: "json",
                url: './datas/contacts.json'
            }),
            $.ajax({  
                dataType: "json",
                url: './datas/competences.json'
            }),
            $.ajax({  
                dataType: "json",
                url: './datas/jobs.json'
            }),
            $.ajax({  
                dataType: "json",
                url: './datas/studies.json'
            }),
            $.ajax({  
                dataType: "json",
                url: './datas/projects.json'
            })
        ).done(function(datasContacts, datasCompetences, datasJobs, datasStudies, datasProjects){   
            var allDatas = { contacts: datasContacts[0], competences: datasCompetences[0], jobs: datasJobs[0], studies: datasStudies[0], projects: datasProjects[0] };
            $('#main').html(smaCV.templates.main(allDatas)); 
        });          
    });
})(jQuery); 