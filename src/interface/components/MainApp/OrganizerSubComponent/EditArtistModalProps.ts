import { ModalBoxProps } from "./ModalBoxProps";

export interface EditArtistModalProps extends ModalBoxProps {
    row_data: {
        artist_id: string;
        artist_name: string;
        artist_art?: any;
    };
    artists_indexes: any;
    artist_t_data_display: any;
    set_artist_t_data_display: any;
}
