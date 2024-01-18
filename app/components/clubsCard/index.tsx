import { Club } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { logoFont } from "../header/logo"

type ClubsCardProps = {
  clubsList: Club[],
  division: string
}

export function ClubsCard({clubsList, division} : ClubsCardProps) {
  return (
  <div className='flex flex-col text-center p-2 rounded-md shadow-md bg-white'>
    <span className={`font-bold ${logoFont.className} text-blue-900 text-md mb-2`}>{division}</span>
    <div className='flex w-60 flex-wrap gap-3'>
      {clubsList.map((club:Club) => {
        return (
          <Link className='hover:bg-blue-100 p-1 flex items-center hover:rounded-md' key={club.id} href={`/clubs/${club.id}`}>
            <div className='w-10 flex flex-wrap items-center h-10'>
              <Image className="max-w-full max-h-full" width={40} height={40} src={club.badge_url} alt={club.name} />
            </div>
          </Link>
        ) 
      })}
    </div>
  </div>
  )
}