import { input } from '../input';

const canItHold = (bagColor: string, searchColor: string) => {
    for (let x = 0; x < input.length; x++) {
        // Find bagColor in the list
        if (input[x].color == bagColor) {
            for (const insideBag of input[x].inside) {
                // Consider each child
                if (insideBag.color == searchColor) return true;
                if (canItHold(insideBag.color, searchColor)) return true; // don't return on false...keep searching
            }

            return false;
        }
    }

    return false; // reaching here means bagColor is not in the input
};

export const Day7Part1 = () => {
    let numContainShinyGold = 0;

    for (const bag of input) {
        numContainShinyGold += canItHold(bag.color, 'shiny gold') ? 1 : 0; // Each top-level parent eith can or can't
    }

    console.log(numContainShinyGold);
};
