import { db } from '../db.js';

export const addPackage = async (req, res) => {
  const { p_name, p_description } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const [result] = await db.promise().query('INSERT INTO packages (p_name, p_description, image) VALUES (?,  ?, ?)', [p_name, p_description, image]);

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Package created successfully' });
    } else {
      res.status(500).json({ error: 'Failed to create package' });
    }
  } catch (error) {
    console.error('Error while creating package:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPackage = async (req, res) => {
  try {
    const sql = 'SELECT p_name, p_description, image FROM packages';

    db.query(sql, (err, result) => {
      if (err) {
        return res.json("Error");
      } else if (result.length === 0) {
        return res.status(404).json({ error: 'Package not found' });
      } else {
        return res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error('Error while fetching package:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const showPackages = async (req, res) => {
  try {
    
    const query = 'SELECT package_id, p_name, p_description, image FROM packages';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching units data:', err);
        res.status(500).json({ error: 'An error occurred while fetching packages data' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
   
    console.error('Error in getPackages:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};


export const deletePackage = async (req, res) => {
  try {
    const sql = 'DELETE FROM packages WHERE package_id=?';
    const package_id = req.params.package_id;

    db.query(sql, [package_id], (err, data) => {
      if (err) {
        console.error('Error deleting packages:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (data.affectedRows === 0) {
        return res.status(404).json({ error: 'Package not found' });
      }

      return res.status(200).json({ message: 'Package deleted successfully' });
    });
  } catch (error) {
    console.error('Error deleting package:', error);
    return res.status(500).json({ error: 'Internal server error' });
}
};