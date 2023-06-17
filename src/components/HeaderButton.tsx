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
      user ? <span>{user.username}</span> : <Button onClick = {handlerClick}>Sign in </Button>
    }
  </div>
}