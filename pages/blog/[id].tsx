import { useRouter } from "next/router"
import { BlogType } from "."
import LandingPageLayout from "../../layout/LandingPageLayout/LandingPageLayout"
import { BlogDetailContentContainer, BlogDetailMainImageContainer, BlogDetailOurProductCardContainer, BlogDetailOurProductContainer, BlogHeaderContainer, ContentPane } from "../../styles/BlogDetail.style"
import { useQuery } from "react-query"
import api from "../../service/axios"
import Box from "../../shared/Box/Box"

// import { BlogDetailContentContainer, BlogDetailMainContainer, BlogDetailMainImageContainer, BlogDetailOurProductCardContainer, BlogDetailOurProductContainer, BlogHeaderContainer, ContentPane } from '../../styles/BlogDetail.style'


const getBlogsdetail = async (id:any):Promise<BlogType>=>{
    const resp = await api.get(`blog/blog-view/${id}`)
    return resp.data

}
const DetailPage = ()=>{
    const route = useRouter()
    const {id} =route.query
    const {isLoading,data:blog} = useQuery(['getBlogsdetail',id],()=>getBlogsdetail(id),{
      'enabled':typeof id == 'string'
    })

    return (
        <LandingPageLayout>

         <Box css={{'color':'$thickBlue'}}>
         {
          blog?
            <BlogDetailContentContainer>

              <BlogDetailMainImageContainer>
                <img src={blog?.main_image} alt="" />
              </BlogDetailMainImageContainer>   

              <BlogHeaderContainer>
                <h2>{blog?.title}</h2>
                <div>
                  <p>{new Date(blog.date_created).toDateString()}</p>
                  <p><strong>writer: </strong><span>{blog.author} </span></p>
                </div>
                {/* <p><strong>HR Management/10 Mins Read</strong></p> */}
              </BlogHeaderContainer>


              {
                blog?.blog_paragraphs.length!=0?
                  blog?.blog_paragraphs?.map((data:any,index:any)=>(
                    <ContentPane key={index}>
                      <img src={data.image} alt="" />
                      <p>{data.input_text}</p>
                    </ContentPane>
                  ))
                  :
                  ''
              }

           
            </BlogDetailContentContainer>:''
        }

         </Box>
        </LandingPageLayout>
    )
}

export default  DetailPage