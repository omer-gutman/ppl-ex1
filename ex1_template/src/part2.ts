import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

export const countVowels: (s: string) => number = (S) => {
    const characters = stringToArray(S);
    const onlyVowesls = characters.filter(char => vowels.includes(char.toLocaleLowerCase()));
    return onlyVowesls.length;
}

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => undefined as any;;
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string =>  {
    return t.children.reduce((acc, child) =>  {
        return acc + " " + treeToSentence(child);
    }, t.root);
}
