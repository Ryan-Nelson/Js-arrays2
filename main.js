const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat: ', cats[0]);

//const favoriteAnimal = 'cow';
//const favoriteAnimalArray = favoriteAnimal.split('');   //['c', 'o', 'w']
//console.log('favoriteAnimalArray', favoriteAnimalArray);

const favoriteAnimal = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimal.split(',');   //[cow, bear, dog, cat]
console.log('favoriteAnimalArray', favoriteAnimalArray);



const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('');
console.log('newNum', newNum);  // [12345]


const palChecker = (word) => {
    const reverseWord = word.split('').reverse().join('');  //splitting word, reversing letters, joining
    if (word === reverseWord) {
        console.log(`${word} IS a palindrome`)
    } else {
        console.log(`${word} is NOT a palindrome`);
    }
}
palChecker('hannah'); //yes
palChecker('racecar'); //yes
palChecker('maggie'); //no


let animals = ['dogs', 'dolphins', 'whales', 'giraffe'];

const lastItem = animals.pop(); // giraffe
const firstItem = animals.shift(); // dogs
animals.push('grizzly bear');
animals.unshift('baby hippo');  //['baby hippo', 'dogs', 'dolphins', 'whales', 'grizzly bear']
console.log('animals: ', animals);


for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}