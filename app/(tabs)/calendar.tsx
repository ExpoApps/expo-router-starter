import React, { useState } from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { styles } from '../_styles';
import { View } from '@/components/Themed';

const calendar = () => {
    const [selected, setSelected] = useState('');

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}
                }}
            />
        </View>
    );
}

export default calendar