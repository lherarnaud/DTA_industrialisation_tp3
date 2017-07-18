import React from 'react';
import { Image, ScrollView } from 'react-native';

import ImageNY1 from '../../assets/NY1.jpg';
import ImageNY2 from '../../assets/NY2.jpg';
import ImageNY3 from '../../assets/NY3.jpg';

export default function SampleJsx() {
  const monComposant = <Image source={ImageNY1} />;

  const images = [
    <Image key="1" source={ImageNY1} />,
    <Image key="2" source={ImageNY2} />,
    <Image key="3" source={ImageNY3} />,
    <Image key="4" source={ImageNY1} />,
    <Image key="5" source={ImageNY2} />,
    <Image key="6" source={ImageNY3} />,
  ];

  return (<ScrollView horizontal>
    {monComposant}
    {images}
  </ScrollView>);
}
