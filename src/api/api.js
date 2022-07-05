import axios from 'axios';

const config = {
  baseUrl: 'https://ghibliapi.herokuapp.com',
};

async function getFilms() {
  return axios.get(`${config.baseUrl}/films`);
}

async function getPeople() {
  return axios.get(`${config.baseUrl}/people`);
}

async function getLocations() {
  return axios.get(`${config.baseUrl}/locations`);
}

async function getSpecies() {
  return axios.get(`${config.baseUrl}/species`);
}

async function getVehicles() {
  return axios.get(`${config.baseUrl}/vehicles`);
}

async function getOneFilm(filmId) {
  return axios.get(`${config.baseUrl}/films/${filmId}`);
}

async function getOnePeople(peopleId) {
  return axios.get(`${config.baseUrl}/people/${peopleId}`);
}

async function getOneLocation(locationId) {
  return axios.get(`${config.baseUrl}/locations/${locationId}`);
}

async function getOneSpecies(speciesId) {
  return axios.get(`${config.baseUrl}/species/${speciesId}`);
}

async function getOneVehicle(vehicleId) {
  return axios.get(`${config.baseUrl}/vehicles/${vehicleId}`);
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
  getOneVehicle,
};
