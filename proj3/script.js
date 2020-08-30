var courses = [
  {
    name: "Javascript course",
    price: "2.5",
  },
  {
    name: "Nodejs Course",
    price: "3.5",
  },
  {
    name: "ReactJs Course",
    price: "3.1",
  },

  {
    name: "Angular Course",
    price: "2.7",
  },
  {
    name: "Mongodb Course",
    price: "3.2",
  },
];

const getElementList = () => {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    var li = document.createElement("li");
    li.classList.add("list-group-item");

    const textNode = document.createTextNode(course.name);
    li.appendChild(textNode);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);

    ul.appendChild(li);
  });
};

// getElementList();

window.addEventListener("load", getElementList);

const sort = () => {
  courses.sort((a, b) => a.price - b.price);
  getElementList();
};

window.addEventListener("click", sort);
