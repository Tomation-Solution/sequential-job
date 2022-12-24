import React from "react";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "./Tabs.style";


type TabData = {
    'key':string,
    'label':string,
    template:React.ReactNode
}
type Prop = {
    data:TabData[]
}


const TabsComp = ({ data }:Prop):React.ReactElement => (
    <TabsRoot defaultValue={data[0].key}>
      <TabsList aria-label="Manage your account">
        {
            data.map((value,index)=>(
                <TabsTrigger key={index} value={value.key}>{value.label}</TabsTrigger>
            ))
        }
        {/* <TabsTrigger value="tab2">Password</TabsTrigger> */}
      </TabsList>

        {
            data.map((value,index)=>(
                <TabsContent value={value.key} key={index}>
                {value.template}
              </TabsContent>
            ))
        }
    </TabsRoot>
  );
  

  export default TabsComp;
  