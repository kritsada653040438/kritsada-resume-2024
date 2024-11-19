import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24"
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Computer Engineering</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-red-900">Kritsada Mahanam</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-gray/80">
              I’m passionate about Business Analysis, Frontend Development, and
              UX/UI Design. I’m currently studying Computer Engineering, and
              have done projects using HTML, CSS, JavaScript I’m looking for an
              internship where I can learn more and use my knowledge to help
              with real projects.
            </p>
            {/* Resume */}
            <div className="flex flex-col xl:flex-row item-center gap-8">
              <a
                href="/Kritsada_Resume.pdf"
                download
                className="text-white border border-slate-200 bg-red-800 hover:bg-red-900 hover:text-white dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50
                h-11 rounded-md px-8 flex items-center gap-2 justify-center"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-8">
                <Socials
                  containerStyles="flex gap-6 justify-center"
                  iconStyles="w-9 h-9 border border-red-900 rounded-full flex
              justify-center items-center text-red-900 text-base hover:bg-red-900
              hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
