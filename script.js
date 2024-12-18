// Sukuriame funkcija, kuri pradeda veikti, kai formoje įvedus duomenis paspaudžiamas "submit".
document.getElementById("froyoForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Įvestiems duomenims sukuriamas kintamasis.
  const input = document.getElementById("flavorsInput").value;

  // Išskaidome įvestį į masyvą, atskirties taškas (,), nuįmame nereikalingus tarpus nuo žodžių šonų ir padarome mažosiomis raidėmis.
  const flavors = input.split(",").map(flavor => flavor.trim().toLowerCase());

  // Skaičiuojame kiek kartų pasikartojo žodžiai.
  const flavorCounts = {};
  flavors.forEach(flavor => {
      if (flavor) {
          flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
      }
  });

  // Prisiskirime, kur talpinsime rezultatus.
  const resultsTableBody = document.querySelector("#resultsTable tbody");
  // Pašaliname prieš, tai buvusius rezultatus.
  resultsTableBody.innerHTML = ""; 

  // Sudedame žodžius ir rezultatus į lentelę.
  for (const [flavor, count] of Object.entries(flavorCounts)) {
    // Prisiskirime vietas html'e.
      const row = document.createElement("tr");
      const flavorCell = document.createElement("td");
      const countCell = document.createElement("td");
    // Apibrėžiame, kas turėtų būti išvestyje.
      flavorCell.textContent = capitalize(flavor);
      countCell.textContent = `${count} serving${count > 1 ? "s" : ""}`;
    // Pridedame naujas eilutes.
      row.appendChild(flavorCell);
      row.appendChild(countCell);
      resultsTableBody.appendChild(row);
  }

  // Nuimame class'e "hidden" nuo vietos, kur talpiname duomenis.
  document.getElementById("results").classList.remove("hidden");
});

// Funkcija, kuri pirmą pirmą žodžio raidę padaro didžiąja.
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
