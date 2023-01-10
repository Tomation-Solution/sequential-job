import { useCallback, useEffect, useState } from "react";
import SimpleMDE from "easymde";
import SimpleMdeReact from "react-simplemde-editor";
import type { Editor, Position } from "codemirror";
import React from "react";
import Box from "./Box/Box";

type Prop = {
    setInstance:(value:any)=>void
}
export const GetInstance = ({setInstance}:Prop) => {
  // simple mde
  const [simpleMdeInstance, setMdeInstance] = useState<SimpleMDE | null>(null);

  const getMdeInstanceCallback = useCallback((simpleMde: SimpleMDE) => {
    setMdeInstance(simpleMde);
  }, []);

  useEffect(() => {
    simpleMdeInstance &&
      console.info("Hey I'm editor instance!", simpleMdeInstance);
      setInstance(simpleMdeInstance)
  }, [simpleMdeInstance]);

  // codemirror
  const [codemirrorInstance, setCodemirrorInstance] = useState<Editor | null>(
    null
  );
  const getCmInstanceCallback = useCallback((editor: Editor) => {
    setCodemirrorInstance(editor);
  }, []);

  useEffect(() => {
    codemirrorInstance &&
      console.info("Hey I'm codemirror instance!", codemirrorInstance);
  }, [codemirrorInstance]);

  // line and cursor
  const [lineAndCursor, setLineAndCursor] = useState<Position | null>(null);

  const getLineAndCursorCallback = useCallback((position: Position) => {
    setLineAndCursor(position);
  }, []);

  useEffect(() => {
    lineAndCursor &&
      console.info("Hey I'm line and cursor info!", lineAndCursor);
  }, [lineAndCursor]);

  return (
    <Box css={{
        'li':{
            'listStyleType':'circle'
        },
        'color':'$thickBlue',
        'button':{
            'backgroundColor':'$white'
        }
        
    }}>
      <h4>Getting instance of Mde and codemirror and line and cursor info</h4>
      <SimpleMdeReact
        value="Go to console to see stuff logged"
        getMdeInstance={getMdeInstanceCallback}
        getCodemirrorInstance={getCmInstanceCallback}
        getLineAndCursor={getLineAndCursorCallback}
      />
    </Box>
  );
};

export default GetInstance