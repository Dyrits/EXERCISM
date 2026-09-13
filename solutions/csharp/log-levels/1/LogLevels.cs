using System;
using System.Text.RegularExpressions;


static class LogLine
{
public static string Message(string logLine)
    {
        return Regex.Replace(logLine, @"\[.*?\]:", String.Empty).Trim();
    }

    public static string LogLevel(string logLine)
    {
        return Regex.Match(logLine, @"\[(.*?)\]:").Groups[1].Value.ToLower();
    }

    public static string Reformat(string logLine)
    {
        return $"{LogLine.Message(logLine)} ({LogLine.LogLevel(logLine)})";
    }
}
