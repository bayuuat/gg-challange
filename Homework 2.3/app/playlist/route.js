const express = require('express');
const router = express();
const { create, getAll, startPlaylist } = require('./controller');

router.get('/playlist', getAll);
router.post('/playlist', create);
router.post('/play-playlist', startPlaylist);

module.exports = router;