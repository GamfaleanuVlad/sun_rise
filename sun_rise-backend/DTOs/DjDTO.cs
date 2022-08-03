using Microsoft.AspNetCore.Mvc;

namespace sun_rise_backend.DTOs
{
    public record DjDTO
    {
        public Guid id { get; init; }
        public string Name { get; set; }
        public string? ImageUrl { get; set; }
        public string[]? Songs { get; set; }
    }
}
