const music = document.getElementsByTagName('audio')
const play = document.querySelector('.play')
const nextsoung = document.querySelector('.play-next')
const prevsoung = document.querySelector('.play-prev')
const play_list = document.querySelector('.play-list')

let audiostatus = false
let playlistcounter = 0

const playList = [
    {
        title: 'Summer Wind',
        src: './assets/sounds/Summer Wind.mp3',
        duration: '01:50'
    },
    {
        title: 'River Flows In You',
        src: './assets/sounds/River Flows In You.mp3',
        duration: '01:37'
    },
    {
        title: 'Ennio Morricone',
        src: './assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
    },
    {
        title: 'Aqua Caelestis',
        src: './assets/sounds/Aqua Caelestis.mp3',
        duration: '00:39'
    }
]
function audioSrc(path) {
    music[0].setAttribute('src', path);

}

function setPlaylist() {
    audioSrc(playList[playlistcounter].src)
}

function playaudio() {
    music[0].currentTime = 0;
    music[0].play();
    play.classList.remove('play')
    play.classList.add('pause')
}
function pauseAudio() {
    music[0].pause();
    play.classList.add('play')
    play.classList.remove('pause')
}

play.onclick = () => {
    setPlaylist()
    if (audiostatus == false) {
        audiostatus = true
        playaudio()
        return ''
    }
    if (audiostatus == true) {
        audiostatus = false
        pauseAudio()
    }
}
nextsoung.onclick = () => {
    playlistcounter++
    if (playlistcounter > (playList.length - 1)) {
        playlistcounter = 0
    }
    SetActive()
    if (audiostatus == true) {
        audiostatus = false
        pauseAudio()
        setPlaylist()
        audiostatus = true
        playaudio()
    }


}
prevsoung.onclick = () => {
    playlistcounter--
    if (playlistcounter < 0) {
        playlistcounter = playList.length - 1
    }
    SetActive()
    if (audiostatus == true) {
        audiostatus = false
        pauseAudio()
        setPlaylist()
        audiostatus = true
        playaudio()
    }
}

function SetPlayList() {
    playList.map((el, index) => {
        let li = document.createElement('li');
        li.innerHTML = el.title
        play_list.append(li);
    })

}
SetPlayList()
function SetActive() {
    let elems = play_list.children;
    for (let i = 0; i <= elems.length - 1; i++) {
        elems[i].classList.remove('active')
        if (i == playlistcounter) {
            elems[i].classList.add('active')
        }
    }

}
SetActive()
 

music[0].addEventListener("ended", ()=>{
console.log('Ended')
 playlistcounter++
    if (playlistcounter > (playList.length - 1)) {
        playlistcounter = 0
    }
    SetActive()
    if (audiostatus == true) {
        audiostatus = false
        pauseAudio()
        setPlaylist()
        audiostatus = true
        playaudio()
    }

} );

 
