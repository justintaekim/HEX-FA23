let schedule = {
  "design": {
    "hone": {
      "location": "Barrows 56",
      "schedule": [
        {"time": "9:00 AM", "title": "Intro to Bullet Journaling", "speakers": "Amy Chen", "description": "This workshop is for anybody and everybody who's every tried or wanted to start bullet journaling. Learn the basics of bujo and techniques to customize and optimize your journal.", "required": "A fresh notebook, or spare paper, pens (optional: highlighters, brush pens)"},
        {"time": "10:00 AM", "title": "Intro to Adobe Animate", "speakers": "Jennie Guo, Emily Mistica", "description": "", "required": "Adobe Animate, paper"},
        {"time": "11:00 AM", "title": "Intro to Illustrator", "speakers": "Frances Yang, Angela Liu", "description": "In this demo-oriented workshop, we'll teach you the basics of Adobe Illustrator (pen tool, shapes, pathfinder) and how to use them to make vector images! We recommend that you have Illustrator downloaded on your computer prior to coming so you can follow along~!", "required": "Adobe Illustrator"}
      ]
    },
    "explore": {
      "location": "Barrows 56",
      "schedule": [
        {"time": "12:00 PM", "title": "Isometric Design", "speakers": "Valerie Tan", "description": "Learn how to create isometric illustrations to give some depth to your work! This workshop introduces the building blocks of isometric design, its different applications, and a step-by-step tutorial. Anyone with knowledge of basic Illustrator tools would be great for this workshop!", "required": "Adobe Illustrator"},
        {"time": "1:00 PM", "title": "Pixel Art", "speakers": "Hannah Kleidermacher", "description": "Learn about the history and basics of pixel art (hint: it's not just for video games)!", "required": "Any program that can do antialiased art: Aseprite, MSPaint, Photoshop, etc"},
        {"time": "2:00 PM", "title": "Merchandise Design and Production", "speakers": "Fitty Liu", "description": "Curious about how to get your artwork from Photoshop onto everyone's laptops and water bottles? In this workshop, I'll be teaching you the basics of rendering designs for various merchandise including stickers, keychains, and buttons, as well as walking you through the steps of the post-production process.", "required": ""},
        {"time": "3:00 PM", "title": "Designing for Inclusivity", "speakers": "Ruhi Pudipeddi", "description": "Design can't be appreciated universally unless it is accessible to everyone! We'll discuss general guidelines, specific processes, and develop a toolkit for evaluating and adjusting toward inclusive design in order to accomodate anyone who wants to admire your work.", "required": "Adobe Illustrator"},
        {"time": "4:00 PM", "title": "Slide Deck Design", "speakers": "Myles Domingo, Emily Zhong", "description": "The best slide decks are ones that can convey information, and too often information is lost due to bad (or negligent) design. Learn how to create professional, delightful, and well-designed slide decks at this workshop! We'll be teaching how to apply visual design concepts directly to slide decks to make them more engaging.", "required": "Google Slides"}
      ]
    }
  },
  "photo": {
    "hone": {
      "location": "Barrows 155",
      "schedule": [
        {"time": "10:00 AM", "title": "Intro to Lightroom", "speakers": "Stephen Fong", "description": "This is an entry-level (no prior experience needed!), demo-orietnated workshop on the basics of editing a RAW file on Adobe Lightroom. The lesson will cover how to read a histogram, using sliders and tools, adjusting color, and everything else you need to know to get started with post-processing; come with Lightroom Classic downloaded on your computer!", "required": "Adobe Lightroom"},
        {"time": "11:00 AM", "title": "Photo Collages with Photoshop", "speakers": "Jago Pang", "description": "Editing photos is not only limited to the photos themselves, but also using them in making compositions or collages.  So come and learn the basics of collaging and create your very own aesthetic ~vaporwave~ collages using photoshop!", "required": "Adobe Photoshop, Google Drive"}
      ]
    },
    "explore": {
      "location": "Hearst Annex B5",
      "schedule": [
        {"time": "12:00 PM", "title": "Intro to 35mm Film", "speakers": "Calvin Tang", "description": "Film photography can feel like a daunting vintage world to enter, especially in the age of digital sensors and complex software. Come learn what you need to get started with 35mm photography!", "required": ""},
        {"time": "1:00 PM", "title": "Mobile Phonetography", "speakers": "Jessica Hsiao", "description": "The best camera is the one you have, and for many people that's their phone. In this workshop, you'll learn how to take and edit Instagram-worthy photos using just your smartphone.", "required": "Your phone, Lightroom Mobile, VSCO"},
        {"time": "2:00 PM", "title": "Intro to Manual Photography", "speakers": "Clementine Mariani", "description": "", "required": "Optional: DLSR camera"},
        {"time": "3:00 PM", "title": "Maintaining Your Creative Confidence and Fighting Imposter Syndrome", "speakers": "Renee Utter", "description": "", "required": ""}
      ]
    }
  },
  "web": {
    "hone": {
      "location": "Barrows 56",
      "schedule": [
        {"time": "9:00 AM", "title": "Intro to Adobe XD", "speakers": "Serena Chan", "description": "Learn the basics of Experience Design and how to bring your mobile and web prototypes to life using Adobe XD.", "required": "Adobe XD"},
        {"time": "10:00 AM", "title": "Intro to Figma", "speakers": "Sonia Uppal", "description": "Ever wondered how User Interface mockups were made? Want more experience with User Experience and Interaction Design? Come out and learn the basics of Prototyping UIs on Figma! No prior experience needed.", "required": "Figma (student account)"},
        {"time": "11:00 AM", "title": "Intro to HTML/CSS", "speakers": "Julia Wang, Bianca Lee", "description": "Ever wanted the ability to make your own unique and personalized website? Come out and learn the basics of HTML and CSS, the foundational languages of the web! We will teach you what it takes to create a website from scratch.", "required": "Laptop, text editor (ie. atom, vscode, sublime), Google Chrome"}
      ]
    },
    "explore": {
      "location": "Barrows 56",
      "schedule": [
        {"time": "12:00 PM", "title": "Web Accessibility", "speakers": "Emily Gosti", "description": "", "required": "Laptop"},
        {"time": "1:00 PM", "title": "How to Animate with anime.js", "speakers": "Brian Ho", "description": "", "required": "Laptop"},
        {"time": "2:00 PM", "title": "Responsive Web Design", "speakers": "Courtnie Chan", "description": "", "required": "Laptop, text editor (ie. atom, vscode, sublime)"},
        {"time": "3:00 PM", "title": "Audio Visualization with three.js", "speakers": "Alan Nguyen, Ethan Lee", "description": "", "required": "Laptop, text editor (ie. atom, vscode, sublime)"},
        {"time": "4:00 PM", "title": "Intro to Processing and Processing Foundation", "speakers": "Lucy Song, Kevin Li", "description": "", "required": "Processing, some coding background"}
      ]
    }
  }
};

function generateSchedule(day) {
  let hone = schedule[day].hone;
  let explore = schedule[day].explore;
  let honeList = hone.schedule;
  let exploreList = explore.schedule;

  // create outer hone div
  let honeDiv = document.createElement("div");
  honeDiv.setAttribute('id', 'hone');
  honeDiv.setAttribute('class', 'col-md-6 col-12 schedule-day');

  // create title div (hone/explore)
  let honeTitle = document.createElement("div");
  honeTitle.setAttribute('class', 'col-12 schedule-logistics');
  honeTitle.innerHTML = '<h4>Hone</h4>' + '<p>' + hone.location + '</p>';
  honeDiv.appendChild(honeTitle);

  // create schedule divs
  for (let i = 0; i < honeList.length; i++) {
    // create nodes
    let div = document.createElement("div");
    let { time, title, speakers, description, required } = honeList[i];
    div.setAttribute('class', 'col-12 schedule-block');
    div.innerHTML = '<p>' + time + '</p>' + '<h4>' + title + '</h4>' + '<b>' + speakers + '</b>';

    if (description !== "") {
      div.innerHTML += '<p class="description">' + description + '</p>';
    }

    if (required !== "") {
      div.innerHTML += '<p class="required">Necessary Materials: ' + required + '</p>';
    } else {
      div.innerHTML += '<p class="required">Necessary Materials: N/A</p>';
    }

    honeDiv.appendChild(div);
  }

  // create outer explore div
  let exploreDiv = document.createElement("div");
  exploreDiv.setAttribute('id', 'explore');
  exploreDiv.setAttribute('class', 'col-md-6 col-12 schedule-day');

  // create title div (hone/explore)
  let exploreTitle = document.createElement("div");
  exploreTitle.setAttribute('class', 'col-12 schedule-logistics');
  exploreTitle.innerHTML = '<h4>Explore</h4>' + '<p>' + explore.location + '</p>';
  exploreDiv.appendChild(exploreTitle);

  // create schedule divs
  for (let i = 0; i < exploreList.length; i++) {
    // create nodes
    let div = document.createElement("div");
    let { time, title, speakers, description, required } = exploreList[i];
    div.setAttribute('class', 'col-12 schedule-block');
    div.innerHTML = '<p>' + time + '</p>' + '<h4>' + title + '</h4>' + '<b>' + speakers + '</b>';

    if (description !== "") {
      div.innerHTML += '<p class="description">' + description + '</p>';
    }

    if (required !== "") {
      div.innerHTML += '<p class="required">Necessary Materials: ' + required + '</p>';
    } else {
      div.innerHTML += '<p class="required">Necessary Materials: N/A</p>';
    }

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
