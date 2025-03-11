import { Button, Select } from 'antd';
import { useTheme } from '../context/theme/Theme.context';
import { useAlert } from '../hooks/useAlert';
const Option = Select.Option;
type Props = {};

export default function Test({}: Props) {
  const te = useTheme();
  console.log(te);
  const { showSuccess, showError } = useAlert();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    console.log('blur');
  }

  function handleFocus() {
    console.log('focus');
  }

  return (
    <div>
      Test For the Theme
      <Button type="primary">Primary Button</Button>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
      <button onClick={() => showSuccess('Operation completed successfully!')}>Show Success</button>
      <button onClick={() => showError('Operation ERROR')}>Show ERROR</button>
    </div>
  );
}
