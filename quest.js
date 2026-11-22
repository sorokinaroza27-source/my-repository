// 1. База мест: у каждого места одна история и один тест
const places = {
    center: {
        title: 'Церковь',
        top: '88%',
        left: '46%',
        story: 'Свято-Никольский храм в поселке Виля начали строить в 1808 году по решению владельца завода Ивана Родионовича Баташева. Он считал, что большому рабочему поселку нужна своя церковь. Уже в 1811 году храм с тремя алтарями, главный из которых посвящен Николаю Чудотворцу, открылся для верующих. Больше ста лет жизнь прихожан из Вили и соседних деревень сопровождал звон знаменитого колокола. Но в октябре 1937 года церковь закрыли и разграбили, а потом большой колокол сбросили и разбили, чтобы отправить металл на переплавку. Долгие годы пустое здание без окон и чугунного забора постепенно разрушалось. Только в июне 1991 года местные жители начали восстанавливать храм, и он снова стал главным духовным центром поселка.',
        question: 'С какого по какой год церковь была в разграбленном состоянии?',
        options: ['С 1937г по 1991г', 'Она не была разграблена', 'С 1911г по 1937г'],
        answer: 0
    },
    library: {
        title: 'Библиотека',
        top: '62%',
        left: '46%',
        story: 'История Вильской поселковой библиотеки началась в 1952 году, когда в старинном рабочем посёлке под Выксой открылась скромная библиотека, быстро ставшая главным окном в большой мир для местных металлургов и их семей. За семь с лишним десятилетий она дошла до современного культурного пространства на улице Выксунской с фондом более одиннадцати тысяч книг и интерактивными технологиями.',
        question: 'Когда началась история библиотеки?',
        options: ['1932г', '1952г', '1975г'],
        answer: 1
    },
    house: {
        title: '',
        top: '15%',
        left: '45%',
        story: 'История места Ляпуха.',
        question: 'Какая точка здесь отмечена?',
        options: ['Школьная', 'Центр', 'Ляпуха'],
        answer: 2
    },
    memorial: {
        title: 'Поселковый мемориал',
        top: '88%',
        left: '39%',
        story: 'Вильский поселковый мемориал расположен в центре посёлка и посвящён памяти земляков, погибших в годы Великой Отечественной войны 1941–1945 годов. Монумент был возведён в советское время на народные средства и при активном участии жителей и работников местного предприятия — Вильского завода (совхоза), чтобы увековечить имена односельчан, не вернувшихся с фронтов.',
        question: 'На какие средства и чьими силами был возведён Вильский поселковый мемориал?',
        options: ['За счёт государственного бюджета силами приезжих строителей', 'На пожертвования благотворительного фонда из Нижнего Новгорода', 'На народные средства при активном участии местных жителей и работников Вильского завода (совхоза)'],
        answer: 2
    },
    train: {
        title: 'Поезд',
        top: '91%',
        left: '34%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 2
    },
    club: {
        title: 'Клуб творчества',
        top: '92%',
        left: '30%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 0
    },
    naber: {
        title: '',
        top: '95%',
        left: '30%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 1
    },
    platina: {
        title: 'Платина',
        top: '97%',
        left: '9%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 2
    },
    vodonapor: {
        title: 'Водонапорная башня',
        top: '87%',
        left: '68%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 1
    },
    bolnica: {
        title: 'Поселковая больница',
        top: '87%',
        left: '61%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 0
    },
    school: {
        title: 'Школа',
        top: '57%',
        left: '32%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 2
    },
    child: {
        title: 'Детский сад',
        top: '58%',
        left: '29%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 2
    },
    apartament: {
        title: 'Многоквартирный дом',
        top: '13%',
        left: '36%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 0
    },
    vyshka: {
        title: 'Телевышка',
        top: '6%',
        left: '23%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 1
    },
    karer: {
        title: 'Карьер',
        top: '2%',
        left: '48%',
        story: '',
        question: '',
        options: ['', '', ''],
        answer: 0
    }
};

const routes = {
    center: {
        heading: 'Маршрут от центра',
        mapSrc: 'gallery/маршрутцентр.jpg',
        order: ['center', 'memorial', 'club', 'train', 'naber', 'platina', 'vodonapor', 'bolnica', 'library', 'school', 'child', 'house', 'apartament', 'vyshka', 'karer']
    },
    school: {
        heading: 'Маршрут от Школьной',
        mapSrc: 'gallery/маршрут-школьная.jpg',
        order: ['library', 'house', 'center']
    },
    lyapuha: {
        heading: 'Маршрут от Ляпухи',
        mapSrc: 'gallery/маршрут-ляпуха.jpg',
        order: ['house', 'center', 'library']
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
            dot.textContent = pointNumber;
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
        <div id="quiz-answers" class="quiz-answers"></div>
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