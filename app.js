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
        songName: `Feature (Speed up)<br>
                    <div class="subtitle">Sabrina Carpenter</div>`,
        poster: "img/Poster/Feather.jpg"
    },
    {
        id: '5',
        songName: `Henny(for hennessy) <br>
                    <div class="subtitle">Jackson Wang</div>`,
        poster: "img/Poster/Henny(Jackson_W).jpeg"
    },
    {
        id: '6',
        songName: `Everyday <br>
                    <div class="subtitle">Ariana Grande</div>`,
        poster: "img/Poster/everyday(Ariana-G).png"
    },
    {
        id: '7',
        songName: `Menetic <br>
                    <div class="subtitle">Ilit</div>`,
        poster: "img/Poster/Menetic(Ilit).jpeg"
    },
    // Secone
    {
        id: '8',
        songName: `เหมือนวิวานห์ (Rain wedding) <br>
                    <div class="subtitle">Jeff Statur</div>`,
        poster: "img/Poster/1.jpg"
    },
    {
        id: '9',
        songName: `ซ่อน(ไม่)หา Ghost <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/2.png"
    },
    {
        id: '10',
        songName: `Subliminal <br>
                    <div class="subtitle">BamBam</div>`,
        poster: "img/Poster/3.jpg"
    },
    {
        id: '11',
        songName: `How Sweeth <br>
                    <div class="subtitle">NewJeans</div>`,
        poster: "img/Poster/How_Sweet(NewJeans).jpg"
    },
    {
        id: '12',
        songName: `Nothing (On State)<br>
                    <div class="subtitle">KissOfLife</div>`,
        poster: "img/Poster/Nothing(KissOfLife).jpeg"
    },
    {
        id: '13',
        songName: `OMG!<br>
                    <div class="subtitle">NewJeans</div>`,
        poster: "img/Poster/How_Sweet(NewJeans).jpg"
    },
    {
        id: '14',
        songName: `NightWalker<br>
                    <div class="subtitle">Ten 텐</div>`,
        poster: "img/Poster/NightWalker(Ten 텐).jpg"
    },
    {
        id: '15',
        songName: `Feature (Speed up)<br>
                    <div class="subtitle">Sabrina Carpenter</div>`,
        poster: "img/Poster/Feather.jpg"
    },
    {
        id: '16',
        songName: `Falling <br>
                    <div class="subtitle">Mark Tuan</div>`,
        poster: "img/Poster/Falling(Mark_Tuan).jpg"
    },
    {
        id: '17',
        songName: `Perfect Night <br>
                    <div class="subtitle">Lesserafim</div>`,
        poster: "img/Poster/Perfect_Night(Lesserafim).jpg"
    },
    {
        id: '18',
        songName: `Toy <br>
                    <div class="subtitle">The Toy</div>`,
        poster: "img/Poster/Toy(TheToy).webp"
    },
    {
        id: '19',
        songName: `ส่วนต่าง <br>
                    <div class="subtitle">Bowkylion</div>`,
        poster: "img/Poster/ส่วนต่าง(Bowkylion).jpg"
    },
    {
        id: '20',
        songName: `ยังคงคอย <br>
                    <div class="subtitle">Nontanon</div>`,
        poster: "img/Poster/ยังคงคอย(Nontanon).jpg"
    },
    {
        id: '21',
        songName: `TIPTY TONE <br>
                    <div class="subtitle">BamBam</div>`,
        poster: "img/Poster/Subliminal(BamBam).jpg"
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
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let {songName} = ele;
            title.innerHTML = songName;
        })
    })
})