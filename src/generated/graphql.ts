import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  email_String_NotNull_maxLength_255_format_email: { input: any; output: any; }
  familyName_String_NotNull_minLength_1_maxLength_20: { input: any; output: any; }
  givenName_String_NotNull_minLength_1_maxLength_20: { input: any; output: any; }
  location_String_NotNull_minLength_1_maxLength_10: { input: any; output: any; }
  message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_: { input: any; output: any; }
  service_String_NotNull_minLength_1_maxLength_40: { input: any; output: any; }
  tel_String_NotNull_minLength_1_maxLength_12: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  _id: Scalars['ID']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  unit: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID']['output'];
  user: User;
};

export type CreateCustomerInput = {
  businessName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateInvoiceInput = {
  charged: Scalars['Boolean']['input'];
  customerId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
  invoiceNumber: Scalars['String']['input'];
  paid: Scalars['Boolean']['input'];
  quote?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  workOrders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CreatePropertyInput = {
  agent: Scalars['ID']['input'];
  propertyAddress: AddressInput;
  propertyDescription: Scalars['String']['input'];
  propertyName: Scalars['String']['input'];
  s3FolderKey?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  adminCode: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateWorkOrderInput = {
  charged: Scalars['Boolean']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  completedBy?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  paid: Scalars['Boolean']['input'];
  propertyId: Scalars['ID']['input'];
  quote?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['ID']['output'];
  businessName: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  invoices: Array<Maybe<Invoice>>;
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  properties: Array<Maybe<Property>>;
  workOrders: Array<Maybe<WorkOrder>>;
};

export type DeleteS3ObjectInput = {
  imgKeys: Array<Scalars['String']['input']>;
};

export type DeleteS3ObjectResponse = {
  __typename?: 'DeleteS3ObjectResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type Invoice = {
  __typename?: 'Invoice';
  _id: Scalars['ID']['output'];
  charged: Scalars['Boolean']['output'];
  customerId: Customer;
  date: Scalars['String']['output'];
  invoiceNumber: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
  quote: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  workOrders: Array<Maybe<WorkOrder>>;
};

export type LoginUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
  createInvoice: Invoice;
  createProperty: Property;
  createUser: Auth;
  createWorkOrder: WorkOrder;
  deleteCustomer: Customer;
  deleteInvoice: Invoice;
  deleteProperty: Property;
  deleteS3Objects: DeleteS3ObjectResponse;
  deleteWorkOrder: WorkOrder;
  loginUser: Auth;
  removeUser: Auth;
  sendScheduleServiceMessage: Scalars['String']['output'];
  updateCustomerBusinessName: Customer;
  updateCustomerEmail: Customer;
  updateCustomerFirstName: Customer;
  updateCustomerLastName: Customer;
  updateCustomerPhone: Customer;
  updateCustomerProperties: Customer;
  updateInvoiceCharged: Invoice;
  updateInvoiceCustomerId: Invoice;
  updateInvoiceDate: Invoice;
  updateInvoicePaid: Invoice;
  updateInvoiceQuote: Invoice;
  updateInvoiceTotal: Invoice;
  updateInvoiceWorkOrders: Invoice;
  updatePropertyAddress: Property;
  updatePropertyAgent: Property;
  updatePropertyDescription: Property;
  updatePropertyName: Property;
  updatePropertyS3FolderKey: Property;
  updateUserFirstName: Auth;
  updateUserLastName: Auth;
  updateUserPassword: Auth;
  updateUserPin: Auth;
  updateUserUsername: Auth;
  updateWorkOrderCharged: WorkOrder;
  updateWorkOrderComments: WorkOrder;
  updateWorkOrderCompleted: WorkOrder;
  updateWorkOrderCompletedBy: WorkOrder;
  updateWorkOrderCustomerId: WorkOrder;
  updateWorkOrderDate: WorkOrder;
  updateWorkOrderDescription: WorkOrder;
  updateWorkOrderPaid: WorkOrder;
  updateWorkOrderPropertyId: WorkOrder;
  updateWorkOrderQuote: WorkOrder;
  updateWorkOrderTotal: WorkOrder;
  updateWorkOrderType: WorkOrder;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateWorkOrderArgs = {
  input: CreateWorkOrderInput;
};


export type MutationDeleteCustomerArgs = {
  input: RemoveCustomerInput;
};


export type MutationDeleteInvoiceArgs = {
  input: RemoveInvoiceInput;
};


export type MutationDeletePropertyArgs = {
  input: RemovePropertyInput;
};


export type MutationDeleteS3ObjectsArgs = {
  input: DeleteS3ObjectInput;
};


export type MutationDeleteWorkOrderArgs = {
  input: RemoveWorkOrderInput;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationRemoveUserArgs = {
  input: RemoveUserInput;
};


export type MutationSendScheduleServiceMessageArgs = {
  input: ScheduleServiceMessageInput;
};


export type MutationUpdateCustomerBusinessNameArgs = {
  input: UpdateCustomerBusinessNameInput;
};


export type MutationUpdateCustomerEmailArgs = {
  input: UpdateCustomerEmailInput;
};


export type MutationUpdateCustomerFirstNameArgs = {
  input: UpdateCustomerFirstNameInput;
};


export type MutationUpdateCustomerLastNameArgs = {
  input: UpdateCustomerLastNameInput;
};


export type MutationUpdateCustomerPhoneArgs = {
  input: UpdateCustomerPhoneInput;
};


export type MutationUpdateCustomerPropertiesArgs = {
  input: UpdateCustomerPropertiesInput;
};


export type MutationUpdateInvoiceChargedArgs = {
  input: UpdateInvoiceChargedInput;
};


export type MutationUpdateInvoiceCustomerIdArgs = {
  input: UpdateInvoiceCustomerIdInput;
};


export type MutationUpdateInvoiceDateArgs = {
  input: UpdateInvoiceDateInput;
};


export type MutationUpdateInvoicePaidArgs = {
  input: UpdateInvoicePaidInput;
};


export type MutationUpdateInvoiceQuoteArgs = {
  input: UpdateInvoiceQuoteInput;
};


export type MutationUpdateInvoiceTotalArgs = {
  input: UpdateInvoiceTotalInput;
};


export type MutationUpdateInvoiceWorkOrdersArgs = {
  input: UpdateInvoiceWorkOrdersInput;
};


export type MutationUpdatePropertyAddressArgs = {
  input: UpdatePropertyAddressInput;
};


export type MutationUpdatePropertyAgentArgs = {
  input: UpdatePropertyAgentInput;
};


export type MutationUpdatePropertyDescriptionArgs = {
  input: UpdatePropertyDescriptionInput;
};


export type MutationUpdatePropertyNameArgs = {
  input: UpdatePropertyNameInput;
};


export type MutationUpdatePropertyS3FolderKeyArgs = {
  input: UpdatePropertyS3FolderKeyInput;
};


export type MutationUpdateUserFirstNameArgs = {
  input: UpdateUserFirstNameInput;
};


export type MutationUpdateUserLastNameArgs = {
  input: UpdateUserLastNameInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdateUserPasswordInput;
};


export type MutationUpdateUserPinArgs = {
  input: UpdateUserPinInput;
};


export type MutationUpdateUserUsernameArgs = {
  input: UpdateUserUsernameInput;
};


export type MutationUpdateWorkOrderChargedArgs = {
  input: UpdateWorkOrderChargedInput;
};


export type MutationUpdateWorkOrderCommentsArgs = {
  input: UpdateWorkOrderCommentsInput;
};


export type MutationUpdateWorkOrderCompletedArgs = {
  input: UpdateWorkOrderCompletedInput;
};


export type MutationUpdateWorkOrderCompletedByArgs = {
  input: UpdateWorkOrderCompletedByInput;
};


export type MutationUpdateWorkOrderCustomerIdArgs = {
  input: UpdateWorkOrderCustomerIdInput;
};


export type MutationUpdateWorkOrderDateArgs = {
  input: UpdateWorkOrderDateInput;
};


export type MutationUpdateWorkOrderDescriptionArgs = {
  input: UpdateWorkOrderDescriptionInput;
};


export type MutationUpdateWorkOrderPaidArgs = {
  input: UpdateWorkOrderPaidInput;
};


export type MutationUpdateWorkOrderPropertyIdArgs = {
  input: UpdateWorkOrderPropertyIdInput;
};


export type MutationUpdateWorkOrderQuoteArgs = {
  input: UpdateWorkOrderQuoteInput;
};


export type MutationUpdateWorkOrderTotalArgs = {
  input: UpdateWorkOrderTotalInput;
};


export type MutationUpdateWorkOrderTypeArgs = {
  input: UpdateWorkOrderTypeInput;
};

export type Property = {
  __typename?: 'Property';
  _id: Scalars['ID']['output'];
  agent: Customer;
  propertyAddress: Address;
  propertyDescription: Scalars['String']['output'];
  propertyName: Scalars['String']['output'];
  s3FolderKey: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<User>>;
  getPresignedS3Url: Scalars['String']['output'];
  queryCustomerById: Customer;
  queryCustomers?: Maybe<Array<Customer>>;
  queryInvoiceById: Invoice;
  queryInvoices?: Maybe<Array<Invoice>>;
  queryInvoicesByCustomer?: Maybe<Array<Invoice>>;
  queryInvoicesByWorkOrder?: Maybe<Array<Invoice>>;
  queryProperties?: Maybe<Array<Property>>;
  queryPropertyById: Property;
  queryThumbtackReviews?: Maybe<Array<ThumbtackReview>>;
  queryWorkOrderById: WorkOrder;
  queryWorkOrders?: Maybe<Array<WorkOrder>>;
  queryWorkOrdersByCustomer?: Maybe<Array<WorkOrder>>;
  queryWorkOrdersByProperty?: Maybe<Array<WorkOrder>>;
};


export type QueryGetPresignedS3UrlArgs = {
  altTag: Scalars['String']['input'];
  commandType: Scalars['String']['input'];
  imgKey: Scalars['String']['input'];
};


export type QueryQueryCustomerByIdArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryInvoiceByIdArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type QueryQueryInvoicesByCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryInvoicesByWorkOrderArgs = {
  workOrderId: Scalars['ID']['input'];
};


export type QueryQueryPropertyByIdArgs = {
  propertyId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrderByIdArgs = {
  workOrderId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrdersByCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrdersByPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type RemoveCustomerInput = {
  customerId: Scalars['ID']['input'];
};

export type RemoveInvoiceInput = {
  invoiceId: Scalars['ID']['input'];
};

export type RemovePropertyInput = {
  propertyId: Scalars['ID']['input'];
};

export type RemoveUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RemoveWorkOrderInput = {
  workOrderId: Scalars['ID']['input'];
};

export type ScheduleServiceMessage = {
  __typename?: 'ScheduleServiceMessage';
  email: Scalars['String']['output'];
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  message: Scalars['String']['output'];
  service: Scalars['String']['output'];
  tel: Scalars['String']['output'];
};

export type ScheduleServiceMessageInput = {
  email: Scalars['email_String_NotNull_maxLength_255_format_email']['input'];
  familyName: Scalars['familyName_String_NotNull_minLength_1_maxLength_20']['input'];
  givenName: Scalars['givenName_String_NotNull_minLength_1_maxLength_20']['input'];
  location: Scalars['location_String_NotNull_minLength_1_maxLength_10']['input'];
  message: Scalars['message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_']['input'];
  service: Scalars['service_String_NotNull_minLength_1_maxLength_40']['input'];
  tel: Scalars['tel_String_NotNull_minLength_1_maxLength_12']['input'];
};

export type ThumbtackReview = {
  __typename?: 'ThumbtackReview';
  author: ThumbtackReviewAuthor;
  datePublished: Scalars['String']['output'];
  description: Scalars['String']['output'];
  reviewRating: ThumbtackReviewRating;
};

export type ThumbtackReviewAuthor = {
  __typename?: 'ThumbtackReviewAuthor';
  name: Scalars['String']['output'];
};

export type ThumbtackReviewRating = {
  __typename?: 'ThumbtackReviewRating';
  ratingValue: Scalars['Int']['output'];
};

export type UpdateCustomerBusinessNameInput = {
  businessName: Scalars['String']['input'];
  customerId: Scalars['ID']['input'];
};

export type UpdateCustomerEmailInput = {
  customerId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type UpdateCustomerFirstNameInput = {
  customerId: Scalars['ID']['input'];
  firstName: Scalars['String']['input'];
};

export type UpdateCustomerInvoicesInput = {
  customerId: Scalars['ID']['input'];
  invoice?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCustomerLastNameInput = {
  customerId: Scalars['ID']['input'];
  lastName: Scalars['String']['input'];
};

export type UpdateCustomerPhoneInput = {
  customerId: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
};

export type UpdateCustomerPropertiesInput = {
  customerId: Scalars['ID']['input'];
  property?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateInvoiceChargedInput = {
  charged: Scalars['Boolean']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoiceCustomerIdInput = {
  customerId: Scalars['ID']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoiceDateInput = {
  date: Scalars['String']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoicePaidInput = {
  invoiceId: Scalars['ID']['input'];
  paid: Scalars['Boolean']['input'];
};

export type UpdateInvoiceQuoteInput = {
  invoiceId: Scalars['ID']['input'];
  quote: Scalars['Float']['input'];
};

export type UpdateInvoiceTotalInput = {
  invoiceId: Scalars['ID']['input'];
  total: Scalars['Float']['input'];
};

export type UpdateInvoiceWorkOrdersInput = {
  invoiceId: Scalars['ID']['input'];
  workOrders: Array<Scalars['ID']['input']>;
};

export type UpdatePropertyAddressInput = {
  propertyAddress: AddressInput;
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyAgentInput = {
  agent: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyDescriptionInput = {
  propertyDescription: Scalars['String']['input'];
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyNameInput = {
  propertyId: Scalars['ID']['input'];
  propertyName: Scalars['String']['input'];
};

export type UpdatePropertyS3FolderKeyInput = {
  propertyId: Scalars['ID']['input'];
  s3FolderKey: Scalars['String']['input'];
};

export type UpdateUserFirstNameInput = {
  firstName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateUserLastNameInput = {
  lastName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateUserPasswordInput = {
  newPassword: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  userPassword: Scalars['String']['input'];
};

export type UpdateUserPinInput = {
  pin: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  userPassword: Scalars['String']['input'];
};

export type UpdateUserUsernameInput = {
  userId: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type UpdateWorkOrderChargedInput = {
  charged: Scalars['Boolean']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCommentsInput = {
  comments: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCompletedByInput = {
  completedBy: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCompletedInput = {
  completed: Scalars['Boolean']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCustomerIdInput = {
  customerId: Scalars['ID']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderDateInput = {
  date: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderDescriptionInput = {
  description: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderInvoicesInput = {
  invoice?: InputMaybe<Scalars['ID']['input']>;
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderPaidInput = {
  paid: Scalars['Boolean']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderPropertyIdInput = {
  propertyId: Scalars['ID']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderQuoteInput = {
  quote: Scalars['Float']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderTotalInput = {
  total: Scalars['Float']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderTypeInput = {
  type: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  pin: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type WorkOrder = {
  __typename?: 'WorkOrder';
  _id: Scalars['ID']['output'];
  charged: Scalars['Boolean']['output'];
  comments: Scalars['String']['output'];
  completed: Scalars['Boolean']['output'];
  completedBy: Scalars['String']['output'];
  customerId: Customer;
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  invoices: Array<Maybe<Invoice>>;
  lastUpdated: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
  propertyId: Property;
  quote: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type ImageObject = {
  __typename?: 'imageObject';
  imgKey: Scalars['String']['output'];
  original: Scalars['String']['output'];
  originalAlt: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  thumbnailAlt: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateCustomerInput: CreateCustomerInput;
  CreateInvoiceInput: CreateInvoiceInput;
  CreatePropertyInput: CreatePropertyInput;
  CreateUserInput: CreateUserInput;
  CreateWorkOrderInput: CreateWorkOrderInput;
  Customer: ResolverTypeWrapper<Customer>;
  DeleteS3ObjectInput: DeleteS3ObjectInput;
  DeleteS3ObjectResponse: ResolverTypeWrapper<DeleteS3ObjectResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Invoice: ResolverTypeWrapper<Invoice>;
  LoginUserInput: LoginUserInput;
  Mutation: ResolverTypeWrapper<{}>;
  Property: ResolverTypeWrapper<Property>;
  Query: ResolverTypeWrapper<{}>;
  RemoveCustomerInput: RemoveCustomerInput;
  RemoveInvoiceInput: RemoveInvoiceInput;
  RemovePropertyInput: RemovePropertyInput;
  RemoveUserInput: RemoveUserInput;
  RemoveWorkOrderInput: RemoveWorkOrderInput;
  ScheduleServiceMessage: ResolverTypeWrapper<ScheduleServiceMessage>;
  ScheduleServiceMessageInput: ScheduleServiceMessageInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ThumbtackReview: ResolverTypeWrapper<ThumbtackReview>;
  ThumbtackReviewAuthor: ResolverTypeWrapper<ThumbtackReviewAuthor>;
  ThumbtackReviewRating: ResolverTypeWrapper<ThumbtackReviewRating>;
  UpdateCustomerBusinessNameInput: UpdateCustomerBusinessNameInput;
  UpdateCustomerEmailInput: UpdateCustomerEmailInput;
  UpdateCustomerFirstNameInput: UpdateCustomerFirstNameInput;
  UpdateCustomerInvoicesInput: UpdateCustomerInvoicesInput;
  UpdateCustomerLastNameInput: UpdateCustomerLastNameInput;
  UpdateCustomerPhoneInput: UpdateCustomerPhoneInput;
  UpdateCustomerPropertiesInput: UpdateCustomerPropertiesInput;
  UpdateInvoiceChargedInput: UpdateInvoiceChargedInput;
  UpdateInvoiceCustomerIdInput: UpdateInvoiceCustomerIdInput;
  UpdateInvoiceDateInput: UpdateInvoiceDateInput;
  UpdateInvoicePaidInput: UpdateInvoicePaidInput;
  UpdateInvoiceQuoteInput: UpdateInvoiceQuoteInput;
  UpdateInvoiceTotalInput: UpdateInvoiceTotalInput;
  UpdateInvoiceWorkOrdersInput: UpdateInvoiceWorkOrdersInput;
  UpdatePropertyAddressInput: UpdatePropertyAddressInput;
  UpdatePropertyAgentInput: UpdatePropertyAgentInput;
  UpdatePropertyDescriptionInput: UpdatePropertyDescriptionInput;
  UpdatePropertyNameInput: UpdatePropertyNameInput;
  UpdatePropertyS3FolderKeyInput: UpdatePropertyS3FolderKeyInput;
  UpdateUserFirstNameInput: UpdateUserFirstNameInput;
  UpdateUserLastNameInput: UpdateUserLastNameInput;
  UpdateUserPasswordInput: UpdateUserPasswordInput;
  UpdateUserPinInput: UpdateUserPinInput;
  UpdateUserUsernameInput: UpdateUserUsernameInput;
  UpdateWorkOrderChargedInput: UpdateWorkOrderChargedInput;
  UpdateWorkOrderCommentsInput: UpdateWorkOrderCommentsInput;
  UpdateWorkOrderCompletedByInput: UpdateWorkOrderCompletedByInput;
  UpdateWorkOrderCompletedInput: UpdateWorkOrderCompletedInput;
  UpdateWorkOrderCustomerIdInput: UpdateWorkOrderCustomerIdInput;
  UpdateWorkOrderDateInput: UpdateWorkOrderDateInput;
  UpdateWorkOrderDescriptionInput: UpdateWorkOrderDescriptionInput;
  UpdateWorkOrderInvoicesInput: UpdateWorkOrderInvoicesInput;
  UpdateWorkOrderPaidInput: UpdateWorkOrderPaidInput;
  UpdateWorkOrderPropertyIdInput: UpdateWorkOrderPropertyIdInput;
  UpdateWorkOrderQuoteInput: UpdateWorkOrderQuoteInput;
  UpdateWorkOrderTotalInput: UpdateWorkOrderTotalInput;
  UpdateWorkOrderTypeInput: UpdateWorkOrderTypeInput;
  User: ResolverTypeWrapper<User>;
  WorkOrder: ResolverTypeWrapper<WorkOrder>;
  email_String_NotNull_maxLength_255_format_email: ResolverTypeWrapper<Scalars['email_String_NotNull_maxLength_255_format_email']['output']>;
  familyName_String_NotNull_minLength_1_maxLength_20: ResolverTypeWrapper<Scalars['familyName_String_NotNull_minLength_1_maxLength_20']['output']>;
  givenName_String_NotNull_minLength_1_maxLength_20: ResolverTypeWrapper<Scalars['givenName_String_NotNull_minLength_1_maxLength_20']['output']>;
  imageObject: ResolverTypeWrapper<ImageObject>;
  location_String_NotNull_minLength_1_maxLength_10: ResolverTypeWrapper<Scalars['location_String_NotNull_minLength_1_maxLength_10']['output']>;
  message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_: ResolverTypeWrapper<Scalars['message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_']['output']>;
  service_String_NotNull_minLength_1_maxLength_40: ResolverTypeWrapper<Scalars['service_String_NotNull_minLength_1_maxLength_40']['output']>;
  tel_String_NotNull_minLength_1_maxLength_12: ResolverTypeWrapper<Scalars['tel_String_NotNull_minLength_1_maxLength_12']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AddressInput: AddressInput;
  Auth: Auth;
  Boolean: Scalars['Boolean']['output'];
  CreateCustomerInput: CreateCustomerInput;
  CreateInvoiceInput: CreateInvoiceInput;
  CreatePropertyInput: CreatePropertyInput;
  CreateUserInput: CreateUserInput;
  CreateWorkOrderInput: CreateWorkOrderInput;
  Customer: Customer;
  DeleteS3ObjectInput: DeleteS3ObjectInput;
  DeleteS3ObjectResponse: DeleteS3ObjectResponse;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Invoice: Invoice;
  LoginUserInput: LoginUserInput;
  Mutation: {};
  Property: Property;
  Query: {};
  RemoveCustomerInput: RemoveCustomerInput;
  RemoveInvoiceInput: RemoveInvoiceInput;
  RemovePropertyInput: RemovePropertyInput;
  RemoveUserInput: RemoveUserInput;
  RemoveWorkOrderInput: RemoveWorkOrderInput;
  ScheduleServiceMessage: ScheduleServiceMessage;
  ScheduleServiceMessageInput: ScheduleServiceMessageInput;
  String: Scalars['String']['output'];
  ThumbtackReview: ThumbtackReview;
  ThumbtackReviewAuthor: ThumbtackReviewAuthor;
  ThumbtackReviewRating: ThumbtackReviewRating;
  UpdateCustomerBusinessNameInput: UpdateCustomerBusinessNameInput;
  UpdateCustomerEmailInput: UpdateCustomerEmailInput;
  UpdateCustomerFirstNameInput: UpdateCustomerFirstNameInput;
  UpdateCustomerInvoicesInput: UpdateCustomerInvoicesInput;
  UpdateCustomerLastNameInput: UpdateCustomerLastNameInput;
  UpdateCustomerPhoneInput: UpdateCustomerPhoneInput;
  UpdateCustomerPropertiesInput: UpdateCustomerPropertiesInput;
  UpdateInvoiceChargedInput: UpdateInvoiceChargedInput;
  UpdateInvoiceCustomerIdInput: UpdateInvoiceCustomerIdInput;
  UpdateInvoiceDateInput: UpdateInvoiceDateInput;
  UpdateInvoicePaidInput: UpdateInvoicePaidInput;
  UpdateInvoiceQuoteInput: UpdateInvoiceQuoteInput;
  UpdateInvoiceTotalInput: UpdateInvoiceTotalInput;
  UpdateInvoiceWorkOrdersInput: UpdateInvoiceWorkOrdersInput;
  UpdatePropertyAddressInput: UpdatePropertyAddressInput;
  UpdatePropertyAgentInput: UpdatePropertyAgentInput;
  UpdatePropertyDescriptionInput: UpdatePropertyDescriptionInput;
  UpdatePropertyNameInput: UpdatePropertyNameInput;
  UpdatePropertyS3FolderKeyInput: UpdatePropertyS3FolderKeyInput;
  UpdateUserFirstNameInput: UpdateUserFirstNameInput;
  UpdateUserLastNameInput: UpdateUserLastNameInput;
  UpdateUserPasswordInput: UpdateUserPasswordInput;
  UpdateUserPinInput: UpdateUserPinInput;
  UpdateUserUsernameInput: UpdateUserUsernameInput;
  UpdateWorkOrderChargedInput: UpdateWorkOrderChargedInput;
  UpdateWorkOrderCommentsInput: UpdateWorkOrderCommentsInput;
  UpdateWorkOrderCompletedByInput: UpdateWorkOrderCompletedByInput;
  UpdateWorkOrderCompletedInput: UpdateWorkOrderCompletedInput;
  UpdateWorkOrderCustomerIdInput: UpdateWorkOrderCustomerIdInput;
  UpdateWorkOrderDateInput: UpdateWorkOrderDateInput;
  UpdateWorkOrderDescriptionInput: UpdateWorkOrderDescriptionInput;
  UpdateWorkOrderInvoicesInput: UpdateWorkOrderInvoicesInput;
  UpdateWorkOrderPaidInput: UpdateWorkOrderPaidInput;
  UpdateWorkOrderPropertyIdInput: UpdateWorkOrderPropertyIdInput;
  UpdateWorkOrderQuoteInput: UpdateWorkOrderQuoteInput;
  UpdateWorkOrderTotalInput: UpdateWorkOrderTotalInput;
  UpdateWorkOrderTypeInput: UpdateWorkOrderTypeInput;
  User: User;
  WorkOrder: WorkOrder;
  email_String_NotNull_maxLength_255_format_email: Scalars['email_String_NotNull_maxLength_255_format_email']['output'];
  familyName_String_NotNull_minLength_1_maxLength_20: Scalars['familyName_String_NotNull_minLength_1_maxLength_20']['output'];
  givenName_String_NotNull_minLength_1_maxLength_20: Scalars['givenName_String_NotNull_minLength_1_maxLength_20']['output'];
  imageObject: ImageObject;
  location_String_NotNull_minLength_1_maxLength_10: Scalars['location_String_NotNull_minLength_1_maxLength_10']['output'];
  message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_: Scalars['message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_']['output'];
  service_String_NotNull_minLength_1_maxLength_40: Scalars['service_String_NotNull_minLength_1_maxLength_40']['output'];
  tel_String_NotNull_minLength_1_maxLength_12: Scalars['tel_String_NotNull_minLength_1_maxLength_12']['output'];
};

export type ConstraintDirectiveArgs = {
  contains?: Maybe<Scalars['String']['input']>;
  endsWith?: Maybe<Scalars['String']['input']>;
  exclusiveMax?: Maybe<Scalars['Float']['input']>;
  exclusiveMin?: Maybe<Scalars['Float']['input']>;
  format?: Maybe<Scalars['String']['input']>;
  max?: Maybe<Scalars['Float']['input']>;
  maxItems?: Maybe<Scalars['Int']['input']>;
  maxLength?: Maybe<Scalars['Int']['input']>;
  min?: Maybe<Scalars['Float']['input']>;
  minItems?: Maybe<Scalars['Int']['input']>;
  minLength?: Maybe<Scalars['Int']['input']>;
  multipleOf?: Maybe<Scalars['Float']['input']>;
  notContains?: Maybe<Scalars['String']['input']>;
  pattern?: Maybe<Scalars['String']['input']>;
  startsWith?: Maybe<Scalars['String']['input']>;
  uniqueTypeName?: Maybe<Scalars['String']['input']>;
};

export type ConstraintDirectiveResolver<Result, Parent, ContextType = any, Args = ConstraintDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  token?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  businessName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoices?: Resolver<Array<Maybe<ResolversTypes['Invoice']>>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  properties?: Resolver<Array<Maybe<ResolversTypes['Property']>>, ParentType, ContextType>;
  workOrders?: Resolver<Array<Maybe<ResolversTypes['WorkOrder']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteS3ObjectResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteS3ObjectResponse'] = ResolversParentTypes['DeleteS3ObjectResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  charged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoiceNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quote?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  workOrders?: Resolver<Array<Maybe<ResolversTypes['WorkOrder']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createInvoice?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationCreateInvoiceArgs, 'input'>>;
  createProperty?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationCreatePropertyArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createWorkOrder?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationCreateWorkOrderArgs, 'input'>>;
  deleteCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'input'>>;
  deleteInvoice?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationDeleteInvoiceArgs, 'input'>>;
  deleteProperty?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationDeletePropertyArgs, 'input'>>;
  deleteS3Objects?: Resolver<ResolversTypes['DeleteS3ObjectResponse'], ParentType, ContextType, RequireFields<MutationDeleteS3ObjectsArgs, 'input'>>;
  deleteWorkOrder?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationDeleteWorkOrderArgs, 'input'>>;
  loginUser?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'input'>>;
  removeUser?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'input'>>;
  sendScheduleServiceMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSendScheduleServiceMessageArgs, 'input'>>;
  updateCustomerBusinessName?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerBusinessNameArgs, 'input'>>;
  updateCustomerEmail?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerEmailArgs, 'input'>>;
  updateCustomerFirstName?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerFirstNameArgs, 'input'>>;
  updateCustomerLastName?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerLastNameArgs, 'input'>>;
  updateCustomerPhone?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerPhoneArgs, 'input'>>;
  updateCustomerProperties?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerPropertiesArgs, 'input'>>;
  updateInvoiceCharged?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoiceChargedArgs, 'input'>>;
  updateInvoiceCustomerId?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoiceCustomerIdArgs, 'input'>>;
  updateInvoiceDate?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoiceDateArgs, 'input'>>;
  updateInvoicePaid?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoicePaidArgs, 'input'>>;
  updateInvoiceQuote?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoiceQuoteArgs, 'input'>>;
  updateInvoiceTotal?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoiceTotalArgs, 'input'>>;
  updateInvoiceWorkOrders?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoiceWorkOrdersArgs, 'input'>>;
  updatePropertyAddress?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationUpdatePropertyAddressArgs, 'input'>>;
  updatePropertyAgent?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationUpdatePropertyAgentArgs, 'input'>>;
  updatePropertyDescription?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationUpdatePropertyDescriptionArgs, 'input'>>;
  updatePropertyName?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationUpdatePropertyNameArgs, 'input'>>;
  updatePropertyS3FolderKey?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationUpdatePropertyS3FolderKeyArgs, 'input'>>;
  updateUserFirstName?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationUpdateUserFirstNameArgs, 'input'>>;
  updateUserLastName?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationUpdateUserLastNameArgs, 'input'>>;
  updateUserPassword?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationUpdateUserPasswordArgs, 'input'>>;
  updateUserPin?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationUpdateUserPinArgs, 'input'>>;
  updateUserUsername?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationUpdateUserUsernameArgs, 'input'>>;
  updateWorkOrderCharged?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderChargedArgs, 'input'>>;
  updateWorkOrderComments?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderCommentsArgs, 'input'>>;
  updateWorkOrderCompleted?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderCompletedArgs, 'input'>>;
  updateWorkOrderCompletedBy?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderCompletedByArgs, 'input'>>;
  updateWorkOrderCustomerId?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderCustomerIdArgs, 'input'>>;
  updateWorkOrderDate?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderDateArgs, 'input'>>;
  updateWorkOrderDescription?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderDescriptionArgs, 'input'>>;
  updateWorkOrderPaid?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderPaidArgs, 'input'>>;
  updateWorkOrderPropertyId?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderPropertyIdArgs, 'input'>>;
  updateWorkOrderQuote?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderQuoteArgs, 'input'>>;
  updateWorkOrderTotal?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderTotalArgs, 'input'>>;
  updateWorkOrderType?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<MutationUpdateWorkOrderTypeArgs, 'input'>>;
};

export type PropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Property'] = ResolversParentTypes['Property']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  agent?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  propertyAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  propertyDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  propertyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  s3FolderKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllUsers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  getPresignedS3Url?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetPresignedS3UrlArgs, 'altTag' | 'commandType' | 'imgKey'>>;
  queryCustomerById?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<QueryQueryCustomerByIdArgs, 'customerId'>>;
  queryCustomers?: Resolver<Maybe<Array<ResolversTypes['Customer']>>, ParentType, ContextType>;
  queryInvoiceById?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<QueryQueryInvoiceByIdArgs, 'invoiceId'>>;
  queryInvoices?: Resolver<Maybe<Array<ResolversTypes['Invoice']>>, ParentType, ContextType>;
  queryInvoicesByCustomer?: Resolver<Maybe<Array<ResolversTypes['Invoice']>>, ParentType, ContextType, RequireFields<QueryQueryInvoicesByCustomerArgs, 'customerId'>>;
  queryInvoicesByWorkOrder?: Resolver<Maybe<Array<ResolversTypes['Invoice']>>, ParentType, ContextType, RequireFields<QueryQueryInvoicesByWorkOrderArgs, 'workOrderId'>>;
  queryProperties?: Resolver<Maybe<Array<ResolversTypes['Property']>>, ParentType, ContextType>;
  queryPropertyById?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<QueryQueryPropertyByIdArgs, 'propertyId'>>;
  queryThumbtackReviews?: Resolver<Maybe<Array<ResolversTypes['ThumbtackReview']>>, ParentType, ContextType>;
  queryWorkOrderById?: Resolver<ResolversTypes['WorkOrder'], ParentType, ContextType, RequireFields<QueryQueryWorkOrderByIdArgs, 'workOrderId'>>;
  queryWorkOrders?: Resolver<Maybe<Array<ResolversTypes['WorkOrder']>>, ParentType, ContextType>;
  queryWorkOrdersByCustomer?: Resolver<Maybe<Array<ResolversTypes['WorkOrder']>>, ParentType, ContextType, RequireFields<QueryQueryWorkOrdersByCustomerArgs, 'customerId'>>;
  queryWorkOrdersByProperty?: Resolver<Maybe<Array<ResolversTypes['WorkOrder']>>, ParentType, ContextType, RequireFields<QueryQueryWorkOrdersByPropertyArgs, 'propertyId'>>;
};

export type ScheduleServiceMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduleServiceMessage'] = ResolversParentTypes['ScheduleServiceMessage']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThumbtackReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThumbtackReview'] = ResolversParentTypes['ThumbtackReview']> = {
  author?: Resolver<ResolversTypes['ThumbtackReviewAuthor'], ParentType, ContextType>;
  datePublished?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewRating?: Resolver<ResolversTypes['ThumbtackReviewRating'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThumbtackReviewAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThumbtackReviewAuthor'] = ResolversParentTypes['ThumbtackReviewAuthor']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThumbtackReviewRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThumbtackReviewRating'] = ResolversParentTypes['ThumbtackReviewRating']> = {
  ratingValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkOrder'] = ResolversParentTypes['WorkOrder']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  charged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  completedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoices?: Resolver<Array<Maybe<ResolversTypes['Invoice']>>, ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes['Property'], ParentType, ContextType>;
  quote?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Email_String_NotNull_MaxLength_255_Format_EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['email_String_NotNull_maxLength_255_format_email'], any> {
  name: 'email_String_NotNull_maxLength_255_format_email';
}

export interface FamilyName_String_NotNull_MinLength_1_MaxLength_20ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['familyName_String_NotNull_minLength_1_maxLength_20'], any> {
  name: 'familyName_String_NotNull_minLength_1_maxLength_20';
}

export interface GivenName_String_NotNull_MinLength_1_MaxLength_20ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['givenName_String_NotNull_minLength_1_maxLength_20'], any> {
  name: 'givenName_String_NotNull_minLength_1_maxLength_20';
}

export type ImageObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['imageObject'] = ResolversParentTypes['imageObject']> = {
  imgKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  original?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalAlt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailAlt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Location_String_NotNull_MinLength_1_MaxLength_10ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['location_String_NotNull_minLength_1_maxLength_10'], any> {
  name: 'location_String_NotNull_minLength_1_maxLength_10';
}

export interface Message_String_NotNull_MinLength_10_MaxLength_255_Pattern_AZaz09_ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_'], any> {
  name: 'message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_';
}

export interface Service_String_NotNull_MinLength_1_MaxLength_40ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['service_String_NotNull_minLength_1_maxLength_40'], any> {
  name: 'service_String_NotNull_minLength_1_maxLength_40';
}

export interface Tel_String_NotNull_MinLength_1_MaxLength_12ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['tel_String_NotNull_minLength_1_maxLength_12'], any> {
  name: 'tel_String_NotNull_minLength_1_maxLength_12';
}

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  DeleteS3ObjectResponse?: DeleteS3ObjectResponseResolvers<ContextType>;
  Invoice?: InvoiceResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Property?: PropertyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ScheduleServiceMessage?: ScheduleServiceMessageResolvers<ContextType>;
  ThumbtackReview?: ThumbtackReviewResolvers<ContextType>;
  ThumbtackReviewAuthor?: ThumbtackReviewAuthorResolvers<ContextType>;
  ThumbtackReviewRating?: ThumbtackReviewRatingResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WorkOrder?: WorkOrderResolvers<ContextType>;
  email_String_NotNull_maxLength_255_format_email?: GraphQLScalarType;
  familyName_String_NotNull_minLength_1_maxLength_20?: GraphQLScalarType;
  givenName_String_NotNull_minLength_1_maxLength_20?: GraphQLScalarType;
  imageObject?: ImageObjectResolvers<ContextType>;
  location_String_NotNull_minLength_1_maxLength_10?: GraphQLScalarType;
  message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_?: GraphQLScalarType;
  service_String_NotNull_minLength_1_maxLength_40?: GraphQLScalarType;
  tel_String_NotNull_minLength_1_maxLength_12?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
};
