export function getQuices() {
	return fetch('https://opentdb.com/api.php?amount=10&type=multiple')
		.then((res) => res.json())
		.then((data) => data.results);
}
