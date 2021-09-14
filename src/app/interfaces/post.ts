import { Commento } from "./commento";

export interface Post {
    id: number;
    titolo: string;
    contenuto: string;
    autore: string;
    imageUrl: string,
    commenti: Commento[];
}