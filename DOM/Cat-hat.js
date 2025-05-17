<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cat and Hat Orbit Animation</title>
</head>
<style>body { min-height: 200px }</style>
<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

    // Your extensions here.
    
    // Ellipse parameters
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radiusX = 200; // Horizontal radius
    const radiusY = 100; // Vertical radius

    let angle = 0; // Initial angle in radians
    const speed = 0.02; // Rotation speed

    function animate() {
      // Calculate cat position
      const catX = centerX + radiusX * Math.cos(angle);
      const catY = centerY + radiusY * Math.sin(angle);
      cat.style.left = `${catX - cat.width / 2}px`;
      cat.style.top = `${catY - cat.height / 2}px`;

      // Calculate hat position (opposite side)
      const hatAngle = angle + Math.PI; // 180 degrees offset
      const hatX = centerX + radiusX * Math.cos(hatAngle);
      const hatY = centerY + radiusY * Math.sin(hatAngle);
      hat.style.left = `${hatX - hat.width / 2}px`;
      hat.style.top = `${hatY - hat.height / 2}px`;

      // Increment angle
      angle += speed;

      requestAnimationFrame(animate);
    }

    // Start animation
    animate();
  </script>
</body>
</html>
