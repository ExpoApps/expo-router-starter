/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';
import Colors from '@/constants/Colors';
import { useTheme } from '@/context/ThemeContext';
import { styles } from '@/app/_styles';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const { theme } = useTheme();
  const color = Colors[theme].text;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  const { theme } = useTheme();  
  const backgroundColor = Colors[theme].background;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Seperator(props: ViewProps) {
  const { ...otherProps } = props;
  const { theme } = useTheme();
  const backgroundColor = Colors[theme].seperator;

  return <DefaultView style={[{ backgroundColor }, styles.separator]} {...otherProps} />;
}

