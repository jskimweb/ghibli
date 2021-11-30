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

export {
	getFilms,
	getPeople,
	getOneFilm,
	getOnePeople
}