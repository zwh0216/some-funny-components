import React, { useState } from 'react'
import { Button } from '../button'
import { BTNList } from '../../mock/index'

export const ButtonList = () => {
  const [ btnList, setBtnList ] = useState(BTNList)
  return (
    <div>
      {btnList.map(btn => 
        <Button>{btn.label}</Button>
      )}
    </div>
  )
}

export default ButtonList