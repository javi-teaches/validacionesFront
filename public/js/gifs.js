const apiCall = (url, callback) => {
	fetch(url)
		.then(response => response.json())
		.then(data => callback(data))
		.catch(error => console.log(error));
}
let endPoint = 'https://api.giphy.com/v1/gifs/trending?api_key=aCmKnmbaWBIQ1qxEZ5SDJFkcccDWrUPc&limit=5&rating=G';
const setGifs = (gifs) => {
	let gifsContainer = document.querySelector('#gifs-container');
	gifs.data.forEach(oneGif => {
		let gifTitle = oneGif.title;
		let gifUrl = oneGif.images.downsized_large.url;
		gifsContainer.innerHTML += `
			<p>${gifTitle}</p>
			<img src="${gifUrl}" width="200">
		`;
	});
}
apiCall(endPoint, setGifs);
