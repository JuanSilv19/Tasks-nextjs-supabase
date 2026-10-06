import { AvatarBadge } from '@/components/AvatarBadge'
import { LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function DashboardPage() {
  return (
    <>

      <nav className='flex justify-between px-6 py-4'>
        <div className="text-xl font-extrabold tracking-tight flex items-center gap-3">
          <LayoutGrid size={32} />
          Gestor de Tareas
        </div>

        <Link href="/profile">
          <AvatarBadge
            name="JuanSilv"
          />
        </Link>

      </nav>

    </>
  )
}