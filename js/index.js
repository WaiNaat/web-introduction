const MOVIE_LIST = [
  'bohemian',
  'highschool',
  'interstella',
  'moana',
  'endgame',
];

const getName = () => document.getElementById('name').value;

const isMovieChecked = (movieName) => document.getElementById(movieName).checked;

const countSameMovies = () => (
  MOVIE_LIST.reduce((count, movieName) => count + (isMovieChecked(movieName) ? 1 : 0), 0)
);

const getGuestInfo = () => {
  const guestName = getName().trim();
  const sameCount = countSameMovies();
  return { guestName, sameCount };
}

const alertSameMovieCount = (guestName, sameCount) => {
  window.alert(`${guestName}님, 저와 ${sameCount}개의 취향이 같으시네요!`);
}

const updateGuestBook = (guestName, sameCount) => {
  document.getElementById('guestbook').innerHTML += `<p>${guestName}님, 저와 ${sameCount}개의 취향이 같으시다니 잘 됐네요!</p>`
}

document
  .getElementById('submit')
  .addEventListener('click', () => {
    const { guestName, sameCount } = getGuestInfo();
    updateGuestBook(guestName, sameCount);
    alertSameMovieCount(guestName, sameCount);
  });
