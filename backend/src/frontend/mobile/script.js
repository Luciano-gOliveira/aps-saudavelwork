    // Função para calcular o IMC e destacar a linha correspondente na tabela
    function calculateIMC() {
      const weight = parseFloat(document.getElementById("weight").value);
      const heightCM = parseFloat(document.getElementById("height").value);

      if (!isNaN(weight) && !isNaN(heightCM) && heightCM > 0) {
          // Converter a altura de centímetros para metros
          const height = heightCM / 100;

          const imc = weight / (height * height);
          document.getElementById("result-imc").textContent = imc.toFixed(2);

          // Limpar qualquer destaque anterior
          const tableRows = document.querySelectorAll("#imc-table tbody tr");
          for (const row of tableRows) {
              row.style.backgroundColor = "white";
              row.style.color = "black";
          }

          // Destacar a linha da tabela com base na classificação do IMC
          const table = document.getElementById("imc-table");
          const rows = table.getElementsByTagName("tr");
          for (let i = 1; i < rows.length; i++) {
              const cells = rows[i].getElementsByTagName("td");
              const lowerBound = parseFloat(cells[0].textContent.split(" ")[0]);
              const upperBound = parseFloat(cells[0].textContent.split(" ")[2]);
              if (imc >= lowerBound && imc <= upperBound) {
                  rows[i].style.backgroundColor = "#3d9bff";
                  rows[i].style.color = "white";
              }
          }
      } else {
          alert("Preencha os campos de peso e altura corretamente.");
      }
  }

  // Função para calcular a quantidade de água recomendada
  function calculateWaterIntake() {
      const weightWater = parseFloat(document.getElementById("weight-water").value);

      if (!isNaN(weightWater)) {
          const waterIntake = weightWater * 0.035; // Multiplicar o peso por 35 ml
          document.getElementById("result-water-intake").textContent = waterIntake.toFixed(2) + " litros por dia";
      } else {
          alert("Preencha o campo de peso corretamente.");
      }
  }

  // Adicione event listeners aos botões de cálculo
  document.getElementById("calculate-imc").addEventListener("click", calculateIMC);
  document.getElementById("calculate-water-intake").addEventListener("click", calculateWaterIntake);