import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ChallengeConstants } from '../../../util/Constants/ChallengeConstants';
import styles from './styles';
import { useTranslation } from 'react-i18next'

export default function ChallengeProgress({ name, daysLeft, completed }) {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={styles.titleStyles}>{name}</Text>
      <View style={styles.ContainerStyles}>
        <AnimatedCircularProgress
          size={220}
          width={25}
          fill={completed}
          rotation={-105}
          arcSweepAngle={210}
          lineCap={'round'}
          backgroundColor="#DCAC7F"
          tintColor="#3D9F1B">
          {
            (fill) => (
              <View>
                <Text style={styles.middleTextStyles}>
                  {daysLeft}
                </Text>
                <Text>
                  {t(ChallengeConstants.DAYS_LEFT)}
                </Text>
              </View>
            )
          }
        </AnimatedCircularProgress>
      </View>
    </View>
  )
}

