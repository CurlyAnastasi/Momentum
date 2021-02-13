// DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    imgBtn = document.getElementById('imgBtn'),
    day = document.getElementById('day'),
    date = document.getElementById('date'),
    month = document.getElementById('month');
    let currentImgIndex = 0;

const morningImgs = [
    './img/morning/01.jpg',
    './img/morning/02.jpg',
    './img/morning/03.jpg',
    './img/morning/04.jpg',
    './img/morning/05.jpg',
];

const dayImgs = [
    './img/day/01.jpg',
    './img/day/02.jpg',
    './img/day/03.jpg',
    './img/day/04.jpg',
    './img/day/05.jpg',
];

const eveningImgs = [
    './img/evening/01.jpg',
    './img/evening/02.jpg',
    './img/evening/03.jpg',
    './img/evening/04.jpg',
    './img/evening/05.jpg',
];

const nightImgs = [
    './img/night/01.jpg',
    './img/night/02.jpg',
    './img/night/03.jpg',
    './img/night/04.jpg',
    './img/night/05.jpg',
]



// Get the time function
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // AM/PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12h format
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
    setTimeout(showTime, 1000);
}

// Add zero function
function addZero(n) {
    return parseInt(n,10) < 10 ? '0' + n : n;
}

// Get the date 
function getDate () {
    let today = new Date(),
    week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    console.log(today)
    day.innerText = week[today.getDay()];
    date.innerText = today.getDate();
    month.innerText = months[today.getMonth()];
}

// Set background and greeting depend on time
function setBg() {
    let today = new Date(),
        hour = today.getHours()
        
    if (hour < 6) {
        imgBtn.addEventListener('click',()=>changeImages(nightImgs));
        document.body.style.backgroundImage = "url('./img/night/01.jpg')";
        setInterval(()=>changeImages(nightImgs), 60*60000);
        greeting.textContent = 'Good night';
    } else if ( hour < 12) {
        imgBtn.addEventListener('click',()=>changeImages(morningImgs));
        document.body.style.backgroundImage = "url('./img/morning/01.jpg')";
        setInterval(()=>changeImages(morningImgs), 60*60000);
        greeting.textContent = 'Good morning';
    } else if (hour < 18) {
        imgBtn.addEventListener('click',()=> changeImages(dayImgs));
        document.body.style.backgroundImage = "url('./img/day/01.jpg')";
        setInterval(()=>changeImages(dayImgs), 60*60000);
        greeting.textContent = 'Good afternoon';
        
    } else {
        imgBtn.addEventListener('click',()=> changeImages(eveningImgs));
        document.body.style.backgroundImage = "url('./img/evening/01.jpg')";
        setInterval(()=>changeImages(eveningImgs), 60*60000);
        greeting.textContent = 'Good evening';
    }
}

// Change images depends on time
function changeImages (data) {
    console.log(currentImgIndex);
    if (currentImgIndex >= data.length-1) {
        currentImgIndex = 0;
        document.body.style.backgroundImage = `url(${data[currentImgIndex]})`;
    } else {
        currentImgIndex += 1;
        document.body.style.backgroundImage = `url(${data[currentImgIndex]})`;
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13 || e.which == 13) {
            e.target.innerText === '' ? e.target.innerText = localStorage.getItem('name') :
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else {
        e.target.innerText === '' ? e.target.innerText = localStorage.getItem('name') :
            localStorage.setItem('name', e.target.innerText);
    }
}

// Get Name
function getName() {
    name.textContent = localStorage.getItem('name') === null ? '[Enter Name]' : localStorage.getItem('name');
}

// Check if Name is emply
function checkName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            name.textContent = localStorage.getItem('name') === null ? '[Enter Name]' : localStorage.getItem('name');
        }
    } else {
        name.textContent = localStorage.getItem('name') === null ? '[Enter Name]' : localStorage.getItem('name');
    }
}


// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            e.target.innerText === '' ? e.target.innerText = localStorage.getItem('focus') :
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
        } else {
            e.target.innerText === '' ? e.target.innerText = localStorage.getItem('focus') :
            localStorage.setItem('focus', e.target.innerText);
        }
    }

// Get Focus
function getFocus() {
    focus.textContent = localStorage.getItem('focus') === null ? '[Enter Focus]' : localStorage.getItem('focus');
}

// Check if Focus is empty
function checkFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            focus.textContent = localStorage.getItem('focus') === null ? '[Enter Focus]' : localStorage.getItem('focus');
        }
    } else {
        focus.textContent = localStorage.getItem('focus') === null ? '[Enter Focus]' : localStorage.getItem('focus');
    }
}

// Clear
function clear(e) {
    e.target.innerText = '';
    }

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', clear);
name.addEventListener('keypress',checkName);
name.addEventListener('blur', checkName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('keypress',checkFocus);
focus.addEventListener('blur',checkFocus);
focus.addEventListener('click', clear);

// Run
showTime();
setBg();
getName();
getFocus();
getDate();


