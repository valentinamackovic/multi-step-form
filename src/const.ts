export enum PlanEnum {
  arcade = 'arcade',
  advanced = 'advanced',
  pro = 'pro',
}
export enum PlanTypeEnum {
  monthly = 'monthly',
  yearly = 'yearly',
}

export const plans = {
  yearly: {
    pro: { price: 15 },
    advanced: { price: 12 },
    arcade: { price: 9 },
  },
  monthly: {
    pro: { price: 17 },
    advanced: { price: 14 },
    arcade: { price: 11 },
  },
};

export const addOns = [
  {
    name: 'Online service',
    code: 'onlineService',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    name: 'Larger storage',
    code: 'largerStorage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    name: 'Customizable profile',
    code: 'customizableProfile',
    description: 'Custom theme on your profile',
    price: 2,
  },
];
