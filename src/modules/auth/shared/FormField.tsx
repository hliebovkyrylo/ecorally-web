import* as React from 'react';
import { Input } from '@/components/ui/input';

interface FormFieldProps {
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
}) => (
  <div>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 border border-gray-500 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);