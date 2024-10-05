"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/
const boxesBox = document.querySelectorAll(".boxes__box");

const clickAudio = new Audio("audio/Mountain Audio - Menu Click.mp3");
const winAudio = new Audio("audio/huge win.wav");
let newLetters;

for (let i = 0; i < boxesBox.length; i++) {
  boxesBox[i].addEventListener("click", function () {
    if (boxesBox[i].previousElementSibling != null) {
      boxesBox[i].previousElementSibling.before(boxesBox[i]);
      clickAudio.play();
      newLetters = document.querySelectorAll(".boxes__box");
      console.log(newLetters);
    } else if (boxesBox[i].nextElementSibling != null) {
      boxesBox[i].nextElementSibling.after(boxesBox[i]);
      clickAudio.play();
      newLetters = document.querySelectorAll(".boxes__box");
      console.log(newLetters);
    }
    if (
      newLetters[0].classList.contains("box_a") &&
      newLetters[1].classList.contains("box_b") &&
      newLetters[2].classList.contains("box_c") &&
      newLetters[3].classList.contains("box_d") &&
      newLetters[4].classList.contains("box_e") &&
      newLetters[5].classList.contains("box_f") &&
      newLetters[6].classList.contains("box_g") &&
      newLetters[7].classList.contains("box_h") &&
      newLetters[8].classList.contains("box_i") &&
      newLetters[9].classList.contains("box_j") &&
      newLetters[10].classList.contains("box_k") &&
      newLetters[11].classList.contains("box_l") &&
      newLetters[12].classList.contains("box_m") &&
      newLetters[13].classList.contains("box_n") &&
      newLetters[14].classList.contains("box_o") &&
      newLetters[15].classList.contains("box_p") &&
      newLetters[16].classList.contains("box_q") &&
      newLetters[17].classList.contains("box_r") &&
      newLetters[18].classList.contains("box_s") &&
      newLetters[19].classList.contains("box_t") &&
      newLetters[20].classList.contains("box_u") &&
      newLetters[21].classList.contains("box_v") &&
      newLetters[22].classList.contains("box_w") &&
      newLetters[23].classList.contains("box_x") &&
      newLetters[24].classList.contains("box_y") &&
      newLetters[25].classList.contains("box_z")
    ) {
      winAudio.play();
    }
  });
}
