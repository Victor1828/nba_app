import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import axios from 'axios'
import { NBA_NEWS_URL } from '../../constants/endpoints'
import { NEWS_API_KEY } from 'react-native-dotenv'

const News = () => {
  axios
    .get(NBA_NEWS_URL, {
      headers: { Authorization: NEWS_API_KEY },
    })
    .then(({ data }) => console.log(data))
    .catch(error => console.error(error))

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>News page</Text>
      </View>
    </>
  )
}

export default News
