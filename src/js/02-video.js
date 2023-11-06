import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const keyLS = 'videoplayer-current-time';

player.on('play', function (currentTime) {
  console.log('played the video!');
  console.log('time', currentTime.seconds);
});

player
  .setCurrentTime(localStorage.getItem(keyLS))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(currentTime => {
    console.log(currentTime.seconds);
    localStorage.setItem(keyLS, currentTime.seconds);
  }, 1000)
);
