Lab 3: Using EF Core CLI to Create and Apply Migrations
===========================================================

Steps (run these inside the RetailInventory project folder):

1. Install the EF Core CLI tool (only needed once per machine):
       dotnet tool install --global dotnet-ef

   If you get "command already exists" that's fine, it's already installed.
   Verify with:
       dotnet ef --version

2. Create the initial migration:
       dotnet ef migrations add InitialCreate

   This generates a "Migrations" folder containing C# files that describe
   the schema (Products and Categories tables) based on your DbContext
   and model classes from Lab 2.

3. Apply the migration to actually create the database:
       dotnet ef database update

   This connects to your SQLEXPRESS instance using the connection string
   in AppDbContext.cs and creates the RetailInventoryDb database with
   the Products and Categories tables.

4. Verify in SQL Server Management Studio (SSMS):
   - Open SSMS, connect to server name: localhost\SQLEXPRESS
   - Use Windows Authentication
   - Expand Databases > RetailInventoryDb > Tables
   - Confirm "Products" and "Categories" tables exist

Screenshot: the migrations add / database update terminal output, and the
SSMS table list.

Troubleshooting:
- If "dotnet ef" is not recognized, make sure you also ran:
      dotnet add package Microsoft.EntityFrameworkCore.Design
  (from Lab 1) inside this project, and that the global tool's PATH
  entry was picked up (may need a new terminal window after install).
