var surv = surv || {};

new surv.Home();

new WOW(
    { offset: 120 }
).init();


var questionnaire = [
	{
		question: 'How important is the proximity of team members to you?',
		id: 1,
		options: [
			'No important',
			'Important'
		]
	},
	{
		question: 'What type of projects are you interested in?',
		id: 2,
		options: [
			'Mobile Apps',
			'Web Apps',
			'Social Good',
			'Social Media',
			'Networking',
			'Fin Tech',
			'Fashion',
			'Food',
			'Travel'
		]
	},
	{
		question: '',
		id: 3,
		options: [
			'',
			'',
			'',
			'',
			''

		]
	},
	{
		question: '',
		id: 4,
		options: [
			'',
			'',
			'',
			'',
			'',
			''
		]
	}
];



