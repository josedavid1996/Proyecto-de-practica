import React, { useEffect, useState } from 'react'

const ScrollHeader = () => {
  const [isTransparent, SetisTransparent] = useState(true)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      SetisTransparent(false)
    } else {
      SetisTransparent(true)
    }
  }

  useEffect(() => {
    console.log('entre')
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])
  console.log(isTransparent)
  return (
    <>
      <div className="h-[80px] w-full bg-red-500"></div>
      <div className="mt-5">
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
        <div className="h-10 bg-blue-500 mt-2"></div>
      </div>
    </>
  )
}

export default ScrollHeader
