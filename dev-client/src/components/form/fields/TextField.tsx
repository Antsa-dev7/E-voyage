import { FormHelperText, Stack, TextFieldProps, TextField as MUITextField } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    name: string;
} & TextFieldProps;

const TextField = ({ name, ...inputProps }: Props) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <Controller
            name={name}
            control={control} 
            render={({ field }) => (
                <Stack spacing={1}>
                    <MUITextField
                        variant="outlined"
                        error={!!errors?.[name]}
                        {...field}
                        {...inputProps}
                    />
                    {errors?.[name] && <FormHelperText error>{(errors as any)[name]?.message}</FormHelperText>}
                </Stack> 
            )}
        />
    )
}

export default TextField;