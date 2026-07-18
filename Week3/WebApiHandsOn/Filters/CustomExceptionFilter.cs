using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApiHandsOn.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            string message = context.Exception.Message;
            System.IO.File.AppendAllText("exceptionlog.txt",
                $"{DateTime.Now}: {message}{Environment.NewLine}");

            context.Result = new ObjectResult(new { error = message })
            {
                StatusCode = 500
            };
            context.ExceptionHandled = true;
        }
    }
}
