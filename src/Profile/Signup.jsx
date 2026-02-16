import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "./OtpInput";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // STEP 1 → SEND OTP
  const sendOtp = () => {
    if (!username.trim()) {
      alert("Enter username");
      return;
    }

    if (mobile.length !== 10) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email id");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
      console.log("OTP sent to:", mobile);
    }, 1500);
  };

  // STEP 2 → VERIFY & SIGNUP
  const verifyOtp = () => {
    if (otp.length !== 6) {
      alert("Enter valid 6 digit OTP");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Signup Successful 🎉");
      console.log({
        username,
        mobile,
        email,
      });
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0f1115] border border-gray-800 rounded-xl p-8 text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create <span className="text-[#E10600]">INITY</span> Account
        </h1>

        {/* STEP 1 – USER DETAILS */}
        {step === 1 && (
          <>
            {/* USERNAME */}
            <label className="block text-sm text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-[#E10600]"
            />

            {/* MOBILE */}
            <label className="block text-sm text-gray-400 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter 10 digit number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-[#E10600]"
            />

            {/* EMAIL */}
            <label className="block text-sm text-gray-400 mb-2">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Enter email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-[#E10600]"
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full mt-6 bg-[#E10600] hover:bg-[#B30500] text-black font-bold py-3 rounded-lg transition"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

            {/* 🔹 LOGIN OPTION */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#E10600] cursor-pointer hover:underline"
              >
                Log in
              </span>
            </p>
          </>
        )}

        {/* STEP 2 – OTP */}
        {step === 2 && (
          <>
            <p className="text-sm text-gray-400 mb-4 text-center">
              OTP sent to <span className="text-white">+91 {mobile}</span>
            </p>

            <OtpInput otp={otp} setOtp={setOtp} />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full mt-6 bg-[#E10600] hover:bg-[#B30500] text-black font-bold py-3 rounded-lg transition"
            >
              {loading ? "Verifying OTP..." : "Verify & Signup"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
