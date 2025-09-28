// Fraud Check Demo
import fs from "fs";

export function fraudCheck(filePath) {
  console.log("🔍 Running fraud detection on:", filePath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file is missing: ${filePath}`);
  }

  // Dummy fraud detection logic
  const suspicious = filePath.toLowerCase().includes("fake");
  if (suspicious) {
    console.log("🔴 Fraud Check: Suspicious document found!");
    return "Red";
  } else {
    console.log("🟢 Fraud Check: Document looks authentic.");
    return "Green";
  }
}
