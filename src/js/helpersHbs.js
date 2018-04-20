// Helpers HBS
Handlebars.registerHelper('isEqual', function(dataSource, DataToCompare){
    if(dataSource == DataToCompare){
        return true;
    }
    return false;
});