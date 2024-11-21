import React from 'react';
import type {
  DimensionValue,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { TextInputProps } from 'react-native-paper';
import type { SharedValue } from 'react-native-reanimated';

interface StackProps {
  children: React.JSX.Element | React.JSX.Element[];
  direction?: 'row' | 'column';
  width?: DimensionValue;
  height?: DimensionValue;
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  spacing?: number;
  style?: StyleProp<ViewStyle> | {};
}

interface TextFieldProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  mode?: 'flat' | 'outlined';
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

interface AccordionProps extends StackProps {
  title?: string;
  expanded?: SharedValue<boolean>;
  children: React.JSX.Element | React.JSX.Element[];
  viewKey?: number;
  duration?: number;
  elevation?: number;
}

export type { StackProps, TextFieldProps, AccordionProps };
