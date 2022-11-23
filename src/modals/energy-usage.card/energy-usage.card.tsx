import React from 'react';
import {Card} from 'react-native-paper';
import {View} from 'react-native';
import Typography from '../../infrastructure/theme/Typography';
import Btn from '../../components/button/Btn';
import {Image} from 'react-native';

const EnergyUsageCard = () => {
  const card__data = {
    energy_usage: 'Energy Usage',
    date: 'October, 2022',
    energy_saving: 'Energy Saving',
    energy_percentage: '50%',
    icon: '',
    monthly: 'Monthly',
    monthly_data: '22344 kwh',
  };
  return (
    <Card style={{borderRadius: 10, marginTop: 18}}>
      <View>
        <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
          <Typography varient="subheading2" style={{color: '#000000', flex: 1}}>
            {card__data.energy_usage}
          </Typography>
          <Typography varient="subheading" style={{color: '#BEBEBE'}}>
            {card__data.date}
          </Typography>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            backgroundColor: '#0DB6AB1A',
          }}>
          <Typography varient="subheading2" style={{color: '#000000', flex: 1}}>
            {card__data.energy_saving}
          </Typography>
          <Typography varient="subheading" style={{color: '#0DB6AF'}}>
            {card__data.energy_percentage}
          </Typography>
        </View>
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
            <Typography varient="subheading" style={{color: '#000000'}}>
              {card__data.monthly}
            </Typography>
            <Typography varient="subheading" style={{color: '#3D3D3D'}}>
              {card__data.monthly_data}
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
            title="Detail"
          />
        </View>
      </View>
    </Card>
  );
};

export default EnergyUsageCard;
