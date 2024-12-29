const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

console.log(asabenehChallenges2020);
// INSERT YOUR CODE HERE

const wrapper = document.querySelector('.wrapper');

// Centering wrapper elements
wrapper.style.display = 'flex';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';
wrapper.style.flexDirection = 'column';
wrapper.style.margin = '2rem 0';

// Change Color function
function changeColor() {
  const colorArray = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let color1 = "#";
  let color2 = "#";
  for (let i = 0; i < 6; i++) {
    let random1 = Math.floor(Math.random() * colorArray.length);
    let random2 = Math.floor(Math.random() * colorArray.length);
    color1 += `${colorArray[random1]}`;
    color2 += `${colorArray[random2]}`;
  }
  return [color1, color2];
}

// Year element
const year = document.createElement('span');
year.textContent = new Date().getFullYear();
year.style.fontSize = '62px';

// Title element
const title = document.createElement('h1');
title.textContent = `${asabenehChallenges2020.challengeTitle} in `;
title.appendChild(year);

wrapper.appendChild(title);

// Subtitle element
const subtitle = document.createElement('h3');
subtitle.textContent = `${asabenehChallenges2020.challengeSubtitle}`;
subtitle.style.textDecoration = 'underline';
subtitle.style.margin = '2rem 0 1rem 0';
subtitle.style.fontWeight = 'normal';

wrapper.appendChild(subtitle);

// Date element
function date() {
  const now = new Date();
  const options = {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  return now.toLocaleString('en-US', options).replace('at', '');
}

const dateDiv = document.createElement('div');
const dateParagraph = document.createElement('p');
dateDiv.appendChild(dateParagraph);

dateDiv.style.padding = '0.7rem 2rem';
dateDiv.style.marginBottom = '1.5rem';

wrapper.appendChild(dateDiv);

setInterval(() => {
  dateParagraph.textContent = date();

  const colors = changeColor();
  const theYear = document.querySelector('span');
  theYear.style.color = colors[0];
  dateDiv.style.backgroundColor = colors[1];

}, 1000);


// PART 2

const cardWrapper = document.createElement('div');
document.body.appendChild(cardWrapper);

// Function to create a triangle icon
function createTriangle() {
  const triangle = document.createElement('div');
  triangle.style.width = '0';
  triangle.style.height = '0';
  triangle.style.borderTop = '5px solid transparent';
  triangle.style.borderLeft = '10px solid #252525';
  triangle.style.borderBottom = '5px solid transparent';
  triangle.style.cursor = 'pointer';
  triangle.style.display = 'inline-block'; 
  triangle.style.marginRight = '8px'; 

  triangle.style.transform = 'rotate(0deg)';

  //Rotate the triangle when clicked on
  triangle.addEventListener('click', () => {
    if (triangle.style.transform === 'rotate(0deg)') {
      triangle.style.transform = 'rotate(90deg)';
    } else {
      triangle.style.transform = 'rotate(0deg)';
    }
  });

  return triangle;
}

// Loop to display all challenges in our object
for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
  const card = document.createElement('div');
  const daysOfCourse = document.createElement('p');
  const nameOfCourse = document.createElement('div');
  const statusOfCourse = document.createElement('p');

  card.classList.add(`${asabenehChallenges2020.challenges[i].status}`);
  daysOfCourse.textContent = `${asabenehChallenges2020.challenges[i].name}`;

  let triangle = createTriangle();

  // Container for the triangle and course text
  const headerContainer = document.createElement('div');
  headerContainer.style.display = 'flex';
  headerContainer.style.alignItems = 'center';
  const courseText = document.createTextNode(`${asabenehChallenges2020.challenges[i].name.substring(10).trim()}`);

  headerContainer.appendChild(triangle);
  headerContainer.appendChild(courseText);

  nameOfCourse.appendChild(headerContainer);

  // Topic list
  const topics = asabenehChallenges2020.challenges[i].topics;
  const topicsElement = document.createElement('div');
  topicsElement.style.display = 'none';
  topicsElement.style.marginTop = '8px';
  topicsElement.style.marginLeft = '18px';

  topics.forEach(topic => {
    const topicSpan = document.createElement('span');
    topicSpan.textContent = topic;
    topicSpan.style.display = 'block';
    topicsElement.appendChild(topicSpan);
  });

  nameOfCourse.appendChild(topicsElement);
  statusOfCourse.textContent = `${asabenehChallenges2020.challenges[i].status}`;

  card.appendChild(daysOfCourse);
  card.appendChild(nameOfCourse);
  card.appendChild(statusOfCourse);

  card.style.cssText = `
    display: flex;
    justify-content: space-between;
    width: 45%;
    background-color: beige;
    padding: 1.5rem 1.5rem;
    margin-bottom: 8px;
    cursor: default;
  `;

  if (`${asabenehChallenges2020.challenges[i].status}` === 'Done') {
    card.style.backgroundColor = 'rgb(91, 188, 122)';
  } else if (`${asabenehChallenges2020.challenges[i].status}` === 'Ongoing') {
    card.style.backgroundColor = 'rgb(247, 220, 92)';
  } else {
    card.style.backgroundColor = 'rgb(235, 105, 91)';
  }

  triangle.addEventListener('click', () => {
    const isVisible = topicsElement.style.display === 'block';
    topicsElement.style.display = isVisible ? 'none' : 'block';
  });

  wrapper.appendChild(card);
}

// PART 3

//Name
const authorPart = document.createElement('div');
wrapper.appendChild(authorPart);

const nameHeader = document.createElement('h1');
const name = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName;
nameHeader.textContent = name;

nameHeader.style.margin = '2rem 0 0 0';

authorPart.style.cssText = `
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

authorPart.appendChild(nameHeader);


// Social Media Icons
const iconList = document.createElement('ul');

// Linkedin
let list = document.createElement('li');
let icon = document.createElement('i');
let link = document.createElement('a');
icon.className = 'fab fa-linkedin';
link.href = asabenehChallenges2020.author.socialLinks[0].url;
link.appendChild(icon)
list.appendChild(link);
iconList.appendChild(list);
link.style.cssText = `
  text-decoration: none;
  color: #252525;
`

// Twitter
list = document.createElement('li');
icon = document.createElement('i');
link = document.createElement('a');
icon.className = 'fab fa-twitter';
link.href = asabenehChallenges2020.author.socialLinks[1].url;
link.appendChild(icon)
list.appendChild(link);
iconList.appendChild(list);
link.style.cssText = `
  text-decoration: none;
  color: #252525;
`

// Github 
list = document.createElement('li');
icon = document.createElement('i');
link = document.createElement('a');
icon.className = 'fab fa-github';
link.href = asabenehChallenges2020.author.socialLinks[2].url;
link.appendChild(icon)
list.appendChild(link);
iconList.appendChild(list);
link.style.cssText = `
  text-decoration: none;
  color: #252525;
`

// Style the ul list
iconList.style.cssText = `
  display: flex;
  list-style: none;
  font-size: 2rem;
  gap: 0.5rem;
  margin: 1rem 0 3rem 0;
`
authorPart.appendChild(iconList);

// Bio part
const bio = document.createElement('p');
bio.textContent = asabenehChallenges2020.author.bio;

bio.style.textAlign = 'center';
bio.style.margin = '1rem 0 2rem 0';

authorPart.appendChild(bio);

// More info part
const moreInfo = document.createElement('div');
moreInfo.className = 'moreInfo';

// Titles
const moreInfo_span1 = document.createElement('span');
const moreInfo_span1_title = document.createElement('h3');
moreInfo_span1_title.textContent = 'Titles';
moreInfo_span1.appendChild(moreInfo_span1_title);
for (let i=0; i < asabenehChallenges2020.author.titles.length; i++){
  const moreInfo_span1_item = document.createElement('p');
  moreInfo_span1_item.style.margin = '4px 0';
  moreInfo_span1_item.textContent = asabenehChallenges2020.author.titles[i][0] + ' ' + asabenehChallenges2020.author.titles[i][1];
  moreInfo_span1.appendChild(moreInfo_span1_item);
}
moreInfo.appendChild(moreInfo_span1);

// Skills
const moreInfo_span2 = document.createElement('span');
const moreInfo_span2_title = document.createElement('h3');
moreInfo_span2_title.textContent = 'Skills';
moreInfo_span2.appendChild(moreInfo_span2_title)
const skillsEmoji = '✅';
for (let i=0; i < asabenehChallenges2020.author.skills.length; i++){
  const moreInfo_span2_item = document.createElement('p');
  moreInfo_span2_item.style.margin = '4px 0';
  moreInfo_span2_item.textContent = skillsEmoji + ' ' + asabenehChallenges2020.author.skills[i];
  moreInfo_span2.appendChild(moreInfo_span2_item);
}
moreInfo.appendChild(moreInfo_span2);

// Qualifications
const moreInfo_span3 = document.createElement('span');
const moreInfo_span3_title = document.createElement('h3');
moreInfo_span3_title.textContent = 'Qualifications';
moreInfo_span3.appendChild(moreInfo_span3_title)
const MsEmoji = '📖';
const BsEmoji = '👨‍🎓';
for (let i=0; i < asabenehChallenges2020.author.qualifications.length; i++){
  const moreInfo_span3_item = document.createElement('p');
  moreInfo_span3_item.style.margin = '4px 0';
  if(i === 0) {
    moreInfo_span3_item.textContent = MsEmoji + ' ' + asabenehChallenges2020.author.qualifications[i];
  } else {
    moreInfo_span3_item.textContent = BsEmoji + ' ' + asabenehChallenges2020.author.qualifications[i];
  }
  console.log(moreInfo_span3_item);
  moreInfo_span3.appendChild(moreInfo_span3_item);
}
moreInfo.appendChild(moreInfo_span3);

moreInfo.style.cssText = `
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`
authorPart.appendChild(moreInfo);

// Keywords part
const keywordWrapper = document.createElement('div');

for(let i = 0; i < asabenehChallenges2020.keywords.length; i++){
  const keyword_item_container = document.createElement('div');
  const keyword_item = document.createElement('p');
  keyword_item.textContent = "# "+ ' ' + asabenehChallenges2020.keywords[i];

  keyword_item.style.cssText = `
    display: inline-block;
    padding: 4px 12px 4px 4px;
    border-radius: 100px;
    margin: 4px 8px;
  `

  const colors = changeColor();
  keyword_item.style.backgroundColor = colors[0];

  keyword_item_container.appendChild(keyword_item);
  keywordWrapper.appendChild(keyword_item_container);
}

keywordWrapper.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0;
`;
authorPart.appendChild(keywordWrapper);