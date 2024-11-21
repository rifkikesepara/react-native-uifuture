import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Stack from './Stack';
import type { AccordionProps } from './Types';

const Accordion = ({
  title,
  expanded,
  children,
  viewKey,
  style,
  duration = 500,
  elevation = 2,
}: AccordionProps) => {
  const height = useSharedValue(0);
  const opened = useSharedValue(false);
  const isExpanded = expanded ? expanded : opened;

  const bodyStyle = useAnimatedStyle(() => ({
    height: withTiming(height.get() * Number(isExpanded.get()), {
      duration,
    }),
    borderWidth: isExpanded.get() ? 0.1 : 0,
  }));

  const titleStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: withTiming(isExpanded.get() ? 0 : 10, {
      duration: duration + 100,
    }),
    borderBottomRightRadius: withTiming(isExpanded.get() ? 0 : 10, {
      duration: duration + 100,
    }),
  }));

  const openIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: withTiming(isExpanded.get() ? '90deg' : '270deg'),
      },
    ],
  }));

  return (
    <Stack
      direction="column"
      style={[
        Platform.OS === 'ios' && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 * elevation },
          shadowOpacity: elevation && 0.15,
          shadowRadius: elevation && 2,
        },
        style,
      ]}
    >
      {title ? (
        <Pressable
          style={{ width: '100%' }}
          onPress={() => (isExpanded.value = !isExpanded.value)}
        >
          <Animated.View
            style={[
              {
                width: '100%',
                backgroundColor: 'red',
                paddingVertical: 20,
                paddingHorizontal: 15,
                borderRadius: 10,
              },
              titleStyle,
            ]}
          >
            <Stack justifyContent="space-between">
              <Text style={{ color: 'white', fontSize: 17 }}>{title}</Text>
              <Animated.Text
                style={[
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginRight: 5,
                  },
                  openIconStyle,
                ]}
              >
                &lt;
              </Animated.Text>
            </Stack>
          </Animated.View>
        </Pressable>
      ) : (
        <></>
      )}
      <Animated.View
        key={`accordionItem_${viewKey}`}
        style={[styles.animatedView, bodyStyle, { elevation: elevation }]}
      >
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
          }}
        >
          <View
            onLayout={(e) => {
              height.value = e.nativeEvent.layout.height;
            }}
            style={styles.wrapper}
          >
            {children}
          </View>
        </View>
      </Animated.View>
    </Stack>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  animatedView: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default Accordion;
