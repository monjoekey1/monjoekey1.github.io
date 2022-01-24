let textBox = document.querySelector('#textBox');
let mainSec = document.querySelector('section');
let imageBox = document.querySelector('#imgSec');
let btns = document.getElementsByTagName('input');
let btnsH = document.getElementsByTagName('input > hover');
let home = textBox.textContent;

let f1 = 
	"The Greeks are often regarded as the 'scientists' behind the Roman Empire, but in reality, the Romans excelled in engineering and other pratical infrastructure projects such as the aquaducts and bridges that are still standing today, and primitive hydraulic mining, as well as highly advanced concretes and ships that size would only be beaten by British galleons over 100 years later.";
	
let f2 = 
	"The Vikings made an early version of steel by using their ancestors bones in the iron smelting process. They thought that the weapons were imbued with the souls of their ancestors and therefore were stronger. Norse axes in particular also had a hook in their design that allowed them to pull Norman shields down to get a better shot.";

let f3 = 
	"The way the Romans trained and utilised their troops allowed them to have large armies. They employed tactics involving various sizes of units and formations which were simple to teach. An example of this is the 'Testudo' formation, testudo means tortoise in Latin and the strategy was the legionaires raising sheilds above them to block archer fire.";

let f4 = 
	"The Roman emperor Constantine was the one who converted the Roman Empire to Christianity. When he first rose to power, the people of Rome were concered that the new Emporer had fallen under the influence of a cult, as the Roman Empire hadn't adopted any monotheistic religions up until that point. Constantine also was the one who moved the capital to Istanbul, and renamed it Constantinople.";

let f5 = 
	"The presence of dragons in folklore is largely due to the presence of dinosaurs in different regions. The usual type of dragon in folk tales from the British Isles had four legs and wings. The wings were most likely an embellishment inpspired by birds and the legs were from fossils found by early humans in that region.";


function fact1(){
	textBox.innerHTML = f1;
	imageBox.style.backgroundImage = "url('images/RomanBridge1.jpg')";
	imageBox.style.backgroundSize = "750px"
}
function fact2(){
	textBox.innerHTML = f2;
	imageBox.style.backgroundImage = "url('images/Axe.jpg')";
	imageBox.style.backgroundSize = "750px"
}
function fact3(){
	textBox.innerHTML = f3;
	imageBox.style.backgroundImage = "url('images/Sword1.png')";
	imageBox.style.backgroundSize = "750px 300px"
}
function fact4(){
	textBox.innerHTML = f4;
	imageBox.style.backgroundImage = "url('images/Cross.jpg')";
	imageBox.style.backgroundSize = "755px"
}
function fact5(){
	textBox.innerHTML = f5;
	imageBox.style.backgroundImage = "url('images/Dragon.jpg')";
	imageBox.style.backgroundSize = "755px"
}
function homePage(){
	textBox.innerHTML = home;
	imageBox.style.backgroundImage = "";
	imageBox.style.backgroundSize = "755px"
}
function lightMode(){
	mainSec.style.color = "#5F5449";
	mainSec.style.backgroundColor = "#40BCD8";
	mainSec.style.borderColor = "#39a9db";
	for(let i = 0; i < btns.length; i++){
		btns[i].style.color = "#1c77c3";
		btns[i].style.backgroundColor = "#40BCD8";
		btns[i].style.borderColor = "#39a9db";
	}
	document.querySelector('body').style.backgroundColor = "#EEEBD3";
}

function darkMode(){
	mainSec.style.color = "#D8D4D5";
	mainSec.style.backgroundColor = "#4C5B5C";
	mainSec.style.borderColor = "#FF8C00";
	for(let i = 0; i < btns.length; i++){
		btns[i].style.color = "#D8D4D5";
		btns[i].style.backgroundColor = "#4C5B5C";
		btns[i].style.borderColor = "#FF8C00";
	}
	document.querySelector('body').style.backgroundColor = "#2E0219";
}

function RMode(){
	mainSec.style.color = "#D4AF37";
	mainSec.style.backgroundColor = "#4C5B5C";
	mainSec.style.borderColor = "#D4AF37";
	for(let i = 0; i < btns.length; i++){
		btns[i].style.color = "#D4AF37";
		btns[i].style.backgroundColor = "#4C5B5C";
		btns[i].style.borderColor = "#D4AF37";
	}
	document.querySelector('body').style.backgroundColor = "#990000";
}

