import axios from 'axios'

const config = {
	baseUrl: 'https://ghibliapi.herokuapp.com'
};

async function getFilms() {
	try {
		return axios.get(`${config.baseUrl}/films`)
	} catch (error) {
		console.log(error);
	}
}

async function getPeople() {
	try {
		return axios.get(`${config.baseUrl}/people`)
	} catch (error) {
		console.log(error);
	}
}

async function getLocations() {
	try {
		return axios.get(`${config.baseUrl}/locations`)
	} catch (error) {
		console.log(error);
	}
}

async function getSpecies() {
	try {
		return axios.get(`${config.baseUrl}/species`)
	} catch (error) {
		console.log(error);
	}
}

async function getVehicles() {
	try {
		return axios.get(`${config.baseUrl}/vehicles`)
	} catch (error) {
		console.log(error);
	}
}

async function getOneFilm(filmId) {
	try {
		return axios.get(`${config.baseUrl}/films/${filmId}`)
	} catch (error) {
		console.log(error);
	}
}

async function getOnePeople(peopleId) {
	try {
		return axios.get(`${config.baseUrl}/people/${peopleId}`)
	} catch (error) {
		console.log(error);
	}
}

async function getOneLocation(locationId) {
	try {
		return axios.get(`${config.baseUrl}/locations/${locationId}`)
	} catch (error) {
		console.log(error);
	}
}

async function getOneSpecies(speciesId) {
	try {
		return axios.get(`${config.baseUrl}/species/${speciesId}`)
	} catch (error) {
		console.log(error);
	}
}

async function getOneVehicle(vehicleId) {
	try {
		return axios.get(`${config.baseUrl}/vehicles/${vehicleId}`)
	} catch (error) {
		console.log(error);
	}
}

export {
	getFilms,
	getPeople,
	getLocations,
	getSpecies,
	getVehicles,
	getOneFilm,
	getOnePeople,
	getOneLocation,
	getOneSpecies,
	getOneVehicle
}