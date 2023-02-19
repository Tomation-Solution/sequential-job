import { styled } from "../../stitches.config"


export type TableColumnType={Header:string,accessor:string,Cell?:any,id?:number}
export const TableStyle = styled('table',{

  'fontFamily':'Arial, Helvetica, sans-serif',
  'borderCollapse': 'collapse',
  color: '$lightText !important',

  width: '100%',
  'td, th': {
   border: '1px solid #ddd',
   padding: '8px',
  },
  'tr:nth-child(even)':{
    // backgroundColor: '#f2f2f2'
  },
  'tr:hover':{
    // backgroundColor: '#ddd',
    cursor: 'pointer'},
  'th': {
   paddingTop: '12px',
   paddingBottom: '12px',
   textAlign: 'left',
   backgroundColor:'$thickBlue',
   color: '$lightText !important',

  },
})
  
