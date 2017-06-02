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
                user: 'elvissunlihe@gmail.com',
                password: '123',
                host: 'imap.gmail.com',
                port: 993,
                tls: true,
                authTimeout: 10000,
                numberOfEmails: 5,
                fade: true,
            },
			maxCharacters: 30
        },
		{
			module: 'alert',
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
				        "Have a lovely day honey!"
				    ],
				    "afternoon" : [
				        "You are making a difference!",
				        "Hi there Miss.beautiful!",
				        "I miss you already!"
				    ],
				    "evening" : [
				        "You must be an amazing thief, you stole my heart already.",
				        "Hi, Sexy!",
				        "Your lips look lonely, wanna meet mine?",
				        "Happy Valentines Day!"
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
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
