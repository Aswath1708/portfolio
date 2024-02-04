import { toast } from "react-toastify";

export const successToast = () => toast.success("Your message was received!",{position:"top-center",autoClose:3000,theme: "colored"});