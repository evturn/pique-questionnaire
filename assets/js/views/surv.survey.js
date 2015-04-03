var surv = surv || {};

surv.Survey = Backbone.View.extend({
	el: '#view',
	surveyTemplate: _.template($('#question-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.surveyTemplate());
		return this;
	},
});