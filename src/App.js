import React from 'react';
import './style.css';

export default function App() {
  let inp = document.getElementById('input');
  let def = document.getElementById('default');
  let deb = document.getElementById('debounce');

  inp.addEventListener('keypress', (e) => {
    increament(def);
    updateDebounce();
  });
  const updateDebounce = debounce(() => {
    increament(deb);
  });
  function debounce(cb) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, 1000);
    };
  }
  function increament(element) {
    element.innerText = (parseInt(element.innerText) || 0) + 1;
  }
  return '';
}
