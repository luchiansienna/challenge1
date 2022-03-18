import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BranchesInput from './src/BranchesInput';
import { SearchLocation } from './src/SearchLocation';
import Map from './src/Map';
import Spinner from './src/Spinner';
import useLoading from './src/useLoading';
import { Branch } from './src/Branch';
import { closestBranchTo } from './src/distances';
import BranchDetails from './src/BranchDetails';

export default function App() {
  const [state, branches] = useLoading();
  const [search, setSearch] = useState<SearchLocation>();
  const [closest, setClosest] = useState<undefined | Branch[]>();
  useEffect(() => {
    if (branches && typeof search === 'object') {
      setClosest(closestBranchTo(search, branches));
    } else {
      setClosest(undefined);
    }
  }, [search, branches]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Map closestBranches={closest} />
      {state === 'ready' ? (
        <>
          <BranchesInput search={search} setSearch={setSearch} />
          {closest && (
            <ScrollView>
              {closest.map((closestBranch) => (
                <BranchDetails key={closestBranch.Identification} branch={closestBranch} />
              ))}
            </ScrollView>
          )}
        </>
      ) : state === 'error' ? (
        <View style={styles.centred}>
          <Text style={styles.error}>An error has occurred</Text>
        </View>
      ) : (
        <View style={styles.centred}>
          <Spinner height={60} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
