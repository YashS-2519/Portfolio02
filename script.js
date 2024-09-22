document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.scroll-page');
    const boxCount = boxes.length;
    const step = 8;    
    let topValues = Array(boxCount).fill(100); // Initial top values for each box

    function moveBox(event) {
        let direction = 0;

        if (event.type === 'wheel') {
            direction = event.deltaY > 0 ? -1 : 1;
        } else if (event.type === 'keydown') {
            if (event.key === 'ArrowDown') {
                direction = -1;
            } else if (event.key === 'ArrowUp') {
                direction = 1;
            }
        }

        if (direction !== 0) {
            if (direction === -1) {
                // Move boxes upwards one by one
                for (let i = 0; i < boxCount; i++) {
                    if (topValues[i] > 0) {
                        topValues[i] += step * direction;
                        if (topValues[i] < 0) topValues[i] = 0;
                        boxes[i].style.top = topValues[i] + '%';
                        if (topValues[i] === 0) break;
                        return;
                    }
                }
            } else if (direction === 1) {
                // Move boxes downwards one by one in reverse order
                for (let i = boxCount - 1; i >= 0; i--) {
                    if (topValues[i] < 100) {
                        topValues[i] += step * direction;
                        if (topValues[i] > 100) topValues[i] = 100;
                        boxes[i].style.top = topValues[i] + '%';
                        if (topValues[i] === 100) break;
                        return;
                    }
                }
            }
        }
    }

    // Add event listeners for mouse scroll and keydown events
    window.addEventListener('wheel', moveBox);
    window.addEventListener('keydown', moveBox);
});


document.addEventListener('DOMContentLoaded', () => {
    const pointer = document.querySelector('.pointer');
    document.querySelector('#main').addEventListener('mousemove', (e) => {
        pointer.style.left = `${e.clientX}px`;
        pointer.style.top = `${e.clientY}px`;
        // console.log(e);
    });

    document.querySelector('.menu').addEventListener('mouseover', () => {
        pointer.style.scale = '2';
        pointer.style.opacity = '0';
        pointer.style.display = 'none';
        const main = document.querySelector('main');
        document.querySelector('.menu-links').style.scale = '1';
    });

    document.querySelector('.menu-links').addEventListener('mouseout', () => {
        document.querySelector('.menu-links').style.scale = '0';
    })
    
    document.querySelector('.menu').addEventListener('mouseout', () => {
        pointer.style.scale = '1';
        pointer.style.opacity = '1';
        pointer.style.display = 'block';
    });

  const images = document.querySelectorAll(".images img");

    images.forEach((img) => {
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      const randomSize = Math.random() * 0.5 + 0.5;
      const scaledWidth = imgWidth * randomSize;
      const scaledHeight = imgHeight * randomSize;

      const maxPositionX = window.innerWidth - scaledWidth;
      const maxPositionY = window.innerHeight - scaledHeight;

      const randomPositionX = Math.random() * maxPositionX;
      const randomPositionY = Math.random() * maxPositionY;

      img.style.left = `${randomPositionX}px`;
      img.style.top = `${randomPositionY}px`;
      img.style.transform = `scale(${randomSize})`;
    });

})
