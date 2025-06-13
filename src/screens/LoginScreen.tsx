import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  Pressable,
} from 'react-native';
import { colors } from '../theme/colors';
import { HomeScreen } from './HomeScreen';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [showHome, setShowHome] = useState(false);

  if (showHome) {
    return <HomeScreen />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* ロゴと挨拶 */}
        <Image 
          source={require('../../assets/icon_white.png')} 
          style={styles.logo} 
        />
        <Text style={styles.welcomeText}>おかえりなさい</Text>

        {/* 入力フォーム */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>メールアドレス</Text>
          <TextInput
            style={styles.input}
            placeholder="メールアドレス"
            placeholderTextColor={colors.text.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>パスワード</Text>
          <TextInput
            style={styles.input}
            placeholder="パスワード"
            placeholderTextColor={colors.text.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* 自動ログインスイッチ */}
          <View style={styles.autoLoginContainer}>
            <Text style={styles.autoLoginText}>次回から自動的にログイン</Text>
            <Switch
              value={autoLogin}
              onValueChange={setAutoLogin}
              trackColor={{ false: (colors.gray as any).medium, true: colors['button-color-2'] }}
              thumbColor={colors.white}
            />
          </View>

          {/* ログインボタン */}
          <TouchableOpacity style={styles.loginButton} onPress={() => setShowHome(true)}>
            <Text style={styles.loginButtonText}>ログインする</Text>
          </TouchableOpacity>

          {/* パスワードリセットリンク */}
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>メールアドレスをお忘れの方</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPasswordDivider}>・</Text>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>パスワードをお忘れの方</Text>
            </TouchableOpacity>
          </View>

          {/* 区切り線 */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>または</Text>
            <View style={styles.divider} />
          </View>

          {/* ソーシャルログインボタン */}
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/mail_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>メールアドレスでログイン</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/apple_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Appleでサインアップ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/google_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Googleでログイン</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/line_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>LINEでログイン</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/facebook_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Facebookでログイン</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['main-color'],
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
    backgroundColor: colors.white,
  },
  autoLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  autoLoginText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.white,
  },
  loginButton: {
    backgroundColor: colors['button-color-2'],
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.white,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: colors.white,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  forgotPasswordDivider: {
    color: colors.white,
    marginHorizontal: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.white,
  },
  dividerText: {
    marginHorizontal: 10,
    color: colors.white,
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 12,
    marginBottom: 12,
    position: 'relative',
    justifyContent: 'center',
  },
  socialIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    position: 'absolute',
    left: 16,
  },
  socialButtonText: {
    flex: 1,
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 