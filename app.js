const music = new Audio('audio/1.mp3');
// music.play();

// Create Array
const songs = [
    {
        id: '1',
        songName: `เหมือนวิวานห์ (Rain wedding) <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/1.jpg"
    },
    {
        id: '2',
        songName: `ซ่อน(ไม่)หา Ghost <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/2.png"
    },
    {
        id: '3',
        songName: `Subliminal <br>
                    <div class="subtitle">BamBam</div>`,
        poster: "img/Poster/3.jpg"
    },
    {
        id: '4',
        songName: `Feathre (Speed up)<br>
                    <div class="subtitle">Sabrina Carpenter</div>`,
        poster: "img/Poster/4.jpg"
    },
    {
        id: '5',
        songName: `Henny(for hennessy) <br>
                    <div class="subtitle">Jackson Wang</div>`,
        poster: "img/Poster/5.jpeg"
    },
    {
        id: '6',
        songName: `Everyday <br>
                    <div class="subtitle">Ariana Grande</div>`,
        poster: "img/Poster/6.png"
    },
    {
        id: '7',
        songName: `Menetic <br>
                    <div class="subtitle">Ilit</div>`,
        poster: "img/Poster/7.jpeg"
    },
    // Secone
    {
        id: '8',
        songName: `How Sweeth <br>
                    <div class="subtitle">NewJeans</div>`,
        poster: "img/Poster/8.jpg"
    },
    {
        id: '9',
        songName: `Nothing (On State)<br>
                    <div class="subtitle">KissOfLife</div>`,
        poster: "img/Poster/9.jpeg"
    },
    {
        id: '10',
        songName: `OMG!<br>
                    <div class="subtitle">NewJeans</div>`,
        poster: "img/Poster/8.jpg"
    },
    {
        id: '11',
        songName: `NightWalker<br>
                    <div class="subtitle">Ten 텐</div>`,
        poster: "img/Poster/10.jpg"
    },
    {
        id: '12',
        songName: `Feature (Speed up)<br>
                    <div class="subtitle">Sabrina Carpenter</div>`,
        poster: "img/Poster/4.jpg"
    },
    {
        id: '13',
        songName: `Falling <br>
                    <div class="subtitle">Mark Tuan</div>`,
        poster: "img/Poster/11.jpg"
    },
    {
        id: '14',
        songName: `Perfect Night <br>
                    <div class="subtitle">Lesserafim</div>`,
        poster: "img/Poster/12.jpg"
    },
    {
        id: '15',
        songName: `Toy <br>
                    <div class="subtitle">The Toy</div>`,
        poster: "img/Poster/13.webp"
    },
    {
        id: '16',
        songName: `ส่วนต่าง <br>
                    <div class="subtitle">Bowkylion</div>`,
        poster: "img/Poster/14.jpg"
    },
    {
        id: '17',
        songName: `ยังคงคอย <br>
                    <div class="subtitle">Nontanon</div>`,
        poster: "img/Poster/15.jpg"
    },
    {
        id: '18',
        songName: `TIPTY TONE <br>
                    <div class="subtitle">BamBam</div>`,
        poster: "img/Poster/3.jpg"
    },
    // Max to 21
];

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    // อัพเดทรูปภาพตาม array
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    // อัพเดทชื่อเพลงและศิลปิน
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("master_play");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        wave.classList.add("active2");
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-circle');
        masterPlay.classList.remove('bi-pause-circle');
        wave.classList.remove("active2");
    }
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
// 
let poster_master_play = document.getElementById('poster_master_play')
// 
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        // poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        wave.classList.add("active2");
        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play-circle');
            masterPlay.classList.remove('bi-pause-circle');
            wave.classList.remove("active2");
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


// Count time Start To End
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);

    if (sec < 10) {
        sec = `0${sec}`
    }

    currentEnd.innerHTML = `${min}:${sec}`;
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    currentStart.innerHTML = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-circle');
    masterPlay.classList.remove('bi-pause-circle');
    wave.classList.remove("active2");
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-mute-fill')
        vol_icon.classList.remove('bi-volume-up-fill')
    }
    if (vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
        vol_icon.classList.remove('bi-volume-up-fill')
    }
    if (vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
        vol_icon.classList.add('bi-volume-up-fill')
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById("back");
let next = document.getElementById("next");

// Back Song Button
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
        // poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        makeAllPlays();

        document.getElementById(`${index}`).classList.remove('bi-play-circle');
        document.getElementById(`${index}`).classList.add('bi-pause-circle');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
})

// Next Song Button
next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        // poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        makeAllPlays();

        document.getElementById(`${index}`).classList.remove('bi-play-circle');
        document.getElementById(`${index}`).classList.add('bi-pause-circle');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
})

// sec pop_song
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

// sec Of Artist
let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
})