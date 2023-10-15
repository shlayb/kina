var musikkeberapa = 0;
var listmusik = [
  {
    link: 'https://cdn.discordapp.com/attachments/901679715453116427/1163130537184079872/y2mate.com_-_jeremy_passion_lemonade_lyrics.mp3',
    nama: 'Lemonade',
    penyanyi: 'Jeremy Passion',
  },
  { link: 'https://cdn.discordapp.com/attachments/881541248522022952/901489446103433216/y2mate.com_-_keshi_beside_you_Lyric_Video.mp3', nama: 'Beside You', penyanyi: 'Keshi' },
  { link: 'https://cdn.discordapp.com/attachments/901460925956112435/901712325336240128/Kaleb_J_-_Its_Only_Me_Official_Lyric_Video.mp3', nama: 'Its Only Me', penyanyi: 'Kaleb J' },
  { link: 'https://cdn.discordapp.com/attachments/781732552058732554/901717392747552798/y2meta.com_-_Sezairi_-_Its_You_Official_Music_Video_128_kbps.mp3', nama: "It's You", penyanyi: 'Sezairi' },
  { link: 'https://cdn.discordapp.com/attachments/901679715453116427/902503698775822356/y2mate.com_-_demxntia_i_wont_let_you_feel_alone_again.mp3', nama: ' I wont let you feel alone again', penyanyi: 'Demxnita' },
];
var x = document.getElementById('myAudio');
var source = document.getElementById('audioSource');

function playAudio() {
  if (x.paused) {
    x.play();
  } else {
    x.pause();
  }
}

function nextaudio() {
  if (musikkeberapa < listmusik.length) {
    musikkeberapa += 1;
    if (musikkeberapa == 4) {
      document.getElementById('Judul').style.fontSize = '22px';
      document.getElementById('artis').style.fontSize = '15px';
    }
    document.getElementById('Judul').innerHTML = listmusik[musikkeberapa].nama;
    document.getElementById('artis').innerHTML = listmusik[musikkeberapa].penyanyi;
    source.src = listmusik[musikkeberapa].link;
    x.load();
  }
}

function prevaudio() {
  if (musikkeberapa > 0) {
    musikkeberapa -= 1;
    if (musikkeberapa == 3) {
      document.getElementById('Judul').style.fontSize = '25px';
      document.getElementById('artis').style.fontSize = '16px';
    }
    document.getElementById('Judul').innerHTML = listmusik[musikkeberapa].nama;
    document.getElementById('artis').innerHTML = listmusik[musikkeberapa].penyanyi;
    source.src = listmusik[musikkeberapa].link;
    x.load();
  }
}

setInterval(function () {
  if (musikkeberapa > 0) {
    document.getElementById('prev').disabled = false;
  } else {
    document.getElementById('prev').disabled = true;
  }

  if (musikkeberapa < listmusik.length - 1) {
    document.getElementById('next').disabled = false;
  } else {
    document.getElementById('next').disabled = true;
  }
}, 1);
