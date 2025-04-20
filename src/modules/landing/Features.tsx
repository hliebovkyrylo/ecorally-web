import { Card } from "./components";

export const Features = () => {
  return (
    <section className="px-8 py-16" id="features">
      <h3 className="text-3xl font-bold text-center mb-12 text-white">
        What EcoRally Offers
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          className="max-w-96 w-full"
          title="Simple Event Planning"
          description="Create cleanup events with ease. Set locations using an interactive map, schedule dates, and specify needs like tools or safety gear. Perfect for first-time organizers or seasoned activists."
        />
        <Card
          className="max-w-96 w-full"
          title="Community Collaboration"
          description="Connect with volunteers and organizations in real-time. Share updates, assign tasks, and chat within the app to ensure everyone’s on the same page during cleanups."
        />
        <Card
          className="max-w-96 w-full"
          title="Progress Tracking"
          description="Record the waste collected, from plastic bottles to tires, and upload before-and-after photos. See your impact and motivate others to join the movement."
        />
        <Card
          className="max-w-96 w-full"
          title="Nationwide Reach"
          description="Discover cleanups anywhere in Ukraine, from Lviv to Kharkiv. Filter events by region or type, so you can participate or support efforts in areas that matter to you."
        />
      </div>
    </section>
  );
};
