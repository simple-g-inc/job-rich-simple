import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import { colors } from '../theme/colors';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.44;
const CARD_HEIGHT = SCREEN_WIDTH * 0.62;
const CARD_MARGIN = (SCREEN_WIDTH - CARD_WIDTH * 2) / 6;

const dummyJobs = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: '未経験9割！1ヶ月研修でしっかりサポート！安心スタート',
  salary: '￥ 0000-0000',
  time: '9:00-18:00',
  place: '勤務地',
  image: require('../../assets/job_sample.png'), // 仮画像をassetsに用意してください
  isNew: i % 2 === 1,
  isFavorite: i % 3 === 0,
}));

export const HomeScreen = () => {
  // TabBar用
  const [activeTab, setActiveTab] = useState<'search' | 'work' | 'filter' | 'message' | 'mypage' | 'save'>('search');
  // 検索履歴/保存した条件タブ用
  const [activeListTab, setActiveListTab] = useState<'history' | 'saved'>('history');

  const getTabColor = (tab: 'search' | 'work' | 'save' | 'message' | 'mypage') =>
    activeTab === tab ? colors['recs-color'] : colors.text.secondary;

  return (
    <SafeAreaView style={styles.container}>
      {/* マップ検索ボタン */}
      <TouchableOpacity style={styles.mapSearchButton}>
        <Text style={styles.mapSearchText}>マップ検索</Text>
        <Image source={require('../../assets/map_icon.png')} style={styles.mapIcon} />
      </TouchableOpacity>

      {/* タブ */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeListTab === 'history' && styles.activeTab]}
          onPress={() => setActiveListTab('history')}
        >
          <Text style={[styles.tabText, activeListTab === 'history' && styles.activeTabText]}>検索履歴</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeListTab === 'saved' && styles.activeTab]}
          onPress={() => setActiveListTab('saved')}
        >
          <Text style={[styles.tabText, activeListTab === 'saved' && styles.activeTabText]}>保存した条件</Text>
        </TouchableOpacity>
      </View>

      {/* 求人リスト */}
      <FlatList
        data={dummyJobs}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={[styles.listContent, { alignItems: 'center', paddingBottom: 120 }]}
        renderItem={({ item, index }) => (
          <View style={[
            styles.card,
            {
              marginRight: index % 2 === 0 ? CARD_MARGIN : 0,
              marginLeft: index % 2 === 1 ? CARD_MARGIN : 0,
            },
          ]}>
            <Image source={item.image} style={styles.cardImage} />
            {/* NEWバッジ */}
            {item.isNew && (
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>NEW</Text>
              </View>
            )}
            {/* お気に入りハート */}
            {item.isFavorite && (
              <View style={styles.favoriteIcon}>
                <Text style={{ color: colors['new-color'], fontSize: 18 }}>♡</Text>
              </View>
            )}
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.cardInfo}>￥ {item.salary}</Text>
              <Text style={styles.cardInfo}>🕒 {item.time}</Text>
              <Text style={styles.cardInfo}>📍 {item.place}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      />

      {/* TabBar（下から24px浮かせて固定） */}
      <View style={styles.tabBarFloating}>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setActiveTab('search')}>
          <Ionicons name="search" size={24} color={getTabColor('search')} />
          <Text style={[styles.tabBarLabel, activeTab === 'search' && styles.tabBarLabelActive]}>検索</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setActiveTab('work')}>
          <MaterialIcons name="work-outline" size={24} color={getTabColor('work')} />
          <Text style={[styles.tabBarLabel, activeTab === 'work' && styles.tabBarLabelActive]}>働く</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setActiveTab('save')}>
          <FontAwesome name="heart-o" size={24} color={getTabColor('save')} />
          <Text style={[styles.tabBarLabel, activeTab === 'save' && styles.tabBarLabelActive]}>保存</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setActiveTab('message')}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color={getTabColor('message')} />
          <Text style={[styles.tabBarLabel, activeTab === 'message' && styles.tabBarLabelActive]}>メッセージ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setActiveTab('mypage')}>
          <FontAwesome name="user-o" size={24} color={getTabColor('mypage')} />
          <Text style={[styles.tabBarLabel, activeTab === 'mypage' && styles.tabBarLabelActive]}>マイページ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['main-color'],
  },
  fixedTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors['main-color'],
    zIndex: 10,
    paddingTop: 0,
  },
  scrollArea: {
    flex: 1,
    marginTop: 120, // 上部固定エリアの高さ分
    marginBottom: 100, // 下部TabBarの高さ分
  },
  mapSearchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    margin: 16,
    paddingVertical: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mapSearchText: {
    fontSize: 18,
    color: colors.text.secondary,
    fontWeight: 'bold',
    marginRight: 8,
  },
  mapIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginBottom: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#E1E1E1',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: colors.white,
    marginBottom: -3,
  },
  tabText: {
    color: '#E1E1E1',
    fontSize: 18,
  },
  activeTabText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 100,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: 12,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '48%',
    resizeMode: 'cover',
  },
  newBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors['new-color'],
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 2,
  },
  newBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 2,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 2,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  cardInfo: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  tabBarFloating: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 24,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 24,
    marginHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarLabel: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: 'bold',
    height: 18,
    textAlign: 'center',
    marginTop: 2,
  },
  tabBarLabelActive: {
    color: colors['recs-color'],
  },
}); 