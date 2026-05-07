function showPeritonitis() {

  document.getElementById("content").innerHTML = `

    <div class="card">

      <h2>PD Peritonitis Risk</h2>

      <label>
        <input type="checkbox" id="albumin">
        Low albumin
      </label>

      <label>
        <input type="checkbox" id="diabetes">
        Diabetes
      </label>

      <label>
        <input type="checkbox" id="prior">
        Prior peritonitis
      </label>

      <label>
        <input type="checkbox" id="hygiene">
        Poor hygiene
      </label>

      <button onclick="calculatePeritonitis()">
        Calculate Risk
      </button>

      <div id="riskResult"></div>

    </div>
  `;
}

function calculatePeritonitis() {

  let score = 0;

  if (document.getElementById("albumin").checked) score += 2;
  if (document.getElementById("diabetes").checked) score += 1;
  if (document.getElementById("prior").checked) score += 3;
  if (document.getElementById("hygiene").checked) score += 2;

  let risk = "Low Risk";

  if (score >= 8) {
    risk = "High Risk";
  } else if (score >= 4) {
    risk = "Moderate Risk";
  }

  document.getElementById("riskResult").innerHTML = `
    <div class="result">
      Score: ${score}<br><br>
      ${risk}
    </div>
  `;
}

function showKTV() {

  document.getElementById("content").innerHTML = `

    <div class="card">

      <h2>PD Kt/V Fixer</h2>

      <input type="number"
             id="ktv"
             step="0.1"
             placeholder="Weekly Kt/V">

      <label>
        <input type="checkbox" id="constipation">
        Constipation
      </label>

      <label>
        <input type="checkbox" id="missed">
        Missed exchanges
      </label>

      <label>
        <input type="checkbox" id="transport">
        High transporter
      </label>

      <button onclick="calculateKTV()">
        Generate Recommendations
      </button>

      <div id="ktvResult"></div>

    </div>
  `;
}

function calculateKTV() {

  let ktv = parseFloat(document.getElementById("ktv").value);

  let recs = [];

  if (isNaN(ktv)) {

    recs.push("Enter weekly Kt/V.");
  }

  else if (ktv >= 1.7) {

    recs.push("Current weekly Kt/V appears adequate.");
  }

  else {

    recs.push("Increase total PD dose.");
    recs.push("Increase exchange number.");

    if (document.getElementById("constipation").checked) {

      recs.push("Treat constipation aggressively.");
    }

    if (document.getElementById("missed").checked) {

      recs.push("Avoid missed exchanges.");
    }

    if (document.getElementById("transport").checked) {

      recs.push("Use shorter and more frequent dwells.");
    }
  }

  let html = "<ul>";

  recs.forEach(function(item) {

    html += "<li>" + item + "</li>";
  });

  html += "</ul>";

  document.getElementById("ktvResult").innerHTML = html;
}
