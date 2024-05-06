import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import { styles } from '../_styles';
import { View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useTheme } from '@/context/ThemeContext';

const calendar = () => {
    const [selected, setSelected] = useState('');
    const { theme } = useTheme();
    const { selectedColor } = Colors[theme].calendar;

    return (
        <View style={styles.container}>
            <Calendar
                key={theme}
                style={{
                    borderWidth: 1,
                    borderColor: Colors[theme].borderColor,
                    backgroundColor: Colors[theme].calendar.backgroundColor,
                }}
                theme={{
                    calendarBackground: Colors[theme].calendar.calendarBackground,
                    arrowColor: Colors[theme].calendar.arrowColor,
                    dayTextColor: Colors[theme].text,
                    textDisabledColor: Colors[theme].tabIconDefault,
                    monthTextColor: Colors[theme].text,
                    textSectionTitleColor: Colors[theme].text,
                }}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                current={'2012-03-01'}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedColor: selectedColor},
                    '2012-03-01': {selected: true, marked: true, selectedColor: selectedColor},
                    '2012-03-02': {marked: true, selectedColor: selectedColor},
                    '2012-03-03': {selected: true, selectedColor: selectedColor}
                }}
            />
        </View>
    );
}

export default calendar
