
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model TeamOperation
 * 
 */
export type TeamOperation = $Result.DefaultSelection<Prisma.$TeamOperationPayload>
/**
 * Model TeamGoal
 * 
 */
export type TeamGoal = $Result.DefaultSelection<Prisma.$TeamGoalPayload>
/**
 * Model TeamRemittance
 * 
 */
export type TeamRemittance = $Result.DefaultSelection<Prisma.$TeamRemittancePayload>
/**
 * Model DailySheet
 * 
 */
export type DailySheet = $Result.DefaultSelection<Prisma.$DailySheetPayload>
/**
 * Model DailyRecord
 * 
 */
export type DailyRecord = $Result.DefaultSelection<Prisma.$DailyRecordPayload>
/**
 * Model Statistic
 * 
 */
export type Statistic = $Result.DefaultSelection<Prisma.$StatisticPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BANNED: 'BANNED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs>;

  /**
   * `prisma.teamOperation`: Exposes CRUD operations for the **TeamOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamOperations
    * const teamOperations = await prisma.teamOperation.findMany()
    * ```
    */
  get teamOperation(): Prisma.TeamOperationDelegate<ExtArgs>;

  /**
   * `prisma.teamGoal`: Exposes CRUD operations for the **TeamGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamGoals
    * const teamGoals = await prisma.teamGoal.findMany()
    * ```
    */
  get teamGoal(): Prisma.TeamGoalDelegate<ExtArgs>;

  /**
   * `prisma.teamRemittance`: Exposes CRUD operations for the **TeamRemittance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamRemittances
    * const teamRemittances = await prisma.teamRemittance.findMany()
    * ```
    */
  get teamRemittance(): Prisma.TeamRemittanceDelegate<ExtArgs>;

  /**
   * `prisma.dailySheet`: Exposes CRUD operations for the **DailySheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailySheets
    * const dailySheets = await prisma.dailySheet.findMany()
    * ```
    */
  get dailySheet(): Prisma.DailySheetDelegate<ExtArgs>;

  /**
   * `prisma.dailyRecord`: Exposes CRUD operations for the **DailyRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyRecords
    * const dailyRecords = await prisma.dailyRecord.findMany()
    * ```
    */
  get dailyRecord(): Prisma.DailyRecordDelegate<ExtArgs>;

  /**
   * `prisma.statistic`: Exposes CRUD operations for the **Statistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics
    * const statistics = await prisma.statistic.findMany()
    * ```
    */
  get statistic(): Prisma.StatisticDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'team' | 'teamMember' | 'teamOperation' | 'teamGoal' | 'teamRemittance' | 'dailySheet' | 'dailyRecord' | 'statistic' | 'activity' | 'log' | 'goal' | 'expense'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      TeamOperation: {
        payload: Prisma.$TeamOperationPayload<ExtArgs>
        fields: Prisma.TeamOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamOperationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamOperationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload>
          }
          findFirst: {
            args: Prisma.TeamOperationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamOperationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload>
          }
          findMany: {
            args: Prisma.TeamOperationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload>[]
          }
          create: {
            args: Prisma.TeamOperationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload>
          }
          createMany: {
            args: Prisma.TeamOperationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamOperationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload>
          }
          update: {
            args: Prisma.TeamOperationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload>
          }
          deleteMany: {
            args: Prisma.TeamOperationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamOperationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamOperationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamOperationPayload>
          }
          aggregate: {
            args: Prisma.TeamOperationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamOperation>
          }
          groupBy: {
            args: Prisma.TeamOperationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamOperationCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamOperationCountAggregateOutputType> | number
          }
        }
      }
      TeamGoal: {
        payload: Prisma.$TeamGoalPayload<ExtArgs>
        fields: Prisma.TeamGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamGoalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamGoalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload>
          }
          findFirst: {
            args: Prisma.TeamGoalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamGoalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload>
          }
          findMany: {
            args: Prisma.TeamGoalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload>[]
          }
          create: {
            args: Prisma.TeamGoalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload>
          }
          createMany: {
            args: Prisma.TeamGoalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamGoalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload>
          }
          update: {
            args: Prisma.TeamGoalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload>
          }
          deleteMany: {
            args: Prisma.TeamGoalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamGoalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamGoalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamGoalPayload>
          }
          aggregate: {
            args: Prisma.TeamGoalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamGoal>
          }
          groupBy: {
            args: Prisma.TeamGoalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamGoalCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamGoalCountAggregateOutputType> | number
          }
        }
      }
      TeamRemittance: {
        payload: Prisma.$TeamRemittancePayload<ExtArgs>
        fields: Prisma.TeamRemittanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamRemittanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamRemittanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload>
          }
          findFirst: {
            args: Prisma.TeamRemittanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamRemittanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload>
          }
          findMany: {
            args: Prisma.TeamRemittanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload>[]
          }
          create: {
            args: Prisma.TeamRemittanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload>
          }
          createMany: {
            args: Prisma.TeamRemittanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamRemittanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload>
          }
          update: {
            args: Prisma.TeamRemittanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload>
          }
          deleteMany: {
            args: Prisma.TeamRemittanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamRemittanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamRemittanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamRemittancePayload>
          }
          aggregate: {
            args: Prisma.TeamRemittanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamRemittance>
          }
          groupBy: {
            args: Prisma.TeamRemittanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamRemittanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamRemittanceCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamRemittanceCountAggregateOutputType> | number
          }
        }
      }
      DailySheet: {
        payload: Prisma.$DailySheetPayload<ExtArgs>
        fields: Prisma.DailySheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailySheetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailySheetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload>
          }
          findFirst: {
            args: Prisma.DailySheetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailySheetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload>
          }
          findMany: {
            args: Prisma.DailySheetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload>[]
          }
          create: {
            args: Prisma.DailySheetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload>
          }
          createMany: {
            args: Prisma.DailySheetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DailySheetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload>
          }
          update: {
            args: Prisma.DailySheetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload>
          }
          deleteMany: {
            args: Prisma.DailySheetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DailySheetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DailySheetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySheetPayload>
          }
          aggregate: {
            args: Prisma.DailySheetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDailySheet>
          }
          groupBy: {
            args: Prisma.DailySheetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DailySheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailySheetCountArgs<ExtArgs>,
            result: $Utils.Optional<DailySheetCountAggregateOutputType> | number
          }
        }
      }
      DailyRecord: {
        payload: Prisma.$DailyRecordPayload<ExtArgs>
        fields: Prisma.DailyRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          findFirst: {
            args: Prisma.DailyRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          findMany: {
            args: Prisma.DailyRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>[]
          }
          create: {
            args: Prisma.DailyRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          createMany: {
            args: Prisma.DailyRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DailyRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          update: {
            args: Prisma.DailyRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          deleteMany: {
            args: Prisma.DailyRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DailyRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DailyRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          aggregate: {
            args: Prisma.DailyRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDailyRecord>
          }
          groupBy: {
            args: Prisma.DailyRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DailyRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<DailyRecordCountAggregateOutputType> | number
          }
        }
      }
      Statistic: {
        payload: Prisma.$StatisticPayload<ExtArgs>
        fields: Prisma.StatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findFirst: {
            args: Prisma.StatisticFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findMany: {
            args: Prisma.StatisticFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          create: {
            args: Prisma.StatisticCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          createMany: {
            args: Prisma.StatisticCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StatisticDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          update: {
            args: Prisma.StatisticUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          deleteMany: {
            args: Prisma.StatisticDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StatisticUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          aggregate: {
            args: Prisma.StatisticAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStatistic>
          }
          groupBy: {
            args: Prisma.StatisticGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticCountArgs<ExtArgs>,
            result: $Utils.Optional<StatisticCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>,
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>,
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>,
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activities: number
    sheets: number
    expenses: number
    goals: number
    statistics: number
    ownedTeams: number
    teamMemberships: number
    remittances: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    sheets?: boolean | UserCountOutputTypeCountSheetsArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    statistics?: boolean | UserCountOutputTypeCountStatisticsArgs
    ownedTeams?: boolean | UserCountOutputTypeCountOwnedTeamsArgs
    teamMemberships?: boolean | UserCountOutputTypeCountTeamMembershipsArgs
    remittances?: boolean | UserCountOutputTypeCountRemittancesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySheetWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRemittancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRemittanceWhereInput
  }



  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    goals: number
    members: number
    operations: number
    remittances: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | TeamCountOutputTypeCountGoalsArgs
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    operations?: boolean | TeamCountOutputTypeCountOperationsArgs
    remittances?: boolean | TeamCountOutputTypeCountRemittancesArgs
  }

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamGoalWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamOperationWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountRemittancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRemittanceWhereInput
  }



  /**
   * Count Type DailySheetCountOutputType
   */

  export type DailySheetCountOutputType = {
    records: number
  }

  export type DailySheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | DailySheetCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes

  /**
   * DailySheetCountOutputType without action
   */
  export type DailySheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheetCountOutputType
     */
    select?: DailySheetCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DailySheetCountOutputType without action
   */
  export type DailySheetCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRecordWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    status: $Enums.UserStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    status: $Enums.UserStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    status: $Enums.UserStatus
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    status?: boolean
    activities?: boolean | User$activitiesArgs<ExtArgs>
    sheets?: boolean | User$sheetsArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    statistics?: boolean | User$statisticsArgs<ExtArgs>
    ownedTeams?: boolean | User$ownedTeamsArgs<ExtArgs>
    teamMemberships?: boolean | User$teamMembershipsArgs<ExtArgs>
    remittances?: boolean | User$remittancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | User$activitiesArgs<ExtArgs>
    sheets?: boolean | User$sheetsArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    statistics?: boolean | User$statisticsArgs<ExtArgs>
    ownedTeams?: boolean | User$ownedTeamsArgs<ExtArgs>
    teamMemberships?: boolean | User$teamMembershipsArgs<ExtArgs>
    remittances?: boolean | User$remittancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      sheets: Prisma.$DailySheetPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      statistics: Prisma.$StatisticPayload<ExtArgs>[]
      ownedTeams: Prisma.$TeamPayload<ExtArgs>[]
      teamMemberships: Prisma.$TeamMemberPayload<ExtArgs>[]
      remittances: Prisma.$TeamRemittancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
      status: $Enums.UserStatus
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findMany'> | Null>;

    sheets<T extends User$sheetsArgs<ExtArgs> = {}>(args?: Subset<T, User$sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'findMany'> | Null>;

    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'findMany'> | Null>;

    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findMany'> | Null>;

    statistics<T extends User$statisticsArgs<ExtArgs> = {}>(args?: Subset<T, User$statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'findMany'> | Null>;

    ownedTeams<T extends User$ownedTeamsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedTeamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    teamMemberships<T extends User$teamMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    remittances<T extends User$remittancesArgs<ExtArgs> = {}>(args?: Subset<T, User$remittancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'UserStatus'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * User.sheets
   */
  export type User$sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    where?: DailySheetWhereInput
    orderBy?: DailySheetOrderByWithRelationInput | DailySheetOrderByWithRelationInput[]
    cursor?: DailySheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailySheetScalarFieldEnum | DailySheetScalarFieldEnum[]
  }


  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }


  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * User.statistics
   */
  export type User$statisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    cursor?: StatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * User.ownedTeams
   */
  export type User$ownedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * User.teamMemberships
   */
  export type User$teamMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }


  /**
   * User.remittances
   */
  export type User$remittancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    where?: TeamRemittanceWhereInput
    orderBy?: TeamRemittanceOrderByWithRelationInput | TeamRemittanceOrderByWithRelationInput[]
    cursor?: TeamRemittanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRemittanceScalarFieldEnum | TeamRemittanceScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    instagram: string | null
    color: string | null
    ownerId: number | null
    createdAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    instagram: string | null
    color: string | null
    ownerId: number | null
    createdAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    code: number
    instagram: number
    color: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    instagram?: true
    color?: true
    ownerId?: true
    createdAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    instagram?: true
    color?: true
    ownerId?: true
    createdAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    instagram?: true
    color?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    code: string
    instagram: string | null
    color: string | null
    ownerId: number
    createdAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    instagram?: boolean
    color?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    goals?: boolean | Team$goalsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    operations?: boolean | Team$operationsArgs<ExtArgs>
    remittances?: boolean | Team$remittancesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    instagram?: boolean
    color?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    goals?: boolean | Team$goalsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    operations?: boolean | Team$operationsArgs<ExtArgs>
    remittances?: boolean | Team$remittancesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      goals: Prisma.$TeamGoalPayload<ExtArgs>[]
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      operations: Prisma.$TeamOperationPayload<ExtArgs>[]
      remittances: Prisma.$TeamRemittancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      instagram: string | null
      color: string | null
      ownerId: number
      createdAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }


  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    goals<T extends Team$goalsArgs<ExtArgs> = {}>(args?: Subset<T, Team$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'findMany'> | Null>;

    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    operations<T extends Team$operationsArgs<ExtArgs> = {}>(args?: Subset<T, Team$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'findMany'> | Null>;

    remittances<T extends Team$remittancesArgs<ExtArgs> = {}>(args?: Subset<T, Team$remittancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly code: FieldRef<"Team", 'String'>
    readonly instagram: FieldRef<"Team", 'String'>
    readonly color: FieldRef<"Team", 'String'>
    readonly ownerId: FieldRef<"Team", 'Int'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }


  /**
   * Team.goals
   */
  export type Team$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    where?: TeamGoalWhereInput
    orderBy?: TeamGoalOrderByWithRelationInput | TeamGoalOrderByWithRelationInput[]
    cursor?: TeamGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamGoalScalarFieldEnum | TeamGoalScalarFieldEnum[]
  }


  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }


  /**
   * Team.operations
   */
  export type Team$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    where?: TeamOperationWhereInput
    orderBy?: TeamOperationOrderByWithRelationInput | TeamOperationOrderByWithRelationInput[]
    cursor?: TeamOperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamOperationScalarFieldEnum | TeamOperationScalarFieldEnum[]
  }


  /**
   * Team.remittances
   */
  export type Team$remittancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    where?: TeamRemittanceWhereInput
    orderBy?: TeamRemittanceOrderByWithRelationInput | TeamRemittanceOrderByWithRelationInput[]
    cursor?: TeamRemittanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRemittanceScalarFieldEnum | TeamRemittanceScalarFieldEnum[]
  }


  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
  }



  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    userId: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    userId: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    userId: number | null
    role: string | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    userId: number | null
    role: string | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    teamId: number
    userId: number
    role: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
  }

  export type TeamMemberSumAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
  }

  export type TeamMemberMinAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
    role?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
    role?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
    role?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: number
    teamId: number
    userId: number
    role: string
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    userId?: boolean
    role?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    teamId?: boolean
    userId?: boolean
    role?: boolean
  }

  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      userId: number
      role: string
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }


  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
    **/
    create<T extends TeamMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamMembers.
     *     @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     *     @example
     *     // Create many TeamMembers
     *     const teamMember = await prisma.teamMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
    **/
    delete<T extends TeamMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
    **/
    upsert<T extends TeamMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TeamMember model
   */ 
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'Int'>
    readonly teamId: FieldRef<"TeamMember", 'Int'>
    readonly userId: FieldRef<"TeamMember", 'Int'>
    readonly role: FieldRef<"TeamMember", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }


  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }


  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }


  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }


  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }


  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }


  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }


  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
  }


  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }


  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }


  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
  }


  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }



  /**
   * Model TeamOperation
   */

  export type AggregateTeamOperation = {
    _count: TeamOperationCountAggregateOutputType | null
    _avg: TeamOperationAvgAggregateOutputType | null
    _sum: TeamOperationSumAggregateOutputType | null
    _min: TeamOperationMinAggregateOutputType | null
    _max: TeamOperationMaxAggregateOutputType | null
  }

  export type TeamOperationAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    depositors: number | null
  }

  export type TeamOperationSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    depositors: number | null
  }

  export type TeamOperationMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    platform: string | null
    network: string | null
    title: string | null
    depositors: number | null
    createdAt: Date | null
  }

  export type TeamOperationMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    platform: string | null
    network: string | null
    title: string | null
    depositors: number | null
    createdAt: Date | null
  }

  export type TeamOperationCountAggregateOutputType = {
    id: number
    teamId: number
    platform: number
    network: number
    title: number
    depositors: number
    createdAt: number
    _all: number
  }


  export type TeamOperationAvgAggregateInputType = {
    id?: true
    teamId?: true
    depositors?: true
  }

  export type TeamOperationSumAggregateInputType = {
    id?: true
    teamId?: true
    depositors?: true
  }

  export type TeamOperationMinAggregateInputType = {
    id?: true
    teamId?: true
    platform?: true
    network?: true
    title?: true
    depositors?: true
    createdAt?: true
  }

  export type TeamOperationMaxAggregateInputType = {
    id?: true
    teamId?: true
    platform?: true
    network?: true
    title?: true
    depositors?: true
    createdAt?: true
  }

  export type TeamOperationCountAggregateInputType = {
    id?: true
    teamId?: true
    platform?: true
    network?: true
    title?: true
    depositors?: true
    createdAt?: true
    _all?: true
  }

  export type TeamOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamOperation to aggregate.
     */
    where?: TeamOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOperations to fetch.
     */
    orderBy?: TeamOperationOrderByWithRelationInput | TeamOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamOperations
    **/
    _count?: true | TeamOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamOperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamOperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamOperationMaxAggregateInputType
  }

  export type GetTeamOperationAggregateType<T extends TeamOperationAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamOperation[P]>
      : GetScalarType<T[P], AggregateTeamOperation[P]>
  }




  export type TeamOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamOperationWhereInput
    orderBy?: TeamOperationOrderByWithAggregationInput | TeamOperationOrderByWithAggregationInput[]
    by: TeamOperationScalarFieldEnum[] | TeamOperationScalarFieldEnum
    having?: TeamOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamOperationCountAggregateInputType | true
    _avg?: TeamOperationAvgAggregateInputType
    _sum?: TeamOperationSumAggregateInputType
    _min?: TeamOperationMinAggregateInputType
    _max?: TeamOperationMaxAggregateInputType
  }

  export type TeamOperationGroupByOutputType = {
    id: number
    teamId: number
    platform: string
    network: string
    title: string
    depositors: number
    createdAt: Date
    _count: TeamOperationCountAggregateOutputType | null
    _avg: TeamOperationAvgAggregateOutputType | null
    _sum: TeamOperationSumAggregateOutputType | null
    _min: TeamOperationMinAggregateOutputType | null
    _max: TeamOperationMaxAggregateOutputType | null
  }

  type GetTeamOperationGroupByPayload<T extends TeamOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamOperationGroupByOutputType[P]>
            : GetScalarType<T[P], TeamOperationGroupByOutputType[P]>
        }
      >
    >


  export type TeamOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    platform?: boolean
    network?: boolean
    title?: boolean
    depositors?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamOperation"]>

  export type TeamOperationSelectScalar = {
    id?: boolean
    teamId?: boolean
    platform?: boolean
    network?: boolean
    title?: boolean
    depositors?: boolean
    createdAt?: boolean
  }

  export type TeamOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }


  export type $TeamOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamOperation"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      platform: string
      network: string
      title: string
      depositors: number
      createdAt: Date
    }, ExtArgs["result"]["teamOperation"]>
    composites: {}
  }


  type TeamOperationGetPayload<S extends boolean | null | undefined | TeamOperationDefaultArgs> = $Result.GetResult<Prisma.$TeamOperationPayload, S>

  type TeamOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamOperationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamOperationCountAggregateInputType | true
    }

  export interface TeamOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamOperation'], meta: { name: 'TeamOperation' } }
    /**
     * Find zero or one TeamOperation that matches the filter.
     * @param {TeamOperationFindUniqueArgs} args - Arguments to find a TeamOperation
     * @example
     * // Get one TeamOperation
     * const teamOperation = await prisma.teamOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamOperationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamOperationFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamOperation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamOperationFindUniqueOrThrowArgs} args - Arguments to find a TeamOperation
     * @example
     * // Get one TeamOperation
     * const teamOperation = await prisma.teamOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamOperationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamOperationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOperationFindFirstArgs} args - Arguments to find a TeamOperation
     * @example
     * // Get one TeamOperation
     * const teamOperation = await prisma.teamOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamOperationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamOperationFindFirstArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOperationFindFirstOrThrowArgs} args - Arguments to find a TeamOperation
     * @example
     * // Get one TeamOperation
     * const teamOperation = await prisma.teamOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamOperationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamOperationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOperationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamOperations
     * const teamOperations = await prisma.teamOperation.findMany()
     * 
     * // Get first 10 TeamOperations
     * const teamOperations = await prisma.teamOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamOperationWithIdOnly = await prisma.teamOperation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamOperationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamOperationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamOperation.
     * @param {TeamOperationCreateArgs} args - Arguments to create a TeamOperation.
     * @example
     * // Create one TeamOperation
     * const TeamOperation = await prisma.teamOperation.create({
     *   data: {
     *     // ... data to create a TeamOperation
     *   }
     * })
     * 
    **/
    create<T extends TeamOperationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamOperationCreateArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamOperations.
     *     @param {TeamOperationCreateManyArgs} args - Arguments to create many TeamOperations.
     *     @example
     *     // Create many TeamOperations
     *     const teamOperation = await prisma.teamOperation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamOperationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamOperationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamOperation.
     * @param {TeamOperationDeleteArgs} args - Arguments to delete one TeamOperation.
     * @example
     * // Delete one TeamOperation
     * const TeamOperation = await prisma.teamOperation.delete({
     *   where: {
     *     // ... filter to delete one TeamOperation
     *   }
     * })
     * 
    **/
    delete<T extends TeamOperationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamOperationDeleteArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamOperation.
     * @param {TeamOperationUpdateArgs} args - Arguments to update one TeamOperation.
     * @example
     * // Update one TeamOperation
     * const teamOperation = await prisma.teamOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamOperationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamOperationUpdateArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamOperations.
     * @param {TeamOperationDeleteManyArgs} args - Arguments to filter TeamOperations to delete.
     * @example
     * // Delete a few TeamOperations
     * const { count } = await prisma.teamOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamOperationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamOperationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamOperations
     * const teamOperation = await prisma.teamOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamOperationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamOperationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamOperation.
     * @param {TeamOperationUpsertArgs} args - Arguments to update or create a TeamOperation.
     * @example
     * // Update or create a TeamOperation
     * const teamOperation = await prisma.teamOperation.upsert({
     *   create: {
     *     // ... data to create a TeamOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamOperation we want to update
     *   }
     * })
    **/
    upsert<T extends TeamOperationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamOperationUpsertArgs<ExtArgs>>
    ): Prisma__TeamOperationClient<$Result.GetResult<Prisma.$TeamOperationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOperationCountArgs} args - Arguments to filter TeamOperations to count.
     * @example
     * // Count the number of TeamOperations
     * const count = await prisma.teamOperation.count({
     *   where: {
     *     // ... the filter for the TeamOperations we want to count
     *   }
     * })
    **/
    count<T extends TeamOperationCountArgs>(
      args?: Subset<T, TeamOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamOperationAggregateArgs>(args: Subset<T, TeamOperationAggregateArgs>): Prisma.PrismaPromise<GetTeamOperationAggregateType<T>>

    /**
     * Group by TeamOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOperationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamOperationGroupByArgs['orderBy'] }
        : { orderBy?: TeamOperationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamOperation model
   */
  readonly fields: TeamOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TeamOperation model
   */ 
  interface TeamOperationFieldRefs {
    readonly id: FieldRef<"TeamOperation", 'Int'>
    readonly teamId: FieldRef<"TeamOperation", 'Int'>
    readonly platform: FieldRef<"TeamOperation", 'String'>
    readonly network: FieldRef<"TeamOperation", 'String'>
    readonly title: FieldRef<"TeamOperation", 'String'>
    readonly depositors: FieldRef<"TeamOperation", 'Int'>
    readonly createdAt: FieldRef<"TeamOperation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TeamOperation findUnique
   */
  export type TeamOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * Filter, which TeamOperation to fetch.
     */
    where: TeamOperationWhereUniqueInput
  }


  /**
   * TeamOperation findUniqueOrThrow
   */
  export type TeamOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * Filter, which TeamOperation to fetch.
     */
    where: TeamOperationWhereUniqueInput
  }


  /**
   * TeamOperation findFirst
   */
  export type TeamOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * Filter, which TeamOperation to fetch.
     */
    where?: TeamOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOperations to fetch.
     */
    orderBy?: TeamOperationOrderByWithRelationInput | TeamOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamOperations.
     */
    cursor?: TeamOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamOperations.
     */
    distinct?: TeamOperationScalarFieldEnum | TeamOperationScalarFieldEnum[]
  }


  /**
   * TeamOperation findFirstOrThrow
   */
  export type TeamOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * Filter, which TeamOperation to fetch.
     */
    where?: TeamOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOperations to fetch.
     */
    orderBy?: TeamOperationOrderByWithRelationInput | TeamOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamOperations.
     */
    cursor?: TeamOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamOperations.
     */
    distinct?: TeamOperationScalarFieldEnum | TeamOperationScalarFieldEnum[]
  }


  /**
   * TeamOperation findMany
   */
  export type TeamOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * Filter, which TeamOperations to fetch.
     */
    where?: TeamOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOperations to fetch.
     */
    orderBy?: TeamOperationOrderByWithRelationInput | TeamOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamOperations.
     */
    cursor?: TeamOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOperations.
     */
    skip?: number
    distinct?: TeamOperationScalarFieldEnum | TeamOperationScalarFieldEnum[]
  }


  /**
   * TeamOperation create
   */
  export type TeamOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamOperation.
     */
    data: XOR<TeamOperationCreateInput, TeamOperationUncheckedCreateInput>
  }


  /**
   * TeamOperation createMany
   */
  export type TeamOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamOperations.
     */
    data: TeamOperationCreateManyInput | TeamOperationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TeamOperation update
   */
  export type TeamOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamOperation.
     */
    data: XOR<TeamOperationUpdateInput, TeamOperationUncheckedUpdateInput>
    /**
     * Choose, which TeamOperation to update.
     */
    where: TeamOperationWhereUniqueInput
  }


  /**
   * TeamOperation updateMany
   */
  export type TeamOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamOperations.
     */
    data: XOR<TeamOperationUpdateManyMutationInput, TeamOperationUncheckedUpdateManyInput>
    /**
     * Filter which TeamOperations to update
     */
    where?: TeamOperationWhereInput
  }


  /**
   * TeamOperation upsert
   */
  export type TeamOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamOperation to update in case it exists.
     */
    where: TeamOperationWhereUniqueInput
    /**
     * In case the TeamOperation found by the `where` argument doesn't exist, create a new TeamOperation with this data.
     */
    create: XOR<TeamOperationCreateInput, TeamOperationUncheckedCreateInput>
    /**
     * In case the TeamOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamOperationUpdateInput, TeamOperationUncheckedUpdateInput>
  }


  /**
   * TeamOperation delete
   */
  export type TeamOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
    /**
     * Filter which TeamOperation to delete.
     */
    where: TeamOperationWhereUniqueInput
  }


  /**
   * TeamOperation deleteMany
   */
  export type TeamOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamOperations to delete
     */
    where?: TeamOperationWhereInput
  }


  /**
   * TeamOperation without action
   */
  export type TeamOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOperation
     */
    select?: TeamOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamOperationInclude<ExtArgs> | null
  }



  /**
   * Model TeamGoal
   */

  export type AggregateTeamGoal = {
    _count: TeamGoalCountAggregateOutputType | null
    _avg: TeamGoalAvgAggregateOutputType | null
    _sum: TeamGoalSumAggregateOutputType | null
    _min: TeamGoalMinAggregateOutputType | null
    _max: TeamGoalMaxAggregateOutputType | null
  }

  export type TeamGoalAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    target: number | null
  }

  export type TeamGoalSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    target: number | null
  }

  export type TeamGoalMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    platform: string | null
    target: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TeamGoalMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    platform: string | null
    target: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TeamGoalCountAggregateOutputType = {
    id: number
    teamId: number
    platform: number
    target: number
    status: number
    createdAt: number
    _all: number
  }


  export type TeamGoalAvgAggregateInputType = {
    id?: true
    teamId?: true
    target?: true
  }

  export type TeamGoalSumAggregateInputType = {
    id?: true
    teamId?: true
    target?: true
  }

  export type TeamGoalMinAggregateInputType = {
    id?: true
    teamId?: true
    platform?: true
    target?: true
    status?: true
    createdAt?: true
  }

  export type TeamGoalMaxAggregateInputType = {
    id?: true
    teamId?: true
    platform?: true
    target?: true
    status?: true
    createdAt?: true
  }

  export type TeamGoalCountAggregateInputType = {
    id?: true
    teamId?: true
    platform?: true
    target?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TeamGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamGoal to aggregate.
     */
    where?: TeamGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGoals to fetch.
     */
    orderBy?: TeamGoalOrderByWithRelationInput | TeamGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamGoals
    **/
    _count?: true | TeamGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamGoalMaxAggregateInputType
  }

  export type GetTeamGoalAggregateType<T extends TeamGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamGoal[P]>
      : GetScalarType<T[P], AggregateTeamGoal[P]>
  }




  export type TeamGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamGoalWhereInput
    orderBy?: TeamGoalOrderByWithAggregationInput | TeamGoalOrderByWithAggregationInput[]
    by: TeamGoalScalarFieldEnum[] | TeamGoalScalarFieldEnum
    having?: TeamGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamGoalCountAggregateInputType | true
    _avg?: TeamGoalAvgAggregateInputType
    _sum?: TeamGoalSumAggregateInputType
    _min?: TeamGoalMinAggregateInputType
    _max?: TeamGoalMaxAggregateInputType
  }

  export type TeamGoalGroupByOutputType = {
    id: number
    teamId: number
    platform: string
    target: number
    status: string
    createdAt: Date
    _count: TeamGoalCountAggregateOutputType | null
    _avg: TeamGoalAvgAggregateOutputType | null
    _sum: TeamGoalSumAggregateOutputType | null
    _min: TeamGoalMinAggregateOutputType | null
    _max: TeamGoalMaxAggregateOutputType | null
  }

  type GetTeamGoalGroupByPayload<T extends TeamGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGoalGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGoalGroupByOutputType[P]>
        }
      >
    >


  export type TeamGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    platform?: boolean
    target?: boolean
    status?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamGoal"]>

  export type TeamGoalSelectScalar = {
    id?: boolean
    teamId?: boolean
    platform?: boolean
    target?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TeamGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }


  export type $TeamGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamGoal"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      platform: string
      target: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["teamGoal"]>
    composites: {}
  }


  type TeamGoalGetPayload<S extends boolean | null | undefined | TeamGoalDefaultArgs> = $Result.GetResult<Prisma.$TeamGoalPayload, S>

  type TeamGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamGoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamGoalCountAggregateInputType | true
    }

  export interface TeamGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamGoal'], meta: { name: 'TeamGoal' } }
    /**
     * Find zero or one TeamGoal that matches the filter.
     * @param {TeamGoalFindUniqueArgs} args - Arguments to find a TeamGoal
     * @example
     * // Get one TeamGoal
     * const teamGoal = await prisma.teamGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamGoalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamGoalFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamGoal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamGoalFindUniqueOrThrowArgs} args - Arguments to find a TeamGoal
     * @example
     * // Get one TeamGoal
     * const teamGoal = await prisma.teamGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamGoalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamGoalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGoalFindFirstArgs} args - Arguments to find a TeamGoal
     * @example
     * // Get one TeamGoal
     * const teamGoal = await prisma.teamGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamGoalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamGoalFindFirstArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGoalFindFirstOrThrowArgs} args - Arguments to find a TeamGoal
     * @example
     * // Get one TeamGoal
     * const teamGoal = await prisma.teamGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamGoalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamGoalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGoalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamGoals
     * const teamGoals = await prisma.teamGoal.findMany()
     * 
     * // Get first 10 TeamGoals
     * const teamGoals = await prisma.teamGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamGoalWithIdOnly = await prisma.teamGoal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamGoalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamGoalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamGoal.
     * @param {TeamGoalCreateArgs} args - Arguments to create a TeamGoal.
     * @example
     * // Create one TeamGoal
     * const TeamGoal = await prisma.teamGoal.create({
     *   data: {
     *     // ... data to create a TeamGoal
     *   }
     * })
     * 
    **/
    create<T extends TeamGoalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamGoalCreateArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamGoals.
     *     @param {TeamGoalCreateManyArgs} args - Arguments to create many TeamGoals.
     *     @example
     *     // Create many TeamGoals
     *     const teamGoal = await prisma.teamGoal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamGoalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamGoalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamGoal.
     * @param {TeamGoalDeleteArgs} args - Arguments to delete one TeamGoal.
     * @example
     * // Delete one TeamGoal
     * const TeamGoal = await prisma.teamGoal.delete({
     *   where: {
     *     // ... filter to delete one TeamGoal
     *   }
     * })
     * 
    **/
    delete<T extends TeamGoalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamGoalDeleteArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamGoal.
     * @param {TeamGoalUpdateArgs} args - Arguments to update one TeamGoal.
     * @example
     * // Update one TeamGoal
     * const teamGoal = await prisma.teamGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamGoalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamGoalUpdateArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamGoals.
     * @param {TeamGoalDeleteManyArgs} args - Arguments to filter TeamGoals to delete.
     * @example
     * // Delete a few TeamGoals
     * const { count } = await prisma.teamGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamGoalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamGoalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamGoals
     * const teamGoal = await prisma.teamGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamGoalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamGoalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamGoal.
     * @param {TeamGoalUpsertArgs} args - Arguments to update or create a TeamGoal.
     * @example
     * // Update or create a TeamGoal
     * const teamGoal = await prisma.teamGoal.upsert({
     *   create: {
     *     // ... data to create a TeamGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamGoal we want to update
     *   }
     * })
    **/
    upsert<T extends TeamGoalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamGoalUpsertArgs<ExtArgs>>
    ): Prisma__TeamGoalClient<$Result.GetResult<Prisma.$TeamGoalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGoalCountArgs} args - Arguments to filter TeamGoals to count.
     * @example
     * // Count the number of TeamGoals
     * const count = await prisma.teamGoal.count({
     *   where: {
     *     // ... the filter for the TeamGoals we want to count
     *   }
     * })
    **/
    count<T extends TeamGoalCountArgs>(
      args?: Subset<T, TeamGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamGoalAggregateArgs>(args: Subset<T, TeamGoalAggregateArgs>): Prisma.PrismaPromise<GetTeamGoalAggregateType<T>>

    /**
     * Group by TeamGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGoalGroupByArgs['orderBy'] }
        : { orderBy?: TeamGoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamGoal model
   */
  readonly fields: TeamGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TeamGoal model
   */ 
  interface TeamGoalFieldRefs {
    readonly id: FieldRef<"TeamGoal", 'Int'>
    readonly teamId: FieldRef<"TeamGoal", 'Int'>
    readonly platform: FieldRef<"TeamGoal", 'String'>
    readonly target: FieldRef<"TeamGoal", 'Int'>
    readonly status: FieldRef<"TeamGoal", 'String'>
    readonly createdAt: FieldRef<"TeamGoal", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TeamGoal findUnique
   */
  export type TeamGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * Filter, which TeamGoal to fetch.
     */
    where: TeamGoalWhereUniqueInput
  }


  /**
   * TeamGoal findUniqueOrThrow
   */
  export type TeamGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * Filter, which TeamGoal to fetch.
     */
    where: TeamGoalWhereUniqueInput
  }


  /**
   * TeamGoal findFirst
   */
  export type TeamGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * Filter, which TeamGoal to fetch.
     */
    where?: TeamGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGoals to fetch.
     */
    orderBy?: TeamGoalOrderByWithRelationInput | TeamGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamGoals.
     */
    cursor?: TeamGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamGoals.
     */
    distinct?: TeamGoalScalarFieldEnum | TeamGoalScalarFieldEnum[]
  }


  /**
   * TeamGoal findFirstOrThrow
   */
  export type TeamGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * Filter, which TeamGoal to fetch.
     */
    where?: TeamGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGoals to fetch.
     */
    orderBy?: TeamGoalOrderByWithRelationInput | TeamGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamGoals.
     */
    cursor?: TeamGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamGoals.
     */
    distinct?: TeamGoalScalarFieldEnum | TeamGoalScalarFieldEnum[]
  }


  /**
   * TeamGoal findMany
   */
  export type TeamGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * Filter, which TeamGoals to fetch.
     */
    where?: TeamGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGoals to fetch.
     */
    orderBy?: TeamGoalOrderByWithRelationInput | TeamGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamGoals.
     */
    cursor?: TeamGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGoals.
     */
    skip?: number
    distinct?: TeamGoalScalarFieldEnum | TeamGoalScalarFieldEnum[]
  }


  /**
   * TeamGoal create
   */
  export type TeamGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamGoal.
     */
    data: XOR<TeamGoalCreateInput, TeamGoalUncheckedCreateInput>
  }


  /**
   * TeamGoal createMany
   */
  export type TeamGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamGoals.
     */
    data: TeamGoalCreateManyInput | TeamGoalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TeamGoal update
   */
  export type TeamGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamGoal.
     */
    data: XOR<TeamGoalUpdateInput, TeamGoalUncheckedUpdateInput>
    /**
     * Choose, which TeamGoal to update.
     */
    where: TeamGoalWhereUniqueInput
  }


  /**
   * TeamGoal updateMany
   */
  export type TeamGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamGoals.
     */
    data: XOR<TeamGoalUpdateManyMutationInput, TeamGoalUncheckedUpdateManyInput>
    /**
     * Filter which TeamGoals to update
     */
    where?: TeamGoalWhereInput
  }


  /**
   * TeamGoal upsert
   */
  export type TeamGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamGoal to update in case it exists.
     */
    where: TeamGoalWhereUniqueInput
    /**
     * In case the TeamGoal found by the `where` argument doesn't exist, create a new TeamGoal with this data.
     */
    create: XOR<TeamGoalCreateInput, TeamGoalUncheckedCreateInput>
    /**
     * In case the TeamGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamGoalUpdateInput, TeamGoalUncheckedUpdateInput>
  }


  /**
   * TeamGoal delete
   */
  export type TeamGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
    /**
     * Filter which TeamGoal to delete.
     */
    where: TeamGoalWhereUniqueInput
  }


  /**
   * TeamGoal deleteMany
   */
  export type TeamGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamGoals to delete
     */
    where?: TeamGoalWhereInput
  }


  /**
   * TeamGoal without action
   */
  export type TeamGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGoal
     */
    select?: TeamGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamGoalInclude<ExtArgs> | null
  }



  /**
   * Model TeamRemittance
   */

  export type AggregateTeamRemittance = {
    _count: TeamRemittanceCountAggregateOutputType | null
    _avg: TeamRemittanceAvgAggregateOutputType | null
    _sum: TeamRemittanceSumAggregateOutputType | null
    _min: TeamRemittanceMinAggregateOutputType | null
    _max: TeamRemittanceMaxAggregateOutputType | null
  }

  export type TeamRemittanceAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    operatorId: number | null
    value: number | null
  }

  export type TeamRemittanceSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    operatorId: number | null
    value: number | null
  }

  export type TeamRemittanceMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    operatorId: number | null
    platform: string | null
    value: number | null
    observation: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type TeamRemittanceMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    operatorId: number | null
    platform: string | null
    value: number | null
    observation: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type TeamRemittanceCountAggregateOutputType = {
    id: number
    teamId: number
    operatorId: number
    platform: number
    value: number
    observation: number
    date: number
    createdAt: number
    _all: number
  }


  export type TeamRemittanceAvgAggregateInputType = {
    id?: true
    teamId?: true
    operatorId?: true
    value?: true
  }

  export type TeamRemittanceSumAggregateInputType = {
    id?: true
    teamId?: true
    operatorId?: true
    value?: true
  }

  export type TeamRemittanceMinAggregateInputType = {
    id?: true
    teamId?: true
    operatorId?: true
    platform?: true
    value?: true
    observation?: true
    date?: true
    createdAt?: true
  }

  export type TeamRemittanceMaxAggregateInputType = {
    id?: true
    teamId?: true
    operatorId?: true
    platform?: true
    value?: true
    observation?: true
    date?: true
    createdAt?: true
  }

  export type TeamRemittanceCountAggregateInputType = {
    id?: true
    teamId?: true
    operatorId?: true
    platform?: true
    value?: true
    observation?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type TeamRemittanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamRemittance to aggregate.
     */
    where?: TeamRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRemittances to fetch.
     */
    orderBy?: TeamRemittanceOrderByWithRelationInput | TeamRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRemittances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamRemittances
    **/
    _count?: true | TeamRemittanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamRemittanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamRemittanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamRemittanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamRemittanceMaxAggregateInputType
  }

  export type GetTeamRemittanceAggregateType<T extends TeamRemittanceAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamRemittance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamRemittance[P]>
      : GetScalarType<T[P], AggregateTeamRemittance[P]>
  }




  export type TeamRemittanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRemittanceWhereInput
    orderBy?: TeamRemittanceOrderByWithAggregationInput | TeamRemittanceOrderByWithAggregationInput[]
    by: TeamRemittanceScalarFieldEnum[] | TeamRemittanceScalarFieldEnum
    having?: TeamRemittanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamRemittanceCountAggregateInputType | true
    _avg?: TeamRemittanceAvgAggregateInputType
    _sum?: TeamRemittanceSumAggregateInputType
    _min?: TeamRemittanceMinAggregateInputType
    _max?: TeamRemittanceMaxAggregateInputType
  }

  export type TeamRemittanceGroupByOutputType = {
    id: number
    teamId: number
    operatorId: number
    platform: string
    value: number
    observation: string | null
    date: Date
    createdAt: Date
    _count: TeamRemittanceCountAggregateOutputType | null
    _avg: TeamRemittanceAvgAggregateOutputType | null
    _sum: TeamRemittanceSumAggregateOutputType | null
    _min: TeamRemittanceMinAggregateOutputType | null
    _max: TeamRemittanceMaxAggregateOutputType | null
  }

  type GetTeamRemittanceGroupByPayload<T extends TeamRemittanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamRemittanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamRemittanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamRemittanceGroupByOutputType[P]>
            : GetScalarType<T[P], TeamRemittanceGroupByOutputType[P]>
        }
      >
    >


  export type TeamRemittanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    operatorId?: boolean
    platform?: boolean
    value?: boolean
    observation?: boolean
    date?: boolean
    createdAt?: boolean
    operator?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamRemittance"]>

  export type TeamRemittanceSelectScalar = {
    id?: boolean
    teamId?: boolean
    operatorId?: boolean
    platform?: boolean
    value?: boolean
    observation?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type TeamRemittanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }


  export type $TeamRemittancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamRemittance"
    objects: {
      operator: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      operatorId: number
      platform: string
      value: number
      observation: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["teamRemittance"]>
    composites: {}
  }


  type TeamRemittanceGetPayload<S extends boolean | null | undefined | TeamRemittanceDefaultArgs> = $Result.GetResult<Prisma.$TeamRemittancePayload, S>

  type TeamRemittanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamRemittanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamRemittanceCountAggregateInputType | true
    }

  export interface TeamRemittanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamRemittance'], meta: { name: 'TeamRemittance' } }
    /**
     * Find zero or one TeamRemittance that matches the filter.
     * @param {TeamRemittanceFindUniqueArgs} args - Arguments to find a TeamRemittance
     * @example
     * // Get one TeamRemittance
     * const teamRemittance = await prisma.teamRemittance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamRemittanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamRemittanceFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamRemittance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamRemittanceFindUniqueOrThrowArgs} args - Arguments to find a TeamRemittance
     * @example
     * // Get one TeamRemittance
     * const teamRemittance = await prisma.teamRemittance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamRemittanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamRemittanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamRemittance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRemittanceFindFirstArgs} args - Arguments to find a TeamRemittance
     * @example
     * // Get one TeamRemittance
     * const teamRemittance = await prisma.teamRemittance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamRemittanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamRemittanceFindFirstArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamRemittance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRemittanceFindFirstOrThrowArgs} args - Arguments to find a TeamRemittance
     * @example
     * // Get one TeamRemittance
     * const teamRemittance = await prisma.teamRemittance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamRemittanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamRemittanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamRemittances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRemittanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamRemittances
     * const teamRemittances = await prisma.teamRemittance.findMany()
     * 
     * // Get first 10 TeamRemittances
     * const teamRemittances = await prisma.teamRemittance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamRemittanceWithIdOnly = await prisma.teamRemittance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamRemittanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamRemittanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamRemittance.
     * @param {TeamRemittanceCreateArgs} args - Arguments to create a TeamRemittance.
     * @example
     * // Create one TeamRemittance
     * const TeamRemittance = await prisma.teamRemittance.create({
     *   data: {
     *     // ... data to create a TeamRemittance
     *   }
     * })
     * 
    **/
    create<T extends TeamRemittanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamRemittanceCreateArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamRemittances.
     *     @param {TeamRemittanceCreateManyArgs} args - Arguments to create many TeamRemittances.
     *     @example
     *     // Create many TeamRemittances
     *     const teamRemittance = await prisma.teamRemittance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamRemittanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamRemittanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamRemittance.
     * @param {TeamRemittanceDeleteArgs} args - Arguments to delete one TeamRemittance.
     * @example
     * // Delete one TeamRemittance
     * const TeamRemittance = await prisma.teamRemittance.delete({
     *   where: {
     *     // ... filter to delete one TeamRemittance
     *   }
     * })
     * 
    **/
    delete<T extends TeamRemittanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamRemittanceDeleteArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamRemittance.
     * @param {TeamRemittanceUpdateArgs} args - Arguments to update one TeamRemittance.
     * @example
     * // Update one TeamRemittance
     * const teamRemittance = await prisma.teamRemittance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamRemittanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamRemittanceUpdateArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamRemittances.
     * @param {TeamRemittanceDeleteManyArgs} args - Arguments to filter TeamRemittances to delete.
     * @example
     * // Delete a few TeamRemittances
     * const { count } = await prisma.teamRemittance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamRemittanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamRemittanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamRemittances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRemittanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamRemittances
     * const teamRemittance = await prisma.teamRemittance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamRemittanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamRemittanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamRemittance.
     * @param {TeamRemittanceUpsertArgs} args - Arguments to update or create a TeamRemittance.
     * @example
     * // Update or create a TeamRemittance
     * const teamRemittance = await prisma.teamRemittance.upsert({
     *   create: {
     *     // ... data to create a TeamRemittance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamRemittance we want to update
     *   }
     * })
    **/
    upsert<T extends TeamRemittanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamRemittanceUpsertArgs<ExtArgs>>
    ): Prisma__TeamRemittanceClient<$Result.GetResult<Prisma.$TeamRemittancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamRemittances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRemittanceCountArgs} args - Arguments to filter TeamRemittances to count.
     * @example
     * // Count the number of TeamRemittances
     * const count = await prisma.teamRemittance.count({
     *   where: {
     *     // ... the filter for the TeamRemittances we want to count
     *   }
     * })
    **/
    count<T extends TeamRemittanceCountArgs>(
      args?: Subset<T, TeamRemittanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamRemittanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamRemittance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRemittanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamRemittanceAggregateArgs>(args: Subset<T, TeamRemittanceAggregateArgs>): Prisma.PrismaPromise<GetTeamRemittanceAggregateType<T>>

    /**
     * Group by TeamRemittance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRemittanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamRemittanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamRemittanceGroupByArgs['orderBy'] }
        : { orderBy?: TeamRemittanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamRemittanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamRemittanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamRemittance model
   */
  readonly fields: TeamRemittanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamRemittance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamRemittanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    operator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TeamRemittance model
   */ 
  interface TeamRemittanceFieldRefs {
    readonly id: FieldRef<"TeamRemittance", 'Int'>
    readonly teamId: FieldRef<"TeamRemittance", 'Int'>
    readonly operatorId: FieldRef<"TeamRemittance", 'Int'>
    readonly platform: FieldRef<"TeamRemittance", 'String'>
    readonly value: FieldRef<"TeamRemittance", 'Float'>
    readonly observation: FieldRef<"TeamRemittance", 'String'>
    readonly date: FieldRef<"TeamRemittance", 'DateTime'>
    readonly createdAt: FieldRef<"TeamRemittance", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TeamRemittance findUnique
   */
  export type TeamRemittanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which TeamRemittance to fetch.
     */
    where: TeamRemittanceWhereUniqueInput
  }


  /**
   * TeamRemittance findUniqueOrThrow
   */
  export type TeamRemittanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which TeamRemittance to fetch.
     */
    where: TeamRemittanceWhereUniqueInput
  }


  /**
   * TeamRemittance findFirst
   */
  export type TeamRemittanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which TeamRemittance to fetch.
     */
    where?: TeamRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRemittances to fetch.
     */
    orderBy?: TeamRemittanceOrderByWithRelationInput | TeamRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamRemittances.
     */
    cursor?: TeamRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRemittances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamRemittances.
     */
    distinct?: TeamRemittanceScalarFieldEnum | TeamRemittanceScalarFieldEnum[]
  }


  /**
   * TeamRemittance findFirstOrThrow
   */
  export type TeamRemittanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which TeamRemittance to fetch.
     */
    where?: TeamRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRemittances to fetch.
     */
    orderBy?: TeamRemittanceOrderByWithRelationInput | TeamRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamRemittances.
     */
    cursor?: TeamRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRemittances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamRemittances.
     */
    distinct?: TeamRemittanceScalarFieldEnum | TeamRemittanceScalarFieldEnum[]
  }


  /**
   * TeamRemittance findMany
   */
  export type TeamRemittanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which TeamRemittances to fetch.
     */
    where?: TeamRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRemittances to fetch.
     */
    orderBy?: TeamRemittanceOrderByWithRelationInput | TeamRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamRemittances.
     */
    cursor?: TeamRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRemittances.
     */
    skip?: number
    distinct?: TeamRemittanceScalarFieldEnum | TeamRemittanceScalarFieldEnum[]
  }


  /**
   * TeamRemittance create
   */
  export type TeamRemittanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamRemittance.
     */
    data: XOR<TeamRemittanceCreateInput, TeamRemittanceUncheckedCreateInput>
  }


  /**
   * TeamRemittance createMany
   */
  export type TeamRemittanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamRemittances.
     */
    data: TeamRemittanceCreateManyInput | TeamRemittanceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TeamRemittance update
   */
  export type TeamRemittanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamRemittance.
     */
    data: XOR<TeamRemittanceUpdateInput, TeamRemittanceUncheckedUpdateInput>
    /**
     * Choose, which TeamRemittance to update.
     */
    where: TeamRemittanceWhereUniqueInput
  }


  /**
   * TeamRemittance updateMany
   */
  export type TeamRemittanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamRemittances.
     */
    data: XOR<TeamRemittanceUpdateManyMutationInput, TeamRemittanceUncheckedUpdateManyInput>
    /**
     * Filter which TeamRemittances to update
     */
    where?: TeamRemittanceWhereInput
  }


  /**
   * TeamRemittance upsert
   */
  export type TeamRemittanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamRemittance to update in case it exists.
     */
    where: TeamRemittanceWhereUniqueInput
    /**
     * In case the TeamRemittance found by the `where` argument doesn't exist, create a new TeamRemittance with this data.
     */
    create: XOR<TeamRemittanceCreateInput, TeamRemittanceUncheckedCreateInput>
    /**
     * In case the TeamRemittance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamRemittanceUpdateInput, TeamRemittanceUncheckedUpdateInput>
  }


  /**
   * TeamRemittance delete
   */
  export type TeamRemittanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
    /**
     * Filter which TeamRemittance to delete.
     */
    where: TeamRemittanceWhereUniqueInput
  }


  /**
   * TeamRemittance deleteMany
   */
  export type TeamRemittanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamRemittances to delete
     */
    where?: TeamRemittanceWhereInput
  }


  /**
   * TeamRemittance without action
   */
  export type TeamRemittanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRemittance
     */
    select?: TeamRemittanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamRemittanceInclude<ExtArgs> | null
  }



  /**
   * Model DailySheet
   */

  export type AggregateDailySheet = {
    _count: DailySheetCountAggregateOutputType | null
    _avg: DailySheetAvgAggregateOutputType | null
    _sum: DailySheetSumAggregateOutputType | null
    _min: DailySheetMinAggregateOutputType | null
    _max: DailySheetMaxAggregateOutputType | null
  }

  export type DailySheetAvgAggregateOutputType = {
    id: number | null
    proxyCost: number | null
    smsCost: number | null
    userId: number | null
  }

  export type DailySheetSumAggregateOutputType = {
    id: number | null
    proxyCost: number | null
    smsCost: number | null
    userId: number | null
  }

  export type DailySheetMinAggregateOutputType = {
    id: number | null
    name: string | null
    proxyCost: number | null
    smsCost: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailySheetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    proxyCost: number | null
    smsCost: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailySheetCountAggregateOutputType = {
    id: number
    name: number
    proxyCost: number
    smsCost: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailySheetAvgAggregateInputType = {
    id?: true
    proxyCost?: true
    smsCost?: true
    userId?: true
  }

  export type DailySheetSumAggregateInputType = {
    id?: true
    proxyCost?: true
    smsCost?: true
    userId?: true
  }

  export type DailySheetMinAggregateInputType = {
    id?: true
    name?: true
    proxyCost?: true
    smsCost?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailySheetMaxAggregateInputType = {
    id?: true
    name?: true
    proxyCost?: true
    smsCost?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailySheetCountAggregateInputType = {
    id?: true
    name?: true
    proxyCost?: true
    smsCost?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailySheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySheet to aggregate.
     */
    where?: DailySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySheets to fetch.
     */
    orderBy?: DailySheetOrderByWithRelationInput | DailySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailySheets
    **/
    _count?: true | DailySheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailySheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailySheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailySheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailySheetMaxAggregateInputType
  }

  export type GetDailySheetAggregateType<T extends DailySheetAggregateArgs> = {
        [P in keyof T & keyof AggregateDailySheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailySheet[P]>
      : GetScalarType<T[P], AggregateDailySheet[P]>
  }




  export type DailySheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySheetWhereInput
    orderBy?: DailySheetOrderByWithAggregationInput | DailySheetOrderByWithAggregationInput[]
    by: DailySheetScalarFieldEnum[] | DailySheetScalarFieldEnum
    having?: DailySheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailySheetCountAggregateInputType | true
    _avg?: DailySheetAvgAggregateInputType
    _sum?: DailySheetSumAggregateInputType
    _min?: DailySheetMinAggregateInputType
    _max?: DailySheetMaxAggregateInputType
  }

  export type DailySheetGroupByOutputType = {
    id: number
    name: string
    proxyCost: number
    smsCost: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: DailySheetCountAggregateOutputType | null
    _avg: DailySheetAvgAggregateOutputType | null
    _sum: DailySheetSumAggregateOutputType | null
    _min: DailySheetMinAggregateOutputType | null
    _max: DailySheetMaxAggregateOutputType | null
  }

  type GetDailySheetGroupByPayload<T extends DailySheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailySheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailySheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailySheetGroupByOutputType[P]>
            : GetScalarType<T[P], DailySheetGroupByOutputType[P]>
        }
      >
    >


  export type DailySheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    proxyCost?: boolean
    smsCost?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    records?: boolean | DailySheet$recordsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DailySheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySheet"]>

  export type DailySheetSelectScalar = {
    id?: boolean
    name?: boolean
    proxyCost?: boolean
    smsCost?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailySheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | DailySheet$recordsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DailySheetCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DailySheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailySheet"
    objects: {
      records: Prisma.$DailyRecordPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      proxyCost: number
      smsCost: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailySheet"]>
    composites: {}
  }


  type DailySheetGetPayload<S extends boolean | null | undefined | DailySheetDefaultArgs> = $Result.GetResult<Prisma.$DailySheetPayload, S>

  type DailySheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailySheetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailySheetCountAggregateInputType | true
    }

  export interface DailySheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailySheet'], meta: { name: 'DailySheet' } }
    /**
     * Find zero or one DailySheet that matches the filter.
     * @param {DailySheetFindUniqueArgs} args - Arguments to find a DailySheet
     * @example
     * // Get one DailySheet
     * const dailySheet = await prisma.dailySheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DailySheetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DailySheetFindUniqueArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DailySheet that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DailySheetFindUniqueOrThrowArgs} args - Arguments to find a DailySheet
     * @example
     * // Get one DailySheet
     * const dailySheet = await prisma.dailySheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DailySheetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailySheetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DailySheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySheetFindFirstArgs} args - Arguments to find a DailySheet
     * @example
     * // Get one DailySheet
     * const dailySheet = await prisma.dailySheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DailySheetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DailySheetFindFirstArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DailySheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySheetFindFirstOrThrowArgs} args - Arguments to find a DailySheet
     * @example
     * // Get one DailySheet
     * const dailySheet = await prisma.dailySheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DailySheetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailySheetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DailySheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySheetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailySheets
     * const dailySheets = await prisma.dailySheet.findMany()
     * 
     * // Get first 10 DailySheets
     * const dailySheets = await prisma.dailySheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailySheetWithIdOnly = await prisma.dailySheet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DailySheetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailySheetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DailySheet.
     * @param {DailySheetCreateArgs} args - Arguments to create a DailySheet.
     * @example
     * // Create one DailySheet
     * const DailySheet = await prisma.dailySheet.create({
     *   data: {
     *     // ... data to create a DailySheet
     *   }
     * })
     * 
    **/
    create<T extends DailySheetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DailySheetCreateArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DailySheets.
     *     @param {DailySheetCreateManyArgs} args - Arguments to create many DailySheets.
     *     @example
     *     // Create many DailySheets
     *     const dailySheet = await prisma.dailySheet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DailySheetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailySheetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailySheet.
     * @param {DailySheetDeleteArgs} args - Arguments to delete one DailySheet.
     * @example
     * // Delete one DailySheet
     * const DailySheet = await prisma.dailySheet.delete({
     *   where: {
     *     // ... filter to delete one DailySheet
     *   }
     * })
     * 
    **/
    delete<T extends DailySheetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DailySheetDeleteArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DailySheet.
     * @param {DailySheetUpdateArgs} args - Arguments to update one DailySheet.
     * @example
     * // Update one DailySheet
     * const dailySheet = await prisma.dailySheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DailySheetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DailySheetUpdateArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DailySheets.
     * @param {DailySheetDeleteManyArgs} args - Arguments to filter DailySheets to delete.
     * @example
     * // Delete a few DailySheets
     * const { count } = await prisma.dailySheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DailySheetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailySheetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailySheets
     * const dailySheet = await prisma.dailySheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DailySheetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DailySheetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailySheet.
     * @param {DailySheetUpsertArgs} args - Arguments to update or create a DailySheet.
     * @example
     * // Update or create a DailySheet
     * const dailySheet = await prisma.dailySheet.upsert({
     *   create: {
     *     // ... data to create a DailySheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailySheet we want to update
     *   }
     * })
    **/
    upsert<T extends DailySheetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DailySheetUpsertArgs<ExtArgs>>
    ): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DailySheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySheetCountArgs} args - Arguments to filter DailySheets to count.
     * @example
     * // Count the number of DailySheets
     * const count = await prisma.dailySheet.count({
     *   where: {
     *     // ... the filter for the DailySheets we want to count
     *   }
     * })
    **/
    count<T extends DailySheetCountArgs>(
      args?: Subset<T, DailySheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailySheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailySheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailySheetAggregateArgs>(args: Subset<T, DailySheetAggregateArgs>): Prisma.PrismaPromise<GetDailySheetAggregateType<T>>

    /**
     * Group by DailySheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailySheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailySheetGroupByArgs['orderBy'] }
        : { orderBy?: DailySheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailySheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailySheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailySheet model
   */
  readonly fields: DailySheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailySheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailySheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    records<T extends DailySheet$recordsArgs<ExtArgs> = {}>(args?: Subset<T, DailySheet$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DailySheet model
   */ 
  interface DailySheetFieldRefs {
    readonly id: FieldRef<"DailySheet", 'Int'>
    readonly name: FieldRef<"DailySheet", 'String'>
    readonly proxyCost: FieldRef<"DailySheet", 'Float'>
    readonly smsCost: FieldRef<"DailySheet", 'Float'>
    readonly userId: FieldRef<"DailySheet", 'Int'>
    readonly createdAt: FieldRef<"DailySheet", 'DateTime'>
    readonly updatedAt: FieldRef<"DailySheet", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DailySheet findUnique
   */
  export type DailySheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * Filter, which DailySheet to fetch.
     */
    where: DailySheetWhereUniqueInput
  }


  /**
   * DailySheet findUniqueOrThrow
   */
  export type DailySheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * Filter, which DailySheet to fetch.
     */
    where: DailySheetWhereUniqueInput
  }


  /**
   * DailySheet findFirst
   */
  export type DailySheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * Filter, which DailySheet to fetch.
     */
    where?: DailySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySheets to fetch.
     */
    orderBy?: DailySheetOrderByWithRelationInput | DailySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySheets.
     */
    cursor?: DailySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySheets.
     */
    distinct?: DailySheetScalarFieldEnum | DailySheetScalarFieldEnum[]
  }


  /**
   * DailySheet findFirstOrThrow
   */
  export type DailySheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * Filter, which DailySheet to fetch.
     */
    where?: DailySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySheets to fetch.
     */
    orderBy?: DailySheetOrderByWithRelationInput | DailySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySheets.
     */
    cursor?: DailySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySheets.
     */
    distinct?: DailySheetScalarFieldEnum | DailySheetScalarFieldEnum[]
  }


  /**
   * DailySheet findMany
   */
  export type DailySheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * Filter, which DailySheets to fetch.
     */
    where?: DailySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySheets to fetch.
     */
    orderBy?: DailySheetOrderByWithRelationInput | DailySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailySheets.
     */
    cursor?: DailySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySheets.
     */
    skip?: number
    distinct?: DailySheetScalarFieldEnum | DailySheetScalarFieldEnum[]
  }


  /**
   * DailySheet create
   */
  export type DailySheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * The data needed to create a DailySheet.
     */
    data: XOR<DailySheetCreateInput, DailySheetUncheckedCreateInput>
  }


  /**
   * DailySheet createMany
   */
  export type DailySheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailySheets.
     */
    data: DailySheetCreateManyInput | DailySheetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DailySheet update
   */
  export type DailySheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * The data needed to update a DailySheet.
     */
    data: XOR<DailySheetUpdateInput, DailySheetUncheckedUpdateInput>
    /**
     * Choose, which DailySheet to update.
     */
    where: DailySheetWhereUniqueInput
  }


  /**
   * DailySheet updateMany
   */
  export type DailySheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailySheets.
     */
    data: XOR<DailySheetUpdateManyMutationInput, DailySheetUncheckedUpdateManyInput>
    /**
     * Filter which DailySheets to update
     */
    where?: DailySheetWhereInput
  }


  /**
   * DailySheet upsert
   */
  export type DailySheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * The filter to search for the DailySheet to update in case it exists.
     */
    where: DailySheetWhereUniqueInput
    /**
     * In case the DailySheet found by the `where` argument doesn't exist, create a new DailySheet with this data.
     */
    create: XOR<DailySheetCreateInput, DailySheetUncheckedCreateInput>
    /**
     * In case the DailySheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailySheetUpdateInput, DailySheetUncheckedUpdateInput>
  }


  /**
   * DailySheet delete
   */
  export type DailySheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
    /**
     * Filter which DailySheet to delete.
     */
    where: DailySheetWhereUniqueInput
  }


  /**
   * DailySheet deleteMany
   */
  export type DailySheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySheets to delete
     */
    where?: DailySheetWhereInput
  }


  /**
   * DailySheet.records
   */
  export type DailySheet$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    where?: DailyRecordWhereInput
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    cursor?: DailyRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }


  /**
   * DailySheet without action
   */
  export type DailySheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySheet
     */
    select?: DailySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailySheetInclude<ExtArgs> | null
  }



  /**
   * Model DailyRecord
   */

  export type AggregateDailyRecord = {
    _count: DailyRecordCountAggregateOutputType | null
    _avg: DailyRecordAvgAggregateOutputType | null
    _sum: DailyRecordSumAggregateOutputType | null
    _min: DailyRecordMinAggregateOutputType | null
    _max: DailyRecordMaxAggregateOutputType | null
  }

  export type DailyRecordAvgAggregateOutputType = {
    id: number | null
    investment: number | null
    withdraw: number | null
    sheetId: number | null
    profit: number | null
    teamId: number | null
  }

  export type DailyRecordSumAggregateOutputType = {
    id: number | null
    investment: number | null
    withdraw: number | null
    sheetId: number | null
    profit: number | null
    teamId: number | null
  }

  export type DailyRecordMinAggregateOutputType = {
    id: number | null
    date: Date | null
    platform: string | null
    investment: number | null
    withdraw: number | null
    cycles: string | null
    sheetId: number | null
    createdAt: Date | null
    profit: number | null
    status: string | null
    teamId: number | null
  }

  export type DailyRecordMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    platform: string | null
    investment: number | null
    withdraw: number | null
    cycles: string | null
    sheetId: number | null
    createdAt: Date | null
    profit: number | null
    status: string | null
    teamId: number | null
  }

  export type DailyRecordCountAggregateOutputType = {
    id: number
    date: number
    platform: number
    investment: number
    withdraw: number
    cycles: number
    sheetId: number
    createdAt: number
    profit: number
    status: number
    teamId: number
    _all: number
  }


  export type DailyRecordAvgAggregateInputType = {
    id?: true
    investment?: true
    withdraw?: true
    sheetId?: true
    profit?: true
    teamId?: true
  }

  export type DailyRecordSumAggregateInputType = {
    id?: true
    investment?: true
    withdraw?: true
    sheetId?: true
    profit?: true
    teamId?: true
  }

  export type DailyRecordMinAggregateInputType = {
    id?: true
    date?: true
    platform?: true
    investment?: true
    withdraw?: true
    cycles?: true
    sheetId?: true
    createdAt?: true
    profit?: true
    status?: true
    teamId?: true
  }

  export type DailyRecordMaxAggregateInputType = {
    id?: true
    date?: true
    platform?: true
    investment?: true
    withdraw?: true
    cycles?: true
    sheetId?: true
    createdAt?: true
    profit?: true
    status?: true
    teamId?: true
  }

  export type DailyRecordCountAggregateInputType = {
    id?: true
    date?: true
    platform?: true
    investment?: true
    withdraw?: true
    cycles?: true
    sheetId?: true
    createdAt?: true
    profit?: true
    status?: true
    teamId?: true
    _all?: true
  }

  export type DailyRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRecord to aggregate.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyRecords
    **/
    _count?: true | DailyRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyRecordMaxAggregateInputType
  }

  export type GetDailyRecordAggregateType<T extends DailyRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyRecord[P]>
      : GetScalarType<T[P], AggregateDailyRecord[P]>
  }




  export type DailyRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRecordWhereInput
    orderBy?: DailyRecordOrderByWithAggregationInput | DailyRecordOrderByWithAggregationInput[]
    by: DailyRecordScalarFieldEnum[] | DailyRecordScalarFieldEnum
    having?: DailyRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyRecordCountAggregateInputType | true
    _avg?: DailyRecordAvgAggregateInputType
    _sum?: DailyRecordSumAggregateInputType
    _min?: DailyRecordMinAggregateInputType
    _max?: DailyRecordMaxAggregateInputType
  }

  export type DailyRecordGroupByOutputType = {
    id: number
    date: Date
    platform: string
    investment: number
    withdraw: number
    cycles: string
    sheetId: number
    createdAt: Date
    profit: number
    status: string
    teamId: number | null
    _count: DailyRecordCountAggregateOutputType | null
    _avg: DailyRecordAvgAggregateOutputType | null
    _sum: DailyRecordSumAggregateOutputType | null
    _min: DailyRecordMinAggregateOutputType | null
    _max: DailyRecordMaxAggregateOutputType | null
  }

  type GetDailyRecordGroupByPayload<T extends DailyRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DailyRecordGroupByOutputType[P]>
        }
      >
    >


  export type DailyRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    platform?: boolean
    investment?: boolean
    withdraw?: boolean
    cycles?: boolean
    sheetId?: boolean
    createdAt?: boolean
    profit?: boolean
    status?: boolean
    teamId?: boolean
    sheet?: boolean | DailySheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRecord"]>

  export type DailyRecordSelectScalar = {
    id?: boolean
    date?: boolean
    platform?: boolean
    investment?: boolean
    withdraw?: boolean
    cycles?: boolean
    sheetId?: boolean
    createdAt?: boolean
    profit?: boolean
    status?: boolean
    teamId?: boolean
  }

  export type DailyRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | DailySheetDefaultArgs<ExtArgs>
  }


  export type $DailyRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyRecord"
    objects: {
      sheet: Prisma.$DailySheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      platform: string
      investment: number
      withdraw: number
      cycles: string
      sheetId: number
      createdAt: Date
      profit: number
      status: string
      teamId: number | null
    }, ExtArgs["result"]["dailyRecord"]>
    composites: {}
  }


  type DailyRecordGetPayload<S extends boolean | null | undefined | DailyRecordDefaultArgs> = $Result.GetResult<Prisma.$DailyRecordPayload, S>

  type DailyRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyRecordCountAggregateInputType | true
    }

  export interface DailyRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyRecord'], meta: { name: 'DailyRecord' } }
    /**
     * Find zero or one DailyRecord that matches the filter.
     * @param {DailyRecordFindUniqueArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DailyRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DailyRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DailyRecordFindUniqueOrThrowArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DailyRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DailyRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordFindFirstArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DailyRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRecordFindFirstArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DailyRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordFindFirstOrThrowArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DailyRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DailyRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyRecords
     * const dailyRecords = await prisma.dailyRecord.findMany()
     * 
     * // Get first 10 DailyRecords
     * const dailyRecords = await prisma.dailyRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyRecordWithIdOnly = await prisma.dailyRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DailyRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DailyRecord.
     * @param {DailyRecordCreateArgs} args - Arguments to create a DailyRecord.
     * @example
     * // Create one DailyRecord
     * const DailyRecord = await prisma.dailyRecord.create({
     *   data: {
     *     // ... data to create a DailyRecord
     *   }
     * })
     * 
    **/
    create<T extends DailyRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRecordCreateArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DailyRecords.
     *     @param {DailyRecordCreateManyArgs} args - Arguments to create many DailyRecords.
     *     @example
     *     // Create many DailyRecords
     *     const dailyRecord = await prisma.dailyRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DailyRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyRecord.
     * @param {DailyRecordDeleteArgs} args - Arguments to delete one DailyRecord.
     * @example
     * // Delete one DailyRecord
     * const DailyRecord = await prisma.dailyRecord.delete({
     *   where: {
     *     // ... filter to delete one DailyRecord
     *   }
     * })
     * 
    **/
    delete<T extends DailyRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRecordDeleteArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DailyRecord.
     * @param {DailyRecordUpdateArgs} args - Arguments to update one DailyRecord.
     * @example
     * // Update one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DailyRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRecordUpdateArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DailyRecords.
     * @param {DailyRecordDeleteManyArgs} args - Arguments to filter DailyRecords to delete.
     * @example
     * // Delete a few DailyRecords
     * const { count } = await prisma.dailyRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DailyRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyRecords
     * const dailyRecord = await prisma.dailyRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DailyRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyRecord.
     * @param {DailyRecordUpsertArgs} args - Arguments to update or create a DailyRecord.
     * @example
     * // Update or create a DailyRecord
     * const dailyRecord = await prisma.dailyRecord.upsert({
     *   create: {
     *     // ... data to create a DailyRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyRecord we want to update
     *   }
     * })
    **/
    upsert<T extends DailyRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRecordUpsertArgs<ExtArgs>>
    ): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DailyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordCountArgs} args - Arguments to filter DailyRecords to count.
     * @example
     * // Count the number of DailyRecords
     * const count = await prisma.dailyRecord.count({
     *   where: {
     *     // ... the filter for the DailyRecords we want to count
     *   }
     * })
    **/
    count<T extends DailyRecordCountArgs>(
      args?: Subset<T, DailyRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyRecordAggregateArgs>(args: Subset<T, DailyRecordAggregateArgs>): Prisma.PrismaPromise<GetDailyRecordAggregateType<T>>

    /**
     * Group by DailyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyRecordGroupByArgs['orderBy'] }
        : { orderBy?: DailyRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyRecord model
   */
  readonly fields: DailyRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sheet<T extends DailySheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailySheetDefaultArgs<ExtArgs>>): Prisma__DailySheetClient<$Result.GetResult<Prisma.$DailySheetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DailyRecord model
   */ 
  interface DailyRecordFieldRefs {
    readonly id: FieldRef<"DailyRecord", 'Int'>
    readonly date: FieldRef<"DailyRecord", 'DateTime'>
    readonly platform: FieldRef<"DailyRecord", 'String'>
    readonly investment: FieldRef<"DailyRecord", 'Float'>
    readonly withdraw: FieldRef<"DailyRecord", 'Float'>
    readonly cycles: FieldRef<"DailyRecord", 'String'>
    readonly sheetId: FieldRef<"DailyRecord", 'Int'>
    readonly createdAt: FieldRef<"DailyRecord", 'DateTime'>
    readonly profit: FieldRef<"DailyRecord", 'Float'>
    readonly status: FieldRef<"DailyRecord", 'String'>
    readonly teamId: FieldRef<"DailyRecord", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DailyRecord findUnique
   */
  export type DailyRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where: DailyRecordWhereUniqueInput
  }


  /**
   * DailyRecord findUniqueOrThrow
   */
  export type DailyRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where: DailyRecordWhereUniqueInput
  }


  /**
   * DailyRecord findFirst
   */
  export type DailyRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRecords.
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecords.
     */
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }


  /**
   * DailyRecord findFirstOrThrow
   */
  export type DailyRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRecords.
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecords.
     */
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }


  /**
   * DailyRecord findMany
   */
  export type DailyRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecords to fetch.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyRecords.
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }


  /**
   * DailyRecord create
   */
  export type DailyRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyRecord.
     */
    data: XOR<DailyRecordCreateInput, DailyRecordUncheckedCreateInput>
  }


  /**
   * DailyRecord createMany
   */
  export type DailyRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyRecords.
     */
    data: DailyRecordCreateManyInput | DailyRecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DailyRecord update
   */
  export type DailyRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyRecord.
     */
    data: XOR<DailyRecordUpdateInput, DailyRecordUncheckedUpdateInput>
    /**
     * Choose, which DailyRecord to update.
     */
    where: DailyRecordWhereUniqueInput
  }


  /**
   * DailyRecord updateMany
   */
  export type DailyRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyRecords.
     */
    data: XOR<DailyRecordUpdateManyMutationInput, DailyRecordUncheckedUpdateManyInput>
    /**
     * Filter which DailyRecords to update
     */
    where?: DailyRecordWhereInput
  }


  /**
   * DailyRecord upsert
   */
  export type DailyRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyRecord to update in case it exists.
     */
    where: DailyRecordWhereUniqueInput
    /**
     * In case the DailyRecord found by the `where` argument doesn't exist, create a new DailyRecord with this data.
     */
    create: XOR<DailyRecordCreateInput, DailyRecordUncheckedCreateInput>
    /**
     * In case the DailyRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyRecordUpdateInput, DailyRecordUncheckedUpdateInput>
  }


  /**
   * DailyRecord delete
   */
  export type DailyRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter which DailyRecord to delete.
     */
    where: DailyRecordWhereUniqueInput
  }


  /**
   * DailyRecord deleteMany
   */
  export type DailyRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRecords to delete
     */
    where?: DailyRecordWhereInput
  }


  /**
   * DailyRecord without action
   */
  export type DailyRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRecordInclude<ExtArgs> | null
  }



  /**
   * Model Statistic
   */

  export type AggregateStatistic = {
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  export type StatisticAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    clicks: number | null
    revenue: number | null
    leads: number | null
  }

  export type StatisticSumAggregateOutputType = {
    id: number | null
    userId: number | null
    clicks: number | null
    revenue: number | null
    leads: number | null
  }

  export type StatisticMinAggregateOutputType = {
    id: number | null
    userId: number | null
    clicks: number | null
    revenue: number | null
    leads: number | null
    date: Date | null
  }

  export type StatisticMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    clicks: number | null
    revenue: number | null
    leads: number | null
    date: Date | null
  }

  export type StatisticCountAggregateOutputType = {
    id: number
    userId: number
    clicks: number
    revenue: number
    leads: number
    date: number
    _all: number
  }


  export type StatisticAvgAggregateInputType = {
    id?: true
    userId?: true
    clicks?: true
    revenue?: true
    leads?: true
  }

  export type StatisticSumAggregateInputType = {
    id?: true
    userId?: true
    clicks?: true
    revenue?: true
    leads?: true
  }

  export type StatisticMinAggregateInputType = {
    id?: true
    userId?: true
    clicks?: true
    revenue?: true
    leads?: true
    date?: true
  }

  export type StatisticMaxAggregateInputType = {
    id?: true
    userId?: true
    clicks?: true
    revenue?: true
    leads?: true
    date?: true
  }

  export type StatisticCountAggregateInputType = {
    id?: true
    userId?: true
    clicks?: true
    revenue?: true
    leads?: true
    date?: true
    _all?: true
  }

  export type StatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistic to aggregate.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statistics
    **/
    _count?: true | StatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticMaxAggregateInputType
  }

  export type GetStatisticAggregateType<T extends StatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistic[P]>
      : GetScalarType<T[P], AggregateStatistic[P]>
  }




  export type StatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithAggregationInput | StatisticOrderByWithAggregationInput[]
    by: StatisticScalarFieldEnum[] | StatisticScalarFieldEnum
    having?: StatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticCountAggregateInputType | true
    _avg?: StatisticAvgAggregateInputType
    _sum?: StatisticSumAggregateInputType
    _min?: StatisticMinAggregateInputType
    _max?: StatisticMaxAggregateInputType
  }

  export type StatisticGroupByOutputType = {
    id: number
    userId: number
    clicks: number
    revenue: number
    leads: number
    date: Date
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  type GetStatisticGroupByPayload<T extends StatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticGroupByOutputType[P]>
        }
      >
    >


  export type StatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clicks?: boolean
    revenue?: boolean
    leads?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectScalar = {
    id?: boolean
    userId?: boolean
    clicks?: boolean
    revenue?: boolean
    leads?: boolean
    date?: boolean
  }

  export type StatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $StatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statistic"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      clicks: number
      revenue: number
      leads: number
      date: Date
    }, ExtArgs["result"]["statistic"]>
    composites: {}
  }


  type StatisticGetPayload<S extends boolean | null | undefined | StatisticDefaultArgs> = $Result.GetResult<Prisma.$StatisticPayload, S>

  type StatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatisticFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatisticCountAggregateInputType | true
    }

  export interface StatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statistic'], meta: { name: 'Statistic' } }
    /**
     * Find zero or one Statistic that matches the filter.
     * @param {StatisticFindUniqueArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StatisticFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StatisticFindUniqueArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Statistic that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StatisticFindUniqueOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StatisticFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StatisticFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Statistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StatisticFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StatisticFindFirstArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Statistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StatisticFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StatisticFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Statistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics
     * const statistics = await prisma.statistic.findMany()
     * 
     * // Get first 10 Statistics
     * const statistics = await prisma.statistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticWithIdOnly = await prisma.statistic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StatisticFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatisticFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Statistic.
     * @param {StatisticCreateArgs} args - Arguments to create a Statistic.
     * @example
     * // Create one Statistic
     * const Statistic = await prisma.statistic.create({
     *   data: {
     *     // ... data to create a Statistic
     *   }
     * })
     * 
    **/
    create<T extends StatisticCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StatisticCreateArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Statistics.
     *     @param {StatisticCreateManyArgs} args - Arguments to create many Statistics.
     *     @example
     *     // Create many Statistics
     *     const statistic = await prisma.statistic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StatisticCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatisticCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statistic.
     * @param {StatisticDeleteArgs} args - Arguments to delete one Statistic.
     * @example
     * // Delete one Statistic
     * const Statistic = await prisma.statistic.delete({
     *   where: {
     *     // ... filter to delete one Statistic
     *   }
     * })
     * 
    **/
    delete<T extends StatisticDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StatisticDeleteArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Statistic.
     * @param {StatisticUpdateArgs} args - Arguments to update one Statistic.
     * @example
     * // Update one Statistic
     * const statistic = await prisma.statistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StatisticUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StatisticUpdateArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Statistics.
     * @param {StatisticDeleteManyArgs} args - Arguments to filter Statistics to delete.
     * @example
     * // Delete a few Statistics
     * const { count } = await prisma.statistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StatisticDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatisticDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StatisticUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StatisticUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statistic.
     * @param {StatisticUpsertArgs} args - Arguments to update or create a Statistic.
     * @example
     * // Update or create a Statistic
     * const statistic = await prisma.statistic.upsert({
     *   create: {
     *     // ... data to create a Statistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistic we want to update
     *   }
     * })
    **/
    upsert<T extends StatisticUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StatisticUpsertArgs<ExtArgs>>
    ): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticCountArgs} args - Arguments to filter Statistics to count.
     * @example
     * // Count the number of Statistics
     * const count = await prisma.statistic.count({
     *   where: {
     *     // ... the filter for the Statistics we want to count
     *   }
     * })
    **/
    count<T extends StatisticCountArgs>(
      args?: Subset<T, StatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatisticAggregateArgs>(args: Subset<T, StatisticAggregateArgs>): Prisma.PrismaPromise<GetStatisticAggregateType<T>>

    /**
     * Group by Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticGroupByArgs['orderBy'] }
        : { orderBy?: StatisticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statistic model
   */
  readonly fields: StatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Statistic model
   */ 
  interface StatisticFieldRefs {
    readonly id: FieldRef<"Statistic", 'Int'>
    readonly userId: FieldRef<"Statistic", 'Int'>
    readonly clicks: FieldRef<"Statistic", 'Int'>
    readonly revenue: FieldRef<"Statistic", 'Float'>
    readonly leads: FieldRef<"Statistic", 'Int'>
    readonly date: FieldRef<"Statistic", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Statistic findUnique
   */
  export type StatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }


  /**
   * Statistic findUniqueOrThrow
   */
  export type StatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }


  /**
   * Statistic findFirst
   */
  export type StatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * Statistic findFirstOrThrow
   */
  export type StatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * Statistic findMany
   */
  export type StatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistics to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * Statistic create
   */
  export type StatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a Statistic.
     */
    data: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
  }


  /**
   * Statistic createMany
   */
  export type StatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Statistic update
   */
  export type StatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a Statistic.
     */
    data: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
    /**
     * Choose, which Statistic to update.
     */
    where: StatisticWhereUniqueInput
  }


  /**
   * Statistic updateMany
   */
  export type StatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
  }


  /**
   * Statistic upsert
   */
  export type StatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the Statistic to update in case it exists.
     */
    where: StatisticWhereUniqueInput
    /**
     * In case the Statistic found by the `where` argument doesn't exist, create a new Statistic with this data.
     */
    create: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
    /**
     * In case the Statistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
  }


  /**
   * Statistic delete
   */
  export type StatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter which Statistic to delete.
     */
    where: StatisticWhereUniqueInput
  }


  /**
   * Statistic deleteMany
   */
  export type StatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistics to delete
     */
    where?: StatisticWhereInput
  }


  /**
   * Statistic without action
   */
  export type StatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatisticInclude<ExtArgs> | null
  }



  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    userId: number | null
    actionType: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    actionType: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    userId: number
    actionType: number
    description: number
    createdAt: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    userId?: true
    actionType?: true
    description?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    actionType?: true
    description?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    userId?: true
    actionType?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    userId: number
    actionType: string
    description: string
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    actionType?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    actionType?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      actionType: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }


  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Activity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActivityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
    **/
    create<T extends ActivityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Activities.
     *     @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     *     @example
     *     // Create many Activities
     *     const activity = await prisma.activity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActivityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
    **/
    delete<T extends ActivityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
    **/
    upsert<T extends ActivityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly userId: FieldRef<"Activity", 'Int'>
    readonly actionType: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }


  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }


  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }


  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }


  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }


  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }


  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }


  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }


  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude<ExtArgs> | null
  }



  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    level: number
    message: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    level?: true
    message?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    level: string
    message: string
    metadata: JsonValue | null
    createdAt: Date
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    level?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
  }


  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: string
      message: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }


  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
    **/
    create<T extends LogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LogCreateArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Logs.
     *     @param {LogCreateManyArgs} args - Arguments to create many Logs.
     *     @example
     *     // Create many Logs
     *     const log = await prisma.log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
    **/
    delete<T extends LogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LogDeleteArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpdateArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
    **/
    upsert<T extends LogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpsertArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'Int'>
    readonly level: FieldRef<"Log", 'String'>
    readonly message: FieldRef<"Log", 'String'>
    readonly metadata: FieldRef<"Log", 'Json'>
    readonly createdAt: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }


  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
  }


  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }


  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
  }


  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
  }



  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    id: number | null
    target: number | null
    current: number | null
    userId: number | null
  }

  export type GoalSumAggregateOutputType = {
    id: number | null
    target: number | null
    current: number | null
    userId: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: number | null
    title: string | null
    target: number | null
    current: number | null
    deadline: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: number | null
    title: string | null
    target: number | null
    current: number | null
    deadline: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    title: number
    target: number
    current: number
    deadline: number
    userId: number
    createdAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    id?: true
    target?: true
    current?: true
    userId?: true
  }

  export type GoalSumAggregateInputType = {
    id?: true
    target?: true
    current?: true
    userId?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    title?: true
    target?: true
    current?: true
    deadline?: true
    userId?: true
    createdAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    title?: true
    target?: true
    current?: true
    deadline?: true
    userId?: true
    createdAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    title?: true
    target?: true
    current?: true
    deadline?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: number
    title: string
    target: number
    current: number
    deadline: string
    userId: number
    createdAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    target?: boolean
    current?: boolean
    deadline?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    title?: boolean
    target?: boolean
    current?: boolean
    deadline?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      target: number
      current: number
      deadline: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }


  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GoalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Goal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GoalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GoalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
    **/
    create<T extends GoalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GoalCreateArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Goals.
     *     @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     *     @example
     *     // Create many Goals
     *     const goal = await prisma.goal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GoalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
    **/
    delete<T extends GoalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GoalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GoalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GoalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
    **/
    upsert<T extends GoalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Goal model
   */ 
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'Int'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly target: FieldRef<"Goal", 'Float'>
    readonly current: FieldRef<"Goal", 'Float'>
    readonly deadline: FieldRef<"Goal", 'String'>
    readonly userId: FieldRef<"Goal", 'Int'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }


  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }


  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }


  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }


  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
  }


  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }


  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }


  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
  }


  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoalInclude<ExtArgs> | null
  }



  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: number | null
    name: string | null
    amount: number | null
    category: string | null
    date: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    amount: number | null
    category: string | null
    date: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    category: number
    date: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    category?: true
    date?: true
    userId?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    category?: true
    date?: true
    userId?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    category?: true
    date?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: number
    name: string
    amount: number
    category: string
    date: string
    userId: number
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      amount: number
      category: string
      date: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }


  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpenseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Expense that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpenseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExpenseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
    **/
    create<T extends ExpenseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Expenses.
     *     @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     *     @example
     *     // Create many Expenses
     *     const expense = await prisma.expense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpenseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
    **/
    delete<T extends ExpenseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpenseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpenseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpenseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
    **/
    upsert<T extends ExpenseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Expense model
   */ 
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'Int'>
    readonly name: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly date: FieldRef<"Expense", 'String'>
    readonly userId: FieldRef<"Expense", 'Int'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }


  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }


  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }


  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }


  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }


  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }


  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }


  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
  }


  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }


  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }


  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
  }


  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpenseInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    instagram: 'instagram',
    color: 'color',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    userId: 'userId',
    role: 'role'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const TeamOperationScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    platform: 'platform',
    network: 'network',
    title: 'title',
    depositors: 'depositors',
    createdAt: 'createdAt'
  };

  export type TeamOperationScalarFieldEnum = (typeof TeamOperationScalarFieldEnum)[keyof typeof TeamOperationScalarFieldEnum]


  export const TeamGoalScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    platform: 'platform',
    target: 'target',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TeamGoalScalarFieldEnum = (typeof TeamGoalScalarFieldEnum)[keyof typeof TeamGoalScalarFieldEnum]


  export const TeamRemittanceScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    operatorId: 'operatorId',
    platform: 'platform',
    value: 'value',
    observation: 'observation',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type TeamRemittanceScalarFieldEnum = (typeof TeamRemittanceScalarFieldEnum)[keyof typeof TeamRemittanceScalarFieldEnum]


  export const DailySheetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    proxyCost: 'proxyCost',
    smsCost: 'smsCost',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailySheetScalarFieldEnum = (typeof DailySheetScalarFieldEnum)[keyof typeof DailySheetScalarFieldEnum]


  export const DailyRecordScalarFieldEnum: {
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

  export type DailyRecordScalarFieldEnum = (typeof DailyRecordScalarFieldEnum)[keyof typeof DailyRecordScalarFieldEnum]


  export const StatisticScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    clicks: 'clicks',
    revenue: 'revenue',
    leads: 'leads',
    date: 'date'
  };

  export type StatisticScalarFieldEnum = (typeof StatisticScalarFieldEnum)[keyof typeof StatisticScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    actionType: 'actionType',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    level: 'level',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    target: 'target',
    current: 'current',
    deadline: 'deadline',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    category: 'category',
    date: 'date',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    activities?: ActivityListRelationFilter
    sheets?: DailySheetListRelationFilter
    expenses?: ExpenseListRelationFilter
    goals?: GoalListRelationFilter
    statistics?: StatisticListRelationFilter
    ownedTeams?: TeamListRelationFilter
    teamMemberships?: TeamMemberListRelationFilter
    remittances?: TeamRemittanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    activities?: ActivityOrderByRelationAggregateInput
    sheets?: DailySheetOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    statistics?: StatisticOrderByRelationAggregateInput
    ownedTeams?: TeamOrderByRelationAggregateInput
    teamMemberships?: TeamMemberOrderByRelationAggregateInput
    remittances?: TeamRemittanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    activities?: ActivityListRelationFilter
    sheets?: DailySheetListRelationFilter
    expenses?: ExpenseListRelationFilter
    goals?: GoalListRelationFilter
    statistics?: StatisticListRelationFilter
    ownedTeams?: TeamListRelationFilter
    teamMemberships?: TeamMemberListRelationFilter
    remittances?: TeamRemittanceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    code?: StringFilter<"Team"> | string
    instagram?: StringNullableFilter<"Team"> | string | null
    color?: StringNullableFilter<"Team"> | string | null
    ownerId?: IntFilter<"Team"> | number
    createdAt?: DateTimeFilter<"Team"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    goals?: TeamGoalListRelationFilter
    members?: TeamMemberListRelationFilter
    operations?: TeamOperationListRelationFilter
    remittances?: TeamRemittanceListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    instagram?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    goals?: TeamGoalOrderByRelationAggregateInput
    members?: TeamMemberOrderByRelationAggregateInput
    operations?: TeamOperationOrderByRelationAggregateInput
    remittances?: TeamRemittanceOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    instagram?: StringNullableFilter<"Team"> | string | null
    color?: StringNullableFilter<"Team"> | string | null
    ownerId?: IntFilter<"Team"> | number
    createdAt?: DateTimeFilter<"Team"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    goals?: TeamGoalListRelationFilter
    members?: TeamMemberListRelationFilter
    operations?: TeamOperationListRelationFilter
    remittances?: TeamRemittanceListRelationFilter
  }, "id" | "code">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    instagram?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    code?: StringWithAggregatesFilter<"Team"> | string
    instagram?: StringNullableWithAggregatesFilter<"Team"> | string | null
    color?: StringNullableWithAggregatesFilter<"Team"> | string | null
    ownerId?: IntWithAggregatesFilter<"Team"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    teamId?: IntFilter<"TeamMember"> | number
    userId?: IntFilter<"TeamMember"> | number
    role?: StringFilter<"TeamMember"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamId_userId?: TeamMemberTeamIdUserIdCompoundUniqueInput
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    teamId?: IntFilter<"TeamMember"> | number
    userId?: IntFilter<"TeamMember"> | number
    role?: StringFilter<"TeamMember"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "teamId_userId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamMember"> | number
    teamId?: IntWithAggregatesFilter<"TeamMember"> | number
    userId?: IntWithAggregatesFilter<"TeamMember"> | number
    role?: StringWithAggregatesFilter<"TeamMember"> | string
  }

  export type TeamOperationWhereInput = {
    AND?: TeamOperationWhereInput | TeamOperationWhereInput[]
    OR?: TeamOperationWhereInput[]
    NOT?: TeamOperationWhereInput | TeamOperationWhereInput[]
    id?: IntFilter<"TeamOperation"> | number
    teamId?: IntFilter<"TeamOperation"> | number
    platform?: StringFilter<"TeamOperation"> | string
    network?: StringFilter<"TeamOperation"> | string
    title?: StringFilter<"TeamOperation"> | string
    depositors?: IntFilter<"TeamOperation"> | number
    createdAt?: DateTimeFilter<"TeamOperation"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type TeamOperationOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    network?: SortOrder
    title?: SortOrder
    depositors?: SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type TeamOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamOperationWhereInput | TeamOperationWhereInput[]
    OR?: TeamOperationWhereInput[]
    NOT?: TeamOperationWhereInput | TeamOperationWhereInput[]
    teamId?: IntFilter<"TeamOperation"> | number
    platform?: StringFilter<"TeamOperation"> | string
    network?: StringFilter<"TeamOperation"> | string
    title?: StringFilter<"TeamOperation"> | string
    depositors?: IntFilter<"TeamOperation"> | number
    createdAt?: DateTimeFilter<"TeamOperation"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id">

  export type TeamOperationOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    network?: SortOrder
    title?: SortOrder
    depositors?: SortOrder
    createdAt?: SortOrder
    _count?: TeamOperationCountOrderByAggregateInput
    _avg?: TeamOperationAvgOrderByAggregateInput
    _max?: TeamOperationMaxOrderByAggregateInput
    _min?: TeamOperationMinOrderByAggregateInput
    _sum?: TeamOperationSumOrderByAggregateInput
  }

  export type TeamOperationScalarWhereWithAggregatesInput = {
    AND?: TeamOperationScalarWhereWithAggregatesInput | TeamOperationScalarWhereWithAggregatesInput[]
    OR?: TeamOperationScalarWhereWithAggregatesInput[]
    NOT?: TeamOperationScalarWhereWithAggregatesInput | TeamOperationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamOperation"> | number
    teamId?: IntWithAggregatesFilter<"TeamOperation"> | number
    platform?: StringWithAggregatesFilter<"TeamOperation"> | string
    network?: StringWithAggregatesFilter<"TeamOperation"> | string
    title?: StringWithAggregatesFilter<"TeamOperation"> | string
    depositors?: IntWithAggregatesFilter<"TeamOperation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TeamOperation"> | Date | string
  }

  export type TeamGoalWhereInput = {
    AND?: TeamGoalWhereInput | TeamGoalWhereInput[]
    OR?: TeamGoalWhereInput[]
    NOT?: TeamGoalWhereInput | TeamGoalWhereInput[]
    id?: IntFilter<"TeamGoal"> | number
    teamId?: IntFilter<"TeamGoal"> | number
    platform?: StringFilter<"TeamGoal"> | string
    target?: IntFilter<"TeamGoal"> | number
    status?: StringFilter<"TeamGoal"> | string
    createdAt?: DateTimeFilter<"TeamGoal"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type TeamGoalOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    target?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type TeamGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamGoalWhereInput | TeamGoalWhereInput[]
    OR?: TeamGoalWhereInput[]
    NOT?: TeamGoalWhereInput | TeamGoalWhereInput[]
    teamId?: IntFilter<"TeamGoal"> | number
    platform?: StringFilter<"TeamGoal"> | string
    target?: IntFilter<"TeamGoal"> | number
    status?: StringFilter<"TeamGoal"> | string
    createdAt?: DateTimeFilter<"TeamGoal"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id">

  export type TeamGoalOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    target?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TeamGoalCountOrderByAggregateInput
    _avg?: TeamGoalAvgOrderByAggregateInput
    _max?: TeamGoalMaxOrderByAggregateInput
    _min?: TeamGoalMinOrderByAggregateInput
    _sum?: TeamGoalSumOrderByAggregateInput
  }

  export type TeamGoalScalarWhereWithAggregatesInput = {
    AND?: TeamGoalScalarWhereWithAggregatesInput | TeamGoalScalarWhereWithAggregatesInput[]
    OR?: TeamGoalScalarWhereWithAggregatesInput[]
    NOT?: TeamGoalScalarWhereWithAggregatesInput | TeamGoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamGoal"> | number
    teamId?: IntWithAggregatesFilter<"TeamGoal"> | number
    platform?: StringWithAggregatesFilter<"TeamGoal"> | string
    target?: IntWithAggregatesFilter<"TeamGoal"> | number
    status?: StringWithAggregatesFilter<"TeamGoal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeamGoal"> | Date | string
  }

  export type TeamRemittanceWhereInput = {
    AND?: TeamRemittanceWhereInput | TeamRemittanceWhereInput[]
    OR?: TeamRemittanceWhereInput[]
    NOT?: TeamRemittanceWhereInput | TeamRemittanceWhereInput[]
    id?: IntFilter<"TeamRemittance"> | number
    teamId?: IntFilter<"TeamRemittance"> | number
    operatorId?: IntFilter<"TeamRemittance"> | number
    platform?: StringFilter<"TeamRemittance"> | string
    value?: FloatFilter<"TeamRemittance"> | number
    observation?: StringNullableFilter<"TeamRemittance"> | string | null
    date?: DateTimeFilter<"TeamRemittance"> | Date | string
    createdAt?: DateTimeFilter<"TeamRemittance"> | Date | string
    operator?: XOR<UserRelationFilter, UserWhereInput>
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type TeamRemittanceOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    operatorId?: SortOrder
    platform?: SortOrder
    value?: SortOrder
    observation?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    operator?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamRemittanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamRemittanceWhereInput | TeamRemittanceWhereInput[]
    OR?: TeamRemittanceWhereInput[]
    NOT?: TeamRemittanceWhereInput | TeamRemittanceWhereInput[]
    teamId?: IntFilter<"TeamRemittance"> | number
    operatorId?: IntFilter<"TeamRemittance"> | number
    platform?: StringFilter<"TeamRemittance"> | string
    value?: FloatFilter<"TeamRemittance"> | number
    observation?: StringNullableFilter<"TeamRemittance"> | string | null
    date?: DateTimeFilter<"TeamRemittance"> | Date | string
    createdAt?: DateTimeFilter<"TeamRemittance"> | Date | string
    operator?: XOR<UserRelationFilter, UserWhereInput>
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id">

  export type TeamRemittanceOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    operatorId?: SortOrder
    platform?: SortOrder
    value?: SortOrder
    observation?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: TeamRemittanceCountOrderByAggregateInput
    _avg?: TeamRemittanceAvgOrderByAggregateInput
    _max?: TeamRemittanceMaxOrderByAggregateInput
    _min?: TeamRemittanceMinOrderByAggregateInput
    _sum?: TeamRemittanceSumOrderByAggregateInput
  }

  export type TeamRemittanceScalarWhereWithAggregatesInput = {
    AND?: TeamRemittanceScalarWhereWithAggregatesInput | TeamRemittanceScalarWhereWithAggregatesInput[]
    OR?: TeamRemittanceScalarWhereWithAggregatesInput[]
    NOT?: TeamRemittanceScalarWhereWithAggregatesInput | TeamRemittanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamRemittance"> | number
    teamId?: IntWithAggregatesFilter<"TeamRemittance"> | number
    operatorId?: IntWithAggregatesFilter<"TeamRemittance"> | number
    platform?: StringWithAggregatesFilter<"TeamRemittance"> | string
    value?: FloatWithAggregatesFilter<"TeamRemittance"> | number
    observation?: StringNullableWithAggregatesFilter<"TeamRemittance"> | string | null
    date?: DateTimeWithAggregatesFilter<"TeamRemittance"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TeamRemittance"> | Date | string
  }

  export type DailySheetWhereInput = {
    AND?: DailySheetWhereInput | DailySheetWhereInput[]
    OR?: DailySheetWhereInput[]
    NOT?: DailySheetWhereInput | DailySheetWhereInput[]
    id?: IntFilter<"DailySheet"> | number
    name?: StringFilter<"DailySheet"> | string
    proxyCost?: FloatFilter<"DailySheet"> | number
    smsCost?: FloatFilter<"DailySheet"> | number
    userId?: IntFilter<"DailySheet"> | number
    createdAt?: DateTimeFilter<"DailySheet"> | Date | string
    updatedAt?: DateTimeFilter<"DailySheet"> | Date | string
    records?: DailyRecordListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DailySheetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    proxyCost?: SortOrder
    smsCost?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    records?: DailyRecordOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type DailySheetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailySheetWhereInput | DailySheetWhereInput[]
    OR?: DailySheetWhereInput[]
    NOT?: DailySheetWhereInput | DailySheetWhereInput[]
    name?: StringFilter<"DailySheet"> | string
    proxyCost?: FloatFilter<"DailySheet"> | number
    smsCost?: FloatFilter<"DailySheet"> | number
    userId?: IntFilter<"DailySheet"> | number
    createdAt?: DateTimeFilter<"DailySheet"> | Date | string
    updatedAt?: DateTimeFilter<"DailySheet"> | Date | string
    records?: DailyRecordListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DailySheetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    proxyCost?: SortOrder
    smsCost?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailySheetCountOrderByAggregateInput
    _avg?: DailySheetAvgOrderByAggregateInput
    _max?: DailySheetMaxOrderByAggregateInput
    _min?: DailySheetMinOrderByAggregateInput
    _sum?: DailySheetSumOrderByAggregateInput
  }

  export type DailySheetScalarWhereWithAggregatesInput = {
    AND?: DailySheetScalarWhereWithAggregatesInput | DailySheetScalarWhereWithAggregatesInput[]
    OR?: DailySheetScalarWhereWithAggregatesInput[]
    NOT?: DailySheetScalarWhereWithAggregatesInput | DailySheetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailySheet"> | number
    name?: StringWithAggregatesFilter<"DailySheet"> | string
    proxyCost?: FloatWithAggregatesFilter<"DailySheet"> | number
    smsCost?: FloatWithAggregatesFilter<"DailySheet"> | number
    userId?: IntWithAggregatesFilter<"DailySheet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailySheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailySheet"> | Date | string
  }

  export type DailyRecordWhereInput = {
    AND?: DailyRecordWhereInput | DailyRecordWhereInput[]
    OR?: DailyRecordWhereInput[]
    NOT?: DailyRecordWhereInput | DailyRecordWhereInput[]
    id?: IntFilter<"DailyRecord"> | number
    date?: DateTimeFilter<"DailyRecord"> | Date | string
    platform?: StringFilter<"DailyRecord"> | string
    investment?: FloatFilter<"DailyRecord"> | number
    withdraw?: FloatFilter<"DailyRecord"> | number
    cycles?: StringFilter<"DailyRecord"> | string
    sheetId?: IntFilter<"DailyRecord"> | number
    createdAt?: DateTimeFilter<"DailyRecord"> | Date | string
    profit?: FloatFilter<"DailyRecord"> | number
    status?: StringFilter<"DailyRecord"> | string
    teamId?: IntNullableFilter<"DailyRecord"> | number | null
    sheet?: XOR<DailySheetRelationFilter, DailySheetWhereInput>
  }

  export type DailyRecordOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    investment?: SortOrder
    withdraw?: SortOrder
    cycles?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    teamId?: SortOrderInput | SortOrder
    sheet?: DailySheetOrderByWithRelationInput
  }

  export type DailyRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyRecordWhereInput | DailyRecordWhereInput[]
    OR?: DailyRecordWhereInput[]
    NOT?: DailyRecordWhereInput | DailyRecordWhereInput[]
    date?: DateTimeFilter<"DailyRecord"> | Date | string
    platform?: StringFilter<"DailyRecord"> | string
    investment?: FloatFilter<"DailyRecord"> | number
    withdraw?: FloatFilter<"DailyRecord"> | number
    cycles?: StringFilter<"DailyRecord"> | string
    sheetId?: IntFilter<"DailyRecord"> | number
    createdAt?: DateTimeFilter<"DailyRecord"> | Date | string
    profit?: FloatFilter<"DailyRecord"> | number
    status?: StringFilter<"DailyRecord"> | string
    teamId?: IntNullableFilter<"DailyRecord"> | number | null
    sheet?: XOR<DailySheetRelationFilter, DailySheetWhereInput>
  }, "id">

  export type DailyRecordOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    investment?: SortOrder
    withdraw?: SortOrder
    cycles?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: DailyRecordCountOrderByAggregateInput
    _avg?: DailyRecordAvgOrderByAggregateInput
    _max?: DailyRecordMaxOrderByAggregateInput
    _min?: DailyRecordMinOrderByAggregateInput
    _sum?: DailyRecordSumOrderByAggregateInput
  }

  export type DailyRecordScalarWhereWithAggregatesInput = {
    AND?: DailyRecordScalarWhereWithAggregatesInput | DailyRecordScalarWhereWithAggregatesInput[]
    OR?: DailyRecordScalarWhereWithAggregatesInput[]
    NOT?: DailyRecordScalarWhereWithAggregatesInput | DailyRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyRecord"> | number
    date?: DateTimeWithAggregatesFilter<"DailyRecord"> | Date | string
    platform?: StringWithAggregatesFilter<"DailyRecord"> | string
    investment?: FloatWithAggregatesFilter<"DailyRecord"> | number
    withdraw?: FloatWithAggregatesFilter<"DailyRecord"> | number
    cycles?: StringWithAggregatesFilter<"DailyRecord"> | string
    sheetId?: IntWithAggregatesFilter<"DailyRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyRecord"> | Date | string
    profit?: FloatWithAggregatesFilter<"DailyRecord"> | number
    status?: StringWithAggregatesFilter<"DailyRecord"> | string
    teamId?: IntNullableWithAggregatesFilter<"DailyRecord"> | number | null
  }

  export type StatisticWhereInput = {
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    id?: IntFilter<"Statistic"> | number
    userId?: IntFilter<"Statistic"> | number
    clicks?: IntFilter<"Statistic"> | number
    revenue?: FloatFilter<"Statistic"> | number
    leads?: IntFilter<"Statistic"> | number
    date?: DateTimeFilter<"Statistic"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StatisticOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    clicks?: SortOrder
    revenue?: SortOrder
    leads?: SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    userId?: IntFilter<"Statistic"> | number
    clicks?: IntFilter<"Statistic"> | number
    revenue?: FloatFilter<"Statistic"> | number
    leads?: IntFilter<"Statistic"> | number
    date?: DateTimeFilter<"Statistic"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type StatisticOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    clicks?: SortOrder
    revenue?: SortOrder
    leads?: SortOrder
    date?: SortOrder
    _count?: StatisticCountOrderByAggregateInput
    _avg?: StatisticAvgOrderByAggregateInput
    _max?: StatisticMaxOrderByAggregateInput
    _min?: StatisticMinOrderByAggregateInput
    _sum?: StatisticSumOrderByAggregateInput
  }

  export type StatisticScalarWhereWithAggregatesInput = {
    AND?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    OR?: StatisticScalarWhereWithAggregatesInput[]
    NOT?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Statistic"> | number
    userId?: IntWithAggregatesFilter<"Statistic"> | number
    clicks?: IntWithAggregatesFilter<"Statistic"> | number
    revenue?: FloatWithAggregatesFilter<"Statistic"> | number
    leads?: IntWithAggregatesFilter<"Statistic"> | number
    date?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    userId?: IntFilter<"Activity"> | number
    actionType?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    userId?: IntFilter<"Activity"> | number
    actionType?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    userId?: IntWithAggregatesFilter<"Activity"> | number
    actionType?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: IntFilter<"Log"> | number
    level?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    metadata?: JsonNullableFilter<"Log">
    createdAt?: DateTimeFilter<"Log"> | Date | string
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    level?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    metadata?: JsonNullableFilter<"Log">
    createdAt?: DateTimeFilter<"Log"> | Date | string
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Log"> | number
    level?: StringWithAggregatesFilter<"Log"> | string
    message?: StringWithAggregatesFilter<"Log"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Log">
    createdAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: IntFilter<"Goal"> | number
    title?: StringFilter<"Goal"> | string
    target?: FloatFilter<"Goal"> | number
    current?: FloatFilter<"Goal"> | number
    deadline?: StringFilter<"Goal"> | string
    userId?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    current?: SortOrder
    deadline?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    title?: StringFilter<"Goal"> | string
    target?: FloatFilter<"Goal"> | number
    current?: FloatFilter<"Goal"> | number
    deadline?: StringFilter<"Goal"> | string
    userId?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    current?: SortOrder
    deadline?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Goal"> | number
    title?: StringWithAggregatesFilter<"Goal"> | string
    target?: FloatWithAggregatesFilter<"Goal"> | number
    current?: FloatWithAggregatesFilter<"Goal"> | number
    deadline?: StringWithAggregatesFilter<"Goal"> | string
    userId?: IntWithAggregatesFilter<"Goal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: IntFilter<"Expense"> | number
    name?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    date?: StringFilter<"Expense"> | string
    userId?: IntFilter<"Expense"> | number
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    name?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    date?: StringFilter<"Expense"> | string
    userId?: IntFilter<"Expense"> | number
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expense"> | number
    name?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    category?: StringWithAggregatesFilter<"Expense"> | string
    date?: StringWithAggregatesFilter<"Expense"> | string
    userId?: IntWithAggregatesFilter<"Expense"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type TeamCreateInput = {
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTeamsInput
    goals?: TeamGoalCreateNestedManyWithoutTeamInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    operations?: TeamOperationCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    ownerId: number
    createdAt?: Date | string
    goals?: TeamGoalUncheckedCreateNestedManyWithoutTeamInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    operations?: TeamOperationUncheckedCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    goals?: TeamGoalUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: TeamGoalUncheckedUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUncheckedUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    ownerId: number
    createdAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    role?: string
    team: TeamCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTeamMembershipsInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: number
    teamId: number
    userId: number
    role?: string
  }

  export type TeamMemberUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTeamMembershipsNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberCreateManyInput = {
    id?: number
    teamId: number
    userId: number
    role?: string
  }

  export type TeamMemberUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamOperationCreateInput = {
    platform: string
    network: string
    title: string
    depositors?: number
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutOperationsInput
  }

  export type TeamOperationUncheckedCreateInput = {
    id?: number
    teamId: number
    platform: string
    network: string
    title: string
    depositors?: number
    createdAt?: Date | string
  }

  export type TeamOperationUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    depositors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutOperationsNestedInput
  }

  export type TeamOperationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    depositors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamOperationCreateManyInput = {
    id?: number
    teamId: number
    platform: string
    network: string
    title: string
    depositors?: number
    createdAt?: Date | string
  }

  export type TeamOperationUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    depositors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamOperationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    depositors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamGoalCreateInput = {
    platform: string
    target: number
    status?: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutGoalsInput
  }

  export type TeamGoalUncheckedCreateInput = {
    id?: number
    teamId: number
    platform: string
    target: number
    status?: string
    createdAt?: Date | string
  }

  export type TeamGoalUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type TeamGoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamGoalCreateManyInput = {
    id?: number
    teamId: number
    platform: string
    target: number
    status?: string
    createdAt?: Date | string
  }

  export type TeamGoalUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamGoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRemittanceCreateInput = {
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    operator: UserCreateNestedOneWithoutRemittancesInput
    team: TeamCreateNestedOneWithoutRemittancesInput
  }

  export type TeamRemittanceUncheckedCreateInput = {
    id?: number
    teamId: number
    operatorId: number
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TeamRemittanceUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: UserUpdateOneRequiredWithoutRemittancesNestedInput
    team?: TeamUpdateOneRequiredWithoutRemittancesNestedInput
  }

  export type TeamRemittanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRemittanceCreateManyInput = {
    id?: number
    teamId: number
    operatorId: number
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TeamRemittanceUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRemittanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySheetCreateInput = {
    name: string
    proxyCost?: number
    smsCost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DailyRecordCreateNestedManyWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetsInput
  }

  export type DailySheetUncheckedCreateInput = {
    id?: number
    name: string
    proxyCost?: number
    smsCost?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DailyRecordUncheckedCreateNestedManyWithoutSheetInput
  }

  export type DailySheetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DailyRecordUpdateManyWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type DailySheetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DailyRecordUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type DailySheetCreateManyInput = {
    id?: number
    name: string
    proxyCost?: number
    smsCost?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailySheetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySheetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordCreateInput = {
    date?: Date | string
    platform: string
    investment: number
    withdraw: number
    cycles: string
    createdAt?: Date | string
    profit?: number
    status?: string
    teamId?: number | null
    sheet: DailySheetCreateNestedOneWithoutRecordsInput
  }

  export type DailyRecordUncheckedCreateInput = {
    id?: number
    date?: Date | string
    platform: string
    investment: number
    withdraw: number
    cycles: string
    sheetId: number
    createdAt?: Date | string
    profit?: number
    status?: string
    teamId?: number | null
  }

  export type DailyRecordUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    investment?: FloatFieldUpdateOperationsInput | number
    withdraw?: FloatFieldUpdateOperationsInput | number
    cycles?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profit?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    sheet?: DailySheetUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type DailyRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    investment?: FloatFieldUpdateOperationsInput | number
    withdraw?: FloatFieldUpdateOperationsInput | number
    cycles?: StringFieldUpdateOperationsInput | string
    sheetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profit?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DailyRecordCreateManyInput = {
    id?: number
    date?: Date | string
    platform: string
    investment: number
    withdraw: number
    cycles: string
    sheetId: number
    createdAt?: Date | string
    profit?: number
    status?: string
    teamId?: number | null
  }

  export type DailyRecordUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    investment?: FloatFieldUpdateOperationsInput | number
    withdraw?: FloatFieldUpdateOperationsInput | number
    cycles?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profit?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DailyRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    investment?: FloatFieldUpdateOperationsInput | number
    withdraw?: FloatFieldUpdateOperationsInput | number
    cycles?: StringFieldUpdateOperationsInput | string
    sheetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profit?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StatisticCreateInput = {
    clicks?: number
    revenue?: number
    leads?: number
    date?: Date | string
    user: UserCreateNestedOneWithoutStatisticsInput
  }

  export type StatisticUncheckedCreateInput = {
    id?: number
    userId: number
    clicks?: number
    revenue?: number
    leads?: number
    date?: Date | string
  }

  export type StatisticUpdateInput = {
    clicks?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type StatisticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticCreateManyInput = {
    id?: number
    userId: number
    clicks?: number
    revenue?: number
    leads?: number
    date?: Date | string
  }

  export type StatisticUpdateManyMutationInput = {
    clicks?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    actionType: string
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    userId: number
    actionType: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    actionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: number
    userId: number
    actionType: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    actionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    level?: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogUncheckedCreateInput = {
    id?: number
    level?: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogUpdateInput = {
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: number
    level?: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    title: string
    target: number
    current?: number
    deadline: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: number
    title: string
    target: number
    current?: number
    deadline: string
    userId: number
    createdAt?: Date | string
  }

  export type GoalUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    deadline?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    deadline?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyInput = {
    id?: number
    title: string
    target: number
    current?: number
    deadline: string
    userId: number
    createdAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    deadline?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    deadline?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    name: string
    amount: number
    category: string
    date: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: number
    name: string
    amount: number
    category: string
    date: string
    userId: number
    createdAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: number
    name: string
    amount: number
    category: string
    date: string
    userId: number
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type DailySheetListRelationFilter = {
    every?: DailySheetWhereInput
    some?: DailySheetWhereInput
    none?: DailySheetWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type StatisticListRelationFilter = {
    every?: StatisticWhereInput
    some?: StatisticWhereInput
    none?: StatisticWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type TeamRemittanceListRelationFilter = {
    every?: TeamRemittanceWhereInput
    some?: TeamRemittanceWhereInput
    none?: TeamRemittanceWhereInput
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailySheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamRemittanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamGoalListRelationFilter = {
    every?: TeamGoalWhereInput
    some?: TeamGoalWhereInput
    none?: TeamGoalWhereInput
  }

  export type TeamOperationListRelationFilter = {
    every?: TeamOperationWhereInput
    some?: TeamOperationWhereInput
    none?: TeamOperationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeamGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    instagram?: SortOrder
    color?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    instagram?: SortOrder
    color?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    instagram?: SortOrder
    color?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMemberTeamIdUserIdCompoundUniqueInput = {
    teamId: number
    userId: number
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type TeamOperationCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    network?: SortOrder
    title?: SortOrder
    depositors?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamOperationAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    depositors?: SortOrder
  }

  export type TeamOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    network?: SortOrder
    title?: SortOrder
    depositors?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamOperationMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    network?: SortOrder
    title?: SortOrder
    depositors?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamOperationSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    depositors?: SortOrder
  }

  export type TeamGoalCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    target?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamGoalAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    target?: SortOrder
  }

  export type TeamGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    target?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamGoalMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    platform?: SortOrder
    target?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamGoalSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    target?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TeamRemittanceCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    operatorId?: SortOrder
    platform?: SortOrder
    value?: SortOrder
    observation?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamRemittanceAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    operatorId?: SortOrder
    value?: SortOrder
  }

  export type TeamRemittanceMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    operatorId?: SortOrder
    platform?: SortOrder
    value?: SortOrder
    observation?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamRemittanceMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    operatorId?: SortOrder
    platform?: SortOrder
    value?: SortOrder
    observation?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamRemittanceSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    operatorId?: SortOrder
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DailyRecordListRelationFilter = {
    every?: DailyRecordWhereInput
    some?: DailyRecordWhereInput
    none?: DailyRecordWhereInput
  }

  export type DailyRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailySheetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proxyCost?: SortOrder
    smsCost?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailySheetAvgOrderByAggregateInput = {
    id?: SortOrder
    proxyCost?: SortOrder
    smsCost?: SortOrder
    userId?: SortOrder
  }

  export type DailySheetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proxyCost?: SortOrder
    smsCost?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailySheetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proxyCost?: SortOrder
    smsCost?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailySheetSumOrderByAggregateInput = {
    id?: SortOrder
    proxyCost?: SortOrder
    smsCost?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DailySheetRelationFilter = {
    is?: DailySheetWhereInput
    isNot?: DailySheetWhereInput
  }

  export type DailyRecordCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    investment?: SortOrder
    withdraw?: SortOrder
    cycles?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
  }

  export type DailyRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    investment?: SortOrder
    withdraw?: SortOrder
    sheetId?: SortOrder
    profit?: SortOrder
    teamId?: SortOrder
  }

  export type DailyRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    investment?: SortOrder
    withdraw?: SortOrder
    cycles?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
  }

  export type DailyRecordMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    investment?: SortOrder
    withdraw?: SortOrder
    cycles?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
  }

  export type DailyRecordSumOrderByAggregateInput = {
    id?: SortOrder
    investment?: SortOrder
    withdraw?: SortOrder
    sheetId?: SortOrder
    profit?: SortOrder
    teamId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StatisticCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clicks?: SortOrder
    revenue?: SortOrder
    leads?: SortOrder
    date?: SortOrder
  }

  export type StatisticAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clicks?: SortOrder
    revenue?: SortOrder
    leads?: SortOrder
  }

  export type StatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clicks?: SortOrder
    revenue?: SortOrder
    leads?: SortOrder
    date?: SortOrder
  }

  export type StatisticMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clicks?: SortOrder
    revenue?: SortOrder
    leads?: SortOrder
    date?: SortOrder
  }

  export type StatisticSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clicks?: SortOrder
    revenue?: SortOrder
    leads?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    current?: SortOrder
    deadline?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    current?: SortOrder
    userId?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    current?: SortOrder
    deadline?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    current?: SortOrder
    deadline?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    current?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type DailySheetCreateNestedManyWithoutUserInput = {
    create?: XOR<DailySheetCreateWithoutUserInput, DailySheetUncheckedCreateWithoutUserInput> | DailySheetCreateWithoutUserInput[] | DailySheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySheetCreateOrConnectWithoutUserInput | DailySheetCreateOrConnectWithoutUserInput[]
    createMany?: DailySheetCreateManyUserInputEnvelope
    connect?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type StatisticCreateNestedManyWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamRemittanceCreateNestedManyWithoutOperatorInput = {
    create?: XOR<TeamRemittanceCreateWithoutOperatorInput, TeamRemittanceUncheckedCreateWithoutOperatorInput> | TeamRemittanceCreateWithoutOperatorInput[] | TeamRemittanceUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutOperatorInput | TeamRemittanceCreateOrConnectWithoutOperatorInput[]
    createMany?: TeamRemittanceCreateManyOperatorInputEnvelope
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type DailySheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailySheetCreateWithoutUserInput, DailySheetUncheckedCreateWithoutUserInput> | DailySheetCreateWithoutUserInput[] | DailySheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySheetCreateOrConnectWithoutUserInput | DailySheetCreateOrConnectWithoutUserInput[]
    createMany?: DailySheetCreateManyUserInputEnvelope
    connect?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type StatisticUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<TeamRemittanceCreateWithoutOperatorInput, TeamRemittanceUncheckedCreateWithoutOperatorInput> | TeamRemittanceCreateWithoutOperatorInput[] | TeamRemittanceUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutOperatorInput | TeamRemittanceCreateOrConnectWithoutOperatorInput[]
    createMany?: TeamRemittanceCreateManyOperatorInputEnvelope
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DailySheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailySheetCreateWithoutUserInput, DailySheetUncheckedCreateWithoutUserInput> | DailySheetCreateWithoutUserInput[] | DailySheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySheetCreateOrConnectWithoutUserInput | DailySheetCreateOrConnectWithoutUserInput[]
    upsert?: DailySheetUpsertWithWhereUniqueWithoutUserInput | DailySheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailySheetCreateManyUserInputEnvelope
    set?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    disconnect?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    delete?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    connect?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    update?: DailySheetUpdateWithWhereUniqueWithoutUserInput | DailySheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailySheetUpdateManyWithWhereWithoutUserInput | DailySheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailySheetScalarWhereInput | DailySheetScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type StatisticUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutUserInput | StatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutUserInput | StatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutUserInput | StatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOwnerInput | TeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOwnerInput | TeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOwnerInput | TeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamRemittanceUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<TeamRemittanceCreateWithoutOperatorInput, TeamRemittanceUncheckedCreateWithoutOperatorInput> | TeamRemittanceCreateWithoutOperatorInput[] | TeamRemittanceUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutOperatorInput | TeamRemittanceCreateOrConnectWithoutOperatorInput[]
    upsert?: TeamRemittanceUpsertWithWhereUniqueWithoutOperatorInput | TeamRemittanceUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: TeamRemittanceCreateManyOperatorInputEnvelope
    set?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    disconnect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    delete?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    update?: TeamRemittanceUpdateWithWhereUniqueWithoutOperatorInput | TeamRemittanceUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: TeamRemittanceUpdateManyWithWhereWithoutOperatorInput | TeamRemittanceUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: TeamRemittanceScalarWhereInput | TeamRemittanceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DailySheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailySheetCreateWithoutUserInput, DailySheetUncheckedCreateWithoutUserInput> | DailySheetCreateWithoutUserInput[] | DailySheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySheetCreateOrConnectWithoutUserInput | DailySheetCreateOrConnectWithoutUserInput[]
    upsert?: DailySheetUpsertWithWhereUniqueWithoutUserInput | DailySheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailySheetCreateManyUserInputEnvelope
    set?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    disconnect?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    delete?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    connect?: DailySheetWhereUniqueInput | DailySheetWhereUniqueInput[]
    update?: DailySheetUpdateWithWhereUniqueWithoutUserInput | DailySheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailySheetUpdateManyWithWhereWithoutUserInput | DailySheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailySheetScalarWhereInput | DailySheetScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type StatisticUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutUserInput | StatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutUserInput | StatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutUserInput | StatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOwnerInput | TeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOwnerInput | TeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOwnerInput | TeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<TeamRemittanceCreateWithoutOperatorInput, TeamRemittanceUncheckedCreateWithoutOperatorInput> | TeamRemittanceCreateWithoutOperatorInput[] | TeamRemittanceUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutOperatorInput | TeamRemittanceCreateOrConnectWithoutOperatorInput[]
    upsert?: TeamRemittanceUpsertWithWhereUniqueWithoutOperatorInput | TeamRemittanceUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: TeamRemittanceCreateManyOperatorInputEnvelope
    set?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    disconnect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    delete?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    update?: TeamRemittanceUpdateWithWhereUniqueWithoutOperatorInput | TeamRemittanceUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: TeamRemittanceUpdateManyWithWhereWithoutOperatorInput | TeamRemittanceUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: TeamRemittanceScalarWhereInput | TeamRemittanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedTeamsInput = {
    create?: XOR<UserCreateWithoutOwnedTeamsInput, UserUncheckedCreateWithoutOwnedTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamGoalCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamGoalCreateWithoutTeamInput, TeamGoalUncheckedCreateWithoutTeamInput> | TeamGoalCreateWithoutTeamInput[] | TeamGoalUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGoalCreateOrConnectWithoutTeamInput | TeamGoalCreateOrConnectWithoutTeamInput[]
    createMany?: TeamGoalCreateManyTeamInputEnvelope
    connect?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamOperationCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamOperationCreateWithoutTeamInput, TeamOperationUncheckedCreateWithoutTeamInput> | TeamOperationCreateWithoutTeamInput[] | TeamOperationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOperationCreateOrConnectWithoutTeamInput | TeamOperationCreateOrConnectWithoutTeamInput[]
    createMany?: TeamOperationCreateManyTeamInputEnvelope
    connect?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
  }

  export type TeamRemittanceCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamRemittanceCreateWithoutTeamInput, TeamRemittanceUncheckedCreateWithoutTeamInput> | TeamRemittanceCreateWithoutTeamInput[] | TeamRemittanceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutTeamInput | TeamRemittanceCreateOrConnectWithoutTeamInput[]
    createMany?: TeamRemittanceCreateManyTeamInputEnvelope
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
  }

  export type TeamGoalUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamGoalCreateWithoutTeamInput, TeamGoalUncheckedCreateWithoutTeamInput> | TeamGoalCreateWithoutTeamInput[] | TeamGoalUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGoalCreateOrConnectWithoutTeamInput | TeamGoalCreateOrConnectWithoutTeamInput[]
    createMany?: TeamGoalCreateManyTeamInputEnvelope
    connect?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamOperationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamOperationCreateWithoutTeamInput, TeamOperationUncheckedCreateWithoutTeamInput> | TeamOperationCreateWithoutTeamInput[] | TeamOperationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOperationCreateOrConnectWithoutTeamInput | TeamOperationCreateOrConnectWithoutTeamInput[]
    createMany?: TeamOperationCreateManyTeamInputEnvelope
    connect?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
  }

  export type TeamRemittanceUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamRemittanceCreateWithoutTeamInput, TeamRemittanceUncheckedCreateWithoutTeamInput> | TeamRemittanceCreateWithoutTeamInput[] | TeamRemittanceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutTeamInput | TeamRemittanceCreateOrConnectWithoutTeamInput[]
    createMany?: TeamRemittanceCreateManyTeamInputEnvelope
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutOwnedTeamsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedTeamsInput, UserUncheckedCreateWithoutOwnedTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedTeamsInput
    upsert?: UserUpsertWithoutOwnedTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedTeamsInput, UserUpdateWithoutOwnedTeamsInput>, UserUncheckedUpdateWithoutOwnedTeamsInput>
  }

  export type TeamGoalUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamGoalCreateWithoutTeamInput, TeamGoalUncheckedCreateWithoutTeamInput> | TeamGoalCreateWithoutTeamInput[] | TeamGoalUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGoalCreateOrConnectWithoutTeamInput | TeamGoalCreateOrConnectWithoutTeamInput[]
    upsert?: TeamGoalUpsertWithWhereUniqueWithoutTeamInput | TeamGoalUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamGoalCreateManyTeamInputEnvelope
    set?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    disconnect?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    delete?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    connect?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    update?: TeamGoalUpdateWithWhereUniqueWithoutTeamInput | TeamGoalUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamGoalUpdateManyWithWhereWithoutTeamInput | TeamGoalUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamGoalScalarWhereInput | TeamGoalScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamOperationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamOperationCreateWithoutTeamInput, TeamOperationUncheckedCreateWithoutTeamInput> | TeamOperationCreateWithoutTeamInput[] | TeamOperationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOperationCreateOrConnectWithoutTeamInput | TeamOperationCreateOrConnectWithoutTeamInput[]
    upsert?: TeamOperationUpsertWithWhereUniqueWithoutTeamInput | TeamOperationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamOperationCreateManyTeamInputEnvelope
    set?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    disconnect?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    delete?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    connect?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    update?: TeamOperationUpdateWithWhereUniqueWithoutTeamInput | TeamOperationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamOperationUpdateManyWithWhereWithoutTeamInput | TeamOperationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamOperationScalarWhereInput | TeamOperationScalarWhereInput[]
  }

  export type TeamRemittanceUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamRemittanceCreateWithoutTeamInput, TeamRemittanceUncheckedCreateWithoutTeamInput> | TeamRemittanceCreateWithoutTeamInput[] | TeamRemittanceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutTeamInput | TeamRemittanceCreateOrConnectWithoutTeamInput[]
    upsert?: TeamRemittanceUpsertWithWhereUniqueWithoutTeamInput | TeamRemittanceUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamRemittanceCreateManyTeamInputEnvelope
    set?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    disconnect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    delete?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    update?: TeamRemittanceUpdateWithWhereUniqueWithoutTeamInput | TeamRemittanceUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamRemittanceUpdateManyWithWhereWithoutTeamInput | TeamRemittanceUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamRemittanceScalarWhereInput | TeamRemittanceScalarWhereInput[]
  }

  export type TeamGoalUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamGoalCreateWithoutTeamInput, TeamGoalUncheckedCreateWithoutTeamInput> | TeamGoalCreateWithoutTeamInput[] | TeamGoalUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGoalCreateOrConnectWithoutTeamInput | TeamGoalCreateOrConnectWithoutTeamInput[]
    upsert?: TeamGoalUpsertWithWhereUniqueWithoutTeamInput | TeamGoalUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamGoalCreateManyTeamInputEnvelope
    set?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    disconnect?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    delete?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    connect?: TeamGoalWhereUniqueInput | TeamGoalWhereUniqueInput[]
    update?: TeamGoalUpdateWithWhereUniqueWithoutTeamInput | TeamGoalUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamGoalUpdateManyWithWhereWithoutTeamInput | TeamGoalUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamGoalScalarWhereInput | TeamGoalScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamOperationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamOperationCreateWithoutTeamInput, TeamOperationUncheckedCreateWithoutTeamInput> | TeamOperationCreateWithoutTeamInput[] | TeamOperationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOperationCreateOrConnectWithoutTeamInput | TeamOperationCreateOrConnectWithoutTeamInput[]
    upsert?: TeamOperationUpsertWithWhereUniqueWithoutTeamInput | TeamOperationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamOperationCreateManyTeamInputEnvelope
    set?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    disconnect?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    delete?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    connect?: TeamOperationWhereUniqueInput | TeamOperationWhereUniqueInput[]
    update?: TeamOperationUpdateWithWhereUniqueWithoutTeamInput | TeamOperationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamOperationUpdateManyWithWhereWithoutTeamInput | TeamOperationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamOperationScalarWhereInput | TeamOperationScalarWhereInput[]
  }

  export type TeamRemittanceUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamRemittanceCreateWithoutTeamInput, TeamRemittanceUncheckedCreateWithoutTeamInput> | TeamRemittanceCreateWithoutTeamInput[] | TeamRemittanceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRemittanceCreateOrConnectWithoutTeamInput | TeamRemittanceCreateOrConnectWithoutTeamInput[]
    upsert?: TeamRemittanceUpsertWithWhereUniqueWithoutTeamInput | TeamRemittanceUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamRemittanceCreateManyTeamInputEnvelope
    set?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    disconnect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    delete?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    connect?: TeamRemittanceWhereUniqueInput | TeamRemittanceWhereUniqueInput[]
    update?: TeamRemittanceUpdateWithWhereUniqueWithoutTeamInput | TeamRemittanceUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamRemittanceUpdateManyWithWhereWithoutTeamInput | TeamRemittanceUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamRemittanceScalarWhereInput | TeamRemittanceScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamMembershipsInput = {
    create?: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTeamMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembershipsInput
    upsert?: UserUpsertWithoutTeamMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMembershipsInput, UserUpdateWithoutTeamMembershipsInput>, UserUncheckedUpdateWithoutTeamMembershipsInput>
  }

  export type TeamCreateNestedOneWithoutOperationsInput = {
    create?: XOR<TeamCreateWithoutOperationsInput, TeamUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutOperationsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<TeamCreateWithoutOperationsInput, TeamUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutOperationsInput
    upsert?: TeamUpsertWithoutOperationsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutOperationsInput, TeamUpdateWithoutOperationsInput>, TeamUncheckedUpdateWithoutOperationsInput>
  }

  export type TeamCreateNestedOneWithoutGoalsInput = {
    create?: XOR<TeamCreateWithoutGoalsInput, TeamUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutGoalsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<TeamCreateWithoutGoalsInput, TeamUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutGoalsInput
    upsert?: TeamUpsertWithoutGoalsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutGoalsInput, TeamUpdateWithoutGoalsInput>, TeamUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutRemittancesInput = {
    create?: XOR<UserCreateWithoutRemittancesInput, UserUncheckedCreateWithoutRemittancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemittancesInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutRemittancesInput = {
    create?: XOR<TeamCreateWithoutRemittancesInput, TeamUncheckedCreateWithoutRemittancesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutRemittancesInput
    connect?: TeamWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRemittancesNestedInput = {
    create?: XOR<UserCreateWithoutRemittancesInput, UserUncheckedCreateWithoutRemittancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemittancesInput
    upsert?: UserUpsertWithoutRemittancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRemittancesInput, UserUpdateWithoutRemittancesInput>, UserUncheckedUpdateWithoutRemittancesInput>
  }

  export type TeamUpdateOneRequiredWithoutRemittancesNestedInput = {
    create?: XOR<TeamCreateWithoutRemittancesInput, TeamUncheckedCreateWithoutRemittancesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutRemittancesInput
    upsert?: TeamUpsertWithoutRemittancesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutRemittancesInput, TeamUpdateWithoutRemittancesInput>, TeamUncheckedUpdateWithoutRemittancesInput>
  }

  export type DailyRecordCreateNestedManyWithoutSheetInput = {
    create?: XOR<DailyRecordCreateWithoutSheetInput, DailyRecordUncheckedCreateWithoutSheetInput> | DailyRecordCreateWithoutSheetInput[] | DailyRecordUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutSheetInput | DailyRecordCreateOrConnectWithoutSheetInput[]
    createMany?: DailyRecordCreateManySheetInputEnvelope
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSheetsInput = {
    create?: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetsInput
    connect?: UserWhereUniqueInput
  }

  export type DailyRecordUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<DailyRecordCreateWithoutSheetInput, DailyRecordUncheckedCreateWithoutSheetInput> | DailyRecordCreateWithoutSheetInput[] | DailyRecordUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutSheetInput | DailyRecordCreateOrConnectWithoutSheetInput[]
    createMany?: DailyRecordCreateManySheetInputEnvelope
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
  }

  export type DailyRecordUpdateManyWithoutSheetNestedInput = {
    create?: XOR<DailyRecordCreateWithoutSheetInput, DailyRecordUncheckedCreateWithoutSheetInput> | DailyRecordCreateWithoutSheetInput[] | DailyRecordUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutSheetInput | DailyRecordCreateOrConnectWithoutSheetInput[]
    upsert?: DailyRecordUpsertWithWhereUniqueWithoutSheetInput | DailyRecordUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: DailyRecordCreateManySheetInputEnvelope
    set?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    disconnect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    delete?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    update?: DailyRecordUpdateWithWhereUniqueWithoutSheetInput | DailyRecordUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: DailyRecordUpdateManyWithWhereWithoutSheetInput | DailyRecordUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetsInput
    upsert?: UserUpsertWithoutSheetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSheetsInput, UserUpdateWithoutSheetsInput>, UserUncheckedUpdateWithoutSheetsInput>
  }

  export type DailyRecordUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<DailyRecordCreateWithoutSheetInput, DailyRecordUncheckedCreateWithoutSheetInput> | DailyRecordCreateWithoutSheetInput[] | DailyRecordUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutSheetInput | DailyRecordCreateOrConnectWithoutSheetInput[]
    upsert?: DailyRecordUpsertWithWhereUniqueWithoutSheetInput | DailyRecordUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: DailyRecordCreateManySheetInputEnvelope
    set?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    disconnect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    delete?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    update?: DailyRecordUpdateWithWhereUniqueWithoutSheetInput | DailyRecordUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: DailyRecordUpdateManyWithWhereWithoutSheetInput | DailyRecordUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
  }

  export type DailySheetCreateNestedOneWithoutRecordsInput = {
    create?: XOR<DailySheetCreateWithoutRecordsInput, DailySheetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DailySheetCreateOrConnectWithoutRecordsInput
    connect?: DailySheetWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailySheetUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<DailySheetCreateWithoutRecordsInput, DailySheetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DailySheetCreateOrConnectWithoutRecordsInput
    upsert?: DailySheetUpsertWithoutRecordsInput
    connect?: DailySheetWhereUniqueInput
    update?: XOR<XOR<DailySheetUpdateToOneWithWhereWithoutRecordsInput, DailySheetUpdateWithoutRecordsInput>, DailySheetUncheckedUpdateWithoutRecordsInput>
  }

  export type UserCreateNestedOneWithoutStatisticsInput = {
    create?: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatisticsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatisticsNestedInput = {
    create?: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatisticsInput
    upsert?: UserUpsertWithoutStatisticsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatisticsInput, UserUpdateWithoutStatisticsInput>, UserUncheckedUpdateWithoutStatisticsInput>
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityCreateWithoutUserInput = {
    actionType: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: number
    actionType: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailySheetCreateWithoutUserInput = {
    name: string
    proxyCost?: number
    smsCost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DailyRecordCreateNestedManyWithoutSheetInput
  }

  export type DailySheetUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    proxyCost?: number
    smsCost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DailyRecordUncheckedCreateNestedManyWithoutSheetInput
  }

  export type DailySheetCreateOrConnectWithoutUserInput = {
    where: DailySheetWhereUniqueInput
    create: XOR<DailySheetCreateWithoutUserInput, DailySheetUncheckedCreateWithoutUserInput>
  }

  export type DailySheetCreateManyUserInputEnvelope = {
    data: DailySheetCreateManyUserInput | DailySheetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutUserInput = {
    name: string
    amount: number
    category: string
    date: string
    createdAt?: Date | string
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    amount: number
    category: string
    date: string
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    title: string
    target: number
    current?: number
    deadline: string
    createdAt?: Date | string
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    target: number
    current?: number
    deadline: string
    createdAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatisticCreateWithoutUserInput = {
    clicks?: number
    revenue?: number
    leads?: number
    date?: Date | string
  }

  export type StatisticUncheckedCreateWithoutUserInput = {
    id?: number
    clicks?: number
    revenue?: number
    leads?: number
    date?: Date | string
  }

  export type StatisticCreateOrConnectWithoutUserInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
  }

  export type StatisticCreateManyUserInputEnvelope = {
    data: StatisticCreateManyUserInput | StatisticCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutOwnerInput = {
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
    goals?: TeamGoalCreateNestedManyWithoutTeamInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    operations?: TeamOperationCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
    goals?: TeamGoalUncheckedCreateNestedManyWithoutTeamInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    operations?: TeamOperationUncheckedCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
  }

  export type TeamCreateManyOwnerInputEnvelope = {
    data: TeamCreateManyOwnerInput | TeamCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutUserInput = {
    role?: string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: number
    teamId: number
    role?: string
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamRemittanceCreateWithoutOperatorInput = {
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutRemittancesInput
  }

  export type TeamRemittanceUncheckedCreateWithoutOperatorInput = {
    id?: number
    teamId: number
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TeamRemittanceCreateOrConnectWithoutOperatorInput = {
    where: TeamRemittanceWhereUniqueInput
    create: XOR<TeamRemittanceCreateWithoutOperatorInput, TeamRemittanceUncheckedCreateWithoutOperatorInput>
  }

  export type TeamRemittanceCreateManyOperatorInputEnvelope = {
    data: TeamRemittanceCreateManyOperatorInput | TeamRemittanceCreateManyOperatorInput[]
    skipDuplicates?: boolean
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: IntFilter<"Activity"> | number
    userId?: IntFilter<"Activity"> | number
    actionType?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type DailySheetUpsertWithWhereUniqueWithoutUserInput = {
    where: DailySheetWhereUniqueInput
    update: XOR<DailySheetUpdateWithoutUserInput, DailySheetUncheckedUpdateWithoutUserInput>
    create: XOR<DailySheetCreateWithoutUserInput, DailySheetUncheckedCreateWithoutUserInput>
  }

  export type DailySheetUpdateWithWhereUniqueWithoutUserInput = {
    where: DailySheetWhereUniqueInput
    data: XOR<DailySheetUpdateWithoutUserInput, DailySheetUncheckedUpdateWithoutUserInput>
  }

  export type DailySheetUpdateManyWithWhereWithoutUserInput = {
    where: DailySheetScalarWhereInput
    data: XOR<DailySheetUpdateManyMutationInput, DailySheetUncheckedUpdateManyWithoutUserInput>
  }

  export type DailySheetScalarWhereInput = {
    AND?: DailySheetScalarWhereInput | DailySheetScalarWhereInput[]
    OR?: DailySheetScalarWhereInput[]
    NOT?: DailySheetScalarWhereInput | DailySheetScalarWhereInput[]
    id?: IntFilter<"DailySheet"> | number
    name?: StringFilter<"DailySheet"> | string
    proxyCost?: FloatFilter<"DailySheet"> | number
    smsCost?: FloatFilter<"DailySheet"> | number
    userId?: IntFilter<"DailySheet"> | number
    createdAt?: DateTimeFilter<"DailySheet"> | Date | string
    updatedAt?: DateTimeFilter<"DailySheet"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: IntFilter<"Expense"> | number
    name?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    date?: StringFilter<"Expense"> | string
    userId?: IntFilter<"Expense"> | number
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: IntFilter<"Goal"> | number
    title?: StringFilter<"Goal"> | string
    target?: FloatFilter<"Goal"> | number
    current?: FloatFilter<"Goal"> | number
    deadline?: StringFilter<"Goal"> | string
    userId?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type StatisticUpsertWithWhereUniqueWithoutUserInput = {
    where: StatisticWhereUniqueInput
    update: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
  }

  export type StatisticUpdateWithWhereUniqueWithoutUserInput = {
    where: StatisticWhereUniqueInput
    data: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
  }

  export type StatisticUpdateManyWithWhereWithoutUserInput = {
    where: StatisticScalarWhereInput
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyWithoutUserInput>
  }

  export type StatisticScalarWhereInput = {
    AND?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    OR?: StatisticScalarWhereInput[]
    NOT?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    id?: IntFilter<"Statistic"> | number
    userId?: IntFilter<"Statistic"> | number
    clicks?: IntFilter<"Statistic"> | number
    revenue?: FloatFilter<"Statistic"> | number
    leads?: IntFilter<"Statistic"> | number
    date?: DateTimeFilter<"Statistic"> | Date | string
  }

  export type TeamUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>
  }

  export type TeamUpdateManyWithWhereWithoutOwnerInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    code?: StringFilter<"Team"> | string
    instagram?: StringNullableFilter<"Team"> | string | null
    color?: StringNullableFilter<"Team"> | string | null
    ownerId?: IntFilter<"Team"> | number
    createdAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    teamId?: IntFilter<"TeamMember"> | number
    userId?: IntFilter<"TeamMember"> | number
    role?: StringFilter<"TeamMember"> | string
  }

  export type TeamRemittanceUpsertWithWhereUniqueWithoutOperatorInput = {
    where: TeamRemittanceWhereUniqueInput
    update: XOR<TeamRemittanceUpdateWithoutOperatorInput, TeamRemittanceUncheckedUpdateWithoutOperatorInput>
    create: XOR<TeamRemittanceCreateWithoutOperatorInput, TeamRemittanceUncheckedCreateWithoutOperatorInput>
  }

  export type TeamRemittanceUpdateWithWhereUniqueWithoutOperatorInput = {
    where: TeamRemittanceWhereUniqueInput
    data: XOR<TeamRemittanceUpdateWithoutOperatorInput, TeamRemittanceUncheckedUpdateWithoutOperatorInput>
  }

  export type TeamRemittanceUpdateManyWithWhereWithoutOperatorInput = {
    where: TeamRemittanceScalarWhereInput
    data: XOR<TeamRemittanceUpdateManyMutationInput, TeamRemittanceUncheckedUpdateManyWithoutOperatorInput>
  }

  export type TeamRemittanceScalarWhereInput = {
    AND?: TeamRemittanceScalarWhereInput | TeamRemittanceScalarWhereInput[]
    OR?: TeamRemittanceScalarWhereInput[]
    NOT?: TeamRemittanceScalarWhereInput | TeamRemittanceScalarWhereInput[]
    id?: IntFilter<"TeamRemittance"> | number
    teamId?: IntFilter<"TeamRemittance"> | number
    operatorId?: IntFilter<"TeamRemittance"> | number
    platform?: StringFilter<"TeamRemittance"> | string
    value?: FloatFilter<"TeamRemittance"> | number
    observation?: StringNullableFilter<"TeamRemittance"> | string | null
    date?: DateTimeFilter<"TeamRemittance"> | Date | string
    createdAt?: DateTimeFilter<"TeamRemittance"> | Date | string
  }

  export type UserCreateWithoutOwnedTeamsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateWithoutOwnedTeamsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserCreateOrConnectWithoutOwnedTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedTeamsInput, UserUncheckedCreateWithoutOwnedTeamsInput>
  }

  export type TeamGoalCreateWithoutTeamInput = {
    platform: string
    target: number
    status?: string
    createdAt?: Date | string
  }

  export type TeamGoalUncheckedCreateWithoutTeamInput = {
    id?: number
    platform: string
    target: number
    status?: string
    createdAt?: Date | string
  }

  export type TeamGoalCreateOrConnectWithoutTeamInput = {
    where: TeamGoalWhereUniqueInput
    create: XOR<TeamGoalCreateWithoutTeamInput, TeamGoalUncheckedCreateWithoutTeamInput>
  }

  export type TeamGoalCreateManyTeamInputEnvelope = {
    data: TeamGoalCreateManyTeamInput | TeamGoalCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutTeamInput = {
    role?: string
    user: UserCreateNestedOneWithoutTeamMembershipsInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: number
    userId: number
    role?: string
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamOperationCreateWithoutTeamInput = {
    platform: string
    network: string
    title: string
    depositors?: number
    createdAt?: Date | string
  }

  export type TeamOperationUncheckedCreateWithoutTeamInput = {
    id?: number
    platform: string
    network: string
    title: string
    depositors?: number
    createdAt?: Date | string
  }

  export type TeamOperationCreateOrConnectWithoutTeamInput = {
    where: TeamOperationWhereUniqueInput
    create: XOR<TeamOperationCreateWithoutTeamInput, TeamOperationUncheckedCreateWithoutTeamInput>
  }

  export type TeamOperationCreateManyTeamInputEnvelope = {
    data: TeamOperationCreateManyTeamInput | TeamOperationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamRemittanceCreateWithoutTeamInput = {
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    operator: UserCreateNestedOneWithoutRemittancesInput
  }

  export type TeamRemittanceUncheckedCreateWithoutTeamInput = {
    id?: number
    operatorId: number
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TeamRemittanceCreateOrConnectWithoutTeamInput = {
    where: TeamRemittanceWhereUniqueInput
    create: XOR<TeamRemittanceCreateWithoutTeamInput, TeamRemittanceUncheckedCreateWithoutTeamInput>
  }

  export type TeamRemittanceCreateManyTeamInputEnvelope = {
    data: TeamRemittanceCreateManyTeamInput | TeamRemittanceCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedTeamsInput = {
    update: XOR<UserUpdateWithoutOwnedTeamsInput, UserUncheckedUpdateWithoutOwnedTeamsInput>
    create: XOR<UserCreateWithoutOwnedTeamsInput, UserUncheckedCreateWithoutOwnedTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedTeamsInput, UserUncheckedUpdateWithoutOwnedTeamsInput>
  }

  export type UserUpdateWithoutOwnedTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type TeamGoalUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamGoalWhereUniqueInput
    update: XOR<TeamGoalUpdateWithoutTeamInput, TeamGoalUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamGoalCreateWithoutTeamInput, TeamGoalUncheckedCreateWithoutTeamInput>
  }

  export type TeamGoalUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamGoalWhereUniqueInput
    data: XOR<TeamGoalUpdateWithoutTeamInput, TeamGoalUncheckedUpdateWithoutTeamInput>
  }

  export type TeamGoalUpdateManyWithWhereWithoutTeamInput = {
    where: TeamGoalScalarWhereInput
    data: XOR<TeamGoalUpdateManyMutationInput, TeamGoalUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamGoalScalarWhereInput = {
    AND?: TeamGoalScalarWhereInput | TeamGoalScalarWhereInput[]
    OR?: TeamGoalScalarWhereInput[]
    NOT?: TeamGoalScalarWhereInput | TeamGoalScalarWhereInput[]
    id?: IntFilter<"TeamGoal"> | number
    teamId?: IntFilter<"TeamGoal"> | number
    platform?: StringFilter<"TeamGoal"> | string
    target?: IntFilter<"TeamGoal"> | number
    status?: StringFilter<"TeamGoal"> | string
    createdAt?: DateTimeFilter<"TeamGoal"> | Date | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamOperationUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamOperationWhereUniqueInput
    update: XOR<TeamOperationUpdateWithoutTeamInput, TeamOperationUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamOperationCreateWithoutTeamInput, TeamOperationUncheckedCreateWithoutTeamInput>
  }

  export type TeamOperationUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamOperationWhereUniqueInput
    data: XOR<TeamOperationUpdateWithoutTeamInput, TeamOperationUncheckedUpdateWithoutTeamInput>
  }

  export type TeamOperationUpdateManyWithWhereWithoutTeamInput = {
    where: TeamOperationScalarWhereInput
    data: XOR<TeamOperationUpdateManyMutationInput, TeamOperationUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamOperationScalarWhereInput = {
    AND?: TeamOperationScalarWhereInput | TeamOperationScalarWhereInput[]
    OR?: TeamOperationScalarWhereInput[]
    NOT?: TeamOperationScalarWhereInput | TeamOperationScalarWhereInput[]
    id?: IntFilter<"TeamOperation"> | number
    teamId?: IntFilter<"TeamOperation"> | number
    platform?: StringFilter<"TeamOperation"> | string
    network?: StringFilter<"TeamOperation"> | string
    title?: StringFilter<"TeamOperation"> | string
    depositors?: IntFilter<"TeamOperation"> | number
    createdAt?: DateTimeFilter<"TeamOperation"> | Date | string
  }

  export type TeamRemittanceUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamRemittanceWhereUniqueInput
    update: XOR<TeamRemittanceUpdateWithoutTeamInput, TeamRemittanceUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamRemittanceCreateWithoutTeamInput, TeamRemittanceUncheckedCreateWithoutTeamInput>
  }

  export type TeamRemittanceUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamRemittanceWhereUniqueInput
    data: XOR<TeamRemittanceUpdateWithoutTeamInput, TeamRemittanceUncheckedUpdateWithoutTeamInput>
  }

  export type TeamRemittanceUpdateManyWithWhereWithoutTeamInput = {
    where: TeamRemittanceScalarWhereInput
    data: XOR<TeamRemittanceUpdateManyMutationInput, TeamRemittanceUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamCreateWithoutMembersInput = {
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTeamsInput
    goals?: TeamGoalCreateNestedManyWithoutTeamInput
    operations?: TeamOperationCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    ownerId: number
    createdAt?: Date | string
    goals?: TeamGoalUncheckedCreateNestedManyWithoutTeamInput
    operations?: TeamOperationUncheckedCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTeamMembershipsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateWithoutTeamMembershipsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserCreateOrConnectWithoutTeamMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    goals?: TeamGoalUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: TeamGoalUncheckedUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUncheckedUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamMembershipsInput = {
    update: XOR<UserUpdateWithoutTeamMembershipsInput, UserUncheckedUpdateWithoutTeamMembershipsInput>
    create: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMembershipsInput, UserUncheckedUpdateWithoutTeamMembershipsInput>
  }

  export type UserUpdateWithoutTeamMembershipsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type TeamCreateWithoutOperationsInput = {
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTeamsInput
    goals?: TeamGoalCreateNestedManyWithoutTeamInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutOperationsInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    ownerId: number
    createdAt?: Date | string
    goals?: TeamGoalUncheckedCreateNestedManyWithoutTeamInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutOperationsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutOperationsInput, TeamUncheckedCreateWithoutOperationsInput>
  }

  export type TeamUpsertWithoutOperationsInput = {
    update: XOR<TeamUpdateWithoutOperationsInput, TeamUncheckedUpdateWithoutOperationsInput>
    create: XOR<TeamCreateWithoutOperationsInput, TeamUncheckedCreateWithoutOperationsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutOperationsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutOperationsInput, TeamUncheckedUpdateWithoutOperationsInput>
  }

  export type TeamUpdateWithoutOperationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    goals?: TeamGoalUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutOperationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: TeamGoalUncheckedUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutGoalsInput = {
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTeamsInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    operations?: TeamOperationCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutGoalsInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    ownerId: number
    createdAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    operations?: TeamOperationUncheckedCreateNestedManyWithoutTeamInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutGoalsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutGoalsInput, TeamUncheckedCreateWithoutGoalsInput>
  }

  export type TeamUpsertWithoutGoalsInput = {
    update: XOR<TeamUpdateWithoutGoalsInput, TeamUncheckedUpdateWithoutGoalsInput>
    create: XOR<TeamCreateWithoutGoalsInput, TeamUncheckedCreateWithoutGoalsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutGoalsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutGoalsInput, TeamUncheckedUpdateWithoutGoalsInput>
  }

  export type TeamUpdateWithoutGoalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutGoalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUncheckedUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutRemittancesInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRemittancesInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRemittancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRemittancesInput, UserUncheckedCreateWithoutRemittancesInput>
  }

  export type TeamCreateWithoutRemittancesInput = {
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTeamsInput
    goals?: TeamGoalCreateNestedManyWithoutTeamInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    operations?: TeamOperationCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutRemittancesInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    ownerId: number
    createdAt?: Date | string
    goals?: TeamGoalUncheckedCreateNestedManyWithoutTeamInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    operations?: TeamOperationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutRemittancesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutRemittancesInput, TeamUncheckedCreateWithoutRemittancesInput>
  }

  export type UserUpsertWithoutRemittancesInput = {
    update: XOR<UserUpdateWithoutRemittancesInput, UserUncheckedUpdateWithoutRemittancesInput>
    create: XOR<UserCreateWithoutRemittancesInput, UserUncheckedCreateWithoutRemittancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRemittancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRemittancesInput, UserUncheckedUpdateWithoutRemittancesInput>
  }

  export type UserUpdateWithoutRemittancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRemittancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutRemittancesInput = {
    update: XOR<TeamUpdateWithoutRemittancesInput, TeamUncheckedUpdateWithoutRemittancesInput>
    create: XOR<TeamCreateWithoutRemittancesInput, TeamUncheckedCreateWithoutRemittancesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutRemittancesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutRemittancesInput, TeamUncheckedUpdateWithoutRemittancesInput>
  }

  export type TeamUpdateWithoutRemittancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    goals?: TeamGoalUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutRemittancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: TeamGoalUncheckedUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type DailyRecordCreateWithoutSheetInput = {
    date?: Date | string
    platform: string
    investment: number
    withdraw: number
    cycles: string
    createdAt?: Date | string
    profit?: number
    status?: string
    teamId?: number | null
  }

  export type DailyRecordUncheckedCreateWithoutSheetInput = {
    id?: number
    date?: Date | string
    platform: string
    investment: number
    withdraw: number
    cycles: string
    createdAt?: Date | string
    profit?: number
    status?: string
    teamId?: number | null
  }

  export type DailyRecordCreateOrConnectWithoutSheetInput = {
    where: DailyRecordWhereUniqueInput
    create: XOR<DailyRecordCreateWithoutSheetInput, DailyRecordUncheckedCreateWithoutSheetInput>
  }

  export type DailyRecordCreateManySheetInputEnvelope = {
    data: DailyRecordCreateManySheetInput | DailyRecordCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSheetsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateWithoutSheetsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserCreateOrConnectWithoutSheetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
  }

  export type DailyRecordUpsertWithWhereUniqueWithoutSheetInput = {
    where: DailyRecordWhereUniqueInput
    update: XOR<DailyRecordUpdateWithoutSheetInput, DailyRecordUncheckedUpdateWithoutSheetInput>
    create: XOR<DailyRecordCreateWithoutSheetInput, DailyRecordUncheckedCreateWithoutSheetInput>
  }

  export type DailyRecordUpdateWithWhereUniqueWithoutSheetInput = {
    where: DailyRecordWhereUniqueInput
    data: XOR<DailyRecordUpdateWithoutSheetInput, DailyRecordUncheckedUpdateWithoutSheetInput>
  }

  export type DailyRecordUpdateManyWithWhereWithoutSheetInput = {
    where: DailyRecordScalarWhereInput
    data: XOR<DailyRecordUpdateManyMutationInput, DailyRecordUncheckedUpdateManyWithoutSheetInput>
  }

  export type DailyRecordScalarWhereInput = {
    AND?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
    OR?: DailyRecordScalarWhereInput[]
    NOT?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
    id?: IntFilter<"DailyRecord"> | number
    date?: DateTimeFilter<"DailyRecord"> | Date | string
    platform?: StringFilter<"DailyRecord"> | string
    investment?: FloatFilter<"DailyRecord"> | number
    withdraw?: FloatFilter<"DailyRecord"> | number
    cycles?: StringFilter<"DailyRecord"> | string
    sheetId?: IntFilter<"DailyRecord"> | number
    createdAt?: DateTimeFilter<"DailyRecord"> | Date | string
    profit?: FloatFilter<"DailyRecord"> | number
    status?: StringFilter<"DailyRecord"> | string
    teamId?: IntNullableFilter<"DailyRecord"> | number | null
  }

  export type UserUpsertWithoutSheetsInput = {
    update: XOR<UserUpdateWithoutSheetsInput, UserUncheckedUpdateWithoutSheetsInput>
    create: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSheetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSheetsInput, UserUncheckedUpdateWithoutSheetsInput>
  }

  export type UserUpdateWithoutSheetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSheetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type DailySheetCreateWithoutRecordsInput = {
    name: string
    proxyCost?: number
    smsCost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSheetsInput
  }

  export type DailySheetUncheckedCreateWithoutRecordsInput = {
    id?: number
    name: string
    proxyCost?: number
    smsCost?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailySheetCreateOrConnectWithoutRecordsInput = {
    where: DailySheetWhereUniqueInput
    create: XOR<DailySheetCreateWithoutRecordsInput, DailySheetUncheckedCreateWithoutRecordsInput>
  }

  export type DailySheetUpsertWithoutRecordsInput = {
    update: XOR<DailySheetUpdateWithoutRecordsInput, DailySheetUncheckedUpdateWithoutRecordsInput>
    create: XOR<DailySheetCreateWithoutRecordsInput, DailySheetUncheckedCreateWithoutRecordsInput>
    where?: DailySheetWhereInput
  }

  export type DailySheetUpdateToOneWithWhereWithoutRecordsInput = {
    where?: DailySheetWhereInput
    data: XOR<DailySheetUpdateWithoutRecordsInput, DailySheetUncheckedUpdateWithoutRecordsInput>
  }

  export type DailySheetUpdateWithoutRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type DailySheetUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutStatisticsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateWithoutStatisticsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserCreateOrConnectWithoutStatisticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
  }

  export type UserUpsertWithoutStatisticsInput = {
    update: XOR<UserUpdateWithoutStatisticsInput, UserUncheckedUpdateWithoutStatisticsInput>
    create: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatisticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatisticsInput, UserUncheckedUpdateWithoutStatisticsInput>
  }

  export type UserUpdateWithoutStatisticsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateWithoutStatisticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type UserCreateWithoutActivitiesInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type UserCreateWithoutExpensesInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityCreateNestedManyWithoutUserInput
    sheets?: DailySheetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    ownedTeams?: TeamCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceCreateNestedManyWithoutOperatorInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sheets?: DailySheetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    remittances?: TeamRemittanceUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutOperatorNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sheets?: DailySheetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type ActivityCreateManyUserInput = {
    id?: number
    actionType: string
    description: string
    createdAt?: Date | string
  }

  export type DailySheetCreateManyUserInput = {
    id?: number
    name: string
    proxyCost?: number
    smsCost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseCreateManyUserInput = {
    id?: number
    name: string
    amount: number
    category: string
    date: string
    createdAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: number
    title: string
    target: number
    current?: number
    deadline: string
    createdAt?: Date | string
  }

  export type StatisticCreateManyUserInput = {
    id?: number
    clicks?: number
    revenue?: number
    leads?: number
    date?: Date | string
  }

  export type TeamCreateManyOwnerInput = {
    id?: number
    name: string
    code: string
    instagram?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type TeamMemberCreateManyUserInput = {
    id?: number
    teamId: number
    role?: string
  }

  export type TeamRemittanceCreateManyOperatorInput = {
    id?: number
    teamId: number
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type ActivityUpdateWithoutUserInput = {
    actionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySheetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DailyRecordUpdateManyWithoutSheetNestedInput
  }

  export type DailySheetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DailyRecordUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type DailySheetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    proxyCost?: FloatFieldUpdateOperationsInput | number
    smsCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    deadline?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    deadline?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    deadline?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUpdateWithoutUserInput = {
    clicks?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: TeamGoalUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: TeamGoalUncheckedUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    operations?: TeamOperationUncheckedUpdateManyWithoutTeamNestedInput
    remittances?: TeamRemittanceUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamRemittanceUpdateWithoutOperatorInput = {
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutRemittancesNestedInput
  }

  export type TeamRemittanceUncheckedUpdateWithoutOperatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRemittanceUncheckedUpdateManyWithoutOperatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamGoalCreateManyTeamInput = {
    id?: number
    platform: string
    target: number
    status?: string
    createdAt?: Date | string
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: number
    userId: number
    role?: string
  }

  export type TeamOperationCreateManyTeamInput = {
    id?: number
    platform: string
    network: string
    title: string
    depositors?: number
    createdAt?: Date | string
  }

  export type TeamRemittanceCreateManyTeamInput = {
    id?: number
    operatorId: number
    platform: string
    value: number
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TeamGoalUpdateWithoutTeamInput = {
    platform?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamGoalUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamGoalUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTeamMembershipsNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamOperationUpdateWithoutTeamInput = {
    platform?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    depositors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamOperationUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    depositors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamOperationUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    depositors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRemittanceUpdateWithoutTeamInput = {
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: UserUpdateOneRequiredWithoutRemittancesNestedInput
  }

  export type TeamRemittanceUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRemittanceUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordCreateManySheetInput = {
    id?: number
    date?: Date | string
    platform: string
    investment: number
    withdraw: number
    cycles: string
    createdAt?: Date | string
    profit?: number
    status?: string
    teamId?: number | null
  }

  export type DailyRecordUpdateWithoutSheetInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    investment?: FloatFieldUpdateOperationsInput | number
    withdraw?: FloatFieldUpdateOperationsInput | number
    cycles?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profit?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DailyRecordUncheckedUpdateWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    investment?: FloatFieldUpdateOperationsInput | number
    withdraw?: FloatFieldUpdateOperationsInput | number
    cycles?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profit?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DailyRecordUncheckedUpdateManyWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    investment?: FloatFieldUpdateOperationsInput | number
    withdraw?: FloatFieldUpdateOperationsInput | number
    cycles?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profit?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailySheetCountOutputTypeDefaultArgs instead
     */
    export type DailySheetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailySheetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMemberDefaultArgs instead
     */
    export type TeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamOperationDefaultArgs instead
     */
    export type TeamOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamOperationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamGoalDefaultArgs instead
     */
    export type TeamGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamGoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamRemittanceDefaultArgs instead
     */
    export type TeamRemittanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamRemittanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailySheetDefaultArgs instead
     */
    export type DailySheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailySheetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyRecordDefaultArgs instead
     */
    export type DailyRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatisticDefaultArgs instead
     */
    export type StatisticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatisticDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityDefaultArgs instead
     */
    export type ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogDefaultArgs instead
     */
    export type LogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalDefaultArgs instead
     */
    export type GoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseDefaultArgs instead
     */
    export type ExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}