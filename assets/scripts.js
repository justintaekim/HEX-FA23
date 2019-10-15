let schedule = {
  "design": {
    "hone": [
      {"time": "9:00 AM", "title": "Intro to Bullet Journaling", "speakers": "Amy Chen"},
      {"time": "10:00 AM", "title": "Intro to Adobe Animate", "speakers": "Jennie Guo, Emily Mistica"},
      {"time": "11:00 AM", "title": "Intro to Illustrator", "speakers": "Frances Yang, Angela Liu"}
    ],
    "explore": [
      {"time": "12:00 PM", "title": "Isometric Design", "speakers": "Valerie Tan"},
      {"time": "1:00 PM", "title": "Pixel Art", "speakers": "Hannah Kleidermacher"},
      {"time": "2:00 PM", "title": "Merchandise Design and Production", "speakers": "Fitty Liu"},
      {"time": "3:00 PM", "title": "Designing for Inclusivity", "speakers": "Ruhi Pudipeddi"},
      {"time": "4:00 PM", "title": "Slide Deck Design", "speakers": "Myles Domingo, Emily Zhong"}
    ]
  },
  "photo": {
    "hone": [
      {"time": "9:00 AM", "title": "Intro to Manual Photography", "speakers": "Clementine Mariani"},
      {"time": "10:00 AM", "title": "Intro to Lightroom", "speakers": "Kate Kim, Christian Kim"},
      {"time": "11:00 AM", "title": "Mobile Phonetography", "speakers": "Jessica Hsiao"}
    ],
    "explore": [
      {"time": "12:00 PM", "title": "Building Comfort with Clients", "speakers": "Vivian Tiet"},
      {"time": "1:00 PM", "title": "Photo Collages with Photoshop", "speakers": "Jago Pang"},
      {"time": "2:00 PM", "title": "Photography Ethics", "speakers": "Christian Kim"},
      {"time": "3:00 PM", "title": "Intro to 35mm Film", "speakers": "Calvin Tang"},
      {"time": "4:00 PM", "title": "Maintaining Your Creative Confidence and Fighting Imposter Syndrome", "speakers": "Renee Utter"}
    ]
  },
  "web": {
    "hone": [
      {"time": "9:00 AM", "title": "Intro to Adobe XD", "speakers": "Serena Chan"},
      {"time": "10:00 AM", "title": "Intro to Figma", "speakers": "Sonia Uppal"},
      {"time": "11:00 AM", "title": "Intro to HTML/CSS", "speakers": "Julia Wang, Bianca Lee"}
    ],
    "explore": [
      {"time": "12:00 PM", "title": "Web Accessibility", "speakers": "Emily Gosti"},
      {"time": "1:00 PM", "title": "How to Animate with anime.js", "speakers": "Brian Ho"},
      {"time": "2:00 PM", "title": "Responsive Web Design", "speakers": "Courtnie Chan"},
      {"time": "3:00 PM", "title": "Audio Visualizer with three.js", "speakers": "Alan Nguyen, Ethan Lee"},
      {"time": "4:00 PM", "title": "Intro to Processing and Processing Foundation", "speakers": "Lucy Song, Kevin Li"}
    ]
  }
};

function generateSchedule(day) {
  let honeList = schedule[day].hone;
  let exploreList = schedule[day].explore;

  // create outer hone div
  let honeDiv = document.createElement("div");
  honeDiv.setAttribute('id', 'hone');
  honeDiv.setAttribute('class', 'col-md-6 col-12 schedule-day');

  // create title div (hone/explore)
  let honeTitle = document.createElement("div");
  honeTitle.setAttribute('class', 'col-12 schedule-logistics');
  honeTitle.innerHTML = '<h4>Hone</h4>' + '<p>Barrows 56</p>';
  honeDiv.appendChild(honeTitle);

  // create schedule divs
  for (let i = 0; i < honeList.length; i++) {
    // create nodes
    let div = document.createElement("div");
    let { time, title, speakers } = honeList[i];
    div.setAttribute('class', 'col-12 schedule-block');
    div.innerHTML = '<p>' + time + '</p>' + '<h4>' + title + '</h4>' + '<b>' + speakers + '</b>';

    honeDiv.appendChild(div);
  }

  // create outer explore div
  let exploreDiv = document.createElement("div");
  exploreDiv.setAttribute('id', 'explore');
  exploreDiv.setAttribute('class', 'col-md-6 col-12 schedule-day');

  // create title div (hone/explore)
  let exploreTitle = document.createElement("div");
  exploreTitle.setAttribute('class', 'col-12 schedule-logistics');
  exploreTitle.innerHTML = '<h4>Explore</h4>' + '<p>Barrows 56</p>';
  exploreDiv.appendChild(exploreTitle);

  // create schedule divs
  for (let i = 0; i < exploreList.length; i++) {
    // create nodes
    let div = document.createElement("div");
    let { time, title, speakers } = exploreList[i];
    div.setAttribute('class', 'col-12 schedule-block');
    div.innerHTML = '<p>' + time + '</p>' + '<h4>' + title + '</h4>' + '<b>' + speakers + '</b>';

    exploreDiv.appendChild(div);
  }

  $('#hone').replaceWith(honeDiv);
  $('#explore').replaceWith(exploreDiv);
}

$(function() {
  $("#design").click(function(e) {
    e.preventDefault();
    generateSchedule("design");
  });

  $("#photo").click(function(e) {
    e.preventDefault();
    generateSchedule("photo");
  });

  $("#web").click(function(e) {
    e.preventDefault();
    generateSchedule("web");
  });
});

(function() {
  [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu__link'),
      setCurrent = function(ev) {
        ev.preventDefault();
        var item = ev.target.parentNode; // li
        // return if already current
        if (classie.has(item, 'menu__item--current')) {
          return false;
        }
        // remove current
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        // set current
        classie.add(item, 'menu__item--current');
      };
    [].slice.call(menuItems).forEach(function(el) {
      el.addEventListener('click', setCurrent);
    });
  });
})(window);
