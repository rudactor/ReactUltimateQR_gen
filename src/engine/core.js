import QRCode from "qrcode-generator";

export function GenerateMatrix(text, correction = "M") {
  if (!text || text.length === 0) {
    return { matrix: [], size: 0 };
  }

  const allowedLevels = ["L", "M", "Q", "H"];
  const level = allowedLevels.includes(correction) ? correction : "M";

  const qr = QRCode(0, level);

  qr.addData(text);
  qr.make();

  const size = qr.getModuleCount();
  const matrix = [];

  for (let x = 0; x < size; x++) {
    matrix[x] = [];
    for (let y = 0; y < size; y++) {
      matrix[x][y] = qr.isDark(x, y);
    }
  }

  return { matrix, size };
}
