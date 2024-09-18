import { z } from "zod";
import { articleSchema } from "../validation/article.validations";

export interface IArticle extends Parse.Object {
    id: string;
    title: string;
    content: string;
}

export type IArticleInput = z.infer<typeof articleSchema>

// export interface  IArticlesResponse {
//     success: boolean;
//     articles: IArticle[];
// }

// export interface  IArticleResponse {
//     success: boolean;
//     article: IArticle;
// }

// export interface IArticleResponse {
//     success: boolean;
//     article: IArticle;
// }
