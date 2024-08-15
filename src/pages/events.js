import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomLink from "@/components/Navbar";
import { useRouter } from "next/router";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
// import styles from "../styles/events.module.css";

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import measuring from "../../public/images/projects/AR-tape-measurement.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Events from "@/components/Events";
import Publications from "@/components/Publications";
import ParticleContainer from "@/components/ParticleContainer";

import projects from "../../public/images/backgrounds/projects.jpg";
import event1 from "../../public/images/projects/event1.jpeg";
import smithy from "../../public/images/projects/Smithy.jpg";
import drone from "../../public/images/projects/Drone.png";
import navigation from "../../public/images/projects/Campus_Navigation.png";
import { slideAnimation, HeadAnimation } from "@/components/motion";
import event2 from "../../public/images/Events/event32.jpg";
import event21 from "../../public/images/Events/event21.jpg"
import event22 from "../../public/images/Events/event22.jpg"
import event23 from "../../public/images/Events/event23.jpg"
import blender from "../../public/images/Events/blender.jpeg";
import orientation1 from "../../public/images/Events/orientation1.jpg";
import orientation2 from "../../public/images/Events/orientation2.jpg";
import orientation3 from "../../public/images/Events/orientation3.jpg";
import orientation4 from "../../public/images/Events/orientation4.jpg";
// const FramerImage = motion(Image);

const slideAnimation1 = (direction, duration) => ({
  initial: { opacity: 0, x: direction === 'left' ? -100 : 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration },
});

const FeaturedEvent = ({
  type,
  title,
  summary,
  img1,
  img2,
  img3,
  img4,
  link,
  sourceLink,
  button,
  source,
}) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(link);
  };
  return (
    <motion.article className="w-full flex justify-between items-center glassmorphism shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:ronded-2xl xs:p-4 xs:w-[90%] m-0">
      <button
        
        className="w-1/2 cursor-pointer overflow-hidden lg:w-full"
        onClick={handleClick}
        
      >
        {/* <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.9 }}
          // transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          {...slideAnimation("left", 0.5)}
        /> */}
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ type: "bullets", clickable: true }}
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
          }} >
          <SwiperSlide style={{ display: (img1 === null) ? "none" : null, transition: "ease-in-out" }}>
            <motion.img
              src={img1.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              {...slideAnimation1('left', 0.5)}
            />
          </SwiperSlide>
          <SwiperSlide style={{ display: (img2 === "null") ? "none" : null, transition: "ease-in-out" }}>
            <motion.img
              src={img2.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              {...slideAnimation('left', 0.5)}
            />
          </SwiperSlide>
          <SwiperSlide style={{ display: (img3 === "null") ? "none" : null, transition: "ease-in-out" }}>
            <motion.img
              src={img3.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              {...slideAnimation1('left', 0.5)}
            />
          </SwiperSlide>
          <SwiperSlide style={{ display: (img4 === "null") ? "none" : null, transition: "ease-in-out" }}>
            <motion.img
              src={img4.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              {...slideAnimation1('left', 0.5)}
            />
          </SwiperSlide>
        </Swiper>
      </button>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <motion.span
          className="font-medium text-xl text-primaryDark xs:text-base"
          {...slideAnimation("right", 0.5)}
        >
          {type}
        </motion.span>
        <button  href={link} target="_blank">
          <motion.h2
            className="my-2 w-full text-left text-4xl font-bold hover:underline hover:underline-offset-2"
            {...slideAnimation1("right", 0.5)}
          >
            {title}
          </motion.h2>
        </button>
        <motion.p
          className="my-2 font-medium text-dark sm:text-sm"
          {...slideAnimation("right", 0.5)}
        >
          {summary}
        </motion.p>
        <motion.div
          className="mt-2 flex items-center"
          {...HeadAnimation("right", 0)}
        >
          {sourceLink ? (
            <button href={sourceLink} target="_blank" className="w-10">
              {" "}
              {source ? <LinkedInIcon /> : <GithubIcon />}{" "}
            </button>
          ) : (
            <div></div>
          )}
          {button ? (
            <button
              onClick={handleClick}
              className="mx-4 flex items-center rounded-md bg-primary text-light hover:bg-transparent p-2 px-6 text-lg border-2 border-primary border-solid hover:text-primary md:p-2 md:px-4 md:text-base duration-500 font-[50] tracking-[0.075rem]"
            >
              {" "}
              {button}{" "}
            </button>
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
};

const events = () => {
  const router = useRouter();
  return (
    <div className="">
      <Head>
        <title>KXR | Events</title>
        <meta name="description" content="later" />
      </Head>

      <TransitionEffect />

      <div className="w-screen h-screen -z-50 top-0 fixed overflow-hidden">
        <Image
          src={projects}
          className="object-cover object-top fixed top-0 h-full w-full"
        />
      </div>

      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-32 ">
          <AnimatedText
            text="EVENTS!"
            className="my-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-8">
          <div className="col-span-12">
              <FeaturedEvent
                type="Workshop"
                title="Blender & Unity"
                summary="AR/VR workshop is a workshop designed for XR enthusiasts to make their weekend productive. The workshop will give participants an opportunity to meet, learn and discuss their ideas with like-minded cohorts and mentors. The two days of the workshop will be spent in getting a deeper understanding of the technology through various hands-on experiences. At the culmination of the workshop, each participant will be engraved with the So skills required to enter the real world of XR."
                img1={blender}
                img2="null"
                img3="null"
                img4="null"
                link="/workshop"
                sourceLink=""
                button="Register Here"
                source=""
              />
            </div>

            <div className="col-span-12">
              <FeaturedEvent
                type=""
                title="Orientation Session"
                summary="The KXR Lab at BITS Pilani recently hosted an engaging orientation session for freshmen and sophomores. The event introduced students to the cutting-edge technologies and research opportunities in the fields of AR/VR and XR. The session included demonstrations, insights into ongoing projects, and guidance on how to get involved with the lab. It served as a platform to spark interest and encourage new members to explore the exciting possibilities within the KXR Lab."
                img1={orientation2}
                img2={orientation1}
                img3={orientation3}
                img4={orientation4}
                link=""
                sourceLink=""
                button=""
                source=""
              />
            </div>
            
            <div className="col-span-12">
              <FeaturedEvent
                type="Talk Session"
                title="Extended Reality"
                summary="An educational event on Extended Reality (XR) technology was a success, featuring discussions on basics, applications, success stories, motivation, coding tools, best practices, and challenging problems. The event expanded our understanding of the potential of AR/VR."
                img1={event1}
                img2="null"
                img3="null"
                img4="null"
                link="https://drive.google.com/file/d/1FgmlWu6GiPfdxaDTISJuLLgIu98vpqCH/view?pli=1"
                sourceLink="https://www.linkedin.com/feed/update/urn:li:activity:7071875912685821952?utm_source=share&utm_medium=member_desktop"
                button="Recording"
                source="linkedin"
              />
            </div>

            <div className="col-span-12">
              <FeaturedEvent
                type="Oasis Event"
                title="Pixel Play Stalls"
                summary="Kalipatnapu AR/VR Lab wrapped up an incredible workshop dedicated to unraveling the potential of Augmented Reality(AR) for the students and other guests who have attended Oasis 2023, the cultural fest of BITS Pilani. We also set up a stall  where participants got to experience the immersive world of Virtual Reality through a lineup of VR games using cutting-edge VR gear like Meta Quest 2 and PSVR 2 headsets, all made accessible at affordable prices."
                img1={event2}
                img2={event21}
                img3={event22}
                img4={event23}
                link=""
                sourceLink=""
                button=""
                source=""
              />
            </div>
          </div>
        </Layout>
        {/* <Layout>
            <Events />
            <Publications />
          </Layout> */}
      </main>
    </div>
  );
};

export default events;
