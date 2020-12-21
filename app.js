const value = document.querySelector(".value");
const num0 = document.querySelector(".num0");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num00 = document.querySelector(".num00");
const clr = document.querySelector(".clr");
const division = document.querySelector(".division");
const multiply = document.querySelector(".multiply");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const calc = document.querySelector(".calculator");

window.onload = function () {
  let previous = +0;
  //   console.log(typeof previous);
  let current = "";
  calc.addEventListener("click", (e) => {
    if (e.target.matches(".num0")) {
      current += num0.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num1")) {
      current += num1.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num2")) {
      current += num2.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num3")) {
      current += num3.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num4")) {
      current += num4.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num5")) {
      current += num5.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num6")) {
      current += num6.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num7")) {
      current += num7.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num8")) {
      current += num8.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num9")) {
      current += num9.textContent;
      value.textContent = current;
    } else if (e.target.matches(".num00")) {
      current += num00.textContent;
      value.textContent = current;
    } else if (e.target.matches(".plus")) {
      previous += +current;
      value.textContent = previous;
      current = "";
    } else if (e.target.matches(".minus")) {
      previous -= +current;
      value.textContent = previous;
      current = "";
    } else if (e.target.matches(".multiply")) {
      previous *= +current;
      value.textContent = previous;
      current = "";
    } else if (e.target.matches(".division")) {
      previous /= +current;
      value.textContent = previous;
      current = "";
    }
  });
};
