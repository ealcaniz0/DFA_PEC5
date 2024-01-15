export interface Movie {
    id: string;
    rank: number;
    title: string;
    thumbnail: string;
    rating: number;
    year: number;
    image: string;
    big_image: string;
    trailer: string;
    trailer_embed_link: string;
    trailer_youtube_id: string;
    description: string;
    genre: string[];
    director: string[];
    writers: string[];
    imdbid: string;
    imdb_link: string;
}