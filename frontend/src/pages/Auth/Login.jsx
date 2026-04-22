import { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a valid password");
      return;
    }

    setError("");

    // Login API
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome back 👋</h3>
        <p className="text-xs text-slate-700 mt-1.25 mb-6">
          please enter your details to login in to your account.
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="abc@example.com"
            type="email"
            name="email"
            required={false}
            id="email"
            autoComplete="email"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Minimum 8 characters"
            type="password"
            name="password"
            required={false}
            id="password"
            autoComplete="false"
          />

          {error && <span className="error-wrap">{error}</span>}

          <button type="submit" className="btn-primary">
            Login
          </button>
          <div className="flex items-center justify-between mt-4">
            <p
              className="text-sm text-primary cursor-pointer underline hover:text-primary-hover transition duration-300"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </p>

            <p className="text-xs text-slate-700">
              Don't have an account?{" "}
              <span
                className="text-sm text-primary cursor-pointer underline hover:text-primary-hover transition duration-300"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
