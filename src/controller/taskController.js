import Task from "../model/taskModel.js";

// Create a new Project
export const create = async (req, res) => {
    try {
      const newTask = new Task(req.body);
      const task = await newTask.save();
      res.status(201).json({ success: true, message: 'Task created successfully', task });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error creating task', error: error.message });
    }
  };
// Get all Projects
export const index = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.json({ success: true, message: 'Tasks retrieved successfully', tasks });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching tasks', error: error.message });
    }
  };

// Get a Project by ID
export const show = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
  
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
      }
  
      res.json({ success: true, message: 'Task retrieved successfully', task });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching task', error: error.message });
    }
  };

// Update a Project by ID
export const update = async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
      }
  
      res.json({ success: true, message: 'Task updated successfully', task });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error updating task', error: error.message });
    }
  };

// Delete a Project by ID
export const destroy = async (req, res) => {
    try {
      const task = await Task.findByIdAndRemove(req.params.id);
  
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
      }
  
      res.json({ success: true, message: 'Task deleted successfully', task });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error deleting task', error: error.message });
    }
  };