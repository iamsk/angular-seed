describe("pluralize", function() {

   it("adds an s if the number is 0", function() {
     expect(pluralize('cat', 0)).toBe('cats');
   });
   it("don't add an s if the number is 1", function() {
     expect(pluralize('cat', 1)).toBe('cat');
   });
   it("adds an s if the number is 2", function() {
     expect(pluralize('cat', 2)).toBe('cats');
   });

 });
