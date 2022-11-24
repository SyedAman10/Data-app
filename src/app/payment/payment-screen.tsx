import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, View} from 'react-native';
import PaymentCard from '../../modals/payment-card/payment-card';
import {MarginT} from '../../components/spacer/spacer-component';
import Typography from '../../infrastructure/theme/Typography';
import Btn from '../../components/button/Btn';
import {card__data} from '../../modals/payment-card/payment-card';
const PaymentScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <PaymentCard />
        </View>
        <MarginT />

        <View style={{flex: 1, flexDirection: 'row', margin: 25}}>
          <Typography varient="subheading2" style={{color: '#fff', flex: 1}}>
            {card__data.subtotal}
          </Typography>
          <Typography
            varient="subheading2"
            style={{color: '#fff', fontWeight: '700'}}>
            {card__data.subtotal_price}
          </Typography>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{height: 1, backgroundColor: '#BEBEBE', width: '85%'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', margin: 25}}>
          <Typography varient="subheading2" style={{color: '#fff', flex: 1}}>
            {card__data.tax}
          </Typography>
          <Typography
            varient="subheading2"
            style={{color: '#fff', fontWeight: '700'}}>
            {card__data.tax_price}
          </Typography>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{height: 1, backgroundColor: '#BEBEBE', width: '85%'}} />
        </View>

        <View style={{flex: 1, flexDirection: 'row', margin: 25}}>
          <Typography varient="subheading2" style={{color: '#fff', flex: 1}}>
            {card__data.total}
          </Typography>
          <Typography
            varient="subheading2"
            style={{color: '#fff', fontWeight: '700'}}>
            {card__data.Total_price}
          </Typography>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{height: 1, backgroundColor: '#BEBEBE', width: '85%'}} />
        </View>
        <MarginT />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Btn
            title="Confirm"
            varient="filled"
            component="primaryBtn"
            textVarient="subheading1"
            spacing={10}
            onTap={() => console.log('press')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PaymentScreen;
