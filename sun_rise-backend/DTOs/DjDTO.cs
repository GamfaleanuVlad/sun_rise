using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace sun_rise_backend.DTOs
{
    public record DjDTO
    {   
        public long id { get; init; }
        public string Name { get; set; } = String.Empty;
        public string Bio { get; set; } = String.Empty;
    }
}
