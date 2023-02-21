import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
 {
  name: "Weight Training Classes",
  description: "Resistance training (also called strength training or weight training) is the use of resistance to muscular contraction to build strength, anaerobic endurance and size of skeletal muscles.",
  image: image1
},
{
  name: "Yoga Classes",
  description: "Postures, gentle movement sequences, breath work, supported silent meditation, and guided relaxation to support increased awareness and mindfulness of the breath and body, and quieting of the nervous system.",
  image: image2
  },
{
  name: "Functional Fitness Classes",
  description: "Exercise that looks like movements you make in your daily life. It can be helpful for athletic performance, injury prevention, and other everyday fitness tasks.",
  image: image3
  }
,
{
  name: "Rowing Classes",
  description: "Rowing is a total-body workout, meaning it will strengthen major muscle groups in your arms, legs, and core and increase cardiovascular endurance.",
  image: image4
  }
,
{
  name: "Cardio Classes",
  description: "Exercise is physical activity that is planned, structured, and repetitive for the purpose of conditioning the body. Exercise consists of cardiovascular conditioning, strength and resistance training, and flexibility. ",
  image: image5
},
{
  name: "Body Pump Classes",
  description: "Fast-paced, barbell-based workout that's specifically designed to help you get lean, toned and fit.",
  image: image6
},
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5 text-white">
              NowFit is a modern fitness program that offers a range of classes and personalized fitness experience. We have a team of certified instructors, state-of-the-art equipment, and a welcoming environment that motivates and inspires our members to achieve their fitness goals. Our commitment to excellence is unwavering, and we are dedicated to helping our members maintain a healthy lifestyle. 
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

