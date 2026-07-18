public class AddItem
{
    public static void Run()
    {
        Dictionary<int, string> students = new Dictionary<int, string>();

        students.Add(101, "Salma");
        students.Add(102, "Charitha");
        students.Add(103, "Bhargavi");

        foreach (var student in students)
        {
            Console.WriteLine($"{student.Key} : {student.Value}");
        }
    }
}