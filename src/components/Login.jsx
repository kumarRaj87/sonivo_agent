import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineSupportAgent } from 'react-icons/md';

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(email, password)) {
      toast.success('Logged in successfully!');
      navigate("/work");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-primary-200 flex flex-col items-center justify-center p-4">
      <div className="w-full sm:w-[80%] md:w-[450px] bg-background p-10 rounded-lg">
        <div className="mb-4 text-center w-full flex justify-center items-center">
        <MdOutlineSupportAgent className=" h-12 w-12 text-center text-primary" />
        </div>
        <div className="mb-8 text-center">
          <h1 className="text-lg font-semibold text-primary mb-1">
            Welcome to Agent Login!
          </h1>
          <p className="text-primary-300 text-sm">
            Please enter your email and password to login
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
              Email
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-3 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
              Password
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-3 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              {showPassword ? (
                <IoEye className='text-accent' size={20} />
              ) : (
                <IoEyeOff className='text-accent' size={20} />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            {/* <IoMdKey className='text-background' size={20} /> */}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;