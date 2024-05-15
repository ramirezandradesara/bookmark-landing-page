import ExtensionCard from "@/components/extension-card";
import { EXTENSIONS } from "@/data/extensions";

const ExtensionSection = () => {
  return (
    <section className="max-w-screen-lg w-full mx-auto flex items-center flex-col pb-24 mt-44 lg:mt-72 px-8">
      <h2 className="text-h2 font-semibold">Download the extension</h2>
      <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed text-center mt-7">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="flex flex-col lg:flex-row gap-12 mt-16 justify-between">
        {EXTENSIONS.map((extension, index) => (
          <div key={index} className="extension-card">
            <ExtensionCard extension={extension} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtensionSection;
