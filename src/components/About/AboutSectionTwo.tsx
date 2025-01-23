import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
    <div className="container">
      <div className="flex flex-wrap justify-center">
      
  
        {/* Officer Details */}
        <div className="w-full px-4">
          <div className="w-full  mx-auto">
            <div className="mb-9">
              <h1 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Meet Our Board of Officers
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our organization is led by a team of highly skilled professionals dedicated to driving our mission forward. Here are the key officers:
              </p>
            </div>
  
            {/* Officer 1 */}
            <div className="mb-9 flex items-center">
              
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Ishara Maduwantha - President
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Ishara provides visionary leadership and strategic direction for the organization. He ensures all departments are working cohesively toward achieving our mission and fosters partnerships to strengthen our impact.
                </p>
              </div>
              
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Pubudu Dilshan - Vice President
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Pubudu supports the president in overseeing the organization's initiatives and operations. He drives key projects, manages cross-functional teams, and ensures effective execution of strategies.
                </p>
              </div>
            </div>
  
            
  
            {/* Officer 3 */}
            <div className="mb-9 flex items-center">
              
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Isuru Sathpiyum - Secratory
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Isuru handles the organization's administrative responsibilities, ensuring efficient communication and record-keeping. He organizes meetings, manages correspondence, and maintains key documents.
                </p>
              </div>
              
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Kavindu Lakshan - Treasurer
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Kavindu oversees the organization's finances, including budgeting, financial planning, and reporting. He ensures financial stability and compliance with regulations to support long-term growth.
                </p>
              </div>

                

            </div>
            {/* Officer 5 */}
           
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Anuka Sandeepa - Editor
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Anuka is responsible for curating and overseeing all editorial content, 
                ensuring accuracy, clarity, and alignment with the organization’s messaging. He maintains high-quality standards across publications.
                </p>
              </div>
          
  
  
            
  
          </div>
        </div>
  
        {/* Officer Images */}
        <div className="w-full px-4 mb-12 text-center">
          <div className="relative mx-auto">
            {/* Display Officer Images */}
            <div className="flex flex-wrap justify-center">
              {/* Officer 1 */}
              <div className="w-1/2 sm:w-1/3 lg:w-1/5 p-2">
                <Image
                  src="/images/officers/presidant.jpeg" // Replace with actual officer image
                  alt="Officer 1"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover"
                />
              </div>
  
              {/* Officer 2 */}
              <div className="w-1/2 sm:w-1/3 lg:w-1/5 p-2">
                <Image
                  src="/images/officers/juniorpresidant.jpeg" // Replace with actual officer image
                  alt="Officer 2"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover"
                />
              </div>
  
              {/* Officer 3 */}
              <div className="w-1/2 sm:w-1/3 lg:w-1/5 p-2">
                <Image
                  src="/images/officers/secratory.jpeg" // Replace with actual officer image
                  alt="Officer 3"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover"
                />
              </div>
  
              {/* Officer 4 */}
              <div className="w-1/2 sm:w-1/3 lg:w-1/5 p-2">
                <Image
                  src="/images/officers/treasure.jpeg" // Replace with actual officer image
                  alt="Officer 4"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover"
                />
              </div>
  
              {/* Officer 5 */}
              <div className="w-1/2 sm:w-1/3 lg:w-1/5 p-2">
                <Image
                  src="/images/officers/editor.jpeg" // Replace with actual officer image
                  alt="Officer 5"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default AboutSectionTwo;
