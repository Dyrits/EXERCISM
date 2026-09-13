using System;

public static class LogAnalysis 
{
    public static string SubstringAfter(this string source, string delimiter)
    {
        return source.Substring(source.IndexOf(delimiter) + delimiter.Length);
    }
    
    public static string SubstringBetween(this string source, string start, string end)
    {
        var index = source.IndexOf(start) + start.Length;
        return source.Substring(index, source.IndexOf(end) - index);
    }
    
    public static string Message(this string log)
    {
        return log.SubstringAfter(": ");
    }
    
    public static string LogLevel(this string log)
    {
        return log.SubstringBetween("[", "]");
    }
}