import { IsIPAD } from "@/theme/app.constant";
import { Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
// @ts-ignore
import One from "@/assets/images/onboarding/1.png";
// @ts-ignore
import Two from "@/assets/images/onboarding/2.png";
// @ts-ignore
import Three from "@/assets/images/onboarding/3.png";

export const onBoardingSlides: onBoardingSlidesTypes[] = [
  {
    color: "#40E0D0",
    title: "Explore",
    image: (
      <Image
        source={One}
        style={{
          width: IsIPAD ? verticalScale(285) : verticalScale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subTitle: "Find the perfect course to enhance your career prospect",
  },
  {
    color: "#40E0D0",
    title: "Explore",
    image: (
      <Image
        source={Two}
        style={{
          width: IsIPAD ? verticalScale(285) : verticalScale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subTitle: "Find the perfect course to enhance your career prospect",
  },
  {
    color: "#40E0D0",
    title: "Explore",
    image: (
      <Image
        source={Three}
        style={{
          width: IsIPAD ? verticalScale(285) : verticalScale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subTitle: "Find the perfect course to enhance your career prospect",
  },
];
