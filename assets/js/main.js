['insta', 'git', 'telegram', 'twitter', 'vimeo', 'mail'].forEach(function(name) {
  var el = document.getElementById(name);
  if (!el) return;
  var targets = [document.body, document.querySelector('header')];
  el.addEventListener('mouseenter', function() {
    targets.forEach(function(t) { t.classList.add('b-' + name); });
  });
  el.addEventListener('mouseleave', function() {
    targets.forEach(function(t) { t.classList.remove('b-' + name); });
  });
});
