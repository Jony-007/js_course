const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
    return (scoreOne + scoreTwo + scoreThree) / 3;
};

const avgDolphin = calcAverage(85, 54, 81);
const avgKoalas = calcAverage(23, 34, 47);

console.log(`avgDolphin ${avgDolphin} and AvfKoalas ${avgKoalas}`);
const checkWinner = function (avgDolphin, avgKoalas) {
    if (avgDolphin >= avgKoalas * 2) {
        return `Dolphin wins ${avgDolphin} vs ${avgKoalas}`;
    } else if (avgKoalas >= avgDolphin * 2) {
        return `Koala wins ${avgKoalas} vs ${avgDolphin}`;
    } else {
        return `No one wins`;
    }
};

console.log(checkWinner(avgDolphin, 400));
