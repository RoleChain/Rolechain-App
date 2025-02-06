

// "use client"

// import { useState, useRef, useEffect } from "react"
// import Image, { type StaticImageData } from "next/image"
// import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react"
// import Link from "next/link"
// import sanjeev from "@/assets/images/Sanjeev.png"
// import mario from "@/assets/images/Mario.png"
// import harsh from "@/assets/images/Harsh.png"
// import vivek from "@/assets/images/Vivek.png"
// import pranjali from "@/assets/images/Pranjali.png"
// import manav from "@/assets/images/Manav.png"
// import tarun from "@/assets/images/Tarun.png"
// import nikhil from "@/assets/images/Nikhil.png"
// import rohit from "@/assets/images/Rohit.png"
// import naba from "@/assets/images/Naba.png"
// import meerabbas from "@/assets/images/Meerabbas.png"
// import sakshi from "@/assets/images/Sakshi.png"


// interface TeamMember {
//   name: string
//   role: string
//   image: StaticImageData
//   linkedin: string
// }

// const teamMembers: TeamMember[] = [
//   {
//     name: "Sanjeev Kumar",
//     role: "CEO & Co-founder",
//     image: sanjeev,
//     linkedin: "https://www.linkedin.com/in/sanjeevvepsun/",
//   },
//   {
//     name: "Mario Christian",
//     role: "CMO & Co-founder",
//     image: mario,
//     linkedin: "https://www.linkedin.com/in/mario-christian-992265143/",
//   },
//   {
//     name: "Harsh Raj",
//     role: "CTO & Co-founder",
//     image: harsh,
//     linkedin: "https://www.linkedin.com/in/harsh-raj-2b8709129/",
//   },
//   {
//     name: "Vivek Pandav",
//     role: "Head of Design",
//     image: vivek,
//     linkedin: "https://www.linkedin.com/in/vivek-pandav-uiux-product-designer/",
//   },
//   {
//     name: "Pranjali Chouhan",
//     role: "Head of AI & Web3 Infra",
//     image: pranjali,
//     linkedin: "https://www.linkedin.com/in/pranjali-chouhan-74b202245/",
//   },
//   {
//     name: "Manav Singh",
//     role: "CBDO",
//     image: manav,
//     linkedin: "https://www.linkedin.com/in/manav24/",
//   },
  
//   {
//     name: "Tarun Lala",
//     role: "SMM",
//     image: tarun,
//     linkedin: "https://www.linkedin.com/in/tarun-lala1/",
//   },
//   {
//     name: "Nikhil Singh",
//     role: "UI/UX Designer",
//     image: nikhil,
//     linkedin: "https://www.linkedin.com/in/nikhilsinghux/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//   },
//   {
//     name: "Rohit Kulkarni",
//     role: "Software Engineer",
//     image: rohit,
//     linkedin: "https://www.linkedin.com/in/rohit-kulkarni-4941a2181/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//   },
//   {
//     name: "Naba Missong",
//     role: "Full Stack Developer",
//     image: naba,
//     linkedin: "https://www.linkedin.com/in/mrmissong/",
//   },
//   // {
//   //   name: "MeerAbbas",
//   //   role: "",
//   //   image: ,
//   //   linkedin: "https://www.linkedin.com/in/mohammad-abbas110/",
//   // },
//   {
//     name: "Sakshi Raj",
//     role: "Communications Lead ",
//     image: sakshi,
//     linkedin: "https://www.linkedin.com/in/sakshi-raj-b2b0761a7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
// ]

// export default function TeamSection() {
//   const [startIndex, setStartIndex] = useState(0)
//   const carouselRef = useRef<HTMLDivElement>(null)

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : teamMembers.length - 1))
//   }

//   const handleNext = () => {
//     setStartIndex((prevIndex) => (prevIndex < teamMembers.length - 1 ? prevIndex + 1 : 0))
//   }

//   useEffect(() => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
//     }
//   }, [startIndex])

//   const visibleMembers = () => {
//     return teamMembers.slice(startIndex).concat(teamMembers.slice(0, startIndex))
//   }

//   return (
//     <section className="px-4  md:mx-4  " id="team">
//       <div className="mx-auto max-w-7xl text-center">
//         <h1 className="mb-12 text-4xl font-bold text-white md:text-5xl">Our Team</h1>

//         <div className="relative mt-12">
//           <div ref={carouselRef} className="flex space-x-8 overflow-x-hidden scrollbar-hide">
//             {visibleMembers().map((member, index) => (
//               <div
//                 key={member.name}
//                 className={`flex-none w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.333rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.6rem)] ${
//                   index >= 2 ? "hidden sm:block" : ""
//                 } ${index >= 3 ? "hidden md:block" : ""} ${index >= 4 ? "hidden lg:block" : ""}`}
//               >
//                 <div className="flex flex-col items-center">
//                   <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-full">
//                     <Image
//                       src={member.image || "/placeholder.svg"}
//                       alt={`${member.name}'s profile`}
//                       fill
//                       className="object-cover"
//                       placeholder="blur"
//                     />
//                   </div>
//                   <h3 className="text-center text-lg font-medium text-white">{member.name}</h3>
//                   <p className="mt-1 text-center text-sm text-fuchsia-500">{member.role}</p>
//                   <Link
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-2 rounded-lg bg-black/50 p-2 text-white transition-colors hover:text-fuchsia-500"
//                   >
//                     <Linkedin size={24} />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center justify-center mt-6">
//           <div className="flex space-x-4">
//             <button
//               className="text-white"
//               aria-label="Previous"
//               onClick={handlePrev}
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               className="text-white"
//               aria-label="Next"
//               onClick={handleNext}
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image, { type StaticImageData } from "next/image"
import { Linkedin, Github, Send } from "lucide-react"
import Link from "next/link"
import sanjeev from "@/assets/images/Sanjeev.png"
import mario from "@/assets/images/Mario.png"
import harsh from "@/assets/images/Harsh.png"
import vivek from "@/assets/images/Vivek.png"
import pranjali from "@/assets/images/Pranjali.png"
import manav from "@/assets/images/Manav.png"
import tarun from "@/assets/images/Tarun.png"
import nikhil from "@/assets/images/Nikhil.png"
import rohit from "@/assets/images/Rohit.png"
import naba from "@/assets/images/Naba.png"
import meerabbas from "@/assets/images/Abbas.png"
import sakshi from "@/assets/images/Sakshi.png"

interface TeamMember {
  name: string
  role: string
  image: StaticImageData
  linkedin: string
  telegram?: string
  github?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Sanjeev Kumar",
    role: "CEO & Co-founder",
    image: sanjeev,
    linkedin: "https://www.linkedin.com/in/sanjeevvepsun/",
    telegram: "@sanjeevseengh",
    // github: "https://github.com/sanjeevvepsun",
  },
  {
    name: "Mario Christian",
    role: "CMO & Co-founder",
    image: mario,
    linkedin: "https://www.linkedin.com/in/mario-christian-992265143/",
    telegram: "@mariodecentralized",
  },
  {
    name: "Harsh Raj",
    role: "CTO & Co-founder",
    image: harsh,
    linkedin: "https://www.linkedin.com/in/harsh-raj-2b8709129/",
    telegram: "@harshtechilia",
    github: "https://github.com/Harsh48",
  },
  {
    name: "Pranjali Chouhan",
    role: "Head of AI & Web3 Infra",
    image: pranjali,
    linkedin: "https://www.linkedin.com/in/pranjali-chouhan-74b202245/",
    telegram: "@Pranjali_200",
    github: "https://github.com/PranjaliChouhan",
  },
  {
    name: "Vivek Pandav",
    role: "Head of Design",
    image: vivek,
    linkedin: "https://www.linkedin.com/in/vivek-pandav-uiux-product-designer/",
    // telegram: "https://t.me/vivek_pandav",
  },
  {
    name: "Sakshi Raj",
    role: "Communications Lead ",
    image: sakshi,
    linkedin:
      "https://www.linkedin.com/in/sakshi-raj-b2b0761a7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    telegram: "@Sakshirajj",
  },
  {
    name: "Manav Singh",
    role: "CBDO",
    image: manav,
    linkedin: "https://www.linkedin.com/in/manav24/",
    telegram: "@manavsingh947",
  },
  {
    name: "Tarun Lala",
    role: "SMM",
    image: tarun,
    linkedin: "https://www.linkedin.com/in/tarun-lala1/",
    // telegram: "https://t.me/tarunlala1",
  },
  {
    name: "Nikhil Singh",
    role: "UI/UX Designer",
    image: nikhil,
    linkedin:
      "https://www.linkedin.com/in/nikhilsinghux/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    telegram: "@nikhil_ux",
  },
  {
    name: "Rohit Kulkarni",
    role: "Software Engineer",
    image: rohit,
    linkedin:
      "https://www.linkedin.com/in/rohit-kulkarni-4941a2181/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    // telegram: "https://t.me/rohitkulkarni1",
    // github: "https://github.com/rohitkulkarni1",
  },
  {
    name: "Naba Missong",
    role: "Full Stack Developer",
    image: naba,
    linkedin: "https://www.linkedin.com/in/mrmissong/",
    telegram: "@mrmissong",
    github: "github.com/mrmissong",
  },
  {
    name: "Abbas Abidi",
    role: "Full Stack Developer",
    image: meerabbas,
    linkedin: "https://www.linkedin.com/in/mohammad-abbas110/",
    telegram: "@Abidi_Abbas",
    github: "https://github.com/MdAbbas110",
  },
]

export default function TeamSection() {
  return (
    <section className="px-4 md:mx-4" id="team">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">Our Team</h1>
        <h3 className="text-white/50 mb-10">Demystifying RoleChain's Decentralized AI Network</h3>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}'s profile`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <h3 className="text-center text-lg font-medium text-white">{member.name}</h3>
              <p className="mt-1 text-center text-sm text-fuchsia-500">{member.role}</p>
              <div className="mt-2 flex space-x-2">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-black/50 p-2 text-white transition-colors hover:text-fuchsia-500"
                >
                  <Linkedin size={20} />
                </Link>
                {member.telegram && (
                  <Link
                    href={
                      member.telegram.startsWith("@") ? `https://t.me/${member.telegram.slice(1)}` : member.telegram
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-black/50 p-2 text-white transition-colors hover:text-fuchsia-500"
                  >
                    <Send size={20} />
                  </Link>
                )}
                {member.github && (
                  <Link
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-black/50 p-2 text-white transition-colors hover:text-fuchsia-500"
                  >
                    <Github size={20} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

