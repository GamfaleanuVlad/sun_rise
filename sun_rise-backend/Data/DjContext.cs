using Microsoft.EntityFrameworkCore;
using sun_rise_backend.DTOs;

namespace sun_rise_backend.Data
{
    public class DjContext : DbContext
    {
        public DjContext(DbContextOptions<DjContext> options)
            :base(options){}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.UseSerialColumns();
        }

        public DbSet<DjDTO> Djs { get; set; }
    }

}
