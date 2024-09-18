import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginInput } from "../../types/auth.types";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/form/Form";
import TextField from "../../components/form/fields/TextField";
import { loginSchema } from "../../validation/auth.validations";
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MUILink from "@mui/material/Link";
import { login } from "../../actions/auth.action";


const initialValues = {
  email:'',
  password:'',
}

const Login = () => {
  const navigate = useNavigate()

  const form = useForm<ILoginInput>({
    defaultValues: initialValues,
    resolver: zodResolver(loginSchema)

  });

  const { handleSubmit } = form;

  const _onSubmit: SubmitHandler<ILoginInput> = async (values) => {
    await login(values)
    navigate("/")
  }

  return (
    <div className="flexCenter flex1 stretchSelf">
      <Typography variant="h4" gutterBottom>
       Login
      </Typography>
      <div className="stretchSelf">
        <Stack spacing={2}>
          <Form form={form} onSubmit={handleSubmit(_onSubmit)}>
            <TextField
              label="Email"
              name="email"
              type="email"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
            />
          </Form>
          <Typography variant="body1">
            Don't have an account? <MUILink component={Link} to="/signup">Sign up</MUILink>
          </Typography>
        </Stack>
      </div>
    </div>  
  )
}

export default Login