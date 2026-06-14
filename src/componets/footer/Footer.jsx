// Footer.jsx
import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-300 mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
//                 S
//               </div>

//               <div>
//                 <h1 className="text-2xl font-bold text-white">
//                   Sumit<span className="text-blue-500">Tech</span>
//                 </h1>
//                 <p className="text-sm text-gray-400">
//                   Build • Learn • Innovate
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-gray-400 leading-relaxed">
//               Creating modern web experiences with clean UI,
//               responsive design, and powerful functionality.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h2 className="text-xl font-semibold text-white mb-4">
//               Quick Links
//             </h2>

//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition"
//                 >
//                   Home
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition"
//                 >
//                   About
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition"
//                 >
//                   Projects
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Socials */}
//           <div>
//             <h2 className="text-xl font-semibold text-white mb-4">
//               Connect
//             </h2>

//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
//               >
//               </a>

//               <a
//                 href="#"
//                 className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition"
//               >
//               </a>

//               <a
//                 href="#"
//                 className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition"
//               >
//               </a>

//               <a
//                 href="#"
//                 className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition"
//               >
//               </a>
//             </div>

//             <p className="mt-5 text-gray-400 text-sm">
//               Follow for updates, projects, and coding content.
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
//           <p className="text-sm text-gray-500">
//             © {new Date().getFullYear()} SumitTech. All rights reserved.
//           </p>

//           <p className="flex items-center gap-1 text-sm text-gray-500">
//             Made with  by Sumit
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// Footer.jsx


const Footer = () => {
  return (
    <footer className="bg-white text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo / Brand */}
        <h1 className="text-lg font-semibold">
          Sumit<span className="text-blue-500">Tech</span>
        </h1>

        {/* Links */}
        <div className="flex gap-6 mt-3 md:mt-0 text-sm">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-3 md:mt-0">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;