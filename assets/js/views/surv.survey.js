var surv = surv || {};

surv.Survey = Backbone.View.extend({
	el: '#questionnaire',
	surveyTemplate: _.template($('#question-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.collection.each(function(model) {
			this.$el.html(this.surveyTemplate(model.toJSON()));
		}.bind(this));
	},
});