import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Team from "@/components/Team";
import ParticleContainer from "@/components/ParticleContainer";
import Image from "next/image";
import team from "../../public/images/backgrounds/team.jpeg";

import kt from "../../public/images/team/kt.jpg";
import ab from "../../public/images/ab.jpeg";
import ys from '../../public/images/team/YASHVARDHAN_SHARMA.jpg';
import ARYAN_BAKSHI from "../../public/images/team/ARYAN_BAKSHI.jpeg";
import AVIRAL_GUPTA from "../../public/images/team/AVIRAL_GUPTA.jpeg";
import JAY_AGARWAL from "../../public/images/team/JAY_AGARWAL.jpg";
import SHUBHANG from "../../public/images/team/SHUBHANG.jpeg";
import VARUN_SAHNI from "../../public/images/team/VARUN_SAHNI.jpg";
import SIDDHARTH from "../../public/images/team/SIDDHARTH.jpg";
import SHREY from "../../public/images/team/SHREY.jpeg";
import ROHAN from "../../public/images/team/ROHAN.jpg";
import ASHISH from "../../public/images/team/ASHISH.jpg";
import AKSHAY from "../../public/images/team/AKSHAY.jpeg";
import AMRITPAL from "../../public/images/team/AMRITPAL.jpg";
import DARSHBIR from "../../public/images/team/DARSHBIR.jpg";
import AMRIT from "../../public/images/team/AMRIT.jpg";
import ADITYA from "../../public/images/team/ADITYA.jpg";
import VISHNU from "../../public/images/team/VISHNU.jpeg";

import KRISH from "../../public/images/team/KRISH.jpeg";
import ANSHUMAN from "../../public/images/team/ANSHUMAN.jpeg";
import SARTHAK from "../../public/images/team/SARTHAK.jpg";
import ANKUR from "../../public/images/team/ANKUR.jpeg";
import DHYANN from "../../public/images/team/DHYANN.jpg";
import ABHEEK from "../../public/images/team/ABHEEK.jpeg";
import ARYAN from "../../public/images/team/ARYAN.jpeg";
import NEHA from "../../public/images/team/NEHA.jpg";
import AVICHAL from "../../public/images/team/AVICHAL.jpg";
import PRATEEK from "../../public/images/team/PRATEEK.jpeg";
import PRAROOP from "../../public/images/team/PRAROOP.jpg";
import SIDDHANT from "../../public/images/team/SIDDHANT.jpg";





import MANAS from "../../public/images/team/MANAS.png";
import BALA from "../../public/images/team/BALA.jpeg";
import RUDRA from "../../public/images/team/RUDRA.gif";
import RIYA from "../../public/images/team/RIYA.jpg";
import ADITI from "../../public/images/team/ADITI.jpg";
import YASHWANTH from "../../public//images/team/YASHWANTH.jpg";
import TANYA from "../../public/images/team/TANYA.jpeg";
import HITANSH from "../../public/images/team/HITANSH.jpg";

const coreTeam = [
  {
    name: "Jay Agarwal",
    role: "President",
    linkedIn: "https://www.linkedin.com/in/jay-agarwal-86067427a/",
    link: "https://github.com/JayAgarwal25",
    image: JAY_AGARWAL,
  },
  {
    name: "Ankur Basavarsu",
    role: "Coordinator",
    linkedIn: "https://www.linkedin.com/in/ankur-basavarsu-120649261",
    link: "https://github.com/AnkurB24",
    image: ANKUR,
  }
];

const projectTeam = [

  {
    name: "Aryan Sharma",
    role: "Head (Development Team)",
    linkedIn: "https://in.linkedin.com/in/aryan-sharma-23150921a",
    link: "https://github.com/im-NL",
    image: ARYAN,
  },
  
  

  {
    name: "Siddharth Khemani ",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/siddharth-khemani-028588174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    link: "https://github.com/Shadow2073",
    image: SIDDHARTH,
  },
  {
    name: "Shrey Bansal",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/-shreybansal",
    link: "https://github.com/DRAGOON21S",
    image: SHREY,
  },
  {
    name: "Rohan Pandey",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/rohan-pandey-5a4293299/",
    link: "https://github.com/sheikhjabooti",
    image: ROHAN,
  },
  {
    name: "Ashish Sam",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/ashish-sam-921a10279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    link: "https://github.com/ashish-sam",
    image: ASHISH,
  },
  
  {
    name: "Amrit Lahari",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/amrit-lahari-3aa437289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    link: "https://github.com/Amritjain08?tab=repositories",
    image: AMRIT,
  },
 
  {
    name: "Darshbir Singh",
    role: "Development Team",
    linkedIn: "https://linkedin.com/in/darshbir-singh-51741b266/",
    link: "https://github.com/Darshbir",
    image: DARSHBIR,
  },
  {
    name: "Sarthak Sur",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/sarthak-sur-007730280/",
    link: "https://github.com/DeaDSh0t-44",
    image: SARTHAK,
  
  },

 
  {
    name: "Shubhang Gautam",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/shubhang-gautam-821b09251",
    link: "https://github.com/gautamshubhang",
    image: SHUBHANG,
  },
 
  
  

  {
    name: "Abheek Arora ",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/abheek-arora-7691a1280/",
    link: "https://github.com/Codafolife",
    image: ABHEEK,
  },

  {
    name: "Avichal Dwivedi",
    role: "Development Team",
    linkedIn: "https://www.linkedin.com/in/avichal-dwivedi-789a66288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    link: "https://github.com/AvichalDwivedi2205",
    image: AVICHAL,
  },


  
 
];

const researchTeam = [

  {
    name: "Vishnu Hari",
    role: "Head (Research Team)",
    linkedIn: "https://linkedin.com/in/hvishnu",
    link: "https://github.com/lycogno",
    image: VISHNU,
  },

  {
    name: "Prateek Agarwal",
    role: "Joint-Head (Research Team)",
    linkedIn: "https://www.linkedin.com/in/prateek-agarwal-877184280/",
    link: "https://github.com/Prateek-Agarwal2006",
    image: PRATEEK,
  },

  {
    name: "Amritpal Singh",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/amritpal-singh-420557280/",
    link: "https://github.com/AS54321",
    image: AMRITPAL,
  },
  

  {
    name: "Krish Bhatnagar",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/krish-bhatnagar-1030b2306/",
    link: "https://github.com/k-bhatnagar1",
    image: KRISH,
  },
  {
    name: "Anshuman Dash ",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/anshuman-dash-2747b424a/",
    link: "https://github.com/Ash0271",
    image: ANSHUMAN,
  },
 

  {
    name: "Neha Gujjari",
    role: "Research Team",
    linkedIn: "https://www.linkedin.com/in/neha-gujjari-22874029a/",
    link: "https://github.com/neha305",
    image: NEHA,
  },
   

  
 
  
];

const webTeam = [
  {
    name: "Riya Mittal",
    role: "Head (Events Team)",
    linkedIn: "https://www.linkedin.com/in/riya-mittal-69bb53213/",
    link: "https://github.com/rmtl2111/",
    image: RIYA,
  },
  {
    name: "Hitansh Chadha",
    role: "Joint-Head (Events Team)",
    linkedIn: "https://www.linkedin.com/in/hitansh-chadha-07ba5219b/",
    link: "https://github.com/hitanshchadha",
    image:HITANSH,
  },
  
  {
    name: "Rudra Khaitan",
    role: "Events Team",
    linkedIn: "https://www.linkedin.com/in/rudra-khaitan-1aa4b7289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    link: "https://github.com/Rukh79",
    image: RUDRA,
  },
  {
    name: "Manas Choudhary",
    role: "Events Team",
    linkedIn: "https://www.linkedin.com/in/manas-choudhary-56374028b",
    link: "https://github.com/ManasChoudhary-01",
    image: MANAS,
  },
  {
    name: "Yashwanth Varma Dandu",
    role: "Events Team",
    linkedIn: "https://www.linkedin.com/in/yashwanth-varma-dandu-2b3608292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    link: "https://github.com/Yashwanth-2118",
    image: YASHWANTH,
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
            text="Development Team"
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
            text="Management Team"
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
          

          

          
         
        </Layout>
      </main>
    </>
  );
};

export default contact;
