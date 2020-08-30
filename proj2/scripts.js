const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBGcolor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorElement = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

magicColorElement(red, getBGcolor(red));
magicColorElement(cyan, getBGcolor(cyan));
magicColorElement(orange, getBGcolor(orange));
magicColorElement(violet, getBGcolor(violet));
magicColorElement(pink, getBGcolor(pink));
