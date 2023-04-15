import React from 'react';
import { SafeAreaView } from 'react-native';
import Footer from '../components/Footer';
import Theme from '../helper/Theme';

type Props = {
  children?: any;
};

const Primary = ({children}: Props) => {
  return (
      <SafeAreaView style={{paddingTop: 20, backgroundColor:Theme.backgroundColor.primary}}>
          {children}
          <Footer.Primary />
    </SafeAreaView>
  )
}

export default Primary