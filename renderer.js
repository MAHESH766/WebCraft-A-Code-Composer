// Define the showHTML function as before
function showHTML() {
  const htmlInput = document.getElementById('htmlInput');
  const cssInput = document.getElementById('cssInput');
  const jsInput = document.getElementById('jsInput');
  const outputFrame = document.getElementById('outputFrame');
  const outputDocument = outputFrame.contentWindow.document;

  // Clear previous content
  outputDocument.open();
  outputDocument.close();

  // Write HTML content
  outputDocument.write(`<html><head><style>${cssInput.value}</style></head><body>${htmlInput.value}</body></html>`);

  // Append and execute JavaScript
  const script = outputDocument.createElement('script');
  script.textContent = jsInput.value;
  outputDocument.body.appendChild(script);
}

// Call showHTML function initially to render the output
showHTML();

// Add event listeners to textareas to call showHTML function whenever input changes
document.getElementById('htmlInput').addEventListener('input', showHTML);
document.getElementById('cssInput').addEventListener('input', showHTML);
document.getElementById('jsInput').addEventListener('input', showHTML);
