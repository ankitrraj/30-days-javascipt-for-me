import { createTimer } from 'https://cdn.jsdelivr.net/npm/animejs@4.0.0/lib/anime.esm.js';

const values = document.querySelectorAll('.value');
const $time = values[0];
const $count = values[1];

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: self => $time.textContent = Math.floor(self.currentTime),
  onLoop: self => $count.textContent = self._currentIteration
});
