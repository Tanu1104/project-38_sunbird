import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "./OtpInput";

const Login = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // STEP 1 → Send OTP
  const sendOtp = () => {
    if (mobile.length !== 10) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
      console.log("OTP sent to:", mobile);
    }, 1500);
  };

  // STEP 2 → Verify OTP
  const verifyOtp = () => {
    if (otp.length !== 6) {
      alert("Enter valid 6 digit OTP");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login Successful ✅");
      console.log("Logged in user:", mobile);
      navigate("/"); // home page
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0f1115] border border-gray-800 rounded-xl p-8 text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login to <span className="text-[#E10600]">INITY</span>
        </h1>

        {/* STEP 1 – MOBILE */}
        {step === 1 && (
          <>
            <label className="block text-sm text-gray-400 mb-2">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter 10 digit number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-[#E10600]"
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full mt-6 bg-[#E10600] hover:bg-[#B30500] text-black font-bold py-3 rounded-lg transition"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

            {/* 🔹 SIGN UP OPTION */}
            <p className="text-center text-sm text-gray-400 mt-6">
              New to Inity?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-[#E10600] cursor-pointer hover:underline"
              >
                Create an account
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
              {loading ? "Verifying OTP..." : "Verify & Login"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
