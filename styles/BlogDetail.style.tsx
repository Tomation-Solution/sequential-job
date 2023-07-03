import { styled } from "../stitches.config";









export const BlogDetailMainImageContainer = styled('div',{
    width: '100%',
    margin: '10px auto',
    borderRadius: '20px',
    overflow: 'hidden',
    img:{
        width: 100%;
        height: '100%',
    }
    @media screen  and (min-width: 800px){
        height: 400px;
        img{
            object-fit: cover;

        }
    }
})
export const BlogHeaderContainer= styled.div`
    h2{
        font-size: 1.2rem;
        color: #072563;
    }
    &> div{

        padding: .8rem 0;
        display: flex;
        justify-content: space-between;
        width: 250px;
    }

    span{
        color: #072563;;
    }

`

export const ContentPane = styled.div`

    img{
        width: 80%;
        padding:.8rem 0;
        max-width: 400px;
        margin: 0 auto;
        display: block;
    }
`


export const BlogDetailMainContainer=styled.div`
       @media screen and (min-width:800px){
                padding: 1rem;
                /* border:1px solid green; */
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 1200px;
                    margin:  0 auto;

        }
`
export const BlogDetailContentContainer = styled.div`
        padding: 1rem ;
        max-width: 800px;

        @media screen and (min-width:800px){
                padding: 1rem 2rem;
                /* border:1px solid red; */
                    width: 70%;
        }

`
export const BlogDetailOurProductCardContainer = styled.div`
    padding: 1rem 1.1rem;
    text-align: center;
    background-color: #e7f2f7;
    max-width: 300px;
    border-radius: 20px;
    margin:  0 auto;
    margin-bottom:30px;
    cursor: pointer;
    h3{
        color: #072563;
    }
    img{
        display: block;
        width: 250px;
        max-height: 250px;
        padding: .8rem 0;
        object-fit: contain;
        border-radius: 20px;
        margin: 0 auto;
    }
    
`
export const BlogDetailOurProductContainer= styled.div`
text-align: center;
h2{
padding: 1rem .9rem;

}
@media screen and (min-width:800px){
        display: grid;
        grid-template-columns: repeat(1,1fr);
        width: 30%;
     }

`