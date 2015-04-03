var surv = surv || {};

surv.Home = Backbone.View.extend({
	el: '#header',
	surveyHeaderTemplate: _.template($('#survey-home-template').html()),
	registerTemplate: _.template($('#register-template').html()),
	initialize: function() {
		this.survey();
	},
	survey: function() {
		var survey = new surv.Survey({collection: questions});
		this.$el.html(this.surveyHeaderTemplate());
		return this;
	},
	register: function() {
		$('#view').empty();
		this.$el.html(this.registerTemplate());
		return this;
	},

});