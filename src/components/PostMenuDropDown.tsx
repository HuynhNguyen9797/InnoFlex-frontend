import { useState } from 'react'
import {FcMenu} from 'react-icons/fc';
import {BiEditAlt} from 'react-icons/bi';
import {BsFillTrashFill} from 'react-icons/bs'

export function PostMenuDropdown() {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {setOpen(prev => !prev)}
  return (
    <div className='relative'>
      <FcMenu className = 'cursor-pointer'  onClick = {toggleOpen}/>
       {
        isOpen ? 
       <ul className='text-sm flex flex-col absolute right-0 top-5 border bg-white rounded-md shadow-md border-gray-300'>
        <li className='  cursor-pointer flex items-center gap-2 px-5 py-1 hover:bg-gray-300'>
        <BiEditAlt/> <span >Edit</span>
        </li>
        <li className='  cursor-pointer flex items-center gap-2 px-5 py-1 hover:bg-gray-300'>
        < BsFillTrashFill/> <span>Delete</span>
        </li>
      </ul>
      : null

       }
       
    </div>
  )
}
