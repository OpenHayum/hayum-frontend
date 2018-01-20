const names = [
  "Angouba",
  "Chebang",
  "Nungshi",
  "Maithong",
  "Nangi",
  "Tattana",
  "Lapna",
  "Tamna",
  "Leikhrabi",
  "Thamoi",
  "Nungsibi",
  "Radio",
  "Leela",
  "Lila",
  "Sumang",
  "Shumang",
  "Eigi",
  "Saktam",
  "Wakhal",
  "Yekli",
  "Khalli",
  "Maalangba"
];

const artists = [
  "Ranbir Thouna",
  "Mangka",
  "Pushparani Huidrom",
  "Roshibina",
  "Tapta",
  "Kunjabihari",
  "Swamikumar",
  "Dinesh",
  "Sadananda"
];

const item = {
  name: "Angouba Chebang Khuding",
  artist: "Ranbir Thouna",
  link:
    "http://alpha-v2.hayum.in/item/dl/ariba-esei/Thamoi%20Thamoi%20-%20Hayum.mp3/59a1cd5c5f4258bf056ad256/3a3a8630ba4c5446ccb8c47f63",
  album: "Achikpa Ahing",
  uploadedBy: "Tom Thangjam"
};

const getRandomIndexInRange = (end, start = 0) =>
  Math.floor(Math.random() * (end - start + 1) + start);

const namesLength = names.length;
const items = [];
const artistsLength = artists.length;

const NUM_ITEMS = 40;

const constructSentence = (words, maxNumOfWords) => {
  let sentence = "";
  for (let i = 0; i < maxNumOfWords; i++) {
    sentence += " " + words[getRandomIndexInRange(words.length - 1)];
  }
  return sentence;
};

const generateItems = () => {
  for (let i = 0; i < NUM_ITEMS; i++) {
    const name = constructSentence(names, 5);
    const artist = artists[getRandomIndexInRange(artistsLength - 1)];
    const album = constructSentence(names, 3);
    const uploadedBy = constructSentence(artists, 2);

    items.push({
      ...item,
      name,
      artist,
      album,
      uploadedBy
    });
  }
};

generateItems();

export default items;
