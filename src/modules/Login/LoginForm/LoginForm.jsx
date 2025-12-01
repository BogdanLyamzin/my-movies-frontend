import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

const LoginForm = ()=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = values => {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField register={register} rules={{required: "name required"}} name="name" label="Name" placeholder="Enter the name" error={errors.name} />
            <Button type="submit">Login</Button>
        </form>
    )
}

export default LoginForm;