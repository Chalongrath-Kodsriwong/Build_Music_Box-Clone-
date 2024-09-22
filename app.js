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
        songName: `Feature <br>
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
        songName: `ซ่อน(ไม่)หา Ghost <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/Ghost(Jefft).png"
    },
    {
        id: '7',
        songName: `ซ่อน(ไม่)หา Ghost <br>
                    <div class="subtitle">Jeff Satur</div>`,
        poster: "img/Poster/Ghost(Jefft).png"
    },
    // Secone
    {
        id: '8',
        songName: `เหมือนวิวานห์ (Rain wedding) <br>
                    <div class="subtitle">Jeff Statur</div>`,
        poster: "img/Poster/Ghost(Jefft).png"
    },


    // Max to 21
];

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    // อัพเดทรูปภาพตาม array
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    // อัพเดทชื่อเพลงและศิลปิน
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});