import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const footerLinks = {
    explore: ['Home', 'About Me', 'Contact'],
    followMe: ['LinkedIn', 'Dribbble', 'Github', 'Behance', 'Discord'],
    contactMe: ['Say Hello!', 'My Projects', 'Explore Projects']
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="py-20 border-t" ref={ref} style={{ borderTopColor: '#323228' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Left Column - Logo and Description */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <span className="font-ui font-semibold text-xl" style={{ color: '#fffce4' }}>
                mursaleen
              </span>
            </div>

            {/* Description */}
            <p className="text-base font-ui leading-relaxed max-w-md" style={{ color: '#fffce4' }}>
              Cybersecurity Student & Ethical Hacker passionate about securing digital infrastructures and hunting threats through penetration testing and vulnerability research.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="mailto:mursaleen@example.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} style={{ color: '#fffce4' }} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/mursaleen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} style={{ color: '#fffce4' }} />
              </motion.a>

              <motion.a
                href="https://github.com/mursaleen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} style={{ color: '#fffce4' }} />
              </motion.a>

              <motion.a
                href="https://twitter.com/mursaleen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} style={{ color: '#fffce4' }} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Quick Links */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="font-headline font-semibold text-lg" style={{ color: '#fffce4' }}>
              Quick Links
            </h3>
            
            <div className="space-y-3">
              <a 
                href="#home" 
                className="block text-base font-ui hover:text-white transition-colors duration-200" 
                style={{ color: '#fffce4' }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-base font-ui hover:text-white transition-colors duration-200" 
                style={{ color: '#fffce4' }}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="block text-base font-ui hover:text-white transition-colors duration-200" 
                style={{ color: '#fffce4' }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="block text-base font-ui hover:text-white transition-colors duration-200" 
                style={{ color: '#fffce4' }}
              >
                Projects
              </a>
              <a 
                href="#certifications" 
                className="block text-base font-ui hover:text-white transition-colors duration-200" 
                style={{ color: '#fffce4' }}
              >
                Certifications
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm font-ui text-center md:text-left" style={{ color: '#fffce4' }}>
            mursaleen ©2024 - Privacy Policy
          </p>
          <div className="flex items-center space-x-4 text-sm font-ui" style={{ color: '#fffce4' }}>
            <span>Built with React & Framer Motion</span>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              className="w-7 h-7 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-medium">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 