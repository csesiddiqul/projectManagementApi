// Import the mongoose library
import mongoose from 'mongoose';

// Define the schema for the "Task" collection
const taskSchema = new mongoose.Schema({
  // Task details
  task_title: String,                // Title of the task
  department_id: String,             // ID of the department associated with the task
  task_time: Number,                // Estimated time required for the task (in hours)
  project_id: String,               // ID of the project to which the task belongs
  description: String,              // Description or details of the task
  end_date: Date,                   // End date or deadline for the task
  priority: String,                // Priority level of the task
  start_date: Date,                 // Start date for the task
  status: String,                   // Current status of the task
  
  // Task assignment and tracking
  maker_id: String,                // ID of the person who created the task
  working_model: String,           // Working model or approach for the task
  assign_status: String,           // Assignment status (e.g., "Assigned" or "Unassigned")
  task_percentage: Number,         // Percentage completion of the task
  progress: Number,                // Progress of the task
  complete_date: Date,             // Date when the task was completed
  assigned_to: String,             // ID or name of the person to whom the task is assigned
  due_time: Date,                  // Due time for the task (if needed)
  
  // Task related data
  comments: [String],              // Array of comments related to the task
  attachments: [String],           // Array of file attachments associated with the task
  tags_or_labels: [String],        // Array of tags or labels for categorizing the task
  dependencies: [String],          // Array of task dependencies
  reminders: [Date],              // Array of reminder dates for the task
  
  // Time and dates
  estimated_duration: Number,      // Estimated duration of the task (in hours)
  created_at: { type: Date, default: Date.now },  // Date when the task was created
  last_updated_at: Date,           // Date of the last update to the task
  
  // Task completion and review
  completed_by: String,            // ID or name of the person who completed the task
  review_status: String,           // Review status (e.g., "Pending" or "Reviewed")
  approval_status: String,        // Approval status (e.g., "Pending" or "Approved")
  task_type: String,               // Type or category of the task
  project_manager: String,        // Project manager associated with the task
});

// Create and export the "Task" model using the defined schema
const Task = mongoose.model('Task', taskSchema);
export default Task;