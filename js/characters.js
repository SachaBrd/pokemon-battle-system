class Pokemon {
	constructor(pokename, level, maxhealth, moves, imgfront, imgback) {
		this.pokename = pokename;
		this.level = level;
		this.health = maxhealth;
		this.maxhealth = maxhealth;
		this.moves = moves;
		this.imgfront = imgfront;
		this.imgback = imgback;
		this.alive = true;
	}

	decrementHealth(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			if (this.owner == 'player') {
				playerPokemon = this.faint(playerPokemon, playerParty);
			}
			if (this.owner == 'enemy') {
				enemyPokemon = this.faint(enemyPokemon, enemyParty);
			}
		}
		if (this.health > this.maxhealth) {
			this.health = this.maxhealth;
		}
	}
	attack(target, move) {
		if (move.target == 'self') {
			this.decrementHealth(Math.round(this.maxhealth * move.damage));
		} else {
		target.decrementHealth(move.damage);
		}
	}
	useItem(target, item) {
		if (item.target == 'self') {
			this.decrementHealth(this.maxhealth * item.damage);
		}
	}
	// Faint function will pull the next pokemon in the array into the battle
	faint(currentPokemon, party) {
		var foundPokemon = false;
		if (this.health <= 0) {
			console.log('fainted!');
			this.alive = false;
			for (var i = 0; i < party.length; i++) {
				if (party[i].alive == true) {
					foundPokemon = true;
					currentPokemon = party[i];
					console.log(currentPokemon.pokename)
					break;
				}
			}
			if (foundPokemon == false) {
				endGame();
			}
			return currentPokemon;
		}
	}
};

pokemon = [];

// Original pokemons



pokemon.push(new Pokemon('STARMIE', 50, 146, [moves['hydro pump'], moves['psychic']], './assets/img/starmie.png', './assets/img/starmieback.png'));
pokemon.push(new Pokemon('HAUNTER', 50, 120, [moves['lick'], moves['psychic']], './assets/img/haunter.png', './assets/img/haunterback.png'));

pokemon.push(new Pokemon('UMBREON', 50, 152, [moves['quick attack'], moves['thunder']], './assets/img/jolteon.png', './assets/img/jolteonback.gif'));
pokemon.push(new Pokemon('PIKACHU', 10, 117, [moves['tackle'], moves['thundershock']], './assets/img/pikachu.png', './assets/img/pikachuback.png'));
pokemon.push(new Pokemon('CHARIZARD', 50, 163, [moves['fire blast'], moves['mega punch']], './assets/img/charizard1.png', './assets/img/charizardback.png'));
pokemon.push(new Pokemon('SQUIRTLE', 14, 135, [moves['hydro pump'], moves['skull bash']], './assets/img/blastoise.png', './assets/img/blastoiseback.png'));
pokemon.push(new Pokemon('VENUSAUR', 50, 171, [moves['solar beam'], moves['body slam']], './assets/img/venusaur.png', './assets/img/venusaurback.png'));
pokemon.push(new Pokemon('MEWTWO', 100, 200, [moves['psychic'], moves['mega kick']], './assets/img/mewtwo.png', './assets/img/mewtwoback.png'));
pokemon.push(new Pokemon('GYARADOS', 90, 124, [moves['hydro pump'], moves['thunder']], './assets/img/gyarados.png', './assets/img/gyaradosback.png'));
pokemon.push(new Pokemon('DRAGONITE', 80, 185, [moves['hydro pump'], moves['thunder']], './assets/img/dragonite.png', './assets/img/dragoniteback.png'));
pokemon.push(new Pokemon('RAYQUAZA', 95, 185, [moves['solar beam'], moves['hydro pump']], './assets/img/ray.gif', './assets/img/rayback.png'));

// Removed pokemons
// pokemon.push(new Pokemon('MACHAMP', 50, 190, [moves['low sweep'], moves['dynamic punch']], './assets/img/machamp.png', './assets/img/machampback.png'));
// pokemon.push(new Pokemon('KADABRA', 50, 128, [moves['psychic'], moves['rest']], './assets/img/kadabra.png', './assets/img/kadabraback.png'));
// pokemon.push(new Pokemon('ARBOK', 50, 133, [moves['acid'], moves['belch']], './assets/img/arbok.png', './assets/img/arbokback.png'));
// pokemon.push(new Pokemon('SCYTHER', 50, 155, [moves['slash'], moves['hyper beam']], './assets/img/scyther.png', './assets/img/scytherback.png'));
// pokemon.push(new Pokemon('HITMONLEE', 50, 138, [moves['hi jump kick'], moves['mega kick']], './assets/img/hitmonlee.png', './assets/img/hitmonleeback.png'));

// custom pokemons
pokemon.push(new Pokemon('SACHA', 50, 145, [moves['fire blast'], moves['psychic']], './assets/img/sacha.png', './assets/img/sacha.png'));
pokemon.push(new Pokemon('KHAZIX', 75, 118, [moves['fire blast'], moves['slash']], './assets/img/khazix2.png', './assets/img/khazix2.png'));
pokemon.push(new Pokemon('MAIRE_DE_NANTES', 65, 168, [moves['quick attack'], moves['slash']], './assets/img/aatrox2.png', './assets/img/aatrox.png'));
// pokemon.push(new Pokemon('SANS_UNDERTALE', 65, 168, [moves['quick attack'], moves['slash']], './assets/img/sans.gif', './assets/img/sans.gif'));

let playerParty = [];
let enemyParty = [];