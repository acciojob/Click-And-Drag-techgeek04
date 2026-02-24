const cubes = document.querySelectorAll(".cube");
  const container = document.querySelector(".container");

  let selectedCube = null;
  let offsetX = 0;
  let offsetY = 0;

  cubes.forEach(cube => {

    cube.addEventListener("mousedown", function(e) {

      selectedCube = cube;

      cube.style.position = "absolute";

      const containerRect = container.getBoundingClientRect();
      const cubeRect = cube.getBoundingClientRect();

      offsetX = e.clientX - cubeRect.left;
      offsetY = e.clientY - cubeRect.top;

      cube.style.left = cubeRect.left - containerRect.left + "px";
      cube.style.top = cubeRect.top - containerRect.top + "px";

    });

  });

  document.addEventListener("mousemove", function(e) {

    if (selectedCube) {

      const containerRect = container.getBoundingClientRect();

      let newX = e.clientX - containerRect.left - offsetX;
      let newY = e.clientY - containerRect.top - offsetY;

      const maxX = container.clientWidth - selectedCube.offsetWidth;
      const maxY = container.clientHeight - selectedCube.offsetHeight;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX > maxX) newX = maxX;
      if (newY > maxY) newY = maxY;

      selectedCube.style.left = newX + "px";
      selectedCube.style.top = newY + "px";
    }

  });

  document.addEventListener("mouseup", function() {
    selectedCube = null;
  });
