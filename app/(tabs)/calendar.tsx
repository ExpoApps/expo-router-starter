import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import { View } from '@/components/Themed';
import { useTheme } from '@/context/ThemeContext';
import { useColors } from '@/constants/Colors';

const calendar = () => {
    const [selected, setSelected] = useState('');
    const { theme } = useTheme();
    const colors = useColors();

    return (
        <View style={[{flex: 1}, {padding: 10}]}>
            <Calendar
                key={theme}
                style={{
                    borderColor: colors.surface,
                    backgroundColor: colors.surface,
                    borderRadius: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.gray,
                }}
                theme={{
                    calendarBackground: colors.surface,
                    arrowColor: colors.brand,
                    textSectionTitleColor: colors.text,
                    dayTextColor: colors.text,
                    monthTextColor: colors.text,
                    textDisabledColor: colors.gray,
                }}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                current={'2012-03-01'}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedColor: colors.gray},
                    '2012-03-02': {marked: true, dotColor: colors.gray},
                }}
            />
        </View>
    );
}


export default calendar
