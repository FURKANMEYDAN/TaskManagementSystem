using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS policy for the React app
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .WithOrigins("http://localhost:5173") // Adjust this URL based on your React app's URL
            .AllowAnyMethod()
            .AllowAnyHeader());
});

// Add Authorization services
builder.Services.AddAuthorization();

// Add Controllers
builder.Services.AddControllers(); // This line is crucial for enabling controllers

// Retrieve the connection string from appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Register TaskDbContext with SQLite connection
builder.Services.AddDbContext<TaskDbContext>(options =>
    options.UseSqlite(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("AllowReactApp");

app.UseAuthorization(); // Make sure this is after UseRouting and before MapControllers

app.MapControllers(); // This maps the controllers to the endpoints

app.Run();
