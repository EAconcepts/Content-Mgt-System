import React from 'react'
import { TagsProps } from '@/@types'
import { twMerge } from 'tailwind-merge'

const Tags = ({tagName, color, className, ballPoint}: TagsProps) => {
  return (
    <button className={ twMerge(`flex gap-x-[10px] items-center justify-center rounded-[24px] border-[1px] border-black bg-white text-center py-[16px] px-[32px]`, className)}>
    <div className={twMerge(`bg-[${color}] w-[16px] h-[16px] rounded-full `, ballPoint)}></div>
    <p>{tagName}</p>
</button>
  )
}

export default Tags