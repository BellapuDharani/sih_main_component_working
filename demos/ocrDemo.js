// OCR Demo
import Tesseract from "tesseract.js";

export async function runOCR(filePath) {
  console.log("📑 Extracting text with OCR from:", filePath);

  try {
    const result = await Tesseract.recognize(filePath, "eng");
    console.log("📄 OCR Extracted Text:", result.data.text.slice(0, 50), "...");
    return result.data.text;
  } catch (err) {
    console.error("❌ OCR Error:", err.message);
    return "";
  }
}
