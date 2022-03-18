import { StyleSheet, Text, View } from 'react-native';
import BranchesInput from './BranchesInput';
import Spinner from './Spinner';
import BranchDetails from './BranchDetails';
import { useClosestBranch } from './providers/ClosestBranchProvider';

export default function BranchesList() {
  const { state } = useClosestBranch();

  return state === 'ready' ? (
    <>
      <BranchesInput />
      <BranchDetails />
    </>
  ) : state === 'error' ? (
    <View style={styles.centred}>
      <Text style={styles.error}>An error has occurred</Text>
    </View>
  ) : (
    <View style={styles.centred}>
      <Spinner height={60} />
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    fontFamily: 'textRegular',
    fontSize: 24,
    color: '#ED0000',
    padding: 10,
    backgroundColor: '#80808030',
  },
  centred: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
