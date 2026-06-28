import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); //[cite: 8]

  return (
    <nav className="sticky top-0 z-50 w-full bg-ethiopian-bg-dark/80 backdrop-blur-md border-b border-stone-800/60 px-6 py-4"> {/*[cite: 8] */}
      <div className="max-w-5xl mx-auto flex items-center justify-between"> {/*[cite: 8] */}
        
        {/* Brand Link back to home base window */}
        <Link to="/" className="flex flex-col group" onClick={() => setIsOpen(false)}> {/*[cite: 8] */}
          <span className="text-base font-black tracking-wide text-ethiopian-text-bright group-hover:text-ethiopian-gold transition-colors">ሄኖክ ብርሃኑ</span> {/*[cite: 8] */}
          <span className="text-[10px] font-mono tracking-widest text-ethiopian-gold uppercase">// HB_PORTFOLIO</span> {/*[cite: 8] */}
        </Link>

        {/* Desktop Routing Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase"> {/*[cite: 8] */}
          <Link to="/skills" className="text-ethiopian-text-muted hover:text-ethiopian-text-bright transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ethiopian-gold hover:after:w-full after:transition-all"> {/*[cite: 8] */}
            .skills()
          </Link>
          <Link to="/education" className="text-ethiopian-text-muted hover:text-ethiopian-text-bright transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ethiopian-gold hover:after:w-full after:transition-all"> {/*[cite: 8] */}
            .education()
          </Link>
          <Link to="/projects" className="text-ethiopian-text-muted hover:text-ethiopian-text-bright transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ethiopian-gold hover:after:w-full after:transition-all"> {/*[cite: 8] */}
            .projects()
          </Link>
          <Link to="/contact" className="ml-2 px-3.5 py-1.5 bg-ethiopian-gold text-ethiopian-bg-dark font-bold rounded-md hover:bg-ethiopian-gold-light transition-colors shadow-xs"> {/*[cite: 8] */}
            .contact()
          </Link>
        </div>
        
        {/* ... Keep your mobile menu hamburger toggle but change those links to <Link to="/..."> as well! */}
        
      </div>
    </nav>
  );
}