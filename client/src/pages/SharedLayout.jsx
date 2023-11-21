import Navbar from "../components/Navbar.jsx";
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

export const loader = async () => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { user },
    } = await axios("/api/v1/users/current-user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return user;
  } catch (error) {
    console.log(error?.response?.data?.msg);
    return null;
  }
};

const SharedLayout = ({ isDarkThemeEnabled }) => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const revalidator = useRevalidator();

  const [isDarkTheme, setisDarkTheme] = useState(isDarkThemeEnabled);
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setisDarkTheme(newDarkTheme);
    if (newDarkTheme) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
    localStorage.setItem("dark-theme", newDarkTheme);
  };

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Déconnexion réussie");
    revalidator.revalidate();
    navigate("/");
  };
  return (
    <>
      <Navbar
        logout={logout}
        user={user}
        toggleDarkTheme={toggleDarkTheme}
        isDarkTheme={isDarkTheme}
      />
      <Outlet context={user} />
      <Footer />
    </>
  );
};

export default SharedLayout;
