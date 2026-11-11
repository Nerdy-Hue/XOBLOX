/* Ixoblox Technologies: site scripts
   1. Animated agent queue in the hero
   2. Contact form (opens the visitor's email app) */
(function() {
  var tasks = [].slice.call(document.querySelectorAll('.task')),
    i = 0;

  function set(t, s) {
    t.className = 'task' + (s ? ' ' + s : '');
    t.querySelector('.tag').textContent = s === 'work' ? 'Working' : s === 'done' ? 'Done' : 'Waiting'
  }

  function tick() {
    if (i === tasks.length) {
      setTimeout(function() {
        tasks.forEach(function(t) {
          set(t, '')
        });
        i = 0;
        tick()
      }, 2200);
      return
    }
    var t = tasks[i];
    set(t, 'work');
    setTimeout(function() {
      set(t, 'done');
      i++;
      tick()
    }, 1100);
  }
  setTimeout(tick, 900);
  document.getElementById('f').addEventListener('submit', function(e) {
    e.preventDefault();
    var f = e.target;
    var body = 'Name: ' + f.n.value + '\nEmail: ' + f.e.value + '\n\n' + f.m.value;
    location.href = 'mailto:mhugotmalisa@gmail.com?subject=' + encodeURIComponent('Website enquiry from ' + f.n.value) + '&body=' + encodeURIComponent(body);
    document.getElementById('ok').textContent = 'Opening your email app to send this message.';
  });
})();
