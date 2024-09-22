const music = new Audio('audio/Rain_Wedding.mp3');
// music.play();

// Create Array
const songs = [
    {
        id: '1',
        songName: `เหมือนวิวานห์ (Rain wedding) <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/Rain Wedding(Jeff).jpg"
    },
    {
        id: '2',
        songName: `ซ่อน(ไม่)หา Ghost <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/Ghost(Jefft).png"
    },
    {
        id: '3',
        songName: `Subliminal <br>
                    <div class="subtitle">BamBam</div>`,
        poster: "img/Poster/Subliminal(BamBam).jpg"
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
        poster: "img/Poster/Rain Wedding(Jeff).jpg"
    },
    {
        id: '9',
        songName: `ซ่อน(ไม่)หา Ghost <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/Ghost(Jefft).png"
    },
    {
        id: '10',
        songName: `Subliminal <br>
                    <div class="subtitle">BamBam</div>`,
        poster: "img/Poster/Subliminal(BamBam).jpg"
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
        id: '15',
        songName: `Falling <br>
                    <div class="subtitle">Mark Tuan</div>`,
        poster: "img/Poster/Falling(Mark_Tuan).jpg"
    },
    {
        id: '16',
        songName: `Perfect Night <br>
                    <div class="subtitle">Lesserafim</div>`,
        poster: "img/Poster/Perfect_Night(Lesserafim).jpg"
    },
    {
        id: '17',
        songName: `Toy <br>
                    <div class="subtitle">The Toy</div>`,
        poster: "img/Poster/Toy(TheToy).webp"
    },
    {
        id: '18',
        songName: `ส่วนต่าง <br>
                    <div class="subtitle">Bowkylion</div>`,
        poster: "img/Poster/ส่วนต่าง(Bowkylion).jpg"
    },
    {
        id: '19',
        songName: `ยังคงคอย <br>
                    <div class="subtitle">Nontanon</div>`,
        poster: "img/Poster/ยังคงคอย(Nontanon).jpg"
    },
    {
        id: '20',
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