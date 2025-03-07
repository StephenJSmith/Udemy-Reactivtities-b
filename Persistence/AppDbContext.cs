using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
  public class AppDbContext(DbContextOptions<AppDbContext> options) : IdentityDbContext<User>(options)
  {
    public required DbSet<Activity> Activities { get; set; }
  }
}
