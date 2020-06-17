import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'
import axios from 'axios'
import { NBA_NEWS_URL } from '../../constants/endpoints'
import { NEWS_API_KEY } from 'react-native-dotenv'
import moment from 'moment'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('screen')

const Card = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={() => navigation.navigate('NewsDetail')}>
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.cardText}>
          {item.publishedAt && moment(item.publishedAt).format('LL')}
        </Text>
      </View>
      <View style={styles.cardImageContainer}>
        <Image
          source={{
            uri: item.urlToImage,
          }}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardDescriptionContainer}>
        <Text style={styles.cardText} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)

const News = ({ navigation }) => {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios
      .get(NBA_NEWS_URL, {
        headers: { Authorization: NEWS_API_KEY },
        params: { page },
      })
      .then(({ data }) => {
        setNews([...news, ...data.articles])
      })
      .catch(error => console.error(error))
  }, [page])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={news}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => setPage(page + 1)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: width / 1.1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  cardImageContainer: {
    width: width / 1.1,
    height: height / 5,
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  cardTitleContainer: {
    padding: 10,
  },
  cardTitle: {
    width: width / 1.5,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardText: {
    fontSize: 16,
    color: '#797979',
  },
  cardDescriptionContainer: {
    padding: 10,
  },
})

export default News
