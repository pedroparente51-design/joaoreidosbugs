
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.0
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.0",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  createdAt: 'createdAt',
  status: 'status'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  instagram: 'instagram',
  color: 'color',
  ownerId: 'ownerId',
  createdAt: 'createdAt'
};

exports.Prisma.TeamMemberScalarFieldEnum = {
  id: 'id',
  teamId: 'teamId',
  userId: 'userId',
  role: 'role'
};

exports.Prisma.TeamOperationScalarFieldEnum = {
  id: 'id',
  teamId: 'teamId',
  platform: 'platform',
  network: 'network',
  title: 'title',
  depositors: 'depositors',
  createdAt: 'createdAt'
};

exports.Prisma.TeamGoalScalarFieldEnum = {
  id: 'id',
  teamId: 'teamId',
  platform: 'platform',
  target: 'target',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.TeamRemittanceScalarFieldEnum = {
  id: 'id',
  teamId: 'teamId',
  operatorId: 'operatorId',
  platform: 'platform',
  value: 'value',
  observation: 'observation',
  date: 'date',
  createdAt: 'createdAt'
};

exports.Prisma.DailySheetScalarFieldEnum = {
  id: 'id',
  name: 'name',
  proxyCost: 'proxyCost',
  smsCost: 'smsCost',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DailyRecordScalarFieldEnum = {
  id: 'id',
  date: 'date',
  platform: 'platform',
  investment: 'investment',
  withdraw: 'withdraw',
  cycles: 'cycles',
  sheetId: 'sheetId',
  createdAt: 'createdAt',
  profit: 'profit',
  status: 'status',
  teamId: 'teamId'
};

exports.Prisma.StatisticScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  clicks: 'clicks',
  revenue: 'revenue',
  leads: 'leads',
  date: 'date'
};

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  actionType: 'actionType',
  description: 'description',
  createdAt: 'createdAt'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  level: 'level',
  message: 'message',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.GoalScalarFieldEnum = {
  id: 'id',
  title: 'title',
  target: 'target',
  current: 'current',
  deadline: 'deadline',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.ExpenseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  amount: 'amount',
  category: 'category',
  date: 'date',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  ACTIVE: 'ACTIVE',
  BANNED: 'BANNED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Team: 'Team',
  TeamMember: 'TeamMember',
  TeamOperation: 'TeamOperation',
  TeamGoal: 'TeamGoal',
  TeamRemittance: 'TeamRemittance',
  DailySheet: 'DailySheet',
  DailyRecord: 'DailyRecord',
  Statistic: 'Statistic',
  Activity: 'Activity',
  Log: 'Log',
  Goal: 'Goal',
  Expense: 'Expense'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
