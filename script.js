document.addEventListener('DOMContentLoaded', () => {
  // Toggle highlight on click for each poem paragraph
  const poemParagraphs = document.querySelectorAll('.poem p');
  
  poemParagraphs.forEach(p => {
    p.addEventListener('click', () => {
      p.classList.toggle('highlight');
    });
  });
});