// ripple.js
export function addRipple(event) {
    const element = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const existingRipple = element.getElementsByClassName("ripple")[0];
    if (existingRipple) {
      existingRipple.remove(); // Remove previous ripple if exists
    }
  
    element.appendChild(circle);
  }
  