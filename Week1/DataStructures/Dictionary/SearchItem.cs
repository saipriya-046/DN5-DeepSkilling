public class SearchItem
{
    public static void Run()
    {
        Dictionary<int, string> students = new Dictionary<int, string>();

        students.Add(101, "Salma");
        students.Add(102, "Charitha");

        if (students.ContainsKey(101))
            Console.WriteLine(students[101]);
        else
            Console.WriteLine("Not Found");
    }
}