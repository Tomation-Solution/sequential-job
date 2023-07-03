import { styled } from "../stitches.config";









export const BlogDetailMainImageContainer = styled('div',{
    width: '100%',
    margin: '10px auto',
    borderRadius: '20px',
    overflow: 'hidden',
    img:{
        width: '100%',
        height: '100%',
    },
    '@media screen  and (min-width: 800px)':{
        height: '400px',
        img:{
            objectFit: 'cover',
        }
    }
})
export const BlogHeaderContainer= styled('div',{
    h2:{
        fontSize: '1.2rem',
        color: '#072563',
    },
    '& > div':{
        padding: '.8rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '250px',
    },
    'span':{
        color: '#072563',
    }

})
export const ContentPane = styled('div',{
    'img':{
        'width': '80%',
        padding:'.8rem 0',
        maxWidth: '400px',
        margin: '0 auto',
        display: 'block',
    }
})


export const BlogDetailMainContainer=styled('div',{
    '@media screen and (min-width:800px)':{
        display: 'flex',
        padding: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin:  '0 auto',
    }
})
export const BlogDetailContentContainer = styled('div',{
    padding: '1rem',
    maxWidth: '800px',
    '@media screen and (min-width:800px)':{
            padding: '1rem 2rem',
            width: '70%',
    }

})
export const BlogDetailOurProductCardContainer = styled('div',{
    padding: '1rem 1.1rem',
    textAlign: 'center',
    backgroundColor: '#e7f2f7',
    maxWidth: '300px',
    borderRadius: '20px',
    margin:  '0 auto',
    marginBottom:'30px',
    cursor: 'pointer',
    h3:{
        color:' #072563',
    },
    img:{
        display: 'block',
        width: '250px',
        maxHeight: '250px',
        padding:' .8rem 0',
        objectFit:'contain',
        borderRadius: '20px',
        margin: '0 auto',
    }
})
export const BlogDetailOurProductContainer= styled('div',{
    textAalign: 'center',
    h2:{
    padding: '1rem .9rem',

    },
    '@media screen and (min-width:800px)':{
            display: 'grid',
            'grid-template-columns': 'repeat(1,1fr)',
            width: '30%',
        }
})