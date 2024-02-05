let menu = document.getElementsByClassName("menu")[0];
let ulx = document.getElementsByClassName("ul")[0];
let closee = document.getElementsByClassName("close")[0];

// Here for Event Nav Bar to click on Menu

window.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-bars") {
    ulx.classList.toggle("showLinks");
    menu.classList.add("hide");
    closee.classList.add("show");
  } else if (e.target.className == "fa-solid fa-xmark") {
    closee.classList.remove("show");
    menu.classList.add("show");
    menu.classList.remove("hide");
    ulx.classList.toggle("showLinks");
  }
});

// Here for api array of Object to append in html

let products = [
  {
    id: 1,
    title: "3 SIMPLE WAYS TO SAVE A BUNCH OF MONEY",
    description:
      "Computer users and programmers have become so accustomed to using Windows, even for the changing",
    icons: `<i class="fa-solid fa-laptop-file"></i>`,
  },
  {
    id: 2,
    title: "BABY MONITOR <br> LEARNING TECHNOLOGY",
    description:
      "While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitemen",
    icons: `<i class="fa-solid fa-graduation-cap"></i>`,
  },
  {
    id: 3,
    title: "HOW DOES AN LCD SCREEN WORK",
    description:
      "It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual",
    icons: `<i class="fa-solid fa-blender-phone"></i>`,
  },
  {
    id: 4,
    title: "THE SKINNY ON LCD MONITORS",
    description:
      "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their",
    icons: `<i class="fa-solid fa-laptop"></i>`,
  },
  {
    id: 5,
    title: "FOR WOMEN ONLY YOUR COMPUTER USAGE",
    description:
      "About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about. 11% of all",
    icons: `<i class="fa-regular fa-heart"></i>`,
  },
  {
    id: 6,
    title: "5 REASONS TO PURCHASE DESKTOP COMPUTERS",
    description:
      "So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want to print",
    icons: `<i class="fa-solid fa-computer"></i>`,
  },
];
const append = () => {
  let appendd = ``;
  for (let i = 0; i < products.length; i++) {
    appendd += `
    <div  class="card">
    <div class="icon">
      <button>${products[i].icons}</button>
    </div>
    <div class="text">
      <h3>${products[i].title}</h3>
      <p>${products[i].description}</p>
    </div>
  </div>
    `;
  }
  document.getElementById("products").innerHTML = appendd;
};
append();

const numbProducts = [
  {
    id: 1,
    title: "ARE YOUR TEMPLATES RESPONSIVE?",
    description:
      "“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.",
    numb: "5962",
    info: "Projects Completed",
  },
  {
    id: 2,
    title: "DOES IT HAVE ALL THE PLUGIN AS MENTIONED?",
    description:
      "“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.",
    numb: "2394",
    info: "New Projects",
  },
  {
    id: 3,
    title: "CAN I USE THE THESE THEME FOR MY CLIENT?",
    description:
      "“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.",
    numb: "1439",
    info: "Projects Completed",
  },
];
const numbPd = () => {
  let numb = ``;
  for (let i = 0; i < numbProducts.length; i++) {
    numb += `
    <div class="card">
    <div class="numb">
      <p><span class="green">${numbProducts[i].numb}</span></p>
      <h4>${numbProducts[i].info}</h4>
    </div>
    <div class="text">
      <h1>${numbProducts[i].title}</h1>
      <h4>${numbProducts[i].description}</h4>
    </div>
  </div>
    `;
  }
  document.getElementById("num-products").innerHTML = numb;
};
numbPd();

let infoProducts = [
  {
    id: "1",
    title: "TOP PRODUCT",
    desc1: "Managed Website",
    desc2: "Manage Reputation",
    desc3: "Power Tools",
    desc4: "Marketing Service",
  },
  {
    id: "2",
    title: "NAVIGATION",
    desc1: "Home",
    desc2: "Main Features",
    desc3: "Offered Services",
    desc4: "Latest Portfolio",
  },
  {
    id: "3",
    title: "COMPARE",
    desc1: "Works & Builders",
    desc2: "Works & Wordpress",
    desc3: "Works & Templates",
    desc4: "Main Features",
  },
  {
    id: "4",
    title: "QUICK ABOUT",
    desc1:
      "Lorem ipsum dolor sit amet, consecteturadipisicin gelit, sed do eiusmod tempor incididunt",
    desc2: "+01117189056 howare7amo99@gmail.com",
    desc3: "Works & Templates",
    desc4: "Latest Portfolio",
  },
];
const information = () => {
  let infoprod = ``;
  for (let i = 0; i < infoProducts.length; i++) {
    if (infoProducts[i].face !== null) {
      infoprod += `
    <div class="card">
    <div class="text">
      <h3>${infoProducts[i].title}</h3>
    </div>
    <a href="#">${infoProducts[i].desc1}</a>
    <a href="#">${infoProducts[i].desc2}</a>
    <a href="#">${infoProducts[i].desc3}</a>
    <a href="#">${infoProducts[i].desc4}</a>
  </div>
    `;
    }
  }
  document.getElementById("Information").innerHTML = infoprod;
};
information();

// End for api array of Object to append in html

// Here for on click to scroll top
let topp = document.getElementById("top");
let parent = document.getElementById("ap-top");
topp.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-arrow-up") {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, 0);
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1177) {
    parent.classList.add("show");
  } else {
    parent.classList.remove("show");
  }
});
// End for on click to scroll top
