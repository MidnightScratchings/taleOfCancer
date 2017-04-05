console.log("Code loaded");

$(document).ready(function() {
	console.log("JQuery ready");

	var ch1 = false;
	var ch2a = true;

	// a branch
	$(".help").click(function() {
		if(ch1 == false) {
			console.log("Choice one complete");

			// main story
			$(".dia").append('<p>You turn away from the guards, swaying as your stomach drops. You reach out with one hand sluggishly, attempting to grasp upon something that simply was not there. Rain mingles with the freezing sweat that seeps up from every pore, your mouth gone dry with the faint tang of stomach acid. The grey landscape swirls like cream in coffee, the dull greys and browns mixing in a blurry painting. The mud swallows you whole with such eager and shocking glutton as your vision fades. Such a penetrating cold seems to be chased away by warm, but itchy, wool blankets and a small crackling fire. Your eyelids peel away by gravity\'s unforgiving hand, a woman in simple rags peering worriedly down at you, pointed nose tipped down in a motherly charm. You can ask <span class="ch">WHERE</span> you are, <span class="ch">WHAT</span> happened, or <span class="ch">WHO</span> the woman is.</p>');

			// buttons
			$(".dia").append('<div class="choice"><h3 class="whereA">WHERE</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whatA">WHAT</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whoA">WHO</h3></div>');

			$(".stay").remove();
			$(".help").remove();

			ch1 = true;	
		}
	});

	// b branch
	$(".stay").click(function() {
		if(ch1 == false) {
			console.log("Choice one complete");

			$(".dia").append('<p>"H-" you choke and you eyes roll. "H-hel.." the world sways, swallowing you whole. It rumbles as thuder roars above you, echoing boots\' march. <br> You awaken to the cry of lightning flashing in a swiftly closed doorway, accompanied by a blurry order for retrieval of some sort. Your chest heaves, forcing mud up to your lips and sending you sputtering. The platform you lie on is a raised metal table with a fur blanket drawn up to your shoulders. Tears openly stream from your eyes, obscuring your vision with obscene blurriness. <br> "Finally, you\'re awake." a man with dark leathery skin hovers above your head, his hawk-like nose glaring down at you. You can ask <span class="ch">WHERE</span> you are, <span class="ch">WHAT</span> happened, or <span class="ch">WHO</span> the man is.</p>');

			$(".dia").append('<div class="choice"><h3 class="whereB">WHERE</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whatB">WHAT</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whoB">WHO</h3></div>');

			$(".stay").remove();
			$(".help").remove();

			ch1 = true;	
		};
	});
});