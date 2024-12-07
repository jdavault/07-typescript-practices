// -- https://www.youtube.com/watch?v=eJ6R1knfsoc
// -------------------------------------------- Guards
type DelimitedDocument = {
  delimiter: string;
  data: string[][];
  separator: 'comma' | 'tab';
}
type PlainTextDocument = {
  delimiter: string;
  data: string[][];
}

const printDelimited = (doc: DelimitedDocument) => {
  /*** * */
}

const printPlainText = (doc: PlainTextDocument) => {
  /*** * */
}


const printDocument = (doc: DelimitedDocument | PlainTextDocument) => {
  //printDelimited(doc);
  if ('separator' in doc) {
    printDelimited(doc);
  }else{
    printPlainText(doc);
  }
}

// -------------------------------------------- Type Predicates
type LineItem = {
  description: string;
  quantity: number;
  price: number;
}

type FinalInvoice = {
  __typename: "FinalInvoice"
  insertedAt: string;
  invoiceNumber: string;
  customerId: number;
  approvedBy: number;
  lineItems: LineItem[];
}

type DraftInvoice = {
  __typename: "DraftInvoice"
  insertedAt: string;
  invoiceNumber?: string;
  customerId?: number;
  approvedBy?: number;
  lineItems: LineItem[];
}

export type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === "FinalInvoice";
}

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === "DraftInvoice";
}

const invoice: Invoice = {
  __typename: "DraftInvoice",
  insertedAt: "2021-09-01",
  lineItems: [
    { description: "Product 1", quantity: 1, price: 100 },
    { description: "Product 2", quantity: 2, price: 200 }
  ]
}

const status = isDraftInvoice(invoice);
console.log(status)

const status2 = isFinalInvoice(invoice);

// -------------------------------------------- Generics

export enum TaskType {
  feature = 'feature',
  bug = 'bug',
}

type Task<T extends TaskType = TaskType> = {
  name: string;
  type: T;
};

const whatever: Task = { name: 'Single Sign On', type: TaskType.feature };
whatever.type = TaskType.bug;  //either TaskType.feature or TaskType.bug

type FeatureTask = Task<TaskType.feature>;

const featureTask: FeatureTask = {
  name: 'Single Sign On',
  type: TaskType.feature,
};

featureTask.type = TaskType.bug; // invalid type for /FeatureTask

const invalid: FeatureTask = { name: "Single Sign On", type: TaskType.bug }; // invalid type for /FeatureTask


// -------------------------------------------- Extract Utility Function

type Trip = 
  | {
    origin: {
      uuid: string;
      city: string;
      state: string;
    }
  }
  | {
      originUuid: string;
    };

type TripWithOriginRef = Extract<Trip, { originUuid: string }>;

type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string }}>;

const tripOriginRef: TripWithOriginRef = { originUuid: "123"};

const tripOriginWhole: TripWithOriginWhole = { 
  origin: { 
    uuid: "123", 
    city: "New York", 
    state: "NY" 
  }
};

const hasOriginRef = (trip: Trip): trip is TripWithOriginRef => {
  return "originUuid" in trip;
}

const result = [tripOriginRef, tripOriginWhole].filter(hasOriginRef);

// -------------------------------------------- Conditional Types

type Diesel = {
  type: "diesel" | "bio" | "synthetic";
}

type Gasoline = {
  type: "hybrid" | "conventional";
}

type Bus = {
  engine: Diesel;
}

type Car = {
  engine: Gasoline;
}

type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;

type BusEngine = Engine<Bus>;

const busEngine: BusEngine = {
  type: "bio"
}

const carEngine: Engine<Car> = {
  type: "hybrid"
}

const invalid: Engine<Car> = {
  type: "bio"
}

// where never comes in handy

type Bicycle = {
  power: "limbs";
}

type NoEngine = Engine<Bicycle>; // resulting type is 'never'

const noEngine: NoEngine = { type: "limbs" };
// only 'never' can be assigned to 'never'

// -------------------------------------------- MOre ...Conditional Types

const Priority = {
  mustHave: "mustHave",
  shouldHave: "shouldHave",
  couldHave: "couldHave",
  wontHave: "wontHave"
} 

const backlog = {
  releases: [
    {
    name: "Sprint 1",
    epics: [
      {
        name: "Account Management",
        tasks: [
          { name: "Single Sign On", priority: Priority.mustHave }
        ]
      }
    ]
  }]
};

type UnArray<T> = T extends Array<infer U> ? U : T;

type BackLogReleaseType = typeof backlog["releases"]
type ReleaseType = UnArray<BackLogReleaseType>;

const releases: ReleaseType = {
  name: "Sprint 1",
  epics: [
    {
      name: "Account Management",
      tasks: [
        { name: "Single Sign On", priority: Priority.mustHave }
      ]
    }
  ]
};
console.log(release);

//--- Epics
type Epic = UnArray<ReleaseType["epics"]>;

const epics: Epic =       {
  name: "Account Management",
  tasks: [
    { name: "Single Sign On", priority: Priority.mustHave }
  ]
}
console.log(epics);

type EpicArray = ReleaseType["epics"];

const epicsArray: EpicArray = [{
  name: "Account Management",
  tasks: [
    { name: "Single Sign On", priority: Priority.mustHave }
  ]
}]


console.log(epicsArray);

// -------------------------------------------- Utility Functions
