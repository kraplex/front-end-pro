document.querySelector('.clickable').addEventListener('click', function(element) {
    var active = document.querySelector('.clickable .active');
    if (active) active.classList.remove('active');
    element.target.classList.add('active');
  });