import { Button } from 'react-native-paper';
import { Accordion, Stack, TextField } from 'react-native-uifuture';

export default function App() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ paddingTop: 10 }}
      spacing={20}
    >
      <Stack width="75%">
        <Accordion title="test" elevation={2}>
          <Stack width="100%">
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={8}
            >
              <TextField label="Name" />

              <Button mode="contained" style={{ width: '100%' }}>
                Add User
              </Button>
            </Stack>
          </Stack>
        </Accordion>
      </Stack>
    </Stack>
  );
}
