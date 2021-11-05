import { View,Text } from "@tarojs/components";
import React from "react";

interface OtherProps {

}

interface OtherState {

}

class Other extends React.Component<OtherProps, OtherState> {
  state = { }


  render() {
    return (
      <View className='index'>
      <Text >Other!11111</Text>
      <Text >Other!111</Text>
      <Text >Other!1</Text>
    </View>
    );
  }
}

export default Other;
