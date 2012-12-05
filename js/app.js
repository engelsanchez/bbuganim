$(function(){
  Handlebars.registerHelper('user_url', function(person) {
      return new Handlebars.SafeString("http://www.bostonblender.com/members/" + person.mid);
  });

  Handlebars.registerHelper('user_link', function(person) {
      return new Handlebars.SafeString(
            "<a href='http://www.bostonblender.com/members/" + person.mid + "'>" 
            + person.name + "</a>"
        );
  });

  $.get("tpl/main.handlebars", function(mainTpl){
    var bodyTpl = Handlebars.compile(mainTpl);
    $("body").append(bodyTpl(data));
    window.location.hash || (window.location.hash = data.default_section);
    switchSec();
  });
  var secId = null;
  var switchSec = function() {
      var newSec = window.location.hash;
      console.log("newSec = "+newSec);
      if (secId != newSec) {
        console.log("Changed");
          if (secId) { 
            $(secId).hide(0);
          }
          $(secId = newSec).show(0);
      }
      $(".nav-li").removeClass("nav-selected");
      console.log(newSec.substr(1));
      $("#nav-"+newSec.substr(1)).addClass("nav-selected");
  };
  $(window).on('hashchange', switchSec);
});
