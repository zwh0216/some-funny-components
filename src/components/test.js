import React, {useEffect, useState} from 'react'

export const TestParent = () => {
  console.log('render TestParent');
  const [test, setTest] = useState(2)

  const clickHandler = () => {
    setTest(test + 1)
  }
  
  return (
    <div>
      <Test propsTest2={test} />
      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export const Test = (props) => {
  console.log('render Test');
  const [test1, setTest1] = useState(0)
  const [test2, setTest2] = useState(0)
  
  useEffect(() => {
    console.log('mount useEffect');
    setTest1('init useEffect')
  },[])

  useEffect(() => {
    console.log('propsTest useEffect');
    setTest2(props.propsTest)
  }, [props.propsTest])

  return (
    <div>
      <p>test1: {test1}</p>
      <p>test2: {test2}</p>
      <p>propsTest: {props.propsTest}</p>
    </div>
  )
}

export default TestParent
