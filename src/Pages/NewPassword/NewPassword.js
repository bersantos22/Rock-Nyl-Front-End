import { api } from "../../api/api";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FormField } from "../../Components/Forms/FormField";
import { ErrorAlert } from "../../Components/ErrorAlert";
import { Button } from "../../Components/Button";

export function NewPassword() {
  const navigate = useNavigate();
  const params = useParams();
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
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

      await api.put(`/password/reset-password/${params.token}`, form);
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
        <p>Forgot Password</p>
      </div>

      <form
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mb-5 w-1/2"
        onSubmit={handleSubmit}
      >
        <FormField
          type="password"
          label="New Password"
          id="new-password"
          required={true}
          readOnly={loading}
          name="newPassword"
          value={form.password}
          onChange={handleChange}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        />

        <FormField
          type="password"
          label="Confirm New Password"
          id="confirm-password"
          required={true}
          readOnly={loading}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
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
