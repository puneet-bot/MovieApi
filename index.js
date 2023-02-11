const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=Harry%20Potter', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));