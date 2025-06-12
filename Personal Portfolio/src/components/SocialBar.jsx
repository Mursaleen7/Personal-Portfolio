import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const SocialBar = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const socialIcons = [
    { icon: Twitter, href: 'https://twitter.com/mursaleen', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mursaleen', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/mursaleen', label: 'GitHub' }
  ]

  return (
    <motion.section
      ref={ref}
      className="py-16 border-t"
      style={{ borderTopColor: '#323228' }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left Text */}
          <div className="text-gray-400 text-sm font-mono">
            // Design, Code, Engage
          </div>

          {/* Center Social Icons */}
          <div className="flex items-center space-x-4">
            {/* Twitter */}
            <motion.a
              href="https://twitter.com/mursaleen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{ backgroundColor: '#fffce4' }}
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Twitter size={20} style={{ color: '#000000' }} />
            </motion.a>

            {/* Behance */}
            <motion.a
              href="https://behance.net/mursaleen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{ backgroundColor: '#fffce4' }}
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                <path d="M7.5 11.25C8.33 11.25 9 10.58 9 9.75C9 8.92 8.33 8.25 7.5 8.25H5.25V11.25H7.5ZM7.5 15.75H5.25V12.75H7.5C8.33 12.75 9 13.42 9 14.25C9 15.08 8.33 15.75 7.5 15.75ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.25 15.75C11.25 16.99 10.24 18 9 18H3.75V6H9C10.24 6 11.25 7.01 11.25 8.25V15.75ZM20.25 10.5H14.25C13.42 10.5 12.75 9.83 12.75 9C12.75 8.17 13.42 7.5 14.25 7.5H20.25C21.08 7.5 21.75 8.17 21.75 9C21.75 9.83 21.08 10.5 20.25 10.5Z" fill="currentColor"/>
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/mursaleen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{ backgroundColor: '#fffce4' }}
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Github size={20} style={{ color: '#000000' }} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/mursaleen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{ backgroundColor: '#fffce4' }}
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Linkedin size={20} style={{ color: '#000000' }} />
            </motion.a>

            {/* Dribbble */}
            <motion.a
              href="https://dribbble.com/mursaleen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{ backgroundColor: '#fffce4' }}
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm8.72 7.85c-1.055-1.844-2.67-3.285-4.62-4.11.87 1.142 1.547 2.416 2.01 3.78.216.638.383 1.297.491 1.974 1.077.294 2.067.73 2.91 1.287-.227-.649-.509-1.276-.79-1.93zm-8.72-.85c2.76 0 5.34.963 7.38 2.57-.694-.488-1.463-.877-2.29-1.15-.114-.592-.264-1.175-.447-1.746-.437-1.367-1.033-2.673-1.78-3.87C13.607 1.373 12.814 1 12 1c-.814 0-1.607.373-2.133.85-.747 1.197-1.343 2.503-1.78 3.87-.183.571-.333 1.154-.447 1.746-.827.273-1.596.662-2.29 1.15C7.42 7.913 9.57 7 12 7z" fill="currentColor"/>
              </svg>
            </motion.a>

            {/* Discord */}
            <motion.a
              href="https://discord.com/users/mursaleen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{ backgroundColor: '#fffce4' }}
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
              </svg>
            </motion.a>
          </div>

          {/* Right Contact */}
          <motion.div
            className="flex items-center space-x-3 text-gray-400"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail size={20} />
            <a
              href="mailto:mursaleen@example.com"
              className="hover:text-accent-purple transition-colors duration-200"
            >
              mursaleen@example.com
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default SocialBar 