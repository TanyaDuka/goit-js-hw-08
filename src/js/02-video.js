import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
console.log(localStorage)
},1000));
