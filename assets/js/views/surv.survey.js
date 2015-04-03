var surv = surv || {};

surv.Survey = Backbone.View.extend({
	el: '#questionnaire',
	surveyTemplate: _.template($('#question-template').html()),
	initialize: function() {
		this.renderQuestion();
	},
	events: {
		'click .question' : 'rotate'
	},
  rotate: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget);
    console.log(id);
    var next = id += 1;
    var question = this.collection.get(next);
    this.renderQuestion(question);
  },
	renderQuestion: function(model) {
		var model = model || this.collection.get(1);
		
			this.$el.append(this.surveyTemplate(model.toJSON()));
		
	},
});