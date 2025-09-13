import OrderCard from '@/components/cart/OrderCard';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

const CompletePage = () => {
  const handleTrackOrder = () => console.log('Tracking order...');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      <ScrollView
        contentContainerStyle={{  paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <OrderCard
          imageSource={require('../../assets/images/cart/order1.jpg')}
          title="Kendric's Jacket on Tour"
          subtitle="Kendric Lamar"
          status="Complete"
          price="$150.00"
          buttonText="Review"
          onButtonPress={handleTrackOrder}
          statusPillStyle= {{ backgroundColor: '#DDF1E8' }}
          statusTextStyle={{ color: '#32A06E' }}
        />
        <OrderCard
          imageSource={require('../../assets/images/cart/order3.jpg')}
          title="Kendric's Jacket on Tour"
          subtitle="Kendric Lamar"
          status="Complete"
          price="$150.00"
          buttonText="Review"
          onButtonPress={handleTrackOrder}
          statusPillStyle= {{ backgroundColor: '#DDF1E8' }}
          statusTextStyle={{ color: '#32A06E' }}
        />
        <OrderCard
          imageSource={require('../../assets/images/cart/order4.jpg')}
          title="Kendric's Jacket on Tour"
          subtitle="Kendric Lamar"
          status="Complete"
          price="$150.00"
          buttonText="Review"
          onButtonPress={handleTrackOrder}
          statusPillStyle= {{ backgroundColor: '#DDF1E8' }}
          statusTextStyle={{ color: '#32A06E' }}
        />
        <OrderCard
          imageSource={require('../../assets/images/cart/order1.jpg')}
          title="Kendric's Jacket on Tour"
          subtitle="Kendric Lamar"
          status="Complete"
          price="$150.00"
          buttonText="Review"
          onButtonPress={handleTrackOrder}
          statusPillStyle= {{ backgroundColor: '#DDF1E8' }}
          statusTextStyle={{ color: '#32A06E' }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompletePage;
