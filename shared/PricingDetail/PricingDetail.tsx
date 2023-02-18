import { PricingDetailContainer } from "./PricingDetail.style"

import {BsCheck} from 'react-icons/bs'
import {IoIosClose} from 'react-icons/io'
import Button from "../Button/Button"

const CheckedStyle = {'border':'1px solid #24CDE2','color':'#24CDE2','borderRadius':'50%','transform':'translateY(1px)','marginRight':'10px'}
const UnCheckedStyle = {'border':'1px solid #EA5353','color':'#EA5353','borderRadius':'50%','transform':'translateY(1px)','marginRight':'10px'}

export type pringingProp ={
  pricing_type:string,
  pricing_price:string,
  pricing_info:{
    'text':string,'is_checked':boolean,}[],
  more_info?:string
}
const PricingDetail = ({pricing_type,pricing_info,pricing_price,more_info=''}:pringingProp):React.ReactElement=>{

    return (
        <PricingDetailContainer>
          <p className="pricing_type">{pricing_type}</p>
          <h2 className="pricing_price">{pricing_price}</h2>
        <br />
          {
            pricing_info.map((data,index)=>(
          <p className="pricing_info" key={index}>
            {
              data.is_checked?
              <BsCheck style={CheckedStyle}/>
            :
            <IoIosClose style={UnCheckedStyle}/>
            }
          {data.text}
          </p>

            ))
          }

        <br />
        <br />
        <p style={{'color':'#3A3A3A'}}>{more_info}</p>
        <br />
    <Button css={{'width':'100%'}}>
        Choose
    </Button>
        </PricingDetailContainer>
    )
}

export default PricingDetail