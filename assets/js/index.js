$(document).ready(function() {
    //header
     var menu = {
      menuItems: [
        {
          'name' : 'Cards',
          'url'  : '/#cards'
        }, {
          'name' : 'Packs',
          'url'  : '/packs'
        }, {
          'name' : 'About',
          'url'  : '/#about'
        }, {
          'name' : 'Buy',
          'url'  : 'http://www.amazon.com/Health-Axioms-Card-Juhan-Sonin/dp/B00IBJQPX8/',
          'target' : '_blank'
        }, {
          'name' : 'Feedback',
          'url'  : 'mailto:juhan@goinvo.com'
        } 
      ]
    };
    var menu_tpl = '<div class="container"><ul>{{#menuItems}}' + 
                      '<li><a href="{{url}}" target="{{target}}">{{name}}</a></li>' + 
                    '{{/menuItems}}</ul></div>';
    var menu_html = Mustache.to_html(menu_tpl, menu);
    $('#menu').html(menu_html);
   
    //cards
    $.getJSON('./assets/data/care-cards.json', function(data) {
      var card_tpl = $('#cardTpl').html();
      var html = Mustache.to_html(card_tpl, data);
      $('#cards').html(html);
    });

    //quotes
    $.getJSON('./assets/data/quotes.json', function(data) {
      var quote_tpl = $('#quotesTpl').html();
      var html = Mustache.to_html(quote_tpl, data);
      $('#quotes').html(html);
    });

    //team
    team = { teams: [
      {   name : "Team",
          teamMembers : [
              {name : "Juhan Sonin",    role : "Author, juhan@goinvo.com"},
              {name : "Harry Sleeper",  role : "Author"},
              {name : "Sarah Kaiser",   role : "Artist, lead illustrator"},
              {name : "Jane Kokernak",  role : "Editor, researcher"},
              {name : "Emily Twaddell", role : "Editor, researcher"},
              {name : "Jennifer Patel", role : "Designer/Engineer, web presence"},
              {name : "Yanyang Zhou", role : "Engineer, web presence"}]
      },
      {   name : "Other Contributors",
          teamMembers : [
              {name : "Beth Herlin",     role : "Designer, researcher"},
              {name : "Kelly Mansfield", role : "Illustrator"},
              {name : "Dirk Knemeyer",   role : ""},
              {name : "Eric Benoit",     role : ""}]
      }]
    };
    var team_tpl = '{{#teams}}<h3>{{name}}</h3>' +
              '{{#teamMembers}}<div class="team-member">{{>teamMember}}</div>{{/teamMembers}}{{/teams}}';
    var team_partials = {teamMember: '<p>{{name}} <br/><span class="role">{{role}}</span></p>'};
    var team_html = Mustache.to_html(team_tpl, team, team_partials);
    $('#team').html(team_html);

    //footer
    var currentYear = (new Date).getFullYear();
    $('#currentYear').text(currentYear); 

    //packs
    $.getJSON('../../assets/data/packs.json', function(data) {
      var packsTpl = $('#packsTpl').html();
      var html = Mustache.to_html(packsTpl, data);
      $('#packs').html(html);

      var url = window.location.href;
      if(url.indexOf("#")!= -1) {
          var anchor = url.substr(url.indexOf("#") + 1).toString();
          //console.log(anchor)
          // console.log($("#diabetes"))
          // var top = document.getElementById(anchor).offsetTop; //Getting Y of target element
          // window.scrollTo(0, top);
          var link = "location.href='#"+anchor+"'";
          console.log(link)
          $("body").attr("onload",link)
      }

      if ( $(window).width() > 750) {   
        $(".pack-images-group img").click(function() {
          //change current image of the current pack
          var current_image = $(this).attr("name");
          $(this).closest('.pack').find('.current-image').attr("src","../assets/images/optCards/"+current_image);
        });
      }
      else {
        //Add your javascript for small screens here
        $(".pack-images-group img").click(function(){
            var currentIndex = $(this).index();
            var width = $(this).width() * 6;
            var height = $(this).height() * 6;
            var items =[];
            var index = currentIndex;
            var item;
            for(var i = 0; i < 13; i++) {
               item = {
                src: $(this).parent('.pack-images-group').find("img:nth-child("+(index+1)+")").attr('src'),
                w: width,
                h: height
               };
               items.push(item);
               index++;
               if(index > 12) {
                index = 13 - index;
               }
            }
            openPhotoSwipe(items);
        });
      }
    });

});

function openPhotoSwipe(items) {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  // var items = [
  //     {
  //         src: imageAddress,
  //         w: width,
  //         h: height
  //     }
  // ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
      history: false,
      focus: false,

      showAnimationDuration: 0,
      hideAnimationDuration: 0
      
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
}