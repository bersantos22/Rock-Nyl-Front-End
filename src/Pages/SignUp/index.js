import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

import { Forms } from "../../Components/Forms/Forms";
import { ErrorAlert } from "../../Components/ErrorAlert";
import { Button } from "../../Components/Button";

export function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!(form.password === form.confirmPassword)) {
      setError("Senha e confirmação não são iguais.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await api.post("/users/signup", form);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response);
        setError(error.response.data._message);
      } else {
        setError("Algo deu errado");
      }
    }
  }

  return (
    <div className="container mt-5">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <Forms
          label="Name"
          id="signUpFormName"
          name="name"
          onChange={handleChange}
          value={form.name}
          required={true}
          readOnly={loading}
        />

        <Forms
          type="email"
          label="E-mail"
          id="signUpEmail"
          name="email"
          onChange={handleChange}
          value={form.email}
          required={true}
          readOnly={loading}
        />
        <Forms
          type="password"
          label="Senha"
          id="signUpPassword"
          required={true}
          readOnly={loading}
          name="password"
          value={form.password}
          onChange={handleChange}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        />

        <Forms
          type="password"
          label="Confirmação de senha"
          id="signUpConfirmPassword"
          required={true}
          readOnly={loading}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        />

        <Button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Cadastrar"
          )}
        </Button>

        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </div>
  );
}
