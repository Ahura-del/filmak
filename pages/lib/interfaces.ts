export interface DataType {
  item: {
    country: string;
    genres: string[];
    id: number;
    images: string[];
    poster: string;
    title: string;
    year: string;
    imdb_rating: string;
  };
  clickHandler:(id:number)=>void
}

export interface ResponseType {
  res: {
    item: {
      country: string;
      genres: string[];
      id: number;
      images: string[];
      poster: string;
      title: string;
      year: string;
      imdb_rating: string;
    };
    metadata: {
      current_page: string;
      page_count: number;
      per_page: number;
      total_count: number;
    };
  };
}
