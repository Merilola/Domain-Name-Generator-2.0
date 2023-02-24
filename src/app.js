/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoum = ["the", "our"];
  const adjt = ["great", "big"];
  const subjet = ["jogger", "racoon"];
  const extension = [".com", ".es", ".it"];
  getDomain(pronoum, adjt, subjet, extension);
};
const getDomain = (pronoum, adjt, subjet, extension) => {
  pronoum.forEach(pron => {
    adjt.forEach(adj => {
      subjet.forEach(sub => {
        extension.forEach(ext => {
          console.log(`${pron}${adj}${sub}${ext}`);
        });
      });
    });
  });
};
