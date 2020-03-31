import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Card } from 'react-native-material-ui';

const { height, width } = Dimensions.get('screen');
const UserDetails = () => {
  const userDetails = useSelector(state => state.users.userDetails);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Image
            source={{ uri: userDetails.picture.large }}
            style={styles.img}
          />
          <Text style={styles.name}>
            {userDetails.name.first} {userDetails.name.last}
          </Text>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>GENDER:</Text>
            <Text style={styles.text}>{userDetails.gender}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>BIRTHDAY:</Text>
            <Text style={styles.text}>{userDetails.dob.date}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>AGE:</Text>
            <Text style={styles.text}>{userDetails.dob.age}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>EMAIL:</Text>
            <Text style={styles.text}>{userDetails.email}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>PHONE:</Text>
            <Text style={styles.text}>{userDetails.phone}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>CELL:</Text>
            <Text style={styles.text}>{userDetails.cell}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>COUNTRY:</Text>
            <Text style={styles.text}>{userDetails.location.country}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>STATE:</Text>
            <Text style={styles.text}>{userDetails.location.state}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>CITY:</Text>
            <Text style={styles.text}>{userDetails.location.city}</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.textBlock}>
            <Text style={styles.text}>ADDRESS:</Text>
            <Text style={styles.text}>
              {userDetails.location.street.number}
              {' / '}
              {userDetails.location.street.name}
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  img: {
    height: height * 0.7,
    width,
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
    padding: 10,
  },
  textBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
