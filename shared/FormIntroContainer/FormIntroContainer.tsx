import { useMediaQuery } from 'react-responsive'
import {FormIntroContainerStyle} from './FormIntroContainer.style'

type formIntroContainerProp ={
  heading:{
    phone:string,
    laptop:string,
  },
  content:string;
}
const FormIntroContainer = ({heading,content}:formIntroContainerProp):React.ReactElement=>{

  const isLaptop = useMediaQuery({
    query: '(min-width: 500px)'
  })
  return (
    <FormIntroContainerStyle>
      <h2>{isLaptop?heading.laptop:heading.phone}</h2>
      <p>{content}</p>
    </FormIntroContainerStyle>
  )
}


export default FormIntroContainer