console.log("Code loaded");

$(document).ready(function() {
	console.log("JQuery ready");

	var ch1 = 0;
	var ch2 = 0;
	var ch3 = 0;
	var ch4 = 0;

	// a branch
	$(".stay").click(function() {
		if(ch1 == 0) {
			console.log("Choice one complete");

			// main story
			$(".dia").append('<p>You turn away from the guards, swaying as your stomach drops. You reach out with one hand sluggishly, attempting to grasp upon something that simply was not there. Rain mingles with the freezing sweat that seeps up from every pore, your mouth gone dry with the faint tang of stomach acid. The grey landscape swirls like cream in coffee, the dull greys and browns mixing in a blurry painting. The mud swallows you whole with such eager and shocking glutton as your vision fades. Such a penetrating cold seems to be chased away by warm, but itchy, wool blankets and a small crackling fire. Your eyelids peel away by gravity\'s unforgiving hand, a woman in simple rags peering worriedly down at you, pointed nose tipped down in a motherly charm. You can ask <span class="ch">WHERE</span> you are, <span class="ch">WHAT</span> happened, or <span class="ch">WHO</span> the woman is.</p>');

			// buttons
			$(".dia").append('<div class="choice"><h3 class="whereA">WHERE</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whatA">WHAT</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whoA">WHO</h3></div>');

			$(".stay").remove();
			$(".help").remove();

			ch1 = 1;

			$(".whereA").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>Your lips part, words wheezing away. “W-where…?” your stomach heaves before you can continue, and you toss your head aside as muddy acid drips onto the wood floors, barely distinguishable under all the dirt that blankets every surface. A bony hand rests upon your back, gently holding you. The gesture is warm, sending slow shivers of relaxation through your whole body. You return to your original position, your eyes slipping closed in exhaustion. “You\'re in my humble home, love…” her voice is like old paper passed between worn hands, gentle and elderly in soul and eyes, not in body or heart. “You collapsed in the middle of the road. Have too many drinks, eh?” You can nod and <span class="ch">LIE</span>, or shake your head and tell the <span class="ch">TRUTH</span>.</p>');
				
					$(".whereA").remove();
					$(".whatA").remove();
					$(".whoA").remove();

					ch2 = 1;
				}
			});

			$(".whatA").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>“W-wha-” you throw your head to the side, sludge pouring through your lips. It burned your throat, your eyes rolling in dizzy spells. A warm hand rested on your back, sending nerves still and relaxed. Taking a shuddering breath, you lie back down with your eyelids fluttering. The woman\'s figure is blurred, swirling in a nauseous mess. “You collapsed in the middle of the road…” her voice echoed from varying points in the room, sending your mind reeling. “I took you in. You seem to be improving, despite how you probably feel…” she moves out of your vision, her walk more of a limping waddle as far as you can see before you squeeze your eyes shut out of another bought of nausea. “You need to eat. What do you prefer? Roast chicken, or stew?” You can choose <span class="ch">CHICKEN</span> or <span class="ch">STEW</span>.</p>');

					$(".whereA").remove();
					$(".whatA").remove();
					$(".whoA").remove();

					ch2 = 1;
				}
			});

			$(".whoA").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>“W-who...” you stutter, your chest struggling with gravity. Her kind hand warmed your shoulder, though it was tinged with a bitterness. “It doesn\'t matter… you collapsed in the street, and I am caring for you.” she pauses to let that sink in. “Who are you, since you are so intent on learning who I am?” You can <span class="ch">LIE</span> and tell of a person you made up, or tell the <span class="ch">TRUTH</span> and say that you don\'t know.</p>');

					$(".whereA").remove();
					$(".whatA").remove();
					$(".whoA").remove();

					ch2 = 1;
				}
			});
		}
	});

	// b branch
	$(".help").click(function() {
		if(ch1 == 0) {
			console.log("Choice one complete");

			$(".dia").append('<br><br><br><p>"H-" you choke and you eyes roll. "H-hel.." the world sways, swallowing you whole. It rumbles as thuder roars above you, echoing boots\' march. <br> You awaken to the cry of lightning flashing in a swiftly closed doorway, accompanied by a blurry order for retrieval of some sort. Your chest heaves, forcing mud up to your lips and sending you sputtering. The platform you lie on is a raised metal table with a fur blanket drawn up to your shoulders. Tears openly stream from your eyes, obscuring your vision with obscene blurriness. <br> "Finally, you\'re awake." a man with dark leathery skin hovers above your head, his hawk-like nose glaring down at you. You can ask <span class="ch">WHERE</span> you are, <span class="ch">WHAT</span> happened, or <span class="ch">WHO</span> the man is.</p>');

			$(".dia").append('<div class="choice"><h3 class="whereB">WHERE</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whatB">WHAT</h3></div>');
			$(".dia").append('<div class="choice"><h3 class="whoB">WHO</h3></div>');

			$(".stay").remove();
			$(".help").remove();

			ch1 = 1;	

			$(".whereB").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>“W-where…” you heave again, throwing your head to the side and spilling mud across his leather slippers. The man\'s grimace radiated from his body in waves. He shakes it off, sending dark mucus across the ornamental rug. “I see you\'re awake. You\'re in Storrho Castle, I am head sage Ionio. I\'ve been taking care of you for the past hour or so.” Ionio moves from your side a shelf beyond your vision, glass vials singing into his hands. Your body refuses to shift, besides your eyes that roll every once in awhile. A soft pounding takes to your head, soon accompanied by Ionio\'s well-worn hands which adjusts your temples to face up towards his crooked nose. “Where are you from, Stranger?” he asks as one of his fingers points straight down at your eye, and begins to glow with a warm yellow light. You can <span class="ch">LIE</span> and stutter some fake town or you can tell the <span class="ch">TRUTH</span>.</p>');

					$(".dia").append('<div class="choice"><h3 class="lieb1">LIE</h3></div>');
					$(".dia").append('<div class="choice"><h3 class="truthb1">TRUTH</h3></div>');

					$(".whereB").remove();
					$(".whatB").remove();
					$(".whoB").remove();

					ch2 = 1;

					$(".lieb1").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“I-I...” you stutter, taking in a massive, painful breath. Heaving again, the sage rolls his eyes and trains his unsympathetic gaze onto you. “You find me an idiot, do you?” his formerly gentle hands come slamming down onto your shoulders, sending you gasping. “You\'re hiding something, Stranger. And for stranger who lie, especially in <em>this castle</em>, they must be punished." he raises a thumb, glowing with an eerie purple light, and presses it against your forehead. A scream of agony erupts from your lips, your eyes falling blind once more. When you awake, you lie on cold cobblestones enclosed in iron bars, and the leather slippers of Ionio. Your eyes travel up his robe made of fur pelts and leather straps, and his hooked nose and piercing gold eyes. His arms are folded, his eyebrows furrowed in hidden fury. “The only reason you are not dead or thrown out is out of curiosity of the chapel.” he growls softly, and leaves. You can <span class="ch">CALL</span> after him or <span class="ch">SEARCH</span> your cell.</p>');

							$(".dia").append('<div class="choice"><h3 class="call">CALL</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="search">SEARCH</h3></div>');

							$(".lieb1").remove();
							$(".truthb1").remove();

							ch3 = 1;

							$(".call").click(function() {
								if(ch4 == 0) {
									console.log("Last choice complete");

									$(".dia").append('<p>“Wait!” you yell, surprised at the strength of your voice. You hear a frustrated groan and the scuffle of feet. He reappears in front of your cell with obvious fury that drips to the floor like acid. “I don\'t know where I\'m fro-" you begin standing, but are forced down by a sudden pain in your chest. A gasp escapes your lips as you crumble to the ground, your body falling into spasms. You can hear Ionio yelling for guards as you curl into a twitching ball. The dank cell is soon lit by a golden glow, and you scream as you realize the light peers out from cracks in your skin. You roar, a hissing sound within your body rising higher and higher until… white.</p>');

									$(".dia").append('<br><h2>Curiosity Will Kill the Cat <span class="ch">(Ending 1/24)</span></h2>');

									$(".call").remove();
									$(".search").remove();

									ch4 = 1;
								};
							});

							$(".search").click(function() {
								if(ch4 == 0) {
									console.log("Last choice complete");

									$(".dia").append('<p>You struggle to your feet, your hand outstretched to the wall in case you fall. The cell is quite sparse, with a bucket for a toilet and a similar wooden bench for resting and sleeping. A rusting faucet peers around from a crack in the wall, dripping water onto the stones with a clockwork melody. You begin to stumble towards the bench when a sharp pain stabs you into the chest. You cry out, falling to your knees, and Ionio does not return. Agony spreads through your body, a cheerful yellow glow filling the cell. To your horror, the light peers out from cracks in your skin. You roar, a hissing sound within your body rising higher and higher until… white.</p>');

									$(".dia").append('<br><h2>Destructive Alone <span class="ch">(Ending 2/24)</span></h2>');

									$(".call").remove();
									$(".search").remove();

									ch4 = 1;
								};
							});
						};
					});
				};
			});

			$(".whatB").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>“W-wha...” your chest heaves, but you pucker your lips to prevent an overspill. The man pulls the blanket up to your chin, nodding with a rather blank face. A hum exits his lips as his slippers hiss across the floor, glass vials from a distant cupboard tumbling into his hands. “You collapsed in the middle of the street. You\'re not malnourished, it\'s a cool day, and water is falling from the sky. Do you recall any illnesses that might cause such things?” You can tell the <span class="ch">TRUTH</span> and say you don\'t know, or <span class="ch">LIE</span>.</p>');

					$(".whereB").remove();
					$(".whatB").remove();
					$(".whoB").remove();

					ch2 = 1;
				}
			});

			$(".whoB").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>“W-who…” your chest heaves, threatening to spill dark mucus onto the ornamental rug. The man rolls his eyes, moving out of your vision. “It is of no importance to you, Stranger. Tell me, where do you hail from?” paper rustles on a wooden table as he asks said question. You can say you\'re from the <span class="ch">CITY</span> or from the <span class="ch">COUNTRY</span>.</p>');

					$(".whereB").remove();
					$(".whatB").remove();
					$(".whoB").remove();

					ch2 = 1;
				}
			});
		};
	});
});

// how to end: $(".dia").append('<br><h2><span class="ch"></span></h2>');