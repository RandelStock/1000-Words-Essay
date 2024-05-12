const wrapper = document.querySelector(".wrapper");
const intro = document.querySelector(".intro");
const city = document.querySelector(".city");
const school = document.querySelector(".school");
const skills = document.querySelector(".skills");
const exp = document.querySelector(".exp");
const want = document.querySelector(".want");
const end = document.querySelector(".end");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const nextBtn = document.querySelector(".next-btn");
const next1Btn = document.querySelector(".next1-btn");
const next2Btn = document.querySelector(".next2-btn");
const next3Btn = document.querySelector(".next3-btn");
const next4Btn = document.querySelector(".next4-btn");
const next5Btn = document.querySelector(".next5-btn");
const next6Btn = document.querySelector(".next6-btn");



intro.style.display = "none";
city.style.display = "none";
school.style.display = "none";
skills.style.display = "none";
exp.style.display = "none";
want.style.display = "none";
end.style.display = "none";

yesBtn.addEventListener("click", () => {
    wrapper.style.display = "none";
    intro.style.display = "block";
    window.scrollTo(0, 0);
});

nextBtn.addEventListener("click", () => {
  intro.style.display = "none";
  city.style.display = "block";
  window.scrollTo(0, 0);
});

next1Btn.addEventListener("click", () => {
  city.style.display = "none";
  school.style.display = "block";
  window.scrollTo(0, 0);
});

next2Btn.addEventListener("click", () => {
  school.style.display = "none";
  skills.style.display = "block"
  window.scrollTo(0, 0);
});

next3Btn.addEventListener("click", () => {
  skills.style.display = "none";
  exp.style.display = "block"
  window.scrollTo(0, 0);
});

next4Btn.addEventListener("click", () => {
  exp.style.display = "none";
  want.style.display = "block"
  window.scrollTo(0, 0);
});

next5Btn.addEventListener("click", () => {
  want.style.display = "none";
  end.style.display = "block"
  window.scrollTo(0, 0);
});

next6Btn.addEventListener("click", () => {
  window.location.href = "flower.html";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});