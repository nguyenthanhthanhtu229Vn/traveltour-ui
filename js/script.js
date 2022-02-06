let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

let currentDot = 0;
let control_btn = document.querySelectorAll(
  ".about .video-container .controls .control-btn"
);
control_btn.forEach((btn, index) => {
  if (btn.classList.contains("active")) {
    currentDot = index;
  }
  btn.onclick = () => {
    let src = btn.getAttribute("data-src");
    control_btn[currentDot].classList.remove("active");
    currentDot = index;
    btn.classList.add("active");
    document.querySelector(".about .video-container .video").src = src;
  };
});
