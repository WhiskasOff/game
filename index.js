
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
let name = document.getElementById("name"),
	health = document.getElementById("health"),
	// damage = document.getElementById("damage"),
	// armor = document.getElementById("armor"),
	status = document.getElementById("status"),
	money = document.getElementById("money"),
	gps = document.getElementById("gps"),
	shop = document.getElementById("shop"),
	hospital = document.getElementById("hospital"),
	home = document.getElementById("home"),
	ocity = document.getElementById("ocity"),
	work = document.getElementById("work"),
	insity = document.getElementById("insity"),
	last = document.querySelector(".box_last"),
	img = document.querySelector(".box_img"),
	bb = document.getElementById("bb"),
	heal = document.getElementById("heal"),
	bear = document.getElementById("bear")






function refresh() {
	name.textContent = hero.name;
	health.textContent = hero.health;
	// damage.textContent = hero.damage;
	// armor.textContent = hero.armor;
	status.textContent = hero.status;
	money.textContent = hero.money;
	gps.textContent = hero.gps;

	if (hero.gps == "city") {
		document.querySelector(".inCity").style.display = "block";
		document.querySelector(".out").style.display = "none";
		// img.style.backgroundImage = "url(https://faktrus.ru/wp-content/uploads/srednevekoviy-gorod.jpg)";
	}else{
		document.querySelector(".inCity").style.display = "none";
		document.querySelector(".out").style.display = "block";
		// img.style.backgroundImage = "url(https://i.pinimg.com/originals/dd/c0/eb/ddc0ebe22c517886c098c1dac5cb6972.jpg)";
	};
	if (hero.money > 1000000 && hero.health > 200) {
		last.textContent = "Поздравляю! Вы прошли игру так-как у вас более 1млн на балансе и ваше здоровье привышает 200 единиц! Чтобы начать заново - обновите страницу!"
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
		hero.status = "healthy";
		last.textContent = hero.name + " вылечился ";
		refresh();
	};
work.onclick = function() {
	if (hero.status == "healthy")
		hero.money = hero.money + 0.5;
		last.textContent = hero.name + " хорошо поработал и теперь у него " + hero.money + " рублей!";
		refresh();
	};

bb.onclick = function() {
	if (hero.status == "sick")
		hero.health = hero.health + 0.2;
		last.textContent = hero.name + " скушал ягодку и теперь у него " + hero.health + " здоровья!";
		refresh();
	};

heal.onclick = function() {
	if (hero.status == "sick")
		hero.health = hero.health + 1;
		last.textContent = hero.name + " приложил подорожник и теперь у него " + hero.health + " здоровья!";
		refresh();
	};

bear.onclick = function() {
	if (hero.status == "sick")
		hero.health = hero.health - 90;
		last.textContent = hero.name + ", медведь укусил вас до кости и теперь у вас " + hero.health + " здоровья!";
		refresh();
	};
};
