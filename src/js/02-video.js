import Player from '@vimeo/player';

import * as throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let time = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(time);

const onPlay = function (data) {
  const secondPlay = data.seconds;
  localStorage.setItem('videoplayer-current-time', secondPlay);
};

player.on('timeupdate', throttle(onPlay, 1000));
