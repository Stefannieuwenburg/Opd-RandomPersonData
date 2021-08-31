document.querySelector('.landen').onclick = async () => {
  removeChild();
  const uniekeLanden = await uniekeItems(randomPersonData);
  uniekeLanden.forEach(item => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(item));
      document.querySelector('.ul').appendChild(li);
  });
}

document.querySelector('.steenbok-vrouwen').onclick = () => {
  removeChild();
  const steenbokVrouwen = randomPersonData
      .filter(data => (data.gender === 'female'))
      .filter(data => (data.age >= 30))
      .filter(data => (new Date(data.birthday.mdy).getMonth() === 11 && new Date(data.birthday.mdy).getDate() > 21) || (new Date(data.birthday.mdy).getMonth() === 0 && new Date(data.birthday.mdy).getDate() < 20));
  steenbokVrouwen.forEach(item => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`naam: ${item.name} ${item.surname}`));
      document.querySelector('.ul').appendChild(li);
  });
}

document.querySelector('.ouwe-creditcards').onclick = () => {
  removeChild();
  const oudeCreditCards = randomPersonData
      .filter(data => (data.age >= 18))
      .filter(data => (data.credit_card.expiration.substr(data.credit_card.expiration.length - 2, data.credit_card.expiration.length + 1) === (new Date().getFullYear() + 1).toString().substr(2, 4)))
      
      ;
     
  oudeCreditCards.forEach(item => {
      createElement(`${item.name} ${item.surname} tel: ${item.phone} creditcard: ${item.credit_card.number} verloopt op: ${item.credit_card.expiration}`)
  });
}

document.querySelector('.meeste-mensen').onclick = async () => {
  removeChild();
  const uniekeLanden = await uniekeItems(randomPersonData);
  uniekeLanden.forEach(item => {
      createElement(`${item} ${count(randomPersonData, item)}`)
  });
}


const createElement = (TextNode) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(TextNode));
  document.querySelector('.ul').appendChild(li);
}




const uniekeItems = (data) => {
  const items = data.map((item) => {
      return item.region;
  })
  return [...new Set(items)];
}

const removeChild = () => {
  while (document.querySelector('.ul').firstChild) {
      document.querySelector('.ul').removeChild(document.querySelector('.ul').firstChild);
  }
  while (document.querySelector('.region-buttons').firstChild) {
      document.querySelector('.region-buttons').removeChild(document.querySelector('.region-buttons').firstChild);
  }
}

const count = (x, y) => {
  countPersons = x.filter(data => (data.region === y));
  return countPersons.length;
}

