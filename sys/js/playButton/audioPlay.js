let komiSounds = [
    new Audio('../../../../assets/audio_but/but.m4a'), // 첫 번째 소리 파일
    new Audio('../../../../assets/audio_but/ter.m4a')  // 두 번째 소리 파일
  ];
  let komIndex = 0;
  
  document.getElementById('komiButton').addEventListener('click', function() {
    komiSounds[komIndex].play();
    komIndex = (komIndex + 1) % komiSounds.length; // 순서대로 재생 후 처음으로 돌아감
});

let butterSounds = [
    new Audio('../../../../assets/audio_but/ko.m4a'), // 첫 번째 소리 파일
    new Audio('../../../../assets/audio_but/me.m4a')  // 두 번째 소리 파일
  ];
  let buIndex = 0;
  
  document.getElementById('butterButton').addEventListener('click', function() {
    butterSounds[buIndex].play();
    buIndex = (buIndex + 1) % butterSounds.length; // 순서대로 재생 후 처음으로 돌아감
});

