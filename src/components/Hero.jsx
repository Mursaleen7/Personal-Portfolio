import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-primary-bg pt-16 sm:pt-20 lg:pt-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex flex-col items-center text-center"
        >
          {/* Profile Avatar */}
          <motion.div variants={itemVariants} className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700">
              <div className="w-full h-full flex items-center justify-center text-4xl bg-primary-text text-primary-bg">
                👨🏻‍💻
              </div>
            </div>
            {/* Hello Pill */}
            <motion.div 
              variants={itemVariants} 
              className="absolute top-1/2 -translate-y-1/2 left-full ml-4 hidden sm:block"
            >
              <div className="rounded-full px-4 py-1.5 border border-gray-700">
                <span className="text-sm md:text-base font-headline font-medium text-primary-text whitespace-nowrap">Hello, I'm Mursaleen</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Headline Block */}
          <motion.div variants={itemVariants} className="relative w-full">
            <h1 className="font-headline font-medium text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none tracking-tight uppercase">
              <span className="text-accent-purple">CYBER</span> <span className="text-accent-yellow">SECURITY</span> <span className="text-primary-text">STUDENT</span> <span className="text-accent-teal">& DEVELOPER.</span>
            </h1>
          </motion.div>

          {/* Sub-headline/Annotations */}
          <motion.div variants={itemVariants} className="mt-4 max-w-3xl">
            <p className="text-sm sm:text-base md:text-lg font-headline font-normal text-primary-text">
              Final Year CS Student // Ethical Hacker & Penetration Tester
            </p>
          </motion.div>

          {/* Let's Connect Button */}
          <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse flex-shrink-0"></div>
            <button className="text-lg sm:text-xl md:text-2xl font-headline font-medium text-primary-text hover:text-accent-green transition-colors duration-200">
              Let's Connect
            </button>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="mt-8 text-center max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-headline font-normal leading-relaxed text-primary-text">
              I secure digital infrastructures and hunt threats through{' '}
              <span className="font-semibold text-accent-yellow">penetration testing</span>,{' '}
              <span className="font-semibold text-accent-purple">vulnerability assessment</span> and{' '}
              <span className="font-semibold text-accent-teal">incident response</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 