let deg = 0;
const img = document.querySelector('img');

const render = () => {
  img.style = `filter: hue-rotate(${deg}deg);`
  deg += 0.5;
  if (deg > 360) {
    deg = 0;
  }
  requestAnimationFrame(render);
};

render();
