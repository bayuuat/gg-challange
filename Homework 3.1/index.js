use playlist

db.createCollection('songs')
db.createCollection('artists')
db.createCollection('popularSongs')

songsData = [
  { title: 'Bohemian Rhapsody', artists: ['Queen'], album: 'A Night at the Opera' },
  { title: 'Imagine', artists: ['John Lennon'], album: 'Imagine' },
  { title: 'Billie Jean', artists: ['Michael Jackson'], album: 'Thriller' },
  { title: 'Rolling in the Deep', artists: ['Adele'], album: '21' },
  { title: 'Hotel California', artists: ['Eagles'], album: 'Hotel California' },
  { title: 'Like a Rolling Stone', artists: ['Bob Dylan'], album: 'Highway 61 Revisited' },
  { title: 'Stairway to Heaven', artists: ['Led Zeppelin'], album: 'Led Zeppelin IV' },
  { title: 'Hey Jude', artists: ['The Beatles'], album: 'The Beatles (White Album)' },
  { title: 'Thriller', artists: ['Michael Jackson'], album: 'Thriller' },
  { title: 'Purple Haze', artists: ['Jimi Hendrix'], album: 'Are You Experienced' }
];

artistsData = [
  { name: 'Queen', dateOfBirth: '1946-09-05', genres: ['Rock', 'Pop'] },
  { name: 'John Lennon', dateOfBirth: '1940-10-09', genres: ['Rock'] },
  { name: 'Michael Jackson', dateOfBirth: '1958-08-29', genres: ['Pop', 'R&B'] },
  { name: 'Adele', dateOfBirth: '1988-05-05', genres: ['Pop', 'Soul'] },
  { name: 'Eagles', dateOfBirth: '1971-02-18', genres: ['Rock'] },
  { name: 'Bob Dylan', dateOfBirth: '1941-05-24', genres: ['Rock', 'Folk'] },
  { name: 'Led Zeppelin', dateOfBirth: '1968-07-12', genres: ['Rock'] },
  { name: 'The Beatles', dateOfBirth: '1960-08-01', genres: ['Rock', 'Pop'] },
  { name: 'Jimi Hendrix', dateOfBirth: '1942-11-27', genres: ['Rock', 'Blues'] }
];

popularSongsData = [
  { title: 'Bohemian Rhapsody', plays: 1000, period: '2023-01-01 to 2023-02-01' },
  { title: 'Imagine', plays: 850, period: '2023-01-01 to 2023-02-01' },
  { title: 'Billie Jean', plays: 720, period: '2023-01-01 to 2023-02-01' },
  { title: 'Rolling in the Deep', plays: 980, period: '2023-01-01 to 2023-02-01' },
  { title: 'Hotel California', plays: 890, period: '2023-01-01 to 2023-02-01' },
  { title: 'Like a Rolling Stone', plays: 760, period: '2023-01-01 to 2023-02-01' },
  { title: 'Stairway to Heaven', plays: 920, period: '2023-01-01 to 2023-02-01' },
  { title: 'Hey Jude', plays: 1100, period: '2023-01-01 to 2023-02-01' },
  { title: 'Thriller', plays: 800, period: '2023-01-01 to 2023-02-01' },
  { title: 'Purple Haze', plays: 670, period: '2023-01-01 to 2023-02-01' }
];

db.songs.insertMany(songsData);
db.artists.insertMany(artistsData);
db.popularSongs.insertMany(popularSongsData);

db.songs.find().pretty();
db.artists.find().pretty();
db.popularSongs.find().pretty();
