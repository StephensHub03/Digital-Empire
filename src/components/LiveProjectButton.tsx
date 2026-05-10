import React from 'react'

interface LiveProjectButtonProps {
  url?: string
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ url }) => {
  const handleClick = () => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      disabled={!url}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest cursor-pointer
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        transition-colors duration-200 hover:bg-[#D7E2EA]/10
        disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
    >
      Live Project
    </button>
  )
}

export default LiveProjectButton
