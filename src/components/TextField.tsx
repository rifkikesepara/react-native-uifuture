import { TextInput } from 'react-native-paper';
import type { TextFieldProps } from './Types';

const TextField = ({
  placeholder,
  label,
  style,
  value,
  error,
  mode = 'flat',
  onChangeText,
  keyboardType,
  ...props
}: TextFieldProps) => {
  return (
    <TextInput
      style={[
        {
          width: '100%',
          overflow: 'hidden',
        },
        style,
      ]}
      onChangeText={onChangeText}
      placeholder={placeholder}
      label={label}
      value={value}
      error={error}
      mode={mode}
      keyboardType={keyboardType}
      {...props}
    />
  );
};

export default TextField;
