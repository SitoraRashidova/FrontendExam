import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateLogin } from "../../service/mutation/useCreateLogin";
import Image from "../../assets/images/sideImage.png";

export const Login = () => {
  const navigate = useNavigate();
  const loginMutation = useCreateLogin();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile", { replace: true });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    loginMutation.mutate(form, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.accessToken);
        navigate("/profile", { replace: true });
      },
      onError: () => {
        setError("Login yoki parol noto‘g‘ri!");
      },
    });
  };

  return (
    <div className="container max-w-[1170px] mx-auto pt-[60px] pb-[140px] px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="hidden md:block w-1/2">
          <img src={Image} alt="image" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-[371px]">
          <h2 className="text-[28px] md:text-[36px] font-medium mb-[16px] md:mb-[24px]">
            Log in to Exclusive
          </h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-6"
            />
            <button
              type="submit"
              className="w-full bg-[#db4444] text-white p-3 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
