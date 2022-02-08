import fs from 'fs';

const getLine = () => {
    let data = fs.readFileSync('./finalQuotes.csv', 'utf8')
    data = data.split('\n');
    return data[Math.floor(Math.random() * data.length)];
}

export const getRandomQuote = () => {   
    let text = getLine();
    
    text = text.split(',');
    return {
        text: text.slice(2).join(','),
        speaker: text[1]
    };
}
