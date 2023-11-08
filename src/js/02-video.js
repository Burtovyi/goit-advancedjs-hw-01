import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const keyLS = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(keyLS) ?? 0);

player.on(
  'timeupdate',
  throttle(currentTime => {
    localStorage.setItem(keyLS, currentTime.seconds);
  }, 1000)
);
