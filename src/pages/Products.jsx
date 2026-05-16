import { motion } from "framer-motion"

// IMAGES
import applewatches from "../assets/images/applewatches.png"
import macbookcharger from "../assets/images/macbookcharger.png"
import chargingcable from "../assets/images/chargingcable.png"
import iphonecase from "../assets/images/iphonecase.png"
import cleaningkit from "../assets/images/cleaningkit.png"
import airpodcase from "../assets/images/airpodcase.png"
import phonestand from "../assets/images/phonestand.png"
import applewatchstrap from "../assets/images/applewatchstrap.png"
import wirelesscharger from "../assets/images/wirelesscharger.png"

function Products() {

  const products = [
    { name: "Apple Watch", price: "$12", img: applewatches },
    { name: "MacBook Charger", price: "$25", img: macbookcharger },
    { name: "Charging Cable", price: "$8", img: chargingcable },
    { name: "iPhone Case", price: "$27", img: iphonecase },
    { name: "Cleaning Kit", price: "$10", img: cleaningkit },
    { name: "AirPods Case", price: "$6", img: airpodcase },
    { name: "Phone Stand", price: "$9", img: phonestand },
    { name: "Apple Watch Strap", price: "$12", img: applewatchstrap },
    { name: "Wireless Charger", price: "$18", img: wirelesscharger },
  ]

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#09111f] via-[#0f172a] to-[#050816]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-5 gap-4">

          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-cyan-300 bg-clip-text text-transparent text-center md:text-left">
            Kigali Apple Tech
          </h1>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:space-x-6 text-sm text-gray-300">
            <a href="/" className="hover:text-cyan-300">Home</a>
            <a href="/#services2" className="hover:text-cyan-300">Services</a>
            <a href="/#services1" className="hover:text-cyan-300">Featured</a>
            <a href="/products" className="text-cyan-300">Products</a>
            <a href="/#videos" className="hover:text-cyan-300">Pro Tips</a>
          </div>

        </div>
      </nav>

      {/* TITLE */}
      <h1 className="text-2xl md:text-4xl font-bold text-center text-cyan-300 mb-12 mt-12 px-4">
        Kigali Apple Tech Products
      </h1>

      {/* PRODUCTS GRID */}
      <div className="px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {products.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl"
          >

            <img
              src={item.img}
              className="h-44 w-full object-cover"
              alt={item.name}
            />

            <div className="p-5">

              <h2 className="text-lg md:text-xl font-semibold text-white">
                {item.name}
              </h2>

              <p className="text-cyan-300 font-bold mt-2">
                {item.price}
              </p>

              <a
                href={`https://wa.me/250788882114?text=Hello%20Apple%20Tech%2C%20I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 rounded-full bg-green-500/20 text-green-300 hover:bg-green-500/30 transition w-full text-center"
              >
                Order on WhatsApp
              </a>

            </div>

          </motion.div>
        ))}

      </div>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-2xl">

        <div className="px-4 md:px-10 py-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Kigali Apple Tech
              </h1>
              <p className="text-gray-400 text-sm mt-4">
                Premium Apple repairs, accessories, and trusted support in Kigali.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a href="/">Home</a>
                <a href="/#services2">Services</a>
                <a href="/#videos">Pro Tips</a>
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
              <p>💻 Developer: rukundoally2222@gmail.com</p>
            </div>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default Products