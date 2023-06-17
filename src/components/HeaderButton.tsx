import React from 'react';
import { useAuthenContext } from '../context/AuthenContext';
import {Button} from 'antd'

export function HeaderButton(){
  const {user, setOpenSignModal } = useAuthenContext();
  const handlerClick = () => {
    setOpenSignModal(true);
  }
  return <div>
    {
      user ? <span>{user.username}</span> :
      <div>
        <Button size='large' className='bg-blue-500 text-white mr-5 ' onClick = {handlerClick}>Sign up </Button>
        <Button size='large' className='bg-white ' onClick = {handlerClick}>Sign in </Button>
      </div>
    }
  </div>
}