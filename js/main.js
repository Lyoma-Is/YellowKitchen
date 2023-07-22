$('.foods').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


const gap1 = 16;

const carousel1 = document.getElementById("carousel1"),
  content1 = document.getElementById("content1"),
  next1 = document.getElementById("next1"),
  prev1 = document.getElementById("prev1");

next1.addEventListener("click", e1 => {
  carousel1.scrollBy(width1 + gap1, 0);
  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth - width1 - gap1 <= carousel1.scrollLeft + width1) {
    next1.style.display = "none";
  }
});
prev1.addEventListener("click", e1 => {
  carousel1.scrollBy(-(width1 + gap1), 0);
  if (carousel1.scrollLeft - width1 - gap1 <= 0) {
    prev1.style.display = "none";
  }
  if (!content1.scrollWidth - width1 - gap1 <= carousel1.scrollLeft + width1) {
    next1.style.display = "flex";
  }
});

let width1 = carousel1.offsetWidth;
window.addEventListener("resize", e1 => (width1 = carousel1.offsetWidth));


