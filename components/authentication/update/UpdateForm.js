import * as Yup from "yup";
import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { useRouter } from "next/router";
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AppContext from "../../../AppContext";
import api from "../../../db/backend";
import { toast } from "react-toastify";

export default function UpdateForm(props) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const globalState = useContext(AppContext);

  const UpdateSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: Yup.string().email("Email must be a valid email address"),
    password: Yup.string().min(7, "Too Short!"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
    validationSchema: UpdateSchema,
    onSubmit: async (data) => {
      const dataToSend = {};
      Object.keys(data).forEach((key) => {
        if (data[key] !== "" && key !== "firstName" && key !== "lastName") {
          dataToSend[key] = data[key];
        } else if (data[key] !== "")
          dataToSend.name = data.firstName + " " + data.lastName;
      });

      try {
        if (Object.keys(dataToSend).length !== 0) {
          const res = await api.patch("/users/me", dataToSend, {
            headers: { Authorization: `Bearer ${props.token}` },
          });
          globalState.setuser({
            user: res.data,
            token: globalState.state.user.token,
          });
          router.push("/dashboard/app");
          toast.success("! Profile Updated !");
        } else toast.error("At least enter one of the above fields");
      } catch (error) {
        toast.error(
          error.response?.data?.error
            ? error.response?.data?.error
            : "Something went wrong!"
        );
      }
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Update
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
