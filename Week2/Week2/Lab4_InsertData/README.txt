Lab 4: Inserting Initial Data into the Database
===================================================

Steps:
1. Open Program.cs in your RetailInventory project.
2. Replace its contents with Program.cs from this folder (inserts two
   categories: Electronics, Groceries, and two products: Laptop, Rice Bag).
3. Run the app:
       dotnet run
4. You should see: "Data inserted successfully." in the console.
5. Verify in SSMS:
   - Open the Categories table -> should show Electronics, Groceries
   - Open the Products table -> should show Laptop (75000), Rice Bag (1200)

Screenshot: terminal output after "dotnet run", and the SSMS table data
for both Categories and Products.

Note: Running this Program.cs a second time will insert duplicate rows
since there's no check for existing data yet (that's expected for this
lab - Lab 9 in the full course covers a cleaner way to seed data via
migrations).
