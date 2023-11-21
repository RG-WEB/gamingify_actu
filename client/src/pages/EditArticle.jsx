import axios from "axios";
import {
  Form,
  NavLink,
  redirect,
  useNavigation,
  useLoaderData,
} from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../components/formRow";
import JoditEditor from "jodit-react";
import Container from "react-bootstrap/esm/Container";

let imageValue = null;

export const loader = async ({ params }) => {
  const token = localStorage.getItem("token");
  const { id } = params;

  try {
    const { data: userdata } = await axios("/api/v1/users/current-user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (userdata.user.role !== "admin") return redirect("/");

    const { data } = await axios(`/api/v1/articles/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    imageValue = data.singleArticle.img;
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/login");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const token = localStorage.getItem("token");
  const { id } = params;
  if (imageValue) {
    data.img = imageValue;
  }
  console.log(data);
  try {
    await axios.put(`/api/v1/articles/${id}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Article modifié");
    return redirect("/dashboard/modifyarticles");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditArticle = () => {
  const { data } = useLoaderData();
  const { title, description, img, content } = data.singleArticle;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: "Commencez à écrire",
    height: 600,
    className: "mb-3",
  };
  console.log(content);

  return (
    <main className="section">
      <Container className="form">
        <h1>Éditer un article</h1>
        <Form method="POST" encType="multipart/form-data">
          <FormRow
            type="title"
            name="title"
            labelText="Nom de l'article"
            defaultValue={title}
          />
          <FormRow
            type="description"
            name="description"
            labelText="Description de l'article"
            defaultValue={description}
          />

          <div>
            <label htmlFor="content">Contenu de l&apos;article</label>
            <JoditEditor value={content} name="content" config={config} />
          </div>
          {img ? <input name="img" type="hidden" value={img} /> : null}
          <FormRow
            type="file"
            name="image"
            labelText="Ajouter/Modifier une image"
            accept="image/*"
          />
          <img src={img}></img>
          <div className="btn-container">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Ajout..." : "Modifier"}
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
export default EditArticle;
