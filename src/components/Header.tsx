import React, {useContext} from "react";
import  {Button} from 'antd';
import { useAuthenContext } from '../context/AuthenContext'

export default function Header(){
    return <header className='flex justify-end my-3'>
        <Button className=" text-center mr-3 ">Visit As Guest</Button>
        <Button className=" text-center">Sign in as Admin</Button>
    </header>
}