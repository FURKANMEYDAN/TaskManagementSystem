using Microsoft.EntityFrameworkCore;


public class TaskDbContext : DbContext

{
    public DbSet<Task> Tasks { get; set; }
    public TaskDbContext (DbContextOptions<TaskDbContext> options): base(options)
    {
        
    }


}