import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet, Dimensions, Image } from 'react-native'
import axios from 'axios'
import { NBA_NEWS_URL } from '../../constants/endpoints'
import { NEWS_API_KEY } from 'react-native-dotenv'

const { height, width } = Dimensions.get('screen')

const News = () => {
  const [news, setNews] = useState({})

  useEffect(() => {
    axios
      .get(NBA_NEWS_URL, {
        headers: { Authorization: NEWS_API_KEY },
      })
      .then(({ data }) => {
        setNews(data.articles[0])
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: news.urlToImage,
            }}
            style={styles.cardImage}
          />
          <Text>{news.description}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: width / 1.1,
    height: height / 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: width / 1.1,
    height: height / 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'center',
  },
})

export default News
