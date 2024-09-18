import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { IArticleInput } from "../../types/article.type";
import { createArticle } from "../../actions/articles.action";
import Notification from "../../components/Notification";
import ArticleForm from "./ArticleForm";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmitArticle = async (values: IArticleInput) => {
    setLoading(true);
    try {
      // ------------- creation -------------
          await createArticle(values);
          navigate("/articles")
          setLoading(false);
        } catch (error){
          setError(error as string)
          setLoading(false);
        }
      }

  return (
    <div css={{ minHeight: "100vh", position: "relative" }} className="flexColumn">
      {loading && <LinearProgress css={{ height: 10, position: "absolute", top: 0, left: 0, right: 0}} className="stretchSelf" />}
      <h1>CreateArticle</h1>
      <ArticleForm
        onSubmit={handleSubmitArticle}
        loading={loading}
      />
      <Notification
        message={error}
        show={!!error}
        severity="error" 
      />
    </div>
  )
}

export default CreateArticle