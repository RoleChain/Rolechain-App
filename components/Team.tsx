import Image, { StaticImageData } from 'next/image'
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
}

const teamMembers: TeamMember[] = [
  { name: "Sanjeev Kumar", role: "CEO", image: sanjeev },
  { name: "Mario Christian", role: "CMO", image: mario },
  { name: "Harsh Raj", role: "CTO", image: harsh },
  { name: "Vivek Pandav", role: "Head of Design", image: vivek },
  { name: "Pranjali Chouhan", role: "Head of AI & Web3 Infra", image: pranjali },
  { name: "Manav Singh", role: "CBDO", image: manav },
  { name: "Tarun Lala", role: "SMM", image: tarun },
]

export default function TeamSection() {
  return (
    <section className="py-16 px-4" id='team'>
        <div className='mb-[70px]'>
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">Our Team</h1>
        
        <p className="text-white/60 text-base md:text-lg text-center mt-1">Demystifying RoleChain&apos;s Decentralized AI Network</p>
        </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col items-center ${
                index > 3 ? 'lg:col-span-1 md:translate-x-0 lg:translate-x-[50%]' : ''
              }`}
            >
              <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  fill
                  className="rounded-full object-cover"
                  placeholder="blur"
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-medium text-center">
                {member.name}
              </h3>
              <p className="text-fuchsia-500 text-base md:text-lg text-center mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

