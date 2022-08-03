using Microsoft.AspNetCore.Mvc;

namespace sun_rise_backend.Models
{
    public record Dj
    {
        public long id { get; init; }
        public string Name { get; set; } = String.Empty;
        public string Bio { get; set; } = String.Empty;
    }
}
