import { Card } from "./components";

export const HowItWorks = () => {
  return (
    <section className="px-8 py-16 bg-[#131313]" id="how-it-works">
      <h3 className="text-3xl font-bold text-center mb-12 text-white">How EcoRally Works</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        <Card
          className="flex-1"
          title="1. Create an Event"
          description="Sign up and plan a cleanup event in your area. Choose a location—like a park, riverbank, or street—set a date, and add details about what volunteers should bring, such as gloves or bags."
        />
        <Card
          className="flex-1"
          title="2. Rally Your Community"
          description="Share your event through the app, social media, or local groups. Invite friends, neighbors, or organizations to join. EcoRally helps you coordinate participants and keep everyone updated."
        />
        <Card
          className="flex-1"
          title="3. Make an Impact"
          description="Lead or join the cleanup, collect waste, and document your efforts with photos. Log the results in the app to inspire others and track Ukraine’s progress toward a cleaner future."
        />
      </div>
    </section>
  );
};
