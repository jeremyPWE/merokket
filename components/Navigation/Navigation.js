import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Section from "../Section";
import Time from "../Time";
import { MenuToggle } from "./MenuToggle";

const links = [
  { name: "HOME", to: "/", id: "HOME" },
  { name: "ABOUT US", to: "/about", id: "ABOUT US" },
  { name: "OUR WORKS", to: "/work", id: "OUR WORKS" },
  { name: "CONTACT", to: "/contact", id: "CONTACT" },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = ({ isOpen, toggle, route, router, ...props }) => {
  return (
    <nav
      className="relative top-0 z-40 py-2 justify-center flex"
      role="navigation"
    >
      <Section>
        <div className="flex mt-[5px] md:mt-0 md:py-0 space-x-10 items-center justify-center">
          <div className="flex items-center relative w-[125px] h-[45px] md:w-[170px] md:h-[65px] xl:w-[224px] xl:h-[82px]">
            <Link href="/" passHref className="font-extrabold text-[24px]">
              <div className="relative w-[42px] md:w-[64px] 2xl:[w-97px] aspect-[1.3857]">
                <Image
                  src="/icons/logo.svg"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex text-[16px] xl:text-[20px]">
          {links.map(({ name, to, id }) => (
            <Link
              key={id}
              href={to}
              passHref
              className={`p-4 items-center gap-2 hidden md:flex`}
            >
              <div className={props.className}>{name}</div>
            </Link>
          ))}
        </div>
        <div className="font-bold hidden xl:flex">
          <Time className="text-[20px]" />
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={`md:hidden`}
        >
          <MenuToggle toggle={toggle} isOpen={isOpen} />
        </motion.div>
      </Section>
    </nav>
  );
};

const Sidebar = ({ isOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <nav
      className="absolute top-0 z-30 py-2 justify-between md:hidden flex w-full"
      role="navigation"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              height: 0,
            }}
            animate={{
              height: "100vh",
              transition: { duration: 0.3 },
            }}
            exit={{
              height: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="bg-[#141414] w-full"
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-[#f9fafb] text-[1.75rem] px-[40px] py-[10px] m-[10px] border border-black border-opacity-10"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Navigation = ({ t, ...props }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useCycle(false, true);
  return (
    <div className="overflow-hidden w-full">
      <Navbar
        isOpen={isOpen}
        toggle={() => setIsOpen()}
        route={router.pathname}
        router={router}
        t={t}
        {...props}
      />
      <Sidebar
        isOpen={isOpen}
        toggle={() => setIsOpen()}
        route={router.pathname}
        t={t}
        {...props}
      />
    </div>
  );
};

export default Navigation;
