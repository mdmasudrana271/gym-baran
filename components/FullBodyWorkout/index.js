import Image from "next/image";
import Container from "../Container";
import rightArrow from "../../assets/icons/rightArrow.svg";
import workout from "../../assets/workout.png";

const FullBodyWorkout = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 text-primaryText">
        {/* Left Content */}
        <div className="self-start order-2 md:order-1 mt-16 md:mt-0">
          <Image alt="" src={workout} />
        </div>

        {/* Right Content */}
        <div className="grid place-items-center order-1 md:order-2 ">
          <div>
            <h1 className="text-2xl lg:text-5xl sporting-bold">
              Best full body workout to lose fat
            </h1>
            <p className="font-poppins opacity-50 my-12">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.{" "}
            </p>
            <button className="py-4 px-6 flex justify-between items-center rounded-lg bg-secondaryColor text-white gap-7 cursor-pointer shadow-2xl">
              <span>Get Started</span> <Image src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FullBodyWorkout;
