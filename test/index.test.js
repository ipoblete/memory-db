const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
    // run before each test
  });

  it('creates an object in the database', () => {
    const cat = { name: 'felix' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('felix');
  });

  it('can find an object by id', () => {
    const cat = { name: 'felix' };
    const createdCat = db.create(cat);

    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findById('notArealId');
    }).toThrowError('No object with _id notArealId');
  });

  it('can return a list of all objects', () => {
    
  });

  beforeAll(() => {
    // once before the first test runs
    // * starting our database
    // * getting credentials
  });

  afterEach(() => {
    // run after each test (it)
    // * clean up between tests
  });

  afterAll(() => {
    // one after the last test runs
    // * deleting files that were created during 
    // * shutdown db
  });
});