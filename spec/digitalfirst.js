
describe('To test class customer', () => {
    let cust = null;
    it('should check name is of valid format', () => {
    const cust = new customer("Gowsalya");
     
    expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
     
     });
    it('should check whether name has min 5 characters', () => {
    const cust = new customer("Gowsalya");
    expect(cust.name.length).toBe(8);
     
     });
     it('should check if the bill date is not more than amonth',()=>{
         const cust=new customer("Gowsalya","gowsalya98@gmail.com","02/10/2020","9003245609","900");
        expect(cust.phone.length).toBe(10)
     })
    
    });