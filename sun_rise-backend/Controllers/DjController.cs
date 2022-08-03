using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sun_rise_backend.DTOs;
using sun_rise_backend.Data;

namespace sun_rise_backend.Controllers;

[ApiController]
public class DjController : ControllerBase
{

    private readonly DjContext _context;
    public DjController(DjContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("djs")]
    public ActionResult<IEnumerable<DjDTO>> GetDjs()
    {
        return Ok(_context.Djs.ToList());
    }
    [HttpGet]
    [Route("dj/{id}")]
    public ActionResult<DjDTO> GetDj(string id)
    {
        var dj = _context.Djs.First(d => d.id.ToString() == id);
        return dj != null ? Ok(dj) : NotFound();
    }

    [HttpPost]
    [Route("dj")]
    public async Task<ActionResult<DjDTO>> PostDj(DjDTO dj)
    {
        var added = _context.Djs.Add(dj);
       await  _context.SaveChangesAsync();

        return Ok(added.Entity);
    }

    [HttpPut]
    [Route("dj/{id}")]
    public async Task<ActionResult<DjDTO>> PutDj(string id, DjDTO dj)
    {
        if (id != dj.id.ToString())
        {
            return BadRequest();
        }
        if (!DjItemExists(id))
        {
            return NotFound();
        }

        _context.Entry(dj).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            throw;
        }

        return NoContent();
    }

    [HttpDelete]
    [Route("dj/{id}")]
    public async Task<IActionResult> DeleteTodoItem(string id)
    {
        var dj = _context.Djs.First(d => d.id.ToString() == id);

        if (dj == null)
        {
            return NotFound();
        }

        _context.Djs.Remove(dj);
        await _context.SaveChangesAsync();

        return NoContent();
    }


    #region  Private Methods
    private bool DjItemExists(string id)
    {
        return _context.Djs.Any(e => e.id.ToString() == id);
    }
    #endregion
}
