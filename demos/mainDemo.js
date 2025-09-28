// Main Demo
import { runOCR } from "./ocrDemo.js";
import { fraudCheck } from "./fraudCheckDemo.js";
import { encryptData } from "./encryptionDemo.js";
import { validateWithAPI } from "./apiValidationDemo.js";

console.log("Case 1: 🟢 Green → Auto-Approve");
console.log("Case 2: 🟠 Amber → Needs Officer Review");
console.log("Case 3: 🔴 Red → Alert / Audit Required");
console.log("🚀 Starting Certificate Verification Demo...");

try {
  const filePath = "./demos/sample-certificate.png";

  // Step 1: Fraud Check
  const fraudStatus = fraudCheck(filePath);

  // Step 2: OCR Extraction
  const text = await runOCR(filePath);

  // Step 3: API Validation
  const apiStatus = validateWithAPI(text);

  // Step 4: Encryption
  const encrypted = encryptData(text);

  console.log("🔒 Encrypted Text:", encrypted.slice(0, 60), "...");
  console.log("✅ Final Decision:", fraudStatus, "/", apiStatus);

} catch (err) {
  console.error("❌ Error:", err.message);
}
