
answer = prompt("Как зовут вашего героя?", "");
let hero = {
	name: answer,
	health: 100,
	armor: 10,
	damage: 20,
	status: "sick",
	money: 200,
	gps: "city",
};
/*let answer = confirm("Вам попался на собеседоовонии гоблин! Заскамить ли его?");
if(answer){
	hero.health = hero.health - 80;
	alert("Вы подрались с гоблином! Ваше здоровье: " + hero.health);
}else{
	alert("Вы избежали драки.");
}
*/
let name = document.getElementById("name"),
	health = document.getElementById("health"),
	damage = document.getElementById("damage"),
	armor = document.getElementById("armor"),
	status = document.getElementById("status"),
	money = document.getElementById("money"),
	gps = document.getElementById("gps"),
	shop = document.getElementById("shop"),
	hospital = document.getElementById("hospital"),
	home = document.getElementById("home"),
	ocity = document.getElementById("ocity"),
	insity = document.getElementById("insity"),
	last = document.querySelector(".box_last")
	img = document.querySelector(".box_img")





function refresh() {
	name.textContent = hero.name;
	health.textContent = hero.health;
	damage.textContent = hero.damage;
	armor.textContent = hero.armor;
	status.textContent = hero.status;
	money.textContent = hero.money;
	gps.textContent = hero.gps;

	if (hero.gps == "city") {
		document.querySelector(".inCity").style.display = "block";
		document.querySelector(".out").style.display = "none";
		img.style.backgroundImage = "url(https://faktrus.ru/wp-content/uploads/srednevekoviy-gorod.jpg)";
	}else{
		document.querySelector(".inCity").style.display = "none";
		document.querySelector(".out").style.display = "block";
		img.style.backgroundImage = "url(https://i.pinimg.com/originals/dd/c0/eb/ddc0ebe22c517886c098c1dac5cb6972.jpg)";
	};

	if (hero.money == 0) {
	hero.status = "DEAD";
	last.textContent = hero.name + " был казнён из-за того, что у него закончились деньги. Слава Арстотцке!";
	window.location.href = "https://whiskasoff.github.io/game/astrotzka_kill.html"
	refresh();
};
};

refresh();

ocity.onclick = function() {
	hero.gps = "outside";
	last.textContent = hero.name + " потерялся в лесу и теперь он " + hero.gps + "! Но он ещё и заболел и теперь он " + hero.status;
	hero.status = "sick"
	refresh();
}
insity.onclick = function() {
	hero.gps = "city";
	last.textContent = hero.name + " нашелся! И теперь он " + hero.gps;
	refresh();
}
hospital.onclick = function() {
	if (hero.money > 49 && hero.status == "sick"){
		hero.money = hero.money - 50;
		
		last.textContent = hero.name + " вылечился ";
		refresh();
	};
};
