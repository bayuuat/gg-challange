const songs = [
  {
    title: "Me Gustas Tu",
    artists: [{ name: "Manu Chao" }],
    duration: 3590,
  },
  {
    title: "Makeba",
    artists: [{ name: "Jain" }],
    duration: 4090,
  },
  {
    title: "Here With Me",
    artists: [{ name: "d4ud" }],
    duration: 4020,
  },
];

function songPromise(songs) {
  return new Promise((resolve, reject) => {
    if (songs.length < 1) {
      reject("Song List is Empty!");
    } else {
      resolve(songs);
    }
  });
}

async function songList() {
  try {
    const result = await songPromise(songs)
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

songList();