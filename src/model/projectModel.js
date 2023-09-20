import mongoose from 'mongoose';
const projectSchema  = new mongoose.Schema(
    {
        // Project details
        project_name: String,          // Name of the project
        percentage: Number,            // Percentage completion of the project
        start_date: Date,              // Start date of the project
        end_date: Date,                // End date of the project
        working_time: String,          // Working hours or schedule
        project_des: String,           // Project description or summary
        
        // Identifiers
        maker_id: String,              // ID of the person who created the project
        pro_file: String,              // File associated with the project (if any)
        
        // Status and progress
        status: String,                // Current status of the project 1 = Not Started , 2 = new assignment, 3 =On going , 4 = Completed
        percent_count_p: Number,       // Percentage count for project progress
        
        // Project management
        project_manager: String,       // Project manager's name
        client_name: String,           // Name of the client
        
        // Financial details
        budget: Number,                // Budget allocated for the project
        expenses: Number,              // Expenses incurred for the project
        
        // Priority and other details
        priority: String,              // Priority level of the project
        milestones: String,            // Milestones or key achievements
        team_members: [String],       // Array of team members' names
        department: String,            // Department or division associated with the project
        location: String,              // Project location
        notes: String,                 // Additional notes or comments
        
        // Dependencies and categorization
        dependencies: String,          // Project dependencies
        tags_or_categories: [String],  // Array of tags or categories
        
        // Completion and approval
        completed_date: Date,          // Date when the project was completed
        approval_status: String,       // Approval status of the project
        project_code: String,          // Unique code for the project
      }
);

// Create a model using the schema
const Project = mongoose.model('Project', projectSchema);

export default Project;
