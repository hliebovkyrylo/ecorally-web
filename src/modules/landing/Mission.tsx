import Image from "next/image";

export const Mission = () => {
  return (
    <section className="py-16 px-8 w-full max-w-[1200px] mx-auto" id="mission">
      <p className="text-4xl text-white font-bold text-center">
        Our Mission: A Cleaner Ukraine
      </p>
      <div className="flex justify-center gap-6 mt-12 max-lg:flex-col max-lg:items-center">
        <div className="w-full max-w-2xl text-white flex flex-col gap-4">
          <p>
            Ukraine’s forests, rivers, and fields face growing threats from
            pollution—plastic waste, industrial debris, and neglected landfills
            harm our environment and communities. EcoRally is here to change
            that. We’re building a platform where anyone, from city residents to
            rural volunteers, can take action to clean up their surroundings.
          </p>
          <p>
            Our vision is a Ukraine where every region thrives in its natural
            beauty. EcoRally connects people passionate about environmental
            change, enabling them to organize cleanup events, share resources,
            and inspire others. Whether it’s clearing a park in Dnipro, a beach
            in Odesa, or a village roadside in Ternopil, every step forward
            counts.
          </p>
          <p>
            We’re starting small but dreaming big. By empowering communities to
            act locally, we aim to create a nationwide movement for a cleaner,
            healthier Ukraine.
          </p>
        </div>
        <Image
          src={"/test.jpg"}
          alt="Ukraine nature"
          width={500}
          height={100}
          className="rounded-3xl w-full"
        />
      </div>
    </section>
  );
};
