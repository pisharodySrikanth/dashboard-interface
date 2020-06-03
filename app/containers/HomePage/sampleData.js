export const categories = [
	'people',
	'vehicles',
	'planets'
];

export const values = {
	'people': [{
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "19BBY",
		"gender": "male",
		"homeworld": "http://swapi.dev/api/planets/1/",
		"films": [
			"http://swapi.dev/api/films/1/",
			"http://swapi.dev/api/films/2/",
			"http://swapi.dev/api/films/3/",
			"http://swapi.dev/api/films/6/"
		],
		"species": [],
		"vehicles": [
			"http://swapi.dev/api/vehicles/14/",
			"http://swapi.dev/api/vehicles/30/"
		],
		"starships": [
			"http://swapi.dev/api/starships/12/",
			"http://swapi.dev/api/starships/22/"
		],
		"created": "2014-12-09T13:50:51.644000Z",
		"edited": "2014-12-20T21:17:56.891000Z",
		"url": "http://swapi.dev/api/people/1/"
	}, {
		"name": "C-3PO",
		"height": "167",
		"mass": "75",
		"hair_color": "n/a",
		"skin_color": "gold",
		"eye_color": "yellow",
		"birth_year": "112BBY",
		"gender": "n/a",
		"homeworld": "http://swapi.dev/api/planets/1/",
		"films": [
			"http://swapi.dev/api/films/1/",
			"http://swapi.dev/api/films/2/",
			"http://swapi.dev/api/films/3/",
			"http://swapi.dev/api/films/4/",
			"http://swapi.dev/api/films/5/",
			"http://swapi.dev/api/films/6/"
		],
		"species": [
			"http://swapi.dev/api/species/2/"
		],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T15:10:51.357000Z",
		"edited": "2014-12-20T21:17:50.309000Z",
		"url": "http://swapi.dev/api/people/2/"
	}],
	'vehicles': [{
		"name": "Sand Crawler",
		"model": "Digger Crawler",
		"manufacturer": "Corellia Mining Corporation",
		"cost_in_credits": "150000",
		"length": "36.8 ",
		"max_atmosphering_speed": "30",
		"crew": "46",
		"passengers": "30",
		"cargo_capacity": "50000",
		"consumables": "2 months",
		"vehicle_class": "wheeled",
		"pilots": [],
		"films": [
			"http://swapi.dev/api/films/1/",
			"http://swapi.dev/api/films/5/"
		],
		"created": "2014-12-10T15:36:25.724000Z",
		"edited": "2014-12-20T21:30:21.661000Z",
		"url": "http://swapi.dev/api/vehicles/4/"
	}, {
		"name": "T-16 skyhopper",
		"model": "T-16 skyhopper",
		"manufacturer": "Incom Corporation",
		"cost_in_credits": "14500",
		"length": "10.4 ",
		"max_atmosphering_speed": "1200",
		"crew": "1",
		"passengers": "1",
		"cargo_capacity": "50",
		"consumables": "0",
		"vehicle_class": "repulsorcraft",
		"pilots": [],
		"films": [
			"http://swapi.dev/api/films/1/"
		],
		"created": "2014-12-10T16:01:52.434000Z",
		"edited": "2014-12-20T21:30:21.665000Z",
		"url": "http://swapi.dev/api/vehicles/6/"
	}],
	'planets': [{
		"name": "Tatooine",
		"rotation_period": "23",
		"orbital_period": "304",
		"diameter": "10465",
		"climate": "arid",
		"gravity": "1 standard",
		"terrain": "desert",
		"surface_water": "1",
		"population": "200000",
		"residents": [
			"http://swapi.dev/api/people/1/",
			"http://swapi.dev/api/people/2/",
			"http://swapi.dev/api/people/4/",
			"http://swapi.dev/api/people/6/",
			"http://swapi.dev/api/people/7/",
			"http://swapi.dev/api/people/8/",
			"http://swapi.dev/api/people/9/",
			"http://swapi.dev/api/people/11/",
			"http://swapi.dev/api/people/43/",
			"http://swapi.dev/api/people/62/"
		],
		"films": [
			"http://swapi.dev/api/films/1/",
			"http://swapi.dev/api/films/3/",
			"http://swapi.dev/api/films/4/",
			"http://swapi.dev/api/films/5/",
			"http://swapi.dev/api/films/6/"
		],
		"created": "2014-12-09T13:50:49.641000Z",
		"edited": "2014-12-20T20:58:18.411000Z",
		"url": "http://swapi.dev/api/planets/1/"
	}, {
		"name": "Alderaan",
		"rotation_period": "24",
		"orbital_period": "364",
		"diameter": "12500",
		"climate": "temperate",
		"gravity": "1 standard",
		"terrain": "grasslands, mountains",
		"surface_water": "40",
		"population": "2000000000",
		"residents": [
			"http://swapi.dev/api/people/5/",
			"http://swapi.dev/api/people/68/",
			"http://swapi.dev/api/people/81/"
		],
		"films": [
			"http://swapi.dev/api/films/1/",
			"http://swapi.dev/api/films/6/"
		],
		"created": "2014-12-10T11:35:48.479000Z",
		"edited": "2014-12-20T20:58:18.420000Z",
		"url": "http://swapi.dev/api/planets/2/"
	}]
}
