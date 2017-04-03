const stringSplitter = (str, sep) => {

    let currentSplit = str.indexOf(sep);
    let currentString = str.slice(0, currentSplit);
    if (currentSplit === -1) {
        return [str]
    }

    let newString = str.slice(currentSplit + 1);
    return [currentString, ...stringSplitter(newString, sep)]

}

const aString = 'the brown fox jumped over the lazy dog';
const aSeperator = ' ';
stringSplitter(aString, aSeperator)


// base case = no seperator found

// recursion case = seperator found

// the brown fox jumped over the lazy dog = [the, brown, fox, ...]
