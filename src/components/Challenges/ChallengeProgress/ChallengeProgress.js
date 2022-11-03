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

