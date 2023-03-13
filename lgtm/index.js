const wordlist = require('wordlist-english');
const englishWords = wordlist['english/10'];

function getWord(letter, wordlist) {
    filteredWords = wordlist.filter(x => x[0] == letter);

    randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

main = async function (context, _) {
    context.log('function triggered');

    const startingLetters = [ 'l', 'g', 't', 'm'];

    const words = startingLetters.map(letter => getWord(letter, englishWords));

    const wordsUpperCased = words.map(word => word[0].toUpperCase().concat(word.slice(1, word.length)));
    
    const responseMessage = wordsUpperCased.join(' ');

    context.res = {
        status: 200,
        body: responseMessage
    };
}

module.exports = main;