/*
---
name: Behavior.Tips Tests
description: n/a
requires: [Clientcide/Behavior.Tips, Behavior-Tests/Behavior.SpecsHelpers]
provides: [Behavior.Tips.Tests]
...
*/

(function(){

	var pointy = '<a data-filters="PointyTip" rel="I\'m the caption." title="I\'m the title!" data-tip-direction="6">this link has a tip</a>';
	Behavior.addFilterTest({
		filterName: 'PointyTip',
		desc: 'Creates an instance of Tips.Pointy',
		content: pointy,
		returns: Tips.Pointy,
		expectations: [
			function(element, instance){
				expect(instance.tip.pointy.options.direction).toBe(6);
			}
		]
	});
	Behavior.addFilterTest({
		filterName: 'PointyTip',
		desc: 'Creates an instance of Tips.Pointy',
		content: pointy,
		returns: Tips.Pointy,
		multiplier: 10,
		noSpecs: true
	});

	var help = '<p class="jframe-inline" data-filters="HelpTip">I\'m some help text that gets turned into a help tip</p>';
	Behavior.addFilterTest({
		filterName: 'HelpTip',
		desc: 'Creates an instance of Tips.Pointy (help)',
		content: help,
		returns: Tips.Pointy,
		expectations: [
			function(element, instance){
				expect(instance.tip.pointy.options.direction).toBe(1);
			}
		]
	});
	Behavior.addFilterTest({
		filterName: 'HelpTip',
		desc: 'Creates an instance of Tips.Pointy (help)',
		content: help,
		returns: Tips.Pointy,
		multiplier: 10,
		noSpecs: true
	});

	var info = '<p class="jframe-inline" data-filters="InfoTip">I\'m some help text that gets turned into a help tip</p>';
	Behavior.addFilterTest({
		filterName: 'InfoTip',
		desc: 'Creates an instance of Tips.Pointy (info)',
		content: info,
		returns: Tips.Pointy,
		expectations: [
			function(element, instance){
				expect(instance.tip.pointy.options.direction).toBe(1);
			}
		]
	});
	Behavior.addFilterTest({
		filterName: 'InfoTip',
		desc: 'Creates an instance of Tips.Pointy (info)',
		content: info,
		returns: Tips.Pointy,
		multiplier: 10,
		noSpecs: true
	});

})();