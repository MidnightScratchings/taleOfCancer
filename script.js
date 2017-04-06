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
				
					$(".dia").append('<div class="choice"><h3 class="lieA1">LIE</h3></div>');
					$(".dia").append('<div class="choice"><h3 class="truthA1">TRUTH</h3></div>');

					$(".whereA").remove();
					$(".whatA").remove();
					$(".whoA").remove();

					ch2 = 1;

					$(".lieA1").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>You nod faintly, a smile drawing across your cheeks, even a chuckle dancing on your lips. The woman rasps a laugh softly, her chest rumbling with light humor. She moves away, almost waddling with her tan clothes disappearing into the similar brown tones of the room. “Can you stand?” she calls, sharp thumps suggesting she was cutting something. You can <span class="ch">LIE</span> and say yes, or tell the <span class="ch">TRUTH</span> and say no.</p>');

							$(".dia").append('<div class="choice"><h3 class="lieA2">LIE</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="truthA2">TRUTH</h3></div>');

							$(".lieA1").remove();
							$(".truthA1").remove();

							ch3 = 1;

							$(".lieA2").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>“I-I can…” you say, your voice gaining strength. Gravity cries as you lift yourself up, bare feet dangling over the floor as you cast aside the blanket and carefully avoid the sludge you summoned. You cast a glance towards the woman, whose back is turned. She stands at a wooden table, chopping what seems to be carrots. You mumble you thanks and goodbyes as you stand, finding your socks and shoes near the molding plank of a door, which you push open gently and step out into the gloomy world. The guards still stand to attention, this time casting wary grimaces in your direction. You raise a hand in greeting as you pass over the town border. The trees arch over you, though giving way to the relentless torrent of rain that bombard your skin. Birds call out to you, sending a smile to your face. Such an expression turns sour as they leap into flight, frightened. Your stomach jerks you to your knees, a cry escaping your lips. Sulphurous light screams across the dull world, shining from cracks upon your skin. Your head is wrenched up to the sky, the rain gifting you no comfort as agony races upon your broken flesh. The world becomes terribly white, your ears ringing as your body gives way.</p>');

									$(".dia").append('<br><h2>Childish Strength <span class="ch">(Ending 13/24)</span></h2>');

									$(".lieA2").remove();
									$(".truthA2").remove();

									ch4 = 1;
								};
							});

							$(".truthA2").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>You shake your head, withholding another slew of sludge. “No…” you mumble weakly. The thumps cease, uneasy silence sending eerie chills through the room. The woman waddled over again, her arms wrapping around you as she gently cradled you upwards. “It\'s been a long time since I\'ve seen my children..." she whispers softly, tears flooding into her voice to leave her eyes dry. Your body sways, eyes gently closed. Her body is warm as she sits on the bed that holds you. “The dirt beneath the feet of our enemy has their blood now… their bones.” she adds solemnly. Cold chills are countered with fire-like pain licking at your skin. “My life has no rhyme nor reason. I am old, the end is here at the door for you and me.” her body hums and creaks with joints long used. “No drinks have touched your lips; your body is corrupt with cancer, my child… abandoned by your home, mind vacant…” a whimper escapes your lips as the pain doubles, and as your eyes open wide in some sort of struggle your flesh cracks like the desert floor, flooding the room with a sulphurous yellow light. Your vision flashed white, and before your ears fell deaf in the end the woman’s voice sobbed softly in your mind: “I will see you again…”</p>');

									$(".dia").append('<br><h2>The Favor <span class="ch">(Ending 14/24)</span></h2>');

									ch4 = 1;
								};
							});
						};
					});

					$(".truthB1").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“N-no ma\'am...” you croak, squeezing your eyes shut in a valiant effort to keep your stomach from working its way up your throat. Her eyes go wide, then soft and sullen. “Stay for the night,” she pleads gently. “You must rest.” You may <span class="ch">STAY</span> or <span class="ch">LEAVE</span>.</p>');

							$(".dia").append('<div class="choice"><h3 class="staya">STAY</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="leavea">LEAVE</h3></div>');

							$(".lieA1").remove();
							$(".truthA1").remove();

							ch3 = 1;

							$(".staya").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>You nod thankfully, a relaxed sigh escaping your chest. Her face twitches into a smile as she turns away, slightly waddling to a counter in a corner of the room. Soon the space is filled with the luscious smell of beef stew, the heartbeat of a knife slicing into carrots, potatoes, and meat. Your vision slips in and out of childish delirium; the woman\'s warm embrace lifting you to sit, even warmer stew gently pulling your eyelids down. Vague flashes of memories suggested you hadn’t felt this… comfortable, in a long, long time. Such dreams softened the blades of pain that had dug at your flesh from the beginning. The worn spoon that was held in your hand slipped through your fingers in sleepy clumsiness, deep breaths echoing in your chest. The woman murmured words of a long forgotten lullaby, then spoke quiet words. “The ribbons of cancer holding your wings have been cut, love… fly, soar to my sons… I will remember your graciousness… thank you.” the calm blackness was replaced with a bright flash of white, and you flew.</p>');

									$(".dia").append('<br><h2>Flight of a Fallen Angel <span class="ch">(Ending 15/24)</span></h2>');

									$(".staya").remove();
									$(".leavea").remove();

									ch4 =1;
								};
							});

							$(".leavea").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>“I… should go,” you say, swallowing acidic spittle to lie down your punctuality. The woman, laugh lines softened in solemn acceptance, nodded in finality and stepped away from the table you rested upon. Throwing the wool blanket aside, you stepped down from your resting place, bare feet unsure but soon balanced. You find your socks and shoes by the disintegrating door, which you carefully push open and exit the home. It is only at this time you turn to notice that the residence is only a hut in the slums and your mind becomes laden with pity that you only had words of thanks that slipped your lips now to give, not services nor pennies. Rain continued to pour in sheets, the mud yearning for an unattended boot. As you pass by the guards at the gates, they give you a curt nod as they would anyone, and you wave. It was startling how normal everything was, and how memories would not resurface. The trees arched overhead, failing to protect you from the relentless precipitation. You halt, daggers of pain dulled by the overwhelming sense of calm. When your vision turns white, you welcome it.</p>');

									$(".dia").append('<br><h2>Struggle Not <span class="ch">(Ending 16/24)</span></h2>');

									ch4 = 1;
								};
							});
						};
					});
				};
			});

			$(".whatA").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>“W-wha-” you throw your head to the side, sludge pouring through your lips. It burned your throat, your eyes rolling in dizzy spells. A warm hand rested on your back, sending nerves still and relaxed. Taking a shuddering breath, you lie back down with your eyelids fluttering. The woman\'s figure is blurred, swirling in a nauseous mess. “You collapsed in the middle of the road…” her voice echoed from varying points in the room, sending your mind reeling. “I took you in. You seem to be improving, despite how you probably feel…” she moves out of your vision, her walk more of a limping waddle as far as you can see before you squeeze your eyes shut out of another bought of nausea. “You need to eat. What do you prefer? Roast chicken, or stew?” You can choose <span class="ch">CHICKEN</span> or <span class="ch">STEW</span>.</p>');

					$(".whereA").remove();
					$(".whatA").remove();
					$(".whoA").remove();

					$(".dia").append('<div class="choice"><h3 class="chicken">CHICKEN</h3></div>');
					$(".dia").append('<div class="choice"><h3 class="stew">STEW</h3></div>');

					ch2 = 1;

					$(".chicken").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“Chicken,” you manage, your mouth revived with gentle saliva thinking of such an item. “Good choice. I\'m well-renowned in this town for being the best chicken roaster.” the woman says with slight sarcasm, chuckling softly as she shuffles around the room and grabbing herbs from nooks and crannies. When you find the strength to sit up, careful to avoid the pile of sludge on the dirt coated floor, the room smells of rosemary and sizzling fat. Such a welcoming scent brings a smile to your face, and even larger one once it touches your tongue. The woman tells of her boys, both long killed in a war you do not recall, though her blushing cheeks ring of nostalgia and not of grief. “I see the food helped your mobility,” she comments as you wobble over to the worn counters to set your finished plate down. “Do you mind taking a helping to the waiter at the local inn? I do it every night, since he\'s such a nice man… however, my back is not what it used to be.” she laughs softly. You can say <span class="ch">YES</span> or <span>NO</span>.</p>');

							$(".dia").append('<div class="choice"><h3 class="yes">YES</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="no">NO</h3></div>');

							$(".chicken").remove();
							$(".stew").remove();

							ch3 = 1;
						};
					});

					$(".stew").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“S-stew,” you stutter, your voice gaining back its luster. “Good choice,” she says with a chuckle, muffled thumps of a knife slicing into vegetables and meat soon filling the room. You wince as you slowly brace yourself with your arms, twisting so your body to allow you bare feet to dangle over the floor. Careful to avoid the dark sludge, you stand. You spend a good hour exploring the the kitchen, which besides the bed, is the only noticeable thing about the home, which is more of a small room with a roof. As she cooks, the woman talks about her boys and how they passed away in a war you do not recall. She asks what you’re doing in the town, named Joro, but you shake your head. The scents that fill the air keep both of you happy and upbeat, even happier when you cradle a bowl of the stuff and savor the taste. Whether you are starving or not, the meal is delicious. “I deliver stew to the Sages\' castle near here. Can you take a bowl to them?" the woman asks nonchalantly. You can say <span class="ch">YES</span> or <span class="ch">NO</span>.</p>');

							$(".dia").append('<div class="choice"><h3 class="yes2">YES</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="no2">NO</h3></div>');

							$(".chicken").remove();
							$(".stew").remove();

							ch3 = 1;
						};
					});
				};
			});

			$(".whoA").click(function() {
				if(ch2 == 0) {
					console.log("Choice two complete");

					$(".dia").append('<p>“W-who...” you stutter, your chest struggling with gravity. Her kind hand warmed your shoulder, though it was tinged with a bitterness. “It doesn\'t matter… you collapsed in the street, and I am caring for you.” she pauses to let that sink in. “Who are you, since you are so intent on learning who I am?” You can <span class="ch">LIE</span> and tell of a person you made up, or tell the <span class="ch">TRUTH</span> and say that you don\'t know.</p>');

					$(".dia").append('<div class="choice"><h3 class="lieA3">LIE</h3></div>');
					$(".dia").append('<div class="choice"><h3 class="truthA3">TRUTH</h3></div>');

					$(".whereA").remove();
					$(".whatA").remove();
					$(".whoA").remove();

					ch2 = 1;

					$(".lieA3").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“My name is Alex, and I am from a city far from here--” “Where exactly, <em>Alex</em>? she asks sweetly.  You stutter in shock: “New York.” The look on her face is absurdly confused, then stone cold. “Get out of my home, drunkard.” You can <span class="ch">PROTEST</span> or get <span class="ch">OUT</span>.</p>');

							$(".dia").append('<div class="choice"><h3 class="protest">PROTEST</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="out">OUT</h3></div>');

							ch3 = 1;
						};
					});

					$(".truthA3").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“I…” you swallow rancid bile that had wormed its way up your throat and continue softly. “I don\'t know who I am, or really where I am…” the woman sighs quietly, resting a gentle hand on your shoulder. “I know someone who can help… we can go <span>NOW</span> while we think of it, or we can <span>WAIT</span> until morning when you\'re rested and recovered. Your choice."</p>');

							$(".dia").append('<div class="choice"><h3 class=""></h3></div>');
							$(".dia").append('<div class="choice"><h3 class=""></h3></div>');

							ch3 = 1;
						};
					});
				};
			});
		};
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

					$(".truthb1").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“I-I don-” your chest heaves and you throw your head to the side to cough up more mud. It slaps the cobblestone floor, accompanied with an aura of Ionio\'s grimace. His hand gently rests on your back, where he pressed his thumb and slowly massages. “Do not speak anymore; I understand.” he pauses, your breath mellowing slowly. “However, I must ask you to come with me. It doesn\'t hurt to be cautious.” Ionio\'s arms sweep you onto your feet, his fur robe clinging to your sweat coated skin. You attempt to walk upon the cooling cobblestone floors and ornamental rugs, but your escort moreorless carries you. The stairs spiral down into endless depths, hallways swallowing soft voices and spitting out distant echoes. You all to soon are laid down upon a wooden bed in a vacant cell in the castle’s lower levels with Ionio\'s face hovering anxiously stern above yours. “Do you need anything?” he asks soft, though his voice rings uncomfortably in your ears. You can ask him to <span class="ch">STAY</span> or <span class="ch">DISMISS</span> him to any other duties he has.</p>');

							$(".dia").append('<div class="choice"><h3 class="stayb">STAY</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="dismiss">DISMISS</h3></div>');

							$(".lieb1").remove();
							$(".truthb1").remove();

							ch3 = 1;

							$(".stayb").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>“Just stay for a while, okay?” you whisper, your voice surprisingly strong. The sage nods, confusion flashing upon his bright eyes. The cell is well kept, besides the leaking faucet in the corner that keeps to a rhythm like clockwork. Your eyes train themselves exhaustively onto the ancient stone ceiling, your breathing speeding up even as your body loses all control and goes limp. You can hear Ionio asking with some desperation about your condition, and the room begins to glow a terrible yellow, little lightning patterns breaking out onto your skin shining with such light. The sage barks something indecipherable, a blue globe surrounding the two of you. You scream in agony before the man slaps a hand across your mouth, sobs wracking his body. The desolate whine in your body increases, and increases, until… white.</p>');

									$(".dia").append('<br><h2>The Death of Two <span class="ch">(Ending 3/24)</span></h2>');

									$(".stayb").remove();
									$(".dismiss").remove();

									ch4 = 1;
								};
							});

							$(".dismiss").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>You wave your hand, your eyelids fluttering and eyes rolling exhaustively. He nods uncertainly, his slippers hissing across the stones as he backs out of the cell. Your chest forces itself to rise, then fall. Faster. Faster. The wood of the bed rattles as your body twitches uncontrollably, the stones stained with a yellow glow. A sob escapes your lips as you notice your skin breaking apart with the light peering out from the cracks and your eyes roll out of agony. A final stab of pain and hiss from within then… white.</p>');

									$(".dia").append('<br><h2>Alone with Care <span class="ch">(Ending 4/24)</span></h2>');						

									$(".stayb").remove();
									$(".dismiss").remove();

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

					$(".dia").append('<div class="choice"><h3 class="truthb2">TRUTH</h3></div>');
					$(".dia").append('<div class="choice"><h3 class="lieb2">LIE</h3></div>');

					$(".whereB").remove();
					$(".whatB").remove();
					$(".whoB").remove();

					ch2 = 1;

					$(".truthb2").click(function() {
						if(ch3 == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>You shake your head, the pressure on your chest lessening. His silence grips your throat, your heart beating in unison with his returning footsteps. Liquid sloshes around in a glass vial he holds, the color of sulphur. “Open your mouth, please.” he says quietly. You part your lips, which he supports with his finger to pry them open wider. The liquid tastes and feels like maple syrup, but as it leaves your tongue it burns in pricks and prods. “What did it taste like?” You see no reason to lie. You answer with a shaking breath, and the man’s bright eyes go wide. He sets his supplies down on a nearby table and motions for you to get up. “Ever heard of cancer, Stranger? It developed in the higher up cities, where there is metal as far as the eye can see.” he helps you prop yourself up. “It has no cure, while it kills you slowly and agonizingly. When your time is up, you begin to explode. The light of the medical bombshell in your body shines through your skin, then, boom.” he snaps his fingers. “It will not only take your life, but the lives of others. Look, you don’t have long. You can either <span class="ch">TRAVEL</span> as fast as you can away from civilization or I can bring you to the <span class="ch">LAKE</span> nearby, where you can safely detonate underwater. It\'s your choice.</p>');

							$(".dia").append('<div class="choice"><h3 class="travel">TRAVEL</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="lake">LAKE</h3></div>');

							$(".truthb2").remove();
							$(".lieb2").remove();

							ch3 = 1;

							$(".travel").click(function() {
								if(ch4 = 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>“I would rather leave here before I make anymore trouble.” you reply, surprised at the strength in your voice. The man nods solemnly, then helps you to your feet. You cannot keep track of the endless cobblestone hallways as you wind downwards to the main room. The rain spatters on the overly large doorstep, and the man offers to take you to the lake once more. You politely decline, and carry on your way out of the town, which is surrounded by dense forests. About a mile out, a sharp pain strikes through your chest, causing you to stumble in your tracks. Pangs of loneliness laced with bile worms its way up your throat, pulling you to your knees, then to your stomach. You bite your tongue to stifle a cry, and before your very eyes your skin begins to crack and glow a yellow light. You curl into a ball, and close your eyes, allowing Death to take you twice; once for your illness, second for your loneliness.</p>');

									$(".dia").append('<br><h2>A Ghost\'s Passing <span class="ch">(Ending 5/24)</span></h2>');

									$(".travel").remove();
									$(".lake").remove();

									ch4 = 1;
								};
							});

							$(".lake").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>“Take me to the lake. Please.” you add, surprised by the strength in your voice along. It is however, laced with sorrow that the man catches on to. He holds out his hand, which you grasp and stumble onto your feet. “Ionio. Head Sage of the Storrho Castle.” you nod gratefully. Ionio braces you, practically dragging you across the cobblestones as you struggle to find your footing. A small crowd of lesser sages clad in furs and skins gather around you, whispers and words of comfort and curiosity. You walk maybe half a mile before coming to a deep blue lake, where the sages trail off into silence. You stand on the rocky shore and watch Ionio’s robes drift behind him as he retrieves a strongly built wooden boat. He draws it close to you, gestures for the lesser sages to stay as you climb in. Thunder roars above you as the storm weeps for you, the lake sloshing against the keel. It all falls silent as you come to the center of it, where it marks your grave. The small following stands at attention on the bank, cloaks turned against the wind and rain. You stand, your legs wobbly but strong. Ionio’s hand flies to your forearm, his gaze catching yours in intimate sorrow for a stranger. His words fall silent upon your ears, and you nod. The final step you take falls upon chilling waters, the lake swallowing you whole. You tumble, turning towards the bottom and pushing yourself down further. Your chest compresses and light seeps into the dark depths. Yellow shines out from cracks in your skin, salt claws at your eyes, air burning into dust in your throat. You flip over, the grey sky barely visible through the lake. You close your eyes, and allow the vicious arms of Death take you thrice; once for your illness, second for the water that fills your lungs, third for the hole you left in the head sage\'s soul.</p>');

									$(".dia").append('<br><h2>Two Deaths with One Stone <span class="ch">(Ending 6/24)</span></h2>');

									$(".travel").remove();
									$(".lake").remove();

									ch4 = 1;
								};
							});
						};
					});

					$(".lieb2").click(function() {
						if(ch3  == 0) {
							console.log("Choice three complete");

							$(".dia").append('<p>“B-blood…” you rasp, your chest settling. “Bad blood...” the man nods, peeling the fur blanket off your sweat coated skin. “Very well,” he concludes. “I will show you out, Stranger.” you twist your body, allowing your feet to find the cool cobblestone floor. The man graciously offers a supporting arm, which you accept lest you sprawl across the floor. He leads you to the massive front door of the castle, nodding his adieus with a worried glance. The rain soon enough soaks your clothes and hair, chilling you to the bone. As you look out upon the town, you notice a large crowd flocking to a small tavern which glows with a warm fireplace. You can choose to go to the <span class="ch">TAVERN</span> or get out of the <span class="ch">TOWN</span>.</p>');

							$(".dia").append('<div class="choice"><h3 class="tavern">TAVERN</h3></div>');
							$(".dia").append('<div class="choice"><h3 class="town">TOWN</h3></div>');

							$(".truthb2").remove();
							$(".lieb2").remove();

							ch3 = 1;

							$(".tavern").click(function() {
								if(ch4 == 0) {
									console.log("Final choice complete");

									$(".dia").append('<p>Mud swallows your feet as you wobble your way to the tantalizing warmth of the tavern, named Dark Horse Inn. The raucous, but welcoming rattle of the crowd wraps around you as your feet trail muddy footprints onto the smooth wood floor. The scent of alcohol mingles with the thick reek of sweat. You cough as your lungs contract, your body collapsing into a chair like a ragdoll. A busty waitress sways towards you, inquiring for an order with programmed flirtation. You can barely muster a couple muttered words before pain prickles across your skin like micro thorns, and a warm yellow light drips into the tavern. The waitress’s eyes go wide, and she screams. “Clear out! Clear out! King\'s Suicide! King\'s Suicide!" the laughter turns bitter and horrified as bodies scramble for the exit, echoing the waitress\'s last words. You try to raise your voice over the din, but instead a guttural cry of agony rises through your lips. The glow increases, your skin breaking into cracks like desert floors shining with yellow light. You scream, your vision obscured by tears, then… white.</p>');

									$(".dia").append('<br><h2>King\'s Suicide<span class="ch">(Ending 7/24)</span></h2>');

									$(".tavern").remove();
									$(".town").remove();

									ch4 = 1;
								};
							});

							$(".town").click(function() {
								console.log("Final choice complete");

								$(".dia").append('<p>You wave your thanks to the man, who in return closes the door to the castle. The mud sucks at your feet, raindrops replacing the sweat that had lingered on your skin minutes before. You sigh, and begin to stumble towards the gate where you had collapsed before. The same guards stand perfectly straight, their faces devoid of emotion properly. You sway once more, their eyes turning to you. Your chest compresses, the gloom lit by a slight yellow glow. The guards’ statue-like stature breaks into fear and horror, and they cry to nearby onlookers: “King\'s Suicide! King\'s Suicide!" they bolt, sending damp clouds of mud in your direction like shovels would into graves. You fall onto your back, the grey sky an empty canvas. Your skin breaks into small sections, yellow light shining through said cracks like desert floor. You scream weakly, agony spreading through your body then… white.</p>');

								$(".dia").append('<br><h2>King\'s Mystery <span class="ch">(Ending 8/24)</span></h2>');

								$(".tavern").remove();
								$(".town").remove();

								ch4 = 1;
							});
						};
					});
				};
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