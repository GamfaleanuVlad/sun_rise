using sun_rise_backend.Models;
using sun_rise_backend.DTOs;

namespace sun_rise_backend
{
    public static class Extensions
    {
        public static DjDTO ToDTO(this Dj self)
        {
            return new DjDTO
            {
                id = self.id,
                Bio = self.Bio,
                Name = self.Name
            };
        }
    }
}

