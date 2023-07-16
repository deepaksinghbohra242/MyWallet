import React from 'react'
import CreateWallet from './CreateWallet'
import {useNavigate} from 'react-router-dom'

function CreateHook() {
    const navigate = useNavigate();
  return (
    <div>
      <CreateWallet navigate={navigate} />
    </div>
  )
}

export default CreateHook
