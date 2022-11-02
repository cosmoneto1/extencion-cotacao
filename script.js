const elLoad = document.getElementById('load');
const elList = document.getElementById('list');

async function getData() {
  try {
    const options = { method: 'GET' };
    const response = await fetch(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL',
      options
    );

    return await response.json();
  } catch (error) {
    return null;
  }
}

function listLoad(result) {
  Object.entries(result).forEach(([key, value]) => {
    const text = `${value.code} - ${value.bid}`;
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = text;
    elList.appendChild(li);
  });

  elLoad.classList.add('d-none');
  elList.classList.remove('d-none');
}

window.addEventListener('load', async (event) => {
  const result = await getData();
  listLoad(result);
  console.log(result);
});

//  <li class="list-group-item">An item</li>
