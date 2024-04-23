import { NAVIGATION } from "@/data/navigations";
import Image from "next/image";
import Link from "next/link";
import Logo from "./icons/logo";

const Footer = () => {
  return (
    <footer className="bg-darkBlue py-8 px-8">
      <div className="max-w-screen-lg mx-auto w-full flex sm:flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex sm:flex-col lg:flex-row  gap-12">
          <Logo dark />
          <ul
            className={
              "flex sm:gap-5 lg:gap-16 sm:flex-col lg:flex-row items-center"
            }
          >
            {NAVIGATION.map(({ href, name }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className="text-white hover:text-red text-base uppercase tracking-widest"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-12">
          <Image
            src={"/images/icon-facebook.svg"}
            alt="logo"
            width={30}
            height={30}
          />
          <Image
            src={"/images/icon-twitter.svg"}
            alt="logo"
            width={30}
            height={30}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
