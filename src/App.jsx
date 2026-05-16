import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Routes, Route, Link } from "react-router-dom"

// PAGES (React Router page system for navigation)
import Products from "./pages/Products"

// IMAGES (used in Featured section cards)
import discount from "./assets/images/discount.png"
import mythandfacts from "./assets/images/mythandfacts.png"
import watchrepair from "./assets/images/watchrepair.png"

// VIDEOS (used in Repair Videos section)
import video1 from "./assets/videos/video1.mp4"
import video2 from "./assets/videos/video2.mp4"
import video3 from "./assets/videos/video3.mp4"

function App() {
  const [search, setSearch] = useState("")

  return (
    <Routes>

      {/* HOME PAGE ROUTE */}
      <Route
        path="/"
        element={
          <div className="min-h-screen text-white font-sans scroll-smooth relative overflow-hidden bg-gradient-to-br from-[#09111f] via-[#0f172a] to-[#050816]">

            {/* BACKGROUND BLUR EFFECTS (UI design decoration) */}
            <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/10 rounded-full blur-3xl"></div>

            {/* NAVBAR (main navigation bar) */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
              <div className="flex items-center justify-between px-10 py-5">

                {/* BRAND LOGO */}
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-cyan-300 bg-clip-text text-transparent">
                  Kigali Apple Tech 🍎
                </h1>

                {/* SEARCH SECTION (controlled input using React state) */}
                <div className="flex-1 flex justify-center items-center gap-2">

                  {/* SEARCH BUTTON (UPDATED COLOR ONLY) */}
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400 text-black font-semibold hover:scale-105 transition">
                    Search
                  </button>

                  {/* SEARCH INPUT FIELD */}
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Apple Tech..."
                    className="w-[60%] max-w-md px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* NAVIGATION LINKS */}
                <div className="space-x-6 text-sm text-gray-300">
                  <a href="#home" className="hover:text-cyan-300 transition">Home</a>
                  <a href="#services2" className="hover:text-cyan-300 transition">Services</a>
                  <a href="#services1" className="hover:text-cyan-300 transition">Featured</a>

                  <Link to="/products" className="hover:text-cyan-300 transition">
                    Products
                  </Link>

                  <a href="#videos" className="hover:text-cyan-300 transition">Pro Tips </a>
                </div>

              </div>
            </nav>

            {/* HERO SECTION */}
            <motion.section
              id="home"
              className="mt-24 px-10 flex justify-center gap-10 items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* HERO CARD */}
              <div className="w-full max-w-4xl h-[360px] rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] flex flex-col justify-center px-12">

                <p className="text-cyan-300 text-sm mb-3 tracking-widest uppercase">
                  Kigali Apple Tech
                </p>

                <h2 className="text-5xl font-bold leading-tight text-white">
                  Premium Apple <br /> Repairs & Devices
                </h2>

                <p className="text-gray-300 mt-5 max-w-xl leading-relaxed text-sm">
                  Trusted Apple repair services in Kigali. We repair iPhones,
                  MacBooks, Apple Watches and provide premium accessories.
                </p>

                {/* HOT SHOP BUTTON */}
                <Link to="/products">
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-cyan-400 text-black font-semibold rounded-lg hover:scale-105 transition">
                    🔥 HOT SHOP NOW
                  </button>
                </Link>

              </div>

              {/* SOCIAL MEDIA CARD */}
              <div className="hidden lg:flex flex-col w-72 h-[360px] rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-7">

                <h3 className="text-xl font-semibold text-cyan-200 mb-8">
                  Connect With Us
                </h3>

                <div className="space-y-5 text-sm">

                  <a href="https://wa.me/250788882114?text=Hello%20Apple%20Tech%2C%20I%20need%20help%20with%20a%20device"target="_blank"
                   className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-green-500/20 transition">
                  🟢 WhatsApp
                </a>

                  <a href="https://instagram.com/kigali_apple_tech_" target="_blank"
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-pink-500/20 transition">
                    📸 Instagram
                  </a>

                  <a href="https://t.me/yourusername" target="_blank"
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 transition">
                    ✈️ Telegram
                  </a>

                <a href="https://web.facebook.com/p/Kigali-Apple-Tech-100076117890191/" target="_blank"
                 className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 transition">
                📘 Facebook</a>

                </div>

                <div className="mt-auto text-xs text-gray-400">
                  Fast response • 24/7 Support ⚡
                </div>

              </div>

            </motion.section>

            {/* SERVICES SECTION */}
            <section id="services2" className="mt-28 px-10">
              <h2 className="text-3xl font-bold text-center text-cyan-200 mb-10">
                Our Services
              </h2>

              <div className="grid md:grid-cols-3 gap-7">

                {[
                  { title: "iPhone Repair", desc: "Professional Apple device repair." },
                  { title: "MacBook Service", desc: "Hardware & software maintenance." },
                  { title: "Accessories", desc: "Premium Apple accessories." },
                ].map((item, i) => (
                  <motion.div key={i}
                    whileHover={{ y: -8 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 text-center shadow-xl">

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm mt-3">
                      {item.desc}
                    </p>

                  </motion.div>
                ))}

              </div>
            </section>

            {/* FEATURED SECTION */}
            <section id="services1" className="mt-28 px-10">
              <h2 className="text-3xl font-bold text-center text-cyan-200 mb-10">
                Featured Services
              </h2>

              <div className="grid md:grid-cols-3 gap-7">

                {[
                  { title: "Device Repair", desc: "Fast Apple device repair.", img: watchrepair },
                  { title: "Pricing Offers", desc: "Affordable repair prices.", img: discount },
                  { title: "Tips & Facts", desc: "Apple care tips.", img: mythandfacts },
                ].map((item, i) => (
                  <motion.div key={i}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl">

                    <img src={item.img} className="h-40 w-full object-cover" />

                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                    </div>

                  </motion.div>
                ))}

              </div>
            </section>


            {/* ABOUT US SECTION */}
<section className="mt-28 px-[20px]">

  {/* Section Title */}
  <h2 className="text-3xl font-bold text-center text-cyan-200 mb-10">
    About Kigali Apple Tech
  </h2>

  {/* UPDATED LARGER CARD */}
  <div className="max-w-[1400px] mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-14 shadow-xl">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div>

        <p className="text-cyan-300 uppercase tracking-widest text-sm mb-4">
          Trusted Tech Store In Kigali
        </p>

        <h3 className="text-4xl font-bold text-white leading-tight">
          Professional Apple Repairs & Accessories
        </h3>

        <p className="text-gray-300 mt-6 leading-relaxed text-lg">
          Apple Tech is a trusted Apple repair and accessories business based in Kigali, Rwanda.
          We specialize in iPhone repairs, MacBook maintenance, Apple Watch services,
          and premium accessories for Apple devices.
        </p>

        <p className="text-gray-400 mt-5 leading-relaxed text-lg">
          Our goal is to provide fast, affordable, and reliable tech services while ensuring
          excellent customer experience and trusted support.
        </p>

      </div>

      {/* RIGHT SIDE STATS */}
      <div className="grid grid-cols-2 gap-7">

        <div className="bg-white/5 rounded-3xl p-8 text-center border border-white/10">
          <h1 className="text-5xl font-bold text-cyan-300">5+</h1>
          <p className="text-gray-300 mt-3 text-base">
            Years Experience
          </p>
        </div>

        <div className="bg-white/5 rounded-3xl p-8 text-center border border-white/10">
          <h1 className="text-5xl font-bold text-cyan-300">5K+</h1>
          <p className="text-gray-300 mt-3 text-base">
            Devices Repaired
          </p>
        </div>

        <div className="bg-white/5 rounded-3xl p-8 text-center border border-white/10">
          <h1 className="text-5xl font-bold text-cyan-300">24/7</h1>
          <p className="text-gray-300 mt-3 text-base">
            Customer Support
          </p>
        </div>

        <div className="bg-white/5 rounded-3xl p-8 text-center border border-white/10">
          <h1 className="text-5xl font-bold text-cyan-300">100%</h1>
          <p className="text-gray-300 mt-3 text-base">
            Trusted Service
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

            {/* VIDEOS SECTION */}
            <section id="videos" className="mt-28 px-10">
              <h2 className="text-3xl font-bold text-center text-cyan-200 mb-10">
                Pro  Tips 
              </h2>

              <div className="grid md:grid-cols-3 gap-7">

                {[video1, video2, video3].map((vid, i) => (
                  <motion.div key={i}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">

                    <video src={vid} controls className="w-full h-52 object-cover" />

                  </motion.div>
                ))}

              </div>
            </section>

            {/* FOOTER SECTION */}
            <footer className="mt-24 relative overflow-hidden border-t border-white/10 bg-white/5 backdrop-blur-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent"></div>

              <div className="relative z-10 px-10 py-16">

                <div className="grid md:grid-cols-4 gap-10">

                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                     Kigali Apple Tech
                    </h1>
                    <p className="text-gray-400 text-sm mt-4">
                      Premium Apple repairs, accessories, and trusted support services in Kigali.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <div className="flex flex-col gap-3 text-sm text-gray-400">
                      <a href="#home">Home</a>
                      <a href="#services2">Services</a>
                      <a href="#videos">Videos</a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <p>iPhone Repair</p>
                    <p>MacBook Repair</p>
                    <p>Apple Watch Service</p>
                    <p>Accessories Sales</p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <p>📍 Kigali, Rwanda</p>
                    <p>📞 +250 788882114 // +250 788409329</p>
                    <p>📧 support@appletech.com</p>
                    <p>💻Developer :rukundoally2222@gmail.com</p>
                  </div>

                </div>

              </div>
            </footer>

          </div>
        }
      />

      {/* PRODUCTS PAGE ROUTE */}
      <Route path="/products" element={<Products />} />

    </Routes>
  )
}

export default App