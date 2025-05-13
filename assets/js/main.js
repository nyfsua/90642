const preview = document.getElementById('preview');
const img    = preview.querySelector('img');

document.querySelectorAll('.grid-item').forEach(link => {
  link.addEventListener('mouseenter', () => {
    img.src = link.dataset.image;
    preview.style.opacity = 1;
  });
  link.addEventListener('mousemove', e => {
    preview.style.top  = e.clientY + 'px';
    preview.style.left = e.clientX + 'px';
  });
  link.addEventListener('mouseleave', () => {
    preview.style.opacity = 0;
    img.src = '';
  });
});

link.addEventListener('click', e => {
    if (window.matchMedia('(hover: none)').matches) {
      e.preventDefault();
      preview.classList.toggle('show');
    }
  });
  