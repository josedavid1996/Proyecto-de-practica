(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  //Literal types

  type Sizes = 'M' | 'L' | 'XL' | 'S';

  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function greeting(userId: UserID, size: Sizes): void {
    if (typeof userId === 'string') {
      console.log(userId.toLocaleUpperCase());
    }
  }

  greeting(1223, 'L');
})();
