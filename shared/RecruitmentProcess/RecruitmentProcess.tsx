import Box from "../Box/Box"
import { RecruitmentProcessBox } from "./RecruitmentProcess.style"
import tvGraph from '../../asset/tvGraph.svg'

import {BsFillFileBarGraphFill} from 'react-icons/bs'



type Prop ={
    heading:string;
    count:number
}
export const RecruitmentProcess = ({heading,count}:Prop)=>{


    return (
        <RecruitmentProcessBox>
            <BsFillFileBarGraphFill style={{'color':'green','fontSize':'4rem',
            'position':'absolute','left':'0'}}/>
            <h1>{heading}</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan
            </p>
            <h2>0{count}</h2>

        </RecruitmentProcessBox>
    )
}

export default RecruitmentProcess