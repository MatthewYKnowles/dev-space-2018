describe('Rental', function () {
  let stuff;

  beforeEach(function () {
    stuff = new Rental();
  });


  it('should return the proper result', function () {
    let properResult =
      'Rental Record for martin\n' +
      '\tRan\t5\n' +
      '\tTrois Couleurs: Bleu\t2\n' +
      'Amount owed is 7\n' +
      'You earned 2 frequent renter points\n';

    let customer = {
      name: 'martin',
      rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 1 }]
    };

    let actualResult = stuff.statement(customer);
    expect(actualResult).toEqual(properResult);
  });

  xit('should return the proper result', function () {
    var properResult =
    'Rental Record for martin\n' +
    '\tCars 2\t6\n' +
    '\tCars 2\t1.5\n' +
    'Amount owed is 7.5\n' +
    'You earned 2 frequent renter points\n';

    var customer = {
      name: 'martin',
      rentals: [{ movieID: 'F003', days: 5 }, { movieID: 'F003', days: 1 }]
    };

    var actualResult = stuff.statement(customer)
    expect(actualResult).toEqual(properResult);
  });

  xit('should return the proper result', function () {
    var properResult =
    'Rental Record for martin\n' +
    '\tAvengers\t15\n' +
    '\tAvengers\t3\n' +
    'Amount owed is 18\n' +
    'You earned 3 frequent renter points\n';

    var customer = {
      name: 'martin',
      rentals: [{ movieID: 'F004', days: 5 }, { movieID: 'F004', days: 1 }]
    };

    var actualResult = stuff.statement(customer)
    expect(actualResult).toEqual(properResult);
  });
});
