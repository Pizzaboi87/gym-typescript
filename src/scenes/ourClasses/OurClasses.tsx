import { SelectedPage, ClassType } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from '../ourClasses/Class';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const classes: Array<ClassType> = [
    {
      name: 'Weight Training Classes',
      description:
        'Maximize your strength and tone your muscles with our top-notch weight training classes. Led by expert trainers, our classes offer a wide range of weights and equipment to help you reach your fitness goals.',
      image: image1,
    },
    {
      name: 'Yoga Classes',
      description:
        'Unleash your inner peace and strength with our comprehensive Yoga Classes. Led by experienced instructors, each class offers a unique blend of physical and mental wellness to help you stretch and strengthen both your body and mind.',
      image: image2,
    },
    {
      name: 'Ab Core Classes',
      description:
        'Tone and strengthen your midsection with our challenging Ab Core classes. Led by experienced trainers, each class is designed to target your abs and obliques, helping you achieve your fitness goals and a strong core.',
      image: image3,
    },
    {
      name: 'Adventure Classes',
      description:
        'Escape the ordinary and get your heart racing with our Adventure Classes! From rock climbing to surfing, our expert instructors will guide you on a journey of self-discovery and physical challenge. Join us and be part of a community that values adventure and fitness.',
      image: image4,
    },
    {
      name: 'Fitness Classes',
      description:
        'Get fit and have fun with our wide range of fitness classes. From high-intensity cardio to low-impact yoga, our expert trainers will guide you every step of the way and help you reach your fitness goals.',
      image: image5,
    },
    {
      name: 'Training Classes',
      description:
        'Take your fitness to the next level with our extensive range of training classes. Led by experienced and knowledgeable trainers, our classes cater to all levels, helping you achieve your fitness goals no matter what they may be.',
      image: image6,
    },
  ];

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
            <p className="text-justify py-5">
              At our fitness center, we offer a vast selection of classes to
              suit the needs and interests of all of our members. From
              high-intensity cardio workouts to relaxing yoga sessions, we have
              a class for everyone. Our expert trainers lead each class, guiding
              you through every step and providing modifications and
              encouragement along the way. Our state-of-the-art facilities
              provide a safe and comfortable environment for you to exercise in,
              giving you the perfect setting to reach your fitness goals. Our
              classes are designed to challenge you, keep you motivated and help
              you achieve your desired results. With diverse options and
              flexible scheduling, our members can find the perfect class to fit
              their lifestyle. Whether you're a beginner or a seasoned fitness
              enthusiast, we've got you covered with our comprehensive class
              offerings.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[340px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={index}
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
