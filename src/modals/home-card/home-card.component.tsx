import React, {useState} from 'react';
import {Card} from 'react-native-paper';
import {Switch, View} from 'react-native';
import Typography from '../../infrastructure/theme/Typography';
const HomeScreenCard = () => {
  const card_data = {
    photos: [
      'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2ltc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    ],
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <Card
        style={{flex: 1, margin: 5, width: '100%', backgroundColor: '#FFF'}}
        elevation={5}>
        <Card.Cover
          style={{width: '100%', height: 120}}
          source={{uri: card_data.photos[0]}}
        />
        <View>
          <Typography
            style={{color: '#1d1d1d'}}
            varient="subheading1"
            textAlign="center">
            Device 1
          </Typography>
          <Typography
            style={{color: '#898989'}}
            varient="subheading2"
            textAlign="center">
            2 devices
          </Typography>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Switch
              trackColor={{false: '#767577', true: '#767577'}}
              thumbColor={isEnabled ? '#7FBF4E' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </Card>
    </>
  );
};
export default HomeScreenCard;
