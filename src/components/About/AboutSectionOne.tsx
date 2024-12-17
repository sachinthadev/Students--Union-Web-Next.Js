import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="18" height="15" viewBox="0 0 18 15" className="fill-current">
    <path d="M6.74 14.68C6.52 14.9 6.15 14.9 5.93 14.68L0.64 9.39C0.42 9.17 0.42 8.8 0.64 8.58L2.4 6.82C2.62 6.6 2.99 6.6 3.21 6.82L5.93 9.54C6.15 9.76 6.52 9.76 6.74 9.54L15.11 1.17C15.33 0.95 15.7 0.95 15.92 1.17L17.68 2.93C17.9 3.15 17.9 3.52 17.68 3.74L6.74 14.68Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-6 flex items-center text-lg font-semibold text-body-color">
      <span className="mr-5 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary shadow-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Vision and Mission"
                paragraph="To work in collaboration with other student associations to protect free education without compromising the independence and identity of our association."
                mb="40px"
              />

              <div className="grid grid-cols-1 gap-6 ">
                <List text="To help develop the academic and extracurricular skills of its members." />
                <List text="To create awareness among its members about their civic rights and discipline." />
                
                <List text="To work for the rights of students within the institution." />
                <List text="To intervene in student issues." />
               
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/aboutef.png"
                  alt="about-image"
                  width={400} // Custom width
                   height={350}
                  className="mx-auto max-w-full drop-shadow-xl dark:hidden lg:mr-0"
                />
                <Image
                  src="/images/about/aboutef.png"
                  alt="about-image"
                  width={400} // Custom width
                height={350}
                  className="mx-auto hidden max-w-full drop-shadow-xl dark:block lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
