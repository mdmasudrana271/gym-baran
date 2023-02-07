import Image from "next/image";
import Container from "../Container";
import rightArrow from "../../assets/icons/rightArrow.svg";
import crucifiedpose from "../../assets/icons/crucified-pose.png";
import dancerPose from "../../assets/icons/dancer-balance-posture-on-one-leg.png";
import dancerMotion from "../../assets/icons/dancer-motion.png";
const DailyChallenges = () => {
  return (
    <Container>
      <div className="bg-gradient-to-r from-[#6462F0] to-[#9190E9] rounded-2xl p-8 md:p-20">
        <div className="grid lg:grid-cols-3 gap-x-20 gap-y-12">
          <div className="flex gap-8">
            {/* image */}
            <div className="p-5 bg-white/20 grid place-items-center rounded-xl">
              <Image src={crucifiedpose} alt="" />
            </div>
            {/* Texts & btn */}
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white">
                Get that 11 line in 30 days
              </h2>
              <button className="flex items-center gap-10 text-white/50 ">
                Learn more <Image src={rightArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            {/* image */}
            <div className="p-5 bg-white/20 grid place-items-center rounded-xl">
              <Image src={dancerPose} alt="" />
            </div>
            {/* Texts & btn */}
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white">
                Get that 11 line in 30 days
              </h2>
              <button className="flex items-center gap-10 text-white/50 ">
                Learn more <Image src={rightArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            {/* image */}
            <div className="p-5 bg-white/20 grid place-items-center rounded-xl">
              <Image src={dancerMotion} alt="" />
            </div>
            {/* Texts & btn */}
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white">
                Get that 11 line in 30 days
              </h2>
              <button className="flex items-center gap-10 text-white/50 ">
                Learn more <Image src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DailyChallenges;
