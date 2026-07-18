# Week 4 – Authentication and Authorization in ASP.NET Core Web API Microservices

Hands-on exercises implementing JWT (JSON Web Token) authentication and authorization
in an ASP.NET Core Web API microservice.

## Question 1: Implement JWT Authentication in ASP.NET Core Web API

**Scenario:** You are building a microservice that requires secure login. You need to
implement JWT-based authentication.

**Steps:**
1. Create a new ASP.NET Core Web API project.
2. Add a `User` model and a login endpoint.
3. Generate a JWT token upon successful login.
4. Secure an endpoint using `[Authorize]`.

**Files:** `appsettings.json`, `Program.cs`, `Models/LoginModel.cs`, `Controllers/AuthController.cs`

Install the required NuGet package first:
```
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

---

## Question 2: Secure an API Endpoint Using JWT

**Scenario:** You want to restrict access to a sensitive endpoint using JWT authentication.

**Steps:**
1. Add `[Authorize]` to a controller.
2. Test access with and without a valid token.

**Files:** `Controllers/SecureController.cs`

Without a valid `Authorization: Bearer <token>` header, requests to `GET /api/secure/data`
return `401 Unauthorized`. With a valid token issued from `/api/auth/login`, the request
returns `200 OK` with the protected payload.

---

## Question 3: Add Role-Based Authorization

**Scenario:** You want to allow only users with the "Admin" role to access certain endpoints.

**Steps:**
1. Add roles to JWT claims.
2. Use `[Authorize(Roles = "Admin")]`.

**Files:** `Controllers/AuthController.cs` (role claim added), `Controllers/AdminController.cs`

---

## Question 4: Validate JWT Token Expiry and Handle Unauthorized Access

**Scenario:** You want to handle expired or invalid tokens gracefully.

**Steps:**
1. Configure JWT bearer events.
2. Return custom messages for unauthorized access.

**Files:** `Program.cs` (`JwtBearerEvents` configured in `AddJwtBearer`)

An expired token results in a response carrying a `Token-Expired: true` header, and any
unauthenticated request receives a clean `401` response with a custom JSON error message.

## Running the project

```
dotnet restore
dotnet run
```

Then POST to `/api/auth/login` with a username/password to receive a token, and use it
as a Bearer token when calling `/api/secure/data` or `/api/admin/dashboard`.
