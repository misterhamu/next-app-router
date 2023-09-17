import Link from 'next/link'
import React from 'react'

type Props = {}

export default function HooksPage({}: Props) {
  return (
    <div>
        <h1 className='text-4xl font-semibold'>React Hooks</h1>
        <div className='mt-3 flex flex-col gap-3'>
            <Link href="/hooks/use-state">- Use State</Link>
            <Link href="/hooks/use-effect">- Use Effect</Link>
            <Link href="/hooks/use-ref">- Use Ref</Link>
            <Link href="/hooks/use-context">- Use Context</Link>
            <Link href="/hooks/use-memo">- Use Memo</Link>
            <Link href="/hooks/use-callback">- Use Callback</Link>
        </div>
    </div>
  )
}