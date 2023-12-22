// Ensure a whole number for array index
let apiUrl =
  "https://newsdata.io/api/1/news?apikey=pub_34975c7bd5a45c6abfdd9907e741d36b48ed5&q=tech";
let the_link = document.getElementById("news-headline");
let the_image = document.getElementById("news-image");
let home_nav = document.getElementById("nav-home");
let dismiss_icon = document.getElementById("dismiss");
let slideCount = 0;

//projects

let pro_link = document.getElementById("pro-link");
let pro_img = document.getElementById("pro-img");

// Books I read

let bo_sum = document.getElementById("bo-sum");
let bo_read = document.getElementById("bo-read");
let bo_img = document.getElementById("bo-img");

// beliefs

let bel_desc = document.getElementById("bel-desc");

// hobby

let ho_des = document.getElementById("ho-des");
let ho_img = document.getElementById("ho-img");

projects = [
  ["Weather Mobile App", "images/weather_mobile.jpeg"],
  ["Bahir Amal", "images/Bahir_Amal.jpeg"],
  ["Digital Water Case", "images/digitalWaterCase.jpeg"],
];

let books = [
  {
    title:
      "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
    summary:
      "The Great Gatsby is a novel by F. Scott Fitzgerald that follows the life and times of millionaire Jay Gatsby. The story explores themes of decadence, idealism, and the American Dream.",
    imagePath: "images/gatspy.jpeg",
  },
  {
    title: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786",
    summary:
      "To Kill a Mockingbird is a novel by Harper Lee that addresses racial injustice in the American South. It follows the experiences of a young girl, Scout Finch, and her father, Atticus Finch, a lawyer defending a black man wrongly accused of rape.",
    imagePath: "images/tokill.jpeg",
  },
  {
    title: "https://www.amazon.com/1984-George-Orwell/dp/1443434973",
    summary:
      "1984 is a dystopian novel by George Orwell that explores the consequences of a totalitarian regime. The story follows Winston Smith, who rebels against the oppressive government led by Big Brother.",
    imagePath: "images/1984.jpeg",
  },
];

let beliefs = [
  {
    title: "Humanism",
    description:
      "Humanism is a philosophical and ethical stance that emphasizes the value and agency of human beings, individually and collectively, and generally prefers critical thinking and evidence over acceptance of dogma or superstition.",
    imagePath: "https://example.com/humanism-image.jpg",
  },
  {
    title: "Stoicism",
    description:
      "Stoicism is a school of philosophy that teaches the development of self-control, rationality, and virtue as a means of achieving a tranquil and contented life. It originated in ancient Greece and was later adopted by Roman philosophers.",
    imagePath: "https://example.com/stoicism-image.jpg",
  },
  {
    title: "Existentialism",
    description:
      "Existentialism is a philosophical movement that focuses on individual existence, freedom, and choice. It emphasizes the individual's experience of living and the importance of personal responsibility and authenticity.",
    imagePath: "https://example.com/existentialism-image.jpg",
  },
];

projects = [
  ["Weather Mobile App", "images/weather_mobile.jpeg", "#"],
  ["Bahir Amal", "images/Bahir_Amal.jpeg", "https://bahir-amal.vercel.app/"],
  [
    "Digital Water Case",
    "images/digitalWaterCase.jpeg",
    "https://youtu.be/R_VTpHwKS9s?t=493",
  ],
];

let hobbies = [
  {
    name: "Reading",
    description:
      "Immerse yourself in the world of literature and explore new ideas through books.",
    imagePath: "images/reading.jpeg",
  },
  {
    name: "Cycling",
    description:
      "Enjoy the outdoors and stay active by cycling through scenic routes.",
    imagePath: "images/cycling.jpeg",
  },
  {
    name: "Cooking",
    description:
      "Experiment with flavors and create delicious meals in the kitchen.",
    imagePath: "images/cooking.jpeg",
  },
  // Add more hobbies as needed
];

// makeupdate();
function makeupdate() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      let selectNews = Math.floor(Math.random() * 6);
      let selectedNews = json.results[selectNews];
      the_link.textContent = selectedNews.title;
      the_link.href = selectedNews.link;
      the_image.src = selectedNews.image_url || "images/tech.jpeg";
      console.log(
        selectedNews.title,
        selectedNews.link,
        selectedNews.image_url
      );
    })
    .catch((error) => console.error("Error fetching news:", error));
}

function toggleMenu() {
  if (home_nav.style.display == "") {
    home_nav.style.display = "none";
  } else {
    home_nav.style.display = "";
  }
  if (dismiss_icon.classList.contains("fa-times")) {
    dismiss_icon.classList.remove("fa-times");
    dismiss_icon.classList.add("fa-bars");
  } else {
    dismiss_icon.classList.add("fa-times");
    dismiss_icon.classList.remove("fa-bars");
  }
}

function slideShow(a, page) {
  if (a == "lef") {
    if (slideCount > 0) {
      slideCount -= 1;
      slideCount %= 3;
    } else {
      slideCount += 1;
      slideCount %= 3;
    }
  } else if (a == "ryt") {
    slideCount += 1;
    slideCount %= 3;
  } else {
    slideCount = a;
  }
  // projects
  if (page == "projects") {
    pro_link.href = projects[slideCount][2];
    pro_link.textContent = projects[slideCount][0];
    pro_img.src = projects[slideCount][1];
  } else if (page == "books") {
    bo_sum.textContent = books[slideCount]["summary"];
    bo_img.src = books[slideCount]["imagePath"];
    bo_read.href = books[slideCount]["title"];
  } else if (page == "beliefs") {
    bel_desc.textContent = beliefs[slideCount]["description"];
  } else if (page == "hobby") {
    ho_des.textContent = hobbies[slideCount]["description"];
    ho_img.src = hobbies[slideCount]["imagePath"];
  }
}
