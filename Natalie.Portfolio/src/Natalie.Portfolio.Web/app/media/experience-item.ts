import { IPiece } from './piece';

export interface IExperienceItem {
    year: string;
    name: string;
    performances: string[];
    pieces: IPiece[];
}