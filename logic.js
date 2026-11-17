const galler = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  const items = track.querySelectorAll('.item');
  track.appendChild(items[0]);
});

prevBtn.addEventListener('click', () => {
  const items = track.querySelectorAll('.item');
  track.prepend(items[items.length - 1]);
});
