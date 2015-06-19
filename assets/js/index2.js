$(document).ready(function() {
     var data = {
      menuItems: [
        {   'name' : 'Cards',
            'url'  : 'cards'},
        {   'name' : 'About',
            'url'  : 'about'}, 
        {   'name' : 'Feedback',
            'url'  : 'feedback'
        }],
      pageTitle: [
        {   'title' : 'Care Cards',
            'content'  : '<p>Mantras for patients to change themselves, clinicians, and the healthcare system.</p>'
        }],
      about: [
        { 'title'   : 'About Care Cards',
          'content' : '<p>Care Cards put you in touch with habits to improve your health, life, and well-being. Our sometimes surprising, always practical axioms nudge you toward the healthiest life possible. This deck of cards will transform the way you think about yourself and what it means to be healthy.</p><p>There are 32 cards in our deck. On the front of each card is a beautiful illustration reminding you of a specific axiom that can move you in the direction of better health. On the back of each card, we give you essential insights, tips, and help in manifesting that axiom in your life.</p>'
        }],
      links: [
        { 'download' : [
          {
            'label' : 'Download on GitHub',
            'url' : 'https://github.com/goinvo/HealthAxioms'
            'id' : 'download'
          }], 
          'buy' : [
          {
            'label' : 'Buy a Deck',
            'url' : 'https://github.com/goinvo/HealthAxioms'
            'id' : 'buy'
          }]
        }]
    };

    //menu
    var menu_tpl = '<ul>{{#menuItems}}<li><a href="./#{{url}}">{{name}}</a></li>{{/menuItems}}</ul>';
    var html = Mustache.to_html(menu_tpl, menu);
    $('#menu').html(html);
    
    //pageTitle
    var pageTitle_tpl = "{{#pageTitle}}<h1>{{title}}</h1>{{{content}}}{{/pageTitle}}";
    var html = Mustache.to_html(pageTitle_tpl, pageTitle);
    $('#page-title').html(html);

    //about
    var about_tpl = "{{#about}}<h1>{{title}}</h1>{{{content}}}{{/about}}";
    var html = Mustache.to_html(about_tpl, about);
    $('#about').html(html);

    //download/buy
    var download_tpl = '{{#download}}<a href="{{url}}" class="button" id="download">{{label}}</a>{{/download}}'
    var download_tpl = '{{#buy}}<a href="{{url}}" class="button" id="download">{{label}}</a>{{/buy}}'

    //feedback?

    //cards
    $.getJSON('./assets/data/care-cards.json', function(data) { 
        var card_tpl = '{{#cards}}<div class="card row"><div class="card-img one-half column" id="{{id}}"><img src="./assets/images/opt-cards/{{img}}" alt="{{name}}" class="scale-with-grid" /></div><div class="card-desc one-half column"><h3>{{name}}</h3>{{{desc}}}</div></div>{{/cards}}';
        //var card_tpl = $('#card_tpl');
        var html = Mustache.to_html(card_tpl, data);
        $('#cards').html(html);
        //console.log(data);

      /*  for(var i=0,j=data.cards.length; i<j; i++){
          var card = $("#" + data.cards[i].id);
          var pos = card.position();

          $(window).scroll(function(){ 
              var windowpos = $(window).scrollTop();
              if (windowpos >= pos.top) {
                  card.addClass("stick");

               console.log(card.position);
              } else {
                  card.removeClass("stick"); 
              }
          });
        }*/

        
    });

});