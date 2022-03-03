import { Forms } from "../../Components/Forms/Forms";
import { ErrorAlert } from "../../Components/ErrorAlert";
import { AuthContext } from "../../contexts/authContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Button } from "../../Components/Button";

export function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setLoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await api.post("users/login", form);

      setLoggedInUser(response.data);

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response);
        setError(error.response.data);
      } else {
        setError("Algo deu errado");
      }
    }
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Forms
          type="email"
          label="E-mail"
          id="loginFormEmail"
          name="email"
          onChange={handleChange}
          value={form.email}
          required={true}
          readOnly={loading}
        />
        <Forms
          type="password"
          label="Senha"
          id="loginFormPassword"
          required={true}
          readOnly={loading}
          name="password"
          value={form.password}
          onChange={handleChange}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        />

        <Button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Entrar"
          )}
        </Button>

        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </div>
  );
}
