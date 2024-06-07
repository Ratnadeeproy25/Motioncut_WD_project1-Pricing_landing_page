const currencyWrap = document.querySelectorAll('.currency-wrap');
const links = document.querySelectorAll('a');
const prices = document.querySelectorAll('.price');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const activeLink = link.closest('.currency-wrap').querySelector('.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }
    link.classList.add('active');
    const currency = link.getAttribute('currency');
    updatePrices(currency);
  });
});

const data = {
  "INR": {
    "Basic": "499",
    "Standard": "999",
    "Team": "1499"
  },
  "USD": {
    "Basic": "6.00",
    "Standard": "12.00",
    "Team": "18.00"
  },
  "CAD": {
    "Basic": "8.00",
    "Standard": "16.00",
    "Team": "24.00"
  }
};

function updatePrices(currency) {
  const planTypes = ["Basic", "Standard", "Team"];
  prices.forEach((price, index) => {
    price.textContent = `${currency} ${data[currency][planTypes[index]]}`;
  });
}
