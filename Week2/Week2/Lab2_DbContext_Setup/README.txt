Lab 2: Setting Up the Database Context for a Retail Store
=============================================================

Files:
- Models.cs      -> put in a "Models" folder inside RetailInventory
- AppDbContext.cs -> put directly inside RetailInventory (project root)

Steps:
1. Inside your RetailInventory project (created in Lab 1), create a folder
   named "Models".
2. Copy Models.cs into Models/.
3. Copy AppDbContext.cs into the project root (same level as Program.cs).
4. This uses your installed SQL Server Express instance (SQLEXPRESS) with
   Windows/Trusted authentication - matches the connection string shown
   after your SQL Server Express install completed.
5. Build the project to confirm no errors:
       dotnet build
   Screenshot a successful "Build succeeded" output.
