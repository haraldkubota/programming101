// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let aString = 'Hello and こんにちは';
let anotherString = '';

let aNumber = 123.456;
let anotherNumber = 987;

let anArray = [10, 11, 12];
let anotherArray = [100, 101, 102, 103];

let aSong = {
  title: 'Oh No!',
  album: 'The Family Jewels',
  releaseYear: 2010,
  artist: 'Marina',
  video: 'https://www.youtube.com/watch?v=Cr-SqRWImmI',
};
let anotherSong = {
  title: 'For the damaged Coda',
  album: 'The Family Jewels',
  releaseYear: 2010,
  artist: 'Blonde RedHead',
  video: 'https://youtu.be/4Js-XbNj6Tk?t=37',
};
let thirdSong = {
  title: 'Lone Digger',
  releaseYear: 2015,
  artist: 'Caravan Palace',
  video: 'https://www.youtube.com/watch?v=UbQgXeY_zi4',
};
let fourthSong = {
  title: "Can't touch this",
  artist: 'MC Hammer',
  video: 'https://www.youtube.com/watch?v=otCpCn0l4Wo&t=15s',
  releaseYear: 1990,
};

const outputDiv = document.getElementById('output');

// outputDiv.innerText += JSON.stringify(aSong, null, 4);
let listOfSongs = [aSong, anotherSong, thirdSong, fourthSong];
outputDiv.innerText += JSON.stringify(listOfSongs, null, 4);
