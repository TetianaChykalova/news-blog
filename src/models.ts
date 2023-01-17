export interface NewsItemFace {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    // featured: boolean;
    launches?: ({
        id: string;
        provider: string;
    } | null)[] | null;
    events?: (null)[] | null;
}
// interface LaunchesEntity {
//     id: string;
//     provider: string;
// }
