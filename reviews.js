const data = [
  {
    name: "Joe smith",
    title: "Web Developer",
    info: "eats ass",
    image: "images/profile1.png",
  },
  {
    name: "Tia smith",
    title: "IT Security",
    info: "eats dick",
    image: "images/profile2.jfif",
  },
  {
    name: "Jill smith",
    title: "Frontend Developer",
    info: "eats pussy",
    image: "images/profile3.jfif",
  },
];

let position = 0;
const image = document.getElementById("img");
const theName = document.getElementById("name");
const title = document.getElementById("title");
const info = document.getElementById("info");
const buttons = document.querySelectorAll("button");

const getData = (index) => {
  image.src = data[index].image;
  theName.textContent = data[index].name;
  title.textContent = data[index].title;
  info.textContent = data[index].info;
};

const onClick = (action) => {
  switch (action) {
    case "prev":
      position--;
      if (position < 0) {
        position = data.length - 1;
      }
      getData(position);
      break;
    case "next":
      position++;
      if (position >= data.length) {
        position = 0;
      }
      getData(position);
      break;
    default: {
      let position2 = position;
      while (position2 === position) {
        position2 = Math.floor(Math.random() * data.length);
      }
      position = position2;
      getData(position);
    }
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", (event) => onClick(event.target.id))
);

window.addEventListener("DOMContentLoaded", () => {
  image.src = data[position].image;
  theName.textContent = data[position].name;
  title.textContent = data[position].title;
  info.textContent = data[position].info;
});
