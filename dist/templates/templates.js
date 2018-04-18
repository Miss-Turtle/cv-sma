Handlebars.registerPartial("competences", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div class=\"competences-description col-lg-6 col-xl-4 text-center\">\r\n                    <div>\r\n                        <i class=\""
    + alias2(alias1((depth0 != null ? depth0.icon : depth0), depth0))
    + "\"></i> \r\n                        <h3>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3> \r\n                        <p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.details : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </p>\r\n                    </div>                    \r\n                </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.last),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "                                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ",\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"competences\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h2><i class=\"fa fa-cogs\"></i> "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.competences : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">            \r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.competences : depth0)) != null ? stack1.tools : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>    \r\n</div>";
},"useData":true}));
Handlebars.registerPartial("footer", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 copyright\">\r\n                <p>Copyright 2018 - "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.firstName : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "</p>                               \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12 conception-tools\">\r\n                <div>\r\n                    <p>Cette page a été conçue avec :</p>\r\n                    <p>\r\n                        <i class=\"fab fa-html5 fa-2x\"></i> \r\n                        <i class=\"fab fa-css3-alt fa-2x\"></i> \r\n                        <i class=\"fab fa-node-js fa-2x\"></i>\r\n                        <i class=\"fab fa-npm fa-2x\"></i>\r\n                        <i class=\"fab fa-gulp fa-2x\"></i>\r\n                        <i class=\"fab fa-sass fa-2x\"></i>\r\n                        <i class=\"fab fa-js fa-2x\"></i>\r\n                        <i class=\"fab fa-font-awesome fa-2x\"></i>\r\n                        <img src=\"./dist/img/brands/bootstrap.svg\" class=\"bootstrap\">\r\n                        <img src=\"./dist/img/brands/jquery.png\" class=\"jquery\">\r\n                        <img src=\"./dist/img/brands/handlebars.svg\" class=\"handlebars\">\r\n                        <img src=\"./dist/img/brands/json-5.svg\" class=\"json\">\r\n                        <img src=\"./dist/img/brands/browsersync.svg\" class=\"browsersync\">\r\n                    </p> \r\n                </div>                \r\n            </div>\r\n        </div>\r\n    </div>    \r\n</footer>";
},"useData":true}));
Handlebars.registerPartial("header", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(helpers.isEqual || (depth0 && depth0.isEqual) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.years : depth0),"2014-2016",{"name":"isEqual","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                ";
},"2":function(container,depth0,helpers,partials,data) {
    return "                                        "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.label : depth0), depth0))
    + " \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<header>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">   \r\n                <div>\r\n                    <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.firstName : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.lastName : stack1), depth0))
    + " - CV</h1>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                            <h2>Présentation</h2>\r\n                            <p>Persévérante, motivée et curieuse, j'aime compléter mes savoirs pour accroître mes compétences.</p>\r\n                            <p>J'ai créé ce site pour présenter mes compétences, expériences et ma formation. Mais il me permet aussi de partager mes projets.</p>\r\n                            <p>Titulaire d'un \r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.studies : depth0)) != null ? stack1.details : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ", \r\n                                j'évolue dans le milieu de l'informatique où j'aime concevoir et élaborer des applications Web.\r\n                            </p> \r\n                        </div>\r\n                        <div class=\"col-lg-6 contacts\">\r\n                            <h2 class=\"contacts-margin-top\">Mes contacts</h2>\r\n                            <p>\r\n                                <i class=\"far fa-envelope\"></i> <span class=\"font-weight-bold\"> : </span> <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.email : stack1), depth0))
    + "</a>\r\n                            </p>\r\n                            <p>\r\n                                <i class=\"fab fa-linkedin-in\"></i> <span class=\"font-weight-bold\"> : </span> <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.linkedin : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.linkedin : stack1), depth0))
    + "</a>\r\n                            </p>\r\n                            <p>    \r\n                                <i class=\"fab fa-viadeo\"></i> <span class=\"font-weight-bold\"> : </span> <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.viadeo : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.viadeo : stack1), depth0))
    + "</a>  \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>                           \r\n            </div>\r\n        </div>\r\n    </div>        \r\n</header>";
},"useData":true}));
Handlebars.registerPartial("jobs", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"jobs-details col-12\">\r\n                    <div>\r\n                        <div class=\"row\">\r\n                            <div class=\"jobs-title col-12\">\r\n                                <h3><i class=\"fas fa-suitcase\"></i> "
    + alias2(alias1((depth0 != null ? depth0.dates : depth0), depth0))
    + " : "
    + alias2(alias1((depth0 != null ? depth0.jobTitle : depth0), depth0))
    + "</h3>\r\n                            </div>                            \r\n                        </div>                \r\n                        <div class=\"row\">\r\n                            <div class=\"jobs-description col-md-12 col-lg-6\">\r\n                                <div>\r\n                                    <p class=\"jobs-enterprise\"><span class=\"font-weight-bold\">"
    + alias2(alias1((depth0 != null ? depth0.enterpriseTitle : depth0), depth0))
    + " :</span> "
    + alias2(alias1((depth0 != null ? depth0.enterpriseName : depth0), depth0))
    + " - <span class=\"font-italic\">"
    + alias2(alias1((depth0 != null ? depth0.enterpriseDescription : depth0), depth0))
    + "</span></p>\r\n                                    <ul>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.jobDescription : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                    </ul>\r\n                                </div>                                \r\n                            </div>\r\n                            <div class=\"jobs-environnement col-md-12 col-lg-6\">\r\n                                <div>\r\n                                    <p class=\"font-weight-bold\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.technicalEnvironment : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p>\r\n                                    <p>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.technicalEnvironment : depth0)) != null ? stack1.details : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                                            <li class=\"activity\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.last),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "                                                "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                                                "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ",\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"jobs\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h2><i class=\"fa fa-suitcase\"></i> "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n            </div>            \r\n        </div>\r\n        <div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.details : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>    \r\n</div>";
},"useData":true}));
Handlebars.registerPartial("navigation", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<nav class=\"desktop\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ul>\r\n                    <li class=\"js-active js-competences\"><i class=\"fa fa-cogs\"></i> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.competences : depth0)) != null ? stack1.title : stack1), depth0))
    + "</li>\r\n                    <li class=\"js-jobs\"><i class=\"fa fa-suitcase\"></i> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.title : stack1), depth0))
    + "</li>\r\n                    <li class=\"js-studies\"><i class=\"fa fa-graduation-cap\"></i> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.studies : depth0)) != null ? stack1.title : stack1), depth0))
    + "</li>  \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>";
},"useData":true}));
Handlebars.registerPartial("navigationMobile", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<nav class=\"mobile d-lg-none\">\r\n    <div class=\"container\">\r\n        <div class=\"navigation-access row\">\r\n            <div class=\"col-12 clearfix\">\r\n                <p class=\"float-left\">Navigation</p>\r\n                <div class=\"navigation-button float-right\">\r\n                    <div class=\"btn-line-nav\"></div>\r\n                    <div class=\"btn-line-nav\"></div>\r\n                    <div class=\"btn-line-nav\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"navigation-display\">\r\n            <div class=\"navigation-close row\">\r\n                <div class=\"col-12 clearfix\">\r\n                    <p class=\"float-left\">Navigation</p>\r\n                    <div class=\"navigation-close-btn float-right\">\r\n                        <i class=\"fas fa-times\"></i>\r\n                    </div>                    \r\n                </div>\r\n            </div>\r\n            <div class=\"navigation-items row\">\r\n                <div class=\"col-12\">\r\n                    <ul>\r\n                        <li class=\"js-presentation\">Présentation</li>\r\n                        <li class=\"js-competences\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.competences : depth0)) != null ? stack1.title : stack1), depth0))
    + "</li>\r\n                        <li class=\"js-jobs\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.jobs : depth0)) != null ? stack1.title : stack1), depth0))
    + "</li>\r\n                        <li class=\"js-studies\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.studies : depth0)) != null ? stack1.title : stack1), depth0))
    + "</li>  \r\n                    </ul>\r\n                </div>\r\n            </div>            \r\n        </div>\r\n    </div>\r\n</nav>";
},"useData":true}));
Handlebars.registerPartial("projects", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}));
Handlebars.registerPartial("studies", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div class=\"studies-description col-md-6 col-lg-4 text-center\">\r\n                    <div>\r\n                        <h3>"
    + alias2(alias1((depth0 != null ? depth0.years : depth0), depth0))
    + "</h3>\r\n                        <p>"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "</p>\r\n                    </div>                    \r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"studies\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h2><i class=\"fa fa-graduation-cap\"></i> "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.studies : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.studies : depth0)) != null ? stack1.details : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true}));