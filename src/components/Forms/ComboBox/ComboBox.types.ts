import { ComboBoxProps as NativeComboBoxProps } from '@react-types/combobox'

interface ComboBoxProps<T extends object> extends NativeComboBoxProps<T> {}

type ComboBox = JSX.Element

export { ComboBox, ComboBoxProps }
