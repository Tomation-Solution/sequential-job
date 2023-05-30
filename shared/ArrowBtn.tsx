import Box from "./Box/Box"
import { useRouter } from "next/router"
import  {FaArrowRight} from 'react-icons/fa'




const ArrowBtn = ({to}:{to:string})=>{
    const route=useRouter()
    return (
        <Box
        css={{'display':'flex','alignItems':'center',
        'justifyContent':'center','backgroundColor':'#24CDE2',
      'height':'30px','width':'30px','borderRadius':'50%','fontSize':'1.7rem',
      'cursor':'pointer'
      }}
      onClick={e=>{
        route.push(to)
      }}
        >
        <FaArrowRight/>
        </Box>
    )
}

export default ArrowBtn