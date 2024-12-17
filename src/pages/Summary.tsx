import Button from '../components/Button';
import { Container, Content, Footer, Header } from '../components/Layout';
import Link from '../components/Link';
import { addOns, PlanEnum, plans, PlanTypeEnum } from '../const';
import { useFormContext } from '../context/FormContext';
import { useNavigationContext } from '../context/NavigationContext';

function Summary() {
  const { setStep } = useNavigationContext();
  const { fields } = useFormContext();

  const basePrice =
    fields.planType.value !== undefined &&
    fields.plan.value !== undefined &&
    plans[fields.planType.value as PlanTypeEnum]?.[
      fields.plan.value as PlanEnum
    ]?.price;

  let totalPrice = Number(basePrice);

  const addOnsSection =
    fields.addOns.value &&
    Array.isArray(fields.addOns.value) &&
    fields.addOns.value.map((addOn: number) => {
      totalPrice += addOns[addOn].price;
      return (
        <div
          key={addOn}
          className="flex items-center justify-between space-y-2 text-slate-400"
        >
          <p>{addOns[addOn].name}</p>
          <p className="text-black">+${addOns[addOn].price}/mo</p>
        </div>
      );
    });

  return (
    <Container>
      <Header
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <Content>
        <div className="bg-slate-50 px-4 py-3 text-sm rounded rounded-md">
          <section className="flex justify-between items-center border-b border-solid pb-3">
            <div>
              <p className="font-semibold capitalize">
                {fields.plan.value?.toString()} (
                {fields.planType.value?.toString()})
              </p>
              <Link
                onClick={() => {
                  setStep(2);
                }}
              >
                Change
              </Link>
              {/* <p className="text-xs text-indigo-800 cursor-pointer">Change</p> */}
            </div>
            <p className="font-semibold">
              ${basePrice}
              /mo
            </p>
          </section>
          <section className="pt-3 text-xs">{addOnsSection}</section>
        </div>
        <section className="text-sm px-4 py-3 flex justify-between items-center">
          <p className="text-slate-400 text-xs">Total (per month)</p>
          <p className="text-indigo-700 font-semibold">${totalPrice}/mo</p>
        </section>
      </Content>
      <Footer>
        <Link
          onClick={() => {
            setStep(3);
          }}
        >
          Go Back
        </Link>
        <Button
          onClick={() => {
            setStep(5);
          }}
        >
          Confirm
        </Button>
      </Footer>
    </Container>
  );
}

export default Summary;
