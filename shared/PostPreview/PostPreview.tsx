import { useRouter } from "next/router"
import { PostPreviewContainer, PostPreviewContentContainer, PostPreviewImageContainer } from "./PostPreview.style"
import Button from "../Button/Button";
import { BlogType } from "../../pages/blog";


type Prop ={
    blog:BlogType,
    'moveTo'?:'right'|'left'
}
const PostPreview = ({ blog,moveTo='left' }:Prop):React.ReactElement=>{

    const route = useRouter()
  
    return (
      <>
        <PostPreviewContainer moveTo={moveTo}>
          <PostPreviewImageContainer moveTo={moveTo}>
            <img src={blog.main_image} alt="" />
          </PostPreviewImageContainer>
          <br />
          <br />
          <br />
          <br />
          <br />
          <PostPreviewContentContainer>
            <h2>{blog.title}</h2>
            <p>{blog.get_paragraph_intro}...</p>
            <Button
            // color='white'
            onClick={()=>route.push('/blog/'+blog.id)}>Read more</Button>
            {/* <p><strong>HR Management/10 Mins Read</strong></p> */}
          </PostPreviewContentContainer>
        </PostPreviewContainer>
        <br />
        <br />
      </>
    )
  }
  
  export default PostPreview