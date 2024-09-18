import { useEffect, useState } from "react";
import { IArticle } from "../../types/article.type";
import { Fab, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { deleteArticle, getArticles } from "../../actions/articles.action";
import Notification from "../../components/Notification";
import { useNavigate } from "react-router-dom";
import { FiEdit2, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import { getCurrentFullName } from "../../utils/utils";

const Articles = ( ) => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const articles = await getArticles();
        setArticles(articles as IArticle[]);
        setLoading(false);
      } catch(error) {
        setError(error as string);
      }
    }
    init();
  }, [])

  const handleDeleteArticle = async (id: string) => {
    setLoading(true);
    try {
      const deletedArticle = await deleteArticle(id);
      const newArticle = articles.filter((article: IArticle) => article.id !== deletedArticle?.id);
      setArticles(newArticle);
      setLoading(false);
    } catch(error) {
      setError(error as string);
    }
  }

  const handleEditArticle = (id: string) => {
    navigate("/articles/edit/" + id)
  }

  const handleAddArticle = () => {
    navigate("/articles/create")
  }

  const handlePreview = (id: string) => {
    navigate("/articles/" + id)
  }
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.map((article: IArticle, index: number) => (
              <TableRow
                key={article.id + index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}} 
              >
                <TableCell component="th" scope="row">
                  {article.id}
                </TableCell>
                <TableCell align="right">
                  {article.get('title')}
                </TableCell>
                <TableCell component="th" scope="row">
                  {(article.has('author')) ? getCurrentFullName(article.get('author')) : "---"}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="info" onClick={() => handlePreview(article.id)}>
                    <FiEye />
                  </IconButton>
                  <IconButton color="info" onClick={() => handleEditArticle(article.id)}>
                    <FiEdit2 />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteArticle(article.id)}>
                    <FiTrash2 />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </TableContainer>
      <Notification
        message={error}
        show={!!error}
        severity="error" 
      />
      <Fab color="primary" aria-label="add" onClick={handleAddArticle}>
        <FiPlus /> 
      </Fab>
    </div>
  )
}

export default Articles;