// 1. База мест: у каждого места одна история и один тест
const places = {
    center: {
        title: 'Центр',
        top: '30%',
        left: '40%',
        story: 'История центральной части посёлка.',
        question: 'Какой это ориентир?',
        options: ['Центр посёлка', 'Школьная', 'Ляпуха'],
        answer: 0
    },
    school: {
        title: 'Школьная',
        top: '55%',
        left: '62%',
        story: 'История улицы Школьной.',
        question: 'Как называется эта точка маршрута?',
        options: ['Ляпуха', 'Школьная', 'Центр'],
        answer: 1
    },
    lyapuha: {
        title: 'Ляпуха',
        top: '72%',
        left: '35%',
        story: 'История места Ляпуха.',
        question: 'Какая точка здесь отмечена?',
        options: ['Школьная', 'Центр', 'Ляпуха'],
        answer: 2
    }
};

// 2. Маршруты от выбранного старта (разный порядок = разная нумерация точек)
const routes = {
    center: {
        heading: 'Маршрут от центра',
        mapSrc: 'gallery/маршрут-центр.jpg', // подставь нужную картинку
        order: ['center', 'school', 'lyapuha']
    },
    school: {
        heading: 'Маршрут от Школьной',
        mapSrc: 'gallery/маршрут-школьная.jpg', // подставь нужную картинку
        order: ['school', 'lyapuha', 'center']
    },
    lyapuha: {
        heading: 'Маршрут от Ляпухи',
        mapSrc: 'gallery/маршрут-ляпуха.jpg', // подставь нужную картинку
        order: ['lyapuha', 'center', 'school']
    }
};

const startScreen = document.getElementById('start-screen');
const questScreen = document.getElementById('quest-screen');
const startButtons = document.querySelectorAll('[data-start]');
const backBtn = document.getElementById('back-btn');

const routeHeading = document.getElementById('route-heading');
const routeMapImg = document.getElementById('route-map-img');
const routePoints = document.getElementById('route-points');
const pointInfo = document.getElementById('point-info');

startButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const route = routes[btn.dataset.start];
        if (!route) return;

        routeHeading.textContent = route.heading;
        routeMapImg.src = route.mapSrc;
        routePoints.innerHTML = '';
        pointInfo.textContent = 'Нажми на точку на карте, чтобы прочитать историю и пройти тест.';

        route.order.forEach((placeId, index) => {
            const place = places[placeId];
            if (!place) return;

            const pointNumber = index + 1;
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'map-btn';
            dot.style.top = place.top;
            dot.style.left = place.left;
            dot.setAttribute('aria-label', `Точка ${pointNumber}: ${place.title}`);

            dot.addEventListener('click', () => {
                renderPoint(place, pointNumber);
            });

            routePoints.appendChild(dot);
        });

        startScreen.hidden = true;
        questScreen.hidden = false;
    });
});

function renderPoint(place, pointNumber) {
    pointInfo.innerHTML = `
        <h3>Точка №${pointNumber} — ${place.title}</h3>
        <p>${place.story}</p>
        <p><strong>Вопрос:</strong> ${place.question}</p>
        <div id="quiz-answers"></div>
        <p id="quiz-result"></p>
   `;

    const answersBox = document.getElementById('quiz-answers');
    const resultText = document.getElementById('quiz-result');

    place.options.forEach((option, idx) => {
        const optionBtn = document.createElement('button');
        optionBtn.type = 'button';
        optionBtn.textContent = option;

        optionBtn.addEventListener('click', () => {
            resultText.textContent = idx === place.answer
                ? 'Правильно!'
                : 'Попробуй ещё раз.';
        });

        answersBox.appendChild(optionBtn);
    });
}

backBtn.addEventListener('click', () => {
    questScreen.hidden = true;
    startScreen.hidden = false;
});