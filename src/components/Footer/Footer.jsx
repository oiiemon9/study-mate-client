import React from 'react';
import studyMate from '../../assets/studyMate.png';
import { FaXTwitter } from 'react-icons/fa6';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinCheckInside,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="pt-24 pb-10  border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-2">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <img src={studyMate} alt="" />
              </div>
              <h1 className="text-xl font-bold  bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
                StudyMate
              </h1>
            </div>
            <p className="max-w-md text-gray-500/90">
              Find your perfect study partner, stay motivated, and achieve your
              dreams together. Every great goal begins with the right partner —
              start your journey today!
            </p>
            <div className="space-x-4">
              <a
                data-tip="Facebook"
                href="https://www.facebook.com/"
                target="_blank"
                className=" p-2 rounded-full border border-green-600 text-green-600 tooltip tooltip-bottom cursor-pointer"
              >
                <Facebook size={20} />
              </a>

              <a
                data-tip="X"
                href="https://x.com/"
                target="_blank"
                className=" p-2 rounded-full border border-green-600 text-green-600 tooltip tooltip-bottom cursor-pointer"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                data-tip="Linkedin"
                href="https://www.linkedin.com/"
                target="_blank"
                className=" p-2 rounded-full border border-green-600 text-green-600 tooltip tooltip-bottom cursor-pointer"
              >
                <Linkedin size={20} />
              </a>
              <a
                data-tip="Instagram"
                target="_blank"
                href="https://www.instagram.com/"
                className=" p-2 rounded-full border border-green-600 text-green-600 tooltip tooltip-bottom cursor-pointer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-5 md:justify-between lg:justify-around">
              <div className="space-y-5">
                <h4 className="text-xl font-bold">Links</h4>
                <ul className="space-y-3">
                  <li className="text-gray-500/90 hover:text-green-600 hover:underline w-fit transition-all duration-300">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-gray-500/90 hover:text-green-600 hover:underline w-fit transition-all duration-300">
                    <Link to="/find-partners">Find Partners</Link>
                  </li>
                  <li className="text-gray-500/90 hover:text-green-600 hover:underline w-fit transition-all duration-300">
                    <Link to="/create-partner-profile">
                      Create Partner Profile
                    </Link>
                  </li>
                  <li className="text-gray-500/90 hover:text-green-600 hover:underline w-fit transition-all duration-300">
                    <Link to="/my-connections">My Connections</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <h4 className="text-xl font-bold">Contact</h4>
                <ul className="space-y-3">
                  <li className="text-gray-500/90  w-fit flex items-center gap-2">
                    <MapPinCheckInside size={20} />{' '}
                    <span>111 Sonargaon Road, Dhaka 120 </span>
                  </li>
                  <li className="text-gray-500/90  w-fit flex items-center gap-2">
                    <Mail size={20} /> <span> studymate@web.com </span>
                  </li>
                  <li className="text-gray-500/90  w-fit flex items-center gap-2">
                    <Phone size={20} /> <span>+880 18-123-4567</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-24 text-center text-gray-500/90 text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved by
          StudyMate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
