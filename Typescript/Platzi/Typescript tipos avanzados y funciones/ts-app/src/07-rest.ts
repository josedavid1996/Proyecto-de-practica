import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'Jose',
  role: ROLES.CUSTUMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};
export const checkRoleV2 = (role: string[]) => {
  if (role.includes(currentUser.role)) {
    return true;
  }

  return false;
};
export const checkRoleV3 = (...role: string[]) => {
  if (role.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta = checkAdminRole();
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTUMER);
console.log('checkAdminRole', rta);
console.log('checkRole', rta2);
console.log('checkRoleV2', rta3);
console.log('checkRoleV3', rta4);
