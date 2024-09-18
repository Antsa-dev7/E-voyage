import { zodResolver } from "@hookform/resolvers/zod";
import { ISignUpInput } from "../../types/auth.types";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/form/Form";
import TextField from "../../components/form/fields/TextField";
import { signUpSchema } from "../../validation/auth.validations";
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MUILink from "@mui/material/Link";
import { signUp } from "../../actions/auth.action";


const initialValues = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  passwordConfirmation:''
}

const SignUp = () => {
  const navigate = useNavigate()

  const form = useForm<ISignUpInput>({
    defaultValues: initialValues,
    resolver: zodResolver(signUpSchema)

  });

  const { handleSubmit } = form;

  const _onSubmit: SubmitHandler<ISignUpInput> = async (values) => {
    await signUp(values);
    navigate("/login");
  }

  return (
    <div className="flexCenter flex1 stretchSelf">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <div className="stretchSelf">
        <Stack spacing={2}>
          <Form form={form} onSubmit={handleSubmit(_onSubmit)}>
            <TextField
              label="First Name"
              name="firstName"
            />
            <TextField
              label="Last Name"
              name="lastName"
            />
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
            <TextField
              label="Password Confirmation"
              name="passwordConfirmation"
              type="password"
            />
          </Form>
          <Typography variant="body1">
            Already have an account? <MUILink component={Link} to="/login">Login</MUILink>
          </Typography>
        </Stack>
      </div>
    </div>  
  )
}

export default SignUp