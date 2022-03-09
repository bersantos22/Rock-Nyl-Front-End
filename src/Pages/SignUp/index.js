import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

import { FormField } from "../../Components/Forms/FormField";
import { ErrorAlert } from "../../Components/ErrorAlert";
import { Button } from "../../Components/Button";

export function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

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

      await api.post("/account/signup", form);
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
    <div className="h-screen mt-5 mb-5 flex flex-col items-center">
      <div className="title2 mt-1 mb-5">
        <p>Sign Up</p>
      </div>

      <form
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mb-5 w-1/2"
        onSubmit={handleSubmit}
      >
        <FormField
          label="Full Name"
          id="signUpFormName"
          name="name"
          onChange={handleChange}
          value={form.name}
          required={true}
          readOnly={loading}
        />

        <FormField
          type="email"
          label="E-mail"
          id="signUpEmail"
          name="email"
          onChange={handleChange}
          value={form.email}
          required={true}
          readOnly={loading}
        />
        <FormField
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

        <FormField
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
        <div className="flex justify-between ">
          <Button
            type="submit"
            disabled={loading}
            className="bg-stone-800 hover:bg-amber-500 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? (
              <div className="animate-spin" role="status">
                <span className="hidden">Loading...</span>
              </div>
            ) : (
              "Cadastrar"
            )}
          </Button>

          <select name="role" value={form.role} onChange={handleChange}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </div>
  );
}
