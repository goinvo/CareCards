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
   
    //footer
    var currentYear = (new Date).getFullYear();
    $('#currentYear').text(currentYear); 

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

    //cards
    $.getJSON('./assets/data/care-cards.json', function(data) {
      var card_tpl = $('#cardTpl').html();
      var html = Mustache.to_html(card_tpl, data);
      $('#cards').html(html);
    });
});