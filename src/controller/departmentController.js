import Department from "../model/departmentModel.js";

// Get all departments
export const index = async (req, res) => {
  try {
    const departments = await Department.find({});
    res.status(200).json({ message: 'Departments retrieved successfully', departments });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving departments', error });
  }
};

// Get a department by ID
export const show = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json({ message: 'Department retrieved successfully', department });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving department', error });
  }
};

// Create a new department
export const create = async (req, res) => {
  const newDepartment = new Department(req.body);
  try {
    const department = await newDepartment.save();
    res.status(201).json({ message: 'Department created successfully', department });
  } catch (error) {
    res.status(500).json({ message: 'Error creating department', error });
  }
};

// Update a department by ID
export const update = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json({ message: 'Department updated successfully', department });
  } catch (error) {
    res.status(500).json({ message: 'Error updating department', error });
  }
};

// Delete a department by ID
export const destroy = async (req, res) => {
  try {
    const department = await Department.findByIdAndRemove(req.params.id);

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json({ message: 'Department deleted successfully', department });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting department', error });
  }
};
