// console.log('hello');

// import { User } from './User';
// import { Company } from './Company';

// import color from './User';

// console.log(color);

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
