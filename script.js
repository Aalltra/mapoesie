document.addEventListener('DOMContentLoaded', () => {
  const poemParagraphs = document.querySelectorAll('.poem p');
  
  poemParagraphs.forEach(p => {
    p.addEventListener('click', () => {
      p.classList.toggle('highlight');
    });
  });
});
