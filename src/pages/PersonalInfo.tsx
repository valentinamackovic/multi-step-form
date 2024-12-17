import { useCallback, useMemo } from 'react';
import Button from '../components/Button';
import { Container, Content, Header } from '../components/Layout';
import { useFormContext } from '../context/FormContext';
import { useNavigationContext } from '../context/NavigationContext';
import React from 'react';

interface FormFieldProp {
  name: string;
  label?: string;
}

const FormField = React.memo(({ name, label }: FormFieldProp) => {
  const { changeValue, getField, onBlur } = useFormContext();
  const { value, error } = useMemo(() => getField(name), [getField, name]);

  return (
    <>
      {label && <label className="text-xs mb-2">{label}</label>}
      <input
        value={value as string}
        onChange={(e) => {
          changeValue({ name: e.target.name, value: e.target.value });
        }}
        onBlur={onBlur}
        name={name}
        className="border-solid border rounded py-1 px-2 text-sm"
        type="text"
      />
      <p className="text-[10px] text-red-600 mb-4">
        {/* make this element take up height even if it's empty */}
        {error != undefined && error} &nbsp;
      </p>
    </>
  );
});

const PersonalInfo = () => {
  const { validate } = useFormContext();
  const { setStep } = useNavigationContext();

  return (
    <Container>
      <Header
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <Content>
        <form className="flex flex-col mt-2">
          <FormField name="name" label="Name" />
          <FormField name="email" label="Email Address" />
          <FormField name="phoneNumber" label="Phone Number" />
        </form>
      </Content>
      <Button
        onClick={() => {
          validate() && setStep(2);
        }}
      >
        Next Step
      </Button>
    </Container>
  );
};

export default PersonalInfo;
