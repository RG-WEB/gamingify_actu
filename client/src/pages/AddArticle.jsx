import axios from "axios";
import { Form, NavLink, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../components/formRow";
import JoditEditor from "jodit-react";
import Container from "react-bootstrap/esm/Container";

export const loader = async () => {
  const token = localStorage.getItem("token");

  try {
    const { data } = await axios("/api/v1/users/current-user", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.user.role !== "admin") return redirect("/login");

    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/login");
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const token = localStorage.getItem("token");

  try {
    await axios.post("/api/v1/articles", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Article ajouté");
    return redirect("/dashboard/modifyarticles");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddArticle = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: "Commencez à écrire",
    height: 600,
    className: "mb-3",
  };

  return (
    <main className="section">
      <Container className="form">
        <h1>Ajouter un article</h1>
        <Form method="POST" encType="multipart/form-data">
          <FormRow type="text" name="title" labelText="Nom de l'article" />
          <FormRow type="text" name="description" labelText="Description" />

          <div>
            <label htmlFor="content">Contenu de l&apos;article</label>
            <JoditEditor name="content" config={config} />
          </div>

          <FormRow
            type="file"
            labelText="Image"
            name="image"
            accept="image/*"
          />
          <div className="btn-container">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Ajout..." : "Publier"}
            </button>
            <NavLink to="/dashboard/modifyarticles" className="back-btn">
              Retour
            </NavLink>
          </div>
        </Form>
      </Container>
    </main>
  );
};
export default AddArticle;
