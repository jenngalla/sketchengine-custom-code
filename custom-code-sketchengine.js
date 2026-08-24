// Create Help Button
const helpBtn = document.createElement("button");
helpBtn.innerHTML = "❓ Help";
helpBtn.style.position = "fixed";
helpBtn.style.bottom = "20px";
helpBtn.style.right = "20px";
helpBtn.style.zIndex = "9999";
helpBtn.style.padding = "10px 15px";
helpBtn.style.background = "#0078d4";
helpBtn.style.color = "white";
helpBtn.style.border = "none";
helpBtn.style.borderRadius = "8px";
helpBtn.style.cursor = "pointer";

// Create Help Panel
const helpPanel = document.createElement("div");
helpPanel.style.position = "fixed";
helpPanel.style.top = "0";
helpPanel.style.right = "-350px";
helpPanel.style.width = "320px";
helpPanel.style.height = "100%";
helpPanel.style.background = "white";
helpPanel.style.boxShadow = "-2px 0 10px rgba(0,0,0,0.2)";
helpPanel.style.padding = "20px";
helpPanel.style.zIndex = "10000";
helpPanel.style.transition = "right 0.3s ease";
helpPanel.style.overflowY = "auto";

helpPanel.innerHTML = `
  <h2>Help</h2>
  <p><strong>Getting Started</strong></p>
  <ol>
    <li>Upload your data.</li>
    <li>Select an analysis.</li>
    <li>Review the results.</li>
    <li>Export your report.</li>
  </ol>
  <button id="closeHelp">Close</button>
`;

// Add to page
document.body.appendChild(helpBtn);
document.body.appendChild(helpPanel);

// Open panel
helpBtn.addEventListener("click", () => {
  helpPanel.style.right = "0";
});

// Close panel
helpPanel.querySelector("#closeHelp").addEventListener("click", () => {
  helpPanel.style.right = "-350px";
});
