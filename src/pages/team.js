import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Team from "@/components/Team";
import ParticleContainer from "@/components/ParticleContainer";
import Image from "next/image";
import team from "../../public/images/backgrounds/team.jpeg";

import kt from "../../public/images/kt.jpeg";
import ab from "../../public/images/ab.jpeg";
import ys from '../../public/images/team/YASHVARDHAN_SHARMA.jpg';

import AADEESH_GARG from "../../public/images/team/AADEESH_GARG.jpeg";
import ADITYA_DANDWATE from "../../public/images/team/ADITYA_DANDWATE.jpeg";
import AKSHAY_SHUKLA from "../../public/images/team/AKSHAY_SHUKLA.jpeg";
import AMEESH from "../../public/images/team/AMEESH.png";
import ARCHIT_JAIN from "../../public/images/team/ARCHIT_JAIN.jpeg";
import ARYAN_BAKSHI from "../../public/images/team/ARYAN_BAKSHI.jpeg";
import ARYAN_SETH from "../../public/images/team/ARYAN_SETH.jpeg";
import Ashwin from "../../public/images/team/Ashwin.jpg";
import AVIRAL_GUPTA from "../../public/images/team/AVIRAL_GUPTA.jpeg";
import GOBIND_SINGH from "../../public/images/team/GOBIND_SINGH.jpg";
import GRANTH from "../../public/images/team/GRANTH.jpeg";
import HARSHIT_SARAF from "../../public/images/team/HARSHIT_SARAF.jpeg";
import HIMANSHU from "../../public/images/team/HIMANSHU.jpg";
import JAY_AGARWAL from "../../public/images/team/JAY_AGARWAL.jpg";
import KALPANA_PANDA from "../../public/images/team/KALPANA_PANDA.jpg";
import KAVYA_AGARWAL from "../../public/images/team/KAVYA_AGARWAL.jpeg";
import NITIN from "../../public/images/team/NITIN.jpeg";
import RACHIT_GANDHI from "../../public/images/team/RACHIT_GANDHI.jpeg";
import SAKSHAM_BANSAL from "../../public/images/team/SAKSHAM_BANSAL.jpeg";
import SHIVIKA from "../../public/images/team/SHIVIKA.jpg";
import SHUBHANG from "../../public/images/team/SHUBHANG.jpeg";
import SIDDHARTHA_GOTUR from "../../public/images/team/SIDDHARTHA_GOTUR.png";
import SRIRAM from "../../public/images/team/SRIRAM.jpeg";
import KAVAN_THAKKAR from "../../public/images/team/KAVAN_THAKKAR.png";
import SOURABH_BHANDARI from "../../public/images/team/SOURABH_BHANDARI.jpeg";
import UTKARSH from "../../public/images/team/UTKARSH.jpeg";
import VARUN_SAHNI from "../../public/images/team/VARUN_SAHNI.jpg";
import Yatharth from "../../public/images/team/Yatharth.png";
import KRISHAY_PRAKASH from "../../public/images/team/KRISHAY_PRAKASH.png";
import NISHANT_KUMAR from "../../public/images/team/NISHANT_KUMAR.jpg";
import PARTH_KHANDELWAL from "../../public/images/team/PARTH.jpg";
import SAMEER_SINGLA from "../../public/images/team/SAMEER_SINGLA.jpg";
import VIPUL_KOTHA from "../../public/images/team/VIPUL_KOTHA.jpeg";
import NISHIT_SINGH from "../../public/images/team/NISHIT_SINGH.jpeg";
import TANYA from "../../public/images/team/TANYA.jpg";
import HITANSH from "../../public/images/team/HITANSH.jpg";

const coreTeam = [
  {
    name: "Varun Sahni",
    role: "President",
    linkedIn: "http://www.linkedin.com/in/varun-sahni-profile/",
    link: "https://github.com/varunsahni18",
    image: VARUN_SAHNI,
  },
  {
    name: "Aryan Bakshi",
    role: "Coordinator",
    linkedIn: "https://www.linkedin.com/in/aryan-bakshi-005b27222/",
    link: "https://github.com/At0m0verr1de",
    image: ARYAN_BAKSHI,
  },
];

const projectTeam = [
  {
    name: "Nitin Aravind Birur",
    role: "Project Team Lead",
    linkedIn: "https://www.linkedin.com/in/nitin-a-b-921285229",
    link: "https://github.com/NitinAB1108",
    image: NITIN,
  },
  
  {
    name: "Akshay Shukla",
    role: "Project Team",
    linkedIn: "https://www.linkedin.com/in/akshay-shukla-5a589b256/",
    link: "https://github.com/Akshay1032",
    image: AKSHAY_SHUKLA,
  },
  {
    name: "Himanshu",
    role: "Project Team",
    linkedIn: "http://www.linkedin.com/in/himanshu-yadav-837682258",
    link: "https://github.com/BreezyThrone",
    image: HIMANSHU,
  },
  {
    name: "Shubhang Gautam",
    role: "Project Team",
    linkedIn: "https://www.linkedin.com/in/shubhang-gautam-821b09251",
    link: "https://github.com/gautamshubhang",
    image: SHUBHANG,
  },
 
  {
    name: "Sriram Hebbale",
    role: "Project Team",
    linkedIn: "https://www.linkedin.com/in/sriram-hebbale-b1113a25a/",
    link: "https://github.com/sriram-17-17",
    image: SRIRAM,
  },
  {
    name: "Saksham Bansal",
    role: "Project Team",
    linkedIn: "https://www.linkedin.com/in/saksham-bansal-b17047257/",
    link: "https://github.com/Saksham86",
    image: SAKSHAM_BANSAL,
  },
  {
    name: "Jay Agarwal",
    role: "Project Team",
    linkedIn: "https://www.linkedin.com/in/jay-agarwal-86067427a/",
    link: "https://github.com/JayAgarwal25",
    image: JAY_AGARWAL,
  },
  
  {
    name: "Harshit Saraf",
    role: "Project Team",
    linkedIn: "https://www.linkedin.com/in/harshit-saraf-494450230",
    link: "https://github.com/HrSf-01",
    image: HARSHIT_SARAF,
  },
  {
    name: "Parth Khandelwal",
    role: "Project Team",
    linkedIn: "",
    link: "",
    image: PARTH_KHANDELWAL,
  },
  {
    name: "Amandeep Singh",
    role: "Project Team",
    linkedIn: "",
    link: "",
    image: "",
  },
];

const researchTeam = [
  {
    name: "Aryan Seth",
    role: "Research Team Lead",
    linkedIn: "https://www.linkedin.com/in/aryanseth",
    link: "http://www.github.com/Aryan-Seth",
    image: ARYAN_SETH,
  },
 
  {
    name: "Ashwin Piyush",
    role: "Research Team",
    linkedIn: "http://www.linkedin.com/in/ashwins-860442226",
    link: "https://github.com/ashwinsathish?tab=repositories",
    image: Ashwin,
  },
  {
    name: "Saurabh Bhandari",
    role: "Research Team",
    linkedIn: "https://linkedin.com/in/saurabh-nsk",
    link: "https://github.com/SaurabhRBhandari",
    image: SOURABH_BHANDARI,
  },
  {
    name: "Aditya Dandwate",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/aditya-dandwate-269b91225",
    link: "https://github.com/AD-lite24",
    image: ADITYA_DANDWATE,
  },
  {
    name: "Aadeesh Garg",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/aadeeshgarg/",
    link: "https://github.com/AadeeshGarg",
    image: AADEESH_GARG,
  },
  
  {
    name: "Kalpana Panda",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/kalpana-panda-428bb324b/",
    link: "https://github.com/KP08082132",
    image: KALPANA_PANDA,
  },
  {
    name: "Yatharth Singh",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/yath",
    link: "https://github.com/lefteryx",
    image: Yatharth,
  },
  {
    name: "Siddhartha Gotur",
    role: "Research Team",
    linkedIn: "https://github.com/sidd1237",
    link: "https://github.com/sidd1237",
    image: SIDDHARTHA_GOTUR,
  },
  {
    name: "Ameesh Sethi",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/ameesh-sethi/",
    link: "https://github.com/Quick-One",
    image: AMEESH,
  },
  {
    name: "Aviral Gupta",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/aviral-gupta-690309169/",
    link: "http://github.com/aviral2004",
    image: AVIRAL_GUPTA,
  },
  {
    name: "Gobind Singh",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/gobind-singh-b6024a257",
    link: "https://github.com/gobind-singh23",
    image: GOBIND_SINGH,
  },
];

const webTeam = [
  {
    name: "Kavan Thakkar",
    role: "WebDev Lead",
    linkedIn: "https://www.linkedin.com/in/kavan-thakkar/",
    link: "https://github.com/Ka1Thakkar",
    image: KAVAN_THAKKAR,
  },
  {
    name: "Hitansh Chadha",
    role: "WebDev Team",
    linkedIn: "",
    link: "",
    image:HITANSH,
  },
  {
    name: "Tanya Keshwani",
    role: "WebDev Team",
    linkedIn: "",
    link: "",
    image:TANYA,
  },
  {
    name: "Parikshit Singh",
    role: "WebDev Team",
    linkedIn: "",
    link: "",
    image: "",
  },
];

const psdTeam = [
  {
    name: "Shivika Dhandhania",
    role: "PSD Team",
    linkedIn: "https://www.linkedin.com/in/shivika-dhandhania-4b3b4521b",
    image: SHIVIKA,
  },
];
const vidTeam = [
  {
    name: "Srinivas shankar",
    role: "Video Team Lead",
    linkedIn: "",
    image:"",
  },
];
const appdevTeam = [
  {
    name: "Suryash Singh",
    role: "AppDev Team ",
    linkedIn: "",
    image:"",
  },
  {
    name: "Nishant Kumar",
    role: "AppDev Team ",
    linkedIn: "",
    image:NISHANT_KUMAR,
  },
];
const design2Team = [
  {
    name: "Bala Avijit Chaturveda",
    role: "2D Design Team Lead ",
    linkedIn: "",
    image:"",
  },
  {
    name: "Vipul Kotha",
    role: "2D Design Team ",
    linkedIn: "",
    image:VIPUL_KOTHA,
  },
  {
    name: "Krishay Prakash",
    role: "2D Design Team ",
    linkedIn: "",
    image:KRISHAY_PRAKASH,
  },
  {
    name: "Yuvika Bakshi ",
    role: "2D Design Team ",
    linkedIn: "",
    image:"",
  },
  
];
const design3Team = [
  {
    name: "Bala Avijit Chaturveda",
    role: "3D Design Team Lead ",
    linkedIn: "",
    image:"",
  },
  {
    name: "Mayank Garg",
    role: "3D Design Team Lead",
    linkedIn: "",
    image:"",
  },
  {
    name: "Nishit Singh",
    role: "3D Design Team ",
    linkedIn: "",
    image:NISHIT_SINGH,
  },
  {
    name: "Rohan Pandey ",
    role: "3D Design Team ",
    linkedIn: "",
    image:"",
  },
  {
    name: "Sameer Singla",
    role: "3D Design Team ",
    linkedIn: "",
    image:SAMEER_SINGLA,
  },
  {
    name: "Sanjana",
    role: "3D Design Team ",
    linkedIn: "",
    image:"",
  },
  
];
const facultyTeam = [
  {
    name: "Dr. Kamlesh Tiwari",
    role: "Faculty Mentor",
    linkedIn: "https://www.linkedin.com/in/ktiwariiitk/",
    image: kt,
  },
  {
    name: "Dr. Ashutosh Bhatia",
    role: "Faculty Mentor",
    linkedIn: "https://www.linkedin.com/in/ashutosh-bhatia-61532618b/",
    image: ab,
  },
  {
    name: "Dr. Yashvardhan Sharma",
    role: "Faculty Mentor",
    linkedIn: "https://www.linkedin.com/in/yashvardhan-sharma-65a87b14/",
    image: ys,
  },
];

const contact = () => {
  return (
    <>
      <Head>
        <title>KXR | Team</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TransitionEffect />
      <div className="w-screen h-screen -z-50 fixed overflow-hidden">
        <Image src={team} className="object-cover h-full w-full" />
      </div>

      <main className="flex w-full flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-32">
          <AnimatedText
            text="Visionaries in Unity!"
            className="my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />

          <AnimatedText
            text="Faculty Mentors"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="flex items-center justify-center gap-6">
            {facultyTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>

          <AnimatedText
            text="Core Team Mentors"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="flex items-center justify-center gap-6">
            {coreTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>

          <AnimatedText
            text="Research Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid grid-cols-5 items-center gap-4 gap-y-10 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {researchTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>

          <AnimatedText
            text="XR Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid grid-cols-5 items-center gap-4 gap-y-10 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projectTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>

          <AnimatedText
            text="EVENTS Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid grid-cols-5 items-center gap-4 gap-y-10 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {webTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>
          <AnimatedText
            text="2D DESIGN Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid grid-cols-5 items-center gap-4 gap-y-10 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {design2Team.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>

          <AnimatedText
            text="3D DESIGN Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid grid-cols-5 items-center gap-4 gap-y-10 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {design3Team.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>

          <AnimatedText
            text="APPDEV Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="flex items-center justify-center gap-6">
            {appdevTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>

          <AnimatedText
            text="PSD Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="flex items-center justify-center">
            {psdTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>
          <AnimatedText
            text="vIDEO Team"
            className="my-16 !text-6xl sm:!text-4xl xs:!text-4xl sm:mb-8 "
          />
          <div className="flex items-center justify-center">
            {vidTeam.map((member) => {
              return (
                <Team
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  link={member.link}
                  image={member.image}
                  key={member.name}
                />
              );
            })}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
