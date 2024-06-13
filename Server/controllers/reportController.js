import { db } from "../db.js";



export const getTotalBuying = async (req, res) => {
    try {
      const [results] = await db.promise().query(
        `SELECT 
          su.date AS buying_date,
          s.part_id,
          s.name AS part_name,
          su.quantity
        FROM 
          stock_update su
        JOIN 
          stock s ON su.part_id = s.part_id
        ORDER BY 
          su.date DESC`
      );
  
      res.status(200).json(results);
    } catch (error) {
      console.error('Error while fetching total buying information:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };



  export const getTotalUsedParts = async (req, res) => {
    const { startDate, endDate } = req.query;
  
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate query parameters are required' });
    }
  
    try {
      const query = `
        SELECT ui.upart_id, s.name, 
        SUM(ui.u_quantity) as total_used 
        FROM used_items ui 
        JOIN stock s ON ui.upart_id = s.part_id 
        WHERE ui.ujobcard_id IN (SELECT jobcard_id FROM job_carddetails WHERE j_date BETWEEN ? AND ?)
        GROUP BY ui.upart_id, s.name;
      `;
  
      const [results] = await db.promise().query(query, [startDate, endDate]);
  
      res.status(200).json(results);
    } catch (error) {
      console.error('Error fetching total used parts:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
 