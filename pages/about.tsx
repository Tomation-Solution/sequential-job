import { NextPage } from "next";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import Image from '../asset/aboutPage.png'
import HeaderInfoSection from "../shared/HeaderInfoSection/HeaderInfoSection";





const About:NextPage = ()=>{

    return (
        <LandingPageLayout>
            <HeaderInfoSection
            heading="About Sequential Jobs"
            content={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.         
            `}
            isBtn={true}
            imageSrc={Image.src}
            />
        </LandingPageLayout>
    )
}

export default About