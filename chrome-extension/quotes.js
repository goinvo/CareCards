var data;

var nameToLoad;
var saving = false;

$( document ).ready(function() {
    loadData();
    showRandomQuote();
  
    mixpanel.init("95c6ffeacd788ed19e76ff280cc3ff93");
    // track when a user opens a new tab
    mixpanel.track("new tab");
});
function showRandomQuote() {
    
  var rnd = Math.round(Math.random()*(data.length-1));
  var date = new Date();
  var week = date.format('j');
    
  // set week to a random number
  // comment to keep week as week number
  week = rnd;
    
  if(week > data.length) {
    week = rnd;
  }
  // console.log('week: ' + week);
	
  // url to poster
	var url;
			
	url = "<img src='/img/" + data[week].img + "'/>";
  
  document.getElementById("name").innerHTML = "— " + data[week].name;
  document.getElementById("quote").innerHTML = data[week].name;
  document.getElementById("caption").innerHTML = data[week].desc;
  document.getElementById("image").innerHTML = url;
    
  $('body').css({"font-family": "Avenir Next"});
  $('span.agree-text').text(data[week].agree);
  $('span.disagree-text').text(data[week].disagree);
  
  nameToLoad = data[week].img.slice(0,-4);
  
  animateGenius("#image");
  
  $("video.genius").click(function(){
    //mixpanel.track("genius clicked", {"genius": data[week].name});
  })
  
  function showCaption() {
    //mixpanel.track("show caption", {"genius": data[week].name});
    //console.log('caption in');
    $( "#caption" ).fadeIn('fast');
    $("#caption-container").css("border-bottom", "1px solid black");
  }
    
  var statsVisible = false;

  function animateGenius(element) {
    //alert("animate " + element);
    $( element ).animate({
        opacity: 1.0//,
        //bottom: "-80px"
    }, 500, "easeOutQuart", function() {
        $( "#quote" ).fadeIn('fast');
        $('#caption').fadeIn(function() {
          //$('#name').fadeIn();
          
        });
    });
  }
  
    function hideCaption() {
			//console.log('caption out');
			$( "#caption" ).fadeOut('fast');
			$("#caption-container").css("border-bottom", "1px solid white");
    }
    
    // countdown to next one
    var hoursLeft;
    var minutesLeft;
    
    calculateTimeRemaining();
    function calculateTimeRemaining() {
	hoursLeft = 24 - date.format('G');
	minutesLeft = 60 - date.format('i');
	
	if(minutesLeft < 60) {
	    hoursLeft = hoursLeft-1;
	}
	//$('#countdown').text("only "+ hoursLeft + " hours, and " + minutesLeft + " minutes, and " + secondsLeft + " seconds left until the next #genius");
	$('#countdown').text(hoursLeft + " hours and " + minutesLeft + " minutes " + "left");
	//$('#countdown').text("I agree, word.")
    }
}

var counter = 0;
var classname;
var percentage;

function loadData() {
  data = [
		{
			"name" : "Move More",
			"urlName" : "Move%20More",
			"id"   : "move-more",
			"img"  : "movemore.jpg",
			"desc" : "<p>Our ancestors walked 10,000 steps a day. People who walk or run 30 minutes at least five times a week live longer.</p><p>An increase in light activity increases fitness, so fidget and putter and do housework.</p><p>Friends who exercise together stick with it longer. Find an exercise buddy and then... run, bicycle, swim, row, hike, ski, or walk.</p><p>Make walking a daily habit &mdash; for your commute, errands, stairs, and fitness &mdash; and get that step count going up.</p>"
		}, {
			"name" : "Eat Food",
			"urlName" : "Eat%20Food",
			"id"   : "eat-food",
			"img"  : "eatfood.jpg",
			"desc" : "<p>Michael Pollan got it right: real food is better for humans.</p><p>The outer aisles of the supermarket are where the healthiest foods are: greens, fruits, poultry, nuts, grains, and diary. Fill up the cart.</p><p>Meals at home and a brownbag lunch at work are more nutritious than eating out.</p><p>Families who eat the evening meal together eat healthier.</p>"
		}, {
			"name" : "Drink Water",
			"urlName" : "Drink%20Water",
			"id"   : "drink-water",
			"img"  : "drinkwater.jpg",
			"desc" : "<p>Water is actually a nutrient. Our bodies need water replenished throughout the day to replace the large amount lost to vital functions.</p><p>Fluid needs, like energy needs, increase when we are active or outdoor temperatures are high.</p><p>High-fructose and sugared drinks make us gain weight and crave sweets. Water is the best thirst quencher.</p><p>An 8-ounce glass of water near your bed at night will remind you to start the day with what you cannot live without.</p><p>Drink up.</p>"
		}, {
			"name" : "Exercise is Medicine",
			"urlName" : "Exercise%20is%20Medicine",
			"id"   : "exercise-is-medicine",
			"img"  : "exerciseismedicine.jpg",
			"desc" : "<p>Exercise habits are as important a vital sign as a person's pulse, heart rate, and temperature.</p><p>Doctors should ask about, and record, their patients' activity levels.</p><p>150 minutes per week of moderate activity is recommended for baseline health benefits.</p><p>Exercise can also be included in a treatment plan: for injury recovery, weight loss, and even some mood disorders.</p>"
		}, {
			"name" : "Get More Sleep",
			"urlName" : "Get%20More%20Sleep",
			"id"   : "get-more-sleep",
			"img"  : "getmoresleep.jpg",
			"desc" : "<p>Healthy adults have a basal sleep need, or amount needed for optimal performance, of seven to eight hours per day. Children and teens need more.</p><p>A consistent sleep schedule, even on weekends, is critical. Insufficient sleep affects productivity, mental acuity, and even physical health.</p><p>Create a relaxing bedtime ritual, and keep laptops out of the bedroom. Beds are for sex and rest.</p><p>Short naps help you recharge and pay down a sleep deficit.</p><p>Make sleep a priority. Recommit to getting enough.</p>"
		}, {
			"name" : "Wash Your Hands",
			"urlName" : "Wash%20Your%20Hands",
			"id"   : "wash-your-hands",
			"img"  : "washyourhands.jpg",
			"desc" : "<p>Hand-washing reduces the spread of the flu, food poisoning, stomach bug, and other illnesses.</p><p>Fun fact: humans touch their hands to eyes, nose, or mouth about 15 times an hour. And hand-to-face contact accounts for about 30% of the risk of flu infection.</p><p>Plain old soap and warm water gets germs off your hands. Use warm water and plenty of suds.</p><p>Hand sanitizer with at least 60% alcohol &mdash; that's the magic number &mdash; is just as effective. Keep some at home and work, and carry it with you.</p>"
		}, {
			"name" : "Don't Rush the Brush",
			"urlName" : "Don%27t%20Rush%20the%20Brush",
			"id"   : "dont-rush-the-brush",
			"img"  : "dontrushthebrush.jpg",
			"desc" : "<p>Oral health is the gateway to total health.</p><p>The teeth, gums, and mouth allow us to eat good food, speak, and express emotion.</p><p>It's elementary: brush twice a day, for two minutes each time, and floss one of those times.</p><p>Dentists are doctors too &mdash; visit one annually for a checkup. Twice-a-year cleanings by a dental hygienist keep plaque under control.</p><p>It's foolish to neglect your pearly whites. Evidence has linked inadequate dental care with poor health and conditions like heart disease and diabetes.</p>"
		}, {
			"name" : "Better Safe than Sorry",
			"urlName" : "Better%20Safe%20than%20Sorry",
			"id"   : "better-safe-than-sorry",
			"img"  : "bettersafethansorry.jpg",
			"desc" : "<p>Injury is the leading cause of death in the US among people ages 1 to 44.</p><p>Know what it takes to protect you, and children in your care, from road accidents, falls, fire, drowning, and violence.</p><ul><li>Wear a helmet.</li><li>Buckle up.</li><li>Be the designated driver.</li><li>Build your core strength and balance.</li><li>Test your home smoke alarms.</li><li>Swim with a buddy.</li><li>Advocate for violence prevention programs, and join in.</li></ul>"
		}, {
			"name" : "Examine Yourself",
			"urlName" : "Examine%20Yourself",
			"id"   : "examine-yourself",
			"img"  : "examineyourself.jpg",
			"desc" : "<p>You are the expert on how your body looks and feels.</p><p>A few minutes of daily head-to-toe visual checks helps you notice changes, like a new freckle or unusual hair growth or loss.</p><p>Monthly checks &mdash; of skin and your male or female parts &mdash; give you information to share with your doctor.</p><p>And don't wait too long to share observations with your doctor. Call her if you notice a lump in the breast or genitals, a larger or asymmetrical mole, persistent skin changes (coloring, rash), or wounds or bruises that do not heal.</p>"
		}, {
			"name" : "Quit Smoking",
			"urlName" : "Quit%20Smoking",
			"id"   : "quit-smoking",
			"img"  : "quitsmoking.jpg",
			"desc" : "<p>Say &quot;No&quot; to smoking for good. The health rewards begin immediately.</p><p>Within 20 minutes, your heart rate and blood pressure drop.</p><p>Within 12 hours, the carbon monoxide level in your blood returns to normal.</p><p>In only one month, you'll exercise easier, your clothes and home will smell better, and your sense of taste will return.</p><p>In a year, coughing subsides and your risk of coronary heart disease plummets.</p><p>The use of smoking cessation products and therapies could double or triple the chance of lasting change: try the patch or a support group.</p><p>Today.</p>"
		}, {
			"name" : "Take Your Meds On Time",
			"urlName" : "Take%20Your%20Meds%20On%20Time",
			"id"   : "take-your-meds-on-time",
			"img"  : "takemedsontime.jpg",
			"desc" : "<p>Patients who stick to their medications have better outcomes. If you quit early, your health suffers.</p><p>All prescriptions have a medical purpose: to maintain or restore your health, reduce pain, or help you heal.</p><p>Part of your job is to follow the plan of care, so find a method that helps you take your meds on time.</p><p>A problem taking or paying for medication is not a sufficient reason to outright quit taking them. Talk to your doctor, nurse, or clinic staff for help.</p>"
		}, {
			"name" : "Have More Sex",
			"urlName" : "Have%20More%20Sex",
			"id"   : "have-more-sex",
			"img"  : "havemoresex.jpg",
			"desc" : "<p>Good health bolsters your sex life; your sex life bolsters your health.</p><p>Regular sex &mdash; once a week or more &mdash; is associated with greater immunity, less stress, fewer heart attacks, and longer life.</p><p>Two reasons to be happy: sex burns about five calories per minute and it unleashes mood-boosting endorphins.</p><p>If worries or physical challenges are hindering your enjoyment of sex, talk to your partner and possibly a doctor for reassurance and advice.</p>"
		}, {
			"name" : "Wrap It Before You Tap It",
			"urlName" : "Wrap%20It%20Before%20You%20Tap%20It",
			"id"   : "wrap-it-before-you-tap-it",
			"img"  : "wrapitbeforeyoutapit.jpg",
			"desc" : "<p>To avoid HIV infection and sexually transmitted diseases (STDs), a condom is the first line of defense. It forms a barrier between the penis and anus, vagina, or mouth. Bodily fluids cannot get past it.</p><p>For safer oral sex, there are dental dams.</p><p>Lower-risk sex play includes  kissing and fondling. There's no-risk sex play too, like masturbation (alone or mutual) and sharing fantasies.</p><p>Safe sex can be fun. It prompts exploration, reduces worry, and enhances trust. And no prescription is needed.</p>"
		}, {
			"name" : "Take Baby Steps",
			"urlName" : "Take%20Baby%20Steps",
			"id"   : "Take-baby-steps",
			"img"  : "takebabysteps.jpg",
			"desc" : "<p>Health behaviors are interconnected.</p><p>A small change in one area, like cutting down on tv time, triggers change in other areas, like diet.</p><p>A combination of small steps leads to big change: improved nutrition, greater activity, more motivation.</p><p>Two small behavior changes at a time, jump-started over a few weeks, are optimal.</p><p>Do two. Stick with them for six weeks, the amount of time needed to form a habit. Add two more.</p>"
		}, {
			"name" : "Meditate and Prosper",
			"urlName" : "Meditate%20and%20Prosper",
			"id"   : "meditate-and-prosper",
			"img"  : "meditateandprosper.jpg",
			"desc" : "<p>Meditation is the deliberate and continuous focus on one's breath, bodily sensations, and mental images.</p><p>While from the outside, it may look like &quot;just sitting still,&quot; meditation increases well-being.</p><p>People who meditate report feeling control over depression, anxiety, and levels of chronic pain.</p><p>Bonus: Because it's associated with a boost in empathy, meditation may improve the lives of those around us too.</p>"
		}, {
			"name" : "Do What Makes You Happy",
			"urlName" : "Do%20What%20Makes%20You%20Happy",
			"id"   : "do-what-makes-you-happy",
			"img"  : "dowhatmakesyouhappy.jpg",
			"desc" : "<p>Well-being is associated with long-term health and survival: happier people live longer and better.</p><p>Strong relationships &mdash; friends, family, or romance &mdash; are essential to feeling good about life.</p><p>Optimism at work increases productivity, creativity, and engagement.</p><p>50% of happiness is genetic, 10% is circumstantial, and 40% is a result of our own intentional activity. That's a big margin. Take a risk, find what matters to your, and incorporate it into your work or life."
		}, {
			"name" : "Bring the Exam Room to Me",
			"urlName" : "Bring%20the%20Exam%20Room%20to%20Me",
			"id"   : "bring-the-exam-room-to-me",
			"img"  : "bringtheexamroomtome.jpg",
			"desc" : "<p>The incorporation of a touch screen into a bathroom mirror means we can brush our teeth or look at ourselves naked and get vital information at the same time.</p><p>Sensors, cameras, and a built-in touch screen can put health data at our fingertips &mdash; for example, heart rate or medication instructions &mdash; and help the sick get better and the well stay healthy.</p><p>Bathroom &quot;smart&quot; mirrors are already available for the rich. Let's make them available in all of our homes.</p>"
		}, {
			"name" : "Live Your Care Plan",
			"urlName" : "Live%20Your%20Care%20Plan",
			"id"   : "live-your-care-plan",
			"img"  : "liveyourcareplan.jpg",
			"desc" : "<p>Your care plan is an agreement between you and your caregivers. It's important to establish, write down, and discuss your goals for your health.</p><p>Your doctor or care team can suggest self-care resources for nutrition, exercise, rest, and therapy.</p><p>Medication may be a key component of your care plan. (Take your meds!)</p><p>A care plan is a living document, to be reviewed and modified periodically. It's your blueprint for health.</p><p>Live it.</p>"
		}, {
			"name" : "Know Your Numbers",
			"urlName" : "Know%20Your%20Numbers",
			"id"   : "know-your-numbers",
			"img"  : "knowyournumbers.jpg",
			"desc" : "<p>Tracking your health through data, not just senses, lets you see you health in actionable ways.</p><p>Some data come from the lab tests your doctor orders. Make sure you understand what the numbers mean.</p><p>Apps and wearable sensors &mdash; for tracking sleep, activity, and food intake patterns &mdash; give you powerful daily data to monitor effects and make changes.</p><p>Data = medicine.</p><p>Your doctor shares some with you. It's time you collected your own health data and shared some with him.</p>"
		}, {
			"name" : "Give Me My Data!",
			"urlName" : "Give%20Me%20My%20Data!",
			"id"   : "give-me-my-data",
			"img"  : "givememydata.jpg",
			"desc" : "<p>Health habits and decisions are partially based on information.</p><p>When doctors, hospitals, and labs give us easy access to our health data, we can act more knowledgeably.</p><p>Medical charts must be redesigned, on paper and online, to be fully understood. Designers can help.</p><p>It's not enough to open the file cabinet; the health care system must exploit technologies that make getting and using our data more seamless with other tasks, like goal setting, fitness tracking, and calorie budgeting.</p>"
		}, {
			"name" : "Keep Good Records",
			"urlName" : "Keep%20Good%20Records",
			"id"   : "keep-good-records",
			"img"  : "keepgoodrecords.jpg",
			"desc" : "<p>A thorough health record is like an extension of your brain: it helps you remember major events and routine procedures and share that information with a new doctor.</p><p>Paper files are a good start.</p><p>Electronic files make your health information and medical history more portable.</p><p>Legally, your medical records are yours. So ask your doctor, dentist, and child's pediatrician for a copy.</p><p>And if your health network offers you access to your electronic record, sign up.</p>"
		}, {
			"name" : "The Doctor is in Your Pocket",
			"urlName" : "The%20Doctor%20is%20in%20Your%20Pocket",
			"id"   : "doctor-is-in-your-pocket",
			"img"  : "doctorinyourpocket.jpg",
			"desc" : "<p>Wearable gadgets and smartphone apps track data, vital signs, and health habits like sleep or nutrition.</p><p>Smartphones also help us search the Web for health information and subscribe to public-health messaging.</p><p>In the future, we'll use personal technologies even more to monitor micro changes in the body and fine tune medication, diet, exercise, and doctor visits. Scientists will use patient-generated data for population studies on disease and treatment.</p><p>Today, a wearable device can help you understand health issues, see patterns, and take action."
		}, {
			"name" : "Tell Them It Was Great",
			"urlName" : "Tell%20Them%20It%20Was%20Great",
			"id"   : "tell-them-great",
			"img"  : "tellthemitwasgreat.jpg",
			"desc" : "<p>Dopamine, the feel good chemical in our brains, is released when people hear something they like.</p><p>Positive messages are more powerful and lasting motivators than criticism. If you want to pack a punch, praise should be specific and timely.</p><p>We can also give ourselves credit and reward new health habits when personal goals are reached.</p><p>And a little boasting about positive results may inspire someone else to tackle a health or life challenge.</p>"
		}, {
			"name" : "Tell Someone",
			"urlName" : "Tell%20Someone",
			"id"   : "tell-someone",
			"img"  : "tellsomeone.jpg",
			"desc" : "<p>A simple remedy for stress relief is talking with a trusted friend, support group, or therapist.</p><p>Reaching out for social support lowers our levels of cortisol, the stress hormone.</p><p>By talking with a sympathetic listener, feelings are vented and burdens shared.</p><p>Talking about what’s bothering us also provides clarity and helps combat loneliness.</p><p>Open up.</p>"
		}, {
			"name" : "Talk About Death",
			"urlName" : "Talk%20About%20Death",
			"id"   : "talk-about-death",
			"img"  : "talkaboutdeath.jpg",
			"desc" : "<p>Humans of all ages deserve a good quality of life and good quality of death. Bringing the subject into the open is a first step.</p><p>Talk to your loved ones about your specific wishes for your final days. Make a living will, a legal document that formulates your preferences for prolonged medical treatments.</p><p>Consider the well-being of your survivors: make a will that legally provides how your property will be distributed after death and, if relevant, names a guardian for your children.</p><p>Doctors can have a conversation with patients, no matter their age or health level, about options for their final days that might include long-term care, palliative services, and, in cases of terminal illness, hospice.</p>"
		}, {
			"name" : "Who is Your Wingman?",
			"urlName" : "Who%20is%20Your%20Wingman?",
			"id"   : "who-is-your-wingman",
			"img"  : "whoisyourwingman.jpg",
			"desc" : "<p>If you are hospitalized, undergoing surgery, or seeing a specialist for a serious condition, bring a friend or relative with you.</p><p>Your wingman can help you navigate the experience, understand complex instructions, and advocate for your best interests if you are confused or impaired.</p><p>And, while you are well, get a health care proxy, a simple legal document that allows you to appoint a trusted person to make medical decisions for you if you are unable &mdash; because of serious accident or illness &mdash; to make them yourself.</p>"
		}, {
			"name" : "Let Patients Help",
			"urlName" : "Let%20Patients%20Help",
			"id"   : "let-patients-help",
			"img"  : "letpatientshelp.jpg",
			"desc" : "<p>Doctors, nurses, and other clinicians are experts on treatments and outcomes.</p><p>Patients are experts on their own priorities and limits.</p><p>When patients are involved in their own care, they manage conditions better, and they need fewer visits to specialists and hospitals and fewer tests.</p><p>Patients who search online for health and medical information tend to trust their doctors and be better prepared for the visit.</p><p>Good discussions may be prompted by patients' research. Doctors should encourage it.</p>"
		}, {
			"name" : "Nurses Save",
			"urlName" : "Nurses%20Save",
			"id"   : "nurses-save",
			"img"  : "nursessave.jpg",
			"desc" : "<p>There are more nurses than doctors. And nurse deliver most of the hands-on care.</p><p>Patients look to nurses for comfort, insight, and guidance when they experience fear, pain, or uncertainty related to their health.</p><p>New doctors rely on skilled nurses when learning to practice medicine.</p><p>Nurses are poised for leadership. Higher education is the key: a bachelor's degree means better outcomes for patients, and a graduate degree prepares hands-on nurses for management and leadership.</p><p>Recognize the critical role of nurses in your health care, and seek their knowledge.</p>"
		}, {
			"name" : "Doctor as Your Life Coach",
			"urlName" : "Doctor%20as%20Your%20Life%20Coach",
			"id"   : "doctor-as-your-life-coach",
			"img"  : "doctorasyourlifecoach.jpg",
			"desc" : "<p>Life issues &mdash; employment, housing, food access, and education &mdash; can profoundly affect health.</p><p>Doctors, nurses, and other health care workers have the potential to be at the nexus of their patients' lives, treating the whole person.</p><p>A patient's trust in the doctor is immense. That relationship can be leveraged to provide advice, real help, access to resources, and encouragement on life's diverse challenges.</p><p>When your doctor asks you how you are, give a real answer. Share information that will start a conversation about the circumstances of your life.</p>"
		}, {
			"name" : "Know the Cost",
			"urlName" : "Know%20the%20Cost",
			"id"   : "know-the-cost",
			"img"  : "knowthecost.jpg",
			"desc" : "<p>As national health care costs have risen, so have the costs that employers, workers, and even the retired and unemployed must bear.</p><p>Co-pays, deductibles, and out-of-pocket expenses are up.</p><p>It makes sense to research costs for doctors, hospitals, and treatments before you have to pay them or when you want to dispute a bill.</p><p>Healthcare pricing is available online from Internet companies and government agencies. Some big health plans also disclose price ranges.</p><p>Ask your doctor or dentist: Can you give me a written estimate?</p>"
		}, {
			"name" : "Medicare for All",
			"urlName" : "Medicare%20for%20All",
			"id"   : "medicare-for-all",
			"img"  : "medicareforall.jpg",
			"desc" : "<p>A national health care system, paid for by taxes, would provide free, comprehensive medical care to all.</p><p>Single-payer systems, like Canada's eliminate administrative overhead. Money is spent on health, not bureaucracy.</p><p>Everyone benefits, no matter their age or health status. The range of care is expanded, and evidence-based practices are shared across the system.</p><p>Single-payer systems devote more resources to preventative medicine, keeping us all healthier.</p>"
		}, {
			"name" : "Start Now",
			"urlName" : "Start%20Now",
			"id"   : "start-now",
			"img"  : "startnow.jpg",
			"desc" : "<p>What is one health action you can do now that you can do again tomorrow?</p><p>Try one of these:</p><ul><li>Drink water.</li><li>Take a walk.</li><li>Ignore the vending machine.</li><li>Eat greens.</li><li>Meet up with your fitness buddy.</li><li>Reach out to a trusted friend.</li></ul><p>The mental barrier to getting started is often the toughest one. Power through it today.</p><p>Once you overcome the inertia of getting started, make a plan to reach your health goals.</p><p>Go! Go! Go!</p>"
		}, {
			"name" : "Avoid Sunburn",
			"urlName" : "Avoid%20Sunburn",
			"id"   : "avoid-sunburn",
			"img"  : "avoidsunburn.jpg",
			"desc" : "<p>Your skin is the body's largest organ. It protects us, helps regulate body temperature, and permits sensation. Skin needs care through our lives, especially protection from the sun and ultraviolet (UV) radiation.</p><p>Sun's effects on the skin &mdash; wrinkles, freckling, and especially skin cancers &mdash; can be significantly lessened or prevented. Follow the ABC method, even on overcast days, when 40% of UV rays still get through clouds.</p><p>A is for avoiding the sun exposure at mid-day (10am to 4pm) when it's most intense. Play in the shade or enjoy the pool or beach under an umbrella.</p><p>B is for blocking the damaging UV rays by applying sunscreen with a sun protection factor (SPF) of 15 or higher for adults and 30 or higher for children. Reapply frequently.</p><p>C is for covering up with clothing, brimmed hats, and sunglasses with UV protection when heading outdoors for longer periods of recreation, exercise, and work.</p><p>And tanning &mdash; whether in the sun or at a salon &mdash; damages the skin over time, even if you wear sunscreen. The temporary &quot;glow&quot; of a tan masks the cumulative, long-term effects of UV exposure.</p><p>Protect the health of your skin every day of the year: avoid, block, and cover up.</p>"
		}, {
			"name" : "Who's Your Care Team?",
			"urlName" : "Who%27s%20Your%20Care%20Team%3F",
			"id"   : "care-team",
			"img"  : "careteam.jpg",
			"desc" : "<p>You have more than a primary doctor. There’s a team of people &mdash; nurse practitioners, specialists, dieticians, and even hospitalists &mdash; who occupy themselves around your care.</p><p>As a patient, you are the most important member of the team: captain. Be active. Understand the role of the different team members. Know your health goals and convey them to the team. Share complete information about your health, medications, and behaviors. Ask questions to understand recommendations and treatments.</p><p>If you have a chronic condition or impairment, the size and diversity of your team may increase. Find out: how will the different members interact?</p><p>Clear communication and engagement with your care team will give you a sense of control over your health and your life.</p>"
		}, {
			"name" : "Control Your Cholesterol",
			"urlName" : "Control%20Your%20Cholesterol",
			"id"   : "control-cholesterol",
			"img"  : "controlyourcholesterol.jpg",
			"desc" : "<p>High cholesterol increases your risk for developing heart disease atherosclerosis, and stroke. Good health depends on keeping your HDL and LDL at the right levels.</p><p>Know your numbers:</p><ul><li>LDL below 130 mg/dL.</li><li>HDL above 35 mg/dL.</li><li>Combined cholesterol below 200 mg/dL.</li></ul><p>If you are overweight, losing even 5 to 10 percent of your body weight can lower your cholesterol levels. Exercise for 30 minutes most days of the week. Regular exercise can increase HDL and reduce LDL. Eat heart-healthy foods. Avoid saturated and trans fats and choose foods high in omega-3s. Stock up on whole grains, veggies, and fruit.</p><p>You can inherit high cholesterol. Know your family history for high cholesterol, early heart disease, and high blood pressure.</p>"
		}, {
			"name" : "Donate Your Data to Science",
			"urlName" : "Donate%20Your%20Data%20to%20Science",
			"id"   : "donate-data",
			"img"  : "donateyourdata.jpg",
			"desc" : "<p>Did you know that you can contribute to scientific and medical research by swiping just a few cells from your mouth, skin, and gut? It's a painless little gift with big impact potential.</p><p>For insights into populations, scientists are collectively mapping the DNA (genetic code) and human microbiome (bacterial communities) from the bodies of thousands of living people to discover the origins of disease and health.</p><p>If you share your biological data from your saliva, skin, mucus, and, er, solid waste, it will be pooled with data from other human donors.</p><p>To find a way to participate, contact the clinical trials and research programs at your nearest hospital or search online for &quot;human genome&quot; or &quotmicrobiome&quot; and &quot;research.&quot;</p><p>Science, medicine, and the future of humanity will benefit. Your individual privacy will not be compromised. Give a few cells: it doesn't hurt.</p>"
		}, {
			"name" : "Food Is Medicine",
			"urlName" : "Food%20Is%20Medicine",
			"id"   : "food-med",
			"img"  : "foodismedicine.jpg",
			"desc" : "<p>&quot;Let food be thy medicine and medicine thy food.&quot Hippocrates, a physician in classical Greece, recommended this in 431 BC.</p><p>Physicians and nutritionists today are returning to his wisdom. While a medication or nutritional supplement typically isolates only a few beneficial chemicals, whole foods may contain thousands of phytonutrients that can enhance well being and illness resistance.</p><p>The food-as-medicine principles are worth studying and discussing with your doctor. Start here:</p><ul><li>Eat the rainbow, or a meal with a large variety of color, to insure diverse nutrients including antioxidants.</li><li>Know how to combine foods &mdash; like apples with blueberries, or carrots with avocado &mdash; to increase the body's ability to absorb nutrients.</li><li>Reduce sugar consumption, whether in processed or &quot;natural&quot; foods, juices, or beverages, to reduce triglycerides, blood pressure, and the body's storage of fat.</li><li>Lower your dependence on meat, stick to lean cuts, and cook with methods, like broiling and poaching, that produce fewer carcinogens than high-flame methods.</li><li>Seek nutrition counseling for your body's particular needs to perform as an athlete, heal after an injury or acute illness, or improve health with chronic conditions like diabetes, asthma, and allergies.</li><li>Finally, address malnutrition in your community and help overcome hunger. For some families, getting access to enough food and the right food can be a major health boost.</li></ul>"
		}, {
			"name" : "Healthcare Is a Human Right",
			"urlName" : "Healthcare%20Is%20a%20Human%20Right",
			"id"   : "healthcare-human-right",
			"img"  : "healthcarehumanright.jpg",
			"desc" : "<p>The health of our communities depends on the health of individual members.</p><p>The Universal Declaration of Human Rights, for all people and all nations, was proclaimed by the United Nations in 1948. Included as a fundamental right is a standard living that supports the health and well-being of one’s self and family.</p><p>World health leaders have asserted that governments must generate conditions in which every person can be as healthy as possible. The right to health does not mean a right to be healthy.</p><p>Because of insufficient access to health care and medical resources, 150 million people annually suffer financial catastrophe, and 100 million people pushed below the poverty line, because of personal expenditures related to health.</p><p>You can join workers’ campaigns, at your workplace or through a union, to advocate for universal healthcare. Politically, you can join a people’s movement, like one ongoing in Vermont, attend public forums, write letters to elected officials in your state, and vote for health care access.</p><p>Even if your own health care needs are covered, look for opportunities to insure access to health care for all.</p>"
		},{
			"name" : "Meet Your Eats",
			"urlName" : "Meet%20Your%20Eats",
			"id"   : "meet-your-eats",
			"img"  : "meetyoureats.jpg",
			"desc" : "<p>Food grown or produced locally &mdash; from lettuce to eggs to bread &mdash; are often fresher, with fewer chemicals applied for preservation or ripening, than foods produced far away or by large agrocompanies.</p><p>Make it a practice to read labels and signage not just for nutrition data and price, but for the origin and producer of your food. In your favorite grocery store, encourage the store manager to offer even more foods produced in your region. Get your neighbors to do the same.</p><p>Seek out your local farmers' market, including ones that operate in winter, and do more than shop there: talk to farmers about their growing methods and about farming issues that concern them.</p><p>Having a connection to the source of your food may induce you and your child to choose these nutritious foods again and again and even expand your exploration of regional specialties, whether vegetable, fruit, grain, fish, meat, or dairy.</p><p>Your involvement in the local and regional food chain is also good for business, insuring that small farmers, producers, and markets flourish and continue to provide the foods you value.</p>"
		}, {
			"name" : "Get Your Flu Shot",
			"urlName" : "Get%20Your%20Flu%20Shot",
			"id"   : "get-your-flu-shot",
			"img"  : "getyourflushot.jpg",
			"desc" : "<p>Influenza (flu) is a highly contagious and serious respiratory disease that is caused by a virus and can lead to serious complications, like pneumonia. It's way more than a &quot;bad cold.&quot;</p><p>Everyone 6 months or older should get a flu vaccine &mdash; whether shot or nasal spray &mdash; at the start of every flu season.</p><p>And, because flu viruses are constantly mutating or changing, and different flu viruses cause illnesses each year, it's critical to get a flu vaccine annually. Scientists and public health researchers track the flu and select vaccines best matched to viruses in current circulation.</p><p>While other health practices, such as frequent hand sanitizing, can help you lessen your exposure to the flu, the best way to avoid the flu is the current vaccine. It's not enough to have gotten one last year.</p><p>Getting vaccinated also protects your community, providing &quot;herd immunity,&quot; or an effect where enough people have been vaccinated that there is little opportunity for a local outbreak. By getting a flu shot, you help infants and pregnant women, for example, who cannot be immunized.</p>"
		}, {
			"name" : "Vaccinate Your Child",
			"urlName" : "Vaccinate%20Your%20Child",
			"id"   : "vaccinate",
			"img"  : "vaccinate.jpg",
			"desc" : "<p>Vaccines produce immunity from serious diseases. They are well designed and rigorously tested in scientific studies, and they protect the health of you, your child, and the community.</p><p>Follow the recommended schedule of vaccines, which starts for babies at 6 months old, and save your child from diseases that once injured or killed thousands of children. Polio, once the most feared disease in America, has been eliminated because of vaccines.</p><p>Vaccines, especially injected ones, may cause some discomfort and even pain at the site. Your child may fuss and complain. This is normal and can be soothed.</p><p>Discomfort from the vaccine is minimal compared to the pain, trauma, and even death that the disease itself could cause. Without the measles vaccine, one of the most effective available, your child has a 90% chance of contracting it from an infected person.</p><p>Talk to your trusted pediatrician or nurse practitioner and read valid information sources to understand vaccine technology and its place in human health.</p><p>Keep your child on schedule for the series of vaccines recommended from birth through the teenage years.</p>"
		}, {
			"name" : "Smile",
			"urlName" : "Smile",
			"id"   : "smile",
			"img"  : "smile.jpg",
			"desc" : "<p>Charles Darwin, writing in 1872, suggested that &quot;even the simulation of an emotion arouses it in our minds.&quot; A century later, the facial feedback hypothesis asserted that muscle feedback from facial expressions helped regulate emotions. A change in the body’s expression of emotion might prompt genuine feeling.</p><p>Deliberately turning up the corners of your mouth &mdash; smiling &mdash; may ‘trick’ the mind and body into a better mood.</p><p>A smile also draws people to you, which is good for social interactions.</p><p>If tired or stressed, prompt yourself to smile. Your face will appear brighter and more refreshed, improving your appearance and approachability. Because of mirror neurons, people will likely repay your smile with their own, and in turn boost your mood.</p><p>Even if you’re not in the mood, think &quot;smile&quot; and let it light up your face and trigger a moment of happiness, your own and others.</p>"
		}, {
			"name" : "Skip the Salt",
			"urlName" : "Skip%20the%20Salt",
			"id"   : "skip-salt",
			"img"  : "skipthesalt.jpg",
			"desc" : "<p>When you consume more salt than your body needs, sodium builds up in your blood. This causes your body to hold water, increasing your blood volume and pressure. Chronic high blood pressure can lead to heart disease, stroke, kidney disease, and congestive heart failure.</p><p>The recommended limit for sodium is less than 2,300 mg/day and 1,500 mg/day if you are over age 51. Certain genetically based characteristics can make some people especially sensitive to sodium, as well.</p><p>One teaspoon of table salt contains 2,325 mg of sodium! To avoid hidden salt in your diet, try these tips: Buy fresh ingredients without added salt. Avoid canned, frozen, and other processed foods. Avoid spice blends, dressings, and sauces with added salt. Look for &quot;low sodium&quot; or &quot;no salt added&quot; products. Learn to read nutrition information labels on packaged foods.</p>"
		}, {
			"name" : "Slow Down",
			"urlName" : "Slow%20Down",
			"id"   : "slow-down",
			"img"  : "slowdown.jpg",
			"desc" : "<p>Rushing produces errors. Being distracted when you are with someone prevents deep connection. Hurrying through a meal diminishes your enjoyment of the food and may upset your digestion.</p><ul><li>A human be-ing, not a human do-ing.</li><li>Let yourself have some silence.</li><li>Single-tasking--focus completely on one thing at a time.</li><li>Do less. Decide what is really important, and let the rest go.</li><li>Reduce your commitments.</li><li>Learn to be present, no matter what you are doing.</li><li>Disconnect from the electronic world.</li><li>Focus on the people, nature, food as you eat it.</li><li>Breathe.</li></ul>"
		}, {
			"name" : "Sit Less",
			"urlName" : "Sit%20Less",
			"id"   : "sit-less",
			"img"  : "sitless.jpg",
			"desc" : "<p>It’s not a new idea: people have known since the 1950s that sitting for long periods of time is not good for your health. Prolonged sitting has been found to slow the body’s metabolism of glucose and significantly cuts the production of enzymes that break down fats in the blood.</p><p>But standing all day isn’t good for us, either. It burns a few more calories, but it strains the circulatory system, legs, and feet, and increases the risk of varicose veins.</p><p>How to find a happy medium at work? Try these tips:</p><ul><li>Sit while writing or doing computer work</li><li>Stand while talking on the phone</li><li>Hold standing meetings—keep them short!</li><li>Visit a co-worker instead of sending a text or e-mail</li><li>Every 20–30 minutes, stand up and move for a couple of minutes</li></ul>"
		}, {
			"name" : "Speak Up",
			"urlName" : "Speak%20Less",
			"id"   : "speak-up",
			"img"  : "speakup.jpg",
			"desc" : "<p>Physicians have an important role to play in health advocacy for patients and populations. Their voices are needed in the community: as community volunteers, public health and public policy experts, and in other roles that support human well-being. In fact some researchers believe that advocacy competencies should be introduced in medical schools.</p><p>Many doctors still feel there is too much risk in acting publicly. Some are overwhelmed by the administrative demands of healthcare reform. Others are simply burned out.</p><p>Just as patients must learn to advocate for themselves, so do medical practitioners.</p>"
		}, {
			"name" : "Manage Your Blood Pressure",
			"urlName" : "Manage%20Your%20Blood%20Pressure",
			"id"   : "manage-your-blood-pressure",
			"img"  : "manageyourbloodpressure.jpg",
			"desc" : "<p>In addition to helping you feel your best, a healthy weight helps you to lower your risk for high blood pressure, diabetes, high cholesterol, and more.</p><p>Body Mass Index (BMI) is one measure that you and your medical practitioner can use to determine the healthiest weight range for you. It’s important to know both the top and bottom of your healthy range, since being underweight carries many risks as well, including anemia, fragile bones, and a weakened immune system.</p><p>Try these tips for getting to a healthier weight:</p><li>Know what goes into your food. Learn how to interpret nutrition information on package labels.</li><li>Use fresh ingredients rather than processed foods, and cook at home more often.</li><li>Take appropriate portions—don’t super-size!</li><li>Make every bite count—avoid empty calories.</li><li>Decrease your screen time and move more!</li>"
		}, {
			"name" : "Ask Questions",
			"urlName" : "Ask%20Questions",
			"id"   : "ask-questions",
			"img"  : "askquestions.jpg",
			"desc" : "<p>Who is the most important member of your care team? You are!</p><p>Being a strong self-advocate is important to your health, even when you aren’t sick. Here are some tips to remember:</p><ul><li>Become an active participant in your own healthcare plan.</li><li>Know your rights.</li><li>Learn how to communicate clearly.</li><li>Identify your needs and wants.</li><li>Keep track of your health information.</li><li>Learn how to access your medical records.</li><li>Learn about your special needs or conditions.</li><li>Ask questions, before, during, and after an appointment.</li><li>Record what the doctor tells you.</li><li>Bring a trusted advisor along to your appointments.</li></ul><p>You deserve to be treated with dignity and respect. If you aren’t comfortable talking with your healthcare provider or other members of your care team, seek help through counseling or patient advocacy resources.</p>"
		}, {
			"name" : "Sugar Kills",
			"urlName" : "Sugar%20Kills",
			"id"   : "sugar-kills",
			"img"  : "sugarkills.jpg",
			"desc" : "<p>Sucrose. Fructose. They’re not just about cavities and empty calories any more.</p><p>Research suggests that sugar’s negative impact on human health results not only from its caloric value—it’s in how our bodies process sugar, and that is the same whether one is lean or obese. High sugar consumption is closely linked to metabolic syndrome, insulin resistance, diabetes, and several other chronic disorders.</p><p>Added sugars are hard to avoid in the American diet. Reduced-fat products, “naturally sweetened” items, fruit and vegetable juices, and many low-fat, low-sodium “healthy” foods are loaded with sugar.</p><p>Talk to your care team. Learn to read food labels. Question information sources. Know your risks.</p>"
		}, {
			"name" : "Shrink the Drink",
			"urlName" : "Drink%20Less%20Alcohol",
			"id"   : "drink-less-alcohol",
			"img"  : "shrinkthedrink.jpg",
			"desc" : "<p>If you drink alcohol, moderation is key. Alcohol overuse can increase your risk for cancer, pancreatitis, liver disease, high blood pressure, stroke, heart damage, accidental death, and suicide.</p><p>Try these tips to curb your alcohol intake:</p><ul><li>Use a smaller glass</li><li>Substitute flavored seltzer or juice</li><li>Check alcohol content and choose the lighter option</li><li>Avoid drinks with ambiguous amounts of alcohol like punch and cocktails</li><li>Choose activities that don’t involve drinking</li></ul>"
		}, {
			"name" : "Know Your Diabetes Plan",
			"urlName" : "Know%20Your%20Diabetes%20Plan",
			"id"   : "know-your-diabetes-plan",
			"img"  : "knowyourdiabetesplan.jpg",
			"desc" : "<p>Staying healthy with diabetes can mean lifestyle changes. Together with your care team, you can create a plan to actively manage your diabetes in the context of your overall health. </p><p>A diabetes management plan helps remind you to:</p><ul><li>Check blood sugars</li><li>Check feet</li><li>Eat healthy</li><li>Exercise regularly</li><li>Manage weight</li><li>Reduce salt</li><li>Take meds regularly</li><li>Manage stress</li><li>Get enough sleep</li><li>Quit smoking</li><li>Limit alcohol</li></ul><p>You can live a healthy life with diabetes, and your care team is there to guide you.</p>"
		}, {
			"name" : "Eat Less Meat",
			"urlName" : "Eat%20Less%20Meat",
			"id" : "eat-less-meat",
			"img" : "eatlessmeat.jpg",
			"desc" : "<p>Removing red and processed meat from your diet reduces your risk for cancer, heart disease, type 2 diabetes, hypertension, high cholesterol, obesity, and more.</p><p>Raising animals for food accounts for over a third of our fossil fuel consumption and is the leading source of water pollution.</p><p>Consuming the residual antibiotics in meat - even organic - lead to drug-resistant “superbugs”. The more we eat it, the more people die from simple and preventable bacterial infections.</p><p>You won’t be missing anything. The key nutrients in meat can all be found in a plant-based diet of fruits, vegetables, grains, beans, legumes and nuts.</p><p>Pick from a variety of alternatives - tofu, seitan, tempeh, vegetable meat, mushrooms, beans, quinoa, the list goes on!</p><p>Start with Meatless Mondays, and work your way toward totally meatless. Whether you are a child, an athlete, pregnant, or lactating. Being vegetarian is just plain healthier.</p>"
		}, {
			"name" : "Check Your Blood Sugar",
			"urlName" : "Check%20Your%20Blood%20Sugar",
			"id" : "check-your-blood-sugar",
			"img" : "checkyourbloodsugar.jpg",
			"desc" : "<p>If you are diabetic, keeping track of your blood glucose (blood “sugar”) level is an essential part of your care plan. Talk with your doctor about your target levels and what to do if your glucose level is too high or too low. A diabetes educator can explain the tools, techniques, recording methods, and how to interpret your numbers.</p><p>Blood glucose levels can be affected by food, medicine, and activity. In addition to following your regular tracking schedule, check your blood if you experience any of these symptoms of low blood sugar:</p><ul><li>Hunger</li><li>Trembling</li><li>Sweating, light-headedness</li><li>Sleepiness</li><li>Anxiety or confusion</li></ul><p>Keep a record of your blood glucose numbers, the time of day, and any other relevant information to share with your care team.</p>"
		}, {
			"name" : "Manage Your Weight",
			"urlName" : "Manage%20Your%20Weight",
			"id" : "manage-your-weight",
			"img" : "manageweight.jpg",
			"desc" : "<p>In addition to helping you feel your best, a healthy weight helps you to lower your risk for high blood pressure, diabetes, high cholesterol, and more. </p><p>Body Mass Index (BMI) is one measure that you and your medical practitioner can use to determine the healthiest weight range for you. It’s important to know both the top and bottom of your healthy range, since being underweight carries many risks as well, including anemia, fragile bones, and a weakened immune system.</p><p>Try these tips for getting to a healthier weight:</p><ul><li>Know what goes into your food. Learn how to interpret nutrition information on package labels.</li><li>Use fresh ingredients rather than processed foods, and cook at home more often. </li><li>Take appropriate portions &mdash;don’t super-size!</li><li>Make every bite count &mdash;avoid empty calories.</li><li>Decrease your screen time and move more!</li></ul>"
		}
	]
}