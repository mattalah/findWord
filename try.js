const isRealWord = (world) => /^[a-z]*$/.test(world); // check only alphabetic world

const findLongest = (text) => text.sort((a, b) => b.length - a.length);// find longest word in the given input

const isSameHeight = (worlds) => worlds[0].length === worlds[1].length;// check if we have 2 words with the same height

const countVowels = (world) => {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    let count = 0;
    for (let i = 0; i < world.length; i++) {
        if (vowels.includes(world[i])) {
            count++;
        }
    }
    return count;
}
const getHeightVowel = (worlds) => worlds.filter(a => a.length === worlds[0].length).sort((a, b) => countVowels(b) - countVowels(a))[0]

const main = (text) => {
    const sortArray = findLongest(text.split(/,| /).filter(isRealWord));
    if (!isSameHeight(sortArray)) return sortArray[0];
    return getHeightVowel(sortArray)
}

console.log(main(" everything1 Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers 1515azda 515123&é&a"));
