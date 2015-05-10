var heros = [
    'captain', 'knight', 'samurai',
    'ninja', 'trapper', 'forest-archer',
    'librarian', 'sorcerer'
];

module.exports = function validateHero (hero) {
    return heros.indexOf(hero) > -1;
};

module.exports.heros = heros;
