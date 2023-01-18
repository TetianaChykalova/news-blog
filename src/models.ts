export interface NewsItemFace {
    status: string;
    articles: (ArticlesEntity)[];
}
export interface ArticlesEntity {
    author: string
    authors: string
    excerpt: string
    country: string
    link: string
    media: string | null
    published_date: string
    summary: string
    title: string
}



