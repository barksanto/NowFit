import { SelectedPage, BenefitType} from "@/shared/types"
import Htext from "@/shared/Htext"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Home from "../home";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}
// tell TypeScript that this is an array with BenefitType of object, defined on out types.ts
const benefits: Array<BenefitType> = [{
  icon: <HomeModernIcon className="h-6 w-6" />,
  title: "State of the art facilities",
  description: "We use traditional gym equipment, as well as the most modern tools in the fitness world. Only the best."
},
{
  icon: <UserGroupIcon className="h-6 w-6" />,
  title: "Hundreds of diverse classes",
  description: "We know life gets busy, so have classes running all hours of the day to accomodate your schedule."
  },
{
  icon: <AcademicCapIcon className="h-6 w-6" />,
  title: "Expert and Pro trainiers",
  description: "Finding quality help can be difficult. But we've got you covered with the best training staff the fitness world has to offer."
  }]

const container = {
  hidden: {},
  visible: {
      transition: {staggerChildren: .2}
  }
}


const Benefits = ({setSelectedPage}: Props) => {
  return <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20 "
  >
    <motion.div
    //   initial="hidden" // initial state
    //   whileInView="visible" // final state
    //   viewport={{ once: true, amount: 0.5 }}
    //   transition={{ duration: 0.7 }}
    //   variants={{
    //     hidden: { opacity: 0, x: -80 },
    //     visible: {opacity: 1, x:0}
    // }}
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
      {/* HEADER */}
      <motion.div
        className="md:my-5 md:w-3/5"
            initial="hidden" // initial state
            whileInView="visible" // final state
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x:0}
        }}
      >
        <Htext children="MORE THAN JUST A GYM"></Htext>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to
          get you to your ultimate fitness goals with ease. True
          care into each and every member.
        </p>
      </motion.div>
      {/* BENEFITS */}
      <motion.div
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"  
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
      >
        {
          benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
      </motion.div>
      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img
          src={BenefitsPageGraphic}
          alt="benefits page graphic"
          className="mx-auto"
        />
        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden" // initial state
                whileInView="visible" // final state
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {opacity: 1, x:0}
                  }}
              >
                <Htext>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </Htext>
              </motion.div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.div
                initial="hidden" // initial state
                whileInView="visible" // final state
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {opacity: 1, x:0}
                  }}
          >
            <p className="my-5">
             Introducing NowFit, the modern fitness facility that offers a range of classes to help people achieve their fitness goals. Our facility is designed to meet the needs of every fitness enthusiast, from beginners to advanced fitness enthusiasts. We offer classes such as strength training, yoga, Pilates, spin, and more. Our goal is to provide a fun and welcoming environment that motivates and inspires our members to achieve their fitness goals.

            </p>
            <p className="mb-5">
             At NowFit, we understand that each individual has different fitness goals, and we strive to provide a customized fitness experience. Our certified instructors have a wealth of experience and are passionate about helping members achieve their fitness goals. In addition, our facility is equipped with state-of-the-art equipment, ensuring that our members have access to the latest fitness technology. We are committed to providing an exceptional fitness experience, and our mission is to help our members achieve their fitness goals and maintain a healthy lifestyle. Join NowFit today and experience the difference.
            </p>
          </motion.div>
          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton
                setSelectedPage={setSelectedPage}
              >
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
}

export default Benefits


