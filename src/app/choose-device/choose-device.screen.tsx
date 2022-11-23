import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, FlatList} from 'react-native';
import Typography from '../../infrastructure/theme/Typography';
import {Card} from 'react-native-paper';
import {MarginB} from '../../components/spacer/spacer-component';
const ChooseDeviceScreen = () => {
  const data = [
    {
      id: 'Type 1',
      photo:
        'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2ltc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 'Type 2',
      photo:
        'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2ltc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 'Type 3',
      photo:
        'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2ltc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 'Type 4',
      photo:
        'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2ltc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 10,
      }}>
      <View style={{margin: 5}}>
        <Typography varient="heading" spacing={10}>
          Choose {'\n'}your Device Type.
        </Typography>

        <Typography varient="text" color="#7FBF4E">
          What type of Device Type do you {'\n'}wish to add ?
        </Typography>
        <MarginB />
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{margin: 10}}>
            <Card
              style={{flex: 1, width: '100%', backgroundColor: '#FFF'}}
              elevation={5}>
              <Card.Cover
                style={{width: '100%', height: 90}}
                source={{uri: item.photo}}
              />
              <View style={{margin: 35}}>
                <Typography
                  style={{color: '#1d1d1d'}}
                  varient="subheading1"
                  textAlign="center">
                  {item.id}
                </Typography>
              </View>
            </Card>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
export default ChooseDeviceScreen;
