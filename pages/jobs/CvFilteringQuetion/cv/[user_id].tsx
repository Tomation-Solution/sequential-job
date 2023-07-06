import { useQuery } from "react-query"
import GeneralLayout from "../../../../layout/GeneralLayout/GeneralLayout"
import Box from "../../../../shared/Box/Box"
import InputWithLabel from "../../../../shared/InputWithLabel/InputWithLabel"
import { get_jobseerker_profile } from "../../../../service/api/companyJobDashboard"
import { useRouter } from "next/router"
import Preloader from "../../../../shared/Preloader/Preloder"
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react"


const schema = yup.object({
    personal_statement: yup.string().required(),
    phone_number: yup.string().required(),
    first_name: yup.string().required(),
    middle_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    addresse: yup.string().required(),
    city: yup.string().required(),
  
    state: yup.string().required(),
    country_of_residence: yup.string().required(),
    linkdin: yup.string().required(),
    twitter: yup.string().required(),
    education: yup.array().of(
      yup.object({
        degree_type: yup.string(),
        school_name: yup.string(),
        start_year: yup.string(),
        end_year: yup.string(),
        course_of_study: yup.string(),
      })
    ),
    experience: yup.array().of(
      yup.object({
        company: yup.string(),
        start_year: yup.string(),
        end_year: yup.string(),
        role: yup.string(),
        responsibilities: yup.string(),
      })
    ),
    certification: yup.array().of(
      yup.object({
        certification: yup.string(),
        issuer: yup.string(),
        start_year: yup.string(),
      })
    ),
    refrences: yup.array().of(
      yup.object({
        full_name: yup.string(),
        relationship: yup.string(),
        email: yup.string(),
        phone_number: yup.string(),
      })
    ),
  });
  export type CvManagementFormType = yup.InferType<typeof schema>;





const CVPage =()=>{
    const route = useRouter()
    const {user_id} = route.query
    const {isLoading,data} = useQuery(['get_jobseerker_profile',user_id],()=>get_jobseerker_profile(typeof user_id==='string'?user_id:''),{
        'enabled':typeof user_id==='string'
    })

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
      } = useForm<CvManagementFormType>({
        //@ts-ignore
        resolver: yupResolver(schema),
      });
    

      const {
        fields: education__fields,
        append: education__append,
        remove: education__remove,
      } = useFieldArray({
        control,
        name: "education",
      });
    
      const {
        fields: experience__fields,
        append: experience__append,
        remove: experience__remove,
      } = useFieldArray({
        control,
        name: "experience",
      });
    
      const {
        fields: certification__fields,
        append: certification__append,
        remove: certification__remove,
      } = useFieldArray({
        control,
        name: "certification",
      });
    
      const {
        fields: refrences__fields,
        append: refrences__append,
        remove: refrences__remove,
      } = useFieldArray({
        control,
        name: "refrences",
      });
    
    console.log({data})
    useEffect(() => {
        console.log(data);
        const cvstructure =data?.user_extra.job_seakers;
        if (data) {
          setValue("phone_number", data.phone_number);
        }
        if (cvstructure) {
          setValue("personal_statement", cvstructure.cvStucture.personal_statement);
          setValue("first_name", cvstructure.cvStucture.first_name);
          setValue("middle_name", cvstructure.cvStucture.middle_name);
          setValue("last_name", cvstructure.cvStucture.last_name);
          setValue("email", cvstructure.cvStucture.email);
          setValue("city", cvstructure.cvStucture.addresse);
          setValue("state", cvstructure.cvStucture.state);
          setValue(
            "country_of_residence",
            cvstructure.cvStucture.country_of_residence
          );
          setValue("linkdin", cvstructure.cvStucture.linkdin);
          setValue("twitter", cvstructure.cvStucture.twitter);
          setValue("education", cvstructure.cvStucture.education);
          setValue("experience", cvstructure.cvStucture.experience);
          setValue("certification", cvstructure.cvStucture.certificaton);
          setValue("refrences", cvstructure.cvStucture.refrences);
          setValue("addresse", cvstructure.cvStucture.addresse);
        }
      }, [data]);
    return (
        <GeneralLayout>
            <Box css={{'color':'$thickText',}}>
                <Preloader loading={isLoading} />
                <h1>CV Details</h1>
                    <br />

                    <Box css={{
                        'display':'grid',
                        'gridTemplateColumns':'1fr 1fr 1fr',
                        'gap':'10px',
                        'padding':'1rem'
                    }}>
                       <InputWithLabel
              label="First Name"
              register={register("first_name")}
            />

            <InputWithLabel
              label="Middle Name"
              register={register("middle_name")}
            />

            <InputWithLabel
              label={"Last Name"}
              register={register("last_name")}
            />

            <InputWithLabel
              label={"Phone Number"}
              register={register("phone_number")}
            />
            <InputWithLabel label={"Email"} register={register("email")} />
            <InputWithLabel label={"Address"} register={register("addresse")} />

            <InputWithLabel label={"City"} register={register("city")} />
            <InputWithLabel label={"State"} register={register("state")} />
            <InputWithLabel label={"Country of Residence"} register={register("country_of_residence")} />

            <InputWithLabel label="linkedin" register={register("linkdin")} />
            <InputWithLabel label="Twitter" register={register("twitter")} />


                    </Box>
            </Box>
            <Box css={{
                'fieldset':{
                    'padding':'1rem',
                },
                'fieldset div':{
                    'display':'flex',
                    'gap':'10px',
                    'flexWrap':'wrap'
                }
            }}>
            <br />
                <fieldset>
                    <legend>
                        Education
                    </legend>
                    <Box css={{
                        'display':'grid',
                        'gridTemplateColumns':'repeat(1fr,3)',
                        
                    }}>
  



{
    
education__fields.map((field, index) => (
    <div key={field.id}>
      <InputWithLabel
        label="School Name"
        register={register(`education.${index}.school_name`)}
      />
      <InputWithLabel
        label="Start Year"
        register={register(`education.${index}.start_year`)}
      />

      <InputWithLabel
        label="End Year"
        register={register(`education.${index}.end_year`)}
      />

<InputWithLabel
        label="Type of Degree"
        register={register(`education.${index}.degree_type`)}
      />
    </div>))
}


                    </Box>
                </fieldset>
                <br />
                <fieldset>
                    <legend>
                        Experience 
                    </legend>

                    {experience__fields.map((field, index) => (
              <div key={field.id}>
                <InputWithLabel
                  label="Company"
                  register={register(`experience.${index}.company`)}
                />
                <InputWithLabel
                  label="Start Year"
                  register={register(`experience.${index}.start_year`)}
                />

                <InputWithLabel
                  label="End Year"
                  register={register(`experience.${index}.end_year`)}
                />

                <InputWithLabel
                  label="Role"
                  register={register(`experience.${index}.role`)}
                />

                <InputWithLabel
                  label="Responsibilities"
                  register={register(`experience.${index}.responsibilities`)}
                />
                </div>))
                }

                </fieldset>
                <br />
                <fieldset>
                    <legend>
                        Certification
                    </legend>

                    {certification__fields.map((fields, index) => (
              <div key={fields.id}>
                <InputWithLabel
                  label="Certification"
                  register={register(`certification.${index}.certification`)}
                />

                <InputWithLabel
                  label="Issuer"
                  register={register(`certification.${index}.issuer`)}
                />
                <InputWithLabel
                  label="Issuer"
                  register={register(`certification.${index}.issuer`)}
                />
                </div>))
                    }
                </fieldset>
                <br />
                <fieldset>
                    <legend>
                        Refernces
                    </legend>

                    {refrences__fields.map((field, index) => (
                            <div key={field.id}>
                                <InputWithLabel
                                label="Full Name"
                                register={register(`refrences.${index}.full_name`)}
                                />

                                <InputWithLabel
                                label="Relationship"
                                register={register(`refrences.${index}.relationship`)}
                                />

                                <InputWithLabel
                                label="Email"
                                register={register(`refrences.${index}.email`)}
                                />
                                <InputWithLabel
                                label="Phone Number"
                                register={register(`refrences.${index}.phone_number`)}
                                />
                            </div>
            ))}

                </fieldset>

            </Box>
        </GeneralLayout>
    )
}

export default CVPage