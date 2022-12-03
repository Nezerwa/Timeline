// mobile menu actions

const toggleMenu = document.querySelector('.toggleMenu');
const header = document.querySelector('.bottom-heading');
const logo = document.querySelector('.logo');
const headerLink = document.querySelectorAll('.bottom-heading .nav-link');
const mainNav = document.querySelector('.main-navigation');
const navBar = document.querySelector('.navbar');
const navItem = document.querySelectorAll('.main-navigation .nav-item');

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active');
  headerLink.forEach((link) => {
    link.classList.toggle('active');
  });
  mainNav.classList.toggle('active');
  navItem.forEach((item) => {
    item.classList.toggle('active');
  });
  navBar.classList.toggle('active');
  header.classList.toggle('active');
  logo.classList.toggle('active');
});

headerLink.forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu.classList.remove('active');
    navBar.classList.remove('active');
    header.classList.remove('active');
    headerLink.forEach((link) => {
      link.classList.remove('active');
    });
    mainNav.classList.remove('active');
    navItem.forEach((item) => {
      item.classList.remove('active');
    });
  });
});

// end of mobile menu

// meet our team section

const details = [
  {
    Background: './images/blank-chess-board.gif',
    TeamImage: './images/Ceo.jpg',
    Name: 'Ethan Williams',
    Position: 'Country Director',
    CV: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText: 'ceo-photo',
  },
  {
    Background: './images/blank-chess-board.gif',
    TeamImage: './images/human.jpg',
    Name: 'Ava Isabella',
    Position: 'Human Resource Manager',
    CV: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText: 'picture of human resource manager',
  },
  {
    Background: './images/blank-chess-board.gif',
    TeamImage: './images/it.jpg',
    Name: 'Scott Gael',
    Position: 'Information Technology Specialist',
    CV: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText: 'scot-photo',
    classHidden: 'seeMore',
  },
  {
    Background: './images/blank-chess-board.gif',
    TeamImage: './images/agent.jpg',
    Name: 'John Abegunde',
    Position: 'Customer Care Services Affairs',
    CV: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText: 'John-photo',
    classHidden: 'seeMore',
  },
  {
    Background: './images/blank-chess-board.gif',
    TeamImage: './images/logistic.jpg',
    Name: 'Lorene Sparks',
    Position: 'Logistics Manager',
    CV: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText: 'Lorene-photo',
    classHidden: 'seeMore',
  },
  {
    Background: './images/blank-chess-board.gif',
    TeamImage: './images/marketing.jpg',
    Name: 'Lucie Kelly',
    Position: 'Marketing Manager',
    CV: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident corrupti deserunt vel quasi. Labore porro sapiente dicta veritatis ad.',
    alternativeText: 'Lucie-photo',
    classHidden: 'seeMore',
  },
];

const ourTeamSection = document.querySelector('.Team');
const title = document.createElement('h3');
title.textContent = 'Meet Our Team';
title.classList.add('meet-our-team');
ourTeamSection.appendChild(title);

const TeamContainer = document.createElement('div');
TeamContainer.classList.add('our-team-div');
ourTeamSection.appendChild(TeamContainer);

details.forEach((person) => {
  const person1 = document.createElement('div');
  person1.classList.add('person1');
  person1.classList.add(`${person.classHidden}`);
  person1.innerHTML = `<div class='teamPortfolio'>
    <img src='${person.Background}' alt='bg' class='img' />
    <img src='${person.TeamImage}' alt='${person.alternativeText}' class='portrait' />
    </div>
    <div class="person-info">
      <h3 class="person-name">${person.Name}</h3>
      <div class="person-bio">
        <span class="position">${person.Position}</span>
        <p class="background">${person.CV}</p>
     </div>
    </div>`;
  TeamContainer.appendChild(person1);
});

const seeMorebtn = document.createElement('div');
seeMorebtn.classList.add('seemore-btn');
seeMorebtn.textContent = 'MORE';
TeamContainer.appendChild(seeMorebtn);

const person1 = document.querySelectorAll('.person1');
seeMorebtn.addEventListener('click', () => {
  person1.forEach((element) => {
    if (element.classList.contains('seeMore')) {
      element.classList.remove('seeMore');
      seeMorebtn.textContent = 'LESS';
      seeMorebtn.style.display = 'none';
    }
  });
});
