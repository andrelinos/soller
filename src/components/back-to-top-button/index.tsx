'use client'

import classNames from 'classnames'
import { ArrowUpCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', toggleVisibility)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          'fixed bottom-6 hover:scale-110 right-6 hover:bg-white hover:bg-opacity-70 hover:text-brand-purple-500 z-50 transition-all size-14 flex justify-center items-center rounded-full duration-300',
          {
            'opacity-100': showButton,
            'opacity-0': !showButton,
          },
        )}
      >
        <ArrowUpCircle size={44} strokeWidth={1.5} />
      </button>
    </>
  )
}
