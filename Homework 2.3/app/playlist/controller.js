const { createPlaylist, generatePlaylistId, getAllPlaylist, getPlaylist, play } = require('./service');

const getAll = (req, res) => {
  try {
		const { sortBy, sort } = req.body;
		
		result =  getAllPlaylist(sortBy, sort);
		res.status(201).json({ message: 'Get Playlist', data: result });
	} catch (e) {
		//For example we'll always use code 500 (Internal Server Error)
		res.status(500).json({ error: e.message });
	}
}

const create = (req, res) => {
	try {
		const { title, artists, url } = req.body;
		if (!title || !artists || !url) {
			throw new Error('Insufficient Parameter');
		}
		result = createPlaylist(title, artists, url);
		res.status(201).json({ message: 'Playlist created successfully', data: result});
	} catch (e) {
		//For example we'll always use code 500 (Internal Server Error)
		res.status(500).json({ error: e.message });
	}
}

const startPlaylist = (req, res) => {
	try {
		const { id } = req.body;
		if (!id) {
			throw new Error('Insufficient Parameter');
		}
		play(id);
		res.status(201).json({ message: 'Playlist played!' });
	} catch (e) {
		//For example we'll always use code 500 (Internal Server Error)
		res.status(500).json({ error: e.message });
	}
}

module.exports = {
  getAll,
	create,
  startPlaylist
};