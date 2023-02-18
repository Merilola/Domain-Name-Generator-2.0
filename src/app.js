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
  for (let i = 0; i < pronoum.length; i++) {
    for (let a = 0; a < adjt.length; a++) {
      for (let e = 0; e < subjet.length; e++) {
        for (let u = 0; u < extension.length; u++) {
          console.log(`${pronoum[i]} ${adjt[a]} ${subjet[e]} ${extension[u]}`);
        }
      }
    }
  }
};
