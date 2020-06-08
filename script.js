import { currencies } from './currencies.js';
const endpoint = 'https://api.exchangeratesapi.io/latest';

const form = document.querySelector('.convert-form');
const fromSelect = document.querySelector('.to-select');
const fromInput = document.querySelector('from-input');
const toSelect = document.querySelector('.from-select');
const toEl = document.querySelector('to-amount');

const ratesBase = {};

function createOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value='${currencyCode}'>${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

async function fetchRates(base = 'GBP') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
  if (!ratesBase[from]) {
    console.log(`We don't have ${from} to ${to} yet`);
    const rates = await fetchRates(from);
    console.log(rates);
    ratesBase[from] = rates;
  }
  const rate = ratesBase[from].rates[to];
  const convertedAmout = rate * amount;
  console.log(convertedAmout);
}
convert(100, 'CAD', 'USD');
const optionsHtml = createOptions(currencies);

fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;
