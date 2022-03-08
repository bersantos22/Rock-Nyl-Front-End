import { ErrorAlert } from "../../Components/ErrorAlert";
import { AuthContext } from "../../contexts/authContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Button } from "../../Components/Button";
import { FormField } from "../../Components/Forms/FormField";

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

      const response = await api.post("account/login", form);

      setLoggedInUser(response.data);

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      setLoading(false);
      navigate("/myAccount");
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
    <div className="h-screen mt-5 mb-5 flex flex-col items-center">
    <div className="title2 mt-1 mb-5">
      <p>Login</p>
      </div>

    <div className="container w-full h-screen flex flex-col items-center mr-0 mt-10 mb-5 ml-5">
      <form className='bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mb-5 w-1/2'onSubmit={handleSubmit}>
        <FormField
          type="email"
          label="E-mail"
          id="loginFormEmail"
          name="email"
          onChange={handleChange}
          value={form.email}
          required={true}
          readOnly={loading}
        />
        <FormField
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

        <Button type="submit" disabled={loading} className="bg-stone-800 hover:bg-amber-500 text-white font-bold py-2 px-4 m-2 mr-4 rounded focus:outline-none focus:shadow-outline">
          {loading ? (
            <div className="animate-spin" role="status">
              <span className="hidden">Loading...</span>
            </div>
          ) : (
            "Sign In"
          )}
        </Button>

        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </div>
  </div>
  );
}
