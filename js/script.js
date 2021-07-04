window.onload = function () {
  const buttonPreview = document.querySelector('.button-preview');
  buttonPreview.onclick = previewHandler;
};

function previewHandler() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  fillBackgroundColor(canvas, context);

  const selectObj = document.querySelector('#shape');
  const index = selectObj.selectedIndex;
  const shape = selectObj[index].value;

  if (shape == 'squares') {
    for (let i = 0; i < 20; i++) {
      drawSquare(canvas, context);
    };
  } else if (shape == 'circles') {
    for (let i = 0; i < 20; i++) {
      drawCircles(canvas, context)
    };
  };
  drawText(canvas, context);
};

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
};

function drawSquare(canvas, context) {
  const w = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = 'lightblue';
  context.fillRect(x, y, w, w);
};

function drawCircles(canvas, context) {
  const r = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, r, 0, degreesToRadians(360), true);
  context.fillStyle = 'lightblue';
  context.fill();
};

function fillBackgroundColor(canvas, context) {
  const selectObj = document.querySelector('#background-color');
  const index = selectObj.selectedIndex;
  const backgroundColor = selectObj[index].value;
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
};

function drawText(canvas, context) {
  const selectObj = document.querySelector('#text-color');
  const inputText = document.querySelector('#text');

  const index = selectObj.selectedIndex;
  const textColor = selectObj[index].value;

  const text = inputText.value;

  context.font = "bold 5em sans-serif";
  context.fillStyle = textColor;
  context.align = 'center';
  context.fillText(text, 30, 120);
  console.log(1);
};