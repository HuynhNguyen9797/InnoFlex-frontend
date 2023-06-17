import { useAuthenContext } from '../context/AuthenContext';
import {Button} from 'antd';
import { HeaderDropDown } from './HeaderDropDown';

export function HeaderButton(){
  const {user, setOpenSignModal, setOpenSignUpModal } = useAuthenContext();
  const handlerSignInClick = () => {
    setOpenSignModal(true);
  }

  const handleSignUpClick = () => {
    console.log('sign up');
    setOpenSignUpModal(true)
  }
  return <div>
    {
      false ? <HeaderDropDown/> :
      <div>
        <Button size='large' className='bg-blue-500 text-white mr-5 ' onClick = {handleSignUpClick}>Sign up </Button>
        <Button size='large' className='bg-white ' onClick = {handlerSignInClick}>Sign in </Button>
      </div>
    }
  </div>
}