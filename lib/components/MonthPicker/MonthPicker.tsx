import React, { ChangeEvent, FocusEvent, createRef, Fragment } from 'react';
import classnames from 'classnames';
import range from 'lodash/range';
import { isMobile } from 'is-mobile';
import { Omit } from 'utility-types';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { Hidden } from '../Hidden/Hidden';
import { Dropdown } from '../Dropdown/Dropdown';
import { FieldProps, Field } from '../private/Field/Field';
import { FieldGroup } from '../private/FieldGroup/FieldGroup';
import * as styleRefs from './MonthPicker.treat';

interface MonthPickerValue {
  month?: number;
  year?: number;
}

type FocusHandler = () => void;
type ChangeHandler = (value: MonthPickerValue) => void;
interface MonthPickerProps
  extends Omit<
    FieldProps,
    | 'value'
    | 'labelId'
    | 'aria-describedby'
    | 'data'
    | 'name'
    | 'autoComplete'
    | 'secondaryMessage'
    | 'onClear'
    | 'autoFocus'
    | 'icon'
  > {
  value: MonthPickerValue;
  onChange: ChangeHandler;
  onBlur?: FocusHandler;
  onFocus?: FocusHandler;
  minYear?: number;
  maxYear?: number;
  ascendingYears?: boolean;
}

const months = [
  { value: '1', label: 'Jan' },
  { value: '2', label: 'Feb' },
  { value: '3', label: 'Mar' },
  { value: '4', label: 'Apr' },
  { value: '5', label: 'May' },
  { value: '6', label: 'Jun' },
  { value: '7', label: 'Jul' },
  { value: '8', label: 'Aug' },
  { value: '9', label: 'Sep' },
  { value: '10', label: 'Oct' },
  { value: '11', label: 'Nov' },
  { value: '12', label: 'Dec' },
];
const getMonths = () =>
  months.map(month => (
    <option value={month.value} key={month.value}>
      {month.label}
    </option>
  ));

const getYears = (min: number, max: number, ascending: boolean) => {
  const start = ascending ? min : max;
  const end = ascending ? max + 1 : min - 1;

  return range(start, end).map(year => {
    const yearStr = String(year);

    return (
      <option value={yearStr} key={yearStr}>
        {yearStr}
      </option>
    );
  });
};

const currYear = new Date().getFullYear();
const renderNativeInput = isMobile({ tablet: true });

const customValueToString = ({ month, year }: MonthPickerValue) =>
  month && year ? `${year}-${month < 10 ? '0' : ''}${month}` : undefined;

const stringToCustomValue = (value: string) => {
  const [year, month] = value.split('-');

  return {
    month: parseInt(month, 10),
    year: parseInt(year, 10),
  };
};

const makeChangeHandler = <
  Element extends HTMLSelectElement | HTMLInputElement
>(
  onChange: ChangeHandler,
  value: MonthPickerValue,
  fieldType: keyof MonthPickerValue | 'native',
) => (event: ChangeEvent<Element>) => {
  if (typeof onChange === 'function') {
    onChange(
      {
        month: {
          year: value && value.year ? value.year : undefined,
          month: parseInt(event.target.value, 10) || undefined,
        },
        year: {
          month: value && value.month ? value.month : undefined,
          year: parseInt(event.target.value, 10) || undefined,
        },
        native: stringToCustomValue(event.target.value),
      }[fieldType],
    );
  }
};

export const MonthPicker = ({
  id,
  value,
  label,
  onChange,
  onBlur,
  onFocus,
  tone,
  disabled,
  minYear = currYear - 100,
  maxYear = currYear,
  ascendingYears = false,
  ...restProps
}: MonthPickerProps) => {
  const styles = useStyles(styleRefs);
  const currentValue = {
    month: value && value.month ? value.month : undefined,
    year: value && value.year ? value.year : undefined,
  };

  const monthRef = createRef<HTMLSelectElement>();
  const yearRef = createRef<HTMLSelectElement>();
  const monthId = `${id}-month`;
  const yearId = `${id}-year`;

  const blurHandler = onBlur
    ? (event: FocusEvent<HTMLSelectElement>) => {
        const fireIfExternal = (element: any) => {
          if (element !== monthRef.current && element !== yearRef.current) {
            onBlur();
          }
        };

        if (event.relatedTarget !== null) {
          fireIfExternal(event.relatedTarget);
        } else {
          // IE 9 - 11 Hack -- relatedTarget is null in blur event
          setTimeout(() => {
            fireIfExternal(document.activeElement);
          });
        }
      }
    : undefined;

  const focusHandler = onFocus
    ? (event: FocusEvent<HTMLSelectElement>) => {
        if (
          event.relatedTarget !== monthRef.current &&
          event.relatedTarget !== yearRef.current
        ) {
          onFocus();
        }
      }
    : undefined;

  const nativeField = (
    <Field
      id={id}
      tone={tone}
      disabled={disabled}
      label={label}
      {...restProps}
      labelId={undefined}
      data={undefined}
      name={undefined}
      autoComplete={undefined}
      secondaryMessage={null}
    >
      {(overlays, { className, ...fieldProps }, fieldRef) => (
        <Fragment>
          <Box
            component="input"
            type="month"
            value={customValueToString(currentValue)}
            onChange={onChange && makeChangeHandler(onChange, value, 'native')}
            onBlur={onBlur}
            onFocus={onFocus}
            {...fieldProps}
            className={classnames(className, styles.nativeInput)}
            ref={fieldRef}
          />
          {overlays}
        </Fragment>
      )}
    </Field>
  );

  const customFieldGroup = (
    <FieldGroup
      id={id}
      label={label}
      tone={tone}
      disabled={disabled}
      {...restProps}
    >
      {fieldGroupProps => (
        <Columns space="medium">
          <Column>
            <Hidden screen={true} print={true}>
              <label htmlFor={monthId}>{`${label} month`}</label>
            </Hidden>
            <Dropdown
              id={monthId}
              value={currentValue.month || ''}
              onChange={makeChangeHandler(onChange, value, 'month')}
              onBlur={blurHandler}
              onFocus={focusHandler}
              reserveMessageSpace={false}
              tone={tone}
              placeholder="Month"
              {...fieldGroupProps}
              ref={monthRef}
            >
              {getMonths()}
            </Dropdown>
          </Column>
          <Column>
            <Hidden screen={true} print={true}>
              <label htmlFor={yearId}>{`${label} year`}</label>
            </Hidden>
            <Dropdown
              id={yearId}
              value={currentValue.year || ''}
              onChange={makeChangeHandler(onChange, value, 'year')}
              onBlur={blurHandler}
              onFocus={focusHandler}
              reserveMessageSpace={false}
              tone={tone}
              placeholder="Year"
              {...fieldGroupProps}
              ref={yearRef}
            >
              {getYears(minYear, maxYear, ascendingYears)}
            </Dropdown>
          </Column>
        </Columns>
      )}
    </FieldGroup>
  );

  return renderNativeInput ? nativeField : customFieldGroup;
};
