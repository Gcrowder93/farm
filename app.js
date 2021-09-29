const emuImg = document.getElementById('emu');
const emuAudio = document.getElementById('emu-sound');
const emuspan = document.getElementById('emuspan');
const sheepImg = document.getElementById('sheep');
const sheepAudio = document.getElementById('sheep-sound');
const sheepspan = document.getElementById('sheepspan');
const whaleImg = document.getElementById('whale');
const whaleAudio = document.getElementById('whale-sound');
const whalespan = document.getElementById('whalespan');

let emuclicks = 0;
let sheepclicks = 0;
let whaleclicks = 0;

emuImg.addEventListener('click', () => {
    emuAudio.play();
    emuclicks ++;

    emuspan.textContent = 'Fingers you would have lost..' + emuclicks;
  

});

sheepImg.addEventListener('click', () => {
    sheepAudio.play();
    sheepclicks ++;
    sheepspan.textContent = 'Number of pets..' + sheepclicks;

});

whaleImg.addEventListener('click', () => {
    whaleAudio.play();
    whaleclicks ++;

    whalespan.textContent = 'Number of whales youll never touch..' + whaleclicks;

});