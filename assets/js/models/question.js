const questions = [
	{
		id: 1,
		titre: 'extension du fichier js',
		assertions: ['.js', '.jsx', '.python'],
		answer: '.js',
	},
	{
		id: 2,
		titre: 'cochez un framework php',
		answer: 'laravel',
		assertions: ['express', 'rails', 'laravel', 'spring '],
	},
	{
		id: 3,
		titre: 'React js est un ',
		answer: 'library',
		assertions: ['language', 'framework', 'library', 'IDE'],
	},
	{
		id: 4,
		titre: 'What is the correct HTML element for inserting a line break?',
		answer: 'br',
		assertions: ['lb', 'break', 'br', 'bk'],
	},
	{
		id: 5,
		titre: 'Choose the correct tag for the largest heading:',
		answer: 'h6',
		assertions: ['h6', 'heading', 'h1', 'head', 'p'],
	},
	{
		id: 6,
		titre: 'JavaScript uses the ___ keyword to define variables',
		answer: 'let',
		assertions: ['int', 'float', 'for', 'let', 'struct'],
	},
	{
		id: 7,
		titre: 'What is RAM?',
		answer: 'Random Access Memory',
		assertions: [
			'Recycled Ability Memory',
			'Routing Automatic Memory',
			'Routed Access Memory',
			'Random Access Memory',
		],
	},
	{
		id: 8,
		titre: 'Comment faire appelle à une fonction nommée « sum »?',
		answer: 'sum()',
		assertions: [
			'sum()',
			'call function sum()',
			'for',
			'call sum()',
			'Aucune de ces réponses n’est vraie.',
		],
	},
	{
		id: 9,
		titre: 'Quel est le bon endroit pour insérer un code JavaScript?',
		answer: 'La section body',
		assertions: [
			'La section head',
			'Les deux sections head et body sont correctes',
			'La section body',
			' Aucune de ces réponses n’est vraie.',
		],
	},
	{
		id: 10,
		titre: 'Le fichier externe de JavaScript doit contenir la balise script ?',
		answer: 'faux',
		assertions: ['vrai', 'faux'],
	},
	{
		id: 11,
		titre: 'Comment écrire une condition IF en JavaScript ?',
		answer: 'if (a == 2)',
		assertions: ['if a = 2 then', 'if a = 2', 'if a == 2 else', 'if (a == 2)'],
	},
	{
		id: 12,
		titre:
			'Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?',
		answer: 'if (a != 2)',
		assertions: ['if a <> 2', 'if (a != 2)', 'if a =! 2 then', 'if (a <> 2)'],
	},
	{
		id: 13,
		titre: 'Comment créer une fonction en JavaScript?',
		answer: 'function f()',
		assertions: [
			'function f()',
			'function = f()',
			'function:f()',
			'Aucune de ces réponses n’est vraie.',
		],
	},
	{
		id: 14,
		titre: 'Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?',
		answer: 'if (c == "XYZ") { } else { }',
		assertions: [
			'if (c == "XYZ") then { } else { }',
			'if (c = "XYZ") then { } else { }',
			'if (c == "XYZ") { } else { }',
			'if (c = "XYZ") { } else { }',
		],
	},
	{
		id: 15,
		titre: "Le createur de javascript c'est",
		answer: 'Breind Eich',
		assertions: ['Breind Eich', 'cedric karungu', 'Gate', 'Jobs'],
	},
];

//by cedric karungu