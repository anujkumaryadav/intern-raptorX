import React from 'react'

export default function GradientText({text}) {
  return (
    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent font-lexend bg-clip-text font-bold">
      {text}
    </span>
  )
}
