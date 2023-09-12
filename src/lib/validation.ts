import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  postal_code: yup
    .string()
    .required("Postal Code is required")
    .matches(/^\d{6}$/, "Postal Code must be a 6-digit number"),
  country: yup.string().required("Country is required"),
  cashDelivery: yup.boolean().required("Please Select!")
});
