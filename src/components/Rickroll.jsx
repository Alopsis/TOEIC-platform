import { useEffect, useState } from 'react'

export default function Rickroll() {
  const [count, setCount] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c <= 1) {
          clearInterval(interval)
          window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="text-6xl animate-bounce">🔐</div>
        <h1 className="text-2xl font-bold text-white">TOEIC Master Admin Panel</h1>
        <p className="text-gray-400">Verifying credentials...</p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-gray-600 text-sm">Redirecting in {count}...</p>
      </div>
    </div>
  )
}
