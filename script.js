const navList = document.querySelector(".nav-list");
const navigation = document.querySelector(".navigation");
const bars = document.querySelector(".burger-btn__bars");
const cross = document.querySelector(".burger-btn__cross");

const toggleNavBtn = () => {
  bars.classList.toggle("hide");
  cross.classList.toggle("hide");
};

navigation.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    navList.classList.toggle("show");
    toggleNavBtn();
  }
});

const test = "new function";
console.log(test);
