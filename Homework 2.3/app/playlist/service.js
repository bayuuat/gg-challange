const playlist = require('./model');

function getAllPlaylist(sortBy, sort) {
	if (sortBy) {
		const sortedArray = playlist.slice();
		sortedArray.sort((a, b) => {
			const valueA = a[sortBy];
			const valueB = b[sortBy];

			if (typeof valueA === 'string' && typeof valueB === 'string') {
				return valueA.localeCompare(valueB);
			}

			if(sort === 'ASC'){
				return valueA - valueB;
			} else {
				return valueB - valueA;
			}

		});

		return sortedArray;
	} else {
		return playlist;
	}
}

function getPlaylist(playlistId) {
	return playlist.find((c) => c.id === playlistId);
}

function createPlaylist(title, artists, url) {
	let newPlaylist = {
		id: generatePlaylistId(),
		title: title,
		artists: artists,
		url: url,
		played: 0,
	};
	return newPlaylist;
}

function generatePlaylistId() {
	return Math.random().toString(10).substring(2, 6);
}

function play(playlistId) {
	const selectedPlaylist = getPlaylist(playlistId);

	if (selectedPlaylist) {
		selectedPlaylist.played += 1;
	} else {
		throw new Error('Playlist not found');
	}
}

module.exports = {
	createPlaylist,
	generatePlaylistId,
	getAllPlaylist,
	getPlaylist,
	play,
};
