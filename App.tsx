import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { colors } from './src/theme/colors';

export default function App() {
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [languageModalVisible, setLanguageModalVisible] = React.useState(false);

  if (showSignUp) {
    return <SignUpScreen />;
  }

  if (showLogin) {
    return <LoginScreen />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => setLanguageModalVisible(false)}>
      <View style={styles.container}>
        {/* ロゴ画像 */}
        <Image source={require('./assets/icon_white.png')} style={styles.logo} />
        {/* 挨拶テキスト */}
        <Text style={styles.hello}>こんにちは！</Text>
        <Text style={styles.welcome}>ジョブリッチ</Text>
        <Text style={styles.hello}>にようこそ</Text>
        {/* 開始ボタン */}
        <TouchableOpacity style={styles.startButton} onPress={() => setShowSignUp(true)}>
          <Text style={styles.startButtonText}>JOB-RICHを始める</Text>
        </TouchableOpacity>
        {/* ログインリンク */}
        <TouchableOpacity onPress={() => setShowLogin(true)}>
          <Text style={styles.loginText}>ログインの方はこちら</Text>
        </TouchableOpacity>
        {/* 言語選択 */}
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 40 }}>
          <TouchableOpacity style={styles.languageButton} onPress={() => setLanguageModalVisible((v) => !v)}>
            <Text style={styles.languageButtonText}>English ▼</Text>
          </TouchableOpacity>
          {languageModalVisible && (
            <View style={styles.languageDropdown}>
              <TouchableOpacity
                style={styles.languageOption}
                onPress={() => setLanguageModalVisible(false)}
              >
                <Text style={styles.languageOptionText}>English</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* フッターロゴ */}
        <View style={styles.footer}>
          <Image source={require('./assets/logo_blue.png')} style={styles.footerLogo} />
        </View>
        <StatusBar style="light" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['main-color'],
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
    marginTop: 40,
    resizeMode: 'contain',
  },
  hello: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  welcome: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 40,
  },
  startButton: {
    backgroundColor: colors['button-color-1'],
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  startButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: colors.white,
    fontSize: 15,
    marginBottom: 18,
  },
  languageButton: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  languageButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 32,
    alignItems: 'center',
    width: '100%',
  },
  footerLogo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  footerText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  languageDropdown: {
    position: 'absolute',
    top: 44,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 20,
    alignItems: 'center',
  },
  languageOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  languageOptionText: {
    fontSize: 16,
    color: colors['main-color'],
    fontWeight: 'bold',
  },
});
