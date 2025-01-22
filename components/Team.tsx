// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image, { type StaticImageData } from "next/image";
// import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
// import Link from "next/link";
// import sanjeev from "@/assets/images/Sanjeev.png";
// import mario from "@/assets/images/Mario.png";
// import harsh from "@/assets/images/Harsh.png";
// import vivek from "@/assets/images/Vivek.png";
// import pranjali from "@/assets/images/Pranjali.png";
// import manav from "@/assets/images/Manav.png";
// import tarun from "@/assets/images/Tarun.png";

// interface TeamMember {
//   name: string;
//   role: string;
//   image: StaticImageData;
//   linkedin: string;
// }

// const teamMembers: TeamMember[] = [
//   {
//     name: "Sanjeev Kumar",
//     role: "CEO & Co-founder",
//     image: sanjeev,
//     linkedin: "https://www.linkedin.com/in/sanjeev-kumar",
//   },
//   {
//     name: "Mario Christian",
//     role: "CMO",
//     image: mario,
//     linkedin: "https://www.linkedin.com/in/mario-christian",
//   },
//   {
//     name: "Harsh Raj",
//     role: "CTO",
//     image: harsh,
//     linkedin: "https://www.linkedin.com/in/harsh-raj",
//   },
//   {
//     name: "Vivek Pandav",
//     role: "Head of Design",
//     image: vivek,
//     linkedin: "https://www.linkedin.com/in/vivek-pandav",
//   },
//   {
//     name: "Pranjali Chouhan",
//     role: "Head of AI & Web3 Infra",
//     image: pranjali,
//     linkedin: "https://www.linkedin.com/in/pranjali-chouhan",
//   },
//   {
//     name: "Manav Singh",
//     role: "CBDO",
//     image: manav,
//     linkedin: "https://www.linkedin.com/in/manav-singh",
//   },
//   {
//     name: "Tarun Lala",
//     role: "SMM",
//     image: tarun,
//     linkedin: "https://www.linkedin.com/in/tarun-lala",
//   },
// ];

// export default function TeamSection() {
//   const [startIndex, setStartIndex] = useState(0);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const handlePrev = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : teamMembers.length - 1,
//     );
//   };

//   const handleNext = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex < teamMembers.length - 1 ? prevIndex + 1 : 0,
//     );
//   };

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//     }
//   }, [startIndex]);

//   const visibleMembers = (count: number) => {
//     return teamMembers
//       .slice(startIndex)
//       .concat(teamMembers.slice(0, startIndex))
//       .slice(0, count);
//   };

//   return (
//     <section className="px-4 py-16" id="team">
//       <div className="mx-auto max-w-7xl text-center ">
//         <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
//           Our Team
//         </h1>

       

//         <div

//           ref={scrollRef}
//           className="flex justify-center space-x-8 overflow-x-auto scrollbar-hide my-12"
//           style={{ scrollSnapType: "x mandatory" }}
//         >
//           {visibleMembers(5).map((member) => (
//             <div
//               key={member.name}
//               className="flex w-48 flex-none flex-col items-center"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <div className="relative mb-4 aspect-square w-48 overflow-hidden rounded-full">
//                 <Image
//                   src={member.image || "/placeholder.svg"}
//                   alt={`${member.name}'s profile`}
//                   fill
//                   className="object-cover"
//                   placeholder="blur"
//                 />
//               </div>
//               <h3 className="text-center text-lg font-medium text-white">
//                 {member.name}
//               </h3>
//               <p className="mt-1 text-center text-sm text-fuchsia-500">
//                 {member.role}
//               </p>
//               <Link
//                 href={member.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-lg bg-black/50 p-2 text-white transition-colors hover:text-fuchsia-500 mt-2"
//               >
//                 <Linkedin size={24} />
//               </Link>
//             </div>
//           ))}
//         </div>
        // <div className="mb-12 flex items-center justify-center">
        //   <div className="flex space-x-4">
        //     <button
        //       className="text-white"
        //       aria-label="Previous"
        //       onClick={handlePrev}
        //     >
        //       <ChevronLeft size={24} />
        //     </button>
        //     <button
        //       className="text-white"
        //       aria-label="Next"
        //       onClick={handleNext}
        //     >
        //       <ChevronRight size={24} />
        //     </button>
        //   </div>
        // </div>
//       </div>
//     </section>
//   );
// }

"use client"

import { useState, useRef, useEffect } from "react"
import Image, { type StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react"
import Link from "next/link"
import sanjeev from "@/assets/images/Sanjeev.png"
import mario from "@/assets/images/Mario.png"
import harsh from "@/assets/images/Harsh.png"
import vivek from "@/assets/images/Vivek.png"
import pranjali from "@/assets/images/Pranjali.png"
import manav from "@/assets/images/Manav.png"
import tarun from "@/assets/images/Tarun.png"

interface TeamMember {
  name: string
  role: string
  image: StaticImageData
  linkedin: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Sanjeev Kumar",
    role: "CEO & Co-founder",
    image: sanjeev,
    linkedin: "https://www.linkedin.com/in/sanjeevvepsun/",
  },
  {
    name: "Mario Christian",
    role: "CMO & Co-founder",
    image: mario,
    linkedin: "https://www.linkedin.com/in/mario-christian-992265143/",
  },
  {
    name: "Harsh Raj",
    role: "CTO & Co-founder",
    image: harsh,
    linkedin: "https://www.linkedin.com/in/harsh-raj-2b8709129/",
  },
  {
    name: "Vivek Pandav",
    role: "Head of Design",
    image: vivek,
    linkedin: "https://www.linkedin.com/in/vivek-pandav-uiux-product-designer/",
  },
  {
    name: "Pranjali Chouhan",
    role: "Head of AI & Web3 Infra",
    image: pranjali,
    linkedin: "https://www.linkedin.com/in/pranjali-chouhan-74b202245/",
  },
  {
    name: "Manav Singh",
    role: "CBDO",
    image: manav,
    linkedin: "https://www.linkedin.com/in/manav24/",
  },
  {
    name: "Tarun Lala",
    role: "SMM",
    image: tarun,
    linkedin: "https://www.linkedin.com/in/tarun-lala1/",
  },
]

export default function TeamSection() {
  const [startIndex, setStartIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : teamMembers.length - 1))
  }

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex < teamMembers.length - 1 ? prevIndex + 1 : 0))
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
    }
  }, [startIndex])

  const visibleMembers = () => {
    return teamMembers.slice(startIndex).concat(teamMembers.slice(0, startIndex))
  }

  return (
    <section className="px-4  md:mx-4  " id="team">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-12 text-4xl font-bold text-white md:text-5xl">Our Team</h1>

        <div className="relative mt-12">
          <div ref={carouselRef} className="flex space-x-8 overflow-x-hidden scrollbar-hide">
            {visibleMembers().map((member, index) => (
              <div
                key={member.name}
                className={`flex-none w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.333rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.6rem)] ${
                  index >= 2 ? "hidden sm:block" : ""
                } ${index >= 3 ? "hidden md:block" : ""} ${index >= 4 ? "hidden lg:block" : ""}`}
              >
                <div className="flex flex-col items-center">
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
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 rounded-lg bg-black/50 p-2 text-white transition-colors hover:text-fuchsia-500"
                  >
                    <Linkedin size={24} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
          <div className="flex space-x-4">
            <button
              className="text-white"
              aria-label="Previous"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="text-white"
              aria-label="Next"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

