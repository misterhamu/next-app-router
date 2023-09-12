'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

type Props = {

}

export default function Blog({}: Props) {
    const searchParams = useSearchParams();
    const id = searchParams.getAll('id')
  return (
    <div>page id: {id}</div>
  )
}