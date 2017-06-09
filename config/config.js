/* Magic Mirror Config Sample

 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	
	language: 'en',
	timeFormat: 12,
	units: 'metric',
	
	modules: [
		{
			module: 'email',
	            position: 'bottom_left',
	            header: 'Email',
	            config:{
	                user: 'summerqiu7@gmail.com',
	                password: '123',
	                host: 'imap.gmail.com',
	                port: 993,
	                tls: true,
	                authTimeout: 10000,
	                numberOfEmails: 5,
	                fade: true,
				maxCharacters: 30
			}
        },
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'My Agenda',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://calendar.google.com/calendar/ical/summerqiu7%40gmail.com/public/basic/ics'
						//url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'middle_center',
			config:{
				compliments:{
				    "morning" : [
				        "Good morning, Summer!",
				        "Who needs coffee when you have your smile?",
				        "Have a lovely day honey!",
				        "I'm not a photographer, but I can picture me and you together.",
				        "Did you invent the airplane? Cause you seem Wright for me. ",
				        "Is there an airport nearby or is that just my heart taking off?"
				    ],
				    "afternoon" : [
				        "You are making a difference!",
				        "Hi there Miss.beautiful!",
				        "I miss you already!",
				        "Excuse me, is your name Earl Grey? Because you look like a hot-tea!",
				        "Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
				        "Are you a parking ticket? 'Cause you've got fine written all over you.",
				        
				        
				    ],
				    "evening" : [
				        "You must be an amazing thief, you stole my heart already.",
				        "Hi, beautiful!",
				        "Are you a camera? Because every time I look at you, I smile.",
				        "Are you a magician? Because whenever I look at you, everyone else disappears!",
				        "If you were a vegetable you'd be a cute-cumber.",
				        "Do you play soccer? Because you're a keeper!",
				        "Do you have a map? I'm getting lost in your eyes.",
				        "I don't have a library card, but do you mind if I check you out?",
				        'You are now seeing the picture of the most beautiful girl (this one is original)'
			    	   ]
				}
			}
		
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'London, Ontario',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: '756a1bf850148da4765779684fec4ebd'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'London, Ontario',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: '756a1bf850148da4765779684fec4ebd'
			}
		},
		{
			module: 'newsfeed',
			position: 'lower_third',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
