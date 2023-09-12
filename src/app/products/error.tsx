"use client"
import React from 'react'

type Props = {
  error: Error
}

export default function ErrorPage({
  error
}: Props) {
  return (
    <div className='text-center mt-6'>
      <h2 className=' text-3xl text-red-500'>System Error: {error.message}</h2>
      <p>Please try again</p></div>
  )
}