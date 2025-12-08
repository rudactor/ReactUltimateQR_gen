export function drawCustomQr(matrix, size, canvas, options = {}) {
  const ctx = canvas.getContext("2d");

  const pixelSize = Math.floor(canvas.width / size);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!matrix[r][c]) continue;

      ctx.fillRect(
        c * pixelSize,
        r * pixelSize,
        pixelSize,
        pixelSize
      );
    }
  }
}
