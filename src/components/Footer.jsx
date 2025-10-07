import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r
        from-gray-100 via-gray-50 to-gray-200
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
        text-gray-700 dark:text-gray-300
        py-10 px-6 mt-16 relative">
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
            Ayoub Beraouz
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Building digital experiences with passion ✨
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/ayoub-beraouz-95458120a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 dark:hover:text-white transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/ayoubberaouz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:ayoubberaouz22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 dark:hover:text-white transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Ayoub Beraouz. All rights reserved.
        </p>

        {/* Scroll to top */}
        <a
          href="#hero"
          className="mt-4 md:mt-0 flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowUp size={18} /> Back to top
        </a>
      </div>
    </footer>
  );
};
