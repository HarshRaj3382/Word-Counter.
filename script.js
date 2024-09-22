
const textArea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count-display');

textArea.addEventListener('input', () => {
  const text = textArea.value.trim();
  const wordCount = text.split(/\s+/).length;
  wordCountDisplay.textContent = wordCount;
});