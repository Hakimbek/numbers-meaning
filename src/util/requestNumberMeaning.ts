import { URL } from '../const/const.ts';

interface MeaningType {
    text: string;
    number: number;
    found: boolean;
    type: string;
}

export const requestNumberMeaning = async (number: string, type: string): Promise<string> => {
    try {
        const response = await fetch(`${URL}/${number}/${type}?json`);
        const meaning: MeaningType = await response.json();
        return meaning.text;
    } catch {
        return 'Something goes wrong! Try again!';
    }
}
