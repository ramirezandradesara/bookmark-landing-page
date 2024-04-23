import Faq from "@/components/faq";
import { Button } from "@/components/ui/button";

const FaqSection = () => {
  return (
    <section className="max-w-screen-lg w-full mx-auto flex items-center flex-col pb-40 mt-24 px-8">
      <h2 className="text-h2 font-semibold text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed text-center mt-7 mb-16">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Faq />
      <Button variant={"secondary"}>More info</Button>
    </section>
  );
};

export default FaqSection;
