document.addEventListener('DOMContentLoaded', function() {
    const typeQutu = document.getElementById('typeQutu');
    const aznInput = document.getElementById('aznInput');
    const euroInput = document.getElementById('euroInput');
    const leftSelect = document.getElementById('left');
    const rightSelect = document.getElementById('right');

    const exchangeRates = {
        "Nağd": {
            AZN: { AZN: 1, EURO: 0.56, RUB: 56.5 },
            EURO: { AZN: 1.79, EURO: 1, RUB: 101.13 },
            RUB: { AZN: 0.02, EURO: 0.01, RUB: 1 }
        },
        "Nağdsız": {
            AZN: { AZN: 1, EURO: 0.58, RUB: 55.87 },
            EURO: { AZN: 1.78, EURO: 1, RUB: 99.39 },
            RUB: { AZN: 0.02, EURO: 0.01, RUB: 1 }
        },
        "Kredit": {  
            AZN: { AZN: 1, EURO: 0.56, RUB: 55.87 },
            EURO: { AZN: 1.80, EURO: 1, RUB: 100.38 },
            RUB: { AZN: 0.02, EURO: 0.01, RUB: 1 }
        }
    };

    function calculate() {
        const amount = parseFloat(aznInput.value) || 0;
        const selectedType = typeQutu.value;
        const fromCurrency = leftSelect.value; 
        const toCurrency = rightSelect.value; 

        // 🛑 Səhv varsa, konsolda göstər
        console.log("Seçilən Tip:", selectedType);
        console.log("Seçilmiş valyutalar:", fromCurrency, "->", toCurrency);

        if (!exchangeRates[selectedType]) {
            console.error("Səhv: Seçilən tip üçün məzənnə tapılmadı!");
            return;
        }

        const rate = exchangeRates[selectedType][fromCurrency][toCurrency];

        if (!rate) {
            console.error("Səhv: Məzənnə tapılmadı!", fromCurrency, "->", toCurrency);
            return;
        }

        const convertedAmount = amount * rate;
        euroInput.value = convertedAmount.toFixed(2);
    }

    aznInput.addEventListener('input', calculate);
    leftSelect.addEventListener('change', calculate);
    rightSelect.addEventListener('change', calculate);
    typeQutu.addEventListener('change', calculate);
});
