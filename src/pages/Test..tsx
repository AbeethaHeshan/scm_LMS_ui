import { Button, Select } from 'antd';
import { useTheme } from '../context/theme/Theme.context';
import { useAlert } from '../hooks/useAlert';
import TextField from '../components/inputs/TextField';
import { RegisterOptions, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
const Option = Select.Option;
type Props = {};
import { useForm } from 'react-hook-form'
import Validation from '../utils/Validations';


export default function Test({ }: Props) {
  const te = useTheme();

  const { register, handleSubmit, formState: { errors }, control } = useForm({})
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

  const onSubmit = (data: any) => {
    console.log('Form data:', data)
  }

  return (
    <div>
      <div>
        <h2>Form Validation Example</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            control={control}
            label="Phone Number"
            {...Validation.for(register, "phone", {
              required: true,
              phone: true,
            })}
            error={errors.phone}
          />

          <TextField
            control={control}
            label="Email"
            {...Validation.for(register, "email", {
              required: true,
              email: true,
            })}
            error={errors.email}
          />

          <TextField
            control={control}
            label="Age"
            {...Validation.for(register, "age", {
              required: true,
              onlyNumbers: true,
              range: { min: 18, max: 100 }
            })}
            error={errors.age}
          />

          <Button type="primary" htmlType="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
