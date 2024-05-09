import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import { styles } from '../_styles';
import { View } from '@/components/Themed';
import { useTheme } from '@/context/ThemeContext';
import { useColors } from '@/constants/Colors';

const calendar = () => {
    const [selected, setSelected] = useState('');
    const { theme } = useTheme();
    const colors = useColors();

    return (
        <View style={[styles.container, {height: 200}]}>
            <Calendar
                key={theme}
                style={{
                    borderBottomWidth: 5,
                    borderColor: colors.surface,
                    backgroundColor: colors.surface,
                }}
                theme={{
                    calendarBackground: colors.header,
                    arrowColor: colors.selected,
                }}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                current={'2012-03-01'}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedColor: colors.selected},
                    '2012-03-01': {selected: true, marked: true, selectedColor: colors.selected},
                    '2012-03-02': {marked: true, dotColor: colors.selected},
                    '2012-03-03': {selected: true, selectedColor: colors.selected}
                }}
            />
        </View>
    );
}

export default calendar
