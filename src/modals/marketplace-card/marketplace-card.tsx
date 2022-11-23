import React from 'react';
import {Card} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import Typography from '../../infrastructure/theme/Typography';
import Btn from '../../components/button/Btn';
import {Image} from 'react-native';

const MarketplaceCard = () => {
  const card__data = {
    energy_usage: 'Energy Usage',
    date: 'October, 2022',
    place: 'Bielefeld',
    total_usage: 'Total Usage: 1534 kwh',
    icon: '',
  };
  return (
    <Card style={{borderRadius: 10, marginTop: 18}}>
      <View>
        <View
          style={{flex: 1, flexDirection: 'row', padding: 10, marginTop: 10}}>
          <View
            style={{
              backgroundColor: '#D3D3D3',
              borderRadius: 20,
              marginRight: 10,
            }}>
            <Image
              style={{margin: 15, padding: 8}}
              source={require('../../assets/Vector.png')}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Typography varient="subheading2" style={{color: '#000000'}}>
              {card__data.energy_usage}
            </Typography>
            <Typography varient="subheading" style={{color: '#BEBEBE'}}>
              {card__data.date}
            </Typography>
          </View>

          <Btn
            style={{
              marginLeft: 'auto',
              height: 38,
              width: 90,
              borderRadius: 10,
            }}
            varient="card-btn"
            component="minimum"
            title="Join Pool"
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', margin: 10}}>
          <View style={{height: 1, backgroundColor: '#BEBEBE', width: '80%'}} />
        </View>
        <View style={{padding: 10, marginLeft: 60, flexDirection: 'column'}}>
          <Typography varient="subheading" style={{color: '#BEBEBE'}}>
            {card__data.place}
          </Typography>
          <Typography varient="subheading" style={{color: '#BEBEBE'}}>
            {card__data.total_usage}
          </Typography>
        </View>
      </View>
    </Card>
  );
};
export default MarketplaceCard;
