using Microsoft.EntityFrameworkCore;

public class TaskDbContext : DbContext
{
    public DbSet<Task> Tasks { get; set; }

    public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // Seed data or other configurations can be added here.
    }
}
