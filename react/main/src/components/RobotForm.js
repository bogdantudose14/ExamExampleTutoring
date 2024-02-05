import { useState } from 'react'
import store from '../stores/RobotStore'

const RobotForm = () => {
  const [robotName, setRobotName] = useState('') // [robotName, setRobotName]
  const [robotType, setRobotType] = useState('') //
  const [robotMass, setRobotMass] = useState('') //

  const handleRobotAdd = event => {
    store.addRobot({ name: robotName, type: robotType, mass: robotMass })

    // console.log({
    //   name: robotName,
    //   type: robotType,
    //   mass: robotMass
    // })
  }

  return (
    <div>
      <h1>{'Robot form'}</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          setRobotName('')
          setRobotType('')
          setRobotMass('')
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <input
          id='name'
          aria-label='name'
          type='text'
          placeholder='Insert name here'
          onChange={event => {
            setRobotName(event.target.value)
          }}
          value={robotName}
        ></input>
        <input
          id='type'
          aria-label='type'
          type='text'
          placeholder='Insert type here'
          onChange={event => {
            setRobotType(event.target.value)
          }}
          value={robotType}
        ></input>
        <input
          id='mass'
          aria-label='mass'
          type='text'
          placeholder='Insert mass here'
          onChange={event => {
            setRobotMass(event.target.value)
          }}
          value={robotMass}
        ></input>
        <button onClick={handleRobotAdd}>Add</button>
      </form>
    </div>
  )
}

export default RobotForm
