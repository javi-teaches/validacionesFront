const apiCall = (url, callback) => {
	fetch(url)
		.then(response => response.json())
		.then(data => callback(data))
		.catch(error => console.log(error));
}

let endPoint = 'http://localhost:4040/movies/api';

let moviesToStorage = [];

apiCall(endPoint, (data) => {
	console.log(localStorage.getItem('favoriteMovies'));
	
	let favoriteMoviesArray = JSON.parse(localStorage.getItem('favoriteMovies'));
	
	for (const movie of data.data) {		
		document.querySelector('ul').innerHTML += `
			<li ${favoriteMoviesArray.includes(movie.title) ? 'style="color: red"' : null }> 
				${movie.title} 
				<button data-title="${movie.title}">
					Agregar a favoritos
				</button>
			</li>
		`;
	}

	let addToFavoriteButtons = document.querySelectorAll('button');

	addToFavoriteButtons.forEach(oneButton => {
		oneButton.addEventListener('click', function () {
			if (!moviesToStorage.includes(this.dataset.title)) {
				moviesToStorage.push(this.dataset.title);
				console.log(moviesToStorage);
			}
			
			localStorage.setItem('favoriteMovies', JSON.stringify(moviesToStorage));
		});
	});
});




