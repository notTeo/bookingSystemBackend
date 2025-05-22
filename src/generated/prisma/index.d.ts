
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model EmployeeService
 * 
 */
export type EmployeeService = $Result.DefaultSelection<Prisma.$EmployeeServicePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model WorkingSlot
 * 
 */
export type WorkingSlot = $Result.DefaultSelection<Prisma.$WorkingSlotPayload>
/**
 * Model WorkingHourRange
 * 
 */
export type WorkingHourRange = $Result.DefaultSelection<Prisma.$WorkingHourRangePayload>
/**
 * Model RecurringSlot
 * 
 */
export type RecurringSlot = $Result.DefaultSelection<Prisma.$RecurringSlotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  OWNER: 'OWNER',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELED: 'CANCELED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const BookingMethod: {
  ONLINE: 'ONLINE',
  IN_STORE: 'IN_STORE'
};

export type BookingMethod = (typeof BookingMethod)[keyof typeof BookingMethod]


export const WeekDay: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type BookingMethod = $Enums.BookingMethod

export const BookingMethod: typeof $Enums.BookingMethod

export type WeekDay = $Enums.WeekDay

export const WeekDay: typeof $Enums.WeekDay

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeService`: Exposes CRUD operations for the **EmployeeService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeServices
    * const employeeServices = await prisma.employeeService.findMany()
    * ```
    */
  get employeeService(): Prisma.EmployeeServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workingSlot`: Exposes CRUD operations for the **WorkingSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkingSlots
    * const workingSlots = await prisma.workingSlot.findMany()
    * ```
    */
  get workingSlot(): Prisma.WorkingSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workingHourRange`: Exposes CRUD operations for the **WorkingHourRange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkingHourRanges
    * const workingHourRanges = await prisma.workingHourRange.findMany()
    * ```
    */
  get workingHourRange(): Prisma.WorkingHourRangeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringSlot`: Exposes CRUD operations for the **RecurringSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringSlots
    * const recurringSlots = await prisma.recurringSlot.findMany()
    * ```
    */
  get recurringSlot(): Prisma.RecurringSlotDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Customer: 'Customer',
    Service: 'Service',
    EmployeeService: 'EmployeeService',
    Booking: 'Booking',
    WorkingSlot: 'WorkingSlot',
    WorkingHourRange: 'WorkingHourRange',
    RecurringSlot: 'RecurringSlot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customer" | "service" | "employeeService" | "booking" | "workingSlot" | "workingHourRange" | "recurringSlot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      EmployeeService: {
        payload: Prisma.$EmployeeServicePayload<ExtArgs>
        fields: Prisma.EmployeeServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>
          }
          findFirst: {
            args: Prisma.EmployeeServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>
          }
          findMany: {
            args: Prisma.EmployeeServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>[]
          }
          create: {
            args: Prisma.EmployeeServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>
          }
          createMany: {
            args: Prisma.EmployeeServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>[]
          }
          delete: {
            args: Prisma.EmployeeServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>
          }
          update: {
            args: Prisma.EmployeeServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeServicePayload>
          }
          aggregate: {
            args: Prisma.EmployeeServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeService>
          }
          groupBy: {
            args: Prisma.EmployeeServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeServiceCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeServiceCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      WorkingSlot: {
        payload: Prisma.$WorkingSlotPayload<ExtArgs>
        fields: Prisma.WorkingSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkingSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkingSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>
          }
          findFirst: {
            args: Prisma.WorkingSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkingSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>
          }
          findMany: {
            args: Prisma.WorkingSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>[]
          }
          create: {
            args: Prisma.WorkingSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>
          }
          createMany: {
            args: Prisma.WorkingSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkingSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>[]
          }
          delete: {
            args: Prisma.WorkingSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>
          }
          update: {
            args: Prisma.WorkingSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>
          }
          deleteMany: {
            args: Prisma.WorkingSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkingSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkingSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>[]
          }
          upsert: {
            args: Prisma.WorkingSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingSlotPayload>
          }
          aggregate: {
            args: Prisma.WorkingSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkingSlot>
          }
          groupBy: {
            args: Prisma.WorkingSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkingSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkingSlotCountArgs<ExtArgs>
            result: $Utils.Optional<WorkingSlotCountAggregateOutputType> | number
          }
        }
      }
      WorkingHourRange: {
        payload: Prisma.$WorkingHourRangePayload<ExtArgs>
        fields: Prisma.WorkingHourRangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkingHourRangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkingHourRangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>
          }
          findFirst: {
            args: Prisma.WorkingHourRangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkingHourRangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>
          }
          findMany: {
            args: Prisma.WorkingHourRangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>[]
          }
          create: {
            args: Prisma.WorkingHourRangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>
          }
          createMany: {
            args: Prisma.WorkingHourRangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkingHourRangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>[]
          }
          delete: {
            args: Prisma.WorkingHourRangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>
          }
          update: {
            args: Prisma.WorkingHourRangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>
          }
          deleteMany: {
            args: Prisma.WorkingHourRangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkingHourRangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkingHourRangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>[]
          }
          upsert: {
            args: Prisma.WorkingHourRangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourRangePayload>
          }
          aggregate: {
            args: Prisma.WorkingHourRangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkingHourRange>
          }
          groupBy: {
            args: Prisma.WorkingHourRangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkingHourRangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkingHourRangeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkingHourRangeCountAggregateOutputType> | number
          }
        }
      }
      RecurringSlot: {
        payload: Prisma.$RecurringSlotPayload<ExtArgs>
        fields: Prisma.RecurringSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>
          }
          findFirst: {
            args: Prisma.RecurringSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>
          }
          findMany: {
            args: Prisma.RecurringSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>[]
          }
          create: {
            args: Prisma.RecurringSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>
          }
          createMany: {
            args: Prisma.RecurringSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>[]
          }
          delete: {
            args: Prisma.RecurringSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>
          }
          update: {
            args: Prisma.RecurringSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>
          }
          deleteMany: {
            args: Prisma.RecurringSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>[]
          }
          upsert: {
            args: Prisma.RecurringSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringSlotPayload>
          }
          aggregate: {
            args: Prisma.RecurringSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringSlot>
          }
          groupBy: {
            args: Prisma.RecurringSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringSlotCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringSlotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customer?: CustomerOmit
    service?: ServiceOmit
    employeeService?: EmployeeServiceOmit
    booking?: BookingOmit
    workingSlot?: WorkingSlotOmit
    workingHourRange?: WorkingHourRangeOmit
    recurringSlot?: RecurringSlotOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    services: number
    servicesCreated: number
    bookings: number
    workingSlots: number
    workingHourRanges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | UserCountOutputTypeCountServicesArgs
    servicesCreated?: boolean | UserCountOutputTypeCountServicesCreatedArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    workingSlots?: boolean | UserCountOutputTypeCountWorkingSlotsArgs
    workingHourRanges?: boolean | UserCountOutputTypeCountWorkingHourRangesArgs
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
  export type UserCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkingSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingSlotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkingHourRangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHourRangeWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    bookings: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CustomerCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    employees: number
    bookings: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | ServiceCountOutputTypeCountEmployeesArgs
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeServiceWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type WorkingHourRangeCountOutputType
   */

  export type WorkingHourRangeCountOutputType = {
    slots: number
  }

  export type WorkingHourRangeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | WorkingHourRangeCountOutputTypeCountSlotsArgs
  }

  // Custom InputTypes
  /**
   * WorkingHourRangeCountOutputType without action
   */
  export type WorkingHourRangeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRangeCountOutputType
     */
    select?: WorkingHourRangeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkingHourRangeCountOutputType without action
   */
  export type WorkingHourRangeCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringSlotWhereInput
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
    email: string | null
    hashedPassword: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    hashedPassword: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    name: number
    role: number
    createdAt: number
    isActive: number
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
    email?: true
    hashedPassword?: true
    name?: true
    role?: true
    createdAt?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    name?: true
    role?: true
    createdAt?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    name?: true
    role?: true
    createdAt?: true
    isActive?: true
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
    email: string
    hashedPassword: string
    name: string
    role: $Enums.Role
    createdAt: Date
    isActive: boolean
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
    email?: boolean
    hashedPassword?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
    services?: boolean | User$servicesArgs<ExtArgs>
    servicesCreated?: boolean | User$servicesCreatedArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    workingSlots?: boolean | User$workingSlotsArgs<ExtArgs>
    workingHourRanges?: boolean | User$workingHourRangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hashedPassword" | "name" | "role" | "createdAt" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | User$servicesArgs<ExtArgs>
    servicesCreated?: boolean | User$servicesCreatedArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    workingSlots?: boolean | User$workingSlotsArgs<ExtArgs>
    workingHourRanges?: boolean | User$workingHourRangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      services: Prisma.$EmployeeServicePayload<ExtArgs>[]
      servicesCreated: Prisma.$ServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      workingSlots: Prisma.$WorkingSlotPayload<ExtArgs>[]
      workingHourRanges: Prisma.$WorkingHourRangePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      hashedPassword: string
      name: string
      role: $Enums.Role
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends User$servicesArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicesCreated<T extends User$servicesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workingSlots<T extends User$workingSlotsArgs<ExtArgs> = {}>(args?: Subset<T, User$workingSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workingHourRanges<T extends User$workingHourRangesArgs<ExtArgs> = {}>(args?: Subset<T, User$workingHourRangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.services
   */
  export type User$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    where?: EmployeeServiceWhereInput
    orderBy?: EmployeeServiceOrderByWithRelationInput | EmployeeServiceOrderByWithRelationInput[]
    cursor?: EmployeeServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeServiceScalarFieldEnum | EmployeeServiceScalarFieldEnum[]
  }

  /**
   * User.servicesCreated
   */
  export type User$servicesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.workingSlots
   */
  export type User$workingSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    where?: WorkingSlotWhereInput
    orderBy?: WorkingSlotOrderByWithRelationInput | WorkingSlotOrderByWithRelationInput[]
    cursor?: WorkingSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkingSlotScalarFieldEnum | WorkingSlotScalarFieldEnum[]
  }

  /**
   * User.workingHourRanges
   */
  export type User$workingHourRangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    where?: WorkingHourRangeWhereInput
    orderBy?: WorkingHourRangeOrderByWithRelationInput | WorkingHourRangeOrderByWithRelationInput[]
    cursor?: WorkingHourRangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkingHourRangeScalarFieldEnum | WorkingHourRangeScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    createdAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Customer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.bookings
   */
  export type Customer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    price: number | null
    createdById: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    duration: number | null
    price: number | null
    createdById: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    duration: number | null
    price: number | null
    createdById: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    duration: number | null
    price: number | null
    createdById: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    duration: number
    price: number
    createdById: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    duration?: true
    price?: true
    createdById?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    duration?: true
    price?: true
    createdById?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    price?: true
    createdById?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    price?: true
    createdById?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    price?: true
    createdById?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    duration: number
    price: number
    createdById: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    employees?: boolean | Service$employeesArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdById?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "duration" | "price" | "createdById", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    employees?: boolean | Service$employeesArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      employees: Prisma.$EmployeeServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      duration: number
      price: number
      createdById: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employees<T extends Service$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Service$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly createdById: FieldRef<"Service", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.employees
   */
  export type Service$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    where?: EmployeeServiceWhereInput
    orderBy?: EmployeeServiceOrderByWithRelationInput | EmployeeServiceOrderByWithRelationInput[]
    cursor?: EmployeeServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeServiceScalarFieldEnum | EmployeeServiceScalarFieldEnum[]
  }

  /**
   * Service.bookings
   */
  export type Service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeService
   */

  export type AggregateEmployeeService = {
    _count: EmployeeServiceCountAggregateOutputType | null
    _avg: EmployeeServiceAvgAggregateOutputType | null
    _sum: EmployeeServiceSumAggregateOutputType | null
    _min: EmployeeServiceMinAggregateOutputType | null
    _max: EmployeeServiceMaxAggregateOutputType | null
  }

  export type EmployeeServiceAvgAggregateOutputType = {
    employeeId: number | null
    serviceId: number | null
  }

  export type EmployeeServiceSumAggregateOutputType = {
    employeeId: number | null
    serviceId: number | null
  }

  export type EmployeeServiceMinAggregateOutputType = {
    employeeId: number | null
    serviceId: number | null
  }

  export type EmployeeServiceMaxAggregateOutputType = {
    employeeId: number | null
    serviceId: number | null
  }

  export type EmployeeServiceCountAggregateOutputType = {
    employeeId: number
    serviceId: number
    _all: number
  }


  export type EmployeeServiceAvgAggregateInputType = {
    employeeId?: true
    serviceId?: true
  }

  export type EmployeeServiceSumAggregateInputType = {
    employeeId?: true
    serviceId?: true
  }

  export type EmployeeServiceMinAggregateInputType = {
    employeeId?: true
    serviceId?: true
  }

  export type EmployeeServiceMaxAggregateInputType = {
    employeeId?: true
    serviceId?: true
  }

  export type EmployeeServiceCountAggregateInputType = {
    employeeId?: true
    serviceId?: true
    _all?: true
  }

  export type EmployeeServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeService to aggregate.
     */
    where?: EmployeeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeServices to fetch.
     */
    orderBy?: EmployeeServiceOrderByWithRelationInput | EmployeeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeServices
    **/
    _count?: true | EmployeeServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeServiceMaxAggregateInputType
  }

  export type GetEmployeeServiceAggregateType<T extends EmployeeServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeService[P]>
      : GetScalarType<T[P], AggregateEmployeeService[P]>
  }




  export type EmployeeServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeServiceWhereInput
    orderBy?: EmployeeServiceOrderByWithAggregationInput | EmployeeServiceOrderByWithAggregationInput[]
    by: EmployeeServiceScalarFieldEnum[] | EmployeeServiceScalarFieldEnum
    having?: EmployeeServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeServiceCountAggregateInputType | true
    _avg?: EmployeeServiceAvgAggregateInputType
    _sum?: EmployeeServiceSumAggregateInputType
    _min?: EmployeeServiceMinAggregateInputType
    _max?: EmployeeServiceMaxAggregateInputType
  }

  export type EmployeeServiceGroupByOutputType = {
    employeeId: number
    serviceId: number
    _count: EmployeeServiceCountAggregateOutputType | null
    _avg: EmployeeServiceAvgAggregateOutputType | null
    _sum: EmployeeServiceSumAggregateOutputType | null
    _min: EmployeeServiceMinAggregateOutputType | null
    _max: EmployeeServiceMaxAggregateOutputType | null
  }

  type GetEmployeeServiceGroupByPayload<T extends EmployeeServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeServiceGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeServiceGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    serviceId?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeService"]>

  export type EmployeeServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    serviceId?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeService"]>

  export type EmployeeServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    serviceId?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeService"]>

  export type EmployeeServiceSelectScalar = {
    employeeId?: boolean
    serviceId?: boolean
  }

  export type EmployeeServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeId" | "serviceId", ExtArgs["result"]["employeeService"]>
  export type EmployeeServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type EmployeeServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type EmployeeServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $EmployeeServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeService"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeId: number
      serviceId: number
    }, ExtArgs["result"]["employeeService"]>
    composites: {}
  }

  type EmployeeServiceGetPayload<S extends boolean | null | undefined | EmployeeServiceDefaultArgs> = $Result.GetResult<Prisma.$EmployeeServicePayload, S>

  type EmployeeServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeServiceCountAggregateInputType | true
    }

  export interface EmployeeServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeService'], meta: { name: 'EmployeeService' } }
    /**
     * Find zero or one EmployeeService that matches the filter.
     * @param {EmployeeServiceFindUniqueArgs} args - Arguments to find a EmployeeService
     * @example
     * // Get one EmployeeService
     * const employeeService = await prisma.employeeService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeServiceFindUniqueArgs>(args: SelectSubset<T, EmployeeServiceFindUniqueArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeServiceFindUniqueOrThrowArgs} args - Arguments to find a EmployeeService
     * @example
     * // Get one EmployeeService
     * const employeeService = await prisma.employeeService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeServiceFindFirstArgs} args - Arguments to find a EmployeeService
     * @example
     * // Get one EmployeeService
     * const employeeService = await prisma.employeeService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeServiceFindFirstArgs>(args?: SelectSubset<T, EmployeeServiceFindFirstArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeServiceFindFirstOrThrowArgs} args - Arguments to find a EmployeeService
     * @example
     * // Get one EmployeeService
     * const employeeService = await prisma.employeeService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeServices
     * const employeeServices = await prisma.employeeService.findMany()
     * 
     * // Get first 10 EmployeeServices
     * const employeeServices = await prisma.employeeService.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeeServiceWithEmployeeIdOnly = await prisma.employeeService.findMany({ select: { employeeId: true } })
     * 
     */
    findMany<T extends EmployeeServiceFindManyArgs>(args?: SelectSubset<T, EmployeeServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeService.
     * @param {EmployeeServiceCreateArgs} args - Arguments to create a EmployeeService.
     * @example
     * // Create one EmployeeService
     * const EmployeeService = await prisma.employeeService.create({
     *   data: {
     *     // ... data to create a EmployeeService
     *   }
     * })
     * 
     */
    create<T extends EmployeeServiceCreateArgs>(args: SelectSubset<T, EmployeeServiceCreateArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeServices.
     * @param {EmployeeServiceCreateManyArgs} args - Arguments to create many EmployeeServices.
     * @example
     * // Create many EmployeeServices
     * const employeeService = await prisma.employeeService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeServiceCreateManyArgs>(args?: SelectSubset<T, EmployeeServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeServices and returns the data saved in the database.
     * @param {EmployeeServiceCreateManyAndReturnArgs} args - Arguments to create many EmployeeServices.
     * @example
     * // Create many EmployeeServices
     * const employeeService = await prisma.employeeService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeServices and only return the `employeeId`
     * const employeeServiceWithEmployeeIdOnly = await prisma.employeeService.createManyAndReturn({
     *   select: { employeeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeService.
     * @param {EmployeeServiceDeleteArgs} args - Arguments to delete one EmployeeService.
     * @example
     * // Delete one EmployeeService
     * const EmployeeService = await prisma.employeeService.delete({
     *   where: {
     *     // ... filter to delete one EmployeeService
     *   }
     * })
     * 
     */
    delete<T extends EmployeeServiceDeleteArgs>(args: SelectSubset<T, EmployeeServiceDeleteArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeService.
     * @param {EmployeeServiceUpdateArgs} args - Arguments to update one EmployeeService.
     * @example
     * // Update one EmployeeService
     * const employeeService = await prisma.employeeService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeServiceUpdateArgs>(args: SelectSubset<T, EmployeeServiceUpdateArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeServices.
     * @param {EmployeeServiceDeleteManyArgs} args - Arguments to filter EmployeeServices to delete.
     * @example
     * // Delete a few EmployeeServices
     * const { count } = await prisma.employeeService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeServiceDeleteManyArgs>(args?: SelectSubset<T, EmployeeServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeServices
     * const employeeService = await prisma.employeeService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeServiceUpdateManyArgs>(args: SelectSubset<T, EmployeeServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeServices and returns the data updated in the database.
     * @param {EmployeeServiceUpdateManyAndReturnArgs} args - Arguments to update many EmployeeServices.
     * @example
     * // Update many EmployeeServices
     * const employeeService = await prisma.employeeService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeServices and only return the `employeeId`
     * const employeeServiceWithEmployeeIdOnly = await prisma.employeeService.updateManyAndReturn({
     *   select: { employeeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeService.
     * @param {EmployeeServiceUpsertArgs} args - Arguments to update or create a EmployeeService.
     * @example
     * // Update or create a EmployeeService
     * const employeeService = await prisma.employeeService.upsert({
     *   create: {
     *     // ... data to create a EmployeeService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeService we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeServiceUpsertArgs>(args: SelectSubset<T, EmployeeServiceUpsertArgs<ExtArgs>>): Prisma__EmployeeServiceClient<$Result.GetResult<Prisma.$EmployeeServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeServiceCountArgs} args - Arguments to filter EmployeeServices to count.
     * @example
     * // Count the number of EmployeeServices
     * const count = await prisma.employeeService.count({
     *   where: {
     *     // ... the filter for the EmployeeServices we want to count
     *   }
     * })
    **/
    count<T extends EmployeeServiceCountArgs>(
      args?: Subset<T, EmployeeServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeServiceAggregateArgs>(args: Subset<T, EmployeeServiceAggregateArgs>): Prisma.PrismaPromise<GetEmployeeServiceAggregateType<T>>

    /**
     * Group by EmployeeService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeServiceGroupByArgs} args - Group by arguments.
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
      T extends EmployeeServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeServiceGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeService model
   */
  readonly fields: EmployeeServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeService model
   */
  interface EmployeeServiceFieldRefs {
    readonly employeeId: FieldRef<"EmployeeService", 'Int'>
    readonly serviceId: FieldRef<"EmployeeService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeService findUnique
   */
  export type EmployeeServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeService to fetch.
     */
    where: EmployeeServiceWhereUniqueInput
  }

  /**
   * EmployeeService findUniqueOrThrow
   */
  export type EmployeeServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeService to fetch.
     */
    where: EmployeeServiceWhereUniqueInput
  }

  /**
   * EmployeeService findFirst
   */
  export type EmployeeServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeService to fetch.
     */
    where?: EmployeeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeServices to fetch.
     */
    orderBy?: EmployeeServiceOrderByWithRelationInput | EmployeeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeServices.
     */
    cursor?: EmployeeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeServices.
     */
    distinct?: EmployeeServiceScalarFieldEnum | EmployeeServiceScalarFieldEnum[]
  }

  /**
   * EmployeeService findFirstOrThrow
   */
  export type EmployeeServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeService to fetch.
     */
    where?: EmployeeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeServices to fetch.
     */
    orderBy?: EmployeeServiceOrderByWithRelationInput | EmployeeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeServices.
     */
    cursor?: EmployeeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeServices.
     */
    distinct?: EmployeeServiceScalarFieldEnum | EmployeeServiceScalarFieldEnum[]
  }

  /**
   * EmployeeService findMany
   */
  export type EmployeeServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeServices to fetch.
     */
    where?: EmployeeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeServices to fetch.
     */
    orderBy?: EmployeeServiceOrderByWithRelationInput | EmployeeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeServices.
     */
    cursor?: EmployeeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeServices.
     */
    skip?: number
    distinct?: EmployeeServiceScalarFieldEnum | EmployeeServiceScalarFieldEnum[]
  }

  /**
   * EmployeeService create
   */
  export type EmployeeServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeService.
     */
    data: XOR<EmployeeServiceCreateInput, EmployeeServiceUncheckedCreateInput>
  }

  /**
   * EmployeeService createMany
   */
  export type EmployeeServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeServices.
     */
    data: EmployeeServiceCreateManyInput | EmployeeServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeService createManyAndReturn
   */
  export type EmployeeServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeServices.
     */
    data: EmployeeServiceCreateManyInput | EmployeeServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeService update
   */
  export type EmployeeServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeService.
     */
    data: XOR<EmployeeServiceUpdateInput, EmployeeServiceUncheckedUpdateInput>
    /**
     * Choose, which EmployeeService to update.
     */
    where: EmployeeServiceWhereUniqueInput
  }

  /**
   * EmployeeService updateMany
   */
  export type EmployeeServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeServices.
     */
    data: XOR<EmployeeServiceUpdateManyMutationInput, EmployeeServiceUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeServices to update
     */
    where?: EmployeeServiceWhereInput
    /**
     * Limit how many EmployeeServices to update.
     */
    limit?: number
  }

  /**
   * EmployeeService updateManyAndReturn
   */
  export type EmployeeServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeServices.
     */
    data: XOR<EmployeeServiceUpdateManyMutationInput, EmployeeServiceUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeServices to update
     */
    where?: EmployeeServiceWhereInput
    /**
     * Limit how many EmployeeServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeService upsert
   */
  export type EmployeeServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeService to update in case it exists.
     */
    where: EmployeeServiceWhereUniqueInput
    /**
     * In case the EmployeeService found by the `where` argument doesn't exist, create a new EmployeeService with this data.
     */
    create: XOR<EmployeeServiceCreateInput, EmployeeServiceUncheckedCreateInput>
    /**
     * In case the EmployeeService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeServiceUpdateInput, EmployeeServiceUncheckedUpdateInput>
  }

  /**
   * EmployeeService delete
   */
  export type EmployeeServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
    /**
     * Filter which EmployeeService to delete.
     */
    where: EmployeeServiceWhereUniqueInput
  }

  /**
   * EmployeeService deleteMany
   */
  export type EmployeeServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeServices to delete
     */
    where?: EmployeeServiceWhereInput
    /**
     * Limit how many EmployeeServices to delete.
     */
    limit?: number
  }

  /**
   * EmployeeService without action
   */
  export type EmployeeServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeService
     */
    select?: EmployeeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeService
     */
    omit?: EmployeeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeServiceInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    serviceId: number | null
    employeeId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    serviceId: number | null
    employeeId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    date: Date | null
    customerId: number | null
    serviceId: number | null
    employeeId: number | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    method: $Enums.BookingMethod | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    customerId: number | null
    serviceId: number | null
    employeeId: number | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    method: $Enums.BookingMethod | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    date: number
    customerId: number
    serviceId: number
    employeeId: number
    status: number
    notes: number
    createdAt: number
    method: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    customerId?: true
    serviceId?: true
    employeeId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    customerId?: true
    serviceId?: true
    employeeId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    serviceId?: true
    employeeId?: true
    status?: true
    notes?: true
    createdAt?: true
    method?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    serviceId?: true
    employeeId?: true
    status?: true
    notes?: true
    createdAt?: true
    method?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    serviceId?: true
    employeeId?: true
    status?: true
    notes?: true
    createdAt?: true
    method?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    date: Date
    customerId: number
    serviceId: number
    employeeId: number
    status: $Enums.BookingStatus
    notes: string | null
    createdAt: Date
    method: $Enums.BookingMethod | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    customerId?: boolean
    serviceId?: boolean
    employeeId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    method?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    customerId?: boolean
    serviceId?: boolean
    employeeId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    method?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    customerId?: boolean
    serviceId?: boolean
    employeeId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    method?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    date?: boolean
    customerId?: boolean
    serviceId?: boolean
    employeeId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    method?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "customerId" | "serviceId" | "employeeId" | "status" | "notes" | "createdAt" | "method", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      employee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      customerId: number
      serviceId: number
      employeeId: number
      status: $Enums.BookingStatus
      notes: string | null
      createdAt: Date
      method: $Enums.BookingMethod | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly date: FieldRef<"Booking", 'DateTime'>
    readonly customerId: FieldRef<"Booking", 'Int'>
    readonly serviceId: FieldRef<"Booking", 'Int'>
    readonly employeeId: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly method: FieldRef<"Booking", 'BookingMethod'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model WorkingSlot
   */

  export type AggregateWorkingSlot = {
    _count: WorkingSlotCountAggregateOutputType | null
    _avg: WorkingSlotAvgAggregateOutputType | null
    _sum: WorkingSlotSumAggregateOutputType | null
    _min: WorkingSlotMinAggregateOutputType | null
    _max: WorkingSlotMaxAggregateOutputType | null
  }

  export type WorkingSlotAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type WorkingSlotSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type WorkingSlotMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    onlyInStore: boolean | null
  }

  export type WorkingSlotMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    onlyInStore: boolean | null
  }

  export type WorkingSlotCountAggregateOutputType = {
    id: number
    employeeId: number
    date: number
    startTime: number
    endTime: number
    createdAt: number
    onlyInStore: number
    _all: number
  }


  export type WorkingSlotAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type WorkingSlotSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type WorkingSlotMinAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    onlyInStore?: true
  }

  export type WorkingSlotMaxAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    onlyInStore?: true
  }

  export type WorkingSlotCountAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    onlyInStore?: true
    _all?: true
  }

  export type WorkingSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingSlot to aggregate.
     */
    where?: WorkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingSlots to fetch.
     */
    orderBy?: WorkingSlotOrderByWithRelationInput | WorkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkingSlots
    **/
    _count?: true | WorkingSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkingSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkingSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkingSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkingSlotMaxAggregateInputType
  }

  export type GetWorkingSlotAggregateType<T extends WorkingSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkingSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkingSlot[P]>
      : GetScalarType<T[P], AggregateWorkingSlot[P]>
  }




  export type WorkingSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingSlotWhereInput
    orderBy?: WorkingSlotOrderByWithAggregationInput | WorkingSlotOrderByWithAggregationInput[]
    by: WorkingSlotScalarFieldEnum[] | WorkingSlotScalarFieldEnum
    having?: WorkingSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkingSlotCountAggregateInputType | true
    _avg?: WorkingSlotAvgAggregateInputType
    _sum?: WorkingSlotSumAggregateInputType
    _min?: WorkingSlotMinAggregateInputType
    _max?: WorkingSlotMaxAggregateInputType
  }

  export type WorkingSlotGroupByOutputType = {
    id: number
    employeeId: number
    date: Date
    startTime: string
    endTime: string
    createdAt: Date
    onlyInStore: boolean
    _count: WorkingSlotCountAggregateOutputType | null
    _avg: WorkingSlotAvgAggregateOutputType | null
    _sum: WorkingSlotSumAggregateOutputType | null
    _min: WorkingSlotMinAggregateOutputType | null
    _max: WorkingSlotMaxAggregateOutputType | null
  }

  type GetWorkingSlotGroupByPayload<T extends WorkingSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkingSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkingSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkingSlotGroupByOutputType[P]>
            : GetScalarType<T[P], WorkingSlotGroupByOutputType[P]>
        }
      >
    >


  export type WorkingSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    onlyInStore?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingSlot"]>

  export type WorkingSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    onlyInStore?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingSlot"]>

  export type WorkingSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    onlyInStore?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingSlot"]>

  export type WorkingSlotSelectScalar = {
    id?: boolean
    employeeId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    onlyInStore?: boolean
  }

  export type WorkingSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "date" | "startTime" | "endTime" | "createdAt" | "onlyInStore", ExtArgs["result"]["workingSlot"]>
  export type WorkingSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkingSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkingSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkingSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkingSlot"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      date: Date
      startTime: string
      endTime: string
      createdAt: Date
      onlyInStore: boolean
    }, ExtArgs["result"]["workingSlot"]>
    composites: {}
  }

  type WorkingSlotGetPayload<S extends boolean | null | undefined | WorkingSlotDefaultArgs> = $Result.GetResult<Prisma.$WorkingSlotPayload, S>

  type WorkingSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkingSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkingSlotCountAggregateInputType | true
    }

  export interface WorkingSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkingSlot'], meta: { name: 'WorkingSlot' } }
    /**
     * Find zero or one WorkingSlot that matches the filter.
     * @param {WorkingSlotFindUniqueArgs} args - Arguments to find a WorkingSlot
     * @example
     * // Get one WorkingSlot
     * const workingSlot = await prisma.workingSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkingSlotFindUniqueArgs>(args: SelectSubset<T, WorkingSlotFindUniqueArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkingSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkingSlotFindUniqueOrThrowArgs} args - Arguments to find a WorkingSlot
     * @example
     * // Get one WorkingSlot
     * const workingSlot = await prisma.workingSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkingSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkingSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingSlotFindFirstArgs} args - Arguments to find a WorkingSlot
     * @example
     * // Get one WorkingSlot
     * const workingSlot = await prisma.workingSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkingSlotFindFirstArgs>(args?: SelectSubset<T, WorkingSlotFindFirstArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingSlotFindFirstOrThrowArgs} args - Arguments to find a WorkingSlot
     * @example
     * // Get one WorkingSlot
     * const workingSlot = await prisma.workingSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkingSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkingSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkingSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkingSlots
     * const workingSlots = await prisma.workingSlot.findMany()
     * 
     * // Get first 10 WorkingSlots
     * const workingSlots = await prisma.workingSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workingSlotWithIdOnly = await prisma.workingSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkingSlotFindManyArgs>(args?: SelectSubset<T, WorkingSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkingSlot.
     * @param {WorkingSlotCreateArgs} args - Arguments to create a WorkingSlot.
     * @example
     * // Create one WorkingSlot
     * const WorkingSlot = await prisma.workingSlot.create({
     *   data: {
     *     // ... data to create a WorkingSlot
     *   }
     * })
     * 
     */
    create<T extends WorkingSlotCreateArgs>(args: SelectSubset<T, WorkingSlotCreateArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkingSlots.
     * @param {WorkingSlotCreateManyArgs} args - Arguments to create many WorkingSlots.
     * @example
     * // Create many WorkingSlots
     * const workingSlot = await prisma.workingSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkingSlotCreateManyArgs>(args?: SelectSubset<T, WorkingSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkingSlots and returns the data saved in the database.
     * @param {WorkingSlotCreateManyAndReturnArgs} args - Arguments to create many WorkingSlots.
     * @example
     * // Create many WorkingSlots
     * const workingSlot = await prisma.workingSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkingSlots and only return the `id`
     * const workingSlotWithIdOnly = await prisma.workingSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkingSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkingSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkingSlot.
     * @param {WorkingSlotDeleteArgs} args - Arguments to delete one WorkingSlot.
     * @example
     * // Delete one WorkingSlot
     * const WorkingSlot = await prisma.workingSlot.delete({
     *   where: {
     *     // ... filter to delete one WorkingSlot
     *   }
     * })
     * 
     */
    delete<T extends WorkingSlotDeleteArgs>(args: SelectSubset<T, WorkingSlotDeleteArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkingSlot.
     * @param {WorkingSlotUpdateArgs} args - Arguments to update one WorkingSlot.
     * @example
     * // Update one WorkingSlot
     * const workingSlot = await prisma.workingSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkingSlotUpdateArgs>(args: SelectSubset<T, WorkingSlotUpdateArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkingSlots.
     * @param {WorkingSlotDeleteManyArgs} args - Arguments to filter WorkingSlots to delete.
     * @example
     * // Delete a few WorkingSlots
     * const { count } = await prisma.workingSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkingSlotDeleteManyArgs>(args?: SelectSubset<T, WorkingSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkingSlots
     * const workingSlot = await prisma.workingSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkingSlotUpdateManyArgs>(args: SelectSubset<T, WorkingSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingSlots and returns the data updated in the database.
     * @param {WorkingSlotUpdateManyAndReturnArgs} args - Arguments to update many WorkingSlots.
     * @example
     * // Update many WorkingSlots
     * const workingSlot = await prisma.workingSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkingSlots and only return the `id`
     * const workingSlotWithIdOnly = await prisma.workingSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkingSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkingSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkingSlot.
     * @param {WorkingSlotUpsertArgs} args - Arguments to update or create a WorkingSlot.
     * @example
     * // Update or create a WorkingSlot
     * const workingSlot = await prisma.workingSlot.upsert({
     *   create: {
     *     // ... data to create a WorkingSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkingSlot we want to update
     *   }
     * })
     */
    upsert<T extends WorkingSlotUpsertArgs>(args: SelectSubset<T, WorkingSlotUpsertArgs<ExtArgs>>): Prisma__WorkingSlotClient<$Result.GetResult<Prisma.$WorkingSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingSlotCountArgs} args - Arguments to filter WorkingSlots to count.
     * @example
     * // Count the number of WorkingSlots
     * const count = await prisma.workingSlot.count({
     *   where: {
     *     // ... the filter for the WorkingSlots we want to count
     *   }
     * })
    **/
    count<T extends WorkingSlotCountArgs>(
      args?: Subset<T, WorkingSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkingSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkingSlotAggregateArgs>(args: Subset<T, WorkingSlotAggregateArgs>): Prisma.PrismaPromise<GetWorkingSlotAggregateType<T>>

    /**
     * Group by WorkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingSlotGroupByArgs} args - Group by arguments.
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
      T extends WorkingSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkingSlotGroupByArgs['orderBy'] }
        : { orderBy?: WorkingSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkingSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkingSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkingSlot model
   */
  readonly fields: WorkingSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkingSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkingSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkingSlot model
   */
  interface WorkingSlotFieldRefs {
    readonly id: FieldRef<"WorkingSlot", 'Int'>
    readonly employeeId: FieldRef<"WorkingSlot", 'Int'>
    readonly date: FieldRef<"WorkingSlot", 'DateTime'>
    readonly startTime: FieldRef<"WorkingSlot", 'String'>
    readonly endTime: FieldRef<"WorkingSlot", 'String'>
    readonly createdAt: FieldRef<"WorkingSlot", 'DateTime'>
    readonly onlyInStore: FieldRef<"WorkingSlot", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WorkingSlot findUnique
   */
  export type WorkingSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which WorkingSlot to fetch.
     */
    where: WorkingSlotWhereUniqueInput
  }

  /**
   * WorkingSlot findUniqueOrThrow
   */
  export type WorkingSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which WorkingSlot to fetch.
     */
    where: WorkingSlotWhereUniqueInput
  }

  /**
   * WorkingSlot findFirst
   */
  export type WorkingSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which WorkingSlot to fetch.
     */
    where?: WorkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingSlots to fetch.
     */
    orderBy?: WorkingSlotOrderByWithRelationInput | WorkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingSlots.
     */
    cursor?: WorkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingSlots.
     */
    distinct?: WorkingSlotScalarFieldEnum | WorkingSlotScalarFieldEnum[]
  }

  /**
   * WorkingSlot findFirstOrThrow
   */
  export type WorkingSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which WorkingSlot to fetch.
     */
    where?: WorkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingSlots to fetch.
     */
    orderBy?: WorkingSlotOrderByWithRelationInput | WorkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingSlots.
     */
    cursor?: WorkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingSlots.
     */
    distinct?: WorkingSlotScalarFieldEnum | WorkingSlotScalarFieldEnum[]
  }

  /**
   * WorkingSlot findMany
   */
  export type WorkingSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which WorkingSlots to fetch.
     */
    where?: WorkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingSlots to fetch.
     */
    orderBy?: WorkingSlotOrderByWithRelationInput | WorkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkingSlots.
     */
    cursor?: WorkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingSlots.
     */
    skip?: number
    distinct?: WorkingSlotScalarFieldEnum | WorkingSlotScalarFieldEnum[]
  }

  /**
   * WorkingSlot create
   */
  export type WorkingSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkingSlot.
     */
    data: XOR<WorkingSlotCreateInput, WorkingSlotUncheckedCreateInput>
  }

  /**
   * WorkingSlot createMany
   */
  export type WorkingSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkingSlots.
     */
    data: WorkingSlotCreateManyInput | WorkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkingSlot createManyAndReturn
   */
  export type WorkingSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * The data used to create many WorkingSlots.
     */
    data: WorkingSlotCreateManyInput | WorkingSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingSlot update
   */
  export type WorkingSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkingSlot.
     */
    data: XOR<WorkingSlotUpdateInput, WorkingSlotUncheckedUpdateInput>
    /**
     * Choose, which WorkingSlot to update.
     */
    where: WorkingSlotWhereUniqueInput
  }

  /**
   * WorkingSlot updateMany
   */
  export type WorkingSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkingSlots.
     */
    data: XOR<WorkingSlotUpdateManyMutationInput, WorkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which WorkingSlots to update
     */
    where?: WorkingSlotWhereInput
    /**
     * Limit how many WorkingSlots to update.
     */
    limit?: number
  }

  /**
   * WorkingSlot updateManyAndReturn
   */
  export type WorkingSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * The data used to update WorkingSlots.
     */
    data: XOR<WorkingSlotUpdateManyMutationInput, WorkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which WorkingSlots to update
     */
    where?: WorkingSlotWhereInput
    /**
     * Limit how many WorkingSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingSlot upsert
   */
  export type WorkingSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkingSlot to update in case it exists.
     */
    where: WorkingSlotWhereUniqueInput
    /**
     * In case the WorkingSlot found by the `where` argument doesn't exist, create a new WorkingSlot with this data.
     */
    create: XOR<WorkingSlotCreateInput, WorkingSlotUncheckedCreateInput>
    /**
     * In case the WorkingSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkingSlotUpdateInput, WorkingSlotUncheckedUpdateInput>
  }

  /**
   * WorkingSlot delete
   */
  export type WorkingSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
    /**
     * Filter which WorkingSlot to delete.
     */
    where: WorkingSlotWhereUniqueInput
  }

  /**
   * WorkingSlot deleteMany
   */
  export type WorkingSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingSlots to delete
     */
    where?: WorkingSlotWhereInput
    /**
     * Limit how many WorkingSlots to delete.
     */
    limit?: number
  }

  /**
   * WorkingSlot without action
   */
  export type WorkingSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingSlot
     */
    select?: WorkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingSlot
     */
    omit?: WorkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingSlotInclude<ExtArgs> | null
  }


  /**
   * Model WorkingHourRange
   */

  export type AggregateWorkingHourRange = {
    _count: WorkingHourRangeCountAggregateOutputType | null
    _avg: WorkingHourRangeAvgAggregateOutputType | null
    _sum: WorkingHourRangeSumAggregateOutputType | null
    _min: WorkingHourRangeMinAggregateOutputType | null
    _max: WorkingHourRangeMaxAggregateOutputType | null
  }

  export type WorkingHourRangeAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type WorkingHourRangeSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type WorkingHourRangeMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type WorkingHourRangeMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type WorkingHourRangeCountAggregateOutputType = {
    id: number
    employeeId: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type WorkingHourRangeAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type WorkingHourRangeSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type WorkingHourRangeMinAggregateInputType = {
    id?: true
    employeeId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type WorkingHourRangeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type WorkingHourRangeCountAggregateInputType = {
    id?: true
    employeeId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type WorkingHourRangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHourRange to aggregate.
     */
    where?: WorkingHourRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHourRanges to fetch.
     */
    orderBy?: WorkingHourRangeOrderByWithRelationInput | WorkingHourRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkingHourRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHourRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHourRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkingHourRanges
    **/
    _count?: true | WorkingHourRangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkingHourRangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkingHourRangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkingHourRangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkingHourRangeMaxAggregateInputType
  }

  export type GetWorkingHourRangeAggregateType<T extends WorkingHourRangeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkingHourRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkingHourRange[P]>
      : GetScalarType<T[P], AggregateWorkingHourRange[P]>
  }




  export type WorkingHourRangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHourRangeWhereInput
    orderBy?: WorkingHourRangeOrderByWithAggregationInput | WorkingHourRangeOrderByWithAggregationInput[]
    by: WorkingHourRangeScalarFieldEnum[] | WorkingHourRangeScalarFieldEnum
    having?: WorkingHourRangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkingHourRangeCountAggregateInputType | true
    _avg?: WorkingHourRangeAvgAggregateInputType
    _sum?: WorkingHourRangeSumAggregateInputType
    _min?: WorkingHourRangeMinAggregateInputType
    _max?: WorkingHourRangeMaxAggregateInputType
  }

  export type WorkingHourRangeGroupByOutputType = {
    id: number
    employeeId: number
    startDate: Date
    endDate: Date
    createdAt: Date
    _count: WorkingHourRangeCountAggregateOutputType | null
    _avg: WorkingHourRangeAvgAggregateOutputType | null
    _sum: WorkingHourRangeSumAggregateOutputType | null
    _min: WorkingHourRangeMinAggregateOutputType | null
    _max: WorkingHourRangeMaxAggregateOutputType | null
  }

  type GetWorkingHourRangeGroupByPayload<T extends WorkingHourRangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkingHourRangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkingHourRangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkingHourRangeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkingHourRangeGroupByOutputType[P]>
        }
      >
    >


  export type WorkingHourRangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    slots?: boolean | WorkingHourRange$slotsArgs<ExtArgs>
    _count?: boolean | WorkingHourRangeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHourRange"]>

  export type WorkingHourRangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHourRange"]>

  export type WorkingHourRangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHourRange"]>

  export type WorkingHourRangeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type WorkingHourRangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["workingHourRange"]>
  export type WorkingHourRangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    slots?: boolean | WorkingHourRange$slotsArgs<ExtArgs>
    _count?: boolean | WorkingHourRangeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkingHourRangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkingHourRangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkingHourRangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkingHourRange"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
      slots: Prisma.$RecurringSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      startDate: Date
      endDate: Date
      createdAt: Date
    }, ExtArgs["result"]["workingHourRange"]>
    composites: {}
  }

  type WorkingHourRangeGetPayload<S extends boolean | null | undefined | WorkingHourRangeDefaultArgs> = $Result.GetResult<Prisma.$WorkingHourRangePayload, S>

  type WorkingHourRangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkingHourRangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkingHourRangeCountAggregateInputType | true
    }

  export interface WorkingHourRangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkingHourRange'], meta: { name: 'WorkingHourRange' } }
    /**
     * Find zero or one WorkingHourRange that matches the filter.
     * @param {WorkingHourRangeFindUniqueArgs} args - Arguments to find a WorkingHourRange
     * @example
     * // Get one WorkingHourRange
     * const workingHourRange = await prisma.workingHourRange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkingHourRangeFindUniqueArgs>(args: SelectSubset<T, WorkingHourRangeFindUniqueArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkingHourRange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkingHourRangeFindUniqueOrThrowArgs} args - Arguments to find a WorkingHourRange
     * @example
     * // Get one WorkingHourRange
     * const workingHourRange = await prisma.workingHourRange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkingHourRangeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkingHourRangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHourRange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourRangeFindFirstArgs} args - Arguments to find a WorkingHourRange
     * @example
     * // Get one WorkingHourRange
     * const workingHourRange = await prisma.workingHourRange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkingHourRangeFindFirstArgs>(args?: SelectSubset<T, WorkingHourRangeFindFirstArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHourRange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourRangeFindFirstOrThrowArgs} args - Arguments to find a WorkingHourRange
     * @example
     * // Get one WorkingHourRange
     * const workingHourRange = await prisma.workingHourRange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkingHourRangeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkingHourRangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkingHourRanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourRangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkingHourRanges
     * const workingHourRanges = await prisma.workingHourRange.findMany()
     * 
     * // Get first 10 WorkingHourRanges
     * const workingHourRanges = await prisma.workingHourRange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workingHourRangeWithIdOnly = await prisma.workingHourRange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkingHourRangeFindManyArgs>(args?: SelectSubset<T, WorkingHourRangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkingHourRange.
     * @param {WorkingHourRangeCreateArgs} args - Arguments to create a WorkingHourRange.
     * @example
     * // Create one WorkingHourRange
     * const WorkingHourRange = await prisma.workingHourRange.create({
     *   data: {
     *     // ... data to create a WorkingHourRange
     *   }
     * })
     * 
     */
    create<T extends WorkingHourRangeCreateArgs>(args: SelectSubset<T, WorkingHourRangeCreateArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkingHourRanges.
     * @param {WorkingHourRangeCreateManyArgs} args - Arguments to create many WorkingHourRanges.
     * @example
     * // Create many WorkingHourRanges
     * const workingHourRange = await prisma.workingHourRange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkingHourRangeCreateManyArgs>(args?: SelectSubset<T, WorkingHourRangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkingHourRanges and returns the data saved in the database.
     * @param {WorkingHourRangeCreateManyAndReturnArgs} args - Arguments to create many WorkingHourRanges.
     * @example
     * // Create many WorkingHourRanges
     * const workingHourRange = await prisma.workingHourRange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkingHourRanges and only return the `id`
     * const workingHourRangeWithIdOnly = await prisma.workingHourRange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkingHourRangeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkingHourRangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkingHourRange.
     * @param {WorkingHourRangeDeleteArgs} args - Arguments to delete one WorkingHourRange.
     * @example
     * // Delete one WorkingHourRange
     * const WorkingHourRange = await prisma.workingHourRange.delete({
     *   where: {
     *     // ... filter to delete one WorkingHourRange
     *   }
     * })
     * 
     */
    delete<T extends WorkingHourRangeDeleteArgs>(args: SelectSubset<T, WorkingHourRangeDeleteArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkingHourRange.
     * @param {WorkingHourRangeUpdateArgs} args - Arguments to update one WorkingHourRange.
     * @example
     * // Update one WorkingHourRange
     * const workingHourRange = await prisma.workingHourRange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkingHourRangeUpdateArgs>(args: SelectSubset<T, WorkingHourRangeUpdateArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkingHourRanges.
     * @param {WorkingHourRangeDeleteManyArgs} args - Arguments to filter WorkingHourRanges to delete.
     * @example
     * // Delete a few WorkingHourRanges
     * const { count } = await prisma.workingHourRange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkingHourRangeDeleteManyArgs>(args?: SelectSubset<T, WorkingHourRangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHourRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourRangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkingHourRanges
     * const workingHourRange = await prisma.workingHourRange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkingHourRangeUpdateManyArgs>(args: SelectSubset<T, WorkingHourRangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHourRanges and returns the data updated in the database.
     * @param {WorkingHourRangeUpdateManyAndReturnArgs} args - Arguments to update many WorkingHourRanges.
     * @example
     * // Update many WorkingHourRanges
     * const workingHourRange = await prisma.workingHourRange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkingHourRanges and only return the `id`
     * const workingHourRangeWithIdOnly = await prisma.workingHourRange.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkingHourRangeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkingHourRangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkingHourRange.
     * @param {WorkingHourRangeUpsertArgs} args - Arguments to update or create a WorkingHourRange.
     * @example
     * // Update or create a WorkingHourRange
     * const workingHourRange = await prisma.workingHourRange.upsert({
     *   create: {
     *     // ... data to create a WorkingHourRange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkingHourRange we want to update
     *   }
     * })
     */
    upsert<T extends WorkingHourRangeUpsertArgs>(args: SelectSubset<T, WorkingHourRangeUpsertArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkingHourRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourRangeCountArgs} args - Arguments to filter WorkingHourRanges to count.
     * @example
     * // Count the number of WorkingHourRanges
     * const count = await prisma.workingHourRange.count({
     *   where: {
     *     // ... the filter for the WorkingHourRanges we want to count
     *   }
     * })
    **/
    count<T extends WorkingHourRangeCountArgs>(
      args?: Subset<T, WorkingHourRangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkingHourRangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkingHourRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourRangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkingHourRangeAggregateArgs>(args: Subset<T, WorkingHourRangeAggregateArgs>): Prisma.PrismaPromise<GetWorkingHourRangeAggregateType<T>>

    /**
     * Group by WorkingHourRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourRangeGroupByArgs} args - Group by arguments.
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
      T extends WorkingHourRangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkingHourRangeGroupByArgs['orderBy'] }
        : { orderBy?: WorkingHourRangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkingHourRangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkingHourRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkingHourRange model
   */
  readonly fields: WorkingHourRangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkingHourRange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkingHourRangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slots<T extends WorkingHourRange$slotsArgs<ExtArgs> = {}>(args?: Subset<T, WorkingHourRange$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkingHourRange model
   */
  interface WorkingHourRangeFieldRefs {
    readonly id: FieldRef<"WorkingHourRange", 'Int'>
    readonly employeeId: FieldRef<"WorkingHourRange", 'Int'>
    readonly startDate: FieldRef<"WorkingHourRange", 'DateTime'>
    readonly endDate: FieldRef<"WorkingHourRange", 'DateTime'>
    readonly createdAt: FieldRef<"WorkingHourRange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkingHourRange findUnique
   */
  export type WorkingHourRangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHourRange to fetch.
     */
    where: WorkingHourRangeWhereUniqueInput
  }

  /**
   * WorkingHourRange findUniqueOrThrow
   */
  export type WorkingHourRangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHourRange to fetch.
     */
    where: WorkingHourRangeWhereUniqueInput
  }

  /**
   * WorkingHourRange findFirst
   */
  export type WorkingHourRangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHourRange to fetch.
     */
    where?: WorkingHourRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHourRanges to fetch.
     */
    orderBy?: WorkingHourRangeOrderByWithRelationInput | WorkingHourRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHourRanges.
     */
    cursor?: WorkingHourRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHourRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHourRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHourRanges.
     */
    distinct?: WorkingHourRangeScalarFieldEnum | WorkingHourRangeScalarFieldEnum[]
  }

  /**
   * WorkingHourRange findFirstOrThrow
   */
  export type WorkingHourRangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHourRange to fetch.
     */
    where?: WorkingHourRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHourRanges to fetch.
     */
    orderBy?: WorkingHourRangeOrderByWithRelationInput | WorkingHourRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHourRanges.
     */
    cursor?: WorkingHourRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHourRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHourRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHourRanges.
     */
    distinct?: WorkingHourRangeScalarFieldEnum | WorkingHourRangeScalarFieldEnum[]
  }

  /**
   * WorkingHourRange findMany
   */
  export type WorkingHourRangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHourRanges to fetch.
     */
    where?: WorkingHourRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHourRanges to fetch.
     */
    orderBy?: WorkingHourRangeOrderByWithRelationInput | WorkingHourRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkingHourRanges.
     */
    cursor?: WorkingHourRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHourRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHourRanges.
     */
    skip?: number
    distinct?: WorkingHourRangeScalarFieldEnum | WorkingHourRangeScalarFieldEnum[]
  }

  /**
   * WorkingHourRange create
   */
  export type WorkingHourRangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkingHourRange.
     */
    data: XOR<WorkingHourRangeCreateInput, WorkingHourRangeUncheckedCreateInput>
  }

  /**
   * WorkingHourRange createMany
   */
  export type WorkingHourRangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkingHourRanges.
     */
    data: WorkingHourRangeCreateManyInput | WorkingHourRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkingHourRange createManyAndReturn
   */
  export type WorkingHourRangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkingHourRanges.
     */
    data: WorkingHourRangeCreateManyInput | WorkingHourRangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHourRange update
   */
  export type WorkingHourRangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkingHourRange.
     */
    data: XOR<WorkingHourRangeUpdateInput, WorkingHourRangeUncheckedUpdateInput>
    /**
     * Choose, which WorkingHourRange to update.
     */
    where: WorkingHourRangeWhereUniqueInput
  }

  /**
   * WorkingHourRange updateMany
   */
  export type WorkingHourRangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkingHourRanges.
     */
    data: XOR<WorkingHourRangeUpdateManyMutationInput, WorkingHourRangeUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHourRanges to update
     */
    where?: WorkingHourRangeWhereInput
    /**
     * Limit how many WorkingHourRanges to update.
     */
    limit?: number
  }

  /**
   * WorkingHourRange updateManyAndReturn
   */
  export type WorkingHourRangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * The data used to update WorkingHourRanges.
     */
    data: XOR<WorkingHourRangeUpdateManyMutationInput, WorkingHourRangeUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHourRanges to update
     */
    where?: WorkingHourRangeWhereInput
    /**
     * Limit how many WorkingHourRanges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHourRange upsert
   */
  export type WorkingHourRangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkingHourRange to update in case it exists.
     */
    where: WorkingHourRangeWhereUniqueInput
    /**
     * In case the WorkingHourRange found by the `where` argument doesn't exist, create a new WorkingHourRange with this data.
     */
    create: XOR<WorkingHourRangeCreateInput, WorkingHourRangeUncheckedCreateInput>
    /**
     * In case the WorkingHourRange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkingHourRangeUpdateInput, WorkingHourRangeUncheckedUpdateInput>
  }

  /**
   * WorkingHourRange delete
   */
  export type WorkingHourRangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
    /**
     * Filter which WorkingHourRange to delete.
     */
    where: WorkingHourRangeWhereUniqueInput
  }

  /**
   * WorkingHourRange deleteMany
   */
  export type WorkingHourRangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHourRanges to delete
     */
    where?: WorkingHourRangeWhereInput
    /**
     * Limit how many WorkingHourRanges to delete.
     */
    limit?: number
  }

  /**
   * WorkingHourRange.slots
   */
  export type WorkingHourRange$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    where?: RecurringSlotWhereInput
    orderBy?: RecurringSlotOrderByWithRelationInput | RecurringSlotOrderByWithRelationInput[]
    cursor?: RecurringSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringSlotScalarFieldEnum | RecurringSlotScalarFieldEnum[]
  }

  /**
   * WorkingHourRange without action
   */
  export type WorkingHourRangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHourRange
     */
    select?: WorkingHourRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHourRange
     */
    omit?: WorkingHourRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourRangeInclude<ExtArgs> | null
  }


  /**
   * Model RecurringSlot
   */

  export type AggregateRecurringSlot = {
    _count: RecurringSlotCountAggregateOutputType | null
    _avg: RecurringSlotAvgAggregateOutputType | null
    _sum: RecurringSlotSumAggregateOutputType | null
    _min: RecurringSlotMinAggregateOutputType | null
    _max: RecurringSlotMaxAggregateOutputType | null
  }

  export type RecurringSlotAvgAggregateOutputType = {
    id: number | null
    rangeId: number | null
  }

  export type RecurringSlotSumAggregateOutputType = {
    id: number | null
    rangeId: number | null
  }

  export type RecurringSlotMinAggregateOutputType = {
    id: number | null
    rangeId: number | null
    weekDay: $Enums.WeekDay | null
    startTime: string | null
    endTime: string | null
    onlyInStore: boolean | null
  }

  export type RecurringSlotMaxAggregateOutputType = {
    id: number | null
    rangeId: number | null
    weekDay: $Enums.WeekDay | null
    startTime: string | null
    endTime: string | null
    onlyInStore: boolean | null
  }

  export type RecurringSlotCountAggregateOutputType = {
    id: number
    rangeId: number
    weekDay: number
    startTime: number
    endTime: number
    onlyInStore: number
    _all: number
  }


  export type RecurringSlotAvgAggregateInputType = {
    id?: true
    rangeId?: true
  }

  export type RecurringSlotSumAggregateInputType = {
    id?: true
    rangeId?: true
  }

  export type RecurringSlotMinAggregateInputType = {
    id?: true
    rangeId?: true
    weekDay?: true
    startTime?: true
    endTime?: true
    onlyInStore?: true
  }

  export type RecurringSlotMaxAggregateInputType = {
    id?: true
    rangeId?: true
    weekDay?: true
    startTime?: true
    endTime?: true
    onlyInStore?: true
  }

  export type RecurringSlotCountAggregateInputType = {
    id?: true
    rangeId?: true
    weekDay?: true
    startTime?: true
    endTime?: true
    onlyInStore?: true
    _all?: true
  }

  export type RecurringSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringSlot to aggregate.
     */
    where?: RecurringSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringSlots to fetch.
     */
    orderBy?: RecurringSlotOrderByWithRelationInput | RecurringSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringSlots
    **/
    _count?: true | RecurringSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringSlotMaxAggregateInputType
  }

  export type GetRecurringSlotAggregateType<T extends RecurringSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringSlot[P]>
      : GetScalarType<T[P], AggregateRecurringSlot[P]>
  }




  export type RecurringSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringSlotWhereInput
    orderBy?: RecurringSlotOrderByWithAggregationInput | RecurringSlotOrderByWithAggregationInput[]
    by: RecurringSlotScalarFieldEnum[] | RecurringSlotScalarFieldEnum
    having?: RecurringSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringSlotCountAggregateInputType | true
    _avg?: RecurringSlotAvgAggregateInputType
    _sum?: RecurringSlotSumAggregateInputType
    _min?: RecurringSlotMinAggregateInputType
    _max?: RecurringSlotMaxAggregateInputType
  }

  export type RecurringSlotGroupByOutputType = {
    id: number
    rangeId: number
    weekDay: $Enums.WeekDay
    startTime: string
    endTime: string
    onlyInStore: boolean
    _count: RecurringSlotCountAggregateOutputType | null
    _avg: RecurringSlotAvgAggregateOutputType | null
    _sum: RecurringSlotSumAggregateOutputType | null
    _min: RecurringSlotMinAggregateOutputType | null
    _max: RecurringSlotMaxAggregateOutputType | null
  }

  type GetRecurringSlotGroupByPayload<T extends RecurringSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringSlotGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringSlotGroupByOutputType[P]>
        }
      >
    >


  export type RecurringSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rangeId?: boolean
    weekDay?: boolean
    startTime?: boolean
    endTime?: boolean
    onlyInStore?: boolean
    range?: boolean | WorkingHourRangeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringSlot"]>

  export type RecurringSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rangeId?: boolean
    weekDay?: boolean
    startTime?: boolean
    endTime?: boolean
    onlyInStore?: boolean
    range?: boolean | WorkingHourRangeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringSlot"]>

  export type RecurringSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rangeId?: boolean
    weekDay?: boolean
    startTime?: boolean
    endTime?: boolean
    onlyInStore?: boolean
    range?: boolean | WorkingHourRangeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringSlot"]>

  export type RecurringSlotSelectScalar = {
    id?: boolean
    rangeId?: boolean
    weekDay?: boolean
    startTime?: boolean
    endTime?: boolean
    onlyInStore?: boolean
  }

  export type RecurringSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rangeId" | "weekDay" | "startTime" | "endTime" | "onlyInStore", ExtArgs["result"]["recurringSlot"]>
  export type RecurringSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    range?: boolean | WorkingHourRangeDefaultArgs<ExtArgs>
  }
  export type RecurringSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    range?: boolean | WorkingHourRangeDefaultArgs<ExtArgs>
  }
  export type RecurringSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    range?: boolean | WorkingHourRangeDefaultArgs<ExtArgs>
  }

  export type $RecurringSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringSlot"
    objects: {
      range: Prisma.$WorkingHourRangePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rangeId: number
      weekDay: $Enums.WeekDay
      startTime: string
      endTime: string
      onlyInStore: boolean
    }, ExtArgs["result"]["recurringSlot"]>
    composites: {}
  }

  type RecurringSlotGetPayload<S extends boolean | null | undefined | RecurringSlotDefaultArgs> = $Result.GetResult<Prisma.$RecurringSlotPayload, S>

  type RecurringSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringSlotCountAggregateInputType | true
    }

  export interface RecurringSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringSlot'], meta: { name: 'RecurringSlot' } }
    /**
     * Find zero or one RecurringSlot that matches the filter.
     * @param {RecurringSlotFindUniqueArgs} args - Arguments to find a RecurringSlot
     * @example
     * // Get one RecurringSlot
     * const recurringSlot = await prisma.recurringSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringSlotFindUniqueArgs>(args: SelectSubset<T, RecurringSlotFindUniqueArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringSlotFindUniqueOrThrowArgs} args - Arguments to find a RecurringSlot
     * @example
     * // Get one RecurringSlot
     * const recurringSlot = await prisma.recurringSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringSlotFindFirstArgs} args - Arguments to find a RecurringSlot
     * @example
     * // Get one RecurringSlot
     * const recurringSlot = await prisma.recurringSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringSlotFindFirstArgs>(args?: SelectSubset<T, RecurringSlotFindFirstArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringSlotFindFirstOrThrowArgs} args - Arguments to find a RecurringSlot
     * @example
     * // Get one RecurringSlot
     * const recurringSlot = await prisma.recurringSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringSlots
     * const recurringSlots = await prisma.recurringSlot.findMany()
     * 
     * // Get first 10 RecurringSlots
     * const recurringSlots = await prisma.recurringSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringSlotWithIdOnly = await prisma.recurringSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringSlotFindManyArgs>(args?: SelectSubset<T, RecurringSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringSlot.
     * @param {RecurringSlotCreateArgs} args - Arguments to create a RecurringSlot.
     * @example
     * // Create one RecurringSlot
     * const RecurringSlot = await prisma.recurringSlot.create({
     *   data: {
     *     // ... data to create a RecurringSlot
     *   }
     * })
     * 
     */
    create<T extends RecurringSlotCreateArgs>(args: SelectSubset<T, RecurringSlotCreateArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringSlots.
     * @param {RecurringSlotCreateManyArgs} args - Arguments to create many RecurringSlots.
     * @example
     * // Create many RecurringSlots
     * const recurringSlot = await prisma.recurringSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringSlotCreateManyArgs>(args?: SelectSubset<T, RecurringSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringSlots and returns the data saved in the database.
     * @param {RecurringSlotCreateManyAndReturnArgs} args - Arguments to create many RecurringSlots.
     * @example
     * // Create many RecurringSlots
     * const recurringSlot = await prisma.recurringSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringSlots and only return the `id`
     * const recurringSlotWithIdOnly = await prisma.recurringSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringSlot.
     * @param {RecurringSlotDeleteArgs} args - Arguments to delete one RecurringSlot.
     * @example
     * // Delete one RecurringSlot
     * const RecurringSlot = await prisma.recurringSlot.delete({
     *   where: {
     *     // ... filter to delete one RecurringSlot
     *   }
     * })
     * 
     */
    delete<T extends RecurringSlotDeleteArgs>(args: SelectSubset<T, RecurringSlotDeleteArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringSlot.
     * @param {RecurringSlotUpdateArgs} args - Arguments to update one RecurringSlot.
     * @example
     * // Update one RecurringSlot
     * const recurringSlot = await prisma.recurringSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringSlotUpdateArgs>(args: SelectSubset<T, RecurringSlotUpdateArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringSlots.
     * @param {RecurringSlotDeleteManyArgs} args - Arguments to filter RecurringSlots to delete.
     * @example
     * // Delete a few RecurringSlots
     * const { count } = await prisma.recurringSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringSlotDeleteManyArgs>(args?: SelectSubset<T, RecurringSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringSlots
     * const recurringSlot = await prisma.recurringSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringSlotUpdateManyArgs>(args: SelectSubset<T, RecurringSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringSlots and returns the data updated in the database.
     * @param {RecurringSlotUpdateManyAndReturnArgs} args - Arguments to update many RecurringSlots.
     * @example
     * // Update many RecurringSlots
     * const recurringSlot = await prisma.recurringSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringSlots and only return the `id`
     * const recurringSlotWithIdOnly = await prisma.recurringSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurringSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringSlot.
     * @param {RecurringSlotUpsertArgs} args - Arguments to update or create a RecurringSlot.
     * @example
     * // Update or create a RecurringSlot
     * const recurringSlot = await prisma.recurringSlot.upsert({
     *   create: {
     *     // ... data to create a RecurringSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringSlot we want to update
     *   }
     * })
     */
    upsert<T extends RecurringSlotUpsertArgs>(args: SelectSubset<T, RecurringSlotUpsertArgs<ExtArgs>>): Prisma__RecurringSlotClient<$Result.GetResult<Prisma.$RecurringSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringSlotCountArgs} args - Arguments to filter RecurringSlots to count.
     * @example
     * // Count the number of RecurringSlots
     * const count = await prisma.recurringSlot.count({
     *   where: {
     *     // ... the filter for the RecurringSlots we want to count
     *   }
     * })
    **/
    count<T extends RecurringSlotCountArgs>(
      args?: Subset<T, RecurringSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecurringSlotAggregateArgs>(args: Subset<T, RecurringSlotAggregateArgs>): Prisma.PrismaPromise<GetRecurringSlotAggregateType<T>>

    /**
     * Group by RecurringSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringSlotGroupByArgs} args - Group by arguments.
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
      T extends RecurringSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringSlotGroupByArgs['orderBy'] }
        : { orderBy?: RecurringSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecurringSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringSlot model
   */
  readonly fields: RecurringSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    range<T extends WorkingHourRangeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkingHourRangeDefaultArgs<ExtArgs>>): Prisma__WorkingHourRangeClient<$Result.GetResult<Prisma.$WorkingHourRangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecurringSlot model
   */
  interface RecurringSlotFieldRefs {
    readonly id: FieldRef<"RecurringSlot", 'Int'>
    readonly rangeId: FieldRef<"RecurringSlot", 'Int'>
    readonly weekDay: FieldRef<"RecurringSlot", 'WeekDay'>
    readonly startTime: FieldRef<"RecurringSlot", 'String'>
    readonly endTime: FieldRef<"RecurringSlot", 'String'>
    readonly onlyInStore: FieldRef<"RecurringSlot", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RecurringSlot findUnique
   */
  export type RecurringSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * Filter, which RecurringSlot to fetch.
     */
    where: RecurringSlotWhereUniqueInput
  }

  /**
   * RecurringSlot findUniqueOrThrow
   */
  export type RecurringSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * Filter, which RecurringSlot to fetch.
     */
    where: RecurringSlotWhereUniqueInput
  }

  /**
   * RecurringSlot findFirst
   */
  export type RecurringSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * Filter, which RecurringSlot to fetch.
     */
    where?: RecurringSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringSlots to fetch.
     */
    orderBy?: RecurringSlotOrderByWithRelationInput | RecurringSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringSlots.
     */
    cursor?: RecurringSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringSlots.
     */
    distinct?: RecurringSlotScalarFieldEnum | RecurringSlotScalarFieldEnum[]
  }

  /**
   * RecurringSlot findFirstOrThrow
   */
  export type RecurringSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * Filter, which RecurringSlot to fetch.
     */
    where?: RecurringSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringSlots to fetch.
     */
    orderBy?: RecurringSlotOrderByWithRelationInput | RecurringSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringSlots.
     */
    cursor?: RecurringSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringSlots.
     */
    distinct?: RecurringSlotScalarFieldEnum | RecurringSlotScalarFieldEnum[]
  }

  /**
   * RecurringSlot findMany
   */
  export type RecurringSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * Filter, which RecurringSlots to fetch.
     */
    where?: RecurringSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringSlots to fetch.
     */
    orderBy?: RecurringSlotOrderByWithRelationInput | RecurringSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringSlots.
     */
    cursor?: RecurringSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringSlots.
     */
    skip?: number
    distinct?: RecurringSlotScalarFieldEnum | RecurringSlotScalarFieldEnum[]
  }

  /**
   * RecurringSlot create
   */
  export type RecurringSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringSlot.
     */
    data: XOR<RecurringSlotCreateInput, RecurringSlotUncheckedCreateInput>
  }

  /**
   * RecurringSlot createMany
   */
  export type RecurringSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringSlots.
     */
    data: RecurringSlotCreateManyInput | RecurringSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringSlot createManyAndReturn
   */
  export type RecurringSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringSlots.
     */
    data: RecurringSlotCreateManyInput | RecurringSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringSlot update
   */
  export type RecurringSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringSlot.
     */
    data: XOR<RecurringSlotUpdateInput, RecurringSlotUncheckedUpdateInput>
    /**
     * Choose, which RecurringSlot to update.
     */
    where: RecurringSlotWhereUniqueInput
  }

  /**
   * RecurringSlot updateMany
   */
  export type RecurringSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringSlots.
     */
    data: XOR<RecurringSlotUpdateManyMutationInput, RecurringSlotUncheckedUpdateManyInput>
    /**
     * Filter which RecurringSlots to update
     */
    where?: RecurringSlotWhereInput
    /**
     * Limit how many RecurringSlots to update.
     */
    limit?: number
  }

  /**
   * RecurringSlot updateManyAndReturn
   */
  export type RecurringSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * The data used to update RecurringSlots.
     */
    data: XOR<RecurringSlotUpdateManyMutationInput, RecurringSlotUncheckedUpdateManyInput>
    /**
     * Filter which RecurringSlots to update
     */
    where?: RecurringSlotWhereInput
    /**
     * Limit how many RecurringSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringSlot upsert
   */
  export type RecurringSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringSlot to update in case it exists.
     */
    where: RecurringSlotWhereUniqueInput
    /**
     * In case the RecurringSlot found by the `where` argument doesn't exist, create a new RecurringSlot with this data.
     */
    create: XOR<RecurringSlotCreateInput, RecurringSlotUncheckedCreateInput>
    /**
     * In case the RecurringSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringSlotUpdateInput, RecurringSlotUncheckedUpdateInput>
  }

  /**
   * RecurringSlot delete
   */
  export type RecurringSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
    /**
     * Filter which RecurringSlot to delete.
     */
    where: RecurringSlotWhereUniqueInput
  }

  /**
   * RecurringSlot deleteMany
   */
  export type RecurringSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringSlots to delete
     */
    where?: RecurringSlotWhereInput
    /**
     * Limit how many RecurringSlots to delete.
     */
    limit?: number
  }

  /**
   * RecurringSlot without action
   */
  export type RecurringSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringSlot
     */
    select?: RecurringSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringSlot
     */
    omit?: RecurringSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringSlotInclude<ExtArgs> | null
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
    email: 'email',
    hashedPassword: 'hashedPassword',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    duration: 'duration',
    price: 'price',
    createdById: 'createdById'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const EmployeeServiceScalarFieldEnum: {
    employeeId: 'employeeId',
    serviceId: 'serviceId'
  };

  export type EmployeeServiceScalarFieldEnum = (typeof EmployeeServiceScalarFieldEnum)[keyof typeof EmployeeServiceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    date: 'date',
    customerId: 'customerId',
    serviceId: 'serviceId',
    employeeId: 'employeeId',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    method: 'method'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const WorkingSlotScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    onlyInStore: 'onlyInStore'
  };

  export type WorkingSlotScalarFieldEnum = (typeof WorkingSlotScalarFieldEnum)[keyof typeof WorkingSlotScalarFieldEnum]


  export const WorkingHourRangeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type WorkingHourRangeScalarFieldEnum = (typeof WorkingHourRangeScalarFieldEnum)[keyof typeof WorkingHourRangeScalarFieldEnum]


  export const RecurringSlotScalarFieldEnum: {
    id: 'id',
    rangeId: 'rangeId',
    weekDay: 'weekDay',
    startTime: 'startTime',
    endTime: 'endTime',
    onlyInStore: 'onlyInStore'
  };

  export type RecurringSlotScalarFieldEnum = (typeof RecurringSlotScalarFieldEnum)[keyof typeof RecurringSlotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'BookingMethod'
   */
  export type EnumBookingMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingMethod'>
    


  /**
   * Reference to a field of type 'BookingMethod[]'
   */
  export type ListEnumBookingMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingMethod[]'>
    


  /**
   * Reference to a field of type 'WeekDay'
   */
  export type EnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay'>
    


  /**
   * Reference to a field of type 'WeekDay[]'
   */
  export type ListEnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    services?: EmployeeServiceListRelationFilter
    servicesCreated?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
    workingSlots?: WorkingSlotListRelationFilter
    workingHourRanges?: WorkingHourRangeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    services?: EmployeeServiceOrderByRelationAggregateInput
    servicesCreated?: ServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    workingSlots?: WorkingSlotOrderByRelationAggregateInput
    workingHourRanges?: WorkingHourRangeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    services?: EmployeeServiceListRelationFilter
    servicesCreated?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
    workingSlots?: WorkingSlotListRelationFilter
    workingHourRanges?: WorkingHourRangeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    createdById?: IntFilter<"Service"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    employees?: EmployeeServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    employees?: EmployeeServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    createdById?: IntFilter<"Service"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    employees?: EmployeeServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdById?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    duration?: IntWithAggregatesFilter<"Service"> | number
    price?: FloatWithAggregatesFilter<"Service"> | number
    createdById?: IntWithAggregatesFilter<"Service"> | number
  }

  export type EmployeeServiceWhereInput = {
    AND?: EmployeeServiceWhereInput | EmployeeServiceWhereInput[]
    OR?: EmployeeServiceWhereInput[]
    NOT?: EmployeeServiceWhereInput | EmployeeServiceWhereInput[]
    employeeId?: IntFilter<"EmployeeService"> | number
    serviceId?: IntFilter<"EmployeeService"> | number
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type EmployeeServiceOrderByWithRelationInput = {
    employeeId?: SortOrder
    serviceId?: SortOrder
    employee?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type EmployeeServiceWhereUniqueInput = Prisma.AtLeast<{
    employeeId_serviceId?: EmployeeServiceEmployeeIdServiceIdCompoundUniqueInput
    AND?: EmployeeServiceWhereInput | EmployeeServiceWhereInput[]
    OR?: EmployeeServiceWhereInput[]
    NOT?: EmployeeServiceWhereInput | EmployeeServiceWhereInput[]
    employeeId?: IntFilter<"EmployeeService"> | number
    serviceId?: IntFilter<"EmployeeService"> | number
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "employeeId_serviceId">

  export type EmployeeServiceOrderByWithAggregationInput = {
    employeeId?: SortOrder
    serviceId?: SortOrder
    _count?: EmployeeServiceCountOrderByAggregateInput
    _avg?: EmployeeServiceAvgOrderByAggregateInput
    _max?: EmployeeServiceMaxOrderByAggregateInput
    _min?: EmployeeServiceMinOrderByAggregateInput
    _sum?: EmployeeServiceSumOrderByAggregateInput
  }

  export type EmployeeServiceScalarWhereWithAggregatesInput = {
    AND?: EmployeeServiceScalarWhereWithAggregatesInput | EmployeeServiceScalarWhereWithAggregatesInput[]
    OR?: EmployeeServiceScalarWhereWithAggregatesInput[]
    NOT?: EmployeeServiceScalarWhereWithAggregatesInput | EmployeeServiceScalarWhereWithAggregatesInput[]
    employeeId?: IntWithAggregatesFilter<"EmployeeService"> | number
    serviceId?: IntWithAggregatesFilter<"EmployeeService"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    date?: DateTimeFilter<"Booking"> | Date | string
    customerId?: IntFilter<"Booking"> | number
    serviceId?: IntFilter<"Booking"> | number
    employeeId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    method?: EnumBookingMethodNullableFilter<"Booking"> | $Enums.BookingMethod | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    method?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    employee?: UserOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    date?: DateTimeFilter<"Booking"> | Date | string
    customerId?: IntFilter<"Booking"> | number
    serviceId?: IntFilter<"Booking"> | number
    employeeId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    method?: EnumBookingMethodNullableFilter<"Booking"> | $Enums.BookingMethod | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    method?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    customerId?: IntWithAggregatesFilter<"Booking"> | number
    serviceId?: IntWithAggregatesFilter<"Booking"> | number
    employeeId?: IntWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    method?: EnumBookingMethodNullableWithAggregatesFilter<"Booking"> | $Enums.BookingMethod | null
  }

  export type WorkingSlotWhereInput = {
    AND?: WorkingSlotWhereInput | WorkingSlotWhereInput[]
    OR?: WorkingSlotWhereInput[]
    NOT?: WorkingSlotWhereInput | WorkingSlotWhereInput[]
    id?: IntFilter<"WorkingSlot"> | number
    employeeId?: IntFilter<"WorkingSlot"> | number
    date?: DateTimeFilter<"WorkingSlot"> | Date | string
    startTime?: StringFilter<"WorkingSlot"> | string
    endTime?: StringFilter<"WorkingSlot"> | string
    createdAt?: DateTimeFilter<"WorkingSlot"> | Date | string
    onlyInStore?: BoolFilter<"WorkingSlot"> | boolean
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkingSlotOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    onlyInStore?: SortOrder
    employee?: UserOrderByWithRelationInput
  }

  export type WorkingSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkingSlotWhereInput | WorkingSlotWhereInput[]
    OR?: WorkingSlotWhereInput[]
    NOT?: WorkingSlotWhereInput | WorkingSlotWhereInput[]
    employeeId?: IntFilter<"WorkingSlot"> | number
    date?: DateTimeFilter<"WorkingSlot"> | Date | string
    startTime?: StringFilter<"WorkingSlot"> | string
    endTime?: StringFilter<"WorkingSlot"> | string
    createdAt?: DateTimeFilter<"WorkingSlot"> | Date | string
    onlyInStore?: BoolFilter<"WorkingSlot"> | boolean
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkingSlotOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    onlyInStore?: SortOrder
    _count?: WorkingSlotCountOrderByAggregateInput
    _avg?: WorkingSlotAvgOrderByAggregateInput
    _max?: WorkingSlotMaxOrderByAggregateInput
    _min?: WorkingSlotMinOrderByAggregateInput
    _sum?: WorkingSlotSumOrderByAggregateInput
  }

  export type WorkingSlotScalarWhereWithAggregatesInput = {
    AND?: WorkingSlotScalarWhereWithAggregatesInput | WorkingSlotScalarWhereWithAggregatesInput[]
    OR?: WorkingSlotScalarWhereWithAggregatesInput[]
    NOT?: WorkingSlotScalarWhereWithAggregatesInput | WorkingSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkingSlot"> | number
    employeeId?: IntWithAggregatesFilter<"WorkingSlot"> | number
    date?: DateTimeWithAggregatesFilter<"WorkingSlot"> | Date | string
    startTime?: StringWithAggregatesFilter<"WorkingSlot"> | string
    endTime?: StringWithAggregatesFilter<"WorkingSlot"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkingSlot"> | Date | string
    onlyInStore?: BoolWithAggregatesFilter<"WorkingSlot"> | boolean
  }

  export type WorkingHourRangeWhereInput = {
    AND?: WorkingHourRangeWhereInput | WorkingHourRangeWhereInput[]
    OR?: WorkingHourRangeWhereInput[]
    NOT?: WorkingHourRangeWhereInput | WorkingHourRangeWhereInput[]
    id?: IntFilter<"WorkingHourRange"> | number
    employeeId?: IntFilter<"WorkingHourRange"> | number
    startDate?: DateTimeFilter<"WorkingHourRange"> | Date | string
    endDate?: DateTimeFilter<"WorkingHourRange"> | Date | string
    createdAt?: DateTimeFilter<"WorkingHourRange"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    slots?: RecurringSlotListRelationFilter
  }

  export type WorkingHourRangeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    employee?: UserOrderByWithRelationInput
    slots?: RecurringSlotOrderByRelationAggregateInput
  }

  export type WorkingHourRangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkingHourRangeWhereInput | WorkingHourRangeWhereInput[]
    OR?: WorkingHourRangeWhereInput[]
    NOT?: WorkingHourRangeWhereInput | WorkingHourRangeWhereInput[]
    employeeId?: IntFilter<"WorkingHourRange"> | number
    startDate?: DateTimeFilter<"WorkingHourRange"> | Date | string
    endDate?: DateTimeFilter<"WorkingHourRange"> | Date | string
    createdAt?: DateTimeFilter<"WorkingHourRange"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    slots?: RecurringSlotListRelationFilter
  }, "id">

  export type WorkingHourRangeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: WorkingHourRangeCountOrderByAggregateInput
    _avg?: WorkingHourRangeAvgOrderByAggregateInput
    _max?: WorkingHourRangeMaxOrderByAggregateInput
    _min?: WorkingHourRangeMinOrderByAggregateInput
    _sum?: WorkingHourRangeSumOrderByAggregateInput
  }

  export type WorkingHourRangeScalarWhereWithAggregatesInput = {
    AND?: WorkingHourRangeScalarWhereWithAggregatesInput | WorkingHourRangeScalarWhereWithAggregatesInput[]
    OR?: WorkingHourRangeScalarWhereWithAggregatesInput[]
    NOT?: WorkingHourRangeScalarWhereWithAggregatesInput | WorkingHourRangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkingHourRange"> | number
    employeeId?: IntWithAggregatesFilter<"WorkingHourRange"> | number
    startDate?: DateTimeWithAggregatesFilter<"WorkingHourRange"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"WorkingHourRange"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkingHourRange"> | Date | string
  }

  export type RecurringSlotWhereInput = {
    AND?: RecurringSlotWhereInput | RecurringSlotWhereInput[]
    OR?: RecurringSlotWhereInput[]
    NOT?: RecurringSlotWhereInput | RecurringSlotWhereInput[]
    id?: IntFilter<"RecurringSlot"> | number
    rangeId?: IntFilter<"RecurringSlot"> | number
    weekDay?: EnumWeekDayFilter<"RecurringSlot"> | $Enums.WeekDay
    startTime?: StringFilter<"RecurringSlot"> | string
    endTime?: StringFilter<"RecurringSlot"> | string
    onlyInStore?: BoolFilter<"RecurringSlot"> | boolean
    range?: XOR<WorkingHourRangeScalarRelationFilter, WorkingHourRangeWhereInput>
  }

  export type RecurringSlotOrderByWithRelationInput = {
    id?: SortOrder
    rangeId?: SortOrder
    weekDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    onlyInStore?: SortOrder
    range?: WorkingHourRangeOrderByWithRelationInput
  }

  export type RecurringSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecurringSlotWhereInput | RecurringSlotWhereInput[]
    OR?: RecurringSlotWhereInput[]
    NOT?: RecurringSlotWhereInput | RecurringSlotWhereInput[]
    rangeId?: IntFilter<"RecurringSlot"> | number
    weekDay?: EnumWeekDayFilter<"RecurringSlot"> | $Enums.WeekDay
    startTime?: StringFilter<"RecurringSlot"> | string
    endTime?: StringFilter<"RecurringSlot"> | string
    onlyInStore?: BoolFilter<"RecurringSlot"> | boolean
    range?: XOR<WorkingHourRangeScalarRelationFilter, WorkingHourRangeWhereInput>
  }, "id">

  export type RecurringSlotOrderByWithAggregationInput = {
    id?: SortOrder
    rangeId?: SortOrder
    weekDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    onlyInStore?: SortOrder
    _count?: RecurringSlotCountOrderByAggregateInput
    _avg?: RecurringSlotAvgOrderByAggregateInput
    _max?: RecurringSlotMaxOrderByAggregateInput
    _min?: RecurringSlotMinOrderByAggregateInput
    _sum?: RecurringSlotSumOrderByAggregateInput
  }

  export type RecurringSlotScalarWhereWithAggregatesInput = {
    AND?: RecurringSlotScalarWhereWithAggregatesInput | RecurringSlotScalarWhereWithAggregatesInput[]
    OR?: RecurringSlotScalarWhereWithAggregatesInput[]
    NOT?: RecurringSlotScalarWhereWithAggregatesInput | RecurringSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecurringSlot"> | number
    rangeId?: IntWithAggregatesFilter<"RecurringSlot"> | number
    weekDay?: EnumWeekDayWithAggregatesFilter<"RecurringSlot"> | $Enums.WeekDay
    startTime?: StringWithAggregatesFilter<"RecurringSlot"> | string
    endTime?: StringWithAggregatesFilter<"RecurringSlot"> | string
    onlyInStore?: BoolWithAggregatesFilter<"RecurringSlot"> | boolean
  }

  export type UserCreateInput = {
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceUncheckedCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotUncheckedCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUncheckedUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateInput = {
    name: string
    phone: string
    email?: string | null
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    duration: number
    price: number
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    employees?: EmployeeServiceCreateNestedManyWithoutServiceInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    duration: number
    price: number
    createdById: number
    employees?: EmployeeServiceUncheckedCreateNestedManyWithoutServiceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    employees?: EmployeeServiceUpdateManyWithoutServiceNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeServiceUncheckedUpdateManyWithoutServiceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    duration: number
    price: number
    createdById: number
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeServiceCreateInput = {
    employee: UserCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeServiceUncheckedCreateInput = {
    employeeId: number
    serviceId: number
  }

  export type EmployeeServiceUpdateInput = {
    employee?: UserUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeServiceUncheckedUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeServiceCreateManyInput = {
    employeeId: number
    serviceId: number
  }

  export type EmployeeServiceUpdateManyMutationInput = {

  }

  export type EmployeeServiceUncheckedUpdateManyInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    date: Date | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
    customer: CustomerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    employee: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    date: Date | string
    customerId: number
    serviceId: number
    employeeId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type BookingUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    employee?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type BookingCreateManyInput = {
    id?: number
    date: Date | string
    customerId: number
    serviceId: number
    employeeId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type BookingUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type WorkingSlotCreateInput = {
    date: Date | string
    startTime: string
    endTime: string
    createdAt?: Date | string
    onlyInStore?: boolean
    employee: UserCreateNestedOneWithoutWorkingSlotsInput
  }

  export type WorkingSlotUncheckedCreateInput = {
    id?: number
    employeeId: number
    date: Date | string
    startTime: string
    endTime: string
    createdAt?: Date | string
    onlyInStore?: boolean
  }

  export type WorkingSlotUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
    employee?: UserUpdateOneRequiredWithoutWorkingSlotsNestedInput
  }

  export type WorkingSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingSlotCreateManyInput = {
    id?: number
    employeeId: number
    date: Date | string
    startTime: string
    endTime: string
    createdAt?: Date | string
    onlyInStore?: boolean
  }

  export type WorkingSlotUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingHourRangeCreateInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutWorkingHourRangesInput
    slots?: RecurringSlotCreateNestedManyWithoutRangeInput
  }

  export type WorkingHourRangeUncheckedCreateInput = {
    id?: number
    employeeId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    slots?: RecurringSlotUncheckedCreateNestedManyWithoutRangeInput
  }

  export type WorkingHourRangeUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutWorkingHourRangesNestedInput
    slots?: RecurringSlotUpdateManyWithoutRangeNestedInput
  }

  export type WorkingHourRangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: RecurringSlotUncheckedUpdateManyWithoutRangeNestedInput
  }

  export type WorkingHourRangeCreateManyInput = {
    id?: number
    employeeId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type WorkingHourRangeUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHourRangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringSlotCreateInput = {
    weekDay: $Enums.WeekDay
    startTime: string
    endTime: string
    onlyInStore?: boolean
    range: WorkingHourRangeCreateNestedOneWithoutSlotsInput
  }

  export type RecurringSlotUncheckedCreateInput = {
    id?: number
    rangeId: number
    weekDay: $Enums.WeekDay
    startTime: string
    endTime: string
    onlyInStore?: boolean
  }

  export type RecurringSlotUpdateInput = {
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
    range?: WorkingHourRangeUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type RecurringSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurringSlotCreateManyInput = {
    id?: number
    rangeId: number
    weekDay: $Enums.WeekDay
    startTime: string
    endTime: string
    onlyInStore?: boolean
  }

  export type RecurringSlotUpdateManyMutationInput = {
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurringSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmployeeServiceListRelationFilter = {
    every?: EmployeeServiceWhereInput
    some?: EmployeeServiceWhereInput
    none?: EmployeeServiceWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type WorkingSlotListRelationFilter = {
    every?: WorkingSlotWhereInput
    some?: WorkingSlotWhereInput
    none?: WorkingSlotWhereInput
  }

  export type WorkingHourRangeListRelationFilter = {
    every?: WorkingHourRangeWhereInput
    some?: WorkingHourRangeWhereInput
    none?: WorkingHourRangeWhereInput
  }

  export type EmployeeServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkingSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkingHourRangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdById?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdById?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdById?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdById?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdById?: SortOrder
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

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type EmployeeServiceEmployeeIdServiceIdCompoundUniqueInput = {
    employeeId: number
    serviceId: number
  }

  export type EmployeeServiceCountOrderByAggregateInput = {
    employeeId?: SortOrder
    serviceId?: SortOrder
  }

  export type EmployeeServiceAvgOrderByAggregateInput = {
    employeeId?: SortOrder
    serviceId?: SortOrder
  }

  export type EmployeeServiceMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    serviceId?: SortOrder
  }

  export type EmployeeServiceMinOrderByAggregateInput = {
    employeeId?: SortOrder
    serviceId?: SortOrder
  }

  export type EmployeeServiceSumOrderByAggregateInput = {
    employeeId?: SortOrder
    serviceId?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumBookingMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingMethod | EnumBookingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingMethodNullableFilter<$PrismaModel> | $Enums.BookingMethod | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    method?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    employeeId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    method?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    method?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    employeeId?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumBookingMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingMethod | EnumBookingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingMethodNullableFilter<$PrismaModel>
  }

  export type WorkingSlotCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    onlyInStore?: SortOrder
  }

  export type WorkingSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type WorkingSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    onlyInStore?: SortOrder
  }

  export type WorkingSlotMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    onlyInStore?: SortOrder
  }

  export type WorkingSlotSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type RecurringSlotListRelationFilter = {
    every?: RecurringSlotWhereInput
    some?: RecurringSlotWhereInput
    none?: RecurringSlotWhereInput
  }

  export type RecurringSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkingHourRangeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkingHourRangeAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type WorkingHourRangeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkingHourRangeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkingHourRangeSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type WorkingHourRangeScalarRelationFilter = {
    is?: WorkingHourRangeWhereInput
    isNot?: WorkingHourRangeWhereInput
  }

  export type RecurringSlotCountOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    weekDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    onlyInStore?: SortOrder
  }

  export type RecurringSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
  }

  export type RecurringSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    weekDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    onlyInStore?: SortOrder
  }

  export type RecurringSlotMinOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    weekDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    onlyInStore?: SortOrder
  }

  export type RecurringSlotSumOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
  }

  export type EnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type EmployeeServiceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeServiceCreateWithoutEmployeeInput, EmployeeServiceUncheckedCreateWithoutEmployeeInput> | EmployeeServiceCreateWithoutEmployeeInput[] | EmployeeServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutEmployeeInput | EmployeeServiceCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeServiceCreateManyEmployeeInputEnvelope
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WorkingSlotCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkingSlotCreateWithoutEmployeeInput, WorkingSlotUncheckedCreateWithoutEmployeeInput> | WorkingSlotCreateWithoutEmployeeInput[] | WorkingSlotUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingSlotCreateOrConnectWithoutEmployeeInput | WorkingSlotCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkingSlotCreateManyEmployeeInputEnvelope
    connect?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
  }

  export type WorkingHourRangeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkingHourRangeCreateWithoutEmployeeInput, WorkingHourRangeUncheckedCreateWithoutEmployeeInput> | WorkingHourRangeCreateWithoutEmployeeInput[] | WorkingHourRangeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingHourRangeCreateOrConnectWithoutEmployeeInput | WorkingHourRangeCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkingHourRangeCreateManyEmployeeInputEnvelope
    connect?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
  }

  export type EmployeeServiceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeServiceCreateWithoutEmployeeInput, EmployeeServiceUncheckedCreateWithoutEmployeeInput> | EmployeeServiceCreateWithoutEmployeeInput[] | EmployeeServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutEmployeeInput | EmployeeServiceCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeServiceCreateManyEmployeeInputEnvelope
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WorkingSlotUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkingSlotCreateWithoutEmployeeInput, WorkingSlotUncheckedCreateWithoutEmployeeInput> | WorkingSlotCreateWithoutEmployeeInput[] | WorkingSlotUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingSlotCreateOrConnectWithoutEmployeeInput | WorkingSlotCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkingSlotCreateManyEmployeeInputEnvelope
    connect?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
  }

  export type WorkingHourRangeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkingHourRangeCreateWithoutEmployeeInput, WorkingHourRangeUncheckedCreateWithoutEmployeeInput> | WorkingHourRangeCreateWithoutEmployeeInput[] | WorkingHourRangeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingHourRangeCreateOrConnectWithoutEmployeeInput | WorkingHourRangeCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkingHourRangeCreateManyEmployeeInputEnvelope
    connect?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmployeeServiceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeServiceCreateWithoutEmployeeInput, EmployeeServiceUncheckedCreateWithoutEmployeeInput> | EmployeeServiceCreateWithoutEmployeeInput[] | EmployeeServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutEmployeeInput | EmployeeServiceCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeServiceUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeServiceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeServiceCreateManyEmployeeInputEnvelope
    set?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    disconnect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    delete?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    update?: EmployeeServiceUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeServiceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeServiceUpdateManyWithWhereWithoutEmployeeInput | EmployeeServiceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeServiceScalarWhereInput | EmployeeServiceScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCreatedByInput | ServiceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCreatedByInput | ServiceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCreatedByInput | ServiceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEmployeeInput | BookingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEmployeeInput | BookingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEmployeeInput | BookingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WorkingSlotUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkingSlotCreateWithoutEmployeeInput, WorkingSlotUncheckedCreateWithoutEmployeeInput> | WorkingSlotCreateWithoutEmployeeInput[] | WorkingSlotUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingSlotCreateOrConnectWithoutEmployeeInput | WorkingSlotCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkingSlotUpsertWithWhereUniqueWithoutEmployeeInput | WorkingSlotUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkingSlotCreateManyEmployeeInputEnvelope
    set?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    disconnect?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    delete?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    connect?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    update?: WorkingSlotUpdateWithWhereUniqueWithoutEmployeeInput | WorkingSlotUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkingSlotUpdateManyWithWhereWithoutEmployeeInput | WorkingSlotUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkingSlotScalarWhereInput | WorkingSlotScalarWhereInput[]
  }

  export type WorkingHourRangeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkingHourRangeCreateWithoutEmployeeInput, WorkingHourRangeUncheckedCreateWithoutEmployeeInput> | WorkingHourRangeCreateWithoutEmployeeInput[] | WorkingHourRangeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingHourRangeCreateOrConnectWithoutEmployeeInput | WorkingHourRangeCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkingHourRangeUpsertWithWhereUniqueWithoutEmployeeInput | WorkingHourRangeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkingHourRangeCreateManyEmployeeInputEnvelope
    set?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    disconnect?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    delete?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    connect?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    update?: WorkingHourRangeUpdateWithWhereUniqueWithoutEmployeeInput | WorkingHourRangeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkingHourRangeUpdateManyWithWhereWithoutEmployeeInput | WorkingHourRangeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkingHourRangeScalarWhereInput | WorkingHourRangeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeServiceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeServiceCreateWithoutEmployeeInput, EmployeeServiceUncheckedCreateWithoutEmployeeInput> | EmployeeServiceCreateWithoutEmployeeInput[] | EmployeeServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutEmployeeInput | EmployeeServiceCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeServiceUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeServiceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeServiceCreateManyEmployeeInputEnvelope
    set?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    disconnect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    delete?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    update?: EmployeeServiceUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeServiceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeServiceUpdateManyWithWhereWithoutEmployeeInput | EmployeeServiceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeServiceScalarWhereInput | EmployeeServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCreatedByInput | ServiceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCreatedByInput | ServiceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCreatedByInput | ServiceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput> | BookingCreateWithoutEmployeeInput[] | BookingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEmployeeInput | BookingCreateOrConnectWithoutEmployeeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEmployeeInput | BookingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: BookingCreateManyEmployeeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEmployeeInput | BookingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEmployeeInput | BookingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WorkingSlotUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkingSlotCreateWithoutEmployeeInput, WorkingSlotUncheckedCreateWithoutEmployeeInput> | WorkingSlotCreateWithoutEmployeeInput[] | WorkingSlotUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingSlotCreateOrConnectWithoutEmployeeInput | WorkingSlotCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkingSlotUpsertWithWhereUniqueWithoutEmployeeInput | WorkingSlotUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkingSlotCreateManyEmployeeInputEnvelope
    set?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    disconnect?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    delete?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    connect?: WorkingSlotWhereUniqueInput | WorkingSlotWhereUniqueInput[]
    update?: WorkingSlotUpdateWithWhereUniqueWithoutEmployeeInput | WorkingSlotUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkingSlotUpdateManyWithWhereWithoutEmployeeInput | WorkingSlotUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkingSlotScalarWhereInput | WorkingSlotScalarWhereInput[]
  }

  export type WorkingHourRangeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkingHourRangeCreateWithoutEmployeeInput, WorkingHourRangeUncheckedCreateWithoutEmployeeInput> | WorkingHourRangeCreateWithoutEmployeeInput[] | WorkingHourRangeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkingHourRangeCreateOrConnectWithoutEmployeeInput | WorkingHourRangeCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkingHourRangeUpsertWithWhereUniqueWithoutEmployeeInput | WorkingHourRangeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkingHourRangeCreateManyEmployeeInputEnvelope
    set?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    disconnect?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    delete?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    connect?: WorkingHourRangeWhereUniqueInput | WorkingHourRangeWhereUniqueInput[]
    update?: WorkingHourRangeUpdateWithWhereUniqueWithoutEmployeeInput | WorkingHourRangeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkingHourRangeUpdateManyWithWhereWithoutEmployeeInput | WorkingHourRangeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkingHourRangeScalarWhereInput | WorkingHourRangeScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesCreatedInput = {
    create?: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type EmployeeServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<EmployeeServiceCreateWithoutServiceInput, EmployeeServiceUncheckedCreateWithoutServiceInput> | EmployeeServiceCreateWithoutServiceInput[] | EmployeeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutServiceInput | EmployeeServiceCreateOrConnectWithoutServiceInput[]
    createMany?: EmployeeServiceCreateManyServiceInputEnvelope
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EmployeeServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<EmployeeServiceCreateWithoutServiceInput, EmployeeServiceUncheckedCreateWithoutServiceInput> | EmployeeServiceCreateWithoutServiceInput[] | EmployeeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutServiceInput | EmployeeServiceCreateOrConnectWithoutServiceInput[]
    createMany?: EmployeeServiceCreateManyServiceInputEnvelope
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutServicesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesCreatedInput
    upsert?: UserUpsertWithoutServicesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesCreatedInput, UserUpdateWithoutServicesCreatedInput>, UserUncheckedUpdateWithoutServicesCreatedInput>
  }

  export type EmployeeServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<EmployeeServiceCreateWithoutServiceInput, EmployeeServiceUncheckedCreateWithoutServiceInput> | EmployeeServiceCreateWithoutServiceInput[] | EmployeeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutServiceInput | EmployeeServiceCreateOrConnectWithoutServiceInput[]
    upsert?: EmployeeServiceUpsertWithWhereUniqueWithoutServiceInput | EmployeeServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: EmployeeServiceCreateManyServiceInputEnvelope
    set?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    disconnect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    delete?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    update?: EmployeeServiceUpdateWithWhereUniqueWithoutServiceInput | EmployeeServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: EmployeeServiceUpdateManyWithWhereWithoutServiceInput | EmployeeServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: EmployeeServiceScalarWhereInput | EmployeeServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EmployeeServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<EmployeeServiceCreateWithoutServiceInput, EmployeeServiceUncheckedCreateWithoutServiceInput> | EmployeeServiceCreateWithoutServiceInput[] | EmployeeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: EmployeeServiceCreateOrConnectWithoutServiceInput | EmployeeServiceCreateOrConnectWithoutServiceInput[]
    upsert?: EmployeeServiceUpsertWithWhereUniqueWithoutServiceInput | EmployeeServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: EmployeeServiceCreateManyServiceInputEnvelope
    set?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    disconnect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    delete?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    connect?: EmployeeServiceWhereUniqueInput | EmployeeServiceWhereUniqueInput[]
    update?: EmployeeServiceUpdateWithWhereUniqueWithoutServiceInput | EmployeeServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: EmployeeServiceUpdateManyWithWhereWithoutServiceInput | EmployeeServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: EmployeeServiceScalarWhereInput | EmployeeServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<ServiceCreateWithoutEmployeesInput, ServiceUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutEmployeesInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    upsert?: UserUpsertWithoutServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesInput, UserUpdateWithoutServicesInput>, UserUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<ServiceCreateWithoutEmployeesInput, ServiceUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutEmployeesInput
    upsert?: ServiceUpsertWithoutEmployeesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutEmployeesInput, ServiceUpdateWithoutEmployeesInput>, ServiceUncheckedUpdateWithoutEmployeesInput>
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type NullableEnumBookingMethodFieldUpdateOperationsInput = {
    set?: $Enums.BookingMethod | null
  }

  export type CustomerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    upsert?: ServiceUpsertWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingsInput, ServiceUpdateWithoutBookingsInput>, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserCreateNestedOneWithoutWorkingSlotsInput = {
    create?: XOR<UserCreateWithoutWorkingSlotsInput, UserUncheckedCreateWithoutWorkingSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkingSlotsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWorkingSlotsNestedInput = {
    create?: XOR<UserCreateWithoutWorkingSlotsInput, UserUncheckedCreateWithoutWorkingSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkingSlotsInput
    upsert?: UserUpsertWithoutWorkingSlotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkingSlotsInput, UserUpdateWithoutWorkingSlotsInput>, UserUncheckedUpdateWithoutWorkingSlotsInput>
  }

  export type UserCreateNestedOneWithoutWorkingHourRangesInput = {
    create?: XOR<UserCreateWithoutWorkingHourRangesInput, UserUncheckedCreateWithoutWorkingHourRangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkingHourRangesInput
    connect?: UserWhereUniqueInput
  }

  export type RecurringSlotCreateNestedManyWithoutRangeInput = {
    create?: XOR<RecurringSlotCreateWithoutRangeInput, RecurringSlotUncheckedCreateWithoutRangeInput> | RecurringSlotCreateWithoutRangeInput[] | RecurringSlotUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: RecurringSlotCreateOrConnectWithoutRangeInput | RecurringSlotCreateOrConnectWithoutRangeInput[]
    createMany?: RecurringSlotCreateManyRangeInputEnvelope
    connect?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
  }

  export type RecurringSlotUncheckedCreateNestedManyWithoutRangeInput = {
    create?: XOR<RecurringSlotCreateWithoutRangeInput, RecurringSlotUncheckedCreateWithoutRangeInput> | RecurringSlotCreateWithoutRangeInput[] | RecurringSlotUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: RecurringSlotCreateOrConnectWithoutRangeInput | RecurringSlotCreateOrConnectWithoutRangeInput[]
    createMany?: RecurringSlotCreateManyRangeInputEnvelope
    connect?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkingHourRangesNestedInput = {
    create?: XOR<UserCreateWithoutWorkingHourRangesInput, UserUncheckedCreateWithoutWorkingHourRangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkingHourRangesInput
    upsert?: UserUpsertWithoutWorkingHourRangesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkingHourRangesInput, UserUpdateWithoutWorkingHourRangesInput>, UserUncheckedUpdateWithoutWorkingHourRangesInput>
  }

  export type RecurringSlotUpdateManyWithoutRangeNestedInput = {
    create?: XOR<RecurringSlotCreateWithoutRangeInput, RecurringSlotUncheckedCreateWithoutRangeInput> | RecurringSlotCreateWithoutRangeInput[] | RecurringSlotUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: RecurringSlotCreateOrConnectWithoutRangeInput | RecurringSlotCreateOrConnectWithoutRangeInput[]
    upsert?: RecurringSlotUpsertWithWhereUniqueWithoutRangeInput | RecurringSlotUpsertWithWhereUniqueWithoutRangeInput[]
    createMany?: RecurringSlotCreateManyRangeInputEnvelope
    set?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    disconnect?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    delete?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    connect?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    update?: RecurringSlotUpdateWithWhereUniqueWithoutRangeInput | RecurringSlotUpdateWithWhereUniqueWithoutRangeInput[]
    updateMany?: RecurringSlotUpdateManyWithWhereWithoutRangeInput | RecurringSlotUpdateManyWithWhereWithoutRangeInput[]
    deleteMany?: RecurringSlotScalarWhereInput | RecurringSlotScalarWhereInput[]
  }

  export type RecurringSlotUncheckedUpdateManyWithoutRangeNestedInput = {
    create?: XOR<RecurringSlotCreateWithoutRangeInput, RecurringSlotUncheckedCreateWithoutRangeInput> | RecurringSlotCreateWithoutRangeInput[] | RecurringSlotUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: RecurringSlotCreateOrConnectWithoutRangeInput | RecurringSlotCreateOrConnectWithoutRangeInput[]
    upsert?: RecurringSlotUpsertWithWhereUniqueWithoutRangeInput | RecurringSlotUpsertWithWhereUniqueWithoutRangeInput[]
    createMany?: RecurringSlotCreateManyRangeInputEnvelope
    set?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    disconnect?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    delete?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    connect?: RecurringSlotWhereUniqueInput | RecurringSlotWhereUniqueInput[]
    update?: RecurringSlotUpdateWithWhereUniqueWithoutRangeInput | RecurringSlotUpdateWithWhereUniqueWithoutRangeInput[]
    updateMany?: RecurringSlotUpdateManyWithWhereWithoutRangeInput | RecurringSlotUpdateManyWithWhereWithoutRangeInput[]
    deleteMany?: RecurringSlotScalarWhereInput | RecurringSlotScalarWhereInput[]
  }

  export type WorkingHourRangeCreateNestedOneWithoutSlotsInput = {
    create?: XOR<WorkingHourRangeCreateWithoutSlotsInput, WorkingHourRangeUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: WorkingHourRangeCreateOrConnectWithoutSlotsInput
    connect?: WorkingHourRangeWhereUniqueInput
  }

  export type EnumWeekDayFieldUpdateOperationsInput = {
    set?: $Enums.WeekDay
  }

  export type WorkingHourRangeUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<WorkingHourRangeCreateWithoutSlotsInput, WorkingHourRangeUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: WorkingHourRangeCreateOrConnectWithoutSlotsInput
    upsert?: WorkingHourRangeUpsertWithoutSlotsInput
    connect?: WorkingHourRangeWhereUniqueInput
    update?: XOR<XOR<WorkingHourRangeUpdateToOneWithWhereWithoutSlotsInput, WorkingHourRangeUpdateWithoutSlotsInput>, WorkingHourRangeUncheckedUpdateWithoutSlotsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingMethod | EnumBookingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingMethodNullableFilter<$PrismaModel> | $Enums.BookingMethod | null
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingMethod | EnumBookingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingMethod[] | ListEnumBookingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type NestedEnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type EmployeeServiceCreateWithoutEmployeeInput = {
    service: ServiceCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeServiceUncheckedCreateWithoutEmployeeInput = {
    serviceId: number
  }

  export type EmployeeServiceCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeServiceWhereUniqueInput
    create: XOR<EmployeeServiceCreateWithoutEmployeeInput, EmployeeServiceUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeServiceCreateManyEmployeeInputEnvelope = {
    data: EmployeeServiceCreateManyEmployeeInput | EmployeeServiceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutCreatedByInput = {
    name: string
    duration: number
    price: number
    employees?: EmployeeServiceCreateNestedManyWithoutServiceInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    duration: number
    price: number
    employees?: EmployeeServiceUncheckedCreateNestedManyWithoutServiceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCreatedByInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput>
  }

  export type ServiceCreateManyCreatedByInputEnvelope = {
    data: ServiceCreateManyCreatedByInput | ServiceCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutEmployeeInput = {
    date: Date | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
    customer: CustomerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutEmployeeInput = {
    id?: number
    date: Date | string
    customerId: number
    serviceId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type BookingCreateOrConnectWithoutEmployeeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput>
  }

  export type BookingCreateManyEmployeeInputEnvelope = {
    data: BookingCreateManyEmployeeInput | BookingCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type WorkingSlotCreateWithoutEmployeeInput = {
    date: Date | string
    startTime: string
    endTime: string
    createdAt?: Date | string
    onlyInStore?: boolean
  }

  export type WorkingSlotUncheckedCreateWithoutEmployeeInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    createdAt?: Date | string
    onlyInStore?: boolean
  }

  export type WorkingSlotCreateOrConnectWithoutEmployeeInput = {
    where: WorkingSlotWhereUniqueInput
    create: XOR<WorkingSlotCreateWithoutEmployeeInput, WorkingSlotUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkingSlotCreateManyEmployeeInputEnvelope = {
    data: WorkingSlotCreateManyEmployeeInput | WorkingSlotCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type WorkingHourRangeCreateWithoutEmployeeInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    slots?: RecurringSlotCreateNestedManyWithoutRangeInput
  }

  export type WorkingHourRangeUncheckedCreateWithoutEmployeeInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    slots?: RecurringSlotUncheckedCreateNestedManyWithoutRangeInput
  }

  export type WorkingHourRangeCreateOrConnectWithoutEmployeeInput = {
    where: WorkingHourRangeWhereUniqueInput
    create: XOR<WorkingHourRangeCreateWithoutEmployeeInput, WorkingHourRangeUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkingHourRangeCreateManyEmployeeInputEnvelope = {
    data: WorkingHourRangeCreateManyEmployeeInput | WorkingHourRangeCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeServiceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeServiceWhereUniqueInput
    update: XOR<EmployeeServiceUpdateWithoutEmployeeInput, EmployeeServiceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeServiceCreateWithoutEmployeeInput, EmployeeServiceUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeServiceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeServiceWhereUniqueInput
    data: XOR<EmployeeServiceUpdateWithoutEmployeeInput, EmployeeServiceUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeServiceUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeServiceScalarWhereInput
    data: XOR<EmployeeServiceUpdateManyMutationInput, EmployeeServiceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeServiceScalarWhereInput = {
    AND?: EmployeeServiceScalarWhereInput | EmployeeServiceScalarWhereInput[]
    OR?: EmployeeServiceScalarWhereInput[]
    NOT?: EmployeeServiceScalarWhereInput | EmployeeServiceScalarWhereInput[]
    employeeId?: IntFilter<"EmployeeService"> | number
    serviceId?: IntFilter<"EmployeeService"> | number
  }

  export type ServiceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCreatedByInput, ServiceUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCreatedByInput, ServiceUncheckedUpdateWithoutCreatedByInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCreatedByInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    createdById?: IntFilter<"Service"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutEmployeeInput, BookingUncheckedUpdateWithoutEmployeeInput>
    create: XOR<BookingCreateWithoutEmployeeInput, BookingUncheckedCreateWithoutEmployeeInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutEmployeeInput, BookingUncheckedUpdateWithoutEmployeeInput>
  }

  export type BookingUpdateManyWithWhereWithoutEmployeeInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    date?: DateTimeFilter<"Booking"> | Date | string
    customerId?: IntFilter<"Booking"> | number
    serviceId?: IntFilter<"Booking"> | number
    employeeId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    method?: EnumBookingMethodNullableFilter<"Booking"> | $Enums.BookingMethod | null
  }

  export type WorkingSlotUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WorkingSlotWhereUniqueInput
    update: XOR<WorkingSlotUpdateWithoutEmployeeInput, WorkingSlotUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WorkingSlotCreateWithoutEmployeeInput, WorkingSlotUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkingSlotUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WorkingSlotWhereUniqueInput
    data: XOR<WorkingSlotUpdateWithoutEmployeeInput, WorkingSlotUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkingSlotUpdateManyWithWhereWithoutEmployeeInput = {
    where: WorkingSlotScalarWhereInput
    data: XOR<WorkingSlotUpdateManyMutationInput, WorkingSlotUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type WorkingSlotScalarWhereInput = {
    AND?: WorkingSlotScalarWhereInput | WorkingSlotScalarWhereInput[]
    OR?: WorkingSlotScalarWhereInput[]
    NOT?: WorkingSlotScalarWhereInput | WorkingSlotScalarWhereInput[]
    id?: IntFilter<"WorkingSlot"> | number
    employeeId?: IntFilter<"WorkingSlot"> | number
    date?: DateTimeFilter<"WorkingSlot"> | Date | string
    startTime?: StringFilter<"WorkingSlot"> | string
    endTime?: StringFilter<"WorkingSlot"> | string
    createdAt?: DateTimeFilter<"WorkingSlot"> | Date | string
    onlyInStore?: BoolFilter<"WorkingSlot"> | boolean
  }

  export type WorkingHourRangeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WorkingHourRangeWhereUniqueInput
    update: XOR<WorkingHourRangeUpdateWithoutEmployeeInput, WorkingHourRangeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WorkingHourRangeCreateWithoutEmployeeInput, WorkingHourRangeUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkingHourRangeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WorkingHourRangeWhereUniqueInput
    data: XOR<WorkingHourRangeUpdateWithoutEmployeeInput, WorkingHourRangeUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkingHourRangeUpdateManyWithWhereWithoutEmployeeInput = {
    where: WorkingHourRangeScalarWhereInput
    data: XOR<WorkingHourRangeUpdateManyMutationInput, WorkingHourRangeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type WorkingHourRangeScalarWhereInput = {
    AND?: WorkingHourRangeScalarWhereInput | WorkingHourRangeScalarWhereInput[]
    OR?: WorkingHourRangeScalarWhereInput[]
    NOT?: WorkingHourRangeScalarWhereInput | WorkingHourRangeScalarWhereInput[]
    id?: IntFilter<"WorkingHourRange"> | number
    employeeId?: IntFilter<"WorkingHourRange"> | number
    startDate?: DateTimeFilter<"WorkingHourRange"> | Date | string
    endDate?: DateTimeFilter<"WorkingHourRange"> | Date | string
    createdAt?: DateTimeFilter<"WorkingHourRange"> | Date | string
  }

  export type BookingCreateWithoutCustomerInput = {
    date: Date | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
    service: ServiceCreateNestedOneWithoutBookingsInput
    employee: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: number
    date: Date | string
    serviceId: number
    employeeId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type UserCreateWithoutServicesCreatedInput = {
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceCreateNestedManyWithoutEmployeeInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutServicesCreatedInput = {
    id?: number
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceUncheckedCreateNestedManyWithoutEmployeeInput
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotUncheckedCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutServicesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
  }

  export type EmployeeServiceCreateWithoutServiceInput = {
    employee: UserCreateNestedOneWithoutServicesInput
  }

  export type EmployeeServiceUncheckedCreateWithoutServiceInput = {
    employeeId: number
  }

  export type EmployeeServiceCreateOrConnectWithoutServiceInput = {
    where: EmployeeServiceWhereUniqueInput
    create: XOR<EmployeeServiceCreateWithoutServiceInput, EmployeeServiceUncheckedCreateWithoutServiceInput>
  }

  export type EmployeeServiceCreateManyServiceInputEnvelope = {
    data: EmployeeServiceCreateManyServiceInput | EmployeeServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutServiceInput = {
    date: Date | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
    customer: CustomerCreateNestedOneWithoutBookingsInput
    employee: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: number
    date: Date | string
    customerId: number
    employeeId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServicesCreatedInput = {
    update: XOR<UserUpdateWithoutServicesCreatedInput, UserUncheckedUpdateWithoutServicesCreatedInput>
    create: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesCreatedInput, UserUncheckedUpdateWithoutServicesCreatedInput>
  }

  export type UserUpdateWithoutServicesCreatedInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUpdateManyWithoutEmployeeNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUncheckedUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: EmployeeServiceWhereUniqueInput
    update: XOR<EmployeeServiceUpdateWithoutServiceInput, EmployeeServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<EmployeeServiceCreateWithoutServiceInput, EmployeeServiceUncheckedCreateWithoutServiceInput>
  }

  export type EmployeeServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: EmployeeServiceWhereUniqueInput
    data: XOR<EmployeeServiceUpdateWithoutServiceInput, EmployeeServiceUncheckedUpdateWithoutServiceInput>
  }

  export type EmployeeServiceUpdateManyWithWhereWithoutServiceInput = {
    where: EmployeeServiceScalarWhereInput
    data: XOR<EmployeeServiceUpdateManyMutationInput, EmployeeServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutServicesInput = {
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutServicesInput = {
    id?: number
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotUncheckedCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutEmployeesInput = {
    name: string
    duration: number
    price: number
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    duration: number
    price: number
    createdById: number
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutEmployeesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutEmployeesInput, ServiceUncheckedCreateWithoutEmployeesInput>
  }

  export type UserUpsertWithoutServicesInput = {
    update: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateWithoutServicesInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUncheckedUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ServiceUpsertWithoutEmployeesInput = {
    update: XOR<ServiceUpdateWithoutEmployeesInput, ServiceUncheckedUpdateWithoutEmployeesInput>
    create: XOR<ServiceCreateWithoutEmployeesInput, ServiceUncheckedCreateWithoutEmployeesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutEmployeesInput, ServiceUncheckedUpdateWithoutEmployeesInput>
  }

  export type ServiceUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type CustomerCreateWithoutBookingsInput = {
    name: string
    phone: string
    email?: string | null
    createdAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceCreateWithoutBookingsInput = {
    name: string
    duration: number
    price: number
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    employees?: EmployeeServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    duration: number
    price: number
    createdById: number
    employees?: EmployeeServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    workingSlots?: WorkingSlotCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceUncheckedCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    workingSlots?: WorkingSlotUncheckedCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type CustomerUpsertWithoutBookingsInput = {
    update: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutBookingsInput = {
    update: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    employees?: EmployeeServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    workingSlots?: WorkingSlotUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    workingSlots?: WorkingSlotUncheckedUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateWithoutWorkingSlotsInput = {
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutWorkingSlotsInput = {
    id?: number
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceUncheckedCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    workingHourRanges?: WorkingHourRangeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutWorkingSlotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkingSlotsInput, UserUncheckedCreateWithoutWorkingSlotsInput>
  }

  export type UserUpsertWithoutWorkingSlotsInput = {
    update: XOR<UserUpdateWithoutWorkingSlotsInput, UserUncheckedUpdateWithoutWorkingSlotsInput>
    create: XOR<UserCreateWithoutWorkingSlotsInput, UserUncheckedCreateWithoutWorkingSlotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkingSlotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkingSlotsInput, UserUncheckedUpdateWithoutWorkingSlotsInput>
  }

  export type UserUpdateWithoutWorkingSlotsInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkingSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    workingHourRanges?: WorkingHourRangeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateWithoutWorkingHourRangesInput = {
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    bookings?: BookingCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutWorkingHourRangesInput = {
    id?: number
    email: string
    hashedPassword: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    services?: EmployeeServiceUncheckedCreateNestedManyWithoutEmployeeInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    bookings?: BookingUncheckedCreateNestedManyWithoutEmployeeInput
    workingSlots?: WorkingSlotUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutWorkingHourRangesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkingHourRangesInput, UserUncheckedCreateWithoutWorkingHourRangesInput>
  }

  export type RecurringSlotCreateWithoutRangeInput = {
    weekDay: $Enums.WeekDay
    startTime: string
    endTime: string
    onlyInStore?: boolean
  }

  export type RecurringSlotUncheckedCreateWithoutRangeInput = {
    id?: number
    weekDay: $Enums.WeekDay
    startTime: string
    endTime: string
    onlyInStore?: boolean
  }

  export type RecurringSlotCreateOrConnectWithoutRangeInput = {
    where: RecurringSlotWhereUniqueInput
    create: XOR<RecurringSlotCreateWithoutRangeInput, RecurringSlotUncheckedCreateWithoutRangeInput>
  }

  export type RecurringSlotCreateManyRangeInputEnvelope = {
    data: RecurringSlotCreateManyRangeInput | RecurringSlotCreateManyRangeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkingHourRangesInput = {
    update: XOR<UserUpdateWithoutWorkingHourRangesInput, UserUncheckedUpdateWithoutWorkingHourRangesInput>
    create: XOR<UserCreateWithoutWorkingHourRangesInput, UserUncheckedCreateWithoutWorkingHourRangesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkingHourRangesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkingHourRangesInput, UserUncheckedUpdateWithoutWorkingHourRangesInput>
  }

  export type UserUpdateWithoutWorkingHourRangesInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkingHourRangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    services?: EmployeeServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutEmployeeNestedInput
    workingSlots?: WorkingSlotUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type RecurringSlotUpsertWithWhereUniqueWithoutRangeInput = {
    where: RecurringSlotWhereUniqueInput
    update: XOR<RecurringSlotUpdateWithoutRangeInput, RecurringSlotUncheckedUpdateWithoutRangeInput>
    create: XOR<RecurringSlotCreateWithoutRangeInput, RecurringSlotUncheckedCreateWithoutRangeInput>
  }

  export type RecurringSlotUpdateWithWhereUniqueWithoutRangeInput = {
    where: RecurringSlotWhereUniqueInput
    data: XOR<RecurringSlotUpdateWithoutRangeInput, RecurringSlotUncheckedUpdateWithoutRangeInput>
  }

  export type RecurringSlotUpdateManyWithWhereWithoutRangeInput = {
    where: RecurringSlotScalarWhereInput
    data: XOR<RecurringSlotUpdateManyMutationInput, RecurringSlotUncheckedUpdateManyWithoutRangeInput>
  }

  export type RecurringSlotScalarWhereInput = {
    AND?: RecurringSlotScalarWhereInput | RecurringSlotScalarWhereInput[]
    OR?: RecurringSlotScalarWhereInput[]
    NOT?: RecurringSlotScalarWhereInput | RecurringSlotScalarWhereInput[]
    id?: IntFilter<"RecurringSlot"> | number
    rangeId?: IntFilter<"RecurringSlot"> | number
    weekDay?: EnumWeekDayFilter<"RecurringSlot"> | $Enums.WeekDay
    startTime?: StringFilter<"RecurringSlot"> | string
    endTime?: StringFilter<"RecurringSlot"> | string
    onlyInStore?: BoolFilter<"RecurringSlot"> | boolean
  }

  export type WorkingHourRangeCreateWithoutSlotsInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutWorkingHourRangesInput
  }

  export type WorkingHourRangeUncheckedCreateWithoutSlotsInput = {
    id?: number
    employeeId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type WorkingHourRangeCreateOrConnectWithoutSlotsInput = {
    where: WorkingHourRangeWhereUniqueInput
    create: XOR<WorkingHourRangeCreateWithoutSlotsInput, WorkingHourRangeUncheckedCreateWithoutSlotsInput>
  }

  export type WorkingHourRangeUpsertWithoutSlotsInput = {
    update: XOR<WorkingHourRangeUpdateWithoutSlotsInput, WorkingHourRangeUncheckedUpdateWithoutSlotsInput>
    create: XOR<WorkingHourRangeCreateWithoutSlotsInput, WorkingHourRangeUncheckedCreateWithoutSlotsInput>
    where?: WorkingHourRangeWhereInput
  }

  export type WorkingHourRangeUpdateToOneWithWhereWithoutSlotsInput = {
    where?: WorkingHourRangeWhereInput
    data: XOR<WorkingHourRangeUpdateWithoutSlotsInput, WorkingHourRangeUncheckedUpdateWithoutSlotsInput>
  }

  export type WorkingHourRangeUpdateWithoutSlotsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutWorkingHourRangesNestedInput
  }

  export type WorkingHourRangeUncheckedUpdateWithoutSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeServiceCreateManyEmployeeInput = {
    serviceId: number
  }

  export type ServiceCreateManyCreatedByInput = {
    id?: number
    name: string
    duration: number
    price: number
  }

  export type BookingCreateManyEmployeeInput = {
    id?: number
    date: Date | string
    customerId: number
    serviceId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type WorkingSlotCreateManyEmployeeInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    createdAt?: Date | string
    onlyInStore?: boolean
  }

  export type WorkingHourRangeCreateManyEmployeeInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type EmployeeServiceUpdateWithoutEmployeeInput = {
    service?: ServiceUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeServiceUncheckedUpdateWithoutEmployeeInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeServiceUncheckedUpdateManyWithoutEmployeeInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    employees?: EmployeeServiceUpdateManyWithoutServiceNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    employees?: EmployeeServiceUncheckedUpdateManyWithoutServiceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutEmployeeInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type BookingUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type WorkingSlotUpdateWithoutEmployeeInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingSlotUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingSlotUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingHourRangeUpdateWithoutEmployeeInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: RecurringSlotUpdateManyWithoutRangeNestedInput
  }

  export type WorkingHourRangeUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: RecurringSlotUncheckedUpdateManyWithoutRangeNestedInput
  }

  export type WorkingHourRangeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyCustomerInput = {
    id?: number
    date: Date | string
    serviceId: number
    employeeId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type BookingUpdateWithoutCustomerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    employee?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type EmployeeServiceCreateManyServiceInput = {
    employeeId: number
  }

  export type BookingCreateManyServiceInput = {
    id?: number
    date: Date | string
    customerId: number
    employeeId: number
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    method?: $Enums.BookingMethod | null
  }

  export type EmployeeServiceUpdateWithoutServiceInput = {
    employee?: UserUpdateOneRequiredWithoutServicesNestedInput
  }

  export type EmployeeServiceUncheckedUpdateWithoutServiceInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeServiceUncheckedUpdateManyWithoutServiceInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutServiceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    employee?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumBookingMethodFieldUpdateOperationsInput | $Enums.BookingMethod | null
  }

  export type RecurringSlotCreateManyRangeInput = {
    id?: number
    weekDay: $Enums.WeekDay
    startTime: string
    endTime: string
    onlyInStore?: boolean
  }

  export type RecurringSlotUpdateWithoutRangeInput = {
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurringSlotUncheckedUpdateWithoutRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurringSlotUncheckedUpdateManyWithoutRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    onlyInStore?: BoolFieldUpdateOperationsInput | boolean
  }



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