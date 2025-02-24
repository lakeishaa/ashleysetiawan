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

  // Handle click events on gallery images

  // // Close the modal when clicking outside of the modal content
  // modal.onclick = function (event) {
  //   if (event.target === modal) {
  //     modal.style.display = "none";
  //     modalContent.innerHTML = ""; // Clear modal content
  //   }
  // };

  // // Close the modal using the close button
  // closeBtn.onclick = function () {
  //   modal.style.display = "none";
  //   modalContent.innerHTML = ""; // Clear modal content
  // };

  // function createFlyImage(src, duration) {
  //   const img = document.createElement("img");
  //   img.src = src;
  //   img.classList.add("fly");
  //   document.body.appendChild(img);

  //   setTimeout(() => {
  //     img.remove();
  //   }, duration); // Disappear after specified time
  // }

  // // Show first image on page load
  // createFlyImage("web-assets/Fairy.GIF", 3300);

  // let halfwayTriggered = false;
  // let endTriggered = false;

  // window.addEventListener("scroll", () => {
  //   const scrollPosition = window.scrollY;
  //   const pageHeight =
  //     document.documentElement.scrollHeight - window.innerHeight;

  //   if (!halfwayTriggered && scrollPosition > pageHeight / 2) {
  //     createFlyImage("web-assets/cat.GIF", 1400);
  //     halfwayTriggered = true;
  //   }

  //   if (!endTriggered && scrollPosition >= pageHeight) {
  //     createFlyImage("web-assets/bee.GIF", 1900);
  //     endTriggered = true;
  //   }
  // });

  
