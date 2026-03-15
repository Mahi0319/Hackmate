import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function StudentAuth() {

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f1a] text-white">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-90"></div>

      {/* Glow Effects */}
      <div className="absolute w-[450px] h-[450px] bg-blue-500 rounded-full blur-[130px] opacity-30 top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[450px] h-[450px] bg-purple-500 rounded-full blur-[130px] opacity-30 bottom-[-120px] right-[-120px]"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity:0, scale:0.9 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:0.6 }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0px_20px_80px_rgba(0,0,0,0.7)] rounded-[40px] p-14 max-w-xl text-center"
      >

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 tracking-tight">
          Student Portal
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          Discover Hackathons • Build Teams • Launch Ideas
        </p>

        {/* Buttons */}
        <div className="flex gap-8 justify-center">

          {/* Login Button */}
          <motion.button
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.95 }}
            onClick={()=>navigate("/student-login")}
            className="bg-white text-black px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-white/30 transition"
          >
            Login
          </motion.button>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.95 }}
            onClick={()=>navigate("/student-signup")}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-indigo-400/40 transition"
          >
            Register
          </motion.button>

        </div>

        {/* Bottom Text */}
        <p className="text-gray-400 mt-10 text-sm">
          Join thousands of students building the future 🚀
        </p>

      </motion.div>

    </div>
  );
}

export default StudentAuth;