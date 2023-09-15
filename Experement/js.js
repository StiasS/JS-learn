

let goCount = 0;
let goCount2 = 0;

function go() {
  goCount++;

  showCircle(160, 110, 39).then(div => {
    if (goCount >= 5) {
      goCount=0
      removeCircles();
      go1();
    }
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
}

function removeCircles() {
  let circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.remove();
  });
}
function go1() {
  showCircle1(300, 100, 100).then(div => {
    div.classList.add('message-ball');
    div.append("廾е 长р闩сь 爪е卄牙");
  });
}
function showCircle1(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle1';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
}

function go2() {
  goCount2++;
  
  c1(1300, 300, 300)
    if (goCount2 >= 2) {
      goCount2 = 0;
      removeCircles1();
    };
}
  function c1(cx, cy, radius) {
  let div1 = document.createElement('div1');
  div1.style.width = 0;
  div1.style.height = 0;
  div1.style.left = cx + 'px';
  div1.style.top = cy + 'px';
  div1.className = 'circle2';
  document.body.append(div1);

  setTimeout(() => {
    div1.style.width = radius * 2 + 'px';
    div1.style.height = radius * 2 + 'px';
  }, 0);};
  function removeCircles1() {
    const circles = document.querySelectorAll('.circle2');
    circles.forEach(circle => {
      circle.remove();
    });
  }
  function check(){
    return alert(goCount2);
  }
