import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-green-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                  <Image src="/logo.png" alt="DPS Keoti Logo" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Delhi Public School</span>
                  <span className="text-xs uppercase tracking-wider text-white/80">Keoti</span>
                </div>
              </Link>
              <p className="text-white/80 mb-6">
                Delhi Public School Keoti is committed to providing a holistic education that nurtures the intellectual,
                physical, and emotional growth of every student.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100082838847917"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@dpskeotihajipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.instagram.com/dps_darbhanga/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 flex items-center">
                <span className="w-6 h-1 bg-white/40 inline-block mr-2"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery/photos"
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery/videos"
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Video Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admission"
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Admission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" /> Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" /> Fee Structure
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 flex items-center">
                <span className="w-6 h-1 bg-white/40 inline-block mr-2"></span>
                Contact Information
              </h3>
              <address className="not-italic text-white/80 space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <p>D.P.S. KEOTI, Hajipur, Darbhanga, Bihar 847121</p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <p>
                    <a href="tel:+917654844207" className="hover:text-white transition-colors">
                      +91 76548 44207
                    </a>
                  </p>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <p>
                    <a href="mailto:dpskeoti@gmail.com" className="hover:text-white transition-colors">
                      dpskeoti@gmail.com
                    </a>
                  </p>
                </div>
              </address>

              {/* Map */}
              <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59569.864526499136!2d82.6763117486328!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb7a186a3e9bb%3A0xe22711cabd592c47!2sD.P.S.%20KEOTI%20Hajipur!5e0!3m2!1sen!2sin!4v1743179734683!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DPS Keoti Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Delhi Public School Keoti. All rights reserved.</p>
          <p className="mt-1">
            Designed with <span className="text-red-400">&#x2764;</span> by Brajesh K.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

