import { useQuery } from "react-query";
import LandingPageLayout from "../../layout/LandingPageLayout/LandingPageLayout"
import api from "../../service/axios";
import Box from "../../shared/Box/Box"
import PostPreview from "../../shared/PostPreview/PostPreview"


export type BlogType={
  id:number;
  comments:any[],
  blog_paragraphs:{input_text:string,image:string}[],
  title:string;
  main_image:string;
  author:string;
  category:string;
  date_created:string;
  get_paragraph_intro:string;
}

const getBlogs=async ():Promise<BlogType[]>=>{

    const resp = await api.get('blog/blog-view/')
    return resp.data.results
}

const Blog = ()=>{
    const {isLoading,data} = useQuery('getBlogs',getBlogs)
    console.log({data})
    return (
        <LandingPageLayout>
            {
                data?.map((d,index)=>(
                    <PostPreview
                    key={index}
                    blog={d}
                    moveTo={index%2==0?'right':'left'}
                    />
                ))
            }
        </LandingPageLayout>
    )
}

export default Blog