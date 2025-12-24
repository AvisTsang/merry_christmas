document.addEventListener("DOMContentLoaded", function () {
  const bulb = document.querySelector(".lightbulb_button");
  const timer = document.querySelector(".Timer_label");
  const start = document.querySelector(".start");
  const scene = document.querySelector(".christmas_scene");
  const text = document.querySelector(".xmas");
  const text2= document.querySelector(".text2");
  const music = document.getElementById('xmasMusic');

  scene.style.display = "none" ;
  text.style.display="none";


  bulb.addEventListener("click", function () {
    // 隱藏 timer 同燈泡
    timer.style.display = "none";
    bulb.style.display = "none";
    start.style.display = "none";
    text2.style.display = "none";

    if (music.paused){
        music.play();
    }
    else{
        music.pause();
    }

    // 顯示聖誕場景
    scene.style.display = "block";
    text.style.display = "block";

    // 改背景色
    document.body.style.backgroundColor = "#0b1d3a";
  });
});

