export interface NewsItemFace {
    status: string;
    totalResults: number;
    articles: (ArticlesEntity)[];
}
export interface ArticlesEntity {
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string | null;
    publishedAt: string;
    content: string;
}
export interface Source {
    id?: string | null;
    name: string;
}



