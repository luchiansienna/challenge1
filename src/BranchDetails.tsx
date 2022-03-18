import { StyleSheet, View, Text } from 'react-native';
import { Branch } from './Branch';
import { FriendlyList } from './FriendlyList';

export default function BranchDetails({ branch }: { branch: Branch }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Branch name:</Text>
        <Text style={styles.textBold}>{branch.Name}</Text>
      </View>
      {branch.ServiceAndFacility && (
        <View style={styles.row}>
          <Text style={styles.text}>Services:</Text>
          <FriendlyList items={branch.ServiceAndFacility}></FriendlyList>
        </View>
      )}
      {branch.Accessibility && (
        <View style={styles.row}>
          <Text style={styles.text}>Accessibility:</Text>
          <FriendlyList items={branch.Accessibility}></FriendlyList>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80808030',
    padding: 10,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'textRegular',
    color: 'black',
    fontSize: 14,
    flex: 1,
  },
  textBold: {
    fontFamily: 'textBold',
    color: 'black',
    fontSize: 14,
    flex: 1,
  },
});
