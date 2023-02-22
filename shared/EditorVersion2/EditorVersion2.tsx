require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

import { useState } from 'react';
/* @ts-ignore */
import Editor from 'react-medium-editor';
import Box from '../Box/Box';



type Prop = {
  onChangeFunc:(text:string)=>void
}
const EditorVersion2= ({ onChangeFunc}:Prop):React.ReactElement=>{
    const [text,setText] = useState('')
  const  handleChange = (text:string, medium:any) =>{
    setText(text);
    onChangeFunc(text)
      }
    return (
        <div>
      <div className="app" >
        <label htmlFor="">Description</label>
        <Box css={{
           border:'1px solid $white',
           'padding':'.4rem',
           'width':'100%'
          //  'color':'Black'
        }}>
        <Editor  
        //  buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
        options={{
          toolbar:{'buttons': ['bold', 'italic', 'underline', 'h2', 'h3','h1', 'quote',]}
        }}
        style={{'outline':'none','width':'100%'}} text={text} onChange={handleChange} />

        </Box>
        {/* <h1>react-medium-editor</h1> */}
        {/* <h3>Html content</h3> */}
        {/* <div>{text}</div> */}

        {/* <h3>Editor #1 (&lt;pre&gt; tag)</h3>
        <Editor
          tag="pre"
          text={text}
          onChange={handleChange}
          options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
        /> */}
        {/* <h3>Editor #2</h3> */}
      </div>
        </div>
    )
}

export default EditorVersion2