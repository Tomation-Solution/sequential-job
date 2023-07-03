import LandingPageLayout from "../../layout/LandingPageLayout/LandingPageLayout"
import Box from "../../shared/Box/Box"
import PostPreview from "../../shared/PostPreview/PostPreview"




const Blog = ()=>{
    const blog ={
        main_image:'https://res.cloudinary.com/haqszgzma/image/upload/v1/media/blogpost/main_image/11/09/LINKING_YOUR_OBJECTIVES_TO_YOUR_KPIS_AND_TASKS_lonaxt',
        title:'LINKING YOUR OBJECTIVES TO YOUR KPIS AND TASKS.',
        get_paragraph_intro:'Often times, when appraisals are carried out by HRs, the focus is on tasks or if you like say, activ........',
        id:'2',
    }

    return (
        <LandingPageLayout>
            {
                [...new Array(10)].map((d,index)=>(
                    <PostPreview
                    key={index}
                    blog={blog}
                    moveTo={index%2==0?'right':'left'}
                    />
                ))
            }
        </LandingPageLayout>
    )
}

export default Blog