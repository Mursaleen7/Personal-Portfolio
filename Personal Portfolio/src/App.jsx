import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialBar from './components/SocialBar'

import Specialization from './components/Specialization'
import MyProjects from './components/MyProjects'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

const greetings = [
  { text: '• Hello', language: 'English' },
  { text: '• Olà', language: 'Portuguese' },
  { text: '• नमस्ते', language: 'Hindi' }
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [showMainContent, setShowMainContent] = useState(false)

  // Initialize smooth scrolling
  useSmoothScroll()

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting(prev => {
        if (prev < greetings.length - 1) {
          return prev + 1
        } else {
          clearInterval(greetingInterval)
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => setShowMainContent(true), 300)
          }, 1500)
          return prev
        }
      })
    }, 1000)

    return () => clearInterval(greetingInterval)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0e100f' }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentGreeting}
                  className="text-4xl md:text-6xl font-headline font-bold"
          style={{ color: '#fffce4' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {greetings[currentGreeting]?.text}
                </motion.h1>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMainContent && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Header />
            
            <main>
              <Hero />
              <SocialBar />
              <Specialization />
              <MyProjects />
              <TechStack />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App 