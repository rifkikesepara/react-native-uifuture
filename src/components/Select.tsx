import { useEffect, useState } from 'react';
import { Button, Menu } from 'react-native-paper';
import type { SelectProps } from './Types';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Stack from './Stack';
import { Platform } from 'react-native';

const Select = ({
  menuItems,
  onChange = () => {},
  width = 200,
}: SelectProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState<String>('Select an Item');

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const openIconStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          rotate: withTiming(showMenu ? '90deg' : '270deg'),
        },
      ],
    }),
    [showMenu]
  );

  return (
    <Menu
      visible={showMenu}
      onDismiss={() => setShowMenu(false)}
      anchor={
        <Stack alignItems="center" style={{ position: 'relative' }}>
          <Animated.Text
            style={[
              // eslint-disable-next-line react-native/no-inline-styles
              {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
                position: 'absolute',
                right: 20,
                zIndex: 1,
              },
              openIconStyle,
            ]}
          >
            &lt;
          </Animated.Text>
          <Button
            textColor="black"
            style={{
              minWidth: width,
              borderRadius: 5,
              zIndex: 2,
            }}
            mode="outlined"
            onPress={() => setShowMenu(true)}
          >
            {selected}
          </Button>
        </Stack>
      }
      anchorPosition="bottom"
      style={{
        minWidth: width,
        maxWidth: width,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}
      elevation={1}
      mode="elevated"
    >
      {menuItems.map((item, index) => (
        <Menu.Item
          style={{ minWidth: '100%' }}
          key={index}
          onPress={() => {
            setShowMenu(false);
            setSelected(item.label);
          }}
          title={item.label}
        />
      ))}
    </Menu>
  );
};

export default Select;
