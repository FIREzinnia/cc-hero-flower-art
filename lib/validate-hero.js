var heroes = [
    'captain', 'knight', 'samurai',
    'ninja', 'trapper', 'forest-archer',
    'librarian', 'sorcerer'
];

module.exports = function validateHero (hero) {
    return heroes.indexOf(hero) > -1;
};

module.exports.heroes = heroes;
module.exports.heros = heroes;
