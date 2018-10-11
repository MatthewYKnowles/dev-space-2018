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
});
