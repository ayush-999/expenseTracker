import { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";

const Register = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a valid password");
      return;
    }

    setError("");

    // Register API
  };

  return (
    <AuthLayout>
      <div className="lg:w-[%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an account</h3>
        <p className="text-xs text-slate-700 mt-1.25 mb-6">
          Join us today by entering your details to create an account.
        </p>
        <form onSubmit={handleRegister}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Enter Full Name"
            placeholder="Enter your name"
            type="text"
            name="fullName"
            required={false}
            id="fullName"
            autoComplete="name"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md-grid-flow-col gap-4">
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
          {error && <span className="error-wrap">{error}</span>}

          <button type="submit" className="btn-primary">
            Register
          </button>

          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-slate-700">
              Already have an account?{" "}
              <span
                className="text-sm text-primary cursor-pointer underline hover:text-primary-hover transition duration-300"
                onClick={() => navigate("/login")}
              >
                Go to Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
