$(function(){
  Handlebars.registerHelper('user_link', function(person) {
      return new Handlebars.SafeString(
            "<a href='http://www.bostonblender.com/members/" + person.mid + "'>" 
            + person.name + "</a>"
        );
  });

  $.get("tpl/main.handlebars", function(mainTpl){
    var bodyTpl = Handlebars.compile(mainTpl);
    $("body").append(bodyTpl(data));
    switchSec();
  });
  var secId = null;
  var switchSec = function() {
      var newSec = window.location.hash;
      console.log("Hash is "+newSec);
      if (secId != newSec) {
          if (secId) { 
            $(secId).hide(0);
            console.log("Hiding "+secId);
          }
          console.log("Showing "+newSec);
          $(secId = newSec).show(0);
          console.log("You should see "+$(secId).html());
      }
  };
  $(window).on('hashchange', switchSec);
  window.location.hash || (window.location.hash = data.default_section);
});
