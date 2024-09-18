import Parse from "parse";
import { IArticleInput } from "../types/article.type";

const Article = Parse.Object.extend("Article");

export const getArticles = async (): Promise<Parse.Object[]> => {
    try {
        // const articles = await new Parse.Query(Article).include("author").find();
        // console.log('articles: ', articles);
        // const articleJson = articles.map((article) => article.toJSON())
        // console.log('articleJson: ', articleJson);

        const articles = await Parse.Cloud.run("getArticlesWithAuthor");
        console.log('articles: ', articles);

        return articles;
    } catch (error) {
        console.log('error: ', error);
        return Promise.reject(error);   
    }
}

export const getArticle = async (id: string): Promise<Parse.Object | undefined> => {
    try {
        const article = await new Parse.Query(Article)
        .equalTo("objectId", id)
        .first();

        if (!article) {
            throw new Error("Article not found");
        }

        // console.log('id: ', article.id);
        // console.log('createdAt: ', article.createdAt);
        // console.log('updatedAt: ', article.updatedAt);
        // console.log('title: ', article.get('title'));
        // console.log('--------------------');

        // const articleJson = article.toJSON();
        // console.log('articleJson id: ', articleJson.objectId);
        // console.log('articleJson createdAt: ', articleJson.createdAt);
        // console.log('articleJson updatedAt: ', articleJson.updatedAt);
        // console.log('articleJson title: ', articleJson.title);

        return article;
    } catch (error) {
        console.log('error: ', error); 

        return Promise.reject(error);   
    }
}

export const createArticle = async (values: IArticleInput): Promise<Parse.Object> => {
    try {
        const article = new Article();

        // const currentUser = await getCurrentUser();
        
        
        // article.set('author', currentUser);

        // const [comment1, comment2, comment3] = await Promise.all([
        //     createCommentByArticle("Greate article"),
        //     createCommentByArticle("I like it!"),
        //     createCommentByArticle("It's awesome"),
        // ])

        article.set('title', values.title);
        article.set('content', values.content);
        // article.set('comments', [comment1, comment2, comment3]);
        //  console.log('SaveArticle: ', comment1, comment2, comment3);

        const savedArticle = await article.save()

        return savedArticle;
    } catch (error) {
        console.log('error: ', error);
        return Promise.reject(error);   
    }
}

export const deleteArticle = async (id: string): Promise<Parse.Object | undefined> => {
    try {
        const article = await getArticle(id);

        if (!article) {
            throw new Error("Article not found")
        }
        const deletedArticle = await article.destroy();
        return deletedArticle;
    } catch (error) {
        console.log('error: ', error);
        return Promise.reject(error);   
    }
}

export const editArticle = async (id: string, values: IArticleInput): Promise<Parse.Object | undefined> => {
    try {
        const article = await getArticle(id);

        if (!article) {
            throw new Error("Article not found")
        }
 
        article.set('title', values.title);
        article.set('content', values.content);
        const updatedArticle = await article.save()
        return updatedArticle;
    } catch (error) {
        console.log('error: ', error);
        return Promise.reject(error);   
    }
}