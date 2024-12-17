import { Feature } from "@/types/feature";
import Image from 'next/image';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image  
        src="/images/news/newse1.png" 
        alt="Description of the photo" 
        width={300} 
        height={300} 
      />
    ),
    title: "New President of IHNDSF",
    paragraph:
      "Chamalka Dilshan has been Selected as the new President of Inter higher national diploma students federation. 10/09/2024",
  },
  {
    id: 2,
    icon: (
      <Image  
        src="/images/news/newse2.png" 
        alt="Description of the photo" 
        width={300} 
        height={300} 
      />
    ),
    title: "Newly appointed Committee",
    paragraph:
      "These are the newly appointed Committee members of Student's union- Advanced Technological Institute - Kurunegala. 10/21/2024",
  },
  {
    id: 3,
    icon: (
      <Image  
        src="/images/news/newse3.png" 
        alt="Description of the photo" 
        width={300} 
        height={300} 
      />
    ),
    title: "Student Hero's day",
    paragraph:
      "They Have loved you unconditionally, Student Hero's day. 06/01/2024",
  },
  {
    id: 4,
    icon: (
      <Image  
        src="/images/news/newse4.png" 
        alt="Description of the photo" 
        width={300} 
        height={300} 
      />
    ),
    title: "No Top-ups!",
    paragraph:
      "No Top-ups! turn SLIATE as an Institution award Degrees 05/31/2024",
  },
  {
    id: 5,
    icon: (
      <Image  
        src="/images/news/newse5.png" 
        alt="Description of the photo" 
        width={300} 
        height={300} 
      />
    ),
    title: "New Intake 2024",
    paragraph:
      "We are happy to announce you that HND New Gazette for 2023/2024 had been published. Let's Join with us to make your goals a Success. 04/27/2024",
  },
  {
    id: 6,
    icon: (
      <Image  
        src="/images/news/newse6.png"   
        alt="Description of the photo" 
        width={300} 
        height={300} 
      />
    ),
    title: "19th Annual Convocation of SLIATE 2024",
    paragraph:
      "19th Annual Convocation of SLIATE 2024 Congratulations to all the brothers and sisters on your success that you really earned. May 06,07,08 at BMICH 05/06/2024",
  },
];

export default featuresData;
