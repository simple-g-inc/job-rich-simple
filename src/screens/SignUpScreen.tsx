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
} from 'react-native';
import { colors } from '../theme/colors';
import { LoginScreen } from './LoginScreen';

export const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <LoginScreen />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* ロゴと挨拶 */}
        <Image 
          source={require('../../assets/icon_white.png')} 
          style={styles.logo} 
        />
        <Text style={styles.welcomeText}>にようこそ！</Text>

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
          <Text style={styles.passwordHint}>英数字8文字以上で入力してください。</Text>

          <Text style={styles.label}>パスワード（確認）</Text>
          <TextInput
            style={styles.input}
            placeholder="パスワード（確認）"
            placeholderTextColor={colors.text.placeholder}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Text style={styles.passwordHint}>英数字8文字以上で入力してください。</Text>

          {/* 自動ログインスイッチ */}
          <View style={styles.autoLoginContainer}>
            <Text style={styles.autoLoginText}>次回から自動的にログイン</Text>
            <Switch
              value={autoLogin}
              onValueChange={setAutoLogin}
              trackColor={{ false: colors.gray, true: colors['button-color-2'] }}
              thumbColor={colors.white}
            />
          </View>

          {/* 利用規約の同意 */}
          <Text style={styles.termsText}>
            下記の各種登録ボタンをクリックすると、ジョブリッチの
            利用規約およびプライバシーポリシーへの同意を含んだ
            ものとします。
          </Text>

          {/* 登録ボタン */}
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>登録する</Text>
          </TouchableOpacity>

          {/* 区切り線 */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>または</Text>
            <View style={styles.divider} />
          </View>

          {/* ソーシャルログインボタン */}
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/mail_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>メールアドレスで登録</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/apple_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Appleでサインアップ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/google_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Googleで登録</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/line_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>LINEで登録</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/facebook_icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Facebookで登録</Text>
          </TouchableOpacity>

          {/* ログインリンク */}
          <TouchableOpacity onPress={() => setShowLogin(true)} style={styles.loginLink}>
            <Text style={styles.loginText}>ログインの方はこちら</Text>
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
  passwordHint: {
    fontSize: 12,
    color: colors.white,
    marginBottom: 0,
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
  termsText: {
    fontSize: 12,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 18,
  },
  signUpButton: {
    backgroundColor: colors['button-color-2'],
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.white,
  },
  signUpButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
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
  loginText: {
    color: colors.white,
    fontSize: 15,
    marginBottom: 18,
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
}); 
