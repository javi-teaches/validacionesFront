let countriesSelect = document.querySelector('#countries');
let provincesSelect = document.querySelector('#provinces');
let provincesContainer = document.querySelector('#contenedor-provincias');

const apiCall = (url, callback) => {
	fetch(url)
		.then(response => response.json())
		.then(data => callback(data))
		.catch(error => console.log(error));
}

const setCountries = countries => {
	countries.forEach(oneCountry => {
		countriesSelect.innerHTML += `<option value="${oneCountry.alpha3Code}"> ${oneCountry.name} </option>`;
	});
}

const setProvinces = provinces => {
	let provincias = provinces.provincias;
	for (let unaProvincia of provincias) {
		provincesSelect.innerHTML += `<option>${unaProvincia.nombre}</option>`
	}
}

apiCall('https://restcountries.eu/rest/v2/all', setCountries);

countriesSelect.addEventListener('change', function () {
	if (this.value === 'ARG') {
		provincesContainer.style.display = 'block';
		apiCall('https://apis.datos.gob.ar/georef/api/provincias', setProvinces);
	} else {
		provincesContainer.style.display = 'none';
		provincesSelect.innerHTML = '';
	}
})