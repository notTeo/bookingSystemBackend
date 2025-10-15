
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
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model ShopUser
 * 
 */
export type ShopUser = $Result.DefaultSelection<Prisma.$ShopUserPayload>
/**
 * Model ShopWorkingHour
 * 
 */
export type ShopWorkingHour = $Result.DefaultSelection<Prisma.$ShopWorkingHourPayload>
/**
 * Model UserWorkingHour
 * 
 */
export type UserWorkingHour = $Result.DefaultSelection<Prisma.$UserWorkingHourPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceAssignment
 * 
 */
export type ServiceAssignment = $Result.DefaultSelection<Prisma.$ServiceAssignmentPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Subscription: {
  MEMBER: 'MEMBER',
  STARTER: 'STARTER',
  PRO: 'PRO'
};

export type Subscription = (typeof Subscription)[keyof typeof Subscription]


export const ShopRole: {
  OWNER: 'OWNER',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF'
};

export type ShopRole = (typeof ShopRole)[keyof typeof ShopRole]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELED: 'CANCELED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type Subscription = $Enums.Subscription

export const Subscription: typeof $Enums.Subscription

export type ShopRole = $Enums.ShopRole

export const ShopRole: typeof $Enums.ShopRole

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

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
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopUser`: Exposes CRUD operations for the **ShopUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopUsers
    * const shopUsers = await prisma.shopUser.findMany()
    * ```
    */
  get shopUser(): Prisma.ShopUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopWorkingHour`: Exposes CRUD operations for the **ShopWorkingHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopWorkingHours
    * const shopWorkingHours = await prisma.shopWorkingHour.findMany()
    * ```
    */
  get shopWorkingHour(): Prisma.ShopWorkingHourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWorkingHour`: Exposes CRUD operations for the **UserWorkingHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWorkingHours
    * const userWorkingHours = await prisma.userWorkingHour.findMany()
    * ```
    */
  get userWorkingHour(): Prisma.UserWorkingHourDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.serviceAssignment`: Exposes CRUD operations for the **ServiceAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceAssignments
    * const serviceAssignments = await prisma.serviceAssignment.findMany()
    * ```
    */
  get serviceAssignment(): Prisma.ServiceAssignmentDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
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
    Shop: 'Shop',
    ShopUser: 'ShopUser',
    ShopWorkingHour: 'ShopWorkingHour',
    UserWorkingHour: 'UserWorkingHour',
    Service: 'Service',
    ServiceAssignment: 'ServiceAssignment',
    Customer: 'Customer',
    Booking: 'Booking'
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
      modelProps: "user" | "shop" | "shopUser" | "shopWorkingHour" | "userWorkingHour" | "service" | "serviceAssignment" | "customer" | "booking"
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
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      ShopUser: {
        payload: Prisma.$ShopUserPayload<ExtArgs>
        fields: Prisma.ShopUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          findFirst: {
            args: Prisma.ShopUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          findMany: {
            args: Prisma.ShopUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>[]
          }
          create: {
            args: Prisma.ShopUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          createMany: {
            args: Prisma.ShopUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>[]
          }
          delete: {
            args: Prisma.ShopUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          update: {
            args: Prisma.ShopUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          deleteMany: {
            args: Prisma.ShopUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>[]
          }
          upsert: {
            args: Prisma.ShopUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          aggregate: {
            args: Prisma.ShopUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopUser>
          }
          groupBy: {
            args: Prisma.ShopUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopUserCountArgs<ExtArgs>
            result: $Utils.Optional<ShopUserCountAggregateOutputType> | number
          }
        }
      }
      ShopWorkingHour: {
        payload: Prisma.$ShopWorkingHourPayload<ExtArgs>
        fields: Prisma.ShopWorkingHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopWorkingHourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopWorkingHourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>
          }
          findFirst: {
            args: Prisma.ShopWorkingHourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopWorkingHourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>
          }
          findMany: {
            args: Prisma.ShopWorkingHourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>[]
          }
          create: {
            args: Prisma.ShopWorkingHourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>
          }
          createMany: {
            args: Prisma.ShopWorkingHourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopWorkingHourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>[]
          }
          delete: {
            args: Prisma.ShopWorkingHourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>
          }
          update: {
            args: Prisma.ShopWorkingHourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>
          }
          deleteMany: {
            args: Prisma.ShopWorkingHourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopWorkingHourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopWorkingHourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>[]
          }
          upsert: {
            args: Prisma.ShopWorkingHourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopWorkingHourPayload>
          }
          aggregate: {
            args: Prisma.ShopWorkingHourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopWorkingHour>
          }
          groupBy: {
            args: Prisma.ShopWorkingHourGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopWorkingHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopWorkingHourCountArgs<ExtArgs>
            result: $Utils.Optional<ShopWorkingHourCountAggregateOutputType> | number
          }
        }
      }
      UserWorkingHour: {
        payload: Prisma.$UserWorkingHourPayload<ExtArgs>
        fields: Prisma.UserWorkingHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWorkingHourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWorkingHourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          findFirst: {
            args: Prisma.UserWorkingHourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWorkingHourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          findMany: {
            args: Prisma.UserWorkingHourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>[]
          }
          create: {
            args: Prisma.UserWorkingHourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          createMany: {
            args: Prisma.UserWorkingHourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWorkingHourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>[]
          }
          delete: {
            args: Prisma.UserWorkingHourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          update: {
            args: Prisma.UserWorkingHourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          deleteMany: {
            args: Prisma.UserWorkingHourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWorkingHourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWorkingHourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>[]
          }
          upsert: {
            args: Prisma.UserWorkingHourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkingHourPayload>
          }
          aggregate: {
            args: Prisma.UserWorkingHourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWorkingHour>
          }
          groupBy: {
            args: Prisma.UserWorkingHourGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWorkingHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWorkingHourCountArgs<ExtArgs>
            result: $Utils.Optional<UserWorkingHourCountAggregateOutputType> | number
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
      ServiceAssignment: {
        payload: Prisma.$ServiceAssignmentPayload<ExtArgs>
        fields: Prisma.ServiceAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ServiceAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          findMany: {
            args: Prisma.ServiceAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>[]
          }
          create: {
            args: Prisma.ServiceAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          createMany: {
            args: Prisma.ServiceAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ServiceAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          update: {
            args: Prisma.ServiceAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ServiceAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ServiceAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ServiceAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceAssignment>
          }
          groupBy: {
            args: Prisma.ServiceAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceAssignmentCountAggregateOutputType> | number
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
    shop?: ShopOmit
    shopUser?: ShopUserOmit
    shopWorkingHour?: ShopWorkingHourOmit
    userWorkingHour?: UserWorkingHourOmit
    service?: ServiceOmit
    serviceAssignment?: ServiceAssignmentOmit
    customer?: CustomerOmit
    booking?: BookingOmit
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
    ownedShops: number
    memberships: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedShops?: boolean | UserCountOutputTypeCountOwnedShopsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
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
  export type UserCountOutputTypeCountOwnedShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    members: number
    workingHours: number
    userWorkingHours: number
    services: number
    bookings: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ShopCountOutputTypeCountMembersArgs
    workingHours?: boolean | ShopCountOutputTypeCountWorkingHoursArgs
    userWorkingHours?: boolean | ShopCountOutputTypeCountUserWorkingHoursArgs
    services?: boolean | ShopCountOutputTypeCountServicesArgs
    bookings?: boolean | ShopCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWorkingHourWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountUserWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkingHourWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ShopUserCountOutputType
   */

  export type ShopUserCountOutputType = {
    workingHours: number
    assignedServices: number
    bookings: number
  }

  export type ShopUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workingHours?: boolean | ShopUserCountOutputTypeCountWorkingHoursArgs
    assignedServices?: boolean | ShopUserCountOutputTypeCountAssignedServicesArgs
    bookings?: boolean | ShopUserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ShopUserCountOutputType without action
   */
  export type ShopUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserCountOutputType
     */
    select?: ShopUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopUserCountOutputType without action
   */
  export type ShopUserCountOutputTypeCountWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkingHourWhereInput
  }

  /**
   * ShopUserCountOutputType without action
   */
  export type ShopUserCountOutputTypeCountAssignedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAssignmentWhereInput
  }

  /**
   * ShopUserCountOutputType without action
   */
  export type ShopUserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    assignedUsers: number
    bookings: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedUsers?: boolean | ServiceCountOutputTypeCountAssignedUsersArgs
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
  export type ServiceCountOutputTypeCountAssignedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAssignmentWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
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
    hashedPassword: string | null
    subscription: $Enums.Subscription | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    hashedPassword: string | null
    subscription: $Enums.Subscription | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    hashedPassword: number
    subscription: number
    active: number
    createdAt: number
    updatedAt: number
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
    hashedPassword?: true
    subscription?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    hashedPassword?: true
    subscription?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    hashedPassword?: true
    subscription?: true
    active?: true
    createdAt?: true
    updatedAt?: true
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
    hashedPassword: string
    subscription: $Enums.Subscription
    active: boolean
    createdAt: Date
    updatedAt: Date
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
    hashedPassword?: boolean
    subscription?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedShops?: boolean | User$ownedShopsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    hashedPassword?: boolean
    subscription?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    hashedPassword?: boolean
    subscription?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    hashedPassword?: boolean
    subscription?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "hashedPassword" | "subscription" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedShops?: boolean | User$ownedShopsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedShops: Prisma.$ShopPayload<ExtArgs>[]
      memberships: Prisma.$ShopUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      hashedPassword: string
      subscription: $Enums.Subscription
      active: boolean
      createdAt: Date
      updatedAt: Date
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
    ownedShops<T extends User$ownedShopsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedShopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly subscription: FieldRef<"User", 'Subscription'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.ownedShops
   */
  export type User$ownedShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    where?: ShopUserWhereInput
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    cursor?: ShopUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
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
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    name: string
    address: string | null
    ownerId: number
    createdAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Shop$membersArgs<ExtArgs>
    workingHours?: boolean | Shop$workingHoursArgs<ExtArgs>
    userWorkingHours?: boolean | Shop$userWorkingHoursArgs<ExtArgs>
    services?: boolean | Shop$servicesArgs<ExtArgs>
    bookings?: boolean | Shop$bookingsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Shop$membersArgs<ExtArgs>
    workingHours?: boolean | Shop$workingHoursArgs<ExtArgs>
    userWorkingHours?: boolean | Shop$userWorkingHoursArgs<ExtArgs>
    services?: boolean | Shop$servicesArgs<ExtArgs>
    bookings?: boolean | Shop$bookingsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$ShopUserPayload<ExtArgs>[]
      workingHours: Prisma.$ShopWorkingHourPayload<ExtArgs>[]
      userWorkingHours: Prisma.$UserWorkingHourPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      ownerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Shop$membersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workingHours<T extends Shop$workingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Shop$workingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userWorkingHours<T extends Shop$userWorkingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Shop$userWorkingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Shop$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Shop$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'Int'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly ownerId: FieldRef<"Shop", 'Int'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.members
   */
  export type Shop$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    where?: ShopUserWhereInput
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    cursor?: ShopUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * Shop.workingHours
   */
  export type Shop$workingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    where?: ShopWorkingHourWhereInput
    orderBy?: ShopWorkingHourOrderByWithRelationInput | ShopWorkingHourOrderByWithRelationInput[]
    cursor?: ShopWorkingHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopWorkingHourScalarFieldEnum | ShopWorkingHourScalarFieldEnum[]
  }

  /**
   * Shop.userWorkingHours
   */
  export type Shop$userWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    where?: UserWorkingHourWhereInput
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    cursor?: UserWorkingHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * Shop.services
   */
  export type Shop$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Shop.bookings
   */
  export type Shop$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model ShopUser
   */

  export type AggregateShopUser = {
    _count: ShopUserCountAggregateOutputType | null
    _avg: ShopUserAvgAggregateOutputType | null
    _sum: ShopUserSumAggregateOutputType | null
    _min: ShopUserMinAggregateOutputType | null
    _max: ShopUserMaxAggregateOutputType | null
  }

  export type ShopUserAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
    userId: number | null
  }

  export type ShopUserSumAggregateOutputType = {
    id: number | null
    shopId: number | null
    userId: number | null
  }

  export type ShopUserMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    userId: number | null
    role: $Enums.ShopRole | null
    active: boolean | null
    bookable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopUserMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    userId: number | null
    role: $Enums.ShopRole | null
    active: boolean | null
    bookable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopUserCountAggregateOutputType = {
    id: number
    shopId: number
    userId: number
    role: number
    active: number
    bookable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopUserAvgAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
  }

  export type ShopUserSumAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
  }

  export type ShopUserMinAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    role?: true
    active?: true
    bookable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopUserMaxAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    role?: true
    active?: true
    bookable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopUserCountAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    role?: true
    active?: true
    bookable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUser to aggregate.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopUsers
    **/
    _count?: true | ShopUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopUserMaxAggregateInputType
  }

  export type GetShopUserAggregateType<T extends ShopUserAggregateArgs> = {
        [P in keyof T & keyof AggregateShopUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopUser[P]>
      : GetScalarType<T[P], AggregateShopUser[P]>
  }




  export type ShopUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserWhereInput
    orderBy?: ShopUserOrderByWithAggregationInput | ShopUserOrderByWithAggregationInput[]
    by: ShopUserScalarFieldEnum[] | ShopUserScalarFieldEnum
    having?: ShopUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopUserCountAggregateInputType | true
    _avg?: ShopUserAvgAggregateInputType
    _sum?: ShopUserSumAggregateInputType
    _min?: ShopUserMinAggregateInputType
    _max?: ShopUserMaxAggregateInputType
  }

  export type ShopUserGroupByOutputType = {
    id: number
    shopId: number
    userId: number
    role: $Enums.ShopRole
    active: boolean
    bookable: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShopUserCountAggregateOutputType | null
    _avg: ShopUserAvgAggregateOutputType | null
    _sum: ShopUserSumAggregateOutputType | null
    _min: ShopUserMinAggregateOutputType | null
    _max: ShopUserMaxAggregateOutputType | null
  }

  type GetShopUserGroupByPayload<T extends ShopUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopUserGroupByOutputType[P]>
            : GetScalarType<T[P], ShopUserGroupByOutputType[P]>
        }
      >
    >


  export type ShopUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    role?: boolean
    active?: boolean
    bookable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    workingHours?: boolean | ShopUser$workingHoursArgs<ExtArgs>
    assignedServices?: boolean | ShopUser$assignedServicesArgs<ExtArgs>
    bookings?: boolean | ShopUser$bookingsArgs<ExtArgs>
    _count?: boolean | ShopUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUser"]>

  export type ShopUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    role?: boolean
    active?: boolean
    bookable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUser"]>

  export type ShopUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    role?: boolean
    active?: boolean
    bookable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUser"]>

  export type ShopUserSelectScalar = {
    id?: boolean
    shopId?: boolean
    userId?: boolean
    role?: boolean
    active?: boolean
    bookable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "userId" | "role" | "active" | "bookable" | "createdAt" | "updatedAt", ExtArgs["result"]["shopUser"]>
  export type ShopUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    workingHours?: boolean | ShopUser$workingHoursArgs<ExtArgs>
    assignedServices?: boolean | ShopUser$assignedServicesArgs<ExtArgs>
    bookings?: boolean | ShopUser$bookingsArgs<ExtArgs>
    _count?: boolean | ShopUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShopUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShopUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopUser"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      workingHours: Prisma.$UserWorkingHourPayload<ExtArgs>[]
      assignedServices: Prisma.$ServiceAssignmentPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      userId: number
      role: $Enums.ShopRole
      active: boolean
      bookable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shopUser"]>
    composites: {}
  }

  type ShopUserGetPayload<S extends boolean | null | undefined | ShopUserDefaultArgs> = $Result.GetResult<Prisma.$ShopUserPayload, S>

  type ShopUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopUserCountAggregateInputType | true
    }

  export interface ShopUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopUser'], meta: { name: 'ShopUser' } }
    /**
     * Find zero or one ShopUser that matches the filter.
     * @param {ShopUserFindUniqueArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopUserFindUniqueArgs>(args: SelectSubset<T, ShopUserFindUniqueArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopUserFindUniqueOrThrowArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindFirstArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopUserFindFirstArgs>(args?: SelectSubset<T, ShopUserFindFirstArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindFirstOrThrowArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopUsers
     * const shopUsers = await prisma.shopUser.findMany()
     * 
     * // Get first 10 ShopUsers
     * const shopUsers = await prisma.shopUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopUserFindManyArgs>(args?: SelectSubset<T, ShopUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopUser.
     * @param {ShopUserCreateArgs} args - Arguments to create a ShopUser.
     * @example
     * // Create one ShopUser
     * const ShopUser = await prisma.shopUser.create({
     *   data: {
     *     // ... data to create a ShopUser
     *   }
     * })
     * 
     */
    create<T extends ShopUserCreateArgs>(args: SelectSubset<T, ShopUserCreateArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopUsers.
     * @param {ShopUserCreateManyArgs} args - Arguments to create many ShopUsers.
     * @example
     * // Create many ShopUsers
     * const shopUser = await prisma.shopUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopUserCreateManyArgs>(args?: SelectSubset<T, ShopUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopUsers and returns the data saved in the database.
     * @param {ShopUserCreateManyAndReturnArgs} args - Arguments to create many ShopUsers.
     * @example
     * // Create many ShopUsers
     * const shopUser = await prisma.shopUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopUsers and only return the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopUser.
     * @param {ShopUserDeleteArgs} args - Arguments to delete one ShopUser.
     * @example
     * // Delete one ShopUser
     * const ShopUser = await prisma.shopUser.delete({
     *   where: {
     *     // ... filter to delete one ShopUser
     *   }
     * })
     * 
     */
    delete<T extends ShopUserDeleteArgs>(args: SelectSubset<T, ShopUserDeleteArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopUser.
     * @param {ShopUserUpdateArgs} args - Arguments to update one ShopUser.
     * @example
     * // Update one ShopUser
     * const shopUser = await prisma.shopUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUserUpdateArgs>(args: SelectSubset<T, ShopUserUpdateArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopUsers.
     * @param {ShopUserDeleteManyArgs} args - Arguments to filter ShopUsers to delete.
     * @example
     * // Delete a few ShopUsers
     * const { count } = await prisma.shopUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopUserDeleteManyArgs>(args?: SelectSubset<T, ShopUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopUsers
     * const shopUser = await prisma.shopUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUserUpdateManyArgs>(args: SelectSubset<T, ShopUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopUsers and returns the data updated in the database.
     * @param {ShopUserUpdateManyAndReturnArgs} args - Arguments to update many ShopUsers.
     * @example
     * // Update many ShopUsers
     * const shopUser = await prisma.shopUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopUsers and only return the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopUser.
     * @param {ShopUserUpsertArgs} args - Arguments to update or create a ShopUser.
     * @example
     * // Update or create a ShopUser
     * const shopUser = await prisma.shopUser.upsert({
     *   create: {
     *     // ... data to create a ShopUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopUser we want to update
     *   }
     * })
     */
    upsert<T extends ShopUserUpsertArgs>(args: SelectSubset<T, ShopUserUpsertArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserCountArgs} args - Arguments to filter ShopUsers to count.
     * @example
     * // Count the number of ShopUsers
     * const count = await prisma.shopUser.count({
     *   where: {
     *     // ... the filter for the ShopUsers we want to count
     *   }
     * })
    **/
    count<T extends ShopUserCountArgs>(
      args?: Subset<T, ShopUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopUserAggregateArgs>(args: Subset<T, ShopUserAggregateArgs>): Prisma.PrismaPromise<GetShopUserAggregateType<T>>

    /**
     * Group by ShopUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserGroupByArgs} args - Group by arguments.
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
      T extends ShopUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopUserGroupByArgs['orderBy'] }
        : { orderBy?: ShopUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopUser model
   */
  readonly fields: ShopUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workingHours<T extends ShopUser$workingHoursArgs<ExtArgs> = {}>(args?: Subset<T, ShopUser$workingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedServices<T extends ShopUser$assignedServicesArgs<ExtArgs> = {}>(args?: Subset<T, ShopUser$assignedServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends ShopUser$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ShopUser$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShopUser model
   */
  interface ShopUserFieldRefs {
    readonly id: FieldRef<"ShopUser", 'Int'>
    readonly shopId: FieldRef<"ShopUser", 'Int'>
    readonly userId: FieldRef<"ShopUser", 'Int'>
    readonly role: FieldRef<"ShopUser", 'ShopRole'>
    readonly active: FieldRef<"ShopUser", 'Boolean'>
    readonly bookable: FieldRef<"ShopUser", 'Boolean'>
    readonly createdAt: FieldRef<"ShopUser", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopUser findUnique
   */
  export type ShopUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser findUniqueOrThrow
   */
  export type ShopUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser findFirst
   */
  export type ShopUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopUsers.
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * ShopUser findFirstOrThrow
   */
  export type ShopUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopUsers.
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * ShopUser findMany
   */
  export type ShopUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUsers to fetch.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopUsers.
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * ShopUser create
   */
  export type ShopUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopUser.
     */
    data: XOR<ShopUserCreateInput, ShopUserUncheckedCreateInput>
  }

  /**
   * ShopUser createMany
   */
  export type ShopUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopUsers.
     */
    data: ShopUserCreateManyInput | ShopUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopUser createManyAndReturn
   */
  export type ShopUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * The data used to create many ShopUsers.
     */
    data: ShopUserCreateManyInput | ShopUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopUser update
   */
  export type ShopUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopUser.
     */
    data: XOR<ShopUserUpdateInput, ShopUserUncheckedUpdateInput>
    /**
     * Choose, which ShopUser to update.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser updateMany
   */
  export type ShopUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopUsers.
     */
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyInput>
    /**
     * Filter which ShopUsers to update
     */
    where?: ShopUserWhereInput
    /**
     * Limit how many ShopUsers to update.
     */
    limit?: number
  }

  /**
   * ShopUser updateManyAndReturn
   */
  export type ShopUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * The data used to update ShopUsers.
     */
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyInput>
    /**
     * Filter which ShopUsers to update
     */
    where?: ShopUserWhereInput
    /**
     * Limit how many ShopUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopUser upsert
   */
  export type ShopUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopUser to update in case it exists.
     */
    where: ShopUserWhereUniqueInput
    /**
     * In case the ShopUser found by the `where` argument doesn't exist, create a new ShopUser with this data.
     */
    create: XOR<ShopUserCreateInput, ShopUserUncheckedCreateInput>
    /**
     * In case the ShopUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUserUpdateInput, ShopUserUncheckedUpdateInput>
  }

  /**
   * ShopUser delete
   */
  export type ShopUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter which ShopUser to delete.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser deleteMany
   */
  export type ShopUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUsers to delete
     */
    where?: ShopUserWhereInput
    /**
     * Limit how many ShopUsers to delete.
     */
    limit?: number
  }

  /**
   * ShopUser.workingHours
   */
  export type ShopUser$workingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    where?: UserWorkingHourWhereInput
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    cursor?: UserWorkingHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * ShopUser.assignedServices
   */
  export type ShopUser$assignedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    where?: ServiceAssignmentWhereInput
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    cursor?: ServiceAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * ShopUser.bookings
   */
  export type ShopUser$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ShopUser without action
   */
  export type ShopUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
  }


  /**
   * Model ShopWorkingHour
   */

  export type AggregateShopWorkingHour = {
    _count: ShopWorkingHourCountAggregateOutputType | null
    _avg: ShopWorkingHourAvgAggregateOutputType | null
    _sum: ShopWorkingHourSumAggregateOutputType | null
    _min: ShopWorkingHourMinAggregateOutputType | null
    _max: ShopWorkingHourMaxAggregateOutputType | null
  }

  export type ShopWorkingHourAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type ShopWorkingHourSumAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type ShopWorkingHourMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopWorkingHourMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopWorkingHourCountAggregateOutputType = {
    id: number
    shopId: number
    dayOfWeek: number
    openTime: number
    closeTime: number
    isClosed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopWorkingHourAvgAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type ShopWorkingHourSumAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type ShopWorkingHourMinAggregateInputType = {
    id?: true
    shopId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopWorkingHourMaxAggregateInputType = {
    id?: true
    shopId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopWorkingHourCountAggregateInputType = {
    id?: true
    shopId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopWorkingHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopWorkingHour to aggregate.
     */
    where?: ShopWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopWorkingHours to fetch.
     */
    orderBy?: ShopWorkingHourOrderByWithRelationInput | ShopWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopWorkingHours
    **/
    _count?: true | ShopWorkingHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopWorkingHourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopWorkingHourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopWorkingHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopWorkingHourMaxAggregateInputType
  }

  export type GetShopWorkingHourAggregateType<T extends ShopWorkingHourAggregateArgs> = {
        [P in keyof T & keyof AggregateShopWorkingHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopWorkingHour[P]>
      : GetScalarType<T[P], AggregateShopWorkingHour[P]>
  }




  export type ShopWorkingHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWorkingHourWhereInput
    orderBy?: ShopWorkingHourOrderByWithAggregationInput | ShopWorkingHourOrderByWithAggregationInput[]
    by: ShopWorkingHourScalarFieldEnum[] | ShopWorkingHourScalarFieldEnum
    having?: ShopWorkingHourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopWorkingHourCountAggregateInputType | true
    _avg?: ShopWorkingHourAvgAggregateInputType
    _sum?: ShopWorkingHourSumAggregateInputType
    _min?: ShopWorkingHourMinAggregateInputType
    _max?: ShopWorkingHourMaxAggregateInputType
  }

  export type ShopWorkingHourGroupByOutputType = {
    id: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShopWorkingHourCountAggregateOutputType | null
    _avg: ShopWorkingHourAvgAggregateOutputType | null
    _sum: ShopWorkingHourSumAggregateOutputType | null
    _min: ShopWorkingHourMinAggregateOutputType | null
    _max: ShopWorkingHourMaxAggregateOutputType | null
  }

  type GetShopWorkingHourGroupByPayload<T extends ShopWorkingHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopWorkingHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopWorkingHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopWorkingHourGroupByOutputType[P]>
            : GetScalarType<T[P], ShopWorkingHourGroupByOutputType[P]>
        }
      >
    >


  export type ShopWorkingHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopWorkingHour"]>

  export type ShopWorkingHourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopWorkingHour"]>

  export type ShopWorkingHourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopWorkingHour"]>

  export type ShopWorkingHourSelectScalar = {
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopWorkingHourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "dayOfWeek" | "openTime" | "closeTime" | "isClosed" | "createdAt" | "updatedAt", ExtArgs["result"]["shopWorkingHour"]>
  export type ShopWorkingHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ShopWorkingHourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ShopWorkingHourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ShopWorkingHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopWorkingHour"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      dayOfWeek: $Enums.DayOfWeek
      openTime: string
      closeTime: string
      isClosed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shopWorkingHour"]>
    composites: {}
  }

  type ShopWorkingHourGetPayload<S extends boolean | null | undefined | ShopWorkingHourDefaultArgs> = $Result.GetResult<Prisma.$ShopWorkingHourPayload, S>

  type ShopWorkingHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopWorkingHourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopWorkingHourCountAggregateInputType | true
    }

  export interface ShopWorkingHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopWorkingHour'], meta: { name: 'ShopWorkingHour' } }
    /**
     * Find zero or one ShopWorkingHour that matches the filter.
     * @param {ShopWorkingHourFindUniqueArgs} args - Arguments to find a ShopWorkingHour
     * @example
     * // Get one ShopWorkingHour
     * const shopWorkingHour = await prisma.shopWorkingHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopWorkingHourFindUniqueArgs>(args: SelectSubset<T, ShopWorkingHourFindUniqueArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopWorkingHour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopWorkingHourFindUniqueOrThrowArgs} args - Arguments to find a ShopWorkingHour
     * @example
     * // Get one ShopWorkingHour
     * const shopWorkingHour = await prisma.shopWorkingHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopWorkingHourFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopWorkingHourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopWorkingHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWorkingHourFindFirstArgs} args - Arguments to find a ShopWorkingHour
     * @example
     * // Get one ShopWorkingHour
     * const shopWorkingHour = await prisma.shopWorkingHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopWorkingHourFindFirstArgs>(args?: SelectSubset<T, ShopWorkingHourFindFirstArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopWorkingHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWorkingHourFindFirstOrThrowArgs} args - Arguments to find a ShopWorkingHour
     * @example
     * // Get one ShopWorkingHour
     * const shopWorkingHour = await prisma.shopWorkingHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopWorkingHourFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopWorkingHourFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopWorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWorkingHourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopWorkingHours
     * const shopWorkingHours = await prisma.shopWorkingHour.findMany()
     * 
     * // Get first 10 ShopWorkingHours
     * const shopWorkingHours = await prisma.shopWorkingHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWorkingHourWithIdOnly = await prisma.shopWorkingHour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopWorkingHourFindManyArgs>(args?: SelectSubset<T, ShopWorkingHourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopWorkingHour.
     * @param {ShopWorkingHourCreateArgs} args - Arguments to create a ShopWorkingHour.
     * @example
     * // Create one ShopWorkingHour
     * const ShopWorkingHour = await prisma.shopWorkingHour.create({
     *   data: {
     *     // ... data to create a ShopWorkingHour
     *   }
     * })
     * 
     */
    create<T extends ShopWorkingHourCreateArgs>(args: SelectSubset<T, ShopWorkingHourCreateArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopWorkingHours.
     * @param {ShopWorkingHourCreateManyArgs} args - Arguments to create many ShopWorkingHours.
     * @example
     * // Create many ShopWorkingHours
     * const shopWorkingHour = await prisma.shopWorkingHour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopWorkingHourCreateManyArgs>(args?: SelectSubset<T, ShopWorkingHourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopWorkingHours and returns the data saved in the database.
     * @param {ShopWorkingHourCreateManyAndReturnArgs} args - Arguments to create many ShopWorkingHours.
     * @example
     * // Create many ShopWorkingHours
     * const shopWorkingHour = await prisma.shopWorkingHour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopWorkingHours and only return the `id`
     * const shopWorkingHourWithIdOnly = await prisma.shopWorkingHour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopWorkingHourCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopWorkingHourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopWorkingHour.
     * @param {ShopWorkingHourDeleteArgs} args - Arguments to delete one ShopWorkingHour.
     * @example
     * // Delete one ShopWorkingHour
     * const ShopWorkingHour = await prisma.shopWorkingHour.delete({
     *   where: {
     *     // ... filter to delete one ShopWorkingHour
     *   }
     * })
     * 
     */
    delete<T extends ShopWorkingHourDeleteArgs>(args: SelectSubset<T, ShopWorkingHourDeleteArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopWorkingHour.
     * @param {ShopWorkingHourUpdateArgs} args - Arguments to update one ShopWorkingHour.
     * @example
     * // Update one ShopWorkingHour
     * const shopWorkingHour = await prisma.shopWorkingHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopWorkingHourUpdateArgs>(args: SelectSubset<T, ShopWorkingHourUpdateArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopWorkingHours.
     * @param {ShopWorkingHourDeleteManyArgs} args - Arguments to filter ShopWorkingHours to delete.
     * @example
     * // Delete a few ShopWorkingHours
     * const { count } = await prisma.shopWorkingHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopWorkingHourDeleteManyArgs>(args?: SelectSubset<T, ShopWorkingHourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopWorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWorkingHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopWorkingHours
     * const shopWorkingHour = await prisma.shopWorkingHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopWorkingHourUpdateManyArgs>(args: SelectSubset<T, ShopWorkingHourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopWorkingHours and returns the data updated in the database.
     * @param {ShopWorkingHourUpdateManyAndReturnArgs} args - Arguments to update many ShopWorkingHours.
     * @example
     * // Update many ShopWorkingHours
     * const shopWorkingHour = await prisma.shopWorkingHour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopWorkingHours and only return the `id`
     * const shopWorkingHourWithIdOnly = await prisma.shopWorkingHour.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopWorkingHourUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopWorkingHourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopWorkingHour.
     * @param {ShopWorkingHourUpsertArgs} args - Arguments to update or create a ShopWorkingHour.
     * @example
     * // Update or create a ShopWorkingHour
     * const shopWorkingHour = await prisma.shopWorkingHour.upsert({
     *   create: {
     *     // ... data to create a ShopWorkingHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopWorkingHour we want to update
     *   }
     * })
     */
    upsert<T extends ShopWorkingHourUpsertArgs>(args: SelectSubset<T, ShopWorkingHourUpsertArgs<ExtArgs>>): Prisma__ShopWorkingHourClient<$Result.GetResult<Prisma.$ShopWorkingHourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopWorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWorkingHourCountArgs} args - Arguments to filter ShopWorkingHours to count.
     * @example
     * // Count the number of ShopWorkingHours
     * const count = await prisma.shopWorkingHour.count({
     *   where: {
     *     // ... the filter for the ShopWorkingHours we want to count
     *   }
     * })
    **/
    count<T extends ShopWorkingHourCountArgs>(
      args?: Subset<T, ShopWorkingHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopWorkingHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopWorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWorkingHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopWorkingHourAggregateArgs>(args: Subset<T, ShopWorkingHourAggregateArgs>): Prisma.PrismaPromise<GetShopWorkingHourAggregateType<T>>

    /**
     * Group by ShopWorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWorkingHourGroupByArgs} args - Group by arguments.
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
      T extends ShopWorkingHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopWorkingHourGroupByArgs['orderBy'] }
        : { orderBy?: ShopWorkingHourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopWorkingHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopWorkingHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopWorkingHour model
   */
  readonly fields: ShopWorkingHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopWorkingHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopWorkingHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShopWorkingHour model
   */
  interface ShopWorkingHourFieldRefs {
    readonly id: FieldRef<"ShopWorkingHour", 'Int'>
    readonly shopId: FieldRef<"ShopWorkingHour", 'Int'>
    readonly dayOfWeek: FieldRef<"ShopWorkingHour", 'DayOfWeek'>
    readonly openTime: FieldRef<"ShopWorkingHour", 'String'>
    readonly closeTime: FieldRef<"ShopWorkingHour", 'String'>
    readonly isClosed: FieldRef<"ShopWorkingHour", 'Boolean'>
    readonly createdAt: FieldRef<"ShopWorkingHour", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopWorkingHour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopWorkingHour findUnique
   */
  export type ShopWorkingHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which ShopWorkingHour to fetch.
     */
    where: ShopWorkingHourWhereUniqueInput
  }

  /**
   * ShopWorkingHour findUniqueOrThrow
   */
  export type ShopWorkingHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which ShopWorkingHour to fetch.
     */
    where: ShopWorkingHourWhereUniqueInput
  }

  /**
   * ShopWorkingHour findFirst
   */
  export type ShopWorkingHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which ShopWorkingHour to fetch.
     */
    where?: ShopWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopWorkingHours to fetch.
     */
    orderBy?: ShopWorkingHourOrderByWithRelationInput | ShopWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopWorkingHours.
     */
    cursor?: ShopWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopWorkingHours.
     */
    distinct?: ShopWorkingHourScalarFieldEnum | ShopWorkingHourScalarFieldEnum[]
  }

  /**
   * ShopWorkingHour findFirstOrThrow
   */
  export type ShopWorkingHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which ShopWorkingHour to fetch.
     */
    where?: ShopWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopWorkingHours to fetch.
     */
    orderBy?: ShopWorkingHourOrderByWithRelationInput | ShopWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopWorkingHours.
     */
    cursor?: ShopWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopWorkingHours.
     */
    distinct?: ShopWorkingHourScalarFieldEnum | ShopWorkingHourScalarFieldEnum[]
  }

  /**
   * ShopWorkingHour findMany
   */
  export type ShopWorkingHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which ShopWorkingHours to fetch.
     */
    where?: ShopWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopWorkingHours to fetch.
     */
    orderBy?: ShopWorkingHourOrderByWithRelationInput | ShopWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopWorkingHours.
     */
    cursor?: ShopWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopWorkingHours.
     */
    skip?: number
    distinct?: ShopWorkingHourScalarFieldEnum | ShopWorkingHourScalarFieldEnum[]
  }

  /**
   * ShopWorkingHour create
   */
  export type ShopWorkingHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopWorkingHour.
     */
    data: XOR<ShopWorkingHourCreateInput, ShopWorkingHourUncheckedCreateInput>
  }

  /**
   * ShopWorkingHour createMany
   */
  export type ShopWorkingHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopWorkingHours.
     */
    data: ShopWorkingHourCreateManyInput | ShopWorkingHourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopWorkingHour createManyAndReturn
   */
  export type ShopWorkingHourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * The data used to create many ShopWorkingHours.
     */
    data: ShopWorkingHourCreateManyInput | ShopWorkingHourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopWorkingHour update
   */
  export type ShopWorkingHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopWorkingHour.
     */
    data: XOR<ShopWorkingHourUpdateInput, ShopWorkingHourUncheckedUpdateInput>
    /**
     * Choose, which ShopWorkingHour to update.
     */
    where: ShopWorkingHourWhereUniqueInput
  }

  /**
   * ShopWorkingHour updateMany
   */
  export type ShopWorkingHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopWorkingHours.
     */
    data: XOR<ShopWorkingHourUpdateManyMutationInput, ShopWorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which ShopWorkingHours to update
     */
    where?: ShopWorkingHourWhereInput
    /**
     * Limit how many ShopWorkingHours to update.
     */
    limit?: number
  }

  /**
   * ShopWorkingHour updateManyAndReturn
   */
  export type ShopWorkingHourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * The data used to update ShopWorkingHours.
     */
    data: XOR<ShopWorkingHourUpdateManyMutationInput, ShopWorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which ShopWorkingHours to update
     */
    where?: ShopWorkingHourWhereInput
    /**
     * Limit how many ShopWorkingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopWorkingHour upsert
   */
  export type ShopWorkingHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopWorkingHour to update in case it exists.
     */
    where: ShopWorkingHourWhereUniqueInput
    /**
     * In case the ShopWorkingHour found by the `where` argument doesn't exist, create a new ShopWorkingHour with this data.
     */
    create: XOR<ShopWorkingHourCreateInput, ShopWorkingHourUncheckedCreateInput>
    /**
     * In case the ShopWorkingHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopWorkingHourUpdateInput, ShopWorkingHourUncheckedUpdateInput>
  }

  /**
   * ShopWorkingHour delete
   */
  export type ShopWorkingHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
    /**
     * Filter which ShopWorkingHour to delete.
     */
    where: ShopWorkingHourWhereUniqueInput
  }

  /**
   * ShopWorkingHour deleteMany
   */
  export type ShopWorkingHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopWorkingHours to delete
     */
    where?: ShopWorkingHourWhereInput
    /**
     * Limit how many ShopWorkingHours to delete.
     */
    limit?: number
  }

  /**
   * ShopWorkingHour without action
   */
  export type ShopWorkingHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWorkingHour
     */
    select?: ShopWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopWorkingHour
     */
    omit?: ShopWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopWorkingHourInclude<ExtArgs> | null
  }


  /**
   * Model UserWorkingHour
   */

  export type AggregateUserWorkingHour = {
    _count: UserWorkingHourCountAggregateOutputType | null
    _avg: UserWorkingHourAvgAggregateOutputType | null
    _sum: UserWorkingHourSumAggregateOutputType | null
    _min: UserWorkingHourMinAggregateOutputType | null
    _max: UserWorkingHourMaxAggregateOutputType | null
  }

  export type UserWorkingHourAvgAggregateOutputType = {
    id: number | null
    shopUserId: number | null
    shopId: number | null
  }

  export type UserWorkingHourSumAggregateOutputType = {
    id: number | null
    shopUserId: number | null
    shopId: number | null
  }

  export type UserWorkingHourMinAggregateOutputType = {
    id: number | null
    shopUserId: number | null
    shopId: number | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: string | null
    endTime: string | null
    isOff: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserWorkingHourMaxAggregateOutputType = {
    id: number | null
    shopUserId: number | null
    shopId: number | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: string | null
    endTime: string | null
    isOff: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserWorkingHourCountAggregateOutputType = {
    id: number
    shopUserId: number
    shopId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isOff: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserWorkingHourAvgAggregateInputType = {
    id?: true
    shopUserId?: true
    shopId?: true
  }

  export type UserWorkingHourSumAggregateInputType = {
    id?: true
    shopUserId?: true
    shopId?: true
  }

  export type UserWorkingHourMinAggregateInputType = {
    id?: true
    shopUserId?: true
    shopId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isOff?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserWorkingHourMaxAggregateInputType = {
    id?: true
    shopUserId?: true
    shopId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isOff?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserWorkingHourCountAggregateInputType = {
    id?: true
    shopUserId?: true
    shopId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isOff?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserWorkingHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWorkingHour to aggregate.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWorkingHours
    **/
    _count?: true | UserWorkingHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserWorkingHourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserWorkingHourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWorkingHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWorkingHourMaxAggregateInputType
  }

  export type GetUserWorkingHourAggregateType<T extends UserWorkingHourAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWorkingHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWorkingHour[P]>
      : GetScalarType<T[P], AggregateUserWorkingHour[P]>
  }




  export type UserWorkingHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkingHourWhereInput
    orderBy?: UserWorkingHourOrderByWithAggregationInput | UserWorkingHourOrderByWithAggregationInput[]
    by: UserWorkingHourScalarFieldEnum[] | UserWorkingHourScalarFieldEnum
    having?: UserWorkingHourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWorkingHourCountAggregateInputType | true
    _avg?: UserWorkingHourAvgAggregateInputType
    _sum?: UserWorkingHourSumAggregateInputType
    _min?: UserWorkingHourMinAggregateInputType
    _max?: UserWorkingHourMaxAggregateInputType
  }

  export type UserWorkingHourGroupByOutputType = {
    id: number
    shopUserId: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserWorkingHourCountAggregateOutputType | null
    _avg: UserWorkingHourAvgAggregateOutputType | null
    _sum: UserWorkingHourSumAggregateOutputType | null
    _min: UserWorkingHourMinAggregateOutputType | null
    _max: UserWorkingHourMaxAggregateOutputType | null
  }

  type GetUserWorkingHourGroupByPayload<T extends UserWorkingHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWorkingHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWorkingHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWorkingHourGroupByOutputType[P]>
            : GetScalarType<T[P], UserWorkingHourGroupByOutputType[P]>
        }
      >
    >


  export type UserWorkingHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopUserId?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isOff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkingHour"]>

  export type UserWorkingHourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopUserId?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isOff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkingHour"]>

  export type UserWorkingHourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopUserId?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isOff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkingHour"]>

  export type UserWorkingHourSelectScalar = {
    id?: boolean
    shopUserId?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isOff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserWorkingHourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopUserId" | "shopId" | "dayOfWeek" | "startTime" | "endTime" | "isOff" | "createdAt" | "updatedAt", ExtArgs["result"]["userWorkingHour"]>
  export type UserWorkingHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type UserWorkingHourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type UserWorkingHourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $UserWorkingHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWorkingHour"
    objects: {
      shopUser: Prisma.$ShopUserPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopUserId: number
      shopId: number
      dayOfWeek: $Enums.DayOfWeek
      startTime: string
      endTime: string
      isOff: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userWorkingHour"]>
    composites: {}
  }

  type UserWorkingHourGetPayload<S extends boolean | null | undefined | UserWorkingHourDefaultArgs> = $Result.GetResult<Prisma.$UserWorkingHourPayload, S>

  type UserWorkingHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWorkingHourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWorkingHourCountAggregateInputType | true
    }

  export interface UserWorkingHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWorkingHour'], meta: { name: 'UserWorkingHour' } }
    /**
     * Find zero or one UserWorkingHour that matches the filter.
     * @param {UserWorkingHourFindUniqueArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWorkingHourFindUniqueArgs>(args: SelectSubset<T, UserWorkingHourFindUniqueArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWorkingHour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWorkingHourFindUniqueOrThrowArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWorkingHourFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWorkingHourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWorkingHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourFindFirstArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWorkingHourFindFirstArgs>(args?: SelectSubset<T, UserWorkingHourFindFirstArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWorkingHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourFindFirstOrThrowArgs} args - Arguments to find a UserWorkingHour
     * @example
     * // Get one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWorkingHourFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWorkingHourFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWorkingHours
     * const userWorkingHours = await prisma.userWorkingHour.findMany()
     * 
     * // Get first 10 UserWorkingHours
     * const userWorkingHours = await prisma.userWorkingHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWorkingHourWithIdOnly = await prisma.userWorkingHour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWorkingHourFindManyArgs>(args?: SelectSubset<T, UserWorkingHourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWorkingHour.
     * @param {UserWorkingHourCreateArgs} args - Arguments to create a UserWorkingHour.
     * @example
     * // Create one UserWorkingHour
     * const UserWorkingHour = await prisma.userWorkingHour.create({
     *   data: {
     *     // ... data to create a UserWorkingHour
     *   }
     * })
     * 
     */
    create<T extends UserWorkingHourCreateArgs>(args: SelectSubset<T, UserWorkingHourCreateArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWorkingHours.
     * @param {UserWorkingHourCreateManyArgs} args - Arguments to create many UserWorkingHours.
     * @example
     * // Create many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWorkingHourCreateManyArgs>(args?: SelectSubset<T, UserWorkingHourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWorkingHours and returns the data saved in the database.
     * @param {UserWorkingHourCreateManyAndReturnArgs} args - Arguments to create many UserWorkingHours.
     * @example
     * // Create many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWorkingHours and only return the `id`
     * const userWorkingHourWithIdOnly = await prisma.userWorkingHour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWorkingHourCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWorkingHourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWorkingHour.
     * @param {UserWorkingHourDeleteArgs} args - Arguments to delete one UserWorkingHour.
     * @example
     * // Delete one UserWorkingHour
     * const UserWorkingHour = await prisma.userWorkingHour.delete({
     *   where: {
     *     // ... filter to delete one UserWorkingHour
     *   }
     * })
     * 
     */
    delete<T extends UserWorkingHourDeleteArgs>(args: SelectSubset<T, UserWorkingHourDeleteArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWorkingHour.
     * @param {UserWorkingHourUpdateArgs} args - Arguments to update one UserWorkingHour.
     * @example
     * // Update one UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWorkingHourUpdateArgs>(args: SelectSubset<T, UserWorkingHourUpdateArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWorkingHours.
     * @param {UserWorkingHourDeleteManyArgs} args - Arguments to filter UserWorkingHours to delete.
     * @example
     * // Delete a few UserWorkingHours
     * const { count } = await prisma.userWorkingHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWorkingHourDeleteManyArgs>(args?: SelectSubset<T, UserWorkingHourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWorkingHourUpdateManyArgs>(args: SelectSubset<T, UserWorkingHourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWorkingHours and returns the data updated in the database.
     * @param {UserWorkingHourUpdateManyAndReturnArgs} args - Arguments to update many UserWorkingHours.
     * @example
     * // Update many UserWorkingHours
     * const userWorkingHour = await prisma.userWorkingHour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWorkingHours and only return the `id`
     * const userWorkingHourWithIdOnly = await prisma.userWorkingHour.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserWorkingHourUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWorkingHourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWorkingHour.
     * @param {UserWorkingHourUpsertArgs} args - Arguments to update or create a UserWorkingHour.
     * @example
     * // Update or create a UserWorkingHour
     * const userWorkingHour = await prisma.userWorkingHour.upsert({
     *   create: {
     *     // ... data to create a UserWorkingHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWorkingHour we want to update
     *   }
     * })
     */
    upsert<T extends UserWorkingHourUpsertArgs>(args: SelectSubset<T, UserWorkingHourUpsertArgs<ExtArgs>>): Prisma__UserWorkingHourClient<$Result.GetResult<Prisma.$UserWorkingHourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourCountArgs} args - Arguments to filter UserWorkingHours to count.
     * @example
     * // Count the number of UserWorkingHours
     * const count = await prisma.userWorkingHour.count({
     *   where: {
     *     // ... the filter for the UserWorkingHours we want to count
     *   }
     * })
    **/
    count<T extends UserWorkingHourCountArgs>(
      args?: Subset<T, UserWorkingHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWorkingHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWorkingHourAggregateArgs>(args: Subset<T, UserWorkingHourAggregateArgs>): Prisma.PrismaPromise<GetUserWorkingHourAggregateType<T>>

    /**
     * Group by UserWorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkingHourGroupByArgs} args - Group by arguments.
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
      T extends UserWorkingHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWorkingHourGroupByArgs['orderBy'] }
        : { orderBy?: UserWorkingHourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWorkingHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWorkingHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWorkingHour model
   */
  readonly fields: UserWorkingHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWorkingHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWorkingHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shopUser<T extends ShopUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopUserDefaultArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserWorkingHour model
   */
  interface UserWorkingHourFieldRefs {
    readonly id: FieldRef<"UserWorkingHour", 'Int'>
    readonly shopUserId: FieldRef<"UserWorkingHour", 'Int'>
    readonly shopId: FieldRef<"UserWorkingHour", 'Int'>
    readonly dayOfWeek: FieldRef<"UserWorkingHour", 'DayOfWeek'>
    readonly startTime: FieldRef<"UserWorkingHour", 'String'>
    readonly endTime: FieldRef<"UserWorkingHour", 'String'>
    readonly isOff: FieldRef<"UserWorkingHour", 'Boolean'>
    readonly createdAt: FieldRef<"UserWorkingHour", 'DateTime'>
    readonly updatedAt: FieldRef<"UserWorkingHour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWorkingHour findUnique
   */
  export type UserWorkingHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour findUniqueOrThrow
   */
  export type UserWorkingHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour findFirst
   */
  export type UserWorkingHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWorkingHours.
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWorkingHours.
     */
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * UserWorkingHour findFirstOrThrow
   */
  export type UserWorkingHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHour to fetch.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWorkingHours.
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWorkingHours.
     */
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * UserWorkingHour findMany
   */
  export type UserWorkingHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkingHours to fetch.
     */
    where?: UserWorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkingHours to fetch.
     */
    orderBy?: UserWorkingHourOrderByWithRelationInput | UserWorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWorkingHours.
     */
    cursor?: UserWorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkingHours.
     */
    skip?: number
    distinct?: UserWorkingHourScalarFieldEnum | UserWorkingHourScalarFieldEnum[]
  }

  /**
   * UserWorkingHour create
   */
  export type UserWorkingHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWorkingHour.
     */
    data: XOR<UserWorkingHourCreateInput, UserWorkingHourUncheckedCreateInput>
  }

  /**
   * UserWorkingHour createMany
   */
  export type UserWorkingHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWorkingHours.
     */
    data: UserWorkingHourCreateManyInput | UserWorkingHourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWorkingHour createManyAndReturn
   */
  export type UserWorkingHourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * The data used to create many UserWorkingHours.
     */
    data: UserWorkingHourCreateManyInput | UserWorkingHourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWorkingHour update
   */
  export type UserWorkingHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWorkingHour.
     */
    data: XOR<UserWorkingHourUpdateInput, UserWorkingHourUncheckedUpdateInput>
    /**
     * Choose, which UserWorkingHour to update.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour updateMany
   */
  export type UserWorkingHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWorkingHours.
     */
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which UserWorkingHours to update
     */
    where?: UserWorkingHourWhereInput
    /**
     * Limit how many UserWorkingHours to update.
     */
    limit?: number
  }

  /**
   * UserWorkingHour updateManyAndReturn
   */
  export type UserWorkingHourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * The data used to update UserWorkingHours.
     */
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which UserWorkingHours to update
     */
    where?: UserWorkingHourWhereInput
    /**
     * Limit how many UserWorkingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWorkingHour upsert
   */
  export type UserWorkingHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWorkingHour to update in case it exists.
     */
    where: UserWorkingHourWhereUniqueInput
    /**
     * In case the UserWorkingHour found by the `where` argument doesn't exist, create a new UserWorkingHour with this data.
     */
    create: XOR<UserWorkingHourCreateInput, UserWorkingHourUncheckedCreateInput>
    /**
     * In case the UserWorkingHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWorkingHourUpdateInput, UserWorkingHourUncheckedUpdateInput>
  }

  /**
   * UserWorkingHour delete
   */
  export type UserWorkingHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
    /**
     * Filter which UserWorkingHour to delete.
     */
    where: UserWorkingHourWhereUniqueInput
  }

  /**
   * UserWorkingHour deleteMany
   */
  export type UserWorkingHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWorkingHours to delete
     */
    where?: UserWorkingHourWhereInput
    /**
     * Limit how many UserWorkingHours to delete.
     */
    limit?: number
  }

  /**
   * UserWorkingHour without action
   */
  export type UserWorkingHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkingHour
     */
    select?: UserWorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkingHour
     */
    omit?: UserWorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkingHourInclude<ExtArgs> | null
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
    shopId: number | null
    duration: number | null
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    shopId: number | null
    duration: number | null
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    name: string | null
    duration: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    name: string | null
    duration: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    duration: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    shopId?: true
    duration?: true
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    shopId?: true
    duration?: true
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
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
    shopId: number
    name: string
    duration: number
    price: number
    createdAt: Date
    updatedAt: Date
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
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    assignedUsers?: boolean | Service$assignedUsersArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "name" | "duration" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    assignedUsers?: boolean | Service$assignedUsersArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      assignedUsers: Prisma.$ServiceAssignmentPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      name: string
      duration: number
      price: number
      createdAt: Date
      updatedAt: Date
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
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedUsers<T extends Service$assignedUsersArgs<ExtArgs> = {}>(args?: Subset<T, Service$assignedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly shopId: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
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
   * Service.assignedUsers
   */
  export type Service$assignedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    where?: ServiceAssignmentWhereInput
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    cursor?: ServiceAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
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
   * Model ServiceAssignment
   */

  export type AggregateServiceAssignment = {
    _count: ServiceAssignmentCountAggregateOutputType | null
    _avg: ServiceAssignmentAvgAggregateOutputType | null
    _sum: ServiceAssignmentSumAggregateOutputType | null
    _min: ServiceAssignmentMinAggregateOutputType | null
    _max: ServiceAssignmentMaxAggregateOutputType | null
  }

  export type ServiceAssignmentAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
    shopUserId: number | null
  }

  export type ServiceAssignmentSumAggregateOutputType = {
    id: number | null
    serviceId: number | null
    shopUserId: number | null
  }

  export type ServiceAssignmentMinAggregateOutputType = {
    id: number | null
    serviceId: number | null
    shopUserId: number | null
  }

  export type ServiceAssignmentMaxAggregateOutputType = {
    id: number | null
    serviceId: number | null
    shopUserId: number | null
  }

  export type ServiceAssignmentCountAggregateOutputType = {
    id: number
    serviceId: number
    shopUserId: number
    _all: number
  }


  export type ServiceAssignmentAvgAggregateInputType = {
    id?: true
    serviceId?: true
    shopUserId?: true
  }

  export type ServiceAssignmentSumAggregateInputType = {
    id?: true
    serviceId?: true
    shopUserId?: true
  }

  export type ServiceAssignmentMinAggregateInputType = {
    id?: true
    serviceId?: true
    shopUserId?: true
  }

  export type ServiceAssignmentMaxAggregateInputType = {
    id?: true
    serviceId?: true
    shopUserId?: true
  }

  export type ServiceAssignmentCountAggregateInputType = {
    id?: true
    serviceId?: true
    shopUserId?: true
    _all?: true
  }

  export type ServiceAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAssignment to aggregate.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceAssignments
    **/
    _count?: true | ServiceAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceAssignmentMaxAggregateInputType
  }

  export type GetServiceAssignmentAggregateType<T extends ServiceAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceAssignment[P]>
      : GetScalarType<T[P], AggregateServiceAssignment[P]>
  }




  export type ServiceAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAssignmentWhereInput
    orderBy?: ServiceAssignmentOrderByWithAggregationInput | ServiceAssignmentOrderByWithAggregationInput[]
    by: ServiceAssignmentScalarFieldEnum[] | ServiceAssignmentScalarFieldEnum
    having?: ServiceAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceAssignmentCountAggregateInputType | true
    _avg?: ServiceAssignmentAvgAggregateInputType
    _sum?: ServiceAssignmentSumAggregateInputType
    _min?: ServiceAssignmentMinAggregateInputType
    _max?: ServiceAssignmentMaxAggregateInputType
  }

  export type ServiceAssignmentGroupByOutputType = {
    id: number
    serviceId: number
    shopUserId: number
    _count: ServiceAssignmentCountAggregateOutputType | null
    _avg: ServiceAssignmentAvgAggregateOutputType | null
    _sum: ServiceAssignmentSumAggregateOutputType | null
    _min: ServiceAssignmentMinAggregateOutputType | null
    _max: ServiceAssignmentMaxAggregateOutputType | null
  }

  type GetServiceAssignmentGroupByPayload<T extends ServiceAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ServiceAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    shopUserId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAssignment"]>

  export type ServiceAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    shopUserId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAssignment"]>

  export type ServiceAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    shopUserId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAssignment"]>

  export type ServiceAssignmentSelectScalar = {
    id?: boolean
    serviceId?: boolean
    shopUserId?: boolean
  }

  export type ServiceAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "shopUserId", ExtArgs["result"]["serviceAssignment"]>
  export type ServiceAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
  }
  export type ServiceAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
  }
  export type ServiceAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    shopUser?: boolean | ShopUserDefaultArgs<ExtArgs>
  }

  export type $ServiceAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceAssignment"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      shopUser: Prisma.$ShopUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceId: number
      shopUserId: number
    }, ExtArgs["result"]["serviceAssignment"]>
    composites: {}
  }

  type ServiceAssignmentGetPayload<S extends boolean | null | undefined | ServiceAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ServiceAssignmentPayload, S>

  type ServiceAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceAssignmentCountAggregateInputType | true
    }

  export interface ServiceAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceAssignment'], meta: { name: 'ServiceAssignment' } }
    /**
     * Find zero or one ServiceAssignment that matches the filter.
     * @param {ServiceAssignmentFindUniqueArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceAssignmentFindUniqueArgs>(args: SelectSubset<T, ServiceAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentFindFirstArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceAssignmentFindFirstArgs>(args?: SelectSubset<T, ServiceAssignmentFindFirstArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentFindFirstOrThrowArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceAssignments
     * const serviceAssignments = await prisma.serviceAssignment.findMany()
     * 
     * // Get first 10 ServiceAssignments
     * const serviceAssignments = await prisma.serviceAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceAssignmentWithIdOnly = await prisma.serviceAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceAssignmentFindManyArgs>(args?: SelectSubset<T, ServiceAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceAssignment.
     * @param {ServiceAssignmentCreateArgs} args - Arguments to create a ServiceAssignment.
     * @example
     * // Create one ServiceAssignment
     * const ServiceAssignment = await prisma.serviceAssignment.create({
     *   data: {
     *     // ... data to create a ServiceAssignment
     *   }
     * })
     * 
     */
    create<T extends ServiceAssignmentCreateArgs>(args: SelectSubset<T, ServiceAssignmentCreateArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceAssignments.
     * @param {ServiceAssignmentCreateManyArgs} args - Arguments to create many ServiceAssignments.
     * @example
     * // Create many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceAssignmentCreateManyArgs>(args?: SelectSubset<T, ServiceAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceAssignments and returns the data saved in the database.
     * @param {ServiceAssignmentCreateManyAndReturnArgs} args - Arguments to create many ServiceAssignments.
     * @example
     * // Create many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceAssignments and only return the `id`
     * const serviceAssignmentWithIdOnly = await prisma.serviceAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceAssignment.
     * @param {ServiceAssignmentDeleteArgs} args - Arguments to delete one ServiceAssignment.
     * @example
     * // Delete one ServiceAssignment
     * const ServiceAssignment = await prisma.serviceAssignment.delete({
     *   where: {
     *     // ... filter to delete one ServiceAssignment
     *   }
     * })
     * 
     */
    delete<T extends ServiceAssignmentDeleteArgs>(args: SelectSubset<T, ServiceAssignmentDeleteArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceAssignment.
     * @param {ServiceAssignmentUpdateArgs} args - Arguments to update one ServiceAssignment.
     * @example
     * // Update one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceAssignmentUpdateArgs>(args: SelectSubset<T, ServiceAssignmentUpdateArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceAssignments.
     * @param {ServiceAssignmentDeleteManyArgs} args - Arguments to filter ServiceAssignments to delete.
     * @example
     * // Delete a few ServiceAssignments
     * const { count } = await prisma.serviceAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceAssignmentDeleteManyArgs>(args?: SelectSubset<T, ServiceAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceAssignmentUpdateManyArgs>(args: SelectSubset<T, ServiceAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAssignments and returns the data updated in the database.
     * @param {ServiceAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ServiceAssignments.
     * @example
     * // Update many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceAssignments and only return the `id`
     * const serviceAssignmentWithIdOnly = await prisma.serviceAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceAssignment.
     * @param {ServiceAssignmentUpsertArgs} args - Arguments to update or create a ServiceAssignment.
     * @example
     * // Update or create a ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.upsert({
     *   create: {
     *     // ... data to create a ServiceAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ServiceAssignmentUpsertArgs>(args: SelectSubset<T, ServiceAssignmentUpsertArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentCountArgs} args - Arguments to filter ServiceAssignments to count.
     * @example
     * // Count the number of ServiceAssignments
     * const count = await prisma.serviceAssignment.count({
     *   where: {
     *     // ... the filter for the ServiceAssignments we want to count
     *   }
     * })
    **/
    count<T extends ServiceAssignmentCountArgs>(
      args?: Subset<T, ServiceAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAssignmentAggregateArgs>(args: Subset<T, ServiceAssignmentAggregateArgs>): Prisma.PrismaPromise<GetServiceAssignmentAggregateType<T>>

    /**
     * Group by ServiceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ServiceAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ServiceAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceAssignment model
   */
  readonly fields: ServiceAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shopUser<T extends ShopUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopUserDefaultArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServiceAssignment model
   */
  interface ServiceAssignmentFieldRefs {
    readonly id: FieldRef<"ServiceAssignment", 'Int'>
    readonly serviceId: FieldRef<"ServiceAssignment", 'Int'>
    readonly shopUserId: FieldRef<"ServiceAssignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceAssignment findUnique
   */
  export type ServiceAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment findUniqueOrThrow
   */
  export type ServiceAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment findFirst
   */
  export type ServiceAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAssignments.
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAssignments.
     */
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment findFirstOrThrow
   */
  export type ServiceAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAssignments.
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAssignments.
     */
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment findMany
   */
  export type ServiceAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignments to fetch.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceAssignments.
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment create
   */
  export type ServiceAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceAssignment.
     */
    data: XOR<ServiceAssignmentCreateInput, ServiceAssignmentUncheckedCreateInput>
  }

  /**
   * ServiceAssignment createMany
   */
  export type ServiceAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceAssignments.
     */
    data: ServiceAssignmentCreateManyInput | ServiceAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceAssignment createManyAndReturn
   */
  export type ServiceAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceAssignments.
     */
    data: ServiceAssignmentCreateManyInput | ServiceAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceAssignment update
   */
  export type ServiceAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceAssignment.
     */
    data: XOR<ServiceAssignmentUpdateInput, ServiceAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ServiceAssignment to update.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment updateMany
   */
  export type ServiceAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceAssignments.
     */
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAssignments to update
     */
    where?: ServiceAssignmentWhereInput
    /**
     * Limit how many ServiceAssignments to update.
     */
    limit?: number
  }

  /**
   * ServiceAssignment updateManyAndReturn
   */
  export type ServiceAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ServiceAssignments.
     */
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAssignments to update
     */
    where?: ServiceAssignmentWhereInput
    /**
     * Limit how many ServiceAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceAssignment upsert
   */
  export type ServiceAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceAssignment to update in case it exists.
     */
    where: ServiceAssignmentWhereUniqueInput
    /**
     * In case the ServiceAssignment found by the `where` argument doesn't exist, create a new ServiceAssignment with this data.
     */
    create: XOR<ServiceAssignmentCreateInput, ServiceAssignmentUncheckedCreateInput>
    /**
     * In case the ServiceAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceAssignmentUpdateInput, ServiceAssignmentUncheckedUpdateInput>
  }

  /**
   * ServiceAssignment delete
   */
  export type ServiceAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ServiceAssignment to delete.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment deleteMany
   */
  export type ServiceAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAssignments to delete
     */
    where?: ServiceAssignmentWhereInput
    /**
     * Limit how many ServiceAssignments to delete.
     */
    limit?: number
  }

  /**
   * ServiceAssignment without action
   */
  export type ServiceAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
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
    note: string | null
    banned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    note: string | null
    banned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    note: number
    banned: number
    createdAt: number
    updatedAt: number
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
    note?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    note?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    note?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
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
    note: string | null
    banned: boolean
    createdAt: Date
    updatedAt: Date
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
    note?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    note?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    note?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    note?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "note" | "banned" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
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
      note: string | null
      banned: boolean
      createdAt: Date
      updatedAt: Date
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
    readonly note: FieldRef<"Customer", 'String'>
    readonly banned: FieldRef<"Customer", 'Boolean'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
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
    shopId: number | null
    serviceId: number | null
    providerId: number | null
    customerId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    shopId: number | null
    serviceId: number | null
    providerId: number | null
    customerId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    serviceId: number | null
    providerId: number | null
    customerId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    serviceId: number | null
    providerId: number | null
    customerId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    shopId: number
    serviceId: number
    providerId: number
    customerId: number
    startTime: number
    endTime: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    shopId?: true
    serviceId?: true
    providerId?: true
    customerId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    shopId?: true
    serviceId?: true
    providerId?: true
    customerId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    shopId?: true
    serviceId?: true
    providerId?: true
    customerId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    shopId?: true
    serviceId?: true
    providerId?: true
    customerId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    shopId?: true
    serviceId?: true
    providerId?: true
    customerId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    shopId: number
    serviceId: number
    providerId: number | null
    customerId: number
    startTime: Date
    endTime: Date
    status: $Enums.BookingStatus
    createdAt: Date
    updatedAt: Date
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
    shopId?: boolean
    serviceId?: boolean
    providerId?: boolean
    customerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    serviceId?: boolean
    providerId?: boolean
    customerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    serviceId?: boolean
    providerId?: boolean
    customerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    shopId?: boolean
    serviceId?: boolean
    providerId?: boolean
    customerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "serviceId" | "providerId" | "customerId" | "startTime" | "endTime" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      provider: Prisma.$ShopUserPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      serviceId: number
      providerId: number | null
      customerId: number
      startTime: Date
      endTime: Date
      status: $Enums.BookingStatus
      createdAt: Date
      updatedAt: Date
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
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends Booking$providerArgs<ExtArgs> = {}>(args?: Subset<T, Booking$providerArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly shopId: FieldRef<"Booking", 'Int'>
    readonly serviceId: FieldRef<"Booking", 'Int'>
    readonly providerId: FieldRef<"Booking", 'Int'>
    readonly customerId: FieldRef<"Booking", 'Int'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
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
   * Booking.provider
   */
  export type Booking$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    where?: ShopUserWhereInput
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
    hashedPassword: 'hashedPassword',
    subscription: 'subscription',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ShopUserScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    role: 'role',
    active: 'active',
    bookable: 'bookable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopUserScalarFieldEnum = (typeof ShopUserScalarFieldEnum)[keyof typeof ShopUserScalarFieldEnum]


  export const ShopWorkingHourScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    dayOfWeek: 'dayOfWeek',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isClosed: 'isClosed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopWorkingHourScalarFieldEnum = (typeof ShopWorkingHourScalarFieldEnum)[keyof typeof ShopWorkingHourScalarFieldEnum]


  export const UserWorkingHourScalarFieldEnum: {
    id: 'id',
    shopUserId: 'shopUserId',
    shopId: 'shopId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isOff: 'isOff',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserWorkingHourScalarFieldEnum = (typeof UserWorkingHourScalarFieldEnum)[keyof typeof UserWorkingHourScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    duration: 'duration',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceAssignmentScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    shopUserId: 'shopUserId'
  };

  export type ServiceAssignmentScalarFieldEnum = (typeof ServiceAssignmentScalarFieldEnum)[keyof typeof ServiceAssignmentScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    note: 'note',
    banned: 'banned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    serviceId: 'serviceId',
    providerId: 'providerId',
    customerId: 'customerId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


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
   * Reference to a field of type 'Subscription'
   */
  export type EnumSubscriptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subscription'>
    


  /**
   * Reference to a field of type 'Subscription[]'
   */
  export type ListEnumSubscriptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subscription[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ShopRole'
   */
  export type EnumShopRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopRole'>
    


  /**
   * Reference to a field of type 'ShopRole[]'
   */
  export type ListEnumShopRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopRole[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    subscription?: EnumSubscriptionFilter<"User"> | $Enums.Subscription
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedShops?: ShopListRelationFilter
    memberships?: ShopUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    subscription?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedShops?: ShopOrderByRelationAggregateInput
    memberships?: ShopUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    subscription?: EnumSubscriptionFilter<"User"> | $Enums.Subscription
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedShops?: ShopListRelationFilter
    memberships?: ShopUserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    subscription?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    subscription?: EnumSubscriptionWithAggregatesFilter<"User"> | $Enums.Subscription
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: IntFilter<"Shop"> | number
    name?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    ownerId?: IntFilter<"Shop"> | number
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ShopUserListRelationFilter
    workingHours?: ShopWorkingHourListRelationFilter
    userWorkingHours?: UserWorkingHourListRelationFilter
    services?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: ShopUserOrderByRelationAggregateInput
    workingHours?: ShopWorkingHourOrderByRelationAggregateInput
    userWorkingHours?: UserWorkingHourOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    ownerId?: IntFilter<"Shop"> | number
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ShopUserListRelationFilter
    workingHours?: ShopWorkingHourListRelationFilter
    userWorkingHours?: UserWorkingHourListRelationFilter
    services?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shop"> | number
    name?: StringWithAggregatesFilter<"Shop"> | string
    address?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    ownerId?: IntWithAggregatesFilter<"Shop"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type ShopUserWhereInput = {
    AND?: ShopUserWhereInput | ShopUserWhereInput[]
    OR?: ShopUserWhereInput[]
    NOT?: ShopUserWhereInput | ShopUserWhereInput[]
    id?: IntFilter<"ShopUser"> | number
    shopId?: IntFilter<"ShopUser"> | number
    userId?: IntFilter<"ShopUser"> | number
    role?: EnumShopRoleFilter<"ShopUser"> | $Enums.ShopRole
    active?: BoolFilter<"ShopUser"> | boolean
    bookable?: BoolFilter<"ShopUser"> | boolean
    createdAt?: DateTimeFilter<"ShopUser"> | Date | string
    updatedAt?: DateTimeFilter<"ShopUser"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workingHours?: UserWorkingHourListRelationFilter
    assignedServices?: ServiceAssignmentListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ShopUserOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    active?: SortOrder
    bookable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    workingHours?: UserWorkingHourOrderByRelationAggregateInput
    assignedServices?: ServiceAssignmentOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ShopUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shopId_userId?: ShopUserShopIdUserIdCompoundUniqueInput
    AND?: ShopUserWhereInput | ShopUserWhereInput[]
    OR?: ShopUserWhereInput[]
    NOT?: ShopUserWhereInput | ShopUserWhereInput[]
    shopId?: IntFilter<"ShopUser"> | number
    userId?: IntFilter<"ShopUser"> | number
    role?: EnumShopRoleFilter<"ShopUser"> | $Enums.ShopRole
    active?: BoolFilter<"ShopUser"> | boolean
    bookable?: BoolFilter<"ShopUser"> | boolean
    createdAt?: DateTimeFilter<"ShopUser"> | Date | string
    updatedAt?: DateTimeFilter<"ShopUser"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workingHours?: UserWorkingHourListRelationFilter
    assignedServices?: ServiceAssignmentListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "shopId_userId">

  export type ShopUserOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    active?: SortOrder
    bookable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopUserCountOrderByAggregateInput
    _avg?: ShopUserAvgOrderByAggregateInput
    _max?: ShopUserMaxOrderByAggregateInput
    _min?: ShopUserMinOrderByAggregateInput
    _sum?: ShopUserSumOrderByAggregateInput
  }

  export type ShopUserScalarWhereWithAggregatesInput = {
    AND?: ShopUserScalarWhereWithAggregatesInput | ShopUserScalarWhereWithAggregatesInput[]
    OR?: ShopUserScalarWhereWithAggregatesInput[]
    NOT?: ShopUserScalarWhereWithAggregatesInput | ShopUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShopUser"> | number
    shopId?: IntWithAggregatesFilter<"ShopUser"> | number
    userId?: IntWithAggregatesFilter<"ShopUser"> | number
    role?: EnumShopRoleWithAggregatesFilter<"ShopUser"> | $Enums.ShopRole
    active?: BoolWithAggregatesFilter<"ShopUser"> | boolean
    bookable?: BoolWithAggregatesFilter<"ShopUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShopUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopUser"> | Date | string
  }

  export type ShopWorkingHourWhereInput = {
    AND?: ShopWorkingHourWhereInput | ShopWorkingHourWhereInput[]
    OR?: ShopWorkingHourWhereInput[]
    NOT?: ShopWorkingHourWhereInput | ShopWorkingHourWhereInput[]
    id?: IntFilter<"ShopWorkingHour"> | number
    shopId?: IntFilter<"ShopWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"ShopWorkingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"ShopWorkingHour"> | string
    closeTime?: StringFilter<"ShopWorkingHour"> | string
    isClosed?: BoolFilter<"ShopWorkingHour"> | boolean
    createdAt?: DateTimeFilter<"ShopWorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"ShopWorkingHour"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type ShopWorkingHourOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type ShopWorkingHourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopWorkingHourWhereInput | ShopWorkingHourWhereInput[]
    OR?: ShopWorkingHourWhereInput[]
    NOT?: ShopWorkingHourWhereInput | ShopWorkingHourWhereInput[]
    shopId?: IntFilter<"ShopWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"ShopWorkingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"ShopWorkingHour"> | string
    closeTime?: StringFilter<"ShopWorkingHour"> | string
    isClosed?: BoolFilter<"ShopWorkingHour"> | boolean
    createdAt?: DateTimeFilter<"ShopWorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"ShopWorkingHour"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type ShopWorkingHourOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopWorkingHourCountOrderByAggregateInput
    _avg?: ShopWorkingHourAvgOrderByAggregateInput
    _max?: ShopWorkingHourMaxOrderByAggregateInput
    _min?: ShopWorkingHourMinOrderByAggregateInput
    _sum?: ShopWorkingHourSumOrderByAggregateInput
  }

  export type ShopWorkingHourScalarWhereWithAggregatesInput = {
    AND?: ShopWorkingHourScalarWhereWithAggregatesInput | ShopWorkingHourScalarWhereWithAggregatesInput[]
    OR?: ShopWorkingHourScalarWhereWithAggregatesInput[]
    NOT?: ShopWorkingHourScalarWhereWithAggregatesInput | ShopWorkingHourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShopWorkingHour"> | number
    shopId?: IntWithAggregatesFilter<"ShopWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"ShopWorkingHour"> | $Enums.DayOfWeek
    openTime?: StringWithAggregatesFilter<"ShopWorkingHour"> | string
    closeTime?: StringWithAggregatesFilter<"ShopWorkingHour"> | string
    isClosed?: BoolWithAggregatesFilter<"ShopWorkingHour"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShopWorkingHour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopWorkingHour"> | Date | string
  }

  export type UserWorkingHourWhereInput = {
    AND?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    OR?: UserWorkingHourWhereInput[]
    NOT?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    id?: IntFilter<"UserWorkingHour"> | number
    shopUserId?: IntFilter<"UserWorkingHour"> | number
    shopId?: IntFilter<"UserWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"UserWorkingHour"> | $Enums.DayOfWeek
    startTime?: StringFilter<"UserWorkingHour"> | string
    endTime?: StringFilter<"UserWorkingHour"> | string
    isOff?: BoolFilter<"UserWorkingHour"> | boolean
    createdAt?: DateTimeFilter<"UserWorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"UserWorkingHour"> | Date | string
    shopUser?: XOR<ShopUserScalarRelationFilter, ShopUserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type UserWorkingHourOrderByWithRelationInput = {
    id?: SortOrder
    shopUserId?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isOff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shopUser?: ShopUserOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
  }

  export type UserWorkingHourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    OR?: UserWorkingHourWhereInput[]
    NOT?: UserWorkingHourWhereInput | UserWorkingHourWhereInput[]
    shopUserId?: IntFilter<"UserWorkingHour"> | number
    shopId?: IntFilter<"UserWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"UserWorkingHour"> | $Enums.DayOfWeek
    startTime?: StringFilter<"UserWorkingHour"> | string
    endTime?: StringFilter<"UserWorkingHour"> | string
    isOff?: BoolFilter<"UserWorkingHour"> | boolean
    createdAt?: DateTimeFilter<"UserWorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"UserWorkingHour"> | Date | string
    shopUser?: XOR<ShopUserScalarRelationFilter, ShopUserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type UserWorkingHourOrderByWithAggregationInput = {
    id?: SortOrder
    shopUserId?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isOff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserWorkingHourCountOrderByAggregateInput
    _avg?: UserWorkingHourAvgOrderByAggregateInput
    _max?: UserWorkingHourMaxOrderByAggregateInput
    _min?: UserWorkingHourMinOrderByAggregateInput
    _sum?: UserWorkingHourSumOrderByAggregateInput
  }

  export type UserWorkingHourScalarWhereWithAggregatesInput = {
    AND?: UserWorkingHourScalarWhereWithAggregatesInput | UserWorkingHourScalarWhereWithAggregatesInput[]
    OR?: UserWorkingHourScalarWhereWithAggregatesInput[]
    NOT?: UserWorkingHourScalarWhereWithAggregatesInput | UserWorkingHourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserWorkingHour"> | number
    shopUserId?: IntWithAggregatesFilter<"UserWorkingHour"> | number
    shopId?: IntWithAggregatesFilter<"UserWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"UserWorkingHour"> | $Enums.DayOfWeek
    startTime?: StringWithAggregatesFilter<"UserWorkingHour"> | string
    endTime?: StringWithAggregatesFilter<"UserWorkingHour"> | string
    isOff?: BoolWithAggregatesFilter<"UserWorkingHour"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserWorkingHour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserWorkingHour"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    shopId?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    assignedUsers?: ServiceAssignmentListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    assignedUsers?: ServiceAssignmentOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    shopId?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    assignedUsers?: ServiceAssignmentListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    shopId?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    duration?: IntWithAggregatesFilter<"Service"> | number
    price?: FloatWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ServiceAssignmentWhereInput = {
    AND?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    OR?: ServiceAssignmentWhereInput[]
    NOT?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    id?: IntFilter<"ServiceAssignment"> | number
    serviceId?: IntFilter<"ServiceAssignment"> | number
    shopUserId?: IntFilter<"ServiceAssignment"> | number
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    shopUser?: XOR<ShopUserScalarRelationFilter, ShopUserWhereInput>
  }

  export type ServiceAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    shopUserId?: SortOrder
    service?: ServiceOrderByWithRelationInput
    shopUser?: ShopUserOrderByWithRelationInput
  }

  export type ServiceAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serviceId_shopUserId?: ServiceAssignmentServiceIdShopUserIdCompoundUniqueInput
    AND?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    OR?: ServiceAssignmentWhereInput[]
    NOT?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    serviceId?: IntFilter<"ServiceAssignment"> | number
    shopUserId?: IntFilter<"ServiceAssignment"> | number
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    shopUser?: XOR<ShopUserScalarRelationFilter, ShopUserWhereInput>
  }, "id" | "serviceId_shopUserId">

  export type ServiceAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    shopUserId?: SortOrder
    _count?: ServiceAssignmentCountOrderByAggregateInput
    _avg?: ServiceAssignmentAvgOrderByAggregateInput
    _max?: ServiceAssignmentMaxOrderByAggregateInput
    _min?: ServiceAssignmentMinOrderByAggregateInput
    _sum?: ServiceAssignmentSumOrderByAggregateInput
  }

  export type ServiceAssignmentScalarWhereWithAggregatesInput = {
    AND?: ServiceAssignmentScalarWhereWithAggregatesInput | ServiceAssignmentScalarWhereWithAggregatesInput[]
    OR?: ServiceAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ServiceAssignmentScalarWhereWithAggregatesInput | ServiceAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceAssignment"> | number
    serviceId?: IntWithAggregatesFilter<"ServiceAssignment"> | number
    shopUserId?: IntWithAggregatesFilter<"ServiceAssignment"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    note?: StringNullableFilter<"Customer"> | string | null
    banned?: BoolFilter<"Customer"> | boolean
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    note?: StringNullableFilter<"Customer"> | string | null
    banned?: BoolFilter<"Customer"> | boolean
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    note?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    banned?: BoolWithAggregatesFilter<"Customer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    shopId?: IntFilter<"Booking"> | number
    serviceId?: IntFilter<"Booking"> | number
    providerId?: IntNullableFilter<"Booking"> | number | null
    customerId?: IntFilter<"Booking"> | number
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    provider?: XOR<ShopUserNullableScalarRelationFilter, ShopUserWhereInput> | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    serviceId?: SortOrder
    providerId?: SortOrderInput | SortOrder
    customerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    provider?: ShopUserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    shopId?: IntFilter<"Booking"> | number
    serviceId?: IntFilter<"Booking"> | number
    providerId?: IntNullableFilter<"Booking"> | number | null
    customerId?: IntFilter<"Booking"> | number
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    provider?: XOR<ShopUserNullableScalarRelationFilter, ShopUserWhereInput> | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    serviceId?: SortOrder
    providerId?: SortOrderInput | SortOrder
    customerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    shopId?: IntWithAggregatesFilter<"Booking"> | number
    serviceId?: IntWithAggregatesFilter<"Booking"> | number
    providerId?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    customerId?: IntWithAggregatesFilter<"Booking"> | number
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    hashedPassword: string
    subscription: $Enums.Subscription
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedShops?: ShopCreateNestedManyWithoutOwnerInput
    memberships?: ShopUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    hashedPassword: string
    subscription: $Enums.Subscription
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedShops?: ShopUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: ShopUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedShops?: ShopUpdateManyWithoutOwnerNestedInput
    memberships?: ShopUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedShops?: ShopUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: ShopUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    hashedPassword: string
    subscription: $Enums.Subscription
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedShopsInput
    members?: ShopUserCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourUncheckedCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedShopsNestedInput
    members?: ShopUserUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserCreateInput = {
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
    workingHours?: UserWorkingHourCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentCreateNestedManyWithoutShopUserInput
    bookings?: BookingCreateNestedManyWithoutProviderInput
  }

  export type ShopUserUncheckedCreateInput = {
    id?: number
    shopId: number
    userId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentUncheckedCreateNestedManyWithoutShopUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ShopUserUpdateInput = {
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    workingHours?: UserWorkingHourUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUncheckedUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserCreateManyInput = {
    id?: number
    shopId: number
    userId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUserUpdateManyMutationInput = {
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopWorkingHourCreateInput = {
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutWorkingHoursInput
  }

  export type ShopWorkingHourUncheckedCreateInput = {
    id?: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopWorkingHourUpdateInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutWorkingHoursNestedInput
  }

  export type ShopWorkingHourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopWorkingHourCreateManyInput = {
    id?: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopWorkingHourUpdateManyMutationInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopWorkingHourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkingHourCreateInput = {
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shopUser: ShopUserCreateNestedOneWithoutWorkingHoursInput
    shop: ShopCreateNestedOneWithoutUserWorkingHoursInput
  }

  export type UserWorkingHourUncheckedCreateInput = {
    id?: number
    shopUserId: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkingHourUpdateInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopUser?: ShopUserUpdateOneRequiredWithoutWorkingHoursNestedInput
    shop?: ShopUpdateOneRequiredWithoutUserWorkingHoursNestedInput
  }

  export type UserWorkingHourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkingHourCreateManyInput = {
    id?: number
    shopUserId: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkingHourUpdateManyMutationInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkingHourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutServicesInput
    assignedUsers?: ServiceAssignmentCreateNestedManyWithoutServiceInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    shopId: number
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedUsers?: ServiceAssignmentUncheckedCreateNestedManyWithoutServiceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutServicesNestedInput
    assignedUsers?: ServiceAssignmentUpdateManyWithoutServiceNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedUsers?: ServiceAssignmentUncheckedUpdateManyWithoutServiceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    shopId: number
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAssignmentCreateInput = {
    service: ServiceCreateNestedOneWithoutAssignedUsersInput
    shopUser: ShopUserCreateNestedOneWithoutAssignedServicesInput
  }

  export type ServiceAssignmentUncheckedCreateInput = {
    id?: number
    serviceId: number
    shopUserId: number
  }

  export type ServiceAssignmentUpdateInput = {
    service?: ServiceUpdateOneRequiredWithoutAssignedUsersNestedInput
    shopUser?: ShopUserUpdateOneRequiredWithoutAssignedServicesNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceAssignmentCreateManyInput = {
    id?: number
    serviceId: number
    shopUserId: number
  }

  export type ServiceAssignmentUpdateManyMutationInput = {

  }

  export type ServiceAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    name: string
    phone: string
    email?: string | null
    note?: string | null
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    note?: string | null
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    note?: string | null
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    provider?: ShopUserCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    shopId: number
    serviceId: number
    providerId?: number | null
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    provider?: ShopUserUpdateOneWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    shopId: number
    serviceId: number
    providerId?: number | null
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumSubscriptionFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionFilter<$PrismaModel> | $Enums.Subscription
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ShopListRelationFilter = {
    every?: ShopWhereInput
    some?: ShopWhereInput
    none?: ShopWhereInput
  }

  export type ShopUserListRelationFilter = {
    every?: ShopUserWhereInput
    some?: ShopUserWhereInput
    none?: ShopUserWhereInput
  }

  export type ShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    subscription?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    subscription?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    subscription?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumSubscriptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionWithAggregatesFilter<$PrismaModel> | $Enums.Subscription
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShopWorkingHourListRelationFilter = {
    every?: ShopWorkingHourWhereInput
    some?: ShopWorkingHourWhereInput
    none?: ShopWorkingHourWhereInput
  }

  export type UserWorkingHourListRelationFilter = {
    every?: UserWorkingHourWhereInput
    some?: UserWorkingHourWhereInput
    none?: UserWorkingHourWhereInput
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShopWorkingHourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserWorkingHourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
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

  export type EnumShopRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleFilter<$PrismaModel> | $Enums.ShopRole
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type ServiceAssignmentListRelationFilter = {
    every?: ServiceAssignmentWhereInput
    some?: ServiceAssignmentWhereInput
    none?: ServiceAssignmentWhereInput
  }

  export type ServiceAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopUserShopIdUserIdCompoundUniqueInput = {
    shopId: number
    userId: number
  }

  export type ShopUserCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    active?: SortOrder
    bookable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopUserAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
  }

  export type ShopUserMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    active?: SortOrder
    bookable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopUserMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    active?: SortOrder
    bookable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopUserSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
  }

  export type EnumShopRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleWithAggregatesFilter<$PrismaModel> | $Enums.ShopRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopRoleFilter<$PrismaModel>
    _max?: NestedEnumShopRoleFilter<$PrismaModel>
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type ShopWorkingHourCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopWorkingHourAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type ShopWorkingHourMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopWorkingHourMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopWorkingHourSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type ShopUserScalarRelationFilter = {
    is?: ShopUserWhereInput
    isNot?: ShopUserWhereInput
  }

  export type UserWorkingHourCountOrderByAggregateInput = {
    id?: SortOrder
    shopUserId?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isOff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWorkingHourAvgOrderByAggregateInput = {
    id?: SortOrder
    shopUserId?: SortOrder
    shopId?: SortOrder
  }

  export type UserWorkingHourMaxOrderByAggregateInput = {
    id?: SortOrder
    shopUserId?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isOff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWorkingHourMinOrderByAggregateInput = {
    id?: SortOrder
    shopUserId?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isOff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWorkingHourSumOrderByAggregateInput = {
    id?: SortOrder
    shopUserId?: SortOrder
    shopId?: SortOrder
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

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
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

  export type ServiceAssignmentServiceIdShopUserIdCompoundUniqueInput = {
    serviceId: number
    shopUserId: number
  }

  export type ServiceAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    shopUserId?: SortOrder
  }

  export type ServiceAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    shopUserId?: SortOrder
  }

  export type ServiceAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    shopUserId?: SortOrder
  }

  export type ServiceAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    shopUserId?: SortOrder
  }

  export type ServiceAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    shopUserId?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    note?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type ShopUserNullableScalarRelationFilter = {
    is?: ShopUserWhereInput | null
    isNot?: ShopUserWhereInput | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    serviceId?: SortOrder
    providerId?: SortOrder
    customerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    serviceId?: SortOrder
    providerId?: SortOrder
    customerId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    serviceId?: SortOrder
    providerId?: SortOrder
    customerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    serviceId?: SortOrder
    providerId?: SortOrder
    customerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    serviceId?: SortOrder
    providerId?: SortOrder
    customerId?: SortOrder
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

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type ShopCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ShopCreateWithoutOwnerInput, ShopUncheckedCreateWithoutOwnerInput> | ShopCreateWithoutOwnerInput[] | ShopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutOwnerInput | ShopCreateOrConnectWithoutOwnerInput[]
    createMany?: ShopCreateManyOwnerInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUserCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ShopCreateWithoutOwnerInput, ShopUncheckedCreateWithoutOwnerInput> | ShopCreateWithoutOwnerInput[] | ShopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutOwnerInput | ShopCreateOrConnectWithoutOwnerInput[]
    createMany?: ShopCreateManyOwnerInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSubscriptionFieldUpdateOperationsInput = {
    set?: $Enums.Subscription
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShopUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ShopCreateWithoutOwnerInput, ShopUncheckedCreateWithoutOwnerInput> | ShopCreateWithoutOwnerInput[] | ShopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutOwnerInput | ShopCreateOrConnectWithoutOwnerInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutOwnerInput | ShopUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ShopCreateManyOwnerInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutOwnerInput | ShopUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutOwnerInput | ShopUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type ShopUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutUserInput | ShopUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutUserInput | ShopUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutUserInput | ShopUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShopUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ShopCreateWithoutOwnerInput, ShopUncheckedCreateWithoutOwnerInput> | ShopCreateWithoutOwnerInput[] | ShopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutOwnerInput | ShopCreateOrConnectWithoutOwnerInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutOwnerInput | ShopUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ShopCreateManyOwnerInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutOwnerInput | ShopUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutOwnerInput | ShopUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type ShopUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutUserInput | ShopUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutUserInput | ShopUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutUserInput | ShopUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedShopsInput = {
    create?: XOR<UserCreateWithoutOwnedShopsInput, UserUncheckedCreateWithoutOwnedShopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedShopsInput
    connect?: UserWhereUniqueInput
  }

  export type ShopUserCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type ShopWorkingHourCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopWorkingHourCreateWithoutShopInput, ShopWorkingHourUncheckedCreateWithoutShopInput> | ShopWorkingHourCreateWithoutShopInput[] | ShopWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopWorkingHourCreateOrConnectWithoutShopInput | ShopWorkingHourCreateOrConnectWithoutShopInput[]
    createMany?: ShopWorkingHourCreateManyShopInputEnvelope
    connect?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
  }

  export type UserWorkingHourCreateNestedManyWithoutShopInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopInput, UserWorkingHourUncheckedCreateWithoutShopInput> | UserWorkingHourCreateWithoutShopInput[] | UserWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopInput | UserWorkingHourCreateOrConnectWithoutShopInput[]
    createMany?: UserWorkingHourCreateManyShopInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutShopInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutShopInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ShopUserUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type ShopWorkingHourUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopWorkingHourCreateWithoutShopInput, ShopWorkingHourUncheckedCreateWithoutShopInput> | ShopWorkingHourCreateWithoutShopInput[] | ShopWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopWorkingHourCreateOrConnectWithoutShopInput | ShopWorkingHourCreateOrConnectWithoutShopInput[]
    createMany?: ShopWorkingHourCreateManyShopInputEnvelope
    connect?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
  }

  export type UserWorkingHourUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopInput, UserWorkingHourUncheckedCreateWithoutShopInput> | UserWorkingHourCreateWithoutShopInput[] | UserWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopInput | UserWorkingHourCreateOrConnectWithoutShopInput[]
    createMany?: UserWorkingHourCreateManyShopInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutOwnedShopsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedShopsInput, UserUncheckedCreateWithoutOwnedShopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedShopsInput
    upsert?: UserUpsertWithoutOwnedShopsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedShopsInput, UserUpdateWithoutOwnedShopsInput>, UserUncheckedUpdateWithoutOwnedShopsInput>
  }

  export type ShopUserUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutShopInput | ShopUserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutShopInput | ShopUserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutShopInput | ShopUserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type ShopWorkingHourUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopWorkingHourCreateWithoutShopInput, ShopWorkingHourUncheckedCreateWithoutShopInput> | ShopWorkingHourCreateWithoutShopInput[] | ShopWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopWorkingHourCreateOrConnectWithoutShopInput | ShopWorkingHourCreateOrConnectWithoutShopInput[]
    upsert?: ShopWorkingHourUpsertWithWhereUniqueWithoutShopInput | ShopWorkingHourUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopWorkingHourCreateManyShopInputEnvelope
    set?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    disconnect?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    delete?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    connect?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    update?: ShopWorkingHourUpdateWithWhereUniqueWithoutShopInput | ShopWorkingHourUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopWorkingHourUpdateManyWithWhereWithoutShopInput | ShopWorkingHourUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopWorkingHourScalarWhereInput | ShopWorkingHourScalarWhereInput[]
  }

  export type UserWorkingHourUpdateManyWithoutShopNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopInput, UserWorkingHourUncheckedCreateWithoutShopInput> | UserWorkingHourCreateWithoutShopInput[] | UserWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopInput | UserWorkingHourCreateOrConnectWithoutShopInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutShopInput | UserWorkingHourUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UserWorkingHourCreateManyShopInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutShopInput | UserWorkingHourUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutShopInput | UserWorkingHourUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutShopNestedInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutShopInput | ServiceUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutShopInput | ServiceUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutShopInput | ServiceUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutShopNestedInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShopInput | BookingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShopInput | BookingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShopInput | BookingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShopUserUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutShopInput | ShopUserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutShopInput | ShopUserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutShopInput | ShopUserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type ShopWorkingHourUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopWorkingHourCreateWithoutShopInput, ShopWorkingHourUncheckedCreateWithoutShopInput> | ShopWorkingHourCreateWithoutShopInput[] | ShopWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopWorkingHourCreateOrConnectWithoutShopInput | ShopWorkingHourCreateOrConnectWithoutShopInput[]
    upsert?: ShopWorkingHourUpsertWithWhereUniqueWithoutShopInput | ShopWorkingHourUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopWorkingHourCreateManyShopInputEnvelope
    set?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    disconnect?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    delete?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    connect?: ShopWorkingHourWhereUniqueInput | ShopWorkingHourWhereUniqueInput[]
    update?: ShopWorkingHourUpdateWithWhereUniqueWithoutShopInput | ShopWorkingHourUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopWorkingHourUpdateManyWithWhereWithoutShopInput | ShopWorkingHourUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopWorkingHourScalarWhereInput | ShopWorkingHourScalarWhereInput[]
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopInput, UserWorkingHourUncheckedCreateWithoutShopInput> | UserWorkingHourCreateWithoutShopInput[] | UserWorkingHourUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopInput | UserWorkingHourCreateOrConnectWithoutShopInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutShopInput | UserWorkingHourUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UserWorkingHourCreateManyShopInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutShopInput | UserWorkingHourUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutShopInput | UserWorkingHourUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutShopInput | ServiceUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutShopInput | ServiceUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutShopInput | ServiceUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShopInput | BookingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShopInput | BookingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShopInput | BookingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutMembersInput = {
    create?: XOR<ShopCreateWithoutMembersInput, ShopUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMembersInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserWorkingHourCreateNestedManyWithoutShopUserInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopUserInput, UserWorkingHourUncheckedCreateWithoutShopUserInput> | UserWorkingHourCreateWithoutShopUserInput[] | UserWorkingHourUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopUserInput | UserWorkingHourCreateOrConnectWithoutShopUserInput[]
    createMany?: UserWorkingHourCreateManyShopUserInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type ServiceAssignmentCreateNestedManyWithoutShopUserInput = {
    create?: XOR<ServiceAssignmentCreateWithoutShopUserInput, ServiceAssignmentUncheckedCreateWithoutShopUserInput> | ServiceAssignmentCreateWithoutShopUserInput[] | ServiceAssignmentUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutShopUserInput | ServiceAssignmentCreateOrConnectWithoutShopUserInput[]
    createMany?: ServiceAssignmentCreateManyShopUserInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutProviderInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserWorkingHourUncheckedCreateNestedManyWithoutShopUserInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopUserInput, UserWorkingHourUncheckedCreateWithoutShopUserInput> | UserWorkingHourCreateWithoutShopUserInput[] | UserWorkingHourUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopUserInput | UserWorkingHourCreateOrConnectWithoutShopUserInput[]
    createMany?: UserWorkingHourCreateManyShopUserInputEnvelope
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
  }

  export type ServiceAssignmentUncheckedCreateNestedManyWithoutShopUserInput = {
    create?: XOR<ServiceAssignmentCreateWithoutShopUserInput, ServiceAssignmentUncheckedCreateWithoutShopUserInput> | ServiceAssignmentCreateWithoutShopUserInput[] | ServiceAssignmentUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutShopUserInput | ServiceAssignmentCreateOrConnectWithoutShopUserInput[]
    createMany?: ServiceAssignmentCreateManyShopUserInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumShopRoleFieldUpdateOperationsInput = {
    set?: $Enums.ShopRole
  }

  export type ShopUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ShopCreateWithoutMembersInput, ShopUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMembersInput
    upsert?: ShopUpsertWithoutMembersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutMembersInput, ShopUpdateWithoutMembersInput>, ShopUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserWorkingHourUpdateManyWithoutShopUserNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopUserInput, UserWorkingHourUncheckedCreateWithoutShopUserInput> | UserWorkingHourCreateWithoutShopUserInput[] | UserWorkingHourUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopUserInput | UserWorkingHourCreateOrConnectWithoutShopUserInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutShopUserInput | UserWorkingHourUpsertWithWhereUniqueWithoutShopUserInput[]
    createMany?: UserWorkingHourCreateManyShopUserInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutShopUserInput | UserWorkingHourUpdateWithWhereUniqueWithoutShopUserInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutShopUserInput | UserWorkingHourUpdateManyWithWhereWithoutShopUserInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type ServiceAssignmentUpdateManyWithoutShopUserNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutShopUserInput, ServiceAssignmentUncheckedCreateWithoutShopUserInput> | ServiceAssignmentCreateWithoutShopUserInput[] | ServiceAssignmentUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutShopUserInput | ServiceAssignmentCreateOrConnectWithoutShopUserInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutShopUserInput | ServiceAssignmentUpsertWithWhereUniqueWithoutShopUserInput[]
    createMany?: ServiceAssignmentCreateManyShopUserInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutShopUserInput | ServiceAssignmentUpdateWithWhereUniqueWithoutShopUserInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutShopUserInput | ServiceAssignmentUpdateManyWithWhereWithoutShopUserInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutProviderNestedInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutProviderInput | BookingUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutProviderInput | BookingUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutProviderInput | BookingUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutShopUserNestedInput = {
    create?: XOR<UserWorkingHourCreateWithoutShopUserInput, UserWorkingHourUncheckedCreateWithoutShopUserInput> | UserWorkingHourCreateWithoutShopUserInput[] | UserWorkingHourUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: UserWorkingHourCreateOrConnectWithoutShopUserInput | UserWorkingHourCreateOrConnectWithoutShopUserInput[]
    upsert?: UserWorkingHourUpsertWithWhereUniqueWithoutShopUserInput | UserWorkingHourUpsertWithWhereUniqueWithoutShopUserInput[]
    createMany?: UserWorkingHourCreateManyShopUserInputEnvelope
    set?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    disconnect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    delete?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    connect?: UserWorkingHourWhereUniqueInput | UserWorkingHourWhereUniqueInput[]
    update?: UserWorkingHourUpdateWithWhereUniqueWithoutShopUserInput | UserWorkingHourUpdateWithWhereUniqueWithoutShopUserInput[]
    updateMany?: UserWorkingHourUpdateManyWithWhereWithoutShopUserInput | UserWorkingHourUpdateManyWithWhereWithoutShopUserInput[]
    deleteMany?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
  }

  export type ServiceAssignmentUncheckedUpdateManyWithoutShopUserNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutShopUserInput, ServiceAssignmentUncheckedCreateWithoutShopUserInput> | ServiceAssignmentCreateWithoutShopUserInput[] | ServiceAssignmentUncheckedCreateWithoutShopUserInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutShopUserInput | ServiceAssignmentCreateOrConnectWithoutShopUserInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutShopUserInput | ServiceAssignmentUpsertWithWhereUniqueWithoutShopUserInput[]
    createMany?: ServiceAssignmentCreateManyShopUserInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutShopUserInput | ServiceAssignmentUpdateWithWhereUniqueWithoutShopUserInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutShopUserInput | ServiceAssignmentUpdateManyWithWhereWithoutShopUserInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutProviderInput | BookingUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutProviderInput | BookingUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutProviderInput | BookingUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutWorkingHoursInput = {
    create?: XOR<ShopCreateWithoutWorkingHoursInput, ShopUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: ShopCreateOrConnectWithoutWorkingHoursInput
    connect?: ShopWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type ShopUpdateOneRequiredWithoutWorkingHoursNestedInput = {
    create?: XOR<ShopCreateWithoutWorkingHoursInput, ShopUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: ShopCreateOrConnectWithoutWorkingHoursInput
    upsert?: ShopUpsertWithoutWorkingHoursInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutWorkingHoursInput, ShopUpdateWithoutWorkingHoursInput>, ShopUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type ShopUserCreateNestedOneWithoutWorkingHoursInput = {
    create?: XOR<ShopUserCreateWithoutWorkingHoursInput, ShopUserUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: ShopUserCreateOrConnectWithoutWorkingHoursInput
    connect?: ShopUserWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutUserWorkingHoursInput = {
    create?: XOR<ShopCreateWithoutUserWorkingHoursInput, ShopUncheckedCreateWithoutUserWorkingHoursInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUserWorkingHoursInput
    connect?: ShopWhereUniqueInput
  }

  export type ShopUserUpdateOneRequiredWithoutWorkingHoursNestedInput = {
    create?: XOR<ShopUserCreateWithoutWorkingHoursInput, ShopUserUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: ShopUserCreateOrConnectWithoutWorkingHoursInput
    upsert?: ShopUserUpsertWithoutWorkingHoursInput
    connect?: ShopUserWhereUniqueInput
    update?: XOR<XOR<ShopUserUpdateToOneWithWhereWithoutWorkingHoursInput, ShopUserUpdateWithoutWorkingHoursInput>, ShopUserUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type ShopUpdateOneRequiredWithoutUserWorkingHoursNestedInput = {
    create?: XOR<ShopCreateWithoutUserWorkingHoursInput, ShopUncheckedCreateWithoutUserWorkingHoursInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUserWorkingHoursInput
    upsert?: ShopUpsertWithoutUserWorkingHoursInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutUserWorkingHoursInput, ShopUpdateWithoutUserWorkingHoursInput>, ShopUncheckedUpdateWithoutUserWorkingHoursInput>
  }

  export type ShopCreateNestedOneWithoutServicesInput = {
    create?: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutServicesInput
    connect?: ShopWhereUniqueInput
  }

  export type ServiceAssignmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceAssignmentCreateWithoutServiceInput, ServiceAssignmentUncheckedCreateWithoutServiceInput> | ServiceAssignmentCreateWithoutServiceInput[] | ServiceAssignmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutServiceInput | ServiceAssignmentCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceAssignmentCreateManyServiceInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ServiceAssignmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceAssignmentCreateWithoutServiceInput, ServiceAssignmentUncheckedCreateWithoutServiceInput> | ServiceAssignmentCreateWithoutServiceInput[] | ServiceAssignmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutServiceInput | ServiceAssignmentCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceAssignmentCreateManyServiceInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
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

  export type ShopUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutServicesInput
    upsert?: ShopUpsertWithoutServicesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutServicesInput, ShopUpdateWithoutServicesInput>, ShopUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceAssignmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutServiceInput, ServiceAssignmentUncheckedCreateWithoutServiceInput> | ServiceAssignmentCreateWithoutServiceInput[] | ServiceAssignmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutServiceInput | ServiceAssignmentCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutServiceInput | ServiceAssignmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceAssignmentCreateManyServiceInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutServiceInput | ServiceAssignmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutServiceInput | ServiceAssignmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
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

  export type ServiceAssignmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutServiceInput, ServiceAssignmentUncheckedCreateWithoutServiceInput> | ServiceAssignmentCreateWithoutServiceInput[] | ServiceAssignmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutServiceInput | ServiceAssignmentCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutServiceInput | ServiceAssignmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceAssignmentCreateManyServiceInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutServiceInput | ServiceAssignmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutServiceInput | ServiceAssignmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
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

  export type ServiceCreateNestedOneWithoutAssignedUsersInput = {
    create?: XOR<ServiceCreateWithoutAssignedUsersInput, ServiceUncheckedCreateWithoutAssignedUsersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAssignedUsersInput
    connect?: ServiceWhereUniqueInput
  }

  export type ShopUserCreateNestedOneWithoutAssignedServicesInput = {
    create?: XOR<ShopUserCreateWithoutAssignedServicesInput, ShopUserUncheckedCreateWithoutAssignedServicesInput>
    connectOrCreate?: ShopUserCreateOrConnectWithoutAssignedServicesInput
    connect?: ShopUserWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutAssignedUsersNestedInput = {
    create?: XOR<ServiceCreateWithoutAssignedUsersInput, ServiceUncheckedCreateWithoutAssignedUsersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAssignedUsersInput
    upsert?: ServiceUpsertWithoutAssignedUsersInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAssignedUsersInput, ServiceUpdateWithoutAssignedUsersInput>, ServiceUncheckedUpdateWithoutAssignedUsersInput>
  }

  export type ShopUserUpdateOneRequiredWithoutAssignedServicesNestedInput = {
    create?: XOR<ShopUserCreateWithoutAssignedServicesInput, ShopUserUncheckedCreateWithoutAssignedServicesInput>
    connectOrCreate?: ShopUserCreateOrConnectWithoutAssignedServicesInput
    upsert?: ShopUserUpsertWithoutAssignedServicesInput
    connect?: ShopUserWhereUniqueInput
    update?: XOR<XOR<ShopUserUpdateToOneWithWhereWithoutAssignedServicesInput, ShopUserUpdateWithoutAssignedServicesInput>, ShopUserUncheckedUpdateWithoutAssignedServicesInput>
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

  export type ShopCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBookingsInput
    connect?: ShopWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ShopUserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ShopUserCreateWithoutBookingsInput, ShopUserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopUserCreateOrConnectWithoutBookingsInput
    connect?: ShopUserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type ShopUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBookingsInput
    upsert?: ShopUpsertWithoutBookingsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutBookingsInput, ShopUpdateWithoutBookingsInput>, ShopUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    upsert?: ServiceUpsertWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingsInput, ServiceUpdateWithoutBookingsInput>, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ShopUserUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<ShopUserCreateWithoutBookingsInput, ShopUserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopUserCreateOrConnectWithoutBookingsInput
    upsert?: ShopUserUpsertWithoutBookingsInput
    disconnect?: ShopUserWhereInput | boolean
    delete?: ShopUserWhereInput | boolean
    connect?: ShopUserWhereUniqueInput
    update?: XOR<XOR<ShopUserUpdateToOneWithWhereWithoutBookingsInput, ShopUserUpdateWithoutBookingsInput>, ShopUserUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumSubscriptionFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionFilter<$PrismaModel> | $Enums.Subscription
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumSubscriptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionWithAggregatesFilter<$PrismaModel> | $Enums.Subscription
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumShopRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleFilter<$PrismaModel> | $Enums.ShopRole
  }

  export type NestedEnumShopRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleWithAggregatesFilter<$PrismaModel> | $Enums.ShopRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopRoleFilter<$PrismaModel>
    _max?: NestedEnumShopRoleFilter<$PrismaModel>
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
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

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type ShopCreateWithoutOwnerInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShopUserCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourUncheckedCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutOwnerInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutOwnerInput, ShopUncheckedCreateWithoutOwnerInput>
  }

  export type ShopCreateManyOwnerInputEnvelope = {
    data: ShopCreateManyOwnerInput | ShopCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ShopUserCreateWithoutUserInput = {
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutMembersInput
    workingHours?: UserWorkingHourCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentCreateNestedManyWithoutShopUserInput
    bookings?: BookingCreateNestedManyWithoutProviderInput
  }

  export type ShopUserUncheckedCreateWithoutUserInput = {
    id?: number
    shopId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentUncheckedCreateNestedManyWithoutShopUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ShopUserCreateOrConnectWithoutUserInput = {
    where: ShopUserWhereUniqueInput
    create: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput>
  }

  export type ShopUserCreateManyUserInputEnvelope = {
    data: ShopUserCreateManyUserInput | ShopUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutOwnerInput, ShopUncheckedUpdateWithoutOwnerInput>
    create: XOR<ShopCreateWithoutOwnerInput, ShopUncheckedCreateWithoutOwnerInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutOwnerInput, ShopUncheckedUpdateWithoutOwnerInput>
  }

  export type ShopUpdateManyWithWhereWithoutOwnerInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ShopScalarWhereInput = {
    AND?: ShopScalarWhereInput | ShopScalarWhereInput[]
    OR?: ShopScalarWhereInput[]
    NOT?: ShopScalarWhereInput | ShopScalarWhereInput[]
    id?: IntFilter<"Shop"> | number
    name?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    ownerId?: IntFilter<"Shop"> | number
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
  }

  export type ShopUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ShopUserWhereUniqueInput
    update: XOR<ShopUserUpdateWithoutUserInput, ShopUserUncheckedUpdateWithoutUserInput>
    create: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput>
  }

  export type ShopUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ShopUserWhereUniqueInput
    data: XOR<ShopUserUpdateWithoutUserInput, ShopUserUncheckedUpdateWithoutUserInput>
  }

  export type ShopUserUpdateManyWithWhereWithoutUserInput = {
    where: ShopUserScalarWhereInput
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyWithoutUserInput>
  }

  export type ShopUserScalarWhereInput = {
    AND?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
    OR?: ShopUserScalarWhereInput[]
    NOT?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
    id?: IntFilter<"ShopUser"> | number
    shopId?: IntFilter<"ShopUser"> | number
    userId?: IntFilter<"ShopUser"> | number
    role?: EnumShopRoleFilter<"ShopUser"> | $Enums.ShopRole
    active?: BoolFilter<"ShopUser"> | boolean
    bookable?: BoolFilter<"ShopUser"> | boolean
    createdAt?: DateTimeFilter<"ShopUser"> | Date | string
    updatedAt?: DateTimeFilter<"ShopUser"> | Date | string
  }

  export type UserCreateWithoutOwnedShopsInput = {
    name: string
    email: string
    hashedPassword: string
    subscription: $Enums.Subscription
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: ShopUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedShopsInput = {
    id?: number
    name: string
    email: string
    hashedPassword: string
    subscription: $Enums.Subscription
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: ShopUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedShopsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedShopsInput, UserUncheckedCreateWithoutOwnedShopsInput>
  }

  export type ShopUserCreateWithoutShopInput = {
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    workingHours?: UserWorkingHourCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentCreateNestedManyWithoutShopUserInput
    bookings?: BookingCreateNestedManyWithoutProviderInput
  }

  export type ShopUserUncheckedCreateWithoutShopInput = {
    id?: number
    userId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentUncheckedCreateNestedManyWithoutShopUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ShopUserCreateOrConnectWithoutShopInput = {
    where: ShopUserWhereUniqueInput
    create: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput>
  }

  export type ShopUserCreateManyShopInputEnvelope = {
    data: ShopUserCreateManyShopInput | ShopUserCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ShopWorkingHourCreateWithoutShopInput = {
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopWorkingHourUncheckedCreateWithoutShopInput = {
    id?: number
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopWorkingHourCreateOrConnectWithoutShopInput = {
    where: ShopWorkingHourWhereUniqueInput
    create: XOR<ShopWorkingHourCreateWithoutShopInput, ShopWorkingHourUncheckedCreateWithoutShopInput>
  }

  export type ShopWorkingHourCreateManyShopInputEnvelope = {
    data: ShopWorkingHourCreateManyShopInput | ShopWorkingHourCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type UserWorkingHourCreateWithoutShopInput = {
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shopUser: ShopUserCreateNestedOneWithoutWorkingHoursInput
  }

  export type UserWorkingHourUncheckedCreateWithoutShopInput = {
    id?: number
    shopUserId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkingHourCreateOrConnectWithoutShopInput = {
    where: UserWorkingHourWhereUniqueInput
    create: XOR<UserWorkingHourCreateWithoutShopInput, UserWorkingHourUncheckedCreateWithoutShopInput>
  }

  export type UserWorkingHourCreateManyShopInputEnvelope = {
    data: UserWorkingHourCreateManyShopInput | UserWorkingHourCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutShopInput = {
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedUsers?: ServiceAssignmentCreateNestedManyWithoutServiceInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutShopInput = {
    id?: number
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedUsers?: ServiceAssignmentUncheckedCreateNestedManyWithoutServiceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutShopInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput>
  }

  export type ServiceCreateManyShopInputEnvelope = {
    data: ServiceCreateManyShopInput | ServiceCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutShopInput = {
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutBookingsInput
    provider?: ShopUserCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutShopInput = {
    id?: number
    serviceId: number
    providerId?: number | null
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutShopInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput>
  }

  export type BookingCreateManyShopInputEnvelope = {
    data: BookingCreateManyShopInput | BookingCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedShopsInput = {
    update: XOR<UserUpdateWithoutOwnedShopsInput, UserUncheckedUpdateWithoutOwnedShopsInput>
    create: XOR<UserCreateWithoutOwnedShopsInput, UserUncheckedCreateWithoutOwnedShopsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedShopsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedShopsInput, UserUncheckedUpdateWithoutOwnedShopsInput>
  }

  export type UserUpdateWithoutOwnedShopsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ShopUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ShopUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShopUserUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopUserWhereUniqueInput
    update: XOR<ShopUserUpdateWithoutShopInput, ShopUserUncheckedUpdateWithoutShopInput>
    create: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput>
  }

  export type ShopUserUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopUserWhereUniqueInput
    data: XOR<ShopUserUpdateWithoutShopInput, ShopUserUncheckedUpdateWithoutShopInput>
  }

  export type ShopUserUpdateManyWithWhereWithoutShopInput = {
    where: ShopUserScalarWhereInput
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopWorkingHourUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopWorkingHourWhereUniqueInput
    update: XOR<ShopWorkingHourUpdateWithoutShopInput, ShopWorkingHourUncheckedUpdateWithoutShopInput>
    create: XOR<ShopWorkingHourCreateWithoutShopInput, ShopWorkingHourUncheckedCreateWithoutShopInput>
  }

  export type ShopWorkingHourUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopWorkingHourWhereUniqueInput
    data: XOR<ShopWorkingHourUpdateWithoutShopInput, ShopWorkingHourUncheckedUpdateWithoutShopInput>
  }

  export type ShopWorkingHourUpdateManyWithWhereWithoutShopInput = {
    where: ShopWorkingHourScalarWhereInput
    data: XOR<ShopWorkingHourUpdateManyMutationInput, ShopWorkingHourUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopWorkingHourScalarWhereInput = {
    AND?: ShopWorkingHourScalarWhereInput | ShopWorkingHourScalarWhereInput[]
    OR?: ShopWorkingHourScalarWhereInput[]
    NOT?: ShopWorkingHourScalarWhereInput | ShopWorkingHourScalarWhereInput[]
    id?: IntFilter<"ShopWorkingHour"> | number
    shopId?: IntFilter<"ShopWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"ShopWorkingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"ShopWorkingHour"> | string
    closeTime?: StringFilter<"ShopWorkingHour"> | string
    isClosed?: BoolFilter<"ShopWorkingHour"> | boolean
    createdAt?: DateTimeFilter<"ShopWorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"ShopWorkingHour"> | Date | string
  }

  export type UserWorkingHourUpsertWithWhereUniqueWithoutShopInput = {
    where: UserWorkingHourWhereUniqueInput
    update: XOR<UserWorkingHourUpdateWithoutShopInput, UserWorkingHourUncheckedUpdateWithoutShopInput>
    create: XOR<UserWorkingHourCreateWithoutShopInput, UserWorkingHourUncheckedCreateWithoutShopInput>
  }

  export type UserWorkingHourUpdateWithWhereUniqueWithoutShopInput = {
    where: UserWorkingHourWhereUniqueInput
    data: XOR<UserWorkingHourUpdateWithoutShopInput, UserWorkingHourUncheckedUpdateWithoutShopInput>
  }

  export type UserWorkingHourUpdateManyWithWhereWithoutShopInput = {
    where: UserWorkingHourScalarWhereInput
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyWithoutShopInput>
  }

  export type UserWorkingHourScalarWhereInput = {
    AND?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
    OR?: UserWorkingHourScalarWhereInput[]
    NOT?: UserWorkingHourScalarWhereInput | UserWorkingHourScalarWhereInput[]
    id?: IntFilter<"UserWorkingHour"> | number
    shopUserId?: IntFilter<"UserWorkingHour"> | number
    shopId?: IntFilter<"UserWorkingHour"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"UserWorkingHour"> | $Enums.DayOfWeek
    startTime?: StringFilter<"UserWorkingHour"> | string
    endTime?: StringFilter<"UserWorkingHour"> | string
    isOff?: BoolFilter<"UserWorkingHour"> | boolean
    createdAt?: DateTimeFilter<"UserWorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"UserWorkingHour"> | Date | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutShopInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutShopInput, ServiceUncheckedUpdateWithoutShopInput>
    create: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutShopInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutShopInput, ServiceUncheckedUpdateWithoutShopInput>
  }

  export type ServiceUpdateManyWithWhereWithoutShopInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutShopInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    shopId?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutShopInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutShopInput, BookingUncheckedUpdateWithoutShopInput>
    create: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutShopInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutShopInput, BookingUncheckedUpdateWithoutShopInput>
  }

  export type BookingUpdateManyWithWhereWithoutShopInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutShopInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    shopId?: IntFilter<"Booking"> | number
    serviceId?: IntFilter<"Booking"> | number
    providerId?: IntNullableFilter<"Booking"> | number | null
    customerId?: IntFilter<"Booking"> | number
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ShopCreateWithoutMembersInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedShopsInput
    workingHours?: ShopWorkingHourCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    address?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: ShopWorkingHourUncheckedCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutMembersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutMembersInput, ShopUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    name: string
    email: string
    hashedPassword: string
    subscription: $Enums.Subscription
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedShops?: ShopCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: number
    name: string
    email: string
    hashedPassword: string
    subscription: $Enums.Subscription
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedShops?: ShopUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type UserWorkingHourCreateWithoutShopUserInput = {
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutUserWorkingHoursInput
  }

  export type UserWorkingHourUncheckedCreateWithoutShopUserInput = {
    id?: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkingHourCreateOrConnectWithoutShopUserInput = {
    where: UserWorkingHourWhereUniqueInput
    create: XOR<UserWorkingHourCreateWithoutShopUserInput, UserWorkingHourUncheckedCreateWithoutShopUserInput>
  }

  export type UserWorkingHourCreateManyShopUserInputEnvelope = {
    data: UserWorkingHourCreateManyShopUserInput | UserWorkingHourCreateManyShopUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceAssignmentCreateWithoutShopUserInput = {
    service: ServiceCreateNestedOneWithoutAssignedUsersInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutShopUserInput = {
    id?: number
    serviceId: number
  }

  export type ServiceAssignmentCreateOrConnectWithoutShopUserInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutShopUserInput, ServiceAssignmentUncheckedCreateWithoutShopUserInput>
  }

  export type ServiceAssignmentCreateManyShopUserInputEnvelope = {
    data: ServiceAssignmentCreateManyShopUserInput | ServiceAssignmentCreateManyShopUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutProviderInput = {
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutProviderInput = {
    id?: number
    shopId: number
    serviceId: number
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutProviderInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput>
  }

  export type BookingCreateManyProviderInputEnvelope = {
    data: BookingCreateManyProviderInput | BookingCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutMembersInput = {
    update: XOR<ShopUpdateWithoutMembersInput, ShopUncheckedUpdateWithoutMembersInput>
    create: XOR<ShopCreateWithoutMembersInput, ShopUncheckedCreateWithoutMembersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutMembersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutMembersInput, ShopUncheckedUpdateWithoutMembersInput>
  }

  export type ShopUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedShopsNestedInput
    workingHours?: ShopWorkingHourUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: ShopWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedShops?: ShopUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    subscription?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedShops?: ShopUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserWorkingHourUpsertWithWhereUniqueWithoutShopUserInput = {
    where: UserWorkingHourWhereUniqueInput
    update: XOR<UserWorkingHourUpdateWithoutShopUserInput, UserWorkingHourUncheckedUpdateWithoutShopUserInput>
    create: XOR<UserWorkingHourCreateWithoutShopUserInput, UserWorkingHourUncheckedCreateWithoutShopUserInput>
  }

  export type UserWorkingHourUpdateWithWhereUniqueWithoutShopUserInput = {
    where: UserWorkingHourWhereUniqueInput
    data: XOR<UserWorkingHourUpdateWithoutShopUserInput, UserWorkingHourUncheckedUpdateWithoutShopUserInput>
  }

  export type UserWorkingHourUpdateManyWithWhereWithoutShopUserInput = {
    where: UserWorkingHourScalarWhereInput
    data: XOR<UserWorkingHourUpdateManyMutationInput, UserWorkingHourUncheckedUpdateManyWithoutShopUserInput>
  }

  export type ServiceAssignmentUpsertWithWhereUniqueWithoutShopUserInput = {
    where: ServiceAssignmentWhereUniqueInput
    update: XOR<ServiceAssignmentUpdateWithoutShopUserInput, ServiceAssignmentUncheckedUpdateWithoutShopUserInput>
    create: XOR<ServiceAssignmentCreateWithoutShopUserInput, ServiceAssignmentUncheckedCreateWithoutShopUserInput>
  }

  export type ServiceAssignmentUpdateWithWhereUniqueWithoutShopUserInput = {
    where: ServiceAssignmentWhereUniqueInput
    data: XOR<ServiceAssignmentUpdateWithoutShopUserInput, ServiceAssignmentUncheckedUpdateWithoutShopUserInput>
  }

  export type ServiceAssignmentUpdateManyWithWhereWithoutShopUserInput = {
    where: ServiceAssignmentScalarWhereInput
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyWithoutShopUserInput>
  }

  export type ServiceAssignmentScalarWhereInput = {
    AND?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
    OR?: ServiceAssignmentScalarWhereInput[]
    NOT?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
    id?: IntFilter<"ServiceAssignment"> | number
    serviceId?: IntFilter<"ServiceAssignment"> | number
    shopUserId?: IntFilter<"ServiceAssignment"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutProviderInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutProviderInput, BookingUncheckedUpdateWithoutProviderInput>
    create: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutProviderInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutProviderInput, BookingUncheckedUpdateWithoutProviderInput>
  }

  export type BookingUpdateManyWithWhereWithoutProviderInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutProviderInput>
  }

  export type ShopCreateWithoutWorkingHoursInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedShopsInput
    members?: ShopUserCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutWorkingHoursInput = {
    id?: number
    name: string
    address?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutWorkingHoursInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutWorkingHoursInput, ShopUncheckedCreateWithoutWorkingHoursInput>
  }

  export type ShopUpsertWithoutWorkingHoursInput = {
    update: XOR<ShopUpdateWithoutWorkingHoursInput, ShopUncheckedUpdateWithoutWorkingHoursInput>
    create: XOR<ShopCreateWithoutWorkingHoursInput, ShopUncheckedCreateWithoutWorkingHoursInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutWorkingHoursInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutWorkingHoursInput, ShopUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type ShopUpdateWithoutWorkingHoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedShopsNestedInput
    members?: ShopUserUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutWorkingHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUserCreateWithoutWorkingHoursInput = {
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
    assignedServices?: ServiceAssignmentCreateNestedManyWithoutShopUserInput
    bookings?: BookingCreateNestedManyWithoutProviderInput
  }

  export type ShopUserUncheckedCreateWithoutWorkingHoursInput = {
    id?: number
    shopId: number
    userId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedServices?: ServiceAssignmentUncheckedCreateNestedManyWithoutShopUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ShopUserCreateOrConnectWithoutWorkingHoursInput = {
    where: ShopUserWhereUniqueInput
    create: XOR<ShopUserCreateWithoutWorkingHoursInput, ShopUserUncheckedCreateWithoutWorkingHoursInput>
  }

  export type ShopCreateWithoutUserWorkingHoursInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedShopsInput
    members?: ShopUserCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutUserWorkingHoursInput = {
    id?: number
    name: string
    address?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutUserWorkingHoursInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUserWorkingHoursInput, ShopUncheckedCreateWithoutUserWorkingHoursInput>
  }

  export type ShopUserUpsertWithoutWorkingHoursInput = {
    update: XOR<ShopUserUpdateWithoutWorkingHoursInput, ShopUserUncheckedUpdateWithoutWorkingHoursInput>
    create: XOR<ShopUserCreateWithoutWorkingHoursInput, ShopUserUncheckedCreateWithoutWorkingHoursInput>
    where?: ShopUserWhereInput
  }

  export type ShopUserUpdateToOneWithWhereWithoutWorkingHoursInput = {
    where?: ShopUserWhereInput
    data: XOR<ShopUserUpdateWithoutWorkingHoursInput, ShopUserUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type ShopUserUpdateWithoutWorkingHoursInput = {
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    assignedServices?: ServiceAssignmentUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserUncheckedUpdateWithoutWorkingHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedServices?: ServiceAssignmentUncheckedUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ShopUpsertWithoutUserWorkingHoursInput = {
    update: XOR<ShopUpdateWithoutUserWorkingHoursInput, ShopUncheckedUpdateWithoutUserWorkingHoursInput>
    create: XOR<ShopCreateWithoutUserWorkingHoursInput, ShopUncheckedCreateWithoutUserWorkingHoursInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutUserWorkingHoursInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutUserWorkingHoursInput, ShopUncheckedUpdateWithoutUserWorkingHoursInput>
  }

  export type ShopUpdateWithoutUserWorkingHoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedShopsNestedInput
    members?: ShopUserUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutUserWorkingHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateWithoutServicesInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedShopsInput
    members?: ShopUserCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutServicesInput = {
    id?: number
    name: string
    address?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourUncheckedCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutServicesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
  }

  export type ServiceAssignmentCreateWithoutServiceInput = {
    shopUser: ShopUserCreateNestedOneWithoutAssignedServicesInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutServiceInput = {
    id?: number
    shopUserId: number
  }

  export type ServiceAssignmentCreateOrConnectWithoutServiceInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutServiceInput, ServiceAssignmentUncheckedCreateWithoutServiceInput>
  }

  export type ServiceAssignmentCreateManyServiceInputEnvelope = {
    data: ServiceAssignmentCreateManyServiceInput | ServiceAssignmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutServiceInput = {
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    provider?: ShopUserCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: number
    shopId: number
    providerId?: number | null
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutServicesInput = {
    update: XOR<ShopUpdateWithoutServicesInput, ShopUncheckedUpdateWithoutServicesInput>
    create: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutServicesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutServicesInput, ShopUncheckedUpdateWithoutServicesInput>
  }

  export type ShopUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedShopsNestedInput
    members?: ShopUserUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ServiceAssignmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceAssignmentWhereUniqueInput
    update: XOR<ServiceAssignmentUpdateWithoutServiceInput, ServiceAssignmentUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceAssignmentCreateWithoutServiceInput, ServiceAssignmentUncheckedCreateWithoutServiceInput>
  }

  export type ServiceAssignmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceAssignmentWhereUniqueInput
    data: XOR<ServiceAssignmentUpdateWithoutServiceInput, ServiceAssignmentUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceAssignmentUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceAssignmentScalarWhereInput
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyWithoutServiceInput>
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

  export type ServiceCreateWithoutAssignedUsersInput = {
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAssignedUsersInput = {
    id?: number
    shopId: number
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutAssignedUsersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAssignedUsersInput, ServiceUncheckedCreateWithoutAssignedUsersInput>
  }

  export type ShopUserCreateWithoutAssignedServicesInput = {
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
    workingHours?: UserWorkingHourCreateNestedManyWithoutShopUserInput
    bookings?: BookingCreateNestedManyWithoutProviderInput
  }

  export type ShopUserUncheckedCreateWithoutAssignedServicesInput = {
    id?: number
    shopId: number
    userId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ShopUserCreateOrConnectWithoutAssignedServicesInput = {
    where: ShopUserWhereUniqueInput
    create: XOR<ShopUserCreateWithoutAssignedServicesInput, ShopUserUncheckedCreateWithoutAssignedServicesInput>
  }

  export type ServiceUpsertWithoutAssignedUsersInput = {
    update: XOR<ServiceUpdateWithoutAssignedUsersInput, ServiceUncheckedUpdateWithoutAssignedUsersInput>
    create: XOR<ServiceCreateWithoutAssignedUsersInput, ServiceUncheckedCreateWithoutAssignedUsersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAssignedUsersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAssignedUsersInput, ServiceUncheckedUpdateWithoutAssignedUsersInput>
  }

  export type ServiceUpdateWithoutAssignedUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAssignedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ShopUserUpsertWithoutAssignedServicesInput = {
    update: XOR<ShopUserUpdateWithoutAssignedServicesInput, ShopUserUncheckedUpdateWithoutAssignedServicesInput>
    create: XOR<ShopUserCreateWithoutAssignedServicesInput, ShopUserUncheckedCreateWithoutAssignedServicesInput>
    where?: ShopUserWhereInput
  }

  export type ShopUserUpdateToOneWithWhereWithoutAssignedServicesInput = {
    where?: ShopUserWhereInput
    data: XOR<ShopUserUpdateWithoutAssignedServicesInput, ShopUserUncheckedUpdateWithoutAssignedServicesInput>
  }

  export type ShopUserUpdateWithoutAssignedServicesInput = {
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    workingHours?: UserWorkingHourUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserUncheckedUpdateWithoutAssignedServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type BookingCreateWithoutCustomerInput = {
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    provider?: ShopUserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: number
    shopId: number
    serviceId: number
    providerId?: number | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type ShopCreateWithoutBookingsInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedShopsInput
    members?: ShopUserCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    address?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    workingHours?: ShopWorkingHourUncheckedCreateNestedManyWithoutShopInput
    userWorkingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutBookingsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceCreateWithoutBookingsInput = {
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutServicesInput
    assignedUsers?: ServiceAssignmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    id?: number
    shopId: number
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedUsers?: ServiceAssignmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type ShopUserCreateWithoutBookingsInput = {
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
    workingHours?: UserWorkingHourCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentCreateNestedManyWithoutShopUserInput
  }

  export type ShopUserUncheckedCreateWithoutBookingsInput = {
    id?: number
    shopId: number
    userId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: UserWorkingHourUncheckedCreateNestedManyWithoutShopUserInput
    assignedServices?: ServiceAssignmentUncheckedCreateNestedManyWithoutShopUserInput
  }

  export type ShopUserCreateOrConnectWithoutBookingsInput = {
    where: ShopUserWhereUniqueInput
    create: XOR<ShopUserCreateWithoutBookingsInput, ShopUserUncheckedCreateWithoutBookingsInput>
  }

  export type CustomerCreateWithoutBookingsInput = {
    name: string
    phone: string
    email?: string | null
    note?: string | null
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    note?: string | null
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type ShopUpsertWithoutBookingsInput = {
    update: XOR<ShopUpdateWithoutBookingsInput, ShopUncheckedUpdateWithoutBookingsInput>
    create: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutBookingsInput, ShopUncheckedUpdateWithoutBookingsInput>
  }

  export type ShopUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedShopsNestedInput
    members?: ShopUserUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutServicesNestedInput
    assignedUsers?: ServiceAssignmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedUsers?: ServiceAssignmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ShopUserUpsertWithoutBookingsInput = {
    update: XOR<ShopUserUpdateWithoutBookingsInput, ShopUserUncheckedUpdateWithoutBookingsInput>
    create: XOR<ShopUserCreateWithoutBookingsInput, ShopUserUncheckedCreateWithoutBookingsInput>
    where?: ShopUserWhereInput
  }

  export type ShopUserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ShopUserWhereInput
    data: XOR<ShopUserUpdateWithoutBookingsInput, ShopUserUncheckedUpdateWithoutBookingsInput>
  }

  export type ShopUserUpdateWithoutBookingsInput = {
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    workingHours?: UserWorkingHourUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUpdateManyWithoutShopUserNestedInput
  }

  export type ShopUserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUncheckedUpdateManyWithoutShopUserNestedInput
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
    note?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateManyOwnerInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUserCreateManyUserInput = {
    id?: number
    shopId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShopUserUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    workingHours?: ShopWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    userWorkingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserUpdateWithoutUserInput = {
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMembersNestedInput
    workingHours?: UserWorkingHourUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUncheckedUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserCreateManyShopInput = {
    id?: number
    userId: number
    role: $Enums.ShopRole
    active?: boolean
    bookable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopWorkingHourCreateManyShopInput = {
    id?: number
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkingHourCreateManyShopInput = {
    id?: number
    shopUserId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateManyShopInput = {
    id?: number
    name: string
    duration: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyShopInput = {
    id?: number
    serviceId: number
    providerId?: number | null
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUserUpdateWithoutShopInput = {
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    workingHours?: UserWorkingHourUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: UserWorkingHourUncheckedUpdateManyWithoutShopUserNestedInput
    assignedServices?: ServiceAssignmentUncheckedUpdateManyWithoutShopUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ShopUserUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    active?: BoolFieldUpdateOperationsInput | boolean
    bookable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopWorkingHourUpdateWithoutShopInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopWorkingHourUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopWorkingHourUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkingHourUpdateWithoutShopInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopUser?: ShopUserUpdateOneRequiredWithoutWorkingHoursNestedInput
  }

  export type UserWorkingHourUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedUsers?: ServiceAssignmentUpdateManyWithoutServiceNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedUsers?: ServiceAssignmentUncheckedUpdateManyWithoutServiceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutShopInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    provider?: ShopUserUpdateOneWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkingHourCreateManyShopUserInput = {
    id?: number
    shopId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isOff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAssignmentCreateManyShopUserInput = {
    id?: number
    serviceId: number
  }

  export type BookingCreateManyProviderInput = {
    id?: number
    shopId: number
    serviceId: number
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkingHourUpdateWithoutShopUserInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUserWorkingHoursNestedInput
  }

  export type UserWorkingHourUncheckedUpdateWithoutShopUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkingHourUncheckedUpdateManyWithoutShopUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isOff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAssignmentUpdateWithoutShopUserInput = {
    service?: ServiceUpdateOneRequiredWithoutAssignedUsersNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutShopUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceAssignmentUncheckedUpdateManyWithoutShopUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutProviderInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAssignmentCreateManyServiceInput = {
    id?: number
    shopUserId: number
  }

  export type BookingCreateManyServiceInput = {
    id?: number
    shopId: number
    providerId?: number | null
    customerId: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAssignmentUpdateWithoutServiceInput = {
    shopUser?: ShopUserUpdateOneRequiredWithoutAssignedServicesNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceAssignmentUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopUserId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutServiceInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    provider?: ShopUserUpdateOneWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyCustomerInput = {
    id?: number
    shopId: number
    serviceId: number
    providerId?: number | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    provider?: ShopUserUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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