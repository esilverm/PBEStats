const playerPersistence = require('../modules/playerPersistence');

const teamIds = {
	'new york voyagers': 1,
	'florida space rangers': 24,
	'outer banks aviators': 2,
	'cancun toros': 26,
	'providence crabs': 3,
	'death valley scorpions': 10,
	'vancouver vandals': 11,
	'san antonio sloths': 9,
	'utah railroaders': 25,
	'nashville stars': 27,
	'anchorage wheelers': 16,
	'amarillo armadillos': 19,
	'state college swift steeds': 18,
	'kingston mounties': 17,
	'dallas dynamos': 29,
	'kansas city hepcats': 28,
};

const teamAliases = {
	'nyv' :'new york voyagers',
	'fl' :'florida space rangers',
	'obx' :'outer banks aviators',
	'can:' :'cancun toros',
	'pro' :'providence crabs',
	'dvs' :'death valley scorpions',
	'van' :'vancouver vandals',
	'sas' :'san antonio sloths',
	'uta' :'utah railroaders',
	'nas' :'nashville stars',
	'anc' :'anchorage wheelers',
	'arm' :'amarillo armadillos',
	'scss' :'state college swift steeds',
	'kin' :'kingston mounties',
	'dal' :'dallas dynamos',
	'kch' :'kansas city hepcats',
	'new york' :'new york voyagers',
	'florida' :'florida space rangers',
	'outer banks' :'outer banks aviators',
	'cancun:' :'cancun toros',
	'providence' :'providence crabs',
	'death valley' :'death valley scorpions',
	'vancouver' :'vancouver vandals',
	'san antonio' :'san antonio sloths',
	'utah' :'utah railroaders',
	'nashville' :'nashville stars',
	'ananchoragec' :'anchorage wheelers',
	'amarillo' :'amarillo armadillos',
	'state college' :'state college swift steeds',
	'kingston' :'kingston mounties',
	'dallas' :'dallas dynamos',
	'kansas city' :'kansas city hepcats',
	'voyagers' :'new york voyagers',
	'rangers' :'florida space rangers',
	'aviators' :'outer banks aviators',
	'toros:' :'cancun toros',
	'crabs' :'providence crabs',
	'scorpions' :'death valley scorpions',
	'vandals' :'vancouver vandals',
	'sloths' :'san antonio sloths',
	'railroaders' :'utah railroaders',
	'stars' :'nashville stars',
	'wheelers' :'anchorage wheelers',
	'armadillos' :'amarillo armadillos',
	'swift steeds' :'state college swift steeds',
	'mounties' :'kingston mounties',
	'dynamos' :'dallas dynamos',
	'hepcats' :'kansas city hepcats',
	'swifties' :'state college swift steeds',
};

module.exports = {
	name: 'bind',
	description: 'Binds team to the user, so they don\'t have to specify when using !t !team, !l !lineup, !r !rotation\nE.g. Type "!bind Death Valley Scorpions" and try !t after',
	cooldown: 5,
	execute(message, args) {
		let name = args.join(' ');
		if(name.trim().toLowerCase() in teamAliases) {
			name = teamAliases[name.trim().toLowerCase()];
		}
		const id = teamIds[name.toLowerCase().trim()];
		if(id) {
			playerPersistence.userTeams.upsert({
				username: message.author.id,
				teamname: name,
			});
			return message.channel.send(`Team ${name} is bound to you, use !t !team, !l !lineup, !r !rotation without paramater now!`);
		}
		else {
			return message.channel.send(`Team ${name} not found, type e.g. \`!bind Death Valley Scorpions\` to bind team to yourself`);
		}
	},
};