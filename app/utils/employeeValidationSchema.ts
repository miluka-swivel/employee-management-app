import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required").min(6, "Minimum length is 6 characters").max(10, "Max length is 10 characters"),
    lastName: Yup.string().required("Last name is required").min(6, "Minimum length is 6 characters").max(10, "Max length is 10 characters"),
    email: Yup.string().required("Email is required").email("Invalid email address"),
    phone: Yup.string().required("Phone number is required").matches(/^^\+94[1-9]\d{8}$/, "This should be a valid Sri Lankan phone no"),
    gender: Yup.string().matches(/^^[FM]$/, "Inavalid gender option")
});