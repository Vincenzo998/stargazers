import React, { useCallback, useEffect } from "react";
import { Animated } from "react-native";

// styles
import styles from "./SkeletonList.style";

const SkeletonList = () => {
  const skeletonAnimate = new Animated.Value(0);

  const translateX = skeletonAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 400],
  });

  const animate = useCallback(() => {
    skeletonAnimate.setValue(0);
    Animated.timing(skeletonAnimate, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => animate(), 900);
    });
  }, []);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <>
      <Animated.View style={{ ...styles.card, marginTop: "8%" }}>
        <Animated.View style={{ ...styles.animation, transform: [{ translateX }] }} />
      </Animated.View>
      <Animated.View style={styles.card}>
        <Animated.View style={{ ...styles.animation, transform: [{ translateX }] }} />
      </Animated.View>
      <Animated.View style={styles.card}>
        <Animated.View style={{ ...styles.animation, transform: [{ translateX }] }} />
      </Animated.View>
      <Animated.View style={styles.card}>
        <Animated.View style={{ ...styles.animation, transform: [{ translateX }] }} />
      </Animated.View>
      <Animated.View style={styles.card}>
        <Animated.View style={{ ...styles.animation, transform: [{ translateX }] }} />
      </Animated.View>
      <Animated.View style={styles.card}>
        <Animated.View style={{ ...styles.animation, transform: [{ translateX }] }} />
      </Animated.View>
      <Animated.View style={styles.card}>
        <Animated.View style={{ ...styles.animation, transform: [{ translateX }] }} />
      </Animated.View>
    </>
  );
};

export default SkeletonList;
