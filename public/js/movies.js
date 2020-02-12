const apiCall = (url, callback) => {
	fetch(url)
		.then(response => response.json())
		.then(data => callback(data))
		.catch(error => console.log(error));
}

let endPoint = 'http://localhost:4040/movies/api';

let moviesToStorage = localStorage.getItem('favoriteMovies') ? JSON.parse(localStorage.getItem('favoriteMovies')) : [];

apiCall(endPoint, (data) => {	
	for (const movie of data.data) {		
		document.querySelector('ul').innerHTML += `
			<li ${moviesToStorage.includes(movie.title) ? 'style="color: red"' : null }> 
				${movie.title} 
				<button data-title="${movie.title}">
					${moviesToStorage.includes(movie.title) ? 'Quitar a favoritos' : 'Agregar a favoritos' }
				</button>
			</li>
		`;
	}

	let addToFavoriteButtons = document.querySelectorAll('button');

	addToFavoriteButtons.forEach(oneButton => {
		oneButton.addEventListener('click', function () {
			if (!moviesToStorage.includes(this.dataset.title)) {
				moviesToStorage.push(this.dataset.title);
				this.parentElement.style.color = 'red';
				this.parentElement.querySelector('button').innerText = 'Quitar de favoritos';
			} else {
				this.parentElement.style.color = 'black';
				this.parentElement.querySelector('button').innerText = 'Agregar de favoritos';
				moviesToStorage = moviesToStorage.filter(oneMovie => oneMovie != this.dataset.title);
			}
			localStorage.setItem('favoriteMovies', JSON.stringify(moviesToStorage));
		});
	});
});




