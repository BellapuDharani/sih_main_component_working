// API Validation Demo
export function validateWithAPI(certificateData) {
  console.log("🌐 Validating certificate with external API...");
  
  // Dummy business logic
  if (certificateData.includes("VALID")) {
    console.log("🟢 API Validation: Passed");
    return "Green";
  } else {
    console.log("🟠 API Validation: Needs Review");
    return "Amber";
  }
}
