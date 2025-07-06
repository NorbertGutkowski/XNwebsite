const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let pieces = [];
const numPieces = 60; // ile ikon na ekranie

// Załaduj ikony szachowe
const pieceImages = [
  'files/pawn.png',
  'files/knight.png',
  'files/bishop.png',
  'files/rook.png',
  'files/queen.png',
  'files/king.png'
].map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initPieces() {
  pieces = [];
  for (let i = 0; i < numPieces; i++) {
    const img = pieceImages[Math.floor(Math.random() * pieceImages.length)];
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 30 + 20, // rozmiar figurki
      speed: Math.random() * 0.5 + 0.3,
      img: img
    });
  }
}

function drawPieces() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let piece of pieces) {
    ctx.drawImage(piece.img, piece.x, piece.y, piece.size, piece.size);
    piece.y += piece.speed;
    if (piece.y > canvas.height) {
      piece.y = -piece.size;
      piece.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawPieces);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initPieces();
});

window.addEventListener('load', () => {
  resizeCanvas();
  initPieces();
  drawPieces();
});