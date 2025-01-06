'use client'

import { useCallback } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import useMatchMedia from "@/hooks/useMediaQuery"
import reviewIcon from "@/assets/images/Vector (6).webp"
import Image from "next/image"

interface CustomDotProps {
  onClick?: () => void
  active?: boolean
  index?: number
  carouselState?: any
}

const CustomDot = ({ onClick, active }: CustomDotProps) => {
  return (
    <li
      className={`mr-1 h-[2px] cursor-pointer transition-all ${
        active ? "bg-[#FF3B9A] w-6" : "w-4 bg-white/50"
      }`}
      onClick={onClick}
      role="button"
      aria-label={active ? "Current slide" : "Go to slide"}
    />
  )
}

const ReviewCard = ({ content, highlight, highlightPrefix = "" }: { content: string, highlight: string, highlightPrefix?: string }) => (
  <div className="relative w-full rounded-[20px] bg-gradient-to-b to-[#0B0C12] from-[#171521] p-8  transition-colors border-[2px] border-[#161420] border-solid">
    {/* Quotation marks */}
    <Image 
      src={reviewIcon} 
      alt="Review" 
      className="absolute top-6 right-8 opacity-80 " 
      width={40}
      height={40}
    />
    <div className="text-lg font-bold leading-[1.4] text-white mt-4">
      {content.split(highlight).map((part, index, array) => (
        index === array.length - 1 ? 
        part : 
        <>{part}{highlightPrefix}<span key={index} className="text-[#FF3B9A]">{highlight}</span></>
      ))}
    </div>
  </div>
)

export default function ReviewSection() {
  const isMobile = useMatchMedia(640)

  const reviews = [
    {
      content: "RoleChain is a groundbreaking decentralized AI network designed to unlock the trillion-dollar potential of Web3 industries and communities.",
      highlight: "decentralized AI network"
    },
    {
      content: "With unmatched AI adaptability, RoleChain empowers creators, gamers, and investors to thrive in the rapidly evolving decentralized future.",
      highlight: "adaptability",
      highlightPrefix: "AI "
    },
    {
      content: "A revolutionary platform enabling autonomous agents to redefine scalability, intelligence, and innovation in the Web3 ecosystem.",
      highlight: "autonomous agents"
    }
  ]

  const responsive = {
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const renderReviews = useCallback(() => (
    <div className="grid gap-6 md:grid-cols-3 relative z-20  ">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  ), [reviews])

  if (isMobile) {
    return (
      <section id="reviews" className="relative mx-auto w-11/12 max-w-screen-xl py-12 z-20">
      </section>
    )
  }

  return (
    
    <section id="reviews" className="relative mx-auto w-11/12 max-w-screen-xl py-12 z-20">
    </section>
  )
}

