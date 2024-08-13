using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

[Route("api/[controller]")]
[ApiController]

public class TaskController : ControllerBase

{
    private readonly TaskDbContext _context;
    public TaskController (TaskDbContext context)
    {
        _context = context;
    }
   
    [HttpGet]
    public async Task<IActionResult> GetTasks()
     {
        var tasks = await _context.Tasks.ToListAsync();
        return Ok(tasks);
     }

     [HttpGet("{id}")]
     public async Task<IActionResult> GetTask(int id) 
     {
        var task = await _context.Tasks.ToListAsync();
        if (task == null){
            return NotFound();
        }
        return Ok(task);
     }

     [HttpPost]
     public async Task<IActionResult> AddTask([FromBody] Task task){
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();
        return Ok(task);
     }
     [HttpPut("{id}")]
     public async Task<IActionResult> UpdateTask(int id, [FromBody] Task updatedTask){
       
        var task = await _context.Tasks.FindAsync(id);
        if(task == null){
            return NotFound();
        }
        task.Title = updatedTask.Title;
        task.Description = updatedTask.Description;
        task.IsComplete = updatedTask.IsComplete;
        await _context.SaveChangesAsync();
        return Ok(task);
     }
     [HttpDelete("{id}")]
     public async Task<IActionResult> DeleteTask(int id)
            {
                var task = await _context.Tasks.FindAsync(id);
                    if(task==null)
                    {
                        return NotFound();
                    }
                    _context.Tasks.Remove(task);
                    await _context.SaveChangesAsync();
                    return Ok();
                
            }
}