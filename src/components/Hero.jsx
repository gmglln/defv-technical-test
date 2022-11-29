import styles from "../style";
import { spider } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          of superheroes
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Te imaginas, en 20 años, como será la siguiente generación de
          superhéroes, a nosotros nos tocó vivir un poco de lo pasado, y los
          nuevo 🕸️
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={spider} alt="marvel" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
    </section>
  );
};

export default Hero;