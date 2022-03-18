import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Map from './src/Map';
import {
  ClosestBranchProvider,
} from './src/providers/ClosestBranchProvider';
import BranchesList from './src/BranchesList';

export default function App() {
  return (
    <ClosestBranchProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Map />
        <BranchesList />
      </View>
    </ClosestBranchProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
