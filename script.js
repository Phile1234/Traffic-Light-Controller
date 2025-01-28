let currentLight = 0;
let interval;

function startTrafficLight() {
    const lights = document.querySelectorAll('.light');

    function changeLight() {
        lights.forEach(light => light.classList.remove('active'));
        lights[currentLight].classList.add('active');
        currentLight = (currentLight + 1) % lights.length;
    }

    if (interval) {
        clearInterval(interval);
    }
    changeLight();
    interval = setInterval(changeLight, 2000);
}
