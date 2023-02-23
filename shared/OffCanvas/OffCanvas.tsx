import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Box from '../Box/Box'
import { useTheme } from "next-themes";

type Prop =React.PropsWithChildren<
{
//   btnContrroller:React.ReactElement;
  size?:number;
  direction?:'left'|'right'|'bottom';
  btnClick?:()=>void;
  isOpen:boolean;
 setIsOpen:any;
}>

const OffCanvas = ({children,isOpen,setIsOpen,size=40,direction='left',btnClick=()=>null}:Prop):React.ReactElement=>{
  const { theme, setTheme } = useTheme();

//   const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    btnClick()
    setIsOpen((prevState:boolean) => !prevState)
  }


  return (
    <>
      {/* <div onClick={toggleDrawer} 
      // style={{'border':'1px solid red'}}
      >
        
        {btnContrroller}
      </div> */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className='bla bla bla'
        size={`${size}%`}
        direction={direction}
        zIndex={4000}
        style={{'overflow':'scroll'}}
      >
        <Box 
        css={{
          'backgroundColor': theme==='landing_page'?'white':'$thickBlue'
        }}
        >

        <br />
        <br />
        {
          children
        }
        </Box>
      </Drawer>
    </>
  )
}

export default OffCanvas