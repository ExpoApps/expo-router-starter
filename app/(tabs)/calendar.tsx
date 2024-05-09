import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import { View } from '@/components/Themed';
import { useTheme } from '@/context/ThemeContext';
import { useColors } from '@/constants/Colors';
import { styles } from '../_styles';

const calendar = () => {
    const [selected, setSelected] = useState('');
    const { theme } = useTheme();
    const colors = useColors();

    return (
        <View style={[styles.container, {padding: 10}]}>
            <Calendar
                key={theme}
                style={{
                    borderColor: colors.surface,
                    backgroundColor: colors.surface,
                    borderRadius: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.shadow,
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
