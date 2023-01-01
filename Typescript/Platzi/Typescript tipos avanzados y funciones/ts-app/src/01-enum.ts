export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTUMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'Jose david',
  role: ROLES.ADMIN,
};
