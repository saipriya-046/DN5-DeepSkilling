public class UpdateItem
{
    public static void Run()
    {
        Dictionary<int, string> students = new Dictionary<int, string>();

        students.Add(101, "Salma");

        students[101] = "Salma";

        Console.WriteLine(students[101]);
    }
}