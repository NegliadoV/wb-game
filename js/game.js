

let config = {

	containerColorBG: "#353336",
	contentColorBG: "#525053",

	countRows: 6,
	countCols: 7,

	offsetBorder: 10,
	borderRadius: 8,

	gemSize: 64,

	imagesCoin: ["./img/images/1.png", "./img/images/2.png", "./img/images/3.png", "./img/images/4.png"],

	gemClass: "gem",
	gemIdPrefix: "gem",
	gameStates: ["pick", "switch", "revert", "remove", "refill"],
	gameState: "",

	movingItems: 0,

	countScore: 0
}

function someFunc() {

	var wind = window.innerWidth;
	if (wind <= 420) {
		config.gemSize = 42
	}
}
someFunc();
// Выполняем заново при изменении размера окна


let player = {
	selectedRow: -1,
	selectedCol: -1,
	posX: "",
	posY: ""
}

let components = {
	container: document.createElement("div"),
	content: document.createElement("div"),
	wrapper: document.createElement("div"),
	cursor: document.createElement("div"),
	score: document.createElement("div"),
	record: document.createElement("h3"),
	titleText: document.createElement("h2"),
	gems: new Array(),
}

let htmlComponents = {
	container: document.querySelector('.game__container'),
	div: document.querySelector('.game__core-div'),
	btn: document.querySelector('.roulette__btn'),
	timer: document.querySelector('.game__timer'),
	divRecord: document.querySelector('.game__record'),
	body: document.querySelector('body'),
}



const startGame = () => htmlComponents.btn.addEventListener('click', () => { initGame() })
const startTimer = () => htmlComponents.btn.addEventListener('click', () => { timerStrat() })


startTimer()
// start Game
startGame()

// Инициализация всех составляющих игры
function initGame() {
	htmlComponents.btn.style.display = 'none'
	htmlComponents.timer.style.display = 'flex'

	createScore();
	createContentPage();
	createWrapper();
	createCursor();
	createGrid();


	// Переключаем статус игры на "выбор"
	config.gameState = config.gameStates[0];
}

// Создание обертки с контентом
function createContentPage() {
	components.content.classList = ("game__inner")
	htmlComponents.container.append(components.content);
}

// Создание обертки для монет и очков
function createWrapper() {
	components.wrapper.classList = ("game__wrapper")
	components.wrapper.addEventListener("click", function (event) { handlerTab(event, event.target) });

	components.content.append(components.wrapper);
}

// Создание курсора для выделения монет
function createCursor() {

	components.cursor.classList = ("game__marker")
	components.cursor.id = "marker";

	components.wrapper.append(components.cursor);
}
// Показать курсор
function cursorShow() {
	components.cursor.style.display = "block";
}
// Скрыть курсор
function cursorHide() {
	components.cursor.style.display = "none";
}

// Создание блока для очков
function createScore() {
	components.score.classList = ("game__score")



	updateScore();
}

// Обновить очки на странице

var getLocalStorage = localStorage.getItem('number')
document.cookie = 'number=' + encodeURIComponent(getLocalStorage);

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


function updateScore() {
	if (getLocalStorage >= 0 && getLocalStorage !== null) {

		let valueN = config.countScore = parseInt(localStorage.getItem('number'))
		vin.vMoney.innerHTML = valueN + '$'

		components.score.innerHTML = config.countScore + '$'

	} else if (getLocalStorage <= 0 || getLocalStorage === null) {
		components.score.innerHTML = config.countScore + '$'
		vin.vMoney.innerHTML = config.countScore + '$'
	}


	htmlComponents.div.appendChild(components.score);

}


// Добавление очков
let = scoreInc = (count) => {
	if (count >= 4) {
		count *= 2;
	} else if (count >= 5) {
		count = (count + 1) * 2;
	} else if (count >= 6) {
		count *= (count + 2) * 2;
	}


	let finalCount = config.countScore += count * 5;


	localStorage.setItem('number', finalCount)


	updateScore();

}




// Создание монеты
function createGem(t, l, row, col, img) {
	let coin = document.createElement("div");
	coin.classList.add(config.gemClass);
	coin.id = config.gemIdPrefix + '_' + row + '_' + col;
	coin.style.top = t + "px";
	coin.style.left = l + "px";
	coin.style.width = config.gemSize + "px";
	coin.style.height = config.gemSize + "px";
	coin.style.backgroundImage = "url(" + img + ")";


	components.wrapper.append(coin);
}





// Создание и наполнение сетки для монет
function createGrid() {
	// Создание пустой сетки
	for (i = 0; i < config.countRows; i++) {
		components.gems[i] = new Array();
		for (j = 0; j < config.countCols; j++) {
			components.gems[i][j] = -1;
		}
	}

	// Заполняем сетку
	for (i = 0; i < config.countRows; i++) {
		for (j = 0; j < config.countCols; j++) {

			do {
				components.gems[i][j] = Math.floor(Math.random() * 4);
			} while (isStreak(i, j));

			createGem(i * config.gemSize, j * config.gemSize, i, j, config.imagesCoin[components.gems[i][j]]);
		}
	}
}

// Проверка на группу сбора
function isStreak(row, col) {
	return isVerticalStreak(row, col) || isHorizontalStreak(row, col);
}
// Проверка на группу сбора по колонкам
function isVerticalStreak(row, col) {
	let gemValue = components.gems[row][col];
	let streak = 0;
	let tmp = row;

	while (tmp > 0 && components.gems[tmp - 1][col] == gemValue) {
		streak++;
		tmp--;
	}

	tmp = row;

	while (tmp < config.countRows - 1 && components.gems[tmp + 1][col] == gemValue) {
		streak++;
		tmp++;
	}

	return streak > 1;
}
// Проверка на группу сбора по строкам
function isHorizontalStreak(row, col) {
	let gemValue = components.gems[row][col];
	let streak = 0;
	let tmp = col;

	while (tmp > 0 && components.gems[row][tmp - 1] == gemValue) {
		streak++;
		tmp--;
	}

	tmp = col;

	while (tmp < config.countCols - 1 && components.gems[row][tmp + 1] == gemValue) {
		streak++;
		tmp++;
	}

	return streak > 1;
}

// Обработчик клика
function handlerTab(event, target) {
	// Если это элемент с классом config.gameClass
	// и
	// Если подходящее состояние игры
	if (target.classList.contains(config.gemClass) && config.gameStates[0]) {
		// определить строку и столбец
		let row = parseInt(target.getAttribute("id").split("_")[1]);
		let col = parseInt(target.getAttribute("id").split("_")[2]);

		// Выделяем гем курсором
		cursorShow();
		components.cursor.style.top = parseInt(target.style.top) + "px";
		components.cursor.style.left = parseInt(target.style.left) + "px";

		// Если это первый выбор, то сохраняем выбор
		if (player.selectedRow == -1) {
			player.selectedRow = row;
			player.selectedCol = col;
		} else {
			// Если гем находится радом с первым выбором
			// то меняем их местами
			if ((Math.abs(player.selectedRow - row) == 1 && player.selectedCol == col) ||
				(Math.abs(player.selectedCol - col) == 1 && player.selectedRow == row)) {
				cursorHide();

				// После выбора меняем состояние игры
				config.gameState = config.gameStates[1];

				// сохранить позицию второго выбранного гема
				player.posX = col;
				player.posY = row;

				// поменять их местами
				gemSwitch();
			} else {
				// Если второй выбор произошел не рядом,
				// то делаем его первым выбором.
				player.selectedRow = row;
				player.selectedCol = col;
			}
		}
	}
}

// Меняем гемы местами
function gemSwitch() {
	let yOffset = player.selectedRow - player.posY;
	let xOffset = player.selectedCol - player.posX;

	// Метка для гемов, которые нужно двигать
	document.querySelector("#" + config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol).classList.add("switch");
	document.querySelector("#" + config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol).setAttribute("dir", "-1");

	document.querySelector("#" + config.gemIdPrefix + "_" + player.posY + "_" + player.posX).classList.add("switch");
	document.querySelector("#" + config.gemIdPrefix + "_" + player.posY + "_" + player.posX).setAttribute("dir", "1");

	// меняем местами гемы
	$(".switch").each(function () {
		config.movingItems++;

		$(this).animate({
			left: "+=" + xOffset * config.gemSize * $(this).attr("dir"),
			top: "+=" + yOffset * config.gemSize * $(this).attr("dir")
		},
			{
				duration: 250,
				complete: function () {
					//Проверяем доступность данного хода
					checkMoving();
				}
			}
		);

		$(this).removeClass("switch");
	});


	// поменять идентификаторы гемов
	document.querySelector("#" + config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol).setAttribute("id", "temp");
	document.querySelector("#" + config.gemIdPrefix + "_" + player.posY + "_" + player.posX).setAttribute("id", config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol);
	document.querySelector("#temp").setAttribute("id", config.gemIdPrefix + "_" + player.posY + "_" + player.posX);

	// поменять гемы в сетке
	let temp = components.gems[player.selectedRow][player.selectedCol];
	components.gems[player.selectedRow][player.selectedCol] = components.gems[player.posY][player.posX];
	components.gems[player.posY][player.posX] = temp;
}

// Проверка перемещенных гемов
function checkMoving() {
	config.movingItems--;

	// Действуем тольпо после всех перемещений
	if (config.movingItems == 0) {

		// Действия в зависимости от состояния игры
		switch (config.gameState) {

			// После передвижения гемов проверяем на появление групп сбора
			case config.gameStates[1]:
			case config.gameStates[2]:
				// проверяем, появились ли группы сбора
				if (!isStreak(player.selectedRow, player.selectedCol) && !isStreak(player.posY, player.posX)) {
					// Если групп сбора нет, нужно отменить совершенное движение
					// а если действие уже отменяется, то вернуться к исходному состоянию ожидания выбора
					if (config.gameState != config.gameStates[2]) {
						config.gameState = config.gameStates[2];
						gemSwitch();
					} else {
						config.gameState = config.gameStates[0];
						player.selectedRow = -1;
						player.selectedCol = -1;
					}
				} else {
					// Если группы сбора есть, нужно их удалить
					config.gameState = config.gameStates[3]

					// Отметим все удаляемые гемы
					if (isStreak(player.selectedRow, player.selectedCol)) {
						removeGems(player.selectedRow, player.selectedCol);
					}

					if (isStreak(player.posY, player.posX)) {
						removeGems(player.posY, player.posX);
					}

					// Убираем с поля
					gemFade();
				}
				break;
			// После удаления нужно заполнить пустоту
			case config.gameStates[3]:
				checkFalling();
				break;
			case config.gameStates[4]:
				placeNewGems();
				break;
		}

	}

}

// Отмечаем элементы для удаления и убираем их из сетки
function removeGems(row, col) {
	let gemValue = components.gems[row][col];
	let tmp = row;

	document.querySelector("#" + config.gemIdPrefix + "_" + row + "_" + col).classList.add("remove");
	let countRemoveGem = document.querySelectorAll(".remove").length;

	if (isVerticalStreak(row, col)) {
		while (tmp > 0 && components.gems[tmp - 1][col] == gemValue) {
			document.querySelector("#" + config.gemIdPrefix + "_" + (tmp - 1) + "_" + col).classList.add("remove");
			components.gems[tmp - 1][col] = -1;
			tmp--;
			countRemoveGem++;
		}

		tmp = row;

		while (tmp < config.countRows - 1 && components.gems[tmp + 1][col] == gemValue) {
			document.querySelector("#" + config.gemIdPrefix + "_" + (tmp + 1) + "_" + col).classList.add("remove");
			components.gems[tmp + 1][col] = -1;
			tmp++;
			countRemoveGem++;
		}
	}

	if (isHorizontalStreak(row, col)) {
		tmp = col;

		while (tmp > 0 && components.gems[row][tmp - 1] == gemValue) {
			document.querySelector("#" + config.gemIdPrefix + "_" + row + "_" + (tmp - 1)).classList.add("remove");
			components.gems[row][tmp - 1] = -1;
			tmp--;
			countRemoveGem++;
		}

		tmp = col;

		while (tmp < config.countCols - 1 && components.gems[row][tmp + 1] == gemValue) {
			document.querySelector("#" + config.gemIdPrefix + "_" + row + "_" + (tmp + 1)).classList.add("remove");
			components.gems[row][tmp + 1] = -1;
			tmp++;
			countRemoveGem++;
		}
	}

	components.gems[row][col] = -1;

	scoreInc(countRemoveGem);
}

// Удаляем гемы
function gemFade() {
	$(".remove").each(function () {
		config.movingItems++;

		$(this).animate({
			opacity: 0
		},
			{
				duration: 200,
				complete: function () {
					$(this).remove();
					checkMoving();
				}
			}
		);
	});
}

// Заполняем пустоту
function checkFalling() {
	let fellDown = 0;

	for (j = 0; j < config.countCols; j++) {
		for (i = config.countRows - 1; i > 0; i--) {

			if (components.gems[i][j] == -1 && components.gems[i - 1][j] >= 0) {
				document.querySelector("#" + config.gemIdPrefix + "_" + (i - 1) + "_" + j).classList.add("fall");
				document.querySelector("#" + config.gemIdPrefix + "_" + (i - 1) + "_" + j).setAttribute("id", config.gemIdPrefix + "_" + i + "_" + j);
				components.gems[i][j] = components.gems[i - 1][j];
				components.gems[i - 1][j] = -1;
				fellDown++;
			}

		}
	}

	$(".fall").each(function () {
		config.movingItems++;

		$(this).animate({
			top: "+=" + config.gemSize
		},
			{
				duration: 100,
				complete: function () {
					$(this).removeClass("fall");
					checkMoving();
				}
			}
		);
	});

	// Если все элементы передвинули,
	// то сменить состояние игры
	if (fellDown == 0) {
		config.gameState = config.gameStates[4];
		config.movingItems = 1;
		checkMoving();
	}
}


// Создание новых гемов
function placeNewGems() {
	let gemsPlaced = 0;

	// Поиск мест, в которых необходимо создать гем
	for (i = 0; i < config.countCols; i++) {
		if (components.gems[0][i] == -1) {
			components.gems[0][i] = Math.floor(Math.random() * 4);

			createGem(0, i * config.gemSize, 0, i, config.imagesCoin[components.gems[0][i]]);
			gemsPlaced++;
		}
	}

	// Если мы создали гемы, то проверяем необходимость их сдвинуть вниз.
	if (gemsPlaced) {
		config.gameState = config.gameStates[3];
		checkFalling();
	} else {
		// Проверка на группы сбора
		let combo = 0

		for (i = 0; i < config.countRows; i++) {
			for (j = 0; j < config.countCols; j++) {

				if (j <= config.countCols - 3 && components.gems[i][j] == components.gems[i][j + 1] && components.gems[i][j] == components.gems[i][j + 2]) {
					combo++;
					removeGems(i, j);
				}
				if (i <= config.countRows - 3 && components.gems[i][j] == components.gems[i + 1][j] && components.gems[i][j] == components.gems[i + 2][j]) {
					combo++;
					removeGems(i, j);
				}

			}
		}

		// удаляем найденные группы сбора
		if (combo > 0) {
			config.gameState = config.gameStates[3];
			gemFade();
		} else {
			// Запускаем основное состояние игры
			config.gameState = config.gameStates[0];
			player.selectedRow = -1;
		}
	}
}

//Confetty

var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function () {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function () {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function () {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}

	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();




const start = () => {
	setTimeout(function () {
		confetti.start()
	}, 0);
};



const stop = () => {
	setTimeout(function () {
		confetti.stop()
	}, 5000);
};
stop()




// Timer

let mainGame = document.querySelector('.game__main')

let vin = {
	vBtnLeft: document.querySelector('.vin-left'),
	vBtnRight: document.querySelector('.vin-right'),
	backgroundVin: document.querySelector('.bacground__vin'),
	vMoney: document.querySelector('.vin__money')
}


function soundClick() {
	let audio = new Audio();
	audio.src = 'js/audio2.mp3';
	audio.autoplay = true;

}


const timerStrat = () => {
	const getTimeRemaining = (endtime) => {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		return {
			'total': t,
			'minutes': minutes,
			'seconds': seconds
		};

	}


	const initializeClock = (id, endtime) => {
		var clock = document.getElementById(id);
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');



		function updateClock() {
			var t = getTimeRemaining(endtime);

			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);


			if (t.total <= 0) {
				clearInterval(timeinterval);
			}


			let animateVin = () => {
				vin.backgroundVin.style.opacity = "1"
				vin.backgroundVin.style.display = "flex"


			}

			if (t.seconds <= 0 && t.minutes <= 0) {

				start()
				stop()
				animateVin()
				soundClick()
			}
		}

		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = new Date(Date.parse(new Date()) + 120 * 1000); // for endless //timer
	initializeClock('countdown', deadline);
}

const redirect = () => vin.vBtnRight.addEventListener('click', () => {
	window.location.href = ' https://www.google.com/'
})


redirect()