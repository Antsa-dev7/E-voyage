// import { http } from "../config/https";
// import { IArticleInput, IArticleResponse } from "../types/article.type"
// import { authenticateApi } from "../utils/utils";

// // export const getArticlesApi = async (): Promise<IArticlesResponse> => {
// //     const response = await http.get<IArticlesResponse>('articles', authenticateApi());
// //     return response.data
// // }

// export const getArticleApi = async (id: string): Promise<IArticleResponse> => {
//     const response = await http.get<IArticleResponse>('articles/' + id, authenticateApi());
//     return response.data
// }

// // export const createArticleApi = async (body: IArticleInput): Promise<IArticleResponse> => {
// //     const response = await http.post<IArticleResponse>('articles', body, authenticateApi()); 
// //     return response.data
// // } 

// export const deleteArticleApi = async (id: string): Promise<IArticleResponse> => {
//     const response = await http.delete<IArticleResponse>('articles/' + id, authenticateApi()); 
//     return response.data
// }

// export const editArticleApi = async (id: string, body: IArticleInput): Promise<IArticleResponse> => {
//     const response = await http.put<IArticleResponse>('articles/' + id, body, authenticateApi()); 
//     return response.data
// }