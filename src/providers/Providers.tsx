"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useState } from 'react'

interface QueryProps{
    children:ReactNode
}
export const Providers = ({children}:QueryProps) => {
    const [queryClient]=useState(()=> new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}
