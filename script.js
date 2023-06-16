const keysArr = document.querySelectorAll(
  `.key-backquote, .key-digit1, .key-digit2, .key-digit3, .key-digit4,
   .key-digit5, .key-digit6, .key-digit7, .key-digit8, .key-digit9, .key-digit0,
   .key-minus, .key-equal, .key-backspace, .key-tab, .key-q, .key-w, .key-e, .key-r,
   .key-t, .key-y, .key-u, .key-i, .key-o, .key-p, .key-bracketLeft, .key-bracketRight,
   .key-backslash, .key-capsLock, .key-a, .key-s, .key-d, .key-f, .key-g, .key-h,
   .key-j, .key-k, .key-l, .key-semicolon, .key-quote, .key-enter, .key-leftShift, 
   .key-z, .key-x, .key-c, .key-v, .key-b, .key-n, .key-m, .key-comma, 
   .key-period, .key-slash, .key-rightShift, .key-space
`
);
let text = "",
  action;

// key down
window.addEventListener("keydown", function (event) {
  // line 1
  if (event.keyCode === 192) {
    action = event.key;
    keysArr[0].classList.add("push-btn");
  } else if (event.keyCode === 49) {
    action = event.key;
    keysArr[1].classList.add("push-btn");
  } else if (event.keyCode === 50) {
    action = event.key;
    keysArr[2].classList.add("push-btn");
  } else if (event.keyCode === 51) {
    action = event.key;
    keysArr[3].classList.add("push-btn");
  } else if (event.keyCode === 52) {
    action = event.key;
    keysArr[4].classList.add("push-btn");
  } else if (event.keyCode === 53) {
    action = event.key;
    keysArr[5].classList.add("push-btn");
  } else if (event.keyCode === 54) {
    action = event.key;
    keysArr[6].classList.add("push-btn");
  } else if (event.keyCode === 55) {
    action = event.key;
    keysArr[7].classList.add("push-btn");
  } else if (event.keyCode === 56) {
    action = event.key;
    keysArr[8].classList.add("push-btn");
  } else if (event.keyCode === 57) {
    action = event.key;
    keysArr[9].classList.add("push-btn");
  } else if (event.keyCode === 48) {
    action = event.key;
    keysArr[10].classList.add("push-btn");
  } else if (event.keyCode === 189) {
    action = event.key;
    keysArr[11].classList.add("push-btn");
  } else if (event.keyCode === 187) {
    action = event.key;
    keysArr[12].classList.add("push-btn");
  } else if (event.keyCode === 8) {
    action = event.key;
    keysArr[13].classList.add("push-btn");
  }
  // line 1

  // line 2
  else if (event.keyCode === 9) {
    event.preventDefault();
    action = "\t";
    keysArr[14].classList.add("push-btn");
  } else if (event.keyCode === 81) {
    action = event.key;
    keysArr[15].classList.add("push-btn");
  } else if (event.keyCode === 87) {
    action = event.key;
    keysArr[16].classList.add("push-btn");
  } else if (event.keyCode === 69) {
    action = event.key;
    keysArr[17].classList.add("push-btn");
  } else if (event.keyCode === 82) {
    action = event.key;
    keysArr[18].classList.add("push-btn");
  } else if (event.keyCode === 84) {
    action = event.key;
    keysArr[19].classList.add("push-btn");
  } else if (event.keyCode === 89) {
    action = event.key;
    keysArr[20].classList.add("push-btn");
  } else if (event.keyCode === 85) {
    action = event.key;
    keysArr[21].classList.add("push-btn");
  } else if (event.keyCode === 73) {
    action = event.key;
    keysArr[22].classList.add("push-btn");
  } else if (event.keyCode === 79) {
    action = event.key;
    keysArr[23].classList.add("push-btn");
  } else if (event.keyCode === 80) {
    action = event.key;
    keysArr[24].classList.add("push-btn");
  } else if (event.keyCode === 219) {
    action = event.key;
    keysArr[25].classList.add("push-btn");
  } else if (event.keyCode === 221) {
    action = event.key;
    keysArr[26].classList.add("push-btn");
  } else if (event.keyCode === 220) {
    action = event.key;
    keysArr[27].classList.add("push-btn");
  }
  // line 2

  // line 3
  else if (event.keyCode === 20) {
    action = "";
    keysArr[28].classList.add("push-btn");
    document.querySelector(".key-capsLock > span").classList.toggle("capsOn");
  } else if (event.keyCode === 65) {
    action = event.key;
    keysArr[29].classList.add("push-btn");
  } else if (event.keyCode === 83) {
    action = event.key;
    keysArr[30].classList.add("push-btn");
  } else if (event.keyCode === 68) {
    action = event.key;
    keysArr[31].classList.add("push-btn");
  } else if (event.keyCode === 70) {
    action = event.key;
    keysArr[32].classList.add("push-btn");
  } else if (event.keyCode === 71) {
    action = event.key;
    keysArr[33].classList.add("push-btn");
  } else if (event.keyCode === 72) {
    action = event.key;
    keysArr[34].classList.add("push-btn");
  } else if (event.keyCode === 74) {
    action = event.key;
    keysArr[35].classList.add("push-btn");
  } else if (event.keyCode === 75) {
    action = event.key;
    keysArr[36].classList.add("push-btn");
  } else if (event.keyCode === 76) {
    action = event.key;
    keysArr[37].classList.add("push-btn");
  } else if (event.keyCode === 186) {
    action = event.key;
    keysArr[38].classList.add("push-btn");
  } else if (event.keyCode === 222) {
    action = event.key;
    keysArr[39].classList.add("push-btn");
  } else if (event.keyCode === 13) {
    action = "\n";
    keysArr[40].classList.add("push-btn");
  }
  // line 3

  // line 4
  else if (event.keyCode === 16 && event.code === "ShiftLeft") {
    action = "";
    keysArr[41].classList.add("push-btn");
  } else if (event.keyCode === 90) {
    action = event.key;
    keysArr[42].classList.add("push-btn");
  } else if (event.keyCode === 88) {
    action = event.key;
    keysArr[43].classList.add("push-btn");
  } else if (event.keyCode === 67) {
    action = event.key;
    keysArr[44].classList.add("push-btn");
  } else if (event.keyCode === 86) {
    action = event.key;
    keysArr[45].classList.add("push-btn");
  } else if (event.keyCode === 66) {
    action = event.key;
    keysArr[46].classList.add("push-btn");
  } else if (event.keyCode === 78) {
    action = event.key;
    keysArr[47].classList.add("push-btn");
  } else if (event.keyCode === 77) {
    action = event.key;
    keysArr[48].classList.add("push-btn");
  } else if (event.keyCode === 188) {
    action = event.key;
    keysArr[49].classList.add("push-btn");
  } else if (event.keyCode === 190) {
    action = event.key;
    keysArr[50].classList.add("push-btn");
  } else if (event.keyCode === 191) {
    action = event.key;
    keysArr[51].classList.add("push-btn");
  } else if (event.keyCode === 16 && event.code === "ShiftRight") {
    action = "";
    keysArr[52].classList.add("push-btn");
  }
  // line 4

  // line 5
  else if (event.keyCode === 32) {
    action = " ";
    keysArr[53].classList.add("push-btn");
  }
  // line 5
  if (action === "Backspace") {
    res = "";
    for (let i = 0; i < text.length; i++) {
      if (i < text.length - 1) {
        res += text[i];
      }
    }
    this.document.querySelector(".input").innerHTML = res;
    text = res;
  } else {
    this.document.querySelector(".input").innerHTML = text += action;
    action = "";
  }
});
// key down

// key up
window.addEventListener("keyup", function (event) {
  // line 1
  if (event.keyCode === 192) {
    keysArr[0].classList.remove("push-btn");
  } else if (event.keyCode === 49) {
    keysArr[1].classList.remove("push-btn");
  } else if (event.keyCode === 50) {
    keysArr[2].classList.remove("push-btn");
  } else if (event.keyCode === 51) {
    keysArr[3].classList.remove("push-btn");
  } else if (event.keyCode === 52) {
    keysArr[4].classList.remove("push-btn");
  } else if (event.keyCode === 53) {
    keysArr[5].classList.remove("push-btn");
  } else if (event.keyCode === 54) {
    keysArr[6].classList.remove("push-btn");
  } else if (event.keyCode === 55) {
    keysArr[7].classList.remove("push-btn");
  } else if (event.keyCode === 56) {
    keysArr[8].classList.remove("push-btn");
  } else if (event.keyCode === 57) {
    keysArr[9].classList.remove("push-btn");
  } else if (event.keyCode === 48) {
    keysArr[10].classList.remove("push-btn");
  } else if (event.keyCode === 189) {
    keysArr[11].classList.remove("push-btn");
  } else if (event.keyCode === 187) {
    keysArr[12].classList.remove("push-btn");
  } else if (event.keyCode === 8) {
    keysArr[13].classList.remove("push-btn");
  }
  // line 1

  // line 2
  else if (event.keyCode === 9) {
    keysArr[14].classList.remove("push-btn");
  } else if (event.keyCode === 81) {
    keysArr[15].classList.remove("push-btn");
  } else if (event.keyCode === 87) {
    keysArr[16].classList.remove("push-btn");
  } else if (event.keyCode === 69) {
    keysArr[17].classList.remove("push-btn");
  } else if (event.keyCode === 82) {
    keysArr[18].classList.remove("push-btn");
  } else if (event.keyCode === 84) {
    keysArr[19].classList.remove("push-btn");
  } else if (event.keyCode === 89) {
    keysArr[20].classList.remove("push-btn");
  } else if (event.keyCode === 85) {
    keysArr[21].classList.remove("push-btn");
  } else if (event.keyCode === 73) {
    keysArr[22].classList.remove("push-btn");
  } else if (event.keyCode === 79) {
    keysArr[23].classList.remove("push-btn");
  } else if (event.keyCode === 80) {
    keysArr[24].classList.remove("push-btn");
  } else if (event.keyCode === 219) {
    keysArr[25].classList.remove("push-btn");
  } else if (event.keyCode === 221) {
    keysArr[26].classList.remove("push-btn");
  } else if (event.keyCode === 220) {
    keysArr[27].classList.remove("push-btn");
  }
  // line 2

  // line 3
  else if (event.keyCode === 20) {
    keysArr[28].classList.remove("push-btn");
  } else if (event.keyCode === 65) {
    keysArr[29].classList.remove("push-btn");
  } else if (event.keyCode === 83) {
    keysArr[30].classList.remove("push-btn");
  } else if (event.keyCode === 68) {
    keysArr[31].classList.remove("push-btn");
  } else if (event.keyCode === 70) {
    keysArr[32].classList.remove("push-btn");
  } else if (event.keyCode === 71) {
    keysArr[33].classList.remove("push-btn");
  } else if (event.keyCode === 72) {
    keysArr[34].classList.remove("push-btn");
  } else if (event.keyCode === 74) {
    keysArr[35].classList.remove("push-btn");
  } else if (event.keyCode === 75) {
    keysArr[36].classList.remove("push-btn");
  } else if (event.keyCode === 76) {
    keysArr[37].classList.remove("push-btn");
  } else if (event.keyCode === 186) {
    keysArr[38].classList.remove("push-btn");
  } else if (event.keyCode === 222) {
    keysArr[39].classList.remove("push-btn");
  } else if (event.keyCode === 13) {
    keysArr[40].classList.remove("push-btn");
  }
  // line 3

  // line 4
  else if (event.keyCode === 16 && event.code === "ShiftLeft") {
    keysArr[41].classList.remove("push-btn");
  } else if (event.keyCode === 90) {
    keysArr[42].classList.remove("push-btn");
  } else if (event.keyCode === 88) {
    keysArr[43].classList.remove("push-btn");
  } else if (event.keyCode === 67) {
    keysArr[44].classList.remove("push-btn");
  } else if (event.keyCode === 86) {
    keysArr[45].classList.remove("push-btn");
  } else if (event.keyCode === 66) {
    keysArr[46].classList.remove("push-btn");
  } else if (event.keyCode === 78) {
    keysArr[47].classList.remove("push-btn");
  } else if (event.keyCode === 77) {
    keysArr[48].classList.remove("push-btn");
  } else if (event.keyCode === 188) {
    keysArr[49].classList.remove("push-btn");
  } else if (event.keyCode === 190) {
    keysArr[50].classList.remove("push-btn");
  } else if (event.keyCode === 191) {
    keysArr[51].classList.remove("push-btn");
  } else if (event.keyCode === 16 && event.code === "ShiftRight") {
    keysArr[52].classList.remove("push-btn");
  }
  // line 4

  // line 5
  else if (event.keyCode === 32) {
    keysArr[53].classList.remove("push-btn");
  }
  // line 5
});
// key up
