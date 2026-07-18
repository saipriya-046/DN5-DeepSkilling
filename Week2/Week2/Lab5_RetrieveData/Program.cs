using Microsoft.EntityFrameworkCore;
using RetailInventory;

using var context = new AppDbContext();

// 1. Retrieve all products
var products = await context.Products.ToListAsync();
Console.WriteLine("All products:");
foreach (var p in products)
    Console.WriteLine($"{p.Name} - Rs.{p.Price}");

// 2. Find by ID
var product = await context.Products.FindAsync(1);
Console.WriteLine($"\nFound by Id=1: {product?.Name}");

// 3. FirstOrDefault with condition
var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
Console.WriteLine($"First product over Rs.50000: {expensive?.Name}");
