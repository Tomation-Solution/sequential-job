import { styled } from "../../stitches.config";
import * as Tabs from "@radix-ui/react-tabs";


export  const TabsRoot = styled(Tabs.Root, {
    display: "flex",
    flexDirection: "column",
    // width: 300,
    // boxShadow: `0 2px 10px black`
  });
  
 export const TabsList = styled(Tabs.List, {
    // flexShrink: 0,
    // display: "flex",
    // borderBottom: `1px solid pink`
  });
  
export  const TabsTrigger = styled(Tabs.Trigger, {
    all: "unset",
    fontFamily: "inherit",
    // backgroundColor: "white",
    padding: "0 20px",
    height: 45,
    // flex: 1,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    display:'inline-block',
    'marginRight':'10px',
    fontSize: 15,
    lineHeight: 1,
    color: '$white',
    userSelect: "none",
    'borderBottom':'5px solid $white',
    // "&:first-child": { borderTopLeftRadius: 6 },
    // "&:last-child": { borderTopRightRadius: 6 },
    "&:hover": { 
        color: '$lightBlue' 
    },
    '&[data-state="active"]': {
        color: '$lightBlue',
        'borderBottom':'3px solid $lightBlue'

    //   boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor"
    },
    "&:focus": {
         position: "relative", 
        //  boxShadow: `0 0 0 2px black`
         },


        
  });
  
 export const TabsContent = styled(Tabs.Content, {
    flexGrow: 1,
    paddingTop: 20,
    // backgroundColor: "white",
    // borderBottomLeftRadius: 6,
    // borderBottomRightRadius: 6,
    outline: "none",
    // "&:focus": { boxShadow: `0 0 0 2px black` }
  });
  