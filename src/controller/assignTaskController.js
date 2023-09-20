import AssignTask from "../model/assignTaskModel.js";

// Create a new assignTask
export const create = async (req, res) => {
  const newAssignTask = new AssignTask(req.body);
  try {
    const assignTask = await newAssignTask.save();
    res.status(201).json({ message: 'Assign_task created successfully', assignTask });
  } catch (error) {
    res.status(500).json({ error: 'Error creating assign_task', details: error });
  }
};

// Get all assignTasks
export const index =  async (req, res) => {
  try {
    const assignTasks = await AssignTask.find({});
    res.status(200).json({ message: 'Assign_tasks retrieved successfully', assignTasks });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving assign_tasks', details: error });
  }
};

// Get an assignTask by ID
export const show = async (req, res) => {
  try {
    const assignTask = await AssignTask.findById(req.params.id);
    if (!assignTask) {
      return res.status(404).json({ message: 'Assign_task not found' });
    }
    res.status(200).json({ message: 'Assign_task retrieved successfully', assignTask });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving assign_task', details: error });
  }
};

// Update an assignTask by ID
export const update = async (req, res) => {
  try {
    const assignTask = await AssignTask.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!assignTask) {
      return res.status(404).json({ message: 'Assign_task not found' });
    }
    res.status(200).json({ message: 'Assign_task updated successfully', assignTask });
  } catch (error) {
    res.status(500).json({ error: 'Error updating assign_task', details: error });
  }
};

// Delete an assignTask by ID
export const destroy = async (req, res) => {
  try {
    const assignTask = await AssignTask.findByIdAndRemove(req.params.id);
    if (!assignTask) {
      return res.status(404).json({ message: 'Assign_task not found' });
    }
    res.status(200).json({ message: 'Assign_task deleted successfully', assignTask });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting assign_task', details: error });
  }
};
