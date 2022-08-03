using Microsoft.AspNetCore.Mvc;

namespace sun_rise_backend.Models
{
    public record Dj
    {
        public Guid id { get; init; }
        public DateTimeOffset dateAdded { get; init; }
        public DateTimeOffset dateModified { get; set; }
        public string Name { get; set; }
        public string? ImageUrl { get; set; }
        public string[]? Songs { get; set; }
    }
}
