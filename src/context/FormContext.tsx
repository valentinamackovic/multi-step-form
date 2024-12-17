import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import { PlanEnum, PlanTypeEnum } from '../const';

interface FormField {
  name: string;
  error: string | undefined;
  touched: boolean;
  value: string | any[] | undefined;
  required: boolean;
}

interface Form {
  [key: string | PlanEnum | PlanTypeEnum]: FormField;
}

type FormContextType = {
  fields: Form;
  getField: (name: string) => FormField;
  changeValue: Dispatch<SetStateAction<any>>;
  onBlur: Dispatch<SetStateAction<any>>;
  validate: () => boolean;
};

const initialValues: Form = {
  name: {
    name: 'name',
    error: '',
    touched: false,
    value: '',
    required: true,
  },
  email: {
    name: 'email',
    error: '',
    touched: false,
    value: '',
    required: true,
  },
  phoneNumber: {
    name: 'phoneNumber',
    error: '',
    touched: false,
    value: '',
    required: true,
  },
  plan: {
    name: 'plan',
    error: '',
    touched: true,
    value: PlanEnum.advanced,
    required: true,
  },
  planType: {
    name: 'planType',
    error: '',
    touched: true,
    value: PlanTypeEnum.monthly,
    required: true,
  },
  addOns: {
    name: 'addOns',
    error: '',
    touched: true,
    value: [],
    required: true,
  },
};

const FormContext = createContext<FormContextType>({
  fields: initialValues,
  getField: (name: string) => {
    return initialValues[0];
  },
  changeValue: () => {},
  onBlur: () => {},
  validate: () => {
    return false;
  },
});

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }: { children: ReactNode }) {
  const [fields, setFields] = useState<Form>(initialValues);

  const updateValue = (e: { name: string; value: string | any[] }) => {
    setFields({ ...fields, [e.name]: { ...fields[e.name], value: e.value } });
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const fieldError =
      value == '' && fields[name].required
        ? 'This field is required.'
        : undefined;
    const newValues: Form = {
      ...fields,
      [name]: { ...fields[name], touched: true, error: fieldError },
    };
    setFields(newValues);
  };

  const getField = (name: string) => {
    return fields[name];
  };

  const validate = () => {
    const touchAllFields = { ...fields };
    for (const [key, value] of Object.entries(fields)) {
      const fieldError =
        value.value === '' && value.required
          ? 'This field is required.'
          : undefined;
      touchAllFields[key] = { ...value, touched: true, error: fieldError };
    }
    setFields(touchAllFields);
    return Object.entries(touchAllFields).every(
      (field) => field[1].error === undefined || field[1]?.error === ''
    );
  };

  return (
    <FormContext.Provider
      value={{
        fields,
        changeValue: updateValue,
        getField,
        onBlur: handleOnBlur,
        validate,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
