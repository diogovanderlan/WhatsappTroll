async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

LOVETT
Is your stateroom alright?
 ROSE
Yes. Very nice. Have you met my granddaughter, Lizzy? She takes care of me.
 LIZZY
Yes. We met just a few minutes ago, grandma. Remember, up on deck?
 ROSE
Oh, yes.
Brock glances at Bodine... oh oh. Bodine rolls his eyes. Rose finishes
arranging her photographs. We get a general glimpse of them: the usual
snapshots... children and grandchildren, her late husband.
 ROSE
There, that's nice. I have to have my pictures when I travel. And Freddy of
course.
 (to the Pomeranian)
Isn't that right, sweetie. 
 LOVETT
Would you like anything?
 ROSE
I should like to see my drawing.
 CUT TO:
24 INT. LAB DECK, PRESERVATION AREA
Rose looks at the drawing in its tray of water, confronting herself across
a span of 84 years. Until they can figure out the best way to preserve it,
they have to keep it immersed. It sways and ripples, almost as if alive.
TIGHT ON Rose's ancient eyes, gazing at the drawing.
25 FLASHCUT of a man's hand, holding a conte crayon deftly creating a
shoulder and the shape of her hair with two efficient lines.
26 THE WOMAN'S FACE IN THE DRAWING, dancing under the water.
27 A FLASHCUT of a man's eyes, just visible over the top of a sketching
pad. They look up suddenly right into the LENS. Soft eyes, but fearlessly
direct.
28 Rose smiles, remembering. Brock has the reference photo of the necklace
in his hand.
 LOVETT
Louis the Sixteenth wore a fabulous stone, called the Blue Diamond of the
Crown, which disappeared in 1792, about the time Louis lost everything from
the neck up. The theory goes that the crown diamond was chopped too...
recut into a heart-like shape... and it became Le Coeur de la Mer. The
Heart of the Ocean. Today it would be worth more than the Hope Diamond.
 ROSE
It was a dreadful, heavy thing.
 (she points at the drawing)
I only wore it this once.
 LIZZY
You actually believe this is you, grandma?
 ROSE 
It is me, dear. Wasn't I a hot number?
 LOVETT
I tracked it down through insurance records... and old claim that was
settled under terms of absolute secrecy. Do you know who the claiment was,
Rost?
 ROSE
Someone named Hockley, I should imagine.
 LOVETT
Nathan Hockley, right. Pittsburgh steel tycoon. For a diamond necklace his
son Caledon Hockley bought in France for his fiancee... you... a week
before he sailed on Titanic. And the claim was filed right after the
sinking. So the diamond had to've gone down with the ship.
 (to Lizzy)
See the date?
 LIZZY
April 14, 1912.
 LOVETT
If your grandma is who she says she is, she was wearing the diamond the day
Titanic sank.
 (MORE)
 LOVETT (CONT'D)
 (to Rose)
And that makes you my new best friend. I will happily compensate you for
anything you can tell us that will lead to its recovery.
 ROSE
I don't want your money, Mr. Lovett. I know how hard it is for people who
care greatly for money to give some away.
 BODINE
 (skeptical) 
You don't want anything?
 ROSE
 (indicating the drawing)
You may give me this, if anything I tell you is of value.
 LOVETT
Deal.
 (crossing the room)
Over here are a few things we've recovered from your staterooms.
Laid out on a worktable are fifty or so objects, from mundane to valuable.
Rose, shrunken in her chair, can barely see over the table top. With a
trembling hand she lifts a tortoise shell hand mirror, inlaid with mother
of pearl. She caresses it wonderingly.
 ROSE
This was mine. How extraordinary! It looks the same as the last time I saw
it.
She turns the mirror over and looks at her ancient face in the cracked
glass.
 ROSE
The reflection has changed a bit.
She spies something else, a silver and moonstone art-nouveau brooch.
 ROSE
My mother's brooch. She wanted to go back for it. Caused quite a fuss.
Rose picks up an ornate art-nouveau HAIR COMB. A jade butterfly takes
flight on the ebony handle of the comb. She turns it slowly, remembering.
We can see that Rose is experiencing a rush of images and emotions that
have lain dormant for eight decades as she handles the butterfly comb.
 LOVETT
Are you ready to go back to Titanic?
 CUT TO:
29 INT. IMAGING SHACK / KELDYSH 
It is a darkened room lined with TV monitors. IMAGES OF THE WRECK fill the
screens, fed from Mir One and Two, and the two ROVs, Snoop Dog and DUNCAN.
 BODINE
Live from 12,000 feet.
ROSE stares raptly at the screens. She is enthraled by one in particular,
an image of the bow railing. It obviously means something to her. Brock is
studying her reactions carefully.
 BODINE
The bow's struck in the bottom like an axe, from the impact. Here... I can
run a simulation we worked up on this monitor over here.
Lizzy turns the chair so Rose can see the screen of Bodine's computer. As
he is calling up the file, he keeps talking.
 BODINE
We've put together the world's largest database on the Titanic. Okay,
here...
 LOVETT
Rose might not want to see this, Lewis.
 ROSE
No, no. It's fine. I'm curious.
Bodine starts a COMPUTER ANIMATED GRAPHIC on the screen, which parallels
his rapid-fire narration.
 BODINE
She hits the berg on the starboard side and it sort of bumps along...
punching holes like a morse code... dit dit dit, down the side. Now she's
flooding in the
 BODINE (cont'd)
forward compartments... and the water spills over the tops of the
bulkheads, going aft. As her bow is going down, her stern is coming up...
slow at first... and then faster and faster until it's lifting all that
weight, maybe 20 or 30 thousand tons... out of the water and the hull can't
deal... so SKRTTT!!
 (making a sound in time with the animation) 
... it splits! Right down to the keel, which acts like a big hinge. Now the
bow swings down and the stern falls back level... but the weight of the bow
pulls the stern up vertical, and then the bow section detaches, heading for
the bottom. The stern bobs like a cork, floods and goes under about 2:20
a.m. Two hours and forty minutes after the collision.
The animation then follows the bow section as it sinks. Rose watches this
clinical dissection of the disaster without emotion.
 BODINE
The bow pulls out of its dive and planes away, almost a half a mile, before
it hits the bottom going maybe 12 miles an hour. KABOOM!
The bow impacts, digging deeply into the bottom, the animation now follows
the stern.
 BODINE
The stern implodes as it sinks, from the pressure, and rips apart from the
force of the current as it falls, landing like a big pile of junk.
 (indicating the simulation)
Cool huh?
 ROSE
Thank you for that fine forensic analysis, Mr. Bodine. Of course the
experience of it was somewhat less clinical.
 LOVETT
Will you share it with us?
Her eyes go back to the screens, showing the sad ruins far below them.
A VIEW from one of the subs TRACKING SLOWLY over the boat deck. Rose
recognizes one of the Wellin davits, still in place. She hears ghostly
waltz music. The faint and echoing sound of an officer's voice, English
accented, calling "Women and children only".
30 FLASH CUTS of screaming faces in a running crowd. Pandemonium and
terror. People crying, praying, kneeling on the deck. Just impressions...
flashes in the dark.
31 Rose Looks at another monitor. SNOOP DOG moving down a rusted,
debris-filled corridor. Rose watches the endless row of doorways sliding
past, like dark mouths. 
32 IMAGE OF A CHILD, three years old, standing ankle deep in water in the
middle of an endless corridor. The child is lost alone, crying.
33 Rose is shaken by the flood of memories and emotions. Her eyes well up
and she puts her head down, sobbing quietly.
 LIZZY
 (taking the wheelchair)
I'm taking her to rest.
 ROSE
No!
Her voice is surprisingly strong. The sweet little old lady is gone,
replaced by a woman with eyes of steel. Lovett signals everyone to stay
quiet.
 LOVETT
Tell us, Rose.
She looks from screen to screen, the images of the ruined ship.
 ROSE
It's been 84 years...
 LOVETT
Just tell us what you can--
 ROSE
 (holds up her hand for silence)
It's been 84 years... and I can still smell the fresh paint. The china had
never been used. The sheets had never been slept in.
He switches on the minirecorder and sets it near her.
 ROSE
Titanic was called the Ship of Dreams. And it was. It really was...
As the underwater camera rises past the rusted bow rail, WE DISSOLVE /
MATCH MOVE to that same railing in 1912...
 MATCH DISSOLVE: 
34 EXT. SOUTHAMPTON DOCK - DAY
SHOT CONTINUES IN A FLORIOUS REVEAL as the gleaming white superstructure of
Titanic rises mountainously beyond the rail, and above that the
buff-colored funnels stand against the sky like the pillars of a great
temple. Crewmen move across the deck, dwarfed by the awesome scale of the
steamer.
Southanmpton, England, April 10, 1912. It is almost nnon on ailing day. A
crowd of hundreds blackens the pier next to Titanic like ants on a jelly
sandwich.
IN FG a gorgeous burgundy RENAULT TOURING CAR swings into frame, hanging
from a loading crane. It is lowered toward HATCH #2.
On the pier horsedrawn vehicles, motorcars and lorries move slowly through
the dense throng. The atmosphere is one of excitement and general
giddiness. People embrace in tearful farewells, or wave and shout bon
voyage wishes to friends and relatives on the decks above.
A white RENAULT, leading a silver-gray DAIMLER-BENZ, pushes through the
crowd leaving a wake in the press of people. Around the handsome cars
people are streaming to board the ship, jostling with hustling seamen and
stokers, porters, and barking WHITE STAR LINE officials.
The Renault stops and the LIVERIED DRIVER scurries to open the door for a
YOUNG WOMAN dressed in a stunning white and purple outfit, with an enormous
feathered hat. She is 17 years old and beautiful, regal of bearing, with
piercing eyes.
It is the girl in the drawing. ROSE. She looks up at the ship, taking it in
with cool appraisal.
 ROSE
I don't see what all the fuss is about. It doesn't look any bigger than the
Mauretania.
A PERSONAL VALET opens the door on the other side of the car for CALEDON
HOCKLEY, the 30 year old heir to the elder Hockley's fortune. "Cal" is
handsome, arrogant and rich beyond meaning.
 CAL
You can be blase about some things, Rose, but not about Titanic. It's over
a hundred feet longer than Mauretania, and far more luxurious. It has
squash courts, a Parisian cafe... even Turkish baths.
Cal turns and fives his hand to Rose's mother, RUTH DEWITT BUKATER, who
descends from the touring car being him. Ruth is a 40ish society empress, 
from one of the most prominent Philadelphia families. She is a widow, and
rules her household with iron will.
 CAL
Your daughter is much too hard to impress, Ruth.
 (indicating a puddle)
Mind your step.
 RUTH
 (gazing at the leviathan)
So this is the ship they say is unsinkable.
 CAL
It is unsinkable. God himself couldn't sink this ship.
Cal speaks with the pride of a host providing a special experience.
This entire entourage of rich Americans is impeccably turned out, a
quintessential example of the Edwardian upper class, complete with
servants. Cal's VALET, SPICER LOVEJOY, is a tall and impassive, dour as an
undertaker. Behind him emerge TWO MAIDS, personal servants to Ruth and
Rose.
A WHITE STAR LINE PORTER scurries toward them, harried by last minute
loading.
 PORTER
Sir, you'll have to check your baggage through the main terminal, round
that way--
Cal nonchalantly hands the man a fiver. The porter's eyes dilate. Five
pounds was a monster tip in those days.
 CAL
I put my faith in you, good sir.
 (MORE)
 CAL (CONT'D)
 (curtly, indicating Lovejoy)
See my man. 
 PORTER
Yes, sir. My pleasure, sir.
Cal never tires of the effect of money on the unwashed masses.
 LOVEJOY
 (to the porter)
These trunks here, and 12 more in the Daimler. We'll have all this lot up
in the rooms.
The White Star man looks stricken when he sees the enormous pile of steamer
trunks and suitcases loading down the second car, including wooden crates
and steel safe. He whistles frantically for some cargo-handlers nearby who
come running.
Cal breezes on, leaving the minions to scramble. He quickly checks his
pocket watch.
 CAL
We'd better hurry. This way, ladies.
He indicates the way toward the first class gangway. They move into the
crowd. TRUDY BOLT, Rose's maid, hustles behind them, laden with bags of her
mistress's most recent purchases... things too delicate for the baggage
handlers.
Cal leads, weaving between vehicles and handcarts, hurrying passengers
(mostly second class and steerage) and well-wishers. Most of the first
class passengers are avoiding the smelly press of the dockside crowd by
using an elevated boarding bridge, twenty feet above.
They pass a line of steerage passengers in their coarse wool and tweeds,
queued up inside movable barriers like cattle in a chute. A HEALTH OFFICER
examines their heads one by one, checking scalp and eyelashes for lice.
They pass a well-dressed young man cranking the handle of a wooden Biograph
"cinematograph" camera mounted on a tripod. NANIEL MARVIN (whose father
founded the Biograph Film Studio) is filming his young bride in front of
the Titanic. MARY MARVIN stands stiffly and smiles, self conscious.
 DANIEL
Look up at the ship, darling, that's it. You're amazed! You can't believe
how big it is! Like a mountain. That's great.
Mary Marvin, without an acting fiber in her body, does a bad Clara Bow 
pantomime of awe, hands raised.
Cal is jostled by two yelling steerage boys who shove past him. And he is
bumped again a second later by the boys' father.
 CAL
Steady!!
 MAN
Sorry squire!
The Cockney father pushes on, after his kids, shouting.
 CAL
Steerage swine. Apparently missed his annual bath.
 RUTH
Honestly, Cal, if you weren't forever booking everything at the last
instant, we could have gone through the terminal instead of running along
the dock like some squalid immigrant family.
 CAL
All part of my charm, Ruth. At any rate, it was my darling fiancee's beauty
rituals which made us late.
 ROSE
You told me to change.
 CAL
I couldn't let you wear black on sailing day, sweetpea. It's bad luck.
 ROSE
I felt like black.
Cal guides them out of the path of a horse-drawn wagon loaded down with two
tons of OXFORD MARMALADE, in wooden cases, for Titanic's Victualling
Department.
 CAL
Here I've pulled every string I could to book us on the grandest ship in
history, in her most luxurious suites... and you act as if you're going to
your execution. 
Rose looks up as the hull of Titanic looms over them...a great iron wall,
Bible black and sever. Cal motions her forward, and she enters the gangway
to the D Deck doors with a sense of overwhelming dread.
 OLD ROSE (V.O.)
It was the ship of dreams... to everyone else. To me it was a slave ship,
taking me back to America in chains.
CLOSE ON CAL'S HAND IN SLOW-MOTION as it closes possessively over Rose's
arm. He escorts her up the gangway and the black hull of Titanic swallows
them.
 OLD ROSE (V.O.)
Outwardly I was everything a well brought up girl should be. Inside, I was
screaming.
35 CUT TO a SCREAMING BLAST from the mighty triple steam horns on Titanic's
funnels, bellowing their departure warning.
 CUT TO:
36 EXT. SOUTHAMPTON DOCKS / TITANIC - DAY
A VIEW OF TITANIC from several blocks away, towering above the terminal
buildings like the skyline of a city. The steamer's whistle echoes across
Southampton.
PULL BACK, revealing that we were looking through a window, and back
further to show the smoky inside of a pub. It is crowded with dockworkers
and ship;s crew.
Just inside the window, a poker game is in progress. FOUR MEN, in working
class clothes, play a very serious hand.
JACK DAWSON and FABRIZIO DE ROSSI, both about 20, exchange a glance as the
other two players argue in Swedish. Jack is American, a lanky drifter with
his hair a little long for the standards of the times. He is also unshaven,
and his clothes are rumpled from sleeping in them. He is an artist, and has
adopted the bohemian style of art scene in Paris. He is also very
self-possessed and sure-footed for 20, having lived on his own since 15.
The TWO SWEDES continue their sullen argument, in Swedish.
 OLAF
 (subtitled)
You stupid fishhead. I can't believe you bet our tickets. 
 SVEN
 (subtitled)
You lost our money. I'm just trying to get it back. Now shutup and take a
card.
 JACK
 (jaunty)
Hit me again, Sven.
Jack takes the card and slips it into his hand.
ECU JACK'S EYES. They betray nothing.
CLOSE ON FABRIZIO licking his lips nervously as he refuses a card.
ECU STACK in the middle of the table. Bills and coins from four counrties.
This has been going on for a while. Sitting on top of the money are two 3RD
CLASS TICKETS for RMS TITANIC.
The Titanic's whistle blows again. Final warning.
 JACK
The moment of truth boys. Somebody's life's about to change.
Fabrizio puts his cards down. So do the Swedes. Jack holds his close.
 JACK
Let's see... Fabrizio's got niente. Olaf, you've got squat. Sven, uh oh...
two pair... mmm.
 (turns to his friend)
Sorry Fabrizio.
 FABRIZIO
What sorry? What you got? You lose my money?? Ma va fa'n culo testa di
cazzo--
 JACK
Sorry, you're not gonna see your mama again for a long time...
He slaps a full house down on the table. 
 JACK
 (grinning)
'Cause you're goin' to America!! Full house boys!
 FABRIZIO
Porca Madonna!! YEEAAAAA!!!
The table explodes into shouting in several languages. Jack rakes in the
money and the tickets.
 JACK
 (to the Swedes)
Sorry boys. Three of a kind and a pair. I'm high and you're dry and...
 (to Fabrizio)
... we're going to--
 FABRIZIO/JACK
L'AMERICA!!!
Olaf balls up one huge farmer's fist. We think he's going to clobber Jack,
but he swings round and punches Sven, who flops backward onto the floor and
sits there, looking depressed. Olaf forgets about Jack and Fabrizio, who
are dancing around, and goes into a rapid harangue of his stupid cousin.
Jack kisses the tickets, then jumps on Fabrizio's back and rides him around
the pub. It's like they won the lottery.
 JACK
Goin' home... to the land o' the free and the home of the real hot-dogs! On
the TITANIC!! We're ridin' in high style now! We're practically goddamned
royalty, ragazzo mio!!
 FABRIZIO
You see? Is my destinio!! Like I told you. I go to l'America!! To be a
millionaire!!
 (MORE)
 FABRIZIO (CONT'D) 
 (to pubkeeper)
Capito?? I go to America!!
 PUBKEEPER
No, mate. Titanic go to America. In five minutes.
 JACK
Shit!! Come on, Fabri!
 (grabbing their stuff)
Come on!!
 (to all, grinning)
It's been grand.
They run for the door.
 PUBKEEPER
'Course I'm sure if they knew it was you lot comin', they'd be pleased to
wait!
 CUT TO:
37 OMITTED
38 EXT. TERMINAL - TITANIC
Jack and Fabrizio, carrying everything they own in the world in the kit
bags on their shoulders, sprint toward the pier. They tear through milling
crowds next to the terminal. Shouts go up behind them as they jostle
slow-moving gentlemen. They dodge piles of luggage, and weave through
groups of people. They burst out onto the pier and Jack comes to a dead
stop... staring at the cast wall of the ship's hull, towering seven stories
above the wharf and over an eighth of a mile long. The Titanic is
monstrous.
Fabrizio runs back and grabs Jack, and they sprint toward the third class
gangway aft, at E deck. They reach the bottom of the ramp just as SIXTH
OFFICER MOODY detaches it at the top. It starts to swing down from the
gangway doors.
 JACK
Wait!! We're passengers! 
Flushed and panting, he waves the tickets.
 MOODY
Have you been through the inspection queue?
 JACK
 (lying cheerfully)
Of course! Anyway, we don't have lice, we're Americans.
 (glances at Fabrizio)
Both of us.
 MOODY
 (testy)
Right, come aboard.
Moody has QUARTERMASTER ROWE reattach the gangway. Jack and Fabrizio come
aboard. Moody glances at the tickets, then passes Jack and Fabrizio through
to Rowe. Rowe looks at the names on the tickets to enter them in the
passenger list.
 ROWE
Gundersen. And...
 (reading Fabrizio's)
Gundersen.
He hands the tickets back, eyeing Fabrizio's Mediterranean looks
suspiciously.
 JACK
 (grabbing Fabrizio's arm)
Come on, Sven.
Jack and Fabrizio whoop with victory as they run down the white-painted
corridero... grinning from ear to ear.
 JACK
We are the luckiest sons of bitches in the world! 
 CUT TO:
39 OMITTED
40 EXT. TITANIC AND DOCK - DAY
The mooring lines, as big around as a man's arm, are dropped into the
water. A cheer goes up on the pier as SEVEN TUGS pull the Titanic away from
the quay.
 CUT TO:
41 EXT. AFT WELL DECK / POOP DECK - DAY
JACK AND FABRIZIO burst through a door onto the aft well deck. TRACKING
WITH THEM as they run across the deck and up the steel stairs to the poop
deck. They get to the rail and Jack starts to yell and wave to the crowd on
the dock.
 FABRIZIO
You know somebody?
 JACK
Of course not. That's not the point.
 (to the crowd)
Goodbye! Goodbye!! I'll miss you!
Grinning, Fabrixio joins in, adding his voice to the swell of voices,
feeling the exhilaration of the moment.
 FABRIZIO
Goodbye! I will never forget you!!
 CUT TO:
42 OMITTED
EXT. SOUTHAMPTON DOCK - DAY
The crowd of cheering well-wishers waves heartily as a black wall of metal
moves past them. Impossibly tiny figues wave back from the ship's rails.
Titanic gathers speed.
 CUT TO:
44 EXT. RIVER TEST - DAY 
IN A LONG LENS SHOT the prow of Titanic FILLS FRAME behind the lead tug,
which is dwarfed. The bow wave spreads before the mighty plow of the
liner's hull as it moves down the River Test toward the English Channel.
 CUT TO:
45 INT. THIRD CLASS BERTHING / G-DECK FORWARD - DAY
Jack and Fabrizio walk down a narrow corridor with doors lining both sides
like a college dorm. Total confusion as people argue over luggage in
several languages, or wander in confusion in the labyrinth. They pass
emigrants studying the signs over the doors, and looking up the words in
phrase books.
They find their berth. It is a modest cubicle, painted enamel white, with
four bunks. Exposed pipes overhead. The other two guys are already there.
OLAUS and BJORN GUNDERSEN.
Jack throws his kit on one open bunk, while Fabrizio takes the other.
 BJORN
 (in Swedish/ subtitled)
Where is Sven?
 CUT TO:
46 INT. SUITE B-52-56 - DAY
By contrast, the so-called "Millionaire Suite" is in the Empire style, and
comprises two bedrooms, a bath, WC, wardrobe room, and a large sitting
room. In addition there is a private 50 foot promenade deck outside.
A room service waiter pours champagne into a tulip glass of orange juice
and hands the Bucks Fizz to Rose. She is looking through her new paintings.
There is a Monet of water lilies, a Degas of dancers, and a few abstract
works. They are all unknown paintings... lost works.
Cal is out on the covered deck, which has potted trees and vines on
trellises, talking through the doorway to Rose in the sitting room.
 CAL
Those mud puddles were certainly a waste of money.
 ROSE
 (looking at a cubist portrait) 
You're wrong. They're fascinating. Like in a dream... there's truth without
logic. What's his name again... ?
 (reading off the canvas)
Picasso.
 CAL
 (coming into the sitting room)
He'll never amount to a thing, trust me. At least they were cheap.
A porter wheels Cal's private safe (which we recognize) into the room on a
handtruck.
 CAL
Put that in the wardrobe.
47 IN THE BEDROOM Rose enters with the large Degas of the dancers. She sets
it on the dresser, near the canopy bed. Trudy is already in there, hanging
up some of Rose's clothes.
 TRUDY
It smells so brand new. Like they built it all just for us. I mean... just
to think that tonight, when I crawl between the sheets, Iill be the first--
Cal appears in the doorway of the bedroom.
 CAL
 (looking at Rose)
And when I crawl between the sheets tonight, I'll still be the first.
 TRUDY
 (blushing at the innuendo)
S'cuse me, Miss.
She edges around Cal and makes a quick exit. Cal comes up behind Rose and
puts his hands on her shoulders. An act of possession, not intimacy.
 CAL
The first and only. Forever.
Rose's expression shows how bleak a prospect this is for her, now. 
 CUT TO:
48 EXT. CHERBOURG HARBOR, FRANCE - LATE DUSK
Titanic stands silhouetted against a purple post-sunset sky. She is lit up
like a floating palace, and her thousand portholes reflect in the calm
harbor waters. The 150 foot tender Nomadic lies-to alongside, looking like
a rowboat. The lights of a Cherbourg harbor complete the postcard image.
 CUT TO:
49 INT. FIRST CLASS RECEPTION/ D-DECK
Entering the first class reception room from the tender are a number of
prominent passengers. A BROAD-SHOULDERED WOMAN in an enormous feathered hat
comes up the gangway, carrying a suitcase in each hand, a spindly porter
running to catch up with her to take the bags.
 WOMAN
Well, I wasn't about to wait all day for you, sonny. Take 'em the rest of
the way if you think you can manage.
 OLD ROSE (V.O.)
At Cherbourg a woman came aboard named Margaret Brown, but we all called
her Molly. History would call her the Unsinkable Molly Brown. Her husband
had struck gold someplace out west, and she was what mother called "new
money".
At 45, MOLLY BROWN is a tough talking straightshooter who dresses in the
finery of her genteel peers but will never be one of them.
 OLD ROSE (V.O.)
By the next afternoon we had made our final stop and we were steaming west
from the coast of Ireland, with nothing out ahead of us but ocean...
 CUT TO:
50 OMITTED
51 EXT. BOW - DAY
The ship glows with the warm creamy light of late afternoon. Jack and
Fabrizio stand right at the bow gripping the curving railing so familiar
from images of the wreck. Jack leans over, looking down fifty feet to where
the prow cuts the surface like a knife, sending up two glassy sheets of
water. 
 CUT TO:
52 INT. / EXT. TITANIC - SERIES OF SCENES - DAY
ON THE BRIDGE, CAPTAIN SMITH turns from the binnacle to FIRST OFFICER
WILLIAM MURDOCH.
 CAPTAIN SMITH
Take her to sea Mister Murdoch. Let's stretch her legs.
Murdoch moves the engine telegraph lever to ALL AHEAD FULL.
53 NOW BEGINS a kind of musical/visual setpiece... an ode to the great
ship. The music is rhythmic, surging forward, with a soaring melody that
addresses the majesty and optimism of the ship of dreams.
IN THE ENGINE ROOM the telegraph clangs and moves to "All Ahead Full".
 CHIEF ENGINEER BELL
All ahead full!
On the catwalk THOMAS ANDREWS, the shipbuilder, watches carefully as the
engineers and greasers scramble to adjust valves. Towering above them are
the twin RECIPROCATING engines, four stories tall, their ten-foot-long
connecting rods surging up and down with the turning of the massive
crankshafts. The engines thunder like the footfalls of marching giants.
54 IN THE BOILER ROOMS the STOKERS chant a song as they hurl coal into the
roaring furnaces. The "black gang" are covered with sweat and coal dust,
their muscles working like part of the machinery as they toil in the
hellish glow.
55 UNDERWATER the enormous bronze screws chop through the water, hurling
the steamer forward and churning up a vortex of foam that lingers for miles
behind the juggernaut ship. Smoke pours from the funnels as--
56 The riven water flares higher at the bow as the ship's speeds builds.
THE CAMERA SWEEPS UP the prow to find Jack, the wind streaming through his
hair and--
57 Captain Smith steps out of the enclosed bridge onto the wing. He stands
with his hands on the rail, looking every bit the storybook picture of a
Captain... a great patriarch of the sea.
 FIRST OFFICER MURDOCH
Twenty one knots, sir!
 SMITH 
She's got a bone in her teeth now, eh, Mr. Murdoch.
Smith accepts a cup of tea from FIFTH OFFICER LOWE. He contentedly watches
the white V of water hurled outward from the bows like an expression of his
own personal power. They are invulnerable, towering over the sea.
58 AT THE BOW Jack and Fabrizio lean far over, looking down.
In the glassy bow-wave two dolphins appear, under the water, running fast
just in front of the steel blade of the prow. They do it for the sheer joy
and exultation of motion. Jack watches the dolphins and grins. They breach,
jumping clear of the water and then dive back, crisscrossing in front of
the bow, dancing ahead of the juggernaut.
FABRIZIO looks forward across the Atlantic, staring into the sunsparkles.
 FABRIZIO
I can see the Statue of Liberty already.
 (grinning at Jack)
Very small... of course.
THE CAMERA ARCS around them, until they are framed against the sea.
NOW WE PULL BACK, across the forecastle deck. Rising, as we continue back,
and the ships rolls endlessly forward underneath. Over the bridge wing,
along the boat deck until her funnels come INTO FRAME besides us and march
past like the pillars of heaven, one by one. We pull back and up, until we
are looking down the funnels, and the people strolling on the decks and
standing at the rail become antlike.
And still we pull back until the great lady is seen whole in a gorgeous
aerial portrait, black and severe in her majesty.
 ISMAY (V.O.)
She is the largest moving object ever made by the hand of man in all
history...
 CUT TO:
59 INT. PALM COURT RESTAURANT - DAY
CLOSE ON J. BRUCE ISMAY, Managing Director of White Star Line.
 ISMAY
...and our master shipbuilder, Mr. Andrews here, designed her from the keel 
plates up.
He indicates a handsome 39 year old Irish gentlemen to his right, THOMAS
ANDREWS, of Harland and Wolf Shipbuilders.
WIDER, showing the group assembled for lunch the next day. Ismay seated
with Cal, Rose, Ruth, Molly Brown and Thomas Andrews in the Palm Court, a
beautiful sunny spot enclosed by high arched windows.
 ANDREWS
 (disliking the attention)
Well, I may have knocked her together, but the idea was Mr. Ismay's. He
envisioned a steamer so grand in scale, and so luxurious in its
appointments, that its supremacy would never be challenged. And here she
is...
 (he slaps the table)
...willed into solid reality.
 MOLLY
Why're ships always bein' called "she"? Is it because men think half the
women around have big sterns and should be weighed in tonnage?
 (they all laugh)
Just another example of the men settin' the rules their way.
The waiter arrives to take orders. Rose lights a cigarette.
 RUTH
You know I don't like that, Rose.
 CAL
She knows.
Cal takes the cigarette from her and stubs it out.
 CAL
 (to the waiter)
We'll both have the lamb. Rare, with a little mint sauce.
 (to Rose, after the waiter moves away) 
You like lamb, don't you sweetpea?
Molly is watching the dynamic between Rose, Cal and Ruth.
 MOLLY
So, you gonna cut her meat for her too there, Cal?
 (turning to Ismay)
Hey, who came up with the name Titanic? You, Bruce?
 ISMAY
Yes, actually. I wanted to convey sheer size. And size means stability,
luxury... and safety--
 ROSE
Do you know of Dr. Freud? His ideas about the male preoccupation with size
might be of particular interest to you, Mr. Ismay.
Andrews chockes on his breadstick, suppressing laughter.
 RUTH
My God, Rose, what's gotten into--
 ROSE
Excuse me.
She stalks away.
 RUTH
 (mortified)
I do apologize.
 MOLLY
She's a pistol, Cal. You sure you can handle her?
 CAL
 (tense but feigning unconcern)
Well, I may have to start minding what she reads from now on.
 CUT TO: 
60 EXT. POOP DECK / AFTER DECKS - DAY
Jack sits on a bench in the sun. Titanic's wake spreads out behind him to
the horizon. He has his knees pulled up, supporting a leather bound
sketching pad, his only valuable possession. With conte crayon he draws
rapidly, using sure strokes. An emigrant from Manchester named CARTMELL has
his 3 year old daughter CORA standing on the lower rung of the rail. She is
leaned back against his beer barrel of a stomach, watching the seagulls.
THE SKETCH captures them perfectly, with a great sense of the humanity of
the moment. Jack is good. Really good. Fabrizio looks over Jack's shoulder.
He nods appreciatively.
TOMMY RYAN, a scowling young Irish emigrant, watches as a crewmember comes
by, walking three small dogs around the deck. One of them, a BLACK FRENCH
BULLDOG, is among the ugliest creatures on the planet.
 TOMMY
That's typical. First class dogs come down here to take a shit.
Jack looks up from his sketch.
 JACK
That's so we know where we rank in the scheme of things.
 TOMMY
Like we could forget.
Jack glances across the well deck. At the aft railing of B deck promenade
stands ROSE, in a long yellow dress and white gloves.
CLOSE ON JACK, unable to take his eyes off of her. They are across from
each other, about 60 feet apart, with the well deck like a valley between
them. She on her promontory, he on his much lower one. She stares down at
the water.
He watches her unpin her elaborate hat and take it off. She looks at the
frilly absurd thing, then tosses it over the rail. It sails far down to the
water and is carried away, astern. A spot of yellow in the vast ocean. He
is riveted by her. She looks like a figure in a romantic novel, sad and
isolated.
Fabrizio taps Tommy and they both look at Jack gazin at Rose. Fabrizio and
Tommy grin at each other.
Rose turns suddenly and looks right at Jack. He is caught staring, but he
doesn't look away. She does, but then looks back. Their eyes meet across 
the space of the well deck, across the gulf between worlds.
Jack sees a man (Cal) come up behind her and take her arm. She jerks her
arm away. They argue in pantomime. She storms away, and he goes after her,
disappearing along the A-deck promenade. Jack stares after her.
 TOMMY
Forget it, boyo. You'd as like have angels fly out o' yer arse as get next
to the likes o' her.
 CUT TO:
61 INT. FIRST CLASS DINING SALOON - NIGHT
SLOWLY PUSHING IN ON ROSE as she sits, flanked by people in heated
conversation. Cal and Ruth are laughing together, while on the other side
LADY DUFF-GORDON is holding forth animatedly. We don't hear what they are
saying. Rose is staring at her plate, barely listening to the
inconsequential babble around her.
 OLD ROSE (V.O.)
I saw my whole life as if I'd already lived it... an endless parade of
parties and cotillions, yachts and polo matches... always the same narrow
people, the same mindless chatter. I felt like I was standing at a great
precipice, with no one to pull me back, no one who cared... or even
noticed.
ANGLE BENEATH TABLE showing Rose's hand, holding a tiny fork from her crab
salad. She pokes the crab-fork into the skin of her arm, harder and harder
until it draws blood.
 CUT TO:
62 INT. CORRIDOR / B DECK - NIGHT
Rose walks along the corridor. A steward coming the other way greets her,
and she nods with a slight smile. She is perfectly composed.
 CUT TO:
63 INT. ROSE'S BEDROOM - NIGHT
She enters the room. Stands in the middle, staring at her reflection in the
large vanity mirror. Just stands there, then--
With a primal, anguished cry she claws at her throat, ripping off her pearl
necklace, which explodes across the room. In a frenzy she tears at herself,
her clothes, her hair... then attacks the room. She flings everything off
the dresser and it flies clattering against the wall. She hurls a 
handmirror against the vanity, cracking it.
 CUT TO:
64 EXT. A DECK PROMENADE, AFT - NIGHT
Rose runs along the B deck promenade. She is dishevelled, her hair flying.
She is crying, her cheeks streaked with tears. But also angry, furious!
Shaking with emotions she doesn't understand... hatred, self-hatred,
desperation. A strolling couple watch her pass. Shocked at the emotional
display in public.
 CUT TO:
65 EXT. POOP DECK - NIGHT
Jack is kicked back on one of the benches gazing at the stars blazing
gloriously overhead. Thinking artist thoughts and smoking a cigarette.
Hearing something, he turns as Rose runs up the stairs from the well deck.
They are the only two on the stern deck, except for QUARTERMASTER ROWE,
twenty feet above them on the docking bridge catwalk. She doesn't see Jack
in the shadows, and runs right past him.
TRACKING WITH ROSE as she runs across the deserted fantail. Her breath
hitches in an occasional sob, which she suppresses. Rose slams against the
base of the stern flagpole and clings there, panting. She stares out at the
black water.
Then starts to climb over the railing. She has to hitch her long dress way
up, and climbing is clumsy. Moving methodically she turns her body and gets
her heels on the white-painted gunwale, her back to the railing, facing out
toward blackness. 60 feet below her, the massive propellers are churning
the atlantin into white foam, and a ghostly wake trails off toward the
horizon.
IN A LOW ANGLE, we see Rose standing like a figurehead in reverse. Below
her are the huge letters of the name "TITANIC".
She leans out, her arms straightening... looking down hypnotized, into the
vortex below her. Her dress and hair are lifted by the wind of the ship's
movement. The only sound, above the rush of water below, is the flutter and
snap of the big Union Jack right above her.
 JACK
Don't do it.
She whips her head around at the sound of his voice. It takes a second for
her eyes to focus. 
 ROSE
Stay back! Don't come any closer!
Jack sees the tear tracks on her cheeks in the faint glow from the stern
running lights.
 JACK
Take my hand. I'll pull you back in.
 ROSE
No! Stay where you are. I mean it. I'll let go.
 JACK
No you won't.
 ROSE
What do you mean no I won't? Don't presume to tell me what I will and will
not do. You don't know me.
 JACK
You would have done it already. Now come on, take my hand.
Rose is confused now. She can't see him very well through the tears, so she
wipes them with one hand, almost losing her balance.
 ROSE
You're distracting me. Go away.
 JACK
I can't. I'm involved now. If you let go I have to jump in after you.
 ROSE
Don't be absurd. You'll be killed.
He takes off his jacket.
 JACK
I'm a good swimmer.
He starts unlacing his left shoe. 
 ROSE
The fall alone would kill you.
 JACK
It would hurt. I'm not saying it wouldn't. To be honest I'm a lot more
concerned about the water being so cold.
She looks down. The reality factor of what she is doing is sinking in.
 ROSE
How cold?
 JACK
 (taking off his left shoe)
Freezing. Maybe a couple degrees over.
He starts unlacing his right shoe.
 JACK
Ever been to Wisconsin?
 ROSE
 (perplexed)
No.
 JACK
Well they have some of the coldest winters around, and I grew up there,
near Chippewa Falls. Once when I was a kid me and my father were
ice-fishing out on Lake Wissota... ice-fishing's where you chop a hole in
the--
 ROSE
I know what ice fishing is!
 JACK
Sorry. Just... you look like kind of an indoor girl. Anyway, I went through
some thin ice and I'm tellin' ya, water that cold... like that right down
there... it hits you like a thousand knives all over your body. You can't
breath, you can't think... least not about anything but the pain. 
 (takes off his other shoe)
Which is why I'm not looking forward to jumping in after you. But like I
said, I don't see a choice. I guess I'm kinda hoping you'll come back over
the rail and get me off the hook here.
 ROSE
You're crazy.
 JACK
That's what everybody says. But with all due respect, I'm not the one
hanging off the back of a ship.
He slides one step closer, like moving up on a spooked horse.
 JACK
Come on. You don't want to do this. Give me your hand.
Rose stares at this madman for a long time. She looks at his eyes and they
somehow suddenly seem to fill her universe.
 ROSE
Alright.
She unfastens one hand from the rail and reaches it around toward him. He
reaches out to take it, firmly.
 JACK
I'm Jack Dawson.
 ROSE
 (voice quavering)
Pleased to meet you, Mr. Dawson.
Rose starts to turn. Now that she has decided to live, the height is
terrifying. She is overcome by vertigo as she shifts her footing, turning
to face the ship. As she starts to climb, her dress gets in the way, and
one foot slips off the edge of the deck.
She plunges, letting out a piercing SHRIEK. Jack, gripping her hand, is
jerked toward the rail. Rose barely grabs a lower rail with her free hand.
QUARTERMASTER ROWE, up on the docking bridge hears the scream and heads for
the ladder. 
 ROSE
HELP! HELP!!
 JACK
I've got you. I won't let go.
Jack holds her hand with all his strength, bracing himself on the railing
with his other hand. Rose tries to get some kind of foothold on the smooth
hull. Jack tries to lift her bodily over the railing. She can't get any
footing in her dress and evening shoes, and she slips back. Rose SCREAMS
again.
Jack, awkwardly clutching Rose by whatever he can get a grip on as she
flails, gets her over the railing. They fall together onto the deck in a
tangled heap, spinning in such a way that Jack winds up slightly on top of
her.
Rowe slides down the ladder from the docking bridge like it's a fire drill
and sprints across the fantail.
 ROWE
Here, what's all this?!
Rowe runs up and pulls Jack off of Rose, revealing her dishevelled and
sobbing on the deck. Her dress is torn, and the hem is pushing up above her
knees, showing one ripped stocking. He looks at Jack, the shaggy steerage
man with his jacket off, and the first class lady clearly in distress, and
starts drawing conclusions. Two seamen chug across the deck to join them.
 ROWE
 (to Jack)
Here you, stand back! Don't move an inch!
 (to the seamen)
Fetch the Master at Arms.
 CUT TO:
66 EXT. POOP DECK - NIGHT
A few minutes later. Jack is being detained by the burly MASTER AT ARMS,
the closest thing to a cop on board. He is handcuffing Jack. Cal is right
in front of Jack, and furious. He has obviously just rushed out here with
Lovejoy and another man, and none of them have coats over their black tie 
evening dress. The other man is COLONEL ARCHIBALD GRACIE, a mustachioed
blowhard who still has his brandy snifter. He offers it to Rose, who is
hunched over crying on a bench nearby, but she waves it away. Cal is more
concerned with Jack. He grabs him by the lapels.
 CAL
What made you think you could put your hands on my fiancee?! Look at me,
you filth! What did you think you were doing?!
 ROSE
Cal, stop! It was an accident.
 CAL
An accident?!
 ROSE
It was... stupid really. I was leaning over and I slipped.
Rose looks at Jack, getting eye contact.
 ROSE
I was leaning way over, to see the... ah... propellers. And I slipped and I
would have gone overboard... and Mr. Dawson here saved me and he almost
went over himself.
 CAL
You wanted to see the propellers?
 GRACIE
 (shaking his head)
Women and machinery do not mix.
 MASTER AT ARMS
 (to Jack)
Was that the way of it?
Rose is begging him with her eyes not to say what really happened.
 JACK
Uh huh. That was pretty much it. 
He looks at Rose a moment longer. Now they have a secret together.
 COLONEL GRACIE
Well! The boy's a hero then. Good for you son, well done!
 (to Cal)
So it's all's well and back to our brandy, eh?
Jack is uncuffed. Cal gets Rose to her feet and moving.
 CAL
 (rubbing her arms)
Let's get you in. You're freezing.
Cal is leaving without a second thought for Jack.
 GRACIE
 (low)
Ah... perhaps a little something for the boy?
 CAL
Oh, right. Mr. Lovejoy. A twenty should do it.
 ROSE
Is that the going rate for saving the woman you love?
 CAL
Rose is displeased. Mmm... what to do?
Cal turns back to Jack. He appraises him condescendingly... a steerage
ruffian, unwashed and ill-mannered.
 CAL
I know.
 (to Jack)
Perhaps you could join us for dinner tomorrow, to regale our group with
your heroic tale? 
 JACK
 (looking straight at Rose)
Sure. Count me in.
 CAL
Good. Settled then.
Cal turns to go, putting a protective arm around Rose. he leans close to
Gracie as they walk away.
 CAL
This should be amusing.
 JACK
 (as Lovejoy passes)
Can I bum a cigarette?
Lovejoy smoothly draws a silver cigarette case from his jacket and snaps it
open. Jack takes a cigarette, then another, popping it behind his ear for
later. Lovejoy lights Jack's cigarette.
 LOVEJOY
You'll want to tie those.
 (Jack looks at his shoes)
Interesting that the young lady slipped so mighty all of a sudden and you
still had time to take of your jacket and shoes. Mmmm?
Lovejoy's expression is bland, but the eyes are cold. He turns away to join
his group.
 CUT TO:
67 INT. ROSE'S BEDROOM - NIGHT
As she undresses for bed Rose sees Cal standing in her doorway, reflected
in the cracked mirror of her vanity. He comes toward her.
 CAL
 (unexpectedly tender)
I know you've een melancholy, and I don't pretent to know why. 
From behind his back he hands her a large black velvet jewel case. She
takes it, numbly.
 CAL
I intended to save this till the engagement gals next week. But I thought
tonight, perhaps a reminder of my feeling for you...
Rose slowly opens the box. Inside is the necklace... "HEART OF THE OCEAN"
in all its glory. It is huge... a malevolent blue stone glittering with an
infinity of scalpel-like inner reflections.
 ROSE
My God... Cal. Is it a--
 CAL
Daimond. Yes it is. 56 carats.
He takes the necklace and during the following places it around her throat.
He turns her to the mirror, staring behind her.
 CAL
It was once worn by Louis the Sixteenth. They call it Le Coeur de la Mer,
the--
 ROSE
The Heart of the Ocean. Cal, it's... it's overwhelming.
He gazes at the image of the two of them in the mirror.
 CAL
It's for royalty. And we are royalty.
His fingers caress her neck and throat. He seems himself to be disarmed by
Rose's elegance and beauty. His emotion is, for the first time, unguarded.
 CAL
There's nothing I couldn't give you. There's nothing I'd deny you if you
would deny me. Open your heart to me, Rose.
CAMERA begins to TRACK IN ON ROSE. Closer and closer, during the following:
 OLD ROSE (V.O.) 
Of course his gift was only to reflect light back onto himself, to
illuminate the greatness that was Caledon Hockley. It was a cold stone... a
heart of ice.
Finally, when Rose's eyes FILL FRAM, we MORPH SLOWLY to her eyes as the are
now... transforming through 84 years of life...
 TRANSITION
68 INT. KELDYSH IMAGING SHACK
Without a cut the wrinkled, weathered landscape of age has appeared around
her eyes. But the eyes themselves are the same.
 OLD ROSE
After all these years, feel it closing around my throat like a dog collar.
THE CAMERA PUllS BACK to show her whole face.
 ROSE
I can still feel its weight. If you could have felt it, not just seen it...
 LOVETT
Well, that's the general idea, my dear.
 BODINE
So let me get this right. You were gonna kill yourself by jumping off the
Titanic?
 (he guffaws)
That's great!
 LOVETT
 (warningly)
Lewis...
But Rose laughs with Bodine.
 BODINE
 (still laughing)
All you had to do was wait two days! 
Lovett, standing out of Rose's sightline, checks his watch. Hours have
passed. This process is taking too long.
 LOVETT
Rose, tell us more about the diamond. What did Hockley do with it after
that?
 ROSE
Im afraid I'm feeling a little tired, Mr. Lovett.
Lizzy picks up the cue and starts to wheel her out.
 LOVETT
Wait! Can you give us something go on, here. Like who had access to the
safe. What about this Lovejoy guy? The valet. Did he have the combination?
 LIZZY
That's enough.
Lizzy takes her out. Rose's old hand reapears at the doorway in a frail
wave goodbye.
 CUT TO:
69 EXT. LAUNCH AREA/KELDYSH DECK - DAY
As the big hydraulic jib swings one of the Mir subs out over the water.
Lovett walks as he talks with Bobby Buell, the partners' rep. They weave
among deck cranes, launch crew, sub maintenance guys.
 BUELL
The partners are pissed.
 BROCK
Bobby, buy me time. I need time.
 BUELL
We're running thirty thousand a day, and we're six days over. I'm telling
you what they're telling me. The hand is on the plug. It's starting to
pull.
 BROCK
Well you tell the hand I need another two days! Bobby, Bobby, Bobby... 
we're close! I smell it. I smell ice. She had the diamond on... now we just
have to find out where it wound up. I just gotta work her a bit more. Okay?
Brock turns and sees Lizy standing behind him. She has overheard the past
part of his dialogue with Buell. He goes to her and hustles her away from
Buell, toward a quite spot on the deck.
 BROCK
Hey, Lizzy. I need to talk to you for a second.
 LIZZY
Don't you mean work me?
 BROCK
Look, I'm running out of time. I need your help.
 LIZZY
I'm not going to help you browbeat my hundred and
 (MORE)
 LIZZY (CONT'D)
one year old grandmother. I came down here to tell you to back off.
 BROCK
 (with undisguised desperation)
Lizzy... you gotta understand something. I've bet it all to find the Heart
of the Ocean. I've got all my dough tied up in this thing. My wife even
divorced me over this hunt. I need what's locked inside your grandma's
memory.
 (he holds out his hand)
You see this? Right here?
She looks at his hand, palm up. Empty. Cupped, as if around an imaginary
shape.
 LIZZY
What?
 BROCK 
That's the shape my hand's gonna be when I hold that thing. You understand?
I'm not leaving here without it.
 LIZZY
Look, Brock, she's going to do this her way, in her own time. Don't forget,
she contacted you. She's out here for her own reasons, God knows what they
are.
 LOVETT
Maybe she wants to make peace with the past.
 LIZZY
What past? She has never once, not once, ever said a word about being on
the Titanic until two days ago.
 LOVETT
Then we're all meeting your grandmother for the first time.
 LIZZY
 (looks at him hard)
You think she was really there?
 LOVETT
Oh, yeah. Yeah, I'm a believer. She was there.
 CUT TO:
70 INT. IMAGING SHACK
Bodine starts the tape recorder. Rose is gazing at the screen seeing THE
LIVE FEED FROM THE WRECK--SNOOP DOG is moving along the starboard side of
the hull, heading aft. The rectangular windows of A deck (forward) march
past on the right.
 ROSE
The next day, Saturday, I remember thinking how the sunlight felt.
 DISSOLVE TO:
71 EXT. B DECK TITANIC - DAY
MATCH DISSOLVE from the rusting hulk to the gleaming new Titanic in 1912,
passing the end of the enclosed promenade just as Rose walks into the 
sunlight right in front of us. She is stunningly dressed and walking with
purpose.
 OLD ROSE (V.O.)
As if I hadn't felt the sun in years.
IT IS SATURDAY APRIL 13, 1912. Rose unlatches the gate to go down into
third class. The steerage men on the deck stop what they're doing and stare
at her.
 CUT TO:
72 INT. THIRD CLASS GENERAL ROOM
The social center of steerage life. It is stark by comparison to the
opulence of first class, but is a loud, boisterous place. There are mothers
with babies, kids running between the benches yelling in several languages
and being scolded in several more. There are old women yelling, men playing
chess, girls doing needlepoint and reading dime novels. There is even an
upright piano and Tommy Ryan is noodling around it.
Three boys, shrieking and shouting, are scrambling around chasing a rat
under the benches, trying to whomp it with a shoe and causing general
havoc. Jack is playing with 5 year old CORA CARTMeLL, drawing funny faces
together in his sketchbook.
Fabrizio is struggling to get a conversation going with an attractive
Norwegian girl, HELGA DAHL, sitting with her family at a table across the
room.
 FABRIZIO
No Italian? Some little English?
 HELGA
No, no. Norwegian. Only.
Helga's eye is caught by something. Fabrizio looks, does a take... and
Jack, curious, follows their gaze to see...
Rose, coming toward them. The activity in the room stops... a hush falls.
Rose feels suddenly self-conscious as the steerage passengers stare openly
at this princess, some with resentment, others with awe. She spots Jack and
gives a little smile, walking straight to him. He rises to meet her,
smiling.
 ROSE
Hello Jack. 
Fabrizio and Tommy are floored. Its like the slipper fitting Cinderella.
 JACK
Hello again.
 ROSE
Could I speak to you in private?
 JACK
Uh, yes. Of course. After you.
He motions her ahead and follows. Jack glances over his shoulder, one
eyebrow raised, as he walks out with her leaving a stunned silence.
 CUT TO:
73 EXT. BOAT DECK - DAY
Jack and Rose walk side by side. They pass people reading and talking in
steamer chairs, some of whom glance curiously at the mismatched couple. He
feels out of place in his rough clothes. They are both awkward, for
different reasons.
 JACK
So, you got a name by the way?
 ROSE
Rose. Rose DeWitt Bukater.
 JACK
That's quite a moniker. I may hafta get you to write that down.
There is an awkward pause.
 ROSE
Mr. Dawson, I--
 JACK
Jack.
 ROSE 
Jack... I feel like such an idiot. It took me all morning to get up the
nerve to face you.
 JACK
Well, here you are.
 ROSE
Here I am. I... I want to thank you for what you did. Not just for... for
pulling me back. But for your discretion.
 JACK
You're welcome. Rose.
 ROSE
Look, I know what you must be thinking! Poor little rich girl. What does
she know about misery?
 JACK
That's not what I was thinking. What I was thinking was... what could have
happened to hurt this girl so much she though she had no way out.
 ROSE
I don't... it wasn't just one thing. It was everything. It was them, it was
their whole world. And I was trapped in it, like an insect in amber.
 (in a rush)
I just had to get away... just run and run and run... and then I was at the
back rail and there was no more ship... even the Titanic wasn't big enough.
Not enough to get away from them. And before I'd really though about it, I
was over the rail. I was so furious. I'll show them. They'll be sorry!
 JACK
Uh huh. They'll be sorry. 'Course you'll be dead.
 ROSE
 (she lowers her head)
Oh God, I am such an utter fool.
 JACK
That penguin last night, is he one of them? 
 ROSE
Penguin? Oh, Cal! He is them.
 JACK
Is he your boyfriend?
 ROSE
Worse I'm afraid.
She shows him her engagement ring. A sizable diamond.
 JACK
Gawd look at that thing! You would have gone straight to the bottom.
They laugh together. A passing steward scowls at Jack, who is clearly not a
first class passenger, but Rose just glares at him away.
 JACK
So you feel like you're stuck on a train you can't get off 'cause you're
marryin' this fella.
 ROSE
Yes, exactly!
 JACK
So don't marry him.
 ROSE
If only it were that simple.
 JACK
It is that simple.
 ROSE
Oh, Jack... please don't judge me until you've seen my world.
 JACK
Well, I guess I will tonight. 
Looking for another topic, any other topic, she indicates his sketchbook.
 ROSE
What's this?
 JACK
Just some sketches.
 ROSE
May I?
The question is rhetorical because she has already grabbed the book. She
sits on a deck chair and opens the sketchbook. ON JACK'S sketches... each
one an expressive little bit of humanity: an old woman's hands, a sleeping
man, a father and daughter at the rail. The faces are luminous and alive.
His book is a celebration of the human condition.
 ROSE
Jack, these are quite good! Really, they are.
 JACK
Well, they didn't think too much of 'em in Paree.
Some loose sketches fall out and are taken by the wind. Jack scrambles
after them... catching two, but the rest are gone, over the rail.
 ROSE
Oh no! Oh, I'm so sorry. Truly!
 JACK
Well, they didn't think too much of 'em in Paree.
He snaps his wrist, shaking his drawing hand in a flourish.
 JACK
I just seem to spew 'em out. Besides, they're not worth a damn anyway.
For emphasis he throws away the two he caught. They sail off.
 ROSE
 (laughing) 
You're deranged!
She goes back to the book, turning a page.
 ROSE
Well, well...
She has come upon a series of nudes. Rose is transfixed by the languid
beauty he has created. His nudes are soulful, real, with expressive hands
and eyes. They feel more like portraits than studies of the human form...
almost uncomfortably intimate. Rose blushes, raising the book as some
strollers go by.
 ROSE
 (trying to be very adult)
And these were drawn from life?
 JACK
Yup. That's one of the great things about Paris. Lots of girls willing take
their clothes off.
She studies one drawing in particular, the girl posed half in sunlight,
half in shadow. Her hands lie at her chin, one furled and one open like a
flower, languid and graceful. The drawing is like an Alfred Steiglitz print
of Georgia O'Keefe.
 ROSE
You liked this woman. You used her several times.
 JACK
She had beautiful hands.
 ROSE
 (smiling)
I think you must have had a love affair with her...
 JACK
 (laughing)
No, no! Just with her hands.
 ROSE 
 (looking up from the drawings)
You have a gift, Jack. You do. You see people.
 JACK
I see you.
There it is. That piercing gaze again.
 ROSE
And...?
 JACK
You wouldn'ta jumped.
 CUT TO:
74 INT. RECEPTION ROOM / D-DECK - DAY
Ruth is having tea with NOEL LUCY MARTHA DYER-EDWARDES, the COUNTESS OF
ROTHES, a 35ish English blue-blood with patirician features. Ruth sees
someone coming across the room and lowers her voice.
 RUTH
Oh no, that vulgar Brown woman is coming this way. Get up, quickly before
she sits with us.
Molly Brown walks up, greeting them cheerfully as they are rising.
 MOLLY
Hello girls, I was hoping I'd catch you at tea.
 RUTH
We're awfully sorry you missed it. The Countess and I are just off to take
the air on the boat deck.
 MOLLY
That sounds great. Let's go. I need to catch up on the gossip.
Ruth grits her teeth as the three of them head for the Grand Staircase to
go up. TRACKING WITH THEM, as they cross the room, the SHOT HANDS OFF to
Bruce Ismay and Captain Smith at another table. 
 ISMAY
So you've not lit the last four boilers then?
 SMITH
No, but we're making excellent time.
 ISMAY
 (impatiently)
Captain, the press knows the size of Titanic, let them marvel at her speed
too. We must give them something new to print. And the maiden voyage of
Titnaic must make headlines!
 SMITH
I prefer not to push the engines until they've been properly run in.
 ISMAY
Of course I leave it to your good offices to decide what's best, but what a
glorious end to your last crossing if we get into New York Tuesday night
and surprise them all.
 (Ismay slaps his hand on the table)
Retire with a bang, eh, E.J?
A beat. Then Smith nods, stiffy.
 CUT TO:
75 EXT. A DECK PROMENADE - DAY
Rose and Jack stroll aft, past people lounging on deck chairs in the
slanting late-afternoon light. Stewards scurry to serve tea or hot cocoa.
 ROSE
 (girlish and excited)
You know, my dream has always been to just chuck it all and become an
artist... living in a garret, poor but free!
 JACK
 (laughing)
You wouldn't last two days. There's no hot water, and hardly ever any 
caviar.
 ROSE
 (angry in a flash)
Listen, buster... I hate caviar! And I'm tired of people dismissing my
dreams with a chuckle and a pat on the head.
 JACK
I'm sorry. Really... I am.
 ROSE
Well, alright. There's something in me, Jack. I feel it. I don't know what
it is, whether I should be an artist, or, I don't know... a dancer. Like
Isadora Duncan.... a wild pagan spirit...
She leaps forward, lands deftly and whirls like a dervish. Then she sees
something ahead and her face lights up.
 ROSE
...or a moving picture actress!
She takes his hand and runs, pulling him along the deck toward--
DANIEL AND MARY MARVIN. Daniel is cranking the big wooden movie camera as
she poses stiffly at the rail.
 MARVIN
You're sad. Sad, sad, sad. You've left your lover on the shore. You may
never see him agian. Try to be sadder, darling.
SUDDENLY Rose shoots into the shot and strikes a theatrical pose at the
rail next to Mary. Mary bursts out laughing. Rose pulls Jack into the
picture and makes him pose.
Marvin grins and starts yelling and gesturing. We see this in CUTS, with
music and no dialogue.
SERIES OF CUTS:
Rose posing tragically at the rail, the back of her hand to her forehead.
Jack on a deck chair, pretending to be a Pasha, the two girls pantomiming
fanning him like slave girls.
Jack, on his knees, pleading with his hands clasped while Rose, standing, 
turns her head in bored disdain.
Rose cranking the camera, while Daniel and Jack have a western shoot-out.
Jack wins and leers into the lens, twirling an air mustache like Snidely
Whiplash.
 CUT TO:
76 EXT. A DECK PROMENADE / AFT - SUNSET
Painted with orange light, Jack and Rose lean on the A-deck rail aft,
shoulder to shoulder. The ship's lights come on.
It is a magical moment... perfect.
 ROSE
So then what, Mr. Wandering Jack?
 JACK
Well, then logging got to be too much like work, so I went down to Los
Angelas to the pier in Santa Monica. That's a swell place, they even have a
rollercoaster. I sketched portraits there for ten cents a piece.
 ROSE
A whole ten cents?!
 JACK
 (not getting it)
Yeah; it was great money... I could make a dollar a day, sometimes. But
only in summer. When it got cold, I decided to go to Paris and see what the
real artists were doing.
 ROSE
 (looks at the dusk sky)
Why can't I be like you Jack? Just head out for the horizon whenever I feel
like it.
 (turning to him)
Say we'll go there, sometime... to that pier... even if we only ever just
talk about it.
 JACK 
Alright, we're going. We'll drink cheap beer and go on the rollercoaster
until we throw up and we'll ride horses on the beach... right in the
surf... but you have to ride like a cowboy, none of that side-saddle stuff.
 ROSE
You mean one leg on each side? Scandalous! Can you show me?
 JACK
Sure. If you like.
 ROSE
 (smiling at him)
I think I would.
 (she looks at the horizon)
And teach me to spit too. Like a man. Why should only men be able to spit.
It's unfair.
 JACK
They didn't teach you that in finishing school? Here, it's easy. Watch
closely.
He spits. It arcs out over the water.
 JACK
Your turn.
Rose screws up her mouth and spits. A pathetic little bit of foamy spittle
which mostly runs down her chin before falling off into the water.
 JACK
Nope, that was pitiful. Here, like this... you hawk it down... HHHNNNK!...
then roll it on your tongue, up to the front, like thith, then a big breath
and PLOOOW!! You see the range on that thing?
She goes through the steps. Hawks it down, etc. He coaches her through it
(ad lib) while doing the steps himself. She lets fly. So does he. Two
comets of gob fly out over the water.
 JACK
That was great! 
Rose turns to him, her face alight. Suddenly she blanches. He sees her
expression and turns.
RUTH, the Countess of Rothes, and Molly Brown have been watching them
hawking lugees. Rose becomes instantly composed.
 ROSE
Mother, may I introduce Jack Dawson.
 RUTH
Charmed, I'm sure.
Jack has a little spit running down his chin. He doesn't know it. Molly
Brown is grinning. As Rose proceeds with the introductions, we hear...
 OLD ROSE (V.O.)
The others were gracious and curious about the man who'd saved my life. But
my mother looked at him like an insect. A dangerous insect which must be
squashed quickly.
 MOLLY
Well, Jack, it sounds like you're a good man to have around in a sticky
spot--
They all jump as a BUGLER sounds the meal call right behind them.
 MOLLY
Why do they insist on always announcing dinner like a damn cavalry charge?
 ROSE
Shall we go dress, mother?
 (over her shoulder)
See you at dinner, Jack.
 RUTH
 (as they walk away)
Rose, look at you... out in the sun with no hat. Honestly!
The Countess exits with Ruth and Rose, leaving Jack and Molly alone on
deck. 
 MOLLY
Son, do you have the slightest comprehension of what you're doing?
 JACK
Not really.
 MOLLY
Well, you're about to go into the snakepit. I hope you're ready. What are
you planning to wear?
Jack looks down at his clothes. Back up at her. He hadn't thought about
that.
 MOLLY
I figured.
 CUT TO:
77 INT. MOLLY BROWN'S STATEROOM
Men's suits and jackets and formal wear are strewn all over the place.
Molly is having a fine time. Jack is dressed, except for his jacket, and
Molly is tying his bow tie.
 MOLLY
Don't feel bad about it. My husband still can't tie one of these damn
things after 20 years. There you go.
She picks up a jacket off the bed and hands it to him. Jack goes into the
bathroom to put it on. Molly starts picking up the stuff off the bed.
 MOLLY
I gotta buy everything in three sizes 'cause I never know how much he's
been eating while I'm away.
She turns and sees him, though we don't.
 MOLLY
My, my, my... you shine up like a new penny.
 CUT TO:
78 EXT. BOAT DECK / FIRST CLAsS ENTRANCE - DUSK 
A purple sky, shot with orange, in the west. Drifting strains of classic
music. We TRACK WITH JACK along the deck. By Edwardian standards he looks
badass. Dashing in his borrowed white-tie outfit, right down to his pearl
studs.
A steward bows and smartly opens the door to the First Class Entrance.
 STEWARD
Good evening, sir.
Jack plays the role smoothly. Nods with just the right degree of disdain.
 CUT TO:
79 INT. UPPER LANDING / GRAND STAIRCASE AND A-DECK
Jack steps in and his breath is taken away by the splendor spread out
before him. Overhead is the enormous glass dome, with a crystal chandelier
at its center. Sweeping down six stories is the First Class Grand
Staircase, the epitome of the opulent naval architecture of the time.
And the people: the women in their floor length dresses, elaborate
hairstyles and abundant jewelry... the gentlemen in evening dress, standing
with one hand at the small of the back, talking quietly.
Jack descends to A deck. Several men nod a perfunctory greeting. He nods
back, keeping it simple. He feels like a spy.
Cal comes down the stairs, with Ruth on his arm, covered in jewelry. They
both walk right past Jack, neither one gecognizeing him. Cal nods at him,
one gent to another. But Jack barely has time to be amused. Because just
behind Cal and Ruth on the stairs is Rose, a vision in red and black, her
low-cut dress showing off her neck and shoulders, her arms seathed in white
gloves that come well above above the elbow. Jack is hypnotized by her
beauty.
CLOSE ON ROSE as she approaches Jack. He imitates the gentlemen's stance,
hand behind his back. She extends her gloved hand and he takes it, kissing
the back of her fingers. Rose flushes, beaming noticeably. She can't take
her eyes off him.
 JACK
I saw that in a nickelodean once, and I always wanted to do it.
 ROSE
Cal, surely you remember Mr. Dawson.
 CAL 
 (caught off guard)
Dawson! I didn't recognize you.
 (studies him)
Amazing! You could almost pass for a gentlemen.
 CUT TO:
80 INT. D-DECK RECEPTION ROOM
CUT TO THE RECEPTION ROOM ON D DECK, as the party descends to dinner. They
encounter Molly Brown, looking good in a beaded dress, in her own busty
broad-shouldered way. Molly grins when she sees Jack. As they are going
into the dining saloon she walks next to him, speaking low:
 MOLLY
Ain't nothin' to it, is there, Jack?
 JACK
Yeah, you just dress like a pallbearer and keep your nose up.
 MOLLY
Remember, the only thing they respect is money, so just act like you've got
a lot of it and you're in the club.
As they enter the swirling throng, Rose leans close to him, pointing out
several notables.
 ROSE
There's the Countess Rothes. And that's John Jacob Astor... the richest man
on the ship. His little wifey there, Madeleine, is my age and in a delicate
condition. See how she's trying to hide it. Quite the scandal.
 (nodding toward a couple)
And over there, that's Sir Cosmo and Lucile, Lady Duff-Gordon. She designs
naughty lingerie, among her many talents. Very popular with the royals.
Cal becomes engrossed in a conversations with Cosmo Duff-Gordon and Colonel
Gracie, while Ruth, the Countess and Lucille discuss fashion. Rose picots
Jack smoothly, to show him another couple, dressed impeccably.
 ROSE 
And that's Benjamin Guggenheim and his mistress, Madame Aubert. Mrs.
Guggenheim is at home with the children, of course.
Cal, meanwhile, is accepting the praise of his male counterparts, who are
looking at Rose like a prize show horse.
 SIR COSMO
Hockley, she is splendid.
 CAL
Thank you.
 GRACIE
Cal's a lucky man. I know him well, and it can only be luck.
Ruth steps over, hearing the last. She takes Cal's arm, somewhat
coquettishly.
 RUTH
How can you say that Colonel? Caledon Hockley is a great catch.
The entourage strolls toward the dining saloon, where they run into the
Astor's going through the ornate double doors.
 ROSE
J.J., Madeleine, I'd like you to meet Jack Dawson.
 ASTOR
 (shaking his hand)
Good to meet you Jack. Are you of the Boston Dawsons?
 JACK
No, the Chippewa Falls Dawsons, actually.
J.J. nods as if he's heard of them, then looks puzzled. Madeleine Astor
appraises Jack and whispers girlishly to Rose:
 MADELEINE
It's a pity we're both spoken for, isn't it?
 CUT TO: 
81 INT. DINING SALOON
Like a ballroom at the palace, alive and lit by a constellation of
chandeliers, full of elegantly dressed people and beautiful music from
BANDLEADER WALLACE HARTLEY'S small orchestra. As Rose and Jack enter and
move across the room to their table, Cal and Ruth beside them, we hear...
 OLD ROSE (V.O.)
He must have been nervous but he never faltered. They assumed he was one of
them... a young captain of industry perhaps... new money, obviously, but
still a memeber of the club. Mother of course, could always be counted
upon...
 CUT TO:
82 INT. DINING SALOON
CLOSE ON RUTH.
 RUTH
Tell us of the accommodations in steerage, Mr. Dawson. I hear they're quite
good on this ship.
WIDER: THE TABLE. Jack is seated opposite Rose, who is flanked by Cal and
Thomas Andrews. Also at the table are Molly Brown, Ismay, Colonel Gracie,
the Countess, Guggenheim, Madame Aubert, and the Astors.
 JACK
The best I've seen, m'am. Hardly any rats.
Rose motions surreptitiously for Jack to take his napkin off his plate.
 CAL
Mr. Dawson is joining us from third class. He was of some assistance to my
fiancee last night.
 (to Jack, as if to a child)
This is foie gras. It's goose liver.
We see whispers exchanged. Jack becomesthe subject of furtive glances. Now
they're all feeling terribly liberal and dangerous.
 GUGGENHEIM
 (low to Madame Aubert) 
What is Hockly hoping to prove, bringing this... bohemian... up here?
 WAITER
 (to Jack)
How do you take your caviar, sir?
 CAL
 (answering for him)
Just a soupcon of lemon...
 (to Jack, smiling)
...it improves the flavor with champagne.
 JACK
 (to the waiter)
No caviar for me, thanks.
 (to Cal)
Never did like it much.
He looks at Rose, pokerfaced, and she smiles.
 RUTH
And where exactly do you live, Mr. Dawson?
 JACK
Well, right now my address is the RMS Titanic. After that, I'm on God's
good humor.
Salad is served. Jack reaches for the fish fork. Rose gives him a look and
picks up the salad fork, prompting him with her eyes. He changes forks.
 RUTH
You find that sort of rootless existence appealing, do you?
 JACK
Well... it's a big world, and I want to see it all before I go. My father
was always talkin' about goin' to see the ocean. He died in the town he was
born in, and never did see it. You can't wait around, because you never 
know what hand you're going to get dealt next. See, my folks died in a fire
when I was fifteen, and I've been on the road since. Somethin' like that
teaches you to take life as it comes at you. To make each day count.
Molly Brown raises her glass in a salute.
 MOLLY
Well said, Jack.
 COLONEL GRACIE
 (raising his glass)
Here, here.
Rose raises her glass, looking at Jack.
 ROSE
To making it count.
Ruth, annoyed that Jack has scored a point, presses him further.
 RUTH
How is it you have the means to travel, Mr. Dawson?
 JACK
I work my way from place to place. Tramp steamers and such. I won my ticket
on Titanic here in a lucky hand at poker.
 (he glances at Rose)
A very lucky hand.
 GRACIE
All life is a game of luck.
 CAL
A real man makes his own luck, Archie.
Rose notices that Thomas Andrews, sitting next to her, is writing in his
notebook, completely ignoring the conversation.
 ROSE
Mr. Andrews, what are you doing? I see you everywhere writing in this 
little book.
 (grabs it and reads)
Increase number of screws in hat hooks from 2 to 3. You build the biggest
ship in the world and this preoccupies you?!
Andrews smiles sheepishly.
 ISMAY
He knows every rivet in her, don't you Thomas?
 ANDREWS
All three million of them.
 ISMAY
His blood and soul are in the ship. She may be mine on paper, but in the
eyes of God she belongs to Thomas Andrews.
 ROSE
Your ship is a wonder, Mr. Andrews. Truly.
 ANDREWS
Thankyou, Rose.
We see that Andrews has come under Rose's spell.
83 TIME TRANSITION: Dessert has been served and a waiter arrives with
cigars in a humidor on a wheeled cart. The men start clipping ends and
lighting.
 ROSE
 (low, to Jack)
Nest it'll be brandies in the Smoking Room.
 GRACIE
 (rising)
Well, join me for a brandy, gentlemen?
 ROSE
 (low) 
Now they retreat into a cloud of smoke and congratulate each other on being
masters of the universe.
 GRACIE
Joining us, Dawson? You don't want to stay out here with the women, do you?
Actually he does, but...
 JACK
No thanks. I'm heading back.
 CAL
Probably best. It'll be all business and politics, that sort of thing.
Wouldn't interest you. Good of you to come.
Cal and te other gentlemen exit.
 ROSE
Jack, must you go?
 JACK
Time for my coach to turn back into a pumpkin.
He leans over to take her hand.
INSERT: We see him slip a tiny folded not into her palm.
Ruth, scowling, watches him walk away across the enormous room. Rose
surreptitiously opens the note below table level. It reads: "Make it count.
Meet me at the clock".
 CUT TO:
84 INT. A-DECK FOYER-NIGHT
Rose crosses the A-Deck foyer, sighting Jack at the landing above. Overhead
is the crystal dome. Jack has his back to her, studying the ornate clock
with its carved figures of Honor and Glory. It softly strikes the hour.
MOVING WITH ROSE as she goes up the sweeping staircase toward him. He
turns, sees her... smiles.
 JACK
Want to go to a real party? 
 CUT TO:
85 INT. THIRD CLASS GENERAL ROOM
Crow led and alive with music, laughter and raucous carrying on. An ad hoc
band is gathered near the upright piano, honking out lively stomping music
on fiddle, accoridon and tambourine. People of all ages are dancing,
drinking beer and wine, smoking, laughing, even brawling.
Tommy hands Rose a pint of stout and she hoists it. Jack meanwhile dances
with 5 year old Cora Cartmell, or tries to, with her standing on his feet.
As the tune ends, Rose leans down to the little girl.
 ROSE
May I cut in, miss?
 JACK
You're still my best girl, Cora.
Cora scampers off. Rose and Jack face each other. She is trembling as he
takes her right hand in his left. His other hand slides to the small of her
back. It is an electrifying moment.
 ROSE
I don't know the steps.
 JACK
Just move with me. Don't think.
The music starts and they are off. A little awkward at first, she starts to
get into it. She grins at Jack as she starts to get the rhythm of the
steops.
 ROSE
Wait... stop!
She bends down, pulling off her high heeled shoes, and flings them to
Tommy. Then she grabs Jack and they plunge back into the fray, dancing
faster as the music speeds up.
 CUT TO:
86 OMITTED
87 INT. THIRD CLASS GENERAL ROOM 
The scene is rowdy and rollicking. A table gets knocked over as a drunk
crashes into it. And in the middle of it... Rose dancing with Jack in her
stocking feet. The steps are fast and she shines with sweat. A space opens
around them, and people watch them, clapping as the band plays faster and
faster.
FABRIZIO AND HELGA. Dancing has obviated the need for a common language. He
whirls her, then she responds by whirling him... Fabrizio's eyes go wide
when he realizes she's stronger than he is.
The tune ends in a mad rush. Jack steps away from Rose with a flourish,
allowing her to take a bow. Exhilarated and slightly tipsy, she does a
graceful ballet ployer, feet turned out perfectly. Everyone laughs and
applauds. Rose is a hit with the steerage folks, who've never had a lady
party with them.
They move to a table, flushed and sweaty. Rose grabs Fabrizio's cigarette
and takes a big drag. She's feeling cocky. Fabrizio is grinning, holding
hands with Helga.
 JACK
How you two doin'?
 FABRIZIO
I don't know hwat she's say, she don't know what I say, so we get along
fine.
Tommy walks up with a pint for each of them. Rose chugs hers, showing off.
 ROSE
You think a first class girl can't drink?
Everybody else is dancing again, and Bjorn Gundersen crashes into Tommy,
who sloshes his beer over Rose's dress. She laughs, not caring. But Tommy
lunges, grabbing Bjorn and wheeling him around.
 TOMMY
You stupid bastard!!
Bjorn comes around, his fists coming up... and Jack leaps into the middle
of it, pushing them apart.
 JACK
Boys, boys! Did I ever tell you the one about the Swede and the Irishman
goin' to the whorehouse? 
Tommy stands there, all piss and vinegar, chest puffed up. Then he grins
and claps Bjorn on the shoulder.
 ROSE
So, you think you're big tough men? Let's see you do this.
In her stocking feet she assumes a ballet stance, arms raised, and goes up
on point, taking her entire weight on the tips of her toes. The guys gape
at her incredible muscle control. She comes back down, then her face screws
up in pain. She grabs one foot, hopping around.
 ROSE
Oooowww! I haven't done that in years.
Jack catches her as she loses her balance, and everyone cracks up.
THE DOOR to the well deck is open a few inches as Lovejoy watches through
the gap. He sees Jack holding Rose, both of them laughing.
LOVEJOY closes the door.
 CUT TO:
88 EXT. BOAT DECK - NIGHT
The stars blaze overhead, so bright and clear you can see the Milky Way.
Rose and Jack walk along the row of lifeboats. Still giddy from the party,
they are singing a popular song "Come Josephine in My Flying Machine".
 JACK/ROSE
Come Josephine in my flying machine
And it's up she goes! Up she goes!
In the air she goes. Where? There she goes!
They fumble the words and break down laughing. They have reached the First
Class Entrance, but don't go straight in, not wanting the evening to end.
Through the doors the sound of the ship's orchestra wafts gently. Rose
grabs a davit and leans back, staring at the cosmos.
 ROSE
Isn't it magnificent? So grand and endless.
She goes to the rail and leans on it. 
 ROSE
They're such small people, Jack... my crowd. They think they're giants on
the earth, but they're not even dust in God's eye. They live inside this
little tiny champagne bubble... and someday the bubble's going to burst.
He leans at the rail next to her, his hand just touching hers. It is the
slightest contact imaginable, and all either one of them can feel is that
square inch of skin where their hands are touching.
 JACK
You're not one of them. There's been a mistake.
 ROSE
A mistake?
 JACK
Uh huh. You got mailed to the wrong address.
 ROSE
 (laughing)
I did, didn't I?
 (MORE)
 ROSE (CONT'D)
 (pointing suddenly)
Look! A shooting star.
 JACK
That was a long one. My father used to say that whenever you saw one, it
was a soul going to heaven.
 ROSE
I like that. Aren't we supposed to wish on it?
Jack looks at her, and finds that they are suddenly very close together. It
would be so easy to move another couple of inches, to kiss her. Rose seems
to be thinking the same thing.
 JACK 
What would you wish for?
After a beat, Rose pulls back.
 ROSE
Something I can't have.
 (she smiles sadly)
Goodnight, Jack. And thank you.
She leaves the rail and hurries through the First Class Entrance.
 JACK
Rose!!
But the door bangs shut, and she is gone. Back to her world.
 CUT TO:
89 INT. ORSE AND CAL'S SUITE / PRIVATE PROMENADE - DAY
SUNDAY APRIL 14, 1912. A bright clear day. Sunlight splashing across the
promenade. Rose and Cal are having breakfast in silence. The tension is
palpable. Trudy Bolt, in her maid's uniform, pours the coffee and goes
inside.
 CAL
I had hoped you would come to me last night.
 ROSE
I was tired.
 CAL
Yes. Your exertions below decks were no doubt exausting.
 ROSE
 (stiffening)
I see you had that undertaker of a manservant follow me.
 CAL
You will never behave like that again! Do you understand? 
 ROSE
I'm not some foreman in your mills than you can command! I am your
fiancee--
Cal explodes, sweeping the breakfast china off the table with a crash. He
moves to her in one shocking moment, glowering over her and gripping the
sides of her chair, so she is trapped between his arms.
 CAL
Yes! You are! And my wife... in practice, if not yet by law. So you will
honor me, as a wife is required to honor her husband! I will not be made
out a fool! Is this in any way unclear?
Rose shrinks into the chair. She sees Trudy, frozen, partway through the
door bringing the orange juice. Cal follows Rose's glance and straightens
up. He stalks past the maid, entering the stateroom.
 ROSE
We... had a little accident. I'm sorry, Trudy.
 CUT TO:
90 INT. RUTH'S SUITE - DAY
Rose is dressed for the day, and is in the middle of helping Ruth with her
corset. The tight bindings do not inhibit Ruth's fury at all.
 RUTH
You are not to see that boy again, do you understand me Rose? I forbid it!
Rose has her knee at the base of her mother's back and is pulling the
corset strings with both hands.
 ROSE
Oh, stop it, Mother. You'll give yourself a nosebleed.
Ruth pulls away from her, and crosses to the door, locking it. CLACK!
 RUTH
 (wheeling on her)
Rose, this is not a game! Our situation is precarious. You know the money's
gone!
 ROSE 
Of course I know it's gone. You remind me every day!
 RUTH
Your father left us nothing but a legacy of bad debts hidden by a good
name. And that name is the only card we have to play.
Rose turns her around and grabs the corset strings again. Ruth sucks in her
waist and Rose pulls.
 RUTH
I don't understand you. It is a fine match with Hockley, and it will insure
our survival.
 ROSE
 (hurt and lost)
How can you put this on my shoulders?
Rose turns to her, and we see what Rose sees-- the naked fear in her
mother's eyes.
 RUTH
Do you want to se me working as a seamstress? Is that what you want? Do you
want to see our fine things sold at an auction, our memories scattered to
the winds? My God, Rose, how can you be so selfish?
 ROSE
It's so unfair.
 RUTH
Of course it's unfair! We're women. Our choices are never easy.
Rose pulls the corset tighter.
 CUT TO:
91 INT. FIRST CLASS DINING SALOON
At the divine service, Captain Smith is leading a group in the hymn
"Almighty Father Strong To Save." Rose and Ruth sing in the middle of the
group.
Lovejoy stands well back, keeping an eye on Rose. He notices a commotion at
the entry doors. Jack has been halted there by two stewards. He is dressed 
in his third class clothes, and stands there, hat in hand, looking out of
place.
 STEWARD
Look, you, you're not supposed to be in here.
 JACK
I was just here last night... don't you remember?
 (seeing Lovejoy coming toward him)
He'll tell you.
 LOVEJOY
Mr. Hockley and Mrs. DeWitt Bukater continue to be most appreciative of
your assistance. They asked me to give you this in gratitude--
He holds out two twenty dollar bills, which Jack refuses to take.
 JACK
I don't want money, I--
 LOVEJOY
--and also to remind you that you hold a third class ticket and your
presence here is no longer appropriate.
Jack spots Rose but she doesn't see him.
 JACK
I just need to talk to Rose for a--
 LOVEJOY
Gentlemen, please see that Mr. Dawson gets back where he belongs.
 (giving the twenties to the stewards)
And that he stays there.
 STEWARD
Yes sir!
 (to Jack) 
Come along you.
END ON ROSE, not seeing Jack hustled out.
 ROSE
 (singing)
O hear us when we cry to thee for those in peril on the sea.
 CUT TO:
92 INT. GYMNASIUM - DAY
An Edwardian nautilus room. There are machines we recognize, and some
don't. A woman pedals a stationary bicycle in a long dress, looking
rediculous. Thomas Andrews is leading a small tour group, including Rose,
Ruth and Cal. Cal is wroking the oars of a stationary rowing machine with a
well trained stroke.
 CAL
Reminds me of my Harvard days.
T.W. McCAULEY, the gym instructor, is a bouncy little man in white
flannels, eager to show off his modern equipment, like his present-day
counterpart on an "Abflex" infomercial. He hits a switch and a machine with
a saddle on it starts to undulate. Rose puts her hand on it, curious.
 MCCAULEY
The electric horse is very popular. We even have an electric camel.
 (to Ruth)
Care to try your hand at the rowing, m'am?
 RUTH
Don't be absurd. I can't think of a skill I should likely need less.
 ANDREWS
The next stop on our tour will be bridge. This way, please.
 CUT TO:
93 EXT. AFT WELL DECK, B-DECK AND A-DECK - DAY
Jack, walking with determination, is followed closely by Tommy and
Fabrizio. He quickly climbs the steps to B-Deck and steps over the gate 
separating 3rd from 2nd class.
 TOMMY
She's a goddess amongst mortal men, there's no denyin'. But she's in
another world, Jackie, forget her. She's closed the door.
Jack moves furtively to the wall below the A-Deck promenade, aft.
 JACK
It was them, not her.
 (glancing around the deck)
Ready... go.
Tommy shakes his head resignedly and puts his hands together, crouching
down. Jack steps into Tommy's hands and gets boosted up to the next deck,
where he scrambles nimbly over the railing, onto the First Class deck.
 TOMMY
He's not bein' logical, I tell ya.
 FABRIZIO
Amore is'a not logical.
 CUT TO:
94 EXT. A-DECK / AFT - DAY
A man is playing with his son, who is spinning a top with a string. The
man's overcoat and hat are sitting on a deck chair nearby. Jack emerges
from behind one of the huge deck cranes and calmly picks up the coat and
bowler hat. He walks away, slipping into the coat, and slicks his hair back
with spit. Then puts the hat on at a jaunty angle. At a distance he could
pass for a gentlemen.
 CUT TO:
95 INT. BRIDGE / CHARTROOM - DAY
HAROLD BRIDE, the 21 year old Junior Wireless Operator, hustles in and
skirts around Andrews' tour group to hand a Marconigram to Captain Smith.
 BRIDE
Another ice warning, sir. This one from the "Baltic". 
 SMITH
Thankyou, Sparks.
Smith glances at the message then nonchalantly puts it in his pocket. He
nods reassuringly to Rose and the group.
 SMITH
Not to worry, it's quite normal for this time of year. In fact, we're
speeding up. I've just ordered the last boilers lit.
Andrews scowls slightly before motioning the group toward the door. They
exit just as SECOND OFFICER CHARLES HERBERT LIGHTOLLER comes out of the
chartroom, stopping next to First Officer Murdoch.
 LIGHTOLLER
Did we ever find those binoculars for the lookouts?
 FIRST OFFICER MURDOCH
Haven't seen them since Southampton.
 CUT TO:
96 EXT. BOAT DECK / STARBOARD SIDE - DAY
Andrews leads the group back from the bridge along the boat deck.
 ROSE
Mr. Andrews, I did the sum in my head, and with the number of lifeboats
times the capacity you mentioned... forgive me, but it seems that there are
not enough for everyone aboard.
 ANDREWS
About half, actually. Rose, you miss nothing, do you? In fact, I put in
these new type davits, which can take an extra row of boats here.
 (he gestures along the eck)
But it was thought... by some... that the deck would look too cluttered. So
I was over-ruled.
 CAL
 (slapping the side of a boat)
Waste of deck space as it is, on an unsinkable ship! 
 ANDREWS
Sleep soundly, young Rose. I have built you a good ship, strong and true.
She's all the lifeboat you need.
As they are passing Boat 7, a gentlemen turns from the rail and walks up
behind the group. It is Jack. He taps Rose on the arm and she turns,
gasping. He motions and she cuts away from the group toward a door which
Jack holds open. They duck into the--
 CUT TO:
97 INT. GYMNASIUM - DAY
Jack closes the door behind her, and glances out through the ripple-glass
window to the starboard rail, where the gym instructor is chatting up the
woman who was riding the bike. Rose and Jack are alone in the room.
 ROSE
Jack, this is impossible. I can't see you.
He takes her by the shoulders.
 JACK
Rose, you're no picnic... you're a spoiled little brat even, but under that
you're a strong, pure heart, and you're the most amazingly astounding girl
I've ever known and--
 ROSE
Jack, I--
 JACK
No wait. Let me try to get this out. You're amazing... and I know I have
nothing to offer you, Rose. I know that. But I'm involved now. You jump, I
jump, remember? I can't turn away without knowin' that you're goin' to be
alright.
Rose feels the tears coming to her eyes. Jack is so open and real... not
like anyone she has ever known.
 ROSE
You're making this very hard. I'll be fine. Really.
 JACK 
I don't think so. They've got you in a glass jar like some butterfly, and
you're goin' to die if you don't break out. Maybe not right away, 'cause
you're strong. But sooner or later the fire in you is goin' to go out.
 ROSE
It's not up to you to save me, Jack.
 JACK
You're right. Only you can do that.
 ROSE
I have to get back, they'll miss me. Please, Jack, for both our sakes,
leave me alone.
 CUT TO:
98 INT. FIRST CLASS LOUNG - DAY
The most elegant room on the ship, done in Louis Quinze Versaille style.
Rose sits on a divan, with a group of other women arrayed around her. Ruth,
the Countess Rothes and Lady Duff-Gordon are taking tea. Rose is silent and
still as a porcelain figurine as the conversation washes around her.
 RUTH
Of course the invitations had to be sent back to the printers twice. And
the bridesmaids dresses! Let me tell you what an odyssey that has been...
TRACKING SLOWLY IN on Rose as Ruth goes on.
REVERSE, ROSE'S POV: A tabeau of MOTHER and DAUGHTER having tea. The four
year old girl, wearing white gloves, daintily picking up a cookie. The
mother correcting her on her posture, and the way she holds the teacup. The
little girl is trying so hard to please, her expression serious. A glimpse
of Rose at that age, and we see the relentless conditioning... the pain to
becoming an Edwardian geisha.
ON ROSE. She calmly and deliberately turns her teacup over, spilling tea
all over her dress.
 ROSE
Oh, look what I've done.
 CUT TO:
99 EXT. TITANIC - DAY 
TITANIC STEAMS TOWARD US, in the dusk light, as if lit by the embers of a
giant fire. As the ship looms, FILLING FRAME, we push in on the bow. Jack
is there, right at the apex of the bow railing, his favorite spot. He
closes his eyes, letting the chill wind clear his head.
Jack hears her voice, behind him...
 ROSE
Hello, Jack.
He turns and she is standing there.
 ROSE
I changed my mind.
He smiles at her, his eyes drinking her in. Her cheeks are red with the
chill wind, and her eyes sparkle. Her hair blows wildly about her face.
 ROSE
Fabrizio said you might be up--
 JACK
Sssshh. Come here.
He puts his hands on her waist. As if he is going to kiss her.
 JACK
Close your eyes.
She does, and he turns her to face forward, the way the ship is going. He
presses her gently to the rail, standing right behind her. Then he takes
her two hands and raises them until she is standing with her arms
outstetched on each side. Rose is going along with him. When he lowers his
hands, her arms stay up... like wings.
 JACK
Okay. Open them.
Rose gasps. There is nothing in her field of vision but water. It's like
there is no ship under them at all, just the two of them soaring. The
Atlantic unrolls toward her, a hammered copper shield under a dusk sky.
There is only the wind, and the hiss of the water 50 feel below.
 ROSE 
I'm flying!
She leans forward, arching her back. He puts his hands on her waist to
steady her.
 JACK
 (singing softly)
Come Josephine in my flying machine...
Rose cleses her eyes, feeling herself floating weightless far above the
sea. She smiles dreamily, then leans back, gently pressing her back against
his chest. He pushes forward slightly against her.
Slowly he raises his hands, arms outstretched, and they meet hers...
fingertips gently touching. Then their fingers intertwine. Moving slowly,
their fingers caress through and around each other like the bodies of two
lovers.
Jack tips his face forward into her blowing hair, letting the scent of her
wash over him, until his cheek is agianst her ear.
Rose turns her head until her lips are near his. She lowers her arms,
turning further, until she finds his mouth with hers. He wraps his arms
around her from behind, and they kiss like this with her head turned and
tilted back, surrendering to him, to the emotion, to the inevitable. They
kiss, slowly and tremulously, and then with building passion.
Jack and the ship seem to merge into one force of power and optimism,
lifting her, buoying her forward on a magical journey, soaring onward into
a night without fear.
100 IN THE CROW'S NEST, high above and behind them, lookout FREDERICK FLEET
nudges his mate, REGINALD LEE, pointing down at the figures in the bow.
 FLEET
Wish I had those bleedin' binoculars.
101 JACK AND ROSE, embracing at the bow rail, DISSOLVE SLOWLY AWAY, leaving
the ruined bow of the WRECK--
 CUT TO:
102 INT. KELDYSH IMAGING SHACK
OLD ROSE blinks, seeming to come back to the present. She sees the wreck on
the screen, the sad ghost ship deep in the abyss.
 ROSE 
That was the last time Titanic ever saw daylight.
Brock Lovett changes the tape in the minicassette recorder.
 BROCK
So we're up to dusk on the night of the sinking. Six hours to go.
 BODINE
Don't you love it? There's Smith, he's standing there with the iceberg
warning in his fucking hand...
 (remembering Rose)
... excuse me... in his hand, and he's ordering more speed.
 BROCK
26 years of experience working against him. He figures anything big enough
to sink the ship they're going to see in time to turn. But the ship's too
big, with too small a rudder... it can't corner worth shit. Everything he
knows is wrong.
ROSE is ignoring this conversation. She has the art-nouveau comb with the
jade butterfly on the handle in her hands, turning it slowly. She is
watching a monitor, which shows the ruins of Suite B-52/56. PUSH IN until
the image fills frame.
 TRANSITION:
103 INT. ROSE'S SUITE
... 1912. Like in a dream the beautiful woodwork and satin upholstery
emerge from the rusted ruin. Jack is overwhelmed by the opulence of the
room. He sets his sketchbood and drawing materials on the marble table.
 ROSE
Will this light do? Don't artists need good light?
 JACK
 (bad French accent)
Zat is true, I am not used to working in such 'orreeble conditions.
 (seeing the paintings)
Hey... Monet! 
He crouches next to the paintings stacked against the wall.
 JACK
Isn't he great... the use of color? I saw him once... through a hole in
this garden fence in Giverny.
She goes into the adjoining walk-in wardrobe closet. He sees her go to the
safe and start working the combination. He's fascinated.
 ROSE
Cal insist on luggin this thing everywhere.
 JACK
Should I be expecting him anytime soon?
 ROSE
Not as long as the cigars and brandy hold out.
CLUNK! She unlocks the safe. Glancing up, she meets his eyes in the mirror
behind the safe. She opens it and removes the necklace, then holds it out
to Jack who takes it nervously.
 JACK
What is it? A sapphire?
 ROSE
A diamond. A very rare diamond, called the Heart of the Ocean.
Jack gazes at wealth beyond his comprehension.
 ROSE
I want you to draw me like your French girl. Wearing this.
 (she smiles at him)
Wearing only this.
He looks up at her, surprised, and we CUT TO:
104 ROSE'S BEDROOM. ON THE BUTTERFLY COMB as Rose draws it out of her hair.
She shakes her head and her hair falls free around her shoulders.
105 IN THE SITTING ROOM Jack is laying out his pencils like surgical tools. 
His sketchbook is open and ready. He looks up as she comes into the room,
wearing a silk kimono.
 ROSE
The last thing I need is another picture of me looking like a china doll.
As a paying customer, I expect to get what I want.
She hands him a dime and steps back, parting the kimono. The blue stone
lies on her creamy breast. Her heart is pounding as she slowly lowers the
robe.
Jakc looks so stricken, it is almost comical. The kimono drops to the floor
(this is all in cuts, lyrical).
 ROSE
Tell me when it looks right to you.
She poses on the divan, settling like a cat into the position we remember
from the drawing... almost.
 JACK
Uh... just bend your left leg a little and... and lower your head. Eyes to
me. That's it.
Jack starts to sketch. He drops his pencil and she stifles a laugh.
 ROSE
I believe you are blushing, Mr. Big Artiste. I can't imagine Monsieur Monet
blushing.
 JACK
 (sweating)
He does landscapes.
TIGHT ON JACK as his eyes come up to look at her over the top edge of his
sketchpad. We have seen this image of him before, in her memory. It is an
image she will carry the rest of her life.
Despite his nervousness, he draws with sure strokes, and what emerges is
the best thing he has ever done. Her pose is languid, her hands beautiful,
and her eyes radiate her energy.
PUSH SLOWLY IN ON ROSE'S FACE...
 TRANSITION: 
106 INT. KELDYSH / IMAGING SHACK
MATCH DISSOLVE/MORPH to Rose, 101 years old. Only her eyes are the same.
 OLD ROSE
My heart was pounding the whole time. It was the most erotic moment of my
life... up till then at least.
CUT TO REVERSE: A semicircle of listeners staring in rapt, frozen silence.
The story of Jack and Rose has finally and completely grabbed them.
 BODINE
What, uh... happened next?
 OLD ROSE
 (smiling)
You mean, did we "do it"?
 CUT TO:
107 INT. ROSE AND CAL'S SUITE - NIGHT
BACK TO 1912. Jack is signing the drawing. Rose, wearing her kimono again,
is leaning on his shoulder, watching.
 OLD ROSE (V.O.)
Sorry to disappoint you Mr. Bodine.
Rose gazes at the drawing. He has X-rayed her soul.
 ROSE
Date it, Jack. I want to always remember this night.
He does: 4/14/1912. Rose meanwhile scribbles a note on a piece of Titanic
stationary. We don't see what it says. She accepts the drawing from him,
and crosses to the safe in the wardrobe.
She puts the diamond back in the safe, placing hte drawing and the note on
top of it. Closes the door with a CLUNK!
 CUT TO:
108 INT. FIRST CLASS SMOKING ROOM - NIGHT 
Lovejoy enters from the Palm Court through the revolving door and crosses
the room toward Hockley. A fire is blazing in the marble fireplace, and the
usual fatcats are playing cards, drinking and talking. Cal sees Lovejoy and
detaches from his group, coming to him.
 LOVEJOY
None of the stewards have seen her.
 CAL
 (low but forceful)
This is ridiculous, Lovejoy. Find her.
 CUT TO:
109 EXT. ATLANTIC - NIGHT
TITANIC glides across an unnatural sea, blakc and calm as a pool of oil.
The ships lights are mirrored almost perfectly in the black water. The sky
is brilliant with stars. A meteor traces a bright line across the heavens.
110 ON THE BRIDGE, Captain Smith peers out at the blackness ahead of the
ship. QUARTERMASTER HITCHINS brings him a cup of hot tea with lemon. It
steams in the bitter cold of the open bridge. Second Officer Lightoller is
next to him, staring out at the sheet of black glass the Atlantic has
become.
 LIGHTOLLER
I don't think I've ever seen such a flat calm, in 24 years at sea.
 SMITH
Yes, like a mill pond. Not a breath of wind.
 LIGHTOLLER
It's make the bergs harder to see, with no breaking water at the base.
 SMITH
Mmmmm. Well, I'm off. Maintain speed and heading, Mr. Lightoller.
 LIGHTOLLER
Yes sir.
 SMITH 
And wake me, of course, if anything becomes in the slightest degree
doubtful.
 CUT TO:
111 INT. ROSE AND CAL'S SUITE
Rose, fully dressed now, returns to the sitting room. They hear a key in
the lock. Rose takes Jack's hand and leads him silently through the
bedrooms. Lovejoy enters by the sitting room door.
 LOVEJOY
Miss Rose? Hello?
He hears a door opening and goes through Cal's room toward hers.
 CUT TO:
112 INT. CORRIDOR OUTSIDE SUITE
Rose and Jack come out of her stateroom, closing the door. She leads him
quickly along the corridor toward the B deck foyer. They are halfway across
the open space when the sitting room door opens in the corridor and Lovejoy
comes out. The valet sees Jack with Rose and hustles after them.
 ROSE
Come on!
She and Jack break into a run, surprising the few ladies and gentlemen
about. Rose leads him past the stairs to the bank of elevators. They run
into one, shocking the hell out of the OPERATOR.
 ROSE
Take us down. Quickly, quickly!
The Operator scrambles to comply. Jack even helps him close the steel gate.
Lovejoy runs up as the lift starts to descend. He slams one hand on the
bars of the gate. Rose makes a very rude and unladylike gesture, and laughs
as Lovejoy disappears above. The Operator gapes at her.
 CUT TO:
113 INT. E-DECK FOYER / ELEVATORS
Lovejoy emerges from another lift and runs to the one Jack and Rose were
in. The Operator is just closing the gate to go back up. Lovejoy runs
around the bank of elevators and scans the foyer... no Jack and Rose. He
tries the stairs going down to F-Deck. 
 CUT TO:
114 INT. F-DECK CORRIDORS / FAN ROOM
A functional space, with access to a number of machine spaces (fan rooms,
boiler uptakes). Jack and Rose are leaning against a wall, laughing.
 JACK
Pretty tough for a valet, this fella.
 ROSE
He's an ex-Pinkerton. Cal's father hired him to keep Cal out of trouble...
to make sure he always got back to the hotel with his wallet and watch,
after some crawl through the less reputable parts of town...
 JACK
Kinda like we're doin' right now-- uh oh!
Lovejoy has spotted them from a cross-corridor nearby. He charges toward
them. Jack and Rose run around a corner into a blind alley. There is one
door, marked CREW ONLY, and Jack flings it open.
115 They enter a roaring RAN ROOM, with no way out but a ladder going down.
Jack latches the deadbolt on the door, and Lovejoy slams against it a
moment later. Jack grins at Rose, pointing to the ladder.
 JACK
After you, m'lady.
 CUT TO:
116 INT. BOILER ROOM FIVE AND SIX
Jack and Rose come down the escape ladder and look around in amazement. It
is like a vision of hell itself, with the roaring furnaces and black
figures moving in the smoky glow. They run the length of the boiler room,
dodging amazed stokers, and trimmers with their wheelbarrows of coal.
 JACK
 (shouting over the din)
Carry on! Don't mind us!
They run through the open watertight door into BOILER ROOM SIX. Jack pulls
her through the fiercely hot alley between two boilers and they wind up in 
the dark, out of sight of the working crew. Watching from the shadows, they
see the stokers working in the hellish glow, shovelling coal into the
insatiable maws of the furnaces. The whole place thunders with the roar of
the fires.
 CUT TO:
117 INT. FIRST CLASS SMOKING ROOM
Amid unparalled luxury, Cal sits at a card game, sipping brandy.
 COLONEL GRACIE
We're going like hell I tel you. I have fifty dollars that says we make it
into New York Tuesday night!
Cal looks at his gold pocket watch, and scowls, not listening.
 CUT TO:
118 OMITTED
119 INT. BOILER ROOM SIX
The furnaces roar, silhouetting the glistening stokers. Jack kisses Rose's
face, tasting the sweat trickling down from her forehead. They kiss
passionately in the steamy, pounding darkness.
 CUT TO:
120 INT. HOLD #2
Jack and Rose enter and run laughing between the rows of stacked cargo. She
hugs herself against the cold, after the dripping heat of the boiler room.
They come upon William Carter's brand new RENAULT touring car, lashing down
to a pallet. It looks like a royal coach from a fairy tale, its brass trim
and headlamps nicely set off by its deep burgundy color.
Rose climbs into the plushly upholstered back seat, acting very royal.
There are cut crystals bud vases on the walls back there, each containing a
rose. Jack jumps into the driver's seat, enjoying hte feel of the leather
and wood.
 JACK
Where to, Miss?
 ROSE
To the stars. 
ON JACK as her hands come out of the shadows and pull him over the seat
into the back. He lands next to her, and his breath seems loud in the quiet
darkness. He looks at her and she is smiling. It is the moment of truth.
 JACK
Are you nervous?
 ROSE
Au contraire, mon cher.
He strokes her face, cherishing her. She kisses his artist's fingers.
 ROSE
Put your hands on me Jack.
He kisses her, and she slides down in the seat under his welcome weight.
 CUT TO:
121 INT. WIRELESS ROOM
A BRILLIANT ARC OF ELECTRICITY fills frame-- the sparks gap of the Marconi
instrument as SENIOR WIRELESS OPERATOR JACK PHILLIPS (24) rapidly keys out
a message. Junior Operator Bride looks through the huge stack of outgoing
messages swamping them.
 BRIDE
Look at this one, he wants his private train to meet him. La dee da.
 (slaps them down)
We'll be up all bloody night on this lot.
Phillips start to receive an incoming message from a nearby ship, the
Leyland frieghter CALIFORNIAN, which jams his outgoing signal. At such
close range, the beeps are deafening.
 PHILLIPS
Christ! It's that idiot on the Californian.
Cursing, Phillips furiously keys a rebuke.
 CUT TO:
122 INT. / EXT. WIRELESS SHAK / FREIGHTER CALIFORNIAN 
Wireless Operater CYRIL EVANS pulls his earphone off his ear as the
Titanic's spark deafens him. he translates the message for THIRD OFFICER
GROVES.
 EVANS
Stupid bastard. I try to warn him about the ice, and he says "Keep out.
Shut up. I'm working Cape Race."
 GROVES
Now what's he sending?
 EVANS
"No seasickness. Poker business good. Al". Well that's it for me. I'm
shutting down.
As Evans wearily switches off his generator, Groves goes out on deck. PAN
oFF Him to reveal the ship is stopped fifty yards from the edge of a field
of pack ice and icebergs stretching as far as the eye can see.
 CUT TO:
123 EXT. OCEAN / TITANIC
ON TITANIC, steaming hellbent through the darkness, hurling up white water
at the bows. The bow comes straight at us, until the bow wave WIPES THE
FRAME--
 CUT TO:
124 INT. HOLD #2
PUSHING IN on the rear window of the Renault, which is completely fogged
up. Rose's hand comes up and slams against the glass for a moment, making a
handprint in the veil of condensation.
INSIDE THE CAR, Jack's overcoat is liek a blanket over them. It stirs and
Rose pulls it down. They are huddled under it, intertwined, still mostly
clothed. Their faces are flushed and they look at each other wonderingly.
She puts her hand on his face, as if making sure he is real.
 ROSE
You're trembling.
 JACK
It's okay. I'm alright. 
He lays his cheek against her chest.
 JACK
I can feel your heart beating.
She hugs his head to her chest, and just holds on for dear life.
 OLD ROSE (V.O.)
Well, I wasn't the first teenage girl to get seduced in the backseat of a
car, and certainly not the last, by several million. He had such fine
hands, artists' hands, but strong too... roughened by work. I remember
their touch even now.
 CUT TO:
125 EXT. ATLANTIC / TITANIC - NIGHT
The bow sweeps under us, and the CAMERA CLIMBS toward the foremast and the
tiny half-cylinder of the crow's nest, which grows as we push in on
lookouts Fleet and Lee. They are stamping their feet and swinging their
arms, trying to keep warm in the 22 knot freezing wind, which whips capor
of their breath away behind.
 FLEET
You can smell ice, you know, when it's near.
 LEE
Bollocks.
 FLEET
Well I can.
 CUT TO:
126 INT. BOILER ROOM SIX
Without hearing hte words over the roar of the furnaces, we see stokers
telling TWO STEWARDS which way Rose and Jack went. The stewards move off
toward the forward holds.
 CUT TO:
127 INT. CAL AND ROSE'S SUITE
Cal stands at the open safe. He stares at the drawing of Rose and his face 
clenches with fury. He reads the not again: "DARLING, NOW YOU CAN KEEP US
BOTH LOCKED IN YOUR SAFE, ROSE".
Lovejoy, standing behind him, looks over his shoulder at the drawing. Cal
crumples Rose's not, then takes the drawing in both hands as if to rip it
in half. He tenses to do it, then stops himself.
 CAL
I have a better idea.
 CUT TO:
128 INT. HOLD #2 - NIGHT
The two stewards enter. They have electric torches and play the beams
around the hold. They spot the Renault with its fogged up rear window and
approach it slowly.
FROM INSIDE we see the torch light up Rose's passionate handprint, still
there on the fogged up glass. One steward whips open the door.
 STEWARD
Got yer!
REVERSE: the back seat is empty.
 CUT TO:
129 EXT. FORWARD WELL DECK AND CROW'S NEST - NIGHT
Rose and Jack, fully dressed, come through a crew door onto the deck. They
can barely stand, they are laughing so hard.
UP ABOVE THEM, IN THE CROW'S NEST, lookout Fleet hears the disturbance
below and looks around and back down to the well deck, where he can see two
figures embracing.
Jack and Rose stand in each others arms. Their breath clouds around them in
the now freezing air, but they don't even feel the cold.
 ROSE
When this ship docks, I'm getting off with you.
 JACK
This is crazy.
 ROSE 
I know. It doesn't make any sense. That's why I trust it.
Jack pulls her to him and kisses her fiercely.
130 IN THE CROW'S NEST Fleet nudges Lee.
 FLEET
Cor... look at that, would ya.
 LEE
They're a bloody sight warmer than we are.
 FLEET
Well if that's what it takes for us two to get warm, I'd rather not, if
it's all the same.
They both have a good laugh at that one. It is Fleet whose expression falls
first. Glancing forward again, he does a double take. The color drains out
of his face.
FLEET'S POV: a massive iceberg right in their path, 500 yards out.
 FLEET
Bugger me!!
Fleet reaches past Lee and rings the lookout bell three times, then grabs
the telephone, calling the bridge. He waits precious seconds for it to be
picket up, never taking his eyes off the black mass ahead.
 FLEET
Pick up, ya bastard.
 CUT TO:
131 INT. / EXT. BRIDGE
Inside the enclosed wheelhous, SIXTH OFFICER MOODY walks unhurriedly to the
telephone, picking it up.
 FLEET (V.O.)
Is someone there?
 MOODY 
Yes. What do you see?
 FLEET
Iceberg right ahead!
 MOODY
Thankyou.
 (hangs up, calls to Murdoch)
Iceberg right ahead!
Murdoch sees it and rushes to the engine room telegraph. While signaling
"FULL SPEED ASTERN" he yells to Quartermaster Hitchins, who is at the
wheel.
 MURDOCH
Hard a' starboard.
 MOODY
 (standing behind Hitchins)
Hard'a starboard. The helm is hard over, sir.
CRASH SEQUENCE / SERIES OF CUTS:
132 CHIEF ENGINEER BELL is just checking the soup he has warming on a steam
manifold when the engine telegraph clangs, then goes... incredibly... to
FULL SPEED ASTERN. He and the other ENGINEERS just stare at it a second,
unbelieving. Then Bell reacts.
 BELL
Full astern! FULL ASTERN!!
The engineers and greasers like madmen to close steam valves and start
braking the mighty propeller shafts, big as Sequias, to a stop.
133 IN BOILER ROOM SIX, Leading Stoker FREDERICK BARRETT is standing with
2nd Engineer JAMES HESKETH when the red warning light and "STOP" indicator
come on.
 BARRETT
Shut all dampers! Shut 'em!!
134 FROM THE BRIDGE Murdoch watches the burg growing... straight ahead. The 
bow finally starts to come left (since the ship turns the reverse of the
helm setting).
MURDOCH'S jaw clenches as the bow turns with agonizing slowness. He holds
his breath as the horrible physics play out.
135 IN THE CROW'S NEST Frederick Fleet braces himself.
136 THE BOW OF THE SHIP thunders right at CAMERA and--
KRUUUNCH!! The ship hits the berg on its starboard bow.
137 UNDERWATER we see the ice smashing in the steel hull plates. The
iceberg bumps and scrapes along the side of the ship. Rivets pop as the
steel plate of the hull flexes under the load.
138 IN #2 HOLD the two stewards stagger as the hull buckles in four feet
with a sound like THUNDER. Like a sledgehammer beating along outside the
ship, the berg splits the hull plates and the sea pour in, sweeping them
off their feert. The icy water swirls around the Renault as the men
scramble for the stairs.
139 ON G-DECK forward Fabrizio is tossed in his bunk by the impact. He
hears a sound like the greatly amplified squeal of a skate on ice.
140 IN BOILER ROOM SIX Barret and Hesketh stagger as they hear the ROLLING
THUNDER of the collision. They see the starboard side of the ship buckle in
toward them and are almost swept off their feet by a rush of water coming
in about two feet above the floor.
141 ON THE FORWARD WELL DECK Jack and Rose break their kiss and look up in
astonishment as the berg sails past, blocking out the sky like a mountain.
Fragments break off it and crash down onto the deck, and they have to jump
back to avoid flying chunks of ice.
142 ON THE BRIDGE Murdoch rings the watertight door alarm. He quicky throws
the switch that closes them.
 MURDOCH
Hard a 'port!
Judging the berg to be amidships, he is trying to clear the stern.
143 BARRETT AND HESKETH hear the DOOR ALARM and scramble through the
swirling water to the watertight door between Boiler Rooms 6 and 5. The
room is full of water vapor as the cold sea strikes the red hot furnaces.
Barrett yells to the stokers scrambling through the door as it comes down
like a slow guillotine.
 BARRETT 
Go Lads! Go! Go!
He dives through into Boiler Room 5 just before the door rumbles down with
a CLANG.
144 JACK AND ROSE rush to the starboard rail in time to see the berg moving
aft down the side of the ship.
145 In his stateroom, surrounded by piles of plans while making notes in
his ever-present book, Andrews looks up at the sound of a cut-crystal light
fixture tinkling like a windchime.
He feels the shudder run through the ship. And we see it in his face. Too
much of his soul is in this great ship for him not to feel its mortal
wound.
146 IN THE FIRST CLASS SMOKING ROOM Gracie watches his highball vibrating
on the table.
147 IN THE PALM COURT, with its high arched windows, Molly Brown holds up
her drink to a passing waiter.
 MOLLY
Hey, can I get some ice here, please?
Silently, a moving wall of ice fills the window behind her. She doesn't see
it. It disappears astern.
148 OMITTED
149 IN THE CROW'S NEST Fleet turns to his Lee...
 FLEET
Oy, mate... that was a close shave.
 LEE
Smell ice, can you? Bleedin' Christ!
 CUT TO:
150 INT. / EXT. BRIDGE
CLOSE ON MURDOCH. The alarm bells still clatter mindlessly, seeming to
reflect his inner state. He is in shock, unable to get a grip on what just
happened. He just ran the biggest ship in history into an iceberg on its
maiden voyage. 
 MURDOCH
 (stiffly, to Moody)
Note the time. Enter it in the log.
Captain Smith rushes out of his cabin onto the bridge, tucking in his
shirt.
 SMITH
What was that, Mr. Murdoch?
 MURDOCH
An iceberg, sir. I put her hard a' starboard and run the engines full
astern, but it was too close. I tried to port around it, but she hi... and
I--
 SMITH
Close the emergency doors.
 MURDOCH
The doors are closed.
Together they rush out onto the starboard wing, and Murdoch points. Smith
looks into the darkness aft, then wheels around to FOURTH OFFICER BOHALL.
 SMITH
Find the Carpenter and get him to sound the ship.
 CUT TO:
151 INT. G-DECK FORWARD
In steerage, Fabrizio comes out into the hall to see what's going on. He
sees dozens of rats running toward him in the corridor, fleeing the
flooding bow. Fabrizio jumps aside as the rats run by.
 FABRIZIO
Ma-- che cazzo!
152 IN HIS STATEROOM Tommy gets out of his top bunk in the dark and drops
down to the floor. SPLASH!!
 TOMMMY 
Cor!! What in hell--?!
He naps on the light. The floor is covered with 3 inches of freezing water,
and more coming in. He pulls the door open, and steps out into the
corridor, which is flooded. Fabrizio is running toward him, yelling
something in Italian. Tommy and Fabrizio start pounding on doors, getting
everybody up and out. The alarm spreads in several languages.
 CUT TO:
153 INT. FIRST CLASS CORRIDOR / A-DECK
A couple of people have come out into the corridor in robes and slippers. A
STeWARD hurries along, reassuring them.
 WOMAN
Why have the engines stopped? I felt a shudder?
 STEWARD #1
I shouldn't worry, m'am. We've likely thrown a propeller blade, that's the
shudder you felt. May I bring you anything?
THOMAS ANDREWS brushes past them, walking fast and carrying an armload of
rolled up ship's plans.
 CUT TO:
154 EXT. FORWARD WELL DECK
Jack and Rose are leaning over the starboard rail, looking at the hull of
the ship.
 JACK
Looks okay. I don't see anything.
 ROSE
Could it have damaged the ship?
 JACK
It didn't seem like much of a bump. I'm sure we're okay.
Behind them a couple of steerage guys are kicking the ice around the deck,
laughing.
 CUT TO: 
155 INT. STEERAGE FORWARD
Fabrizio and Tommy are in a crowd of steerage men clogging the corridors,
heading aft away from the flooding. Many of them have grabbed suitcases and
duffel bags, some of which are soaked.
 TOMMY
If this is the direction the rats were runnin', it's good enough for me.
 CUT TO:
156 INT. CORRIDOR ON B DECK
Bruce Ismay, dressed in pajamas under the topcoat, hurries down the
corridor, headed for the bridge. An officious steward named BARNES comes
along the other direction, getting the few concerned passengers back into
their rooms.
 STEWARD BARNES
There's no cause for alarm. Please, go back to your rooms.
He is stopped in his tracks by Cal and Lovejoy.
 STEWARD BARNES
Please, sir. There's no emergency--
 CAL
Yes there is, I have been robbed. Now get the Master at Arms. Now you
moron!
 CUT TO:
157 INT. BRIDGE / CHARTROOM
C.U. CAPTAIN SMITH studying the commutator.
He turns to Andrews, standing behind him.
 SMITH
A five degree list in less than ten minutes.
SHIP'S CARPENTER JOHN HUTCHINSON enters behind him, out of breath and
clearly unnerved.
 HUTCHINSON 
She's making water fast... in the forepeak tank and the forward holds, in
boiler room six.
ISMAY enters, his movements quick with anger and frustration. Smith glances
at him with annoyance.
 ISMAY
Why have we stopped?
 SMITH
We've struck ice.
 ISMAY
Well, do you think the ship is seriously damaged?
 SMITH
 (glaring)
Excuse me.
Smith pushes past him, with Andrews and Hutchinson in tow.
 CUT TO:
158 INT. BOILER ROOM 6
Strokers and firemen are struggling to draw the fires. They are working in
waist deep water churning around as it flows into the boiler room, ice cold
and swirling with grease from the machinery. Chief Engineer Bell comes
partway down the ladder and shouts.
 BELL
That's it, lads. Get the hell up!
They scramble up the escape ladders.
 CUT TO:
159 EXT. B-DECK FORWARD / WELL DECK
The gentlemen, now joined by another man, leans on the forward rail
watching the steerage men playing soccer with chunks of ice.
 GENTLEMAN
I guess it's nothing too serious. I'm going back to my cabin to read. 
A 20ish YALE MAN pops through the door wearing a topcoat over pajamas.
 YALEY
Say, did I miss the fun?
Rose and Jack come up the steps from the well deck, which are right next to
the three men. They stare as the couple climbs over the locked gate.
A moment later Captain Smith rounds the corner, followed by Andrews and
Carpenter Hutc 


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)

