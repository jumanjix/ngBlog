import { Immagine } from "./immagine";

export interface Album {
    id: number;
    titolo: string;
    immagini: Immagine[];
}