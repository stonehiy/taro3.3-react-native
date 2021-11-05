import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import Other from '../other/other'
import Taro from "@tarojs/taro"


export default class Index extends Component {






  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  goPage = () => {
    Taro.navigateTo({url:'/pages/other/other'})

  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Text>Hello world!111</Text>
        <Text>Hello world!111</Text>
        <Other />
        <Button onClick={this.goPage}>Gooo</Button>

      </View>
    )
  }


}
