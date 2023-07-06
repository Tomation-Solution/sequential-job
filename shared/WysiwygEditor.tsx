'use client';

import HTMLReactParser from "html-react-parser";
import {FC, useRef} from "react";
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });



type TProps = {
    content:string
    setContent:(content:string) => void
    showPreview?:boolean
}


const WysiwygEditor:FC<TProps> = ({content, setContent, showPreview}) => {
    const editor = useRef(null);

    return (
        <div>
            <h1>Job Detail Content</h1>
            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
            />

            { showPreview && <div>{HTMLReactParser(content)}</div> }

        </div>
    );
}

export default WysiwygEditor



