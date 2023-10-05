const input1 = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';
const input2 = 'Longest words are “everything” and “experience”, but the second has the most vowels';
const input3 = 'The time limit should be 5-10 minutes';
const input4 = 'The final code (one file only, pure JS) should be uploaded on a public GitHub repository';
const input5 = 'Along with the code, you will also record a video where you will share your screen and verbally explain how you would test your code for relevant scenarios against a set of inputs. You don’t need to explain the code itself, just the test scenarios. The video should not be longer than 1 minute.';
const input6 = 'You will be evaluated for both correctness, proper requirement understanding and presentation abilities.';
const nonVowelsRegex = /[^aeiou]/g;

const filteredInput = input1.replaceAll(/[^A-z ]/g, '');
const words = filteredInput.split(' ');
const longestWords = words.reduce((acc, cur) => {
    if (cur.length > acc.length) {
        return cur;
    }

    if (cur.length < acc.length) {
        return acc;
    }

    if (cur.replaceAll(nonVowelsRegex, '').length >= acc.replaceAll(nonVowelsRegex, '').length ) {
        return cur;
    }

    if (cur.replaceAll(nonVowelsRegex, '').length < acc.replaceAll(nonVowelsRegex, '').length ) {
        return acc;
    }
}, '');

console.log(longestWords);