'use strict';

const btnDec = document.querySelector('.counter__decrease');
const btnRes = document.querySelector('.counter__reset');
const btnInc = document.querySelector('.counter__increase');
const counter = document.querySelector('.counter');
const countPara = document.querySelector('.counter__para');

let count = 0;

counter.addEventListener('click', function (e) {
  if (e.target.classList.contains('res')) {
    console.log(e.target);
    count = 0;
    countPara.textContent = count;
  }
  if (e.target.classList.contains('inc')) {
    count++;
    countPara.textContent = count;
  }
});
