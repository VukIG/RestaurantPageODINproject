import homeModule from './home';
import aboutModule from './about';
import contactModule from './contact';

const content=document.querySelector('#content');
let nav=document.createElement('nav');
let ul=document.createElement('ul');

const home=document.createElement('a');
const about=document.createElement('a');
const contact=document.createElement('a');
home.innerHTML='Home';
about.innerHTML='About';
contact.innerHTML='Contact';
home.classList.add('home');
about.classList.add('about');
contact.classList.add('contact');

/*
<nav>
            <img src="https://freepngimg.com/thumb/nike/28258-8-nike-logo-transparent-background.png" alt="">
            <ul>
                <li><a id="home" href="">Home</a></li>
                <li><a id="about" href="">About</a></li>
                <li><a id="contact" href="">Contact</a></li>
            </ul>
        </nav>
        
*/


let li1 = document.createElement('li');
li1.appendChild(home);
ul.appendChild(li1);
let li2 = document.createElement('li');
li2.appendChild(about);
ul.appendChild(li2);
let li3 = document.createElement('li');
li3.appendChild(contact);
ul.appendChild(li3);
let logo=document.createElement('img');
logo.src='https://freepngimg.com/thumb/nike/28258-8-nike-logo-transparent-background.png';

nav.appendChild(logo);
nav.appendChild(ul);
content.appendChild(nav);

content.appendChild(homeModule());

home.addEventListener('click',(e)=>{
    content.innerHTML='';
    console.log('jes')
    e.preventDefault();
    content.appendChild(homeModule());
});

about.addEventListener('click',(e)=>{
    content.innerHTML='';
    console.log('jes')
    e.preventDefault();
    content.appendChild(aboutModule());
});

contact.addEventListener('click',(e)=>{
    content.innerHTML='';
    console.log('jes')
    e.preventDefault();
    content.appendChild(contactModule());
});