Lab 1: Understanding ORM with a Retail Inventory System
==========================================================

Concept notes (for your submission write-up):

1. What is ORM?
   ORM (Object-Relational Mapping) lets you work with a database using C#
   classes and objects instead of writing raw SQL. EF Core maps each class
   to a table, and each property to a column, generating SQL behind the
   scenes for you.
   Benefits: Productivity (less boilerplate SQL), maintainability (schema
   changes tracked via migrations), and abstraction (same C# code can
   target different databases with different providers).

2. EF Core vs EF Framework (EF6):
   - EF Core: cross-platform (Windows/Linux/Mac), lightweight, supports
     LINQ, async queries, compiled queries, and is actively developed.
   - EF Framework (EF6): Windows-only, more mature, but heavier and less
     flexible; mainly used in legacy .NET Framework apps.

3. EF Core 8.0 Features:
   - JSON column mapping (store/query JSON columns natively).
   - Improved performance via compiled models.
   - Interceptors and better bulk operation support.

Setup commands:
    dotnet new console -n RetailInventory
    cd RetailInventory
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    dotnet add package Microsoft.EntityFrameworkCore.Design

Run "dotnet --version" first to confirm the SDK is installed, then run the
four commands above in order. Screenshot the terminal after each package
install succeeds (look for "Restored ... in X sec").
