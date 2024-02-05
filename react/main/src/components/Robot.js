function Robot (props) {
  return (
    <div>
      Hello, my name is {props.item.name}. I am a {props.item.type} and weigh{' '}
      {props.item.mass}
    </div>
  )
}

export default Robot
