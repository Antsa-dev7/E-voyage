import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Card, LinearProgress, Typography } from "@mui/material";
import { getArticle } from "../../actions/articles.action";
import { IArticle } from "../../types/article.type";


const Article = () => {
  const [article, setArticle] = useState<IArticle | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return
    const init = async () => {
      try {
        setLoading(true);
        const article = await getArticle(id);
        setArticle(article as IArticle);
        setLoading(false);
      } catch(error) {
        setError(error as string);
      }
    }
    init();
  }, [id])

  return (
    <div css={{ minHeight: "100vh", position: "relative" }} className="flexColumn">
      {loading && <LinearProgress css={{ height: 10, position: "absolute", top: 0, left: 0, right: 0}} className="stretchSelf" />}
      <Card>
        <Typography>Title: {article?.get('title')} </Typography>
        <Typography>Content: {article?.get('content')} </Typography>
      </Card>
    </div>
  )
}

export default Article