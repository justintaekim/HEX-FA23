function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCosFromDegrees(degrees) {
  return Math.cos(degrees * Math.PI/180);
}

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var skyHeight = 0.4 * height;

console.log(width);
console.log(height);

var titles = ['into', 'design'];
var bubbles = ['./img/bubble-1.svg', './img/bubble-2.svg', './img/bubble-3.svg']

var numBubbles = 10;
var title;
for (var title in titles) {
  numBubbles += 10;
  for (var i = 0; i < numBubbles; i++) {

    if (title == 0) {
        var randPercent = Math.random() * 50;
    } else {
        var randPercent = Math.random() * 100;
    }

    var randWidth = Math.random() * 25;

    var bubble_div = document.createElement('div');
    bubble_div.className = 'bubble_container';
    bubble_div.style.left = (randPercent).toString() + '%';
    bubble_div.style.width = (randWidth).toString() + 'px';

    var bubble_img = document.createElement('img');
    bubble_img.src = bubbles[getRandomInt(3)];
    bubble_img.style.opacity = '0';
    bubble_div.appendChild(bubble_img);

    document.getElementById(titles[title]).appendChild(bubble_div);
  }
}

if (width > 600) {
  var y_limit = 70;
} else {
  var y_limit = 35;
}

var hero_timeline = anime.timeline({
  // easing: 'easeInOutExpo',
});

hero_timeline
.add({
  targets: 'h1',
  opacity: [0, 1],
  translateY: [-150, 0],
  // translateX: [-8, -8],
  delay: function(el, index) {
    return index * 150
  },
  duration: 2000,
  easing: 'easeOutElastic'
})

.add({
  targets: '#into img',
  opacity: [0, 0.8],
  // scale: 1.3,
  translateY: function(el, i, l) {
    return [-10, (Math.random() * -y_limit) - 60];
  },
  duration: 1000,
  easing: 'easeOutQuad'
}, 270)
.add({
  targets: '#into img',
  opacity: 0,
  easing: 'linear',
  duration: 500,
}, '-=1200')

.add({
  targets: '#design img',
  opacity: [0, 0.8],
  // scale: 1.3,
  translateY: function(el, i, l) {
    return [-10, (Math.random() * -120) - y_limit];
  },
  duration: 1000,
  easing: 'easeOutQuad'
}, 450)

.add({
  targets: '#bubble-1, #bubble-2, #bubble-3',
  opacity: [0, 1],
  translateY: function(el, i, l) {
    return [(2 - i) * 30 + 10, 0];
  },
  duration: 1500,
  easing: 'easeOutQuad'
}, 450)

.add({
  targets: '#design img',
  opacity: 0,
  easing: 'linear',
  duration: 500,
}, '-=1000')

.add({
  targets: '#girl_container',
  translateX: [300, 0],
  translateY: [-250, 0],
  easing: 'easeOutExpo',
  duration: 1500,
}, '-=1000')
.add({
  targets: '#ball_container',
  translateX: [300, 0],
  translateY: [-300, 0],
  easing: 'easeOutExpo',
  duration: 1500,
}, '-=1200')

.add({
  targets: '.intersect',
  opacity: 0,
  duration: 1000,
}, '-=500');

anime({
  targets: '#ball_container img',
  rotate: 360,
  easing: 'linear',
  duration: 2000,
  loop: true,
});

function fishSwim(x0, x1) {

  var numFish = (getRandomInt(3) + 1) * 4;
  var angle = Math.random() * 20;
  var dur = (2 * width / 380) * 1000;

  if (x0 == 0) {
    x0 -= width;
    x1 = width / getCosFromDegrees(angle)
    img_src = './img/fish.svg'
  } else {
    x1 -= width;
    x0 = width / getCosFromDegrees(angle)
    img_src = './img/fish_reverse.svg'
  }

  var fishes = [];
  var fish_div = document.createElement('div');
  fish_div.style.transform = "rotate(" + angle.toString() + "deg)";
  fish_div.className = 'fish_container';
  // creating the fish
  for (var i = 0; i < numFish; i++) {
    // create the fish container and fish

    var fish_img = document.createElement('img');
    fish_img.src = img_src;
    fish_img.style.left = (i * 20).toString() + "%";
    fish_img.style.top = (Math.random() * 50).toString() + "%";

    fish_div.appendChild(fish_img);


    fishes.push(fish_div);
  }
  fish_wrapper.append(fish_div);

  function animate_fish() {
    anime({
      targets: '.fish_wrapper img',
      translateX: [x0, x1],
      duration: dur,
      easing: 'linear'
    });

    setTimeout(delete_fish, dur);
  }

  function delete_fish() {
    for (i in fishes) {
      fishes[i].remove();
    }
  }

  animate_fish();
}

var fish_wrapper = document.getElementsByClassName('fish_wrapper')[0];

var maxDist = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
var interval = (maxDist / 380) * 1000;

setTimeout(function() {
    fishSwim(0, width);

    setInterval(function() {
      var x0 = getRandomInt(2) * width;
      var x1 = width - x0;

      fishSwim(x0, x1);
    }, interval * 3);

}, 1500);
