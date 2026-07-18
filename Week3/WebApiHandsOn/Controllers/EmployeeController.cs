using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApiHandsOn.Models;
using WebApiHandsOn.Filters;
using Microsoft.AspNetCore.Authorization;

namespace WebApiHandsOn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "POC")]
    [TypeFilter(typeof(CustomExceptionFilter))]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees;

        public EmployeeController()
        {
            if (employees == null)
            {
                employees = GetStandardEmployeeList();
            }
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1, Name = "John", Salary = 50000, Permanent = true,
                    Department = new Department { Id = 1, Name = "IT" },
                    Skills = new List<Skill> { new Skill { Id = 1, Name = "C#" } },
                    DateOfBirth = new DateTime(1990, 1, 1)
                },
                new Employee
                {
                    Id = 2, Name = "Jane", Salary = 60000, Permanent = false,
                    Department = new Department { Id = 2, Name = "HR" },
                    Skills = new List<Skill> { new Skill { Id = 2, Name = "Recruitment" } },
                    DateOfBirth = new DateTime(1992, 5, 10)
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(500)]
        public ActionResult<List<Employee>> Get()
        {
            // throw new Exception("Test exception"); // uncomment to test CustomExceptionFilter
            return employees;
        }

        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee emp)
        {
            employees.Add(emp);
            return CreatedAtAction(nameof(Get), emp);
        }
        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee emp)
        {
            if (id <= 0)
                return BadRequest("Invalid employee id");

            var existing = employees.FirstOrDefault(e => e.Id == id);
            if (existing == null)
                return BadRequest("Invalid employee id");

            existing.Name = emp.Name;
            existing.Salary = emp.Salary;
            existing.Permanent = emp.Permanent;
            existing.Department = emp.Department;
            existing.Skills = emp.Skills;
            existing.DateOfBirth = emp.DateOfBirth;

            return employees.Where(e => e.Id == id).ToList().FirstOrDefault();
        }
    }
}
