// riskScoringDemo.js
// Simulates Risk Scoring (Green, Amber, Red)

function calculateRisk(data) {
  let score = 0;

  // Example scoring rules
  if (data.amount > 50000) score += 40;        // Large loan → higher risk
  if (!data.validGST) score += 30;            // Fake/invalid GST → risky
  if (data.editedDocument) score += 50;       // Edited/AI-generated docs → very risky
  if (data.locationMismatch) score += 20;     // Location mismatch → medium risk

  // Decision based on score
  if (score < 30) return "🟢 Green → Auto-Approve";
  if (score < 70) return "🟠 Amber → Needs Officer Review";
  return "🔴 Red → Alert / Audit Required";
}

// Demo inputs
const loanCases = [
  { amount: 20000, validGST: true, editedDocument: false, locationMismatch: false },
  { amount: 60000, validGST: true, editedDocument: false, locationMismatch: true },
  { amount: 40000, validGST: false, editedDocument: true, locationMismatch: true }
];

// Run demo
loanCases.forEach((caseData, index) => {
  console.log(`Case ${index + 1}:`, calculateRisk(caseData));
});
