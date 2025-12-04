import { useEffect } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

const RegisterForm = ({requestErrors, isSubmitSuccess, submitForm}) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(()=> {
    if(requestErrors) {
        for(const key in requestErrors) {
            setError(key, {
                message: requestErrors[key],
            });
        }
    }
  }, [requestErrors, setError])

  useEffect(()=> {
    if(isSubmitSuccess) {
        reset();
    }
  }, [isSubmitSuccess, reset])

  const onSubmit = (values) => {
    submitForm(values);
  };
  console.log(errors)

  return (
    <form style={{width: "400px"}} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        rules={{ required: "email required" }}
        name="email"
        label="email"
        placeholder="Enter the email"
        error={errors.email}
      />
      <TextField
        register={register}
        rules={{ required: "password required" }}
        type="password"
        name="password"
        label="password"
        placeholder="Enter the password"
        error={errors.password}
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
