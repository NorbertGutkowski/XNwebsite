document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      window.location.href = 'https://example.com';
    }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
      window.location.href = 'https://example.com';
    }
  });

let devtoolsOpened = false;

setInterval(function () {
const before = new Date().getTime();
debugger;
const after = new Date().getTime();
if (after - before > 100) {
    if (!devtoolsOpened) {
    devtoolsOpened = true;
    window.location.href = 'https://example.com'; // przekierowanie
    }
}
}, 500);