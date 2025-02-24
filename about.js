document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const rotationDirections = [];
  const speeds = [];
  let time = 0; // Controls animation timing

  // Assign random rotation directions and speeds for each star
  stars.forEach(() => {
    rotationDirections.push(Math.random() > 0.5 ? 1 : -1);
    speeds.push(Math.random() * 0.02 + 0.00009); // Random movement speed
  });

  const animateStars = () => {
    time += 0.05; // Adjust for animation speed

    stars.forEach((star, index) => {
      const rotationSpeed = 20; // Adjust rotation speed
      const movementRadius = 5; // Adjust movement range
      const scaleSpeed = 0.005; // Adjust scale oscillation speed

      // Continuous rotation
      const rotationAngle =
        (time * rotationSpeed * rotationDirections[index]) % 360;

      // Scale oscillation (0.7 to 1.3 for a subtle effect)
      const scale = 1 + Math.sin(time * scaleSpeed + index) * 0.3;

      // Circular motion effect
      const offsetX = Math.cos(time * speeds[index] + index) * movementRadius;
      const offsetY = Math.sin(time * speeds[index] + index) * movementRadius;

      // Apply transform with rotation, scale, and movement
      star.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotationAngle}deg) scale(${scale})`;
    });

    requestAnimationFrame(animateStars); // Loop the animation
  };

  animateStars(); // Start animation loop

  // Function to play GIF once and remove it
  function playOnceAndRemove(src, duration) {
    const img = document.createElement("img");
    img.src = src + "?t=" + new Date().getTime(); // Cache-buster to restart GIF
    img.classList.add("fly"); // Keep class for styling if needed
    document.body.appendChild(img);

    setTimeout(() => {
      img.remove(); // Remove the GIF after it finishes playing
    }, duration);
  }

  // Play the GIF once on page load
  playOnceAndRemove("web-assets/Fairy3.GIF", 1100); // Adjust time to match the GIF duration
});
