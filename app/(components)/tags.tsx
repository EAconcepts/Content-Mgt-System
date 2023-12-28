import React from 'react'
import { TagsProps } from '@/@types'

const Tags = ({tagName, color}: TagsProps) => {
  return (
    <button className="flex gap-x-[10px] items-center justify-center rounded-[24px] border-[1px] border-black bg-white text-center py-[16px] px-[32px]">
    <div className={`bg-[${color}] w-[16px] h-[16px] rounded-full `}></div>
    <p>{tagName}</p>
</button>
  )
}

export default Tags