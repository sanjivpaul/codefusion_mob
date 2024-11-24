import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { onBoardingSlides } from "@/configs/constant";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Slider from "@/components/onboarding/slider";
import Slide from "@/components/onboarding/slide";

export default function OnboardingScreen() {
  const [steps, setSteps] = useState(0);

  const prev = onBoardingSlides[steps - 1];
  const next = onBoardingSlides[steps + 1];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slider
        key={steps}
        steps={steps}
        setSteps={setSteps}
        prev={
          prev && <Slide slide={prev} totalSlides={onBoardingSlides.length} />
        }
        next={
          next && <Slide slide={next} totalSlides={onBoardingSlides.length} />
        }
      ></Slider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
