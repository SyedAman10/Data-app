import React from 'react';
import {Card} from 'react-native-paper';
import {View} from 'react-native';
import Typography from '../../infrastructure/theme/Typography';
import LinearGradient from 'react-native-linear-gradient';
import {Space} from '../../components/spacer/spacer-component';
export const card__data = {
  subtotal: 'Subtotal',
  subtotal_price:'$5',
  months: '3 Month',
  price: '$5.00',
  tax:'Tax',
  tax_price:'$1',
  total:'Total',
  Total_price:'$6',
  total_price: 'Total Price $40',
  monthly: 'Monthly',
};
const PaymentCard = () => {
  return (
    <Card style={{borderRadius: 10, marginTop: 18}}>
      <LinearGradient
        style={{borderRadius: 10}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#104440', '#1c4537', '#29472d']}>
        <View>
          <Space />
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <Typography varient="subheading2" style={{color: '#fff', flex: 1}}>
              {card__data.months}
            </Typography>
            <Typography
              varient="subheading2"
              style={{color: '#fff', fontWeight: '700'}}>
              {card__data.price}
            </Typography>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 10,
            }}>
            <Typography varient="subheading2" style={{color: '#fff', flex: 1}}>
              {card__data.total_price}
            </Typography>
            <Typography varient="subheading" style={{color: '#fff'}}>
              {card__data.monthly}
            </Typography>
          </View>
          <Space />
        </View>
      </LinearGradient>
    </Card>
  );
};

export default PaymentCard;
