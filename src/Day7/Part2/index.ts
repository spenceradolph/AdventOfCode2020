import { input } from '../input';

const numBags = (searchColor: string): number => {
    let numInsideThisBag = 0;

    for (const bag of input) {
        // Find searchColor in master list
        if (bag.color == searchColor) {
            for (const insideBag of bag.inside) {
                numInsideThisBag += insideBag.number;
                numInsideThisBag += numBags(insideBag.color) * insideBag.number;
            }

            return numInsideThisBag;
        }
    }

    return -1; // could not find the searchColor
};

export const Day7Part2 = () => {
    console.log(numBags('shiny gold'));
};
