import { IArticle, IArticleInput } from "../../types/article.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import TextField from "../../components/form/fields/TextField";
import Form from "../../components/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { articleSchema } from "../../validation/article.validations";

const initialValues = {
  title:'',
  content:'',
}

type Props = {
  onSubmit: (values: IArticleInput) => void;
  article?: IArticle | null
  loading?: boolean; 
}

const ArticleForm = ({ onSubmit, loading, article }:Props) => {

  const form = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(articleSchema)

  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
  if (!article) return;
  reset({
    title: article.get('title'),
    content: article.get('content'),
    })
  }, [article, reset])

  const _onSubmit: SubmitHandler<IArticleInput> = (values) => {
    onSubmit(values);
    reset(initialValues);
  }

  return (
    <Form form={form} onSubmit={handleSubmit(_onSubmit)} loading={loading}>
      <TextField
        label="Title"
        name="title"
      />
      <TextField
        label="Content"
        name="content"
        multiline
        maxRows={4}
      />
    </Form>
  )
}

export default ArticleForm;