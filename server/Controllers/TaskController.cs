using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[Route("api/[controller]")]
[ApiController]

public class TaskController : ControllerBase{
    private static readonly List<Task> Tasks = new List<Task>();

    [HttpGet]
    public IActionResult GetTasks()
     {
        return Ok(Tasks);
     }
     [HttpPost]
     public IActionResult AddTask([FromBody] Task task){
        task.Id = Tasks.Count+1;
        Tasks.Add(task);
        return Ok(task);
     }
     [HttpDelete("{id}")]
     public IActionResult DeleteTask(int id)
            {
                var task = Tasks.FirstOrDefault(x => x.Id ==id);
                    if(task==null)
                    {
                        return NotFound();
                    }

                    Tasks.Remove(task);
                    return Ok();
                
            }
}