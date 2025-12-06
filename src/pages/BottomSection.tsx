import { motion } from "framer-motion";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]">
      <Schedule />
      <div className="text-center text-zinc-400 pb-20">Hope you liked it!</div>
    </div>
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl py-17 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50 px-4"
      >
        Details
      </motion.h1>
      <ScheduleItem title="Event" location="The Holiday in concert" />
      <ScheduleItem title="Venue" location="Bradford Live" />
      <ScheduleItem title="Date" location="19th Dec" />
      <ScheduleItem title="Time" location="7:30 pm" />
    </section>
  );
};

const ScheduleItem = ({
  title,
  location,
}: {
  title: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-500 px-4 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
      </div>
    </motion.div>
  );
};
