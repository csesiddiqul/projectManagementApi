import Project from "../model/projectModel.js";

// Create a new Project
export const create = async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json({ message: 'Project created successfully', project: savedProject });
  } catch (error) {
    res.status(500).json({ error: 'Could not create project', details: error.message });
  }
};

// Get all Projects
export const index = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ message: 'Projects retrieved successfully', projects });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve projects', details: error.message });
  }
};

// Get a Project by ID
export const show = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project retrieved successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve project', details: error.message });
  }
};

// Update a Project by ID
export const update = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Could not update project', details: error.message });
  }
};

// Delete a Project by ID
export const destroy = async (req, res) => {
  try {
    const project = await Project.findByIdAndRemove(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete project', details: error.message });
  }
};
