const hamburger = document.querySelector(".top_mobile");
const responsive = document.querySelector(".mobil_langs");
const closeButton = document.querySelector(".close");
const element = document.querySelector(".search_body_main");
const mobilMenu = document.querySelector(".mobil_bottom_box");
const mobilTitle = document.querySelectorAll(".mobil_box_title")
const icon = document.querySelectorAll(".arrow");
const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const closer = document.getElementsByClassName("close")[0];
const hambBar = document.querySelector(".bar");
const accTit = document.querySelectorAll('.acc_title');


hamburger.onclick = function () {
    select = document.querySelector(".mobil_select");
    select.classList.toggle("active");
};
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay:{
            delay:2000,
            disableOnInteraction: false
        },
        effect: 'slide', 
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
 
    });
});
document.addEventListener('DOMContentLoaded', function(){
    const mobilNews = new Swiper('.newMob', {
        loop: false,
        breakpoints:{
            320:{
                slidesPerView: 1
            },
            768:{
                slidesPerView:2
            }
        }
    })
})
document.addEventListener('DOMContentLoaded', function(){
    const searchIcon = document.querySelector(".search_icon");
    const searchOverlay = document.querySelector(".search-overlay");
    const closeSearch = document.querySelector(".closes");
    searchIcon.addEventListener("click", function () {
        searchOverlay.classList.add("active");
      });
      closeSearch.addEventListener("click", function () {
        searchOverlay.classList.remove("active");
      });
});
document.querySelector(".dostIcon").addEventListener("click", function() {
    document.querySelector(".app_box").innerHTML = "";
});


document.querySelectorAll('.hamburgertit').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const menuR = button.querySelector("#menu-rotate"); 
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      if (content.style.maxHeight) {
        content.style.maxHeight = null; 
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      };
      button.classList.toggle('active');
      menuR.classList.toggle("rotate");
    });
  });

document.querySelectorAll('.acc_title').forEach(tikla => {
    tikla.addEventListener('click', ()=>{
        const cont = tikla.nextElementSibling;
        cont.style.display = cont.style.display === 'block' ? 'none' : 'block';
        cont.classList.toggle('active');
    })
});

hambBar.onclick = function(){
    hambMenu = document.querySelector(".hamburgerMenu");
    hambMenu.classList.toggle("active");
}
btn.onclick = function(){
    modal.style.display = "block";
};
closer.onclick = function(){
    modal.style.display = "none";
};
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    };
};

responsive.onclick = function (e) {
    language = document.querySelector(".lang_list");
    language.classList.toggle("active");
};




mobilTitle.addEventListener('click', function () {
    if (open) {
        icon.className = '.arrow';
        icon.style.transform = "rotate(0deg)";
    } else {
        icon.className = '.arrow open';
        icon.style.transform = "rotate(180deg)"
    };
    open = !open;
});


document.addEventListener('DOMContentLoaded', function(){
    const kreditBar = document.getElementById('typeBox');
    const kreditMain = document.querySelector('.type_box');
    const amountInput = document.getElementById('loanAmountInput');
    const amountRange = document.getElementById('loanAmountRange');
    const termInput = document.getElementById('loanTermInput');
    const termRange = document.getElementById('loanTermRange');
    const monthlyPayment = document.getElementById('monthlyPayment');
    const totalPayment = document.getElementById('totalPayment');
    const typeTitle = document.getElementById('typeTitle');

    let interestRate = 0.099;

    function calculateLoan(){
        const principal = parseFloat(amountInput.value);
        const months = parseInt(termInput.value);

        if (principal > 0 && months > 0) {
            const monthlyRate = interestRate / 12;
            const monthly = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

            monthlyPayment.textContent = monthly.toFixed(2);
            totalPayment.textContent = (monthly * months).toFixed(2);
        }
    }

    kreditBar.addEventListener('click', function(){
        kreditMain.classList.toggle('show');
    });

    kreditMain.addEventListener('click', function(event){
        if (event.target.tagName === "SPAN") {
            const newInterest = event.target.getAttribute('data-interest');
            if (newInterest !== null) {
                interestRate = parseFloat(newInterest);
                typeTitle.innerHTML = event.target.innerHTML;
                calculateLoan();
            }
            kreditMain.classList.remove('show');
        }
    });

    amountInput.addEventListener('input', function(){
        amountRange.value = amountInput.value;
        calculateLoan();
    });

    amountRange.addEventListener('input', function(){
        amountInput.value = amountRange.value;
        calculateLoan();
    });

    termInput.addEventListener('input', function(){
        termRange.value = termInput.value;
        calculateLoan();
    });

    termRange.addEventListener('input', function(){
        termInput.value = termRange.value;
        calculateLoan();
    });

    calculateLoan();
});

// Valyuta mezennesi
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






 


