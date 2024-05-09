/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';
import { styles } from '@/app/_styles';
import { useColors } from '@/constants/Colors';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const colors = useColors();
  const color = colors.text;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  const colors = useColors();
  const backgroundColor = colors.bg;
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Seperator(props: ViewProps) {
  const { ...otherProps } = props;
  const colors = useColors();
  const backgroundColor = colors.header;

  return <DefaultView style={[{ backgroundColor }, styles.separator]} {...otherProps} />;
}

