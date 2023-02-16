import { styled } from "../../stitches.config";



export const JobCardV2Container = styled('div',{
    boxShadow: '0px 4px 9px rgba(33, 33, 33, 0.1)',
    backgroundColor:'white',
    padding:'1rem',
    'maxWidth':'376px',
    'borderRadius':'10px',
    '.black':{
        'color':'#737373'
    },
    '.teal':' #14717C'
})

export const CompanyLogo =styled('div',{
'height':'40px','width':'40px','borderRadius':'5px',
'backgroundColor':'#14717C',
'fontWeight':'600',
'display':'flex','justifyContent':'center','alignItems':'center'
})