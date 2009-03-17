/*
Script: Fupdate.Append.js
	Handles the basic functionality of submitting a form and updating a dom element with the result. 
	The result is appended to the DOM element instead of replacing its contents.

License:
	MIT-style license
*/
Fupdate.Append = new Class({

	Extends: Fupdate,

	options: {
		//onBeforeEffect: $empty,
		useReveal: true,
		revealOptions: {},
		inject: 'bottom'
	},

	makeRequest: function(){
		this.request = new Request.HTML($merge({
				url: $(this).get('action'),
				waiterTarget: $(this)
		}, this.options.requestOptions)).addEvents({
			success: function(tree, elements, html, javascript){
				var container = new Element('div').set('html', html).hide();
				var kids = container.getChildren();
				if (kids.length == 1) container = kids[0];
				container.inject(this.update, this.options.inject);
				this.fireEvent('beforeEffect', container);
				var finish = function(){
					this.fireEvent('success', [container, this.update, tree, elements, html, javascript]);
				}.bind(this);
				if (this.options.useReveal) container.set('reveal', this.options.revealOptions).reveal().get('reveal').chain(finish);
				else finish();
			}.bind(this),
			failure: function(xhr){
				this.fireEvent('failure', xhr);
			}.bind(this)
		});
	}

});