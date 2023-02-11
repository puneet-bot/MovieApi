


	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

// window.onload=function(){
// 	async function fetchMovieData(url) {
//         const response = await fetch(url, options);
//         var data = await response.json();
//         console.log(data)
//     }
// 	fetchMovieData('https://imdb8.p.rapidapi.com/auto-complete?q=Harry%20Potter');
// }



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// fetch('https://imdb8.p.rapidapi.com/auto-complete?q=Harry%20Potter', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

window.onload=async function(){


var x=await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=Harry%20Potter', options);
console.log(await x.json());
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
}