import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { Select, Stack } from 'react-native-uifuture';

export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ paddingTop: 50, backgroundColor: 'white' }}
        spacing={20}
      >
        <Select
          width={'80%'}
          menuItems={[
            {
              label: 'Testttttttttttttttttttttttttttttttttttttttt',
              value: 'Test',
            },
            { label: 'Zafer', value: 'Test' },
            { label: 'Sevdiye', value: 'Test' },
            { label: 'Rıfkı', value: 'Test' },
          ]}
        />
      </Stack>
    </PaperProvider>
  );
}
