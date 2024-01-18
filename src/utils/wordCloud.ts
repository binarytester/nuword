const { removeStopwords, porBr } = require("stopword");

//! Cleaning the text
const cleanText = (text: string) => {
    // Removing punctuations and spaces
    let textCleaned = text.trim().split(" ");
    textCleaned = textCleaned.map((word) =>
        word.replace(/[.,/#!$%^&*;:{}=\-_'`~()]/g, "")
    );
    const newString = removeStopwords(textCleaned, porBr);
    return newString;
};

//! Defining respective word weights
const weightWords = (text: string): [string[], number[]] => {
    const weights: number[] = [];
    const words: string[] = [];
    let count = 0;

    let k = 0;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (text[i] == text[j]) {
                count++;
            }
        }
        weights[k] = count;
        words[k] = text[i];
        k++;
        count = 0;
    }

    return [words, weights];
};

//! Removing duplicates
const removeDuplicates = (words: string[], weights: number[]) => {
    const wordMap = new Map();

    // Filtering and keeping only unique words
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const weight = weights[i];

        if (!wordMap.has(word)) {
            // If the word is not in the map, add it with the corresponding weight
            wordMap.set(word, weight);
        }
    }

    return wordMap;
};

//! Transforming Map to array
const mapToArray = (map: Map<string, number>) => {
    let wordArray: Array<[string, number]> = [];

    map.forEach((weight, word) => {
        wordArray.push([word, weight]);
    });

    // Return as an array
    return wordArray;
};

//! Creating a weight vector
const createWeightVector = (text: string): Array<[string, number]> => {
    let cleanedText = cleanText(text);
    let [words, weights] = weightWords(cleanedText);
    let withoutDuplicates = removeDuplicates(words, weights);
    let wordArray = mapToArray(withoutDuplicates);
    return wordArray;
};

export default createWeightVector;
