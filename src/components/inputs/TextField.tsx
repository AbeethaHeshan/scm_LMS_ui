import { Input } from 'antd';
import { Controller, Control, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';

interface TextFieldProps {
  label: string;
  name: string;
  control: Control<any>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const TextField: React.FC<TextFieldProps> = ({ label, name, control, error }) => {
  const errorMessage = error?.message || undefined;

  return (
    <FieldWrapper label={label} error={errorMessage}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input {...field} className="custom-input" placeholder="Enter text" />
        )}
      />
    </FieldWrapper>
  );
};

export default TextField;
