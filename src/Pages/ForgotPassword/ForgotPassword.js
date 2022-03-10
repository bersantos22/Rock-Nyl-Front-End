import { api } from "../../api/api";

import { useState } from "react";

import { FormField } from "../../Components/Forms/FormField";
import { ErrorAlert } from "../../Components/ErrorAlert";
import { Button } from "../../Components/Button";

export function ForgotPassword() {
  const [form, setForm] = useState({
    email: "",
  });
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

      await api.post("/password/forgot-password", form);
      setLoading(false);
      window.alert("Senha enviada para seu e-mail");
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
        <p>Forgot Password</p>
      </div>

      <form
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mb-5 w-1/2"
        onSubmit={handleSubmit}
      >
        <FormField
          type="email:"
          label="E-mail"
          id="signUpEmail"
          name="email"
          onChange={handleChange}
          value={form.email}
          required={true}
          readOnly={loading}
        />

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
            "Reset Password"
          )}
        </Button>

        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </div>
  );
}
