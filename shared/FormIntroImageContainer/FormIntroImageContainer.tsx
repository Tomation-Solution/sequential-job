import {FormIntroImageContainerStyle} from './FormIntroImageContainer.style'


type Prop  ={
  image:string
}
const FormIntroImageContainer = ({image}:Prop)=>{



  return (
    <FormIntroImageContainerStyle>
      <img src={image} alt="" />
    </FormIntroImageContainerStyle>
  )
}


export default FormIntroImageContainer