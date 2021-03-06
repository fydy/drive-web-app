import { Item } from "../Item";

export interface ArtistItem extends Item {
    artistid: string;
    artist_name: string;
    artist_art?: {
        b64?: string,
        mimeType?: string
    };
}