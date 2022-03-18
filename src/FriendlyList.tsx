import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Branch } from './Branch';

interface IFriendlyList {
  items: String[];
}

export function FriendlyList({ items }: IFriendlyList) {
  // Also, for this challenge I could have changed the ServiceAndFacilityType and AccessibilityType inside Branch.ts to contain
  // type ServiceAndFacility = {
  //   Name: ServiceAndFacilityTypeName;
  //   Code: ServiceAndFacilityType;
  // };
  // and
  // type AccessibilityType = {
  //   Name: AccessibilityTypeName;
  //   Code: AccessibilityType;
  // };
  // and have another list for the names with spacings between words

  //join all items with comma
  let result = items.join(',');
  //replace last comma with 'and'
  result = result.replace(/([A-Z])/g, ' $1').trim();
  //makes all characters lowercase
  result = result.replace(/,([^,]*)$/, ' and$1').toLowerCase();
  //makes the first character upper case
  result = result.replace(/./, (c) => c.toUpperCase());

  return <Text style={styles.textBold}>{result}</Text>;
}

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'textBold',
    color: 'black',
    fontSize: 14,
    flex: 1,
  },
});
