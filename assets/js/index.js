$(document).ready(function() {
    //header
     var menu = {
      menuItems: [
        {
          'name' : 'Cards',
          'url'  : './#cards'
        }, {
          'name' : 'About',
          'url'  : './#about'
        }, {
          'name' : 'Buy',
          'url'  : 'http://prefundia.com/projects/view/care-cards/5723/'
        }, {
          'name' : 'Feedback',
          'url'  : 'mailto:juhan@goinvo.com'
        } 
      ]
    };
    var menu_tpl = '<ul>{{#menuItems}}' + 
                      '<li><a href="{{url}}">{{name}}</a></li>' + 
                    '{{/menuItems}}</ul>';
    var menu_html = Mustache.to_html(menu_tpl, menu);
    $('#menu').html(menu_html);
   
    $('#menuTrigger').click(function(){
      $('#menu').toggleClass('showMenu');
      $(this).toggleClass('closeMenu');
    });

    //footer
    var currentYear = (new Date).getFullYear();
    $('#currentYear').text(currentYear);

    

    //one-liner
    var pageTitle = {
      pTitle: "Care Cards",
      subtitle: "<p>Mantras for patients to change themselves, clinicians, and the healthcare system.</p>"
    };
    var pageTitle_tpl = "<h1>{{pTitle}}</h1>{{{subtitle}}}";
    var pT_html = Mustache.to_html(pageTitle_tpl, pageTitle);
    $('#page-title').html(pT_html);

    team = { teams: [
      {   name : "Team",
          teamMembers : [
              {name : "Juhan Sonin",    role : "Author, juhan@goinvo.com"},
              {name : "Harry Sleeper",  role : "Author"},
              {name : "Sarah Kaiser",   role : "Artist, lead illustrator"},
              {name : "Jane Kokernak",  role : "Editor, researcher"},
              {name : "Emily Twaddell", role : "Editor, researcher"},
              {name : "Jennifer Patel", role : "Designer, web presence"}]
      },
      {   name : "Other Contributors",
          teamMembers : [
              {name : "Beth Herlin",     role : "Designer, researcher"},
              {name : "Kelly Mansfield", role : "illustrator"},
              {name : "Dirk Knemeyer",   role : ""},
              {name : "Eric Benoit",     role : ""}]
      }]
    };
    var team_tpl = '{{#teams}}<h3>{{name}}</h3>' +
              '{{#teamMembers}}<div class="team-member">{{>teamMember}}</div>{{/teamMembers}}{{/teams}}';
    var team_partials = {teamMember: '<p>{{name}} <br/><span class="role">{{role}}</span></p>'};
    var team_html = Mustache.to_html(team_tpl, team, team_partials);
    $('#team').html(team_html);

    //about
    var about = {
      title   : "About Care Cards",
      content : "<p>Care Cards put you in touch with habits to improve your health, life, and well-being. Our sometimes surprising, always practical axioms nudge you toward the healthiest life possible. This deck of cards will transform the way you think about yourself and what it means to be healthy.</p><p>There are 44 cards in our deck. On the front of each card is a beautiful illustration reminding you of a specific axiom that can move you in the direction of better health. On the back of each card, we give you essential insights, tips, and help in manifesting that axiom in your life.</p>"
    };
    var about_tpl = '<h2>{{title}}</h2>' + 
                  '{{{content}}}';
    var about_html = Mustache.to_html(about_tpl, about);
    $('#about').html(about_html);

    //download
    var download = {
      label : "Download on GitHub",
      url   : "https://github.com/goinvo/HealthAxioms"
    }
    var download_tpl = '<a href="{{url}}" class="button">{{label}}</a>';
    var dl_html = Mustache.to_html(download_tpl, download);
    $('#download').html(dl_html);

    //feedback
     var feedback = {
      label : "Send us your feedback!",
      email : "juhan@goinvo.com"
    }
    var feedback_tpl = '<a href="mailto:{{email}}" class="button">{{label}}</a>';
    var feedback_html = Mustache.to_html(feedback_tpl, feedback);
    $('#feedback').html(feedback_html);

    //cards
    $.getJSON('./assets/data/care-cards.json', function(data) {
      var card_tpl = $('#cardTpl').html();
      var html = Mustache.to_html(card_tpl, data);
      $('#cards').html(html);
    });


});