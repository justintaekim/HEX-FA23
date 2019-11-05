let heroTimeline = anime.timeline({

});

heroTimeline
.add({
  targets: 'h1',
  opacity: [0, 1],
  translateY: [-50, 0],
  delay: function(el, index) {
    return index * 150
  },
  duration: 2000,
  easing: 'easeOutExpo'
})

.add({
  targets: '.rounded',
  opacity: [0, 1],
  rotate: [-35, 0],
  translateY: [10, 0],
  translateX: [-30, 0],
  delay: function(el, index) {
    return index * 150
  },
  duration: 2000,
  easing: 'easeOutExpo'
}, "+1000")

.add({
  targets: '.subtitle div',
  opacity: [0, 1],
  translateY: [-40, 0],
  delay: function(el, index) {
    return index * 150
  },
  duration: 2000,
  easing: 'easeOutExpo'
}, "+1300")

.add({
  targets: '.suitcase_container img',
  opacity: [0, 1],
  translateY: [-50, 0],
  delay: function(el, index) {
    return index * 150
  },
  duration: 2500,
  easing: 'easeOutQuad'
}, "+1600")
