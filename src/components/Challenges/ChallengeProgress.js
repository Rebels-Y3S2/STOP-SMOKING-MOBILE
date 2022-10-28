import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function ChallengeProgress({ title, progress }) {
  return (
    <View>
      <Text style={styles.titleStyles}>{title}</Text>
      <View style={styles.ContainerStyles}>
        <AnimatedCircularProgress
          size={220}
          width={25}
          fill={progress}
          rotation={-105}
          arcSweepAngle={210}
          lineCap={'round'}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#DCAC7F"
          tintColor="#3D9F1B">
          {
            (fill) => (
              <View>
                <Text style={styles.middleTextStyles}>
                  {progress}
                </Text>
                <Text>
                  Days left
                </Text>
              </View>

            )
          }
        </AnimatedCircularProgress>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ContainerStyles: {
    flex: 1, // Covers the available space
    justifyContent: "center", // aligns through main axis
    alignItems: "center", // aligns though secondary axis
    marginTop: 15
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    weight: 500,
    fontSize: 18,
    lineHeight: 24,
    color: '#000000',
    padding: 20
  },
  middleTextStyles: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    weight: 400,
    fontSize: 44,
    letterSpacing: 0.15,
    color: '#8E5B5B'
  }
});