import ActionButton from '@/shared/ActionButton';
import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import { motion } from 'framer-motion';
import Benefit from './Benefit';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: 'State of the Art Facilities',
      description:
        "At our facility, you'll have access to the latest and greatest in fitness technology. From cutting-edge cardio equipment to top-of-the-line weight training machines, we have everything you need to reach your fitness goals in style.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Unlock your full fitness potential with our 100's of diverse classes, designed to challenge and inspire you in new ways. From yoga to strength training and everything in between, there's a class for every fitness level and interest at our state-of-the-art facilities.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: 'Expert and Pro Trainers',
      description:
        'Get in the best shape of your life with our team of expert and pro trainers. Their years of experience and dedication to helping clients reach their goals set them apart and make every workout a personalized and effective experience.',
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-justify">
                At our fitness center, we are proud to have helped millions of
                members achieve their fitness goals. Our commitment to providing
                top-notch facilities, expert trainers, and diverse classes has
                resulted in a community of happy, healthy individuals. From
                seasoned fitness enthusiasts to beginners just starting their
                journey, our members appreciate the supportive, inclusive
                atmosphere that sets us apart.
              </p>
              <p className="mb-5 text-justify">
                At every stage of their fitness journey, our members are
                supported by our state-of-the-art facilities and expert
                trainers. Whether you're looking to tone up, lose weight, or
                simply maintain a healthy lifestyle, our team of professionals
                is dedicated to helping you reach your goals. With hundreds of
                diverse classes to choose from, there's something for everyone
                at our fitness center. From yoga to high-intensity interval
                training, our members have access to a variety of options that
                cater to their individual needs and preferences. With millions
                of happy members, it's clear that our approach to fitness is
                making a real difference in people's lives. Join us and discover
                the benefits of a healthy, active lifestyle today!
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
