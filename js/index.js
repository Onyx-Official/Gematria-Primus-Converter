let gP = new Map([
    [2, 'ᚠ'],
    [3, 'ᚢ'],
    [5, 'ᚦ'],
    [7, 'ᚩ'],
    [11, 'ᚱ'],
    [13, 'ᚳ'],
    [17, 'ᚷ'],
    [19, 'ᚹ'],
    [23, 'ᚻ'],
    [29, 'ᚾ'],
    [31, 'ᛁ'],
    [37, 'ᛄ'],
    [41, 'ᛇ'],
    [43, 'ᛈ'],
    [47, 'ᛉ'],
    [53, 'ᛋ'],
    [59, 'ᛏ'],
    [61, 'ᛒ'],
    [67, 'ᛖ'],
    [71, 'ᛗ'],
    [73, 'ᛚ'],
    [79, 'ᛝ'],
    [83, 'ᛟ'],
    [89, 'ᛞ'],
    [97, 'ᚪ'],
    [101, 'ᚫ'],
    [103, 'ᚣ'],
    [107, 'ᛡ'],
    [109, 'ᛠ']
]);

let gP1 = new Map([
    ['ᚠ', 2], // 2
    ['ᚢ', 3], // 3
    ['ᚦ', 5],// 5
    ['ᚩ', 7], // 7
    ['ᚱ', 11], // 11
    ['ᚳ', 13], // 13
    ['ᚷ', 17], // 17
    ['ᚹ', 19], // 19
    ['ᚻ', 23], // 23
    ['ᚾ', 29], // 29
    ['ᛁ', 31], // 31
    ['ᛄ', 37], // 37
    ['ᛇ', 41], // EO
    ['ᛈ', 43], // 43
    ['ᛉ', 47], // 47
    ['ᛋ', 53], // 53
    ['ᛏ', 59], // 59
    ['ᛒ', 61], // 61
    ['ᛖ', 67], // 67
    ['ᛗ', 71], // 71
    ['ᛚ', 73], // 73
    ['ᛝ', 79], // NG
    ['ᛟ', 83], // OE
    ['ᛞ', 89], // 89
    ['ᚪ', 97], // // 97
    ['ᚫ', 101], // AE
    ['ᚣ', 103], // 103
    ['ᛡ', 107], // IA
    ['ᛠ', 109] // EA
]);

let gP2 = new Map([
    [2, 'F'],
    [3, 'U'],
    [5, "TH"],
    [7, 'O'],
    [11, 'R'],
    [13, 'C'],
    [17, 'G'],
    [19, 'W'],
    [23, 'H'],
    [29, 'N'],
    [31, 'I'],
    [37, 'J'],
    [41, "EO"],
    [43, 'P'],
    [47, 'X'],
    [53, 'S'],
    [59, 'T'],
    [61, 'B'],
    [67, 'E'],
    [71, 'M'],
    [73, 'L'],
    [79, "NG"],
    [83, "OE"],
    [89, 'D'],
    [97, 'A'],
    [101, "AE"],
    [103, 'Y'],
    [107, 'IA'],
    [109, 'EA']
]);

let asciiTable = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 97, 61, 13, 89, 67, 2, 17, 23, 31, 37, 13, 73,
    71, 29, 7, 43, 13, 11, 53, 59, 3, 3, 19, 47, 103, 53
];

// TH EO NG OE  AE IA EA
function textToRunes(input)
{
    let encoded = "";

    let offset = 0;
    for (let i = 0; i < input.length; i++)
    {
        if (offset)
        {
            offset--;
            continue;
        }
        if (input[i] == ' ')
            encoded += ' ';
        else if (input[i] == 'T' && input[i + 1] == 'H') {
            offset++;
            encoded += gP.get(5);
        }
        else if(input[i] == 'E' && input[i + 1] == 'O') {
            offset++;
            encoded += gP.get(41);
        }
        else if((input[i] == 'N' && input[i + 1] == 'G') || (input[i] == 'I' && input[i + 1] == 'N' && input[i + 1] == 'G')) {
            offset++;
            encoded += gP.get(79);
        }
        else if((input[i] == 'I' && input[i + 1] == 'A') || (input[i] == 'I' && input[i + 1] == 'N' && input[i + 1] == 'O'))
            encoded += gP.get(107);
        else if (input[i] == 'E' && input[i + 1] == 'A')
            encoded += gP.get(109);
        else {
            encoded += gP.get(asciiTable[input[i].charCodeAt()]);
        }
    }
    return encoded;
}

function runeToValue(string)
{
    for (let rune of string)
    {
        return gP2.get(gP1.get(rune));
    }
}

document.getElementById("btn-convert").addEventListener("click", () => {
    const input = document.getElementById("inputArea").value;
    document.getElementById("outputArea").value = textToRunes(input.toUpperCase());
});