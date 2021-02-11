import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions } from '@mobiscroll/react';
import './App.css';

setOptions({
    theme: 'ios',
    themeVariant: 'dark'
});

function Reminder() {
    return (
        <Page className="reminder">
            <Datepicker
                controls={['datetime']}
                inputProps={{
                    label: 'Compact date & time picker',
                    labelStyle: 'stacked',
                    inputStyle: 'outline',
                    placeholder: 'Please Select...'
                }}
            />
            <Datepicker
                controls={['date', 'time']}
                inputProps={{
                    label: 'Expanded date & time picker',
                    labelStyle: 'stacked',
                    inputStyle: 'outline',
                    placeholder: 'Please Select...'
                }}
            />
            <div className="mbsc-grid mbsc-no-padding">
                <div className="mbsc-row">
                    <div className="mbsc-col-6">
                        <Datepicker
                            controls={['date']}
                            inputProps={{
                                label: 'Date',
                                labelStyle: 'stacked',
                                inputStyle: 'outline',
                                placeholder: 'Please Select...'
                            }}
                        />
                    </div>
                    <div className="mbsc-col-6">
                        <Datepicker
                            controls={['time']}
                            inputProps={{
                                label: 'Time',
                                labelStyle: 'stacked',
                                inputStyle: 'outline',
                                placeholder: 'Please Select...'
                            }}
                        />
                    </div>
                </div>
            </div>
        </Page>
    ); 
}


export default Reminder;