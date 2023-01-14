import { NextPage } from "next";
import { useQuery } from "react-query";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import { get_all_quetion } from "../../../service/api/job.api";
import Box from "../../../shared/Box/Box";
import InterviewDateSelect from "../../../shared/InterVIews/InterviewDateSelect/InterviewDateSelect";
import Preloader from "../../../shared/Preloader/Preloder";






const ListOfQuetionsL:NextPage = ()=>{
    const {isLoading,data,isError} = useQuery('questions',get_all_quetion)
    return (
        <GeneralLayout>
<Preloader loading={isLoading} />

            <h1>All Quetions</h1>
            <br />
            <br />
            <Box css={{'display':'flex','flexWrap':'wrap'}}>
                {
                   data?data.map((quetion,index)=>(
                        <Box css={{'margin':'.7rem','cursor':'pointer'}}>
                        <InterviewDateSelect key={quetion.id} >
                        {quetion.title}
                        </InterviewDateSelect>
                        </Box>
                    )):''
                }
            </Box>
        </GeneralLayout>
    )
}
export default ListOfQuetionsL