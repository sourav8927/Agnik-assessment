const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const numCirclesInput = document.getElementById('numCircles');
    const submitButton = document.getElementById('submit');
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');

    const redCirclesDiv = document.getElementById('redCircles');
    const greenCirclesDiv = document.getElementById('greenCircles');
    const blueCirclesDiv = document.getElementById('blueCircles');

    function createCircles(row, color, count) {
      row.innerHTML = ''; // Clear any existing circles
      for (let i = 0; i < count; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle', color);
        row.appendChild(circle);
      }
    }

    submitButton.addEventListener('click', () => {
      const numCircles = parseInt(numCirclesInput.value);
      if (isNaN(numCircles) || numCircles < 0 || numCircles > 10) {
        alert('Please enter a valid number of circles (0-10).');
        return;
      }

      createCircles(redCirclesDiv, 'red', numCircles);
      createCircles(greenCirclesDiv, 'green', numCircles);
      createCircles(blueCirclesDiv, 'blue', numCircles);

      startButton.classList.remove('hidden');
      resetButton.classList.remove('hidden');
    });

    startButton.addEventListener('click', () => {
      const redDelay = parseInt(redInput.value) || 0;
      const greenDelay = parseInt(greenInput.value) || 0;
      const blueDelay = parseInt(blueInput.value) || 0;

      setTimeout(() => {
        redCirclesDiv.classList.add('hidden');
        setTimeout(() => {
          greenCirclesDiv.classList.add('hidden');
          setTimeout(() => {
            blueCirclesDiv.classList.add('hidden');
          }, blueDelay * 1000);
        }, greenDelay * 1000);
      }, redDelay * 1000);
    });

    resetButton.addEventListener('click', () => {
      redCirclesDiv.classList.remove('hidden');
      greenCirclesDiv.classList.remove('hidden');
      blueCirclesDiv.classList.remove('hidden');
      redCirclesDiv.innerHTML = '';
      greenCirclesDiv.innerHTML = '';
      blueCirclesDiv.innerHTML = '';
      startButton.classList.add('hidden');
      resetButton.classList.add('hidden');
      numCirclesInput.value = '';
      redInput.value = '';
      greenInput.value = '';
      blueInput.value = '';
    });