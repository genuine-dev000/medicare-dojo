import { v, w } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { formatDate } from '@dojo/framework/i18n/date';
import Calendar from '@dojo/widgets/calendar';
import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import * as css from './styles/datePicker.m.css';

interface DatePickerProperties {
  selectedDate: Date;
}
const SelectClasses = {
	"@dojo/widgets/enhanced-text-input": {
		input: [css.input]
	}
};
interface DatePickerState {
  month?: number;
  year?: number;
  selectedDate?: Date;
  visible?: boolean;
}
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
export class DatePicker extends WidgetBase<DatePickerProperties> {
  state: DatePickerState = {
    month: currentMonth,
    selectedDate: this.properties.selectedDate,
    year: currentYear,
    visible: false
  };

  protected render() {
    return v('div', { classes: css.root }, [
      w(EnhancedTextInput, {
        classes: SelectClasses,
        onClick: () => {
            this.setState({ visible: true });
        },
        addonAfter: [
          v(
            'a',
            {
              onclick: () => {
                this.setState({ visible: !this.state.visible });
              }
            },
            [
              v('i', {
                classes: [
                  'fa', 'fa-calendar'
                ]
              })
            ]
          )
        ],
        value: formatDate(
          this.state.selectedDate || this.properties.selectedDate,
          { date: 'short' },
          ''
        )
      }),
      v(
        'section',
        {
          classes: [this.state.visible ? '' : css.hidden, css.calendarcontainer]
        },
        [
          w(Calendar, {
            month: this.state.month,
            selectedDate: this.state.selectedDate,
            year: this.state.year,
            onMonthChange: (month: number) => {
              this.setState({ month: month });
            },
            onYearChange: (year: number) => {
              this.setState({ year: year });
            },
            onDateSelect: (date: Date) => {
              this.setState({ selectedDate: date, visible: false });
            }
          })
        ]
      )
    ]);
  }

  protected setState(state: DatePickerState) {
    this.state = { ...this.state, ...state };
    this.invalidate();
  }
}

export default DatePicker;