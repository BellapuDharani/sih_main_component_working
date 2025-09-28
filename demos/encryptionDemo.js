// Encryption Demo
import crypto from "crypto";

export function encryptData(data) {
  console.log("🔐 Encrypting extracted text...");
  const cipher = crypto.createCipher("aes-256-cbc", "secret-key");
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}
