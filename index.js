const secretsSanta = [
  ['Lucineide', '0'],
  ['João Pedro', '0'],
  ['Michele', '0'],
  ['Luiz', '0']
];

const copySecretsSanta = secretsSanta.slice();

const getRandomValue = (array, excludeValue) => {
  let filteredArray = array.filter(([value]) => value != excludeValue);
  const randomIndex = Math.floor(Math.random() * filteredArray.length);
  return filteredArray[randomIndex][0];
};

const newSecretsSanta = secretsSanta.map((secretSanta) => {
  const element = getRandomValue(copySecretsSanta, secretSanta[0]);
  const index = copySecretsSanta.findIndex(([value]) => value === element);
  copySecretsSanta.splice(index, 1);
  
  return [secretSanta[0], secretSanta[1] = element];
});

//console.table(newSecretsSanta);
