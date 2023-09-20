// Import the mongoose library
import mongoose from "mongoose";
// Define the schema for the "AssignTask" collection
const assignTaskSchema = new mongoose.Schema({
  // Employee and assignment details
  employ_id: String,           // Employee's ID
  assign_time: Date,           // Time when the task was assigned
  task_id: String,             // Task ID
  working_model: String,       // Working model or approach
  project_id: String,          // Project ID associated with the task
  givein_id: String,           // ID of the person who gave the task
  complete_time: Date,         // Time when the task was completed
  ass_submit_time: Date,       // Time when the assignment was submitted
  
  // Progress and status
  working_progress: String,    // Progress of the work
  count_persen: Number,        // Percentage completion of the task
  assign_task_percent: Number, // Percentage assigned for the task
  status: String,              // Current status of the task
  
  // Priority and timing
  priority: String,            // Priority level of the task
  deadline: Date,              // Deadline for the task
  
  // Task details
  description: String,         // Description of the task
  assigned_by: String,         // Name of the person who assigned the task
  assigned_to: String,         // Name of the person the task is assigned to
  comments: String,            // Comments or notes related to the task
  attachments: [String],      // Array of attachment file names
  
  // Time tracking
  estimated_hours: Number,     // Estimated hours to complete the task
  actual_hours: Number,        // Actual hours spent on the task
  start_time: Date,            // Start time of the task
  due_date: Date,              // Due date for the task
  
  // Completion and categorization
  completion_notes: String,    // Notes on task completion
  task_type: String,           // Type of task
  task_status: String,         // Status of the task
  task_category: String,       // Category or classification of the task
  
  // Location (if applicable)
  location: String,            // Location associated with the task
});

// Create and export the "AssignTask" model using the defined schema

const AssignTask = mongoose.model('AssignTask', assignTaskSchema);
export default AssignTask;
