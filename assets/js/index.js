$(document).ready(function() {
    //header
     var menu = {
      menuItems: [
        {
          'name' : 'Cards',
          'url' : 'cards'
        },
        {
          'name' : 'About',
          'url' : 'about'
        },
        {
          'name' : 'Feedback',
          'url' : 'feedback'
        } 
      ]
    };
    var menu_tpl = '<ul>{{#menuItems}}<li><a href="./#{{url}}">{{name}}</a></li>{{/menuItems}}</ul>';
    var menu_html = Mustache.to_html(menu_tpl, menu);
    $('#menu').html(menu_html);

    //one-liner
    var pageTitle = {
      pTitle: "Care Cards",
      subtitle: "<p>Mantras for patients to change themselves, clinicians, and the healthcare system.</p>"
    };
    var pageTitle_tpl = "<h1>{{pTitle}}</h1>{{{subtitle}}}";
    var pT_html = Mustache.to_html(pageTitle_tpl, pageTitle);
    $('#page-title').html(pT_html);

    //about
    var about = {
      title: "About Care Cards",
      content: "<p>Care Cards put you in touch with habits to improve your health, life, and well-being. Our sometimes surprising, always practical axioms nudge you toward the healthiest life possible. This deck of cards will transform the way you think about yourself and what it means to be healthy.</p><p>There are 32 cards in our deck. On the front of each card is a beautiful illustration reminding you of a specific axiom that can move you in the direction of better health. On the back of each card, we give you essential insights, tips, and help in manifesting that axiom in your life.</p>"
    };
    var about_tpl = "<h1>{{title}}</h1>{{{content}}}";
    var about_html = Mustache.to_html(about_tpl, about);
    $('#about').html(about_html);

    //download
    var download = {
      label : "Download on GitHub",
      url : "https://github.com/goinvo/HealthAxioms"
    }
    var download_tpl = '<a href="{{url}}" class="button">{{label}}</a>';
    var dl_html = Mustache.to_html(download_tpl, download);
    $('#download').html(dl_html);
    //buy
    var buy = {
      label : "Buy a Deck",
      url : "https://github.com/goinvo/HealthAxioms"
    }
    var buy_tpl = '<a href="{{url}}" class="button">{{label}}</a>';
    var buy_html = Mustache.to_html(buy_tpl, buy);
    $('#buy').html(buy_html);

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