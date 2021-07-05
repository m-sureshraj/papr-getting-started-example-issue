import { types, schema } from 'papr';

import papr from './papr';

const userSchema = schema({
  age: types.number(),
  firstName: types.string({ required: true }),
  lastName: types.string({ required: true }),
});

const User = papr.model('user', userSchema);

export default User;