document.getElementById('explosion1').addEventListener('click', function (e) {
    var t = e.target;
    t.classList.add('animate');
    t.addEventListener('animationend', function () {
      return t.classList.remove('animate');
    });
});

document.getElementById('explosion2').addEventListener('click', function (e) {
    var t = e.target;
    t.classList.add('animate');
    t.addEventListener('animationend', function () {
      return t.classList.remove('animate');
    });
});