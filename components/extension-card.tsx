import { Extension } from "@/data/extensions";
import Image from "next/image";
import { Button } from "./ui/button";

const ExtensionCard = ({ extension }: { extension: Extension }) => {
  const { title, minimumVersion, imgSrc } = extension;
  return (
    <div className="shadow-lg flex flex-col items-center justify-between flex-1 w-full rounded-2xl">
      <Image
        src={imgSrc}
        alt={"browser logo"}
        width={120}
        height={120}
        className="mx-10 mt-10"
      />
      <h4 className="text-h4 font-semibold text-grey mt-9 mb-2">{title}</h4>
      <p className="text-lg text-gray mb-9">{minimumVersion}</p>
      <Image
        src={"/images/bg-dots.svg"}
        alt={"browser logo"}
        width={12}
        height={12}
        className="py-1 w-full"
      />
      <Button variant={"secondary"} size={"lg"} className="m-7">
        Add & install extension
      </Button>
    </div>
  );
};

export default ExtensionCard;
